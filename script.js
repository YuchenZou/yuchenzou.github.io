function createElement(tagName, className, textContent) {
  const element = document.createElement(tagName);

  if (className) {
    element.className = className;
  }

  if (textContent) {
    element.textContent = textContent;
  }

  return element;
}

const LANGUAGE_STORAGE_KEY = "yuchen-homepage-language";
const SUPPORTED_LANGUAGES = ["en", "zh"];
let currentLanguage = getInitialLanguage();
let navObserver = null;

function getInitialLanguage() {
  try {
    const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (SUPPORTED_LANGUAGES.includes(savedLanguage)) {
      return savedLanguage;
    }
  } catch (error) {
    // The page still works when storage is unavailable or disabled.
  }

  return "en";
}

function getMessages() {
  return siteTranslations[currentLanguage] || siteTranslations.en;
}

function getLocalizedItem(section, index, fallback) {
  return {
    ...fallback,
    ...(getMessages()[section]?.[index] || {}),
  };
}

function setTextContent(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
}

function createContactIcon(iconValue) {
  const icon = createElement("span", "contact-icon");

  if (iconValue === "wechat") {
    icon.classList.add("contact-icon-svg");
    icon.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.236 4.615c-4.008 0-7.236 2.642-7.236 5.94 0 1.898 1.066 3.562 2.726 4.652l-.73 2.52 2.74-1.377c.826.196 1.666.294 2.5.292.222 0 .443-.007.663-.022-.43-.725-.663-1.54-.663-2.396 0-2.856 2.596-5.176 5.796-5.176.356 0 .708.029 1.053.087-.606-2.681-3.424-4.52-6.849-4.52Zm-2.557 4.858c.48 0 .87.376.87.838s-.39.838-.87.838-.87-.375-.87-.838.39-.838.87-.838Zm5.115 0c.48 0 .87.376.87.838s-.39.838-.87.838-.87-.375-.87-.838.39-.838.87-.838Z"></path><path d="M16.124 10.237c-3.246 0-5.876 2.05-5.876 4.579 0 1.37.772 2.596 1.994 3.437l-.532 1.886 2.03-1.016c.776.185 1.574.279 2.375.279 3.245 0 5.876-2.05 5.876-4.58 0-2.528-2.63-4.585-5.876-4.585Zm-2.117 3.887c-.393 0-.713-.304-.713-.678 0-.376.32-.679.713-.679s.713.303.713.679c0 .374-.32.678-.713.678Zm4.212 0c-.393 0-.713-.304-.713-.678 0-.376.32-.679.713-.679s.713.303.713.679c0 .374-.32.678-.713.678Z"></path></svg>';
    return icon;
  }

  icon.textContent = iconValue;
  return icon;
}

function isExternalHref(href) {
  return /^(https?:|mailto:)/.test(href);
}

function applyLinkBehavior(element, href) {
  element.href = href;
  if (isExternalHref(href)) {
    element.target = "_blank";
    element.rel = "noreferrer";
  }
}

const hoverPreview = {
  container: null,
  image: null,
  activeTrigger: null,
};

function ensureHoverPreview() {
  if (hoverPreview.container) {
    return hoverPreview;
  }

  const container = createElement("div", "hover-preview");
  const image = createElement("img", "hover-preview-image");

  container.appendChild(image);
  document.body.appendChild(container);

  hoverPreview.container = container;
  hoverPreview.image = image;

  return hoverPreview;
}

function positionHoverPreview(trigger) {
  const { container } = ensureHoverPreview();
  const rect = trigger.getBoundingClientRect();
  const previewWidth = 184;
  const previewHeight = 220;
  const gap = 12;

  let left = rect.right + gap;
  let top = rect.top + rect.height / 2 - previewHeight / 2;

  if (left + previewWidth > window.innerWidth - 12) {
    left = rect.left - previewWidth - gap;
  }

  if (left < 12) {
    left = Math.max(12, window.innerWidth - previewWidth - 12);
  }

  if (top < 12) {
    top = 12;
  }

  if (top + previewHeight > window.innerHeight - 12) {
    top = Math.max(12, window.innerHeight - previewHeight - 12);
  }

  container.style.left = `${left}px`;
  container.style.top = `${top}px`;
}

function showHoverPreview(trigger, previewSrc, label) {
  const { container, image } = ensureHoverPreview();

  hoverPreview.activeTrigger = trigger;
  image.src = previewSrc;
  image.alt = `${label} ${getMessages().ui.previewLabel}`;
  positionHoverPreview(trigger);
  container.classList.add("is-visible");
}

function hideHoverPreview() {
  if (!hoverPreview.container) {
    return;
  }

  hoverPreview.activeTrigger = null;
  hoverPreview.container.classList.remove("is-visible");
}

function attachHoverPreview(element, item) {
  if (!item.preview) {
    return;
  }

  const show = () => showHoverPreview(element, item.preview, item.label);
  const hide = () => hideHoverPreview();

  element.addEventListener("mouseenter", show);
  element.addEventListener("mouseleave", hide);
  element.addEventListener("focus", show);
  element.addEventListener("blur", hide);
  element.addEventListener("click", (event) => {
    event.preventDefault();
  });
}

function setMetaContent(id, value) {
  const element = document.getElementById(id);
  if (!element || !value) {
    return;
  }

  element.setAttribute("content", value);
}

function extractEmailAddress(rawEmail) {
  const match = rawEmail.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  return match ? match[0] : "";
}

function updateStructuredData() {
  const schemaScript = document.getElementById("personSchema");
  if (!schemaScript) {
    return;
  }

  const messages = getMessages();

  const externalProfiles = (siteData.profile.contacts || [])
    .map((contact) => contact.href)
    .filter((href) => isExternalHref(href) && !href.startsWith("mailto:"));
  const emailAddress = extractEmailAddress(siteData.profile.email || "");

  // Remove empty fields so the generated schema stays concise.
  const schema = Object.fromEntries(
    Object.entries({
      "@context": "https://schema.org",
      "@type": "Person",
      name: messages.profile.name,
      alternateName: siteData.profile.aliases,
      description: messages.meta.description,
      email: emailAddress ? `mailto:${emailAddress}` : undefined,
      affiliation: siteData.profile.affiliation
        ? {
            "@type": "Organization",
            name: siteData.profile.affiliation,
          }
        : undefined,
      sameAs: externalProfiles.length ? externalProfiles : undefined,
    }).filter(([, value]) => value !== undefined && value !== "")
  );

  schemaScript.textContent = JSON.stringify(schema, null, 2);
}

function updateSeoMeta() {
  const messages = getMessages();

  document.documentElement.lang = messages.htmlLang;
  document.title = messages.meta.title;
  setMetaContent("metaDescription", messages.meta.description);
  setMetaContent("metaKeywords", (messages.meta.keywords || []).join(", "));
  setMetaContent("metaOgTitle", messages.meta.title);
  setMetaContent("metaOgDescription", messages.meta.description);
  setMetaContent("metaOgLocale", messages.ogLocale);
  updateStructuredData();
}

function renderInterfaceText() {
  const { ui } = getMessages();
  const navTabs = document.getElementById("navTabs");
  const languageToggle = document.getElementById("languageToggle");

  navTabs.setAttribute("aria-label", ui.navLabel);
  languageToggle.setAttribute("aria-label", ui.switchLabel);
  languageToggle.title = ui.switchLabel;
  setTextContent("languageToggleText", ui.switchText);
  setTextContent("newsTitle", ui.sections.news);
  setTextContent("publicationsTitle", ui.sections.publications);
  setTextContent("awardsTitle", ui.sections.awards);
  setTextContent("internshipsTitle", ui.sections.internships);
  setTextContent("equalContributionNote", ui.notes.equalContribution);
  setTextContent("correspondingAuthorNote", ui.notes.correspondingAuthor);
}

function renderNavigation() {
  const navTabs = document.getElementById("navTabs");
  navTabs.replaceChildren();

  siteData.nav.forEach((item, index) => {
    const localizedItem = getLocalizedItem("nav", index, item);
    const link = createElement("a", "nav-link", localizedItem.label);
    applyLinkBehavior(link, item.href);
    attachHoverPreview(link, localizedItem);

    if (index === 0 && item.href.startsWith("#")) {
      link.classList.add("is-active");
    }

    navTabs.appendChild(link);
  });
}

function renderProfile() {
  const messages = getMessages();

  updateSeoMeta();
  document.getElementById("heroName").textContent = messages.profile.name;
  document.getElementById("heroEmail").textContent = messages.profile.email || "";

  const profilePhoto = document.getElementById("profilePhoto");
  profilePhoto.src = siteData.profile.photo;
  profilePhoto.alt = messages.ui.photoAlt;

  const description = document.getElementById("heroDescription");
  description.replaceChildren();
  messages.profile.about.forEach((paragraph) => {
    const paragraphNode = createElement("p");
    paragraphNode.innerHTML = paragraph;
    description.appendChild(paragraphNode);
  });

  const contactButtons = document.getElementById("contactButtons");
  contactButtons.replaceChildren();
  siteData.profile.contacts.forEach((contact, index) => {
    const translatedContact = {
      ...contact,
      ...(messages.profile.contacts?.[index] || {}),
    };
    const link = createElement("a", "contact-button");
    applyLinkBehavior(link, contact.href);
    attachHoverPreview(link, translatedContact);

    const icon = createContactIcon(contact.icon);
    const label = createElement("span", "", translatedContact.label);

    link.append(icon, label);
    contactButtons.appendChild(link);
  });
}

function renderNews() {
  const newsList = document.getElementById("newsList");
  const { ui } = getMessages();
  newsList.replaceChildren();

  if (!siteData.news.length) {
    newsList.appendChild(createElement("div", "empty-note", ui.empty.news));
    return;
  }

  siteData.news.forEach((item, index) => {
    const localizedItem = getLocalizedItem("news", index, item);
    const article = createElement("article", "news-item");
    const date = createElement("div", "news-date", localizedItem.date);
    const content = createElement("div", "news-content");
    content.innerHTML = localizedItem.text;

    article.append(date, content);
    newsList.appendChild(article);
  });
}

function renderPublications() {
  const publicationList = document.getElementById("publicationList");
  const { ui } = getMessages();
  publicationList.replaceChildren();

  if (!siteData.publications.length) {
    publicationList.appendChild(
      createElement("div", "empty-note", ui.empty.publications)
    );
    return;
  }

  siteData.publications.forEach((publication, index) => {
    const localizedPublication = getLocalizedItem(
      "publications",
      index,
      publication
    );
    const card = createElement("article", "publication-card");

    const thumb = createElement("div", "publication-thumb");
    const image = createElement("img");
    image.src = publication.image;
    image.alt = `${localizedPublication.title} ${ui.publicationImageAlt}`;
    thumb.appendChild(image);

    const meta = createElement("div", "publication-meta");
    const title = createElement(
      "h3",
      "publication-title",
      localizedPublication.title
    );
    const authors = createElement("p", "publication-authors");
    authors.innerHTML = publication.authors;
    const venue = createElement("p", "publication-venue", publication.venue);
    const summary = createElement("p", "publication-summary");
    summary.textContent = publication.summary || "";
    const links = createElement("div", "publication-links");

    publication.links.forEach((item) => {
      const link = createElement(
        "a",
        "chip-link",
        ui.linkLabels[item.label] || item.label
      );
      applyLinkBehavior(link, item.href);
      links.appendChild(link);
    });

    meta.append(title, authors, venue, summary, links);
    card.append(thumb, meta);
    publicationList.appendChild(card);
  });
}

function renderEntrySection(listId, items, sectionKey, emptyMessage) {
  const list = document.getElementById(listId);
  list.replaceChildren();

  if (!items.length) {
    list.appendChild(createElement("div", "empty-note", emptyMessage));
    return;
  }

  items.forEach((item, index) => {
    const localizedItem = getLocalizedItem(sectionKey, index, item);
    const article = createElement("article", "entry-item");
    const date = createElement("div", "entry-date", localizedItem.date);
    const body = createElement("div", "entry-body");
    const title = createElement("div", "entry-title", localizedItem.title);
    const description = createElement("div", "entry-description");

    if (item.logo) {
      article.classList.add("has-logo");

      const logoWrap = createElement("div", "entry-logo");
      const logo = createElement("img");
      logo.src = item.logo;
      logo.alt = item.logoAlt || `${localizedItem.title} logo`;
      logoWrap.appendChild(logo);
      article.append(date, logoWrap, body);
    } else {
      article.append(date, body);
    }

    description.innerHTML = localizedItem.description;
    body.append(title, description);
    list.appendChild(article);
  });
}

function syncActiveNavOnScroll() {
  if (navObserver) {
    navObserver.disconnect();
  }

  const links = Array.from(document.querySelectorAll(".nav-link"));
  const sections = links
    .map((link) => link.getAttribute("href"))
    .filter((href) => href.startsWith("#"))
    .map((href) => document.querySelector(href))
    .filter(Boolean);

  navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const currentId = `#${entry.target.id}`;
        links.forEach((link) => {
          link.classList.toggle(
            "is-active",
            link.getAttribute("href") === currentId
          );
        });
      });
    },
    {
      rootMargin: "-35% 0px -50% 0px",
      threshold: 0.01,
    }
  );

  sections.forEach((section) => navObserver.observe(section));
}

function renderPage() {
  const { ui } = getMessages();

  hideHoverPreview();
  renderInterfaceText();
  renderNavigation();
  renderProfile();
  renderNews();
  renderPublications();
  renderEntrySection("awardsList", siteData.awards || [], "awards", ui.empty.awards);
  renderEntrySection(
    "internshipsList",
    siteData.internships || [],
    "internships",
    ui.empty.internships
  );
  syncActiveNavOnScroll();
}

function setupLanguageToggle() {
  const languageToggle = document.getElementById("languageToggle");

  languageToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "zh" : "en";

    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);
    } catch (error) {
      // Keep the in-page switch working even when storage is unavailable.
    }

    renderPage();
  });
}

window.addEventListener("scroll", () => {
  if (hoverPreview.activeTrigger) {
    positionHoverPreview(hoverPreview.activeTrigger);
  }
});

window.addEventListener("resize", () => {
  if (hoverPreview.activeTrigger) {
    positionHoverPreview(hoverPreview.activeTrigger);
  }
});

setupLanguageToggle();
renderPage();
