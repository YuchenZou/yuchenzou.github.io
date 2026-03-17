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
  image.alt = `${label} preview`;
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

  const externalProfiles = (siteData.profile.contacts || [])
    .map((contact) => contact.href)
    .filter((href) => isExternalHref(href) && !href.startsWith("mailto:"));
  const emailAddress = extractEmailAddress(siteData.profile.email || "");

  // Remove empty fields so the generated schema stays concise.
  const schema = Object.fromEntries(
    Object.entries({
      "@context": "https://schema.org",
      "@type": "Person",
      name: siteData.profile.name,
      alternateName: siteData.profile.aliases,
      description: siteData.meta.description,
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
  document.title = siteData.meta.title;
  setMetaContent("metaDescription", siteData.meta.description);
  setMetaContent("metaKeywords", (siteData.meta.keywords || []).join(", "));
  setMetaContent("metaOgTitle", siteData.meta.title);
  setMetaContent("metaOgDescription", siteData.meta.description);
  updateStructuredData();
}

function renderNavigation() {
  const navTabs = document.getElementById("navTabs");

  siteData.nav.forEach((item, index) => {
    const link = createElement("a", "nav-link", item.label);
    applyLinkBehavior(link, item.href);
    attachHoverPreview(link, item);

    if (index === 0 && item.href.startsWith("#")) {
      link.classList.add("is-active");
    }

    navTabs.appendChild(link);
  });
}

function renderProfile() {
  updateSeoMeta();
  document.getElementById("heroName").textContent = siteData.profile.name;
  document.getElementById("heroEmail").textContent = siteData.profile.email || "";

  const profilePhoto = document.getElementById("profilePhoto");
  profilePhoto.src = siteData.profile.photo;
  profilePhoto.alt = `${siteData.profile.name} 的照片`;

  const description = document.getElementById("heroDescription");
  siteData.profile.about.forEach((paragraph) => {
    const paragraphNode = createElement("p");
    paragraphNode.innerHTML = paragraph;
    description.appendChild(paragraphNode);
  });

  const contactButtons = document.getElementById("contactButtons");
  siteData.profile.contacts.forEach((contact) => {
    const link = createElement("a", "contact-button");
    applyLinkBehavior(link, contact.href);
    attachHoverPreview(link, contact);

    const icon = createContactIcon(contact.icon);
    const label = createElement("span", "", contact.label);

    link.append(icon, label);
    contactButtons.appendChild(link);
  });
}

function renderNews() {
  const newsList = document.getElementById("newsList");

  if (!siteData.news.length) {
    newsList.appendChild(
      createElement(
        "div",
        "empty-note",
        "还没有填写新闻动态。你可以在 site-data.js 中补充 news 数组。"
      )
    );
    return;
  }

  siteData.news.forEach((item) => {
    const article = createElement("article", "news-item");
    const date = createElement("div", "news-date", item.date);
    const content = createElement("div", "news-content");
    content.innerHTML = item.text;

    article.append(date, content);
    newsList.appendChild(article);
  });
}

function renderPublications() {
  const publicationList = document.getElementById("publicationList");

  if (!siteData.publications.length) {
    publicationList.appendChild(
      createElement(
        "div",
        "empty-note",
        "还没有填写论文条目。你可以复制现有对象并修改标题、作者、图片和链接。"
      )
    );
    return;
  }

  siteData.publications.forEach((publication) => {
    const card = createElement("article", "publication-card");

    const thumb = createElement("div", "publication-thumb");
    const image = createElement("img");
    image.src = publication.image;
    image.alt = `${publication.title} 展示图`;
    thumb.appendChild(image);

    const meta = createElement("div", "publication-meta");
    const title = createElement("h3", "publication-title", publication.title);
    const authors = createElement("p", "publication-authors");
    authors.innerHTML = publication.authors;
    const venue = createElement("p", "publication-venue", publication.venue);
    const summary = createElement("p", "publication-summary");
    summary.textContent = publication.summary || "";
    const links = createElement("div", "publication-links");

    publication.links.forEach((item) => {
      const link = createElement("a", "chip-link", item.label);
      applyLinkBehavior(link, item.href);
      links.appendChild(link);
    });

    meta.append(title, authors, venue, summary, links);
    card.append(thumb, meta);
    publicationList.appendChild(card);
  });
}

function renderEntrySection(listId, items, emptyMessage) {
  const list = document.getElementById(listId);

  if (!items.length) {
    list.appendChild(createElement("div", "empty-note", emptyMessage));
    return;
  }

  items.forEach((item) => {
    const article = createElement("article", "entry-item");
    const date = createElement("div", "entry-date", item.date);
    const body = createElement("div", "entry-body");
    const title = createElement("div", "entry-title", item.title);
    const description = createElement("div", "entry-description");

    description.innerHTML = item.description;
    body.append(title, description);
    article.append(date, body);
    list.appendChild(article);
  });
}

function syncActiveNavOnScroll() {
  const links = Array.from(document.querySelectorAll(".nav-link"));
  const sections = links
    .map((link) => link.getAttribute("href"))
    .filter((href) => href.startsWith("#"))
    .map((href) => document.querySelector(href))
    .filter(Boolean);

  const observer = new IntersectionObserver(
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

  sections.forEach((section) => observer.observe(section));
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

renderNavigation();
renderProfile();
renderNews();
renderPublications();
renderEntrySection(
  "awardsList",
  siteData.awards || [],
  "You can add award information in the awards array of site-data.js."
);
renderEntrySection(
  "internshipsList",
  siteData.internships || [],
  "You can add internship information in the internships array of site-data.js."
);
syncActiveNavOnScroll();
