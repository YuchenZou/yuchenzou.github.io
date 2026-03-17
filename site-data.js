const siteData = {
  meta: {
    title: "Yuchen Zou (邹雨辰) | Personal Homepage",
    description:
      "Yuchen Zou (邹雨辰, Zou Yuchen, zouyuchen) is a Ph.D. student at Xi'an Jiaotong University focusing on biometrics and 2D/3D AIGC generation.",
    keywords: [
      "Yuchen Zou",
      "邹雨辰",
      "Zou Yuchen",
      "zouyuchen",
      "Xi'an Jiaotong University",
      "biometrics",
      "2D/3D AIGC generation",
    ],
  },
  profile: {
    name: "Yuchen Zou (邹雨辰)",
    aliases: ["Zou Yuchen", "zouyuchen"],
    affiliation: "Xi'an Jiaotong University",
    photo: "./assets/images/profile/photo.jpg",
    email: "Email: yuchenzou@stu.xjtu.edu.cn",
    about: [
      "I am a Ph.D. student at <strong>Xi'an Jiaotong University</strong>. My research interests lie in <em>biometrics</em> and <em>2D/3D AIGC generation</em>.",
      "I received my B.S. from Shandong University in 2022, and joined Xi'an Jiaotong University in the same year. I transferred to the Ph.D. program in 2024.",
      "I am currently <strong>actively looking for internship opportunities</strong>.",
      ],
    contacts: [
      {
        label: "Scholar",
        icon: "✎",
        href: "https://scholar.google.com/citations?user=m9AfyE8AAAAJ&hl=en",
      },
      {
        label: "GitHub",
        icon: "◔",
        href: "https://github.com/YuchenZou/",
      },
      {
        label: "WeChat",
        icon: "wechat",
        href: "./assets/images/contact/wechat.jpg",
        preview: "./assets/images/contact/wechat.jpg",
      },
    ],
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Publications", href: "#publications" },
    { label: "Awards", href: "#awards" },
    { label: "Internships", href: "#internships" },
    {
      label: "WeChat",
      href: "./assets/images/contact/wechat.jpg",
      preview: "./assets/images/contact/wechat.jpg",
    },
  ],
  news: [
    {
      date: "Feb, 2026",
      text: "One paper is accepted by <strong>CVPR 2026</strong>! 🎉",
    },
    {
      date: "Jan, 2026",
      text: "One paper is accepted by <strong>ICRA 2026</strong>! 🎉",
    },
    {
      date: "Sep, 2025",
      text: "One paper is accepted by <strong>TIP 2025</strong>! 🎉",
    },
  ],
  publications: [
    {
      title: "FlowPalm: Optical Flow-Driven Non-Rigid Deformation for Geometrically Diverse Palmprint Generation",
      authors: "<strong>Yuchen Zou</strong>, Huikai Shao*, Lihuang Fang, Zhipeng Xiong, Dexing Zhong*",
      venue: "CVPR 2026",
      image: "./assets/images/publications/cvpr26_palmflow.jpg",
      links: [
        { label: "Project", href: "https://yuchenzou.github.io/FlowPalm/" },
        // { label: "Paper", href: "#" },
      ],
    },
    {
      title: "CogStereo: Neural Stereo Matching with Implicit Spatial Cognition Embedding",
      authors: "Lihuang Fang, Xiao Hu, <strong>Yuchen Zou</strong>, Hong Zhang*",
      venue: "ICRA 2026",
      image: "./assets/images/publications/icra26_cogstereo.jpg",
      links: [
        { label: "Paper", href: "https://arxiv.org/abs/2510.22119" },
        { label: "Code", href: "https://github.com/lhfang228/CogStereo" },
      ],
    },
    {
      title: "PFIG-Palm: Controllable Palmprint Generation via Pixel and Feature Identity Guidance",
      authors: "<strong>Yuchen Zou</strong>, Huikai Shao*, Chengcheng Liu, Siyu Zhu, Zongqing Hou, Dexing Zhong",
      venue: "TIP 2025",
      image: "./assets/images/publications/tip25_PFIG.jpg",
      links: [
        { label: "Paper", href: "https://ieeexplore.ieee.org/document/11196020" },
        { label: "Code", href: "https://github.com/YuchenZou/PFIG-Palm" },
      ],
    },
    {
      title: "Learning to Generalize Unseen Dataset for Cross-Dataset Palmprint Recognition",
      authors: "Huikai Shao, <strong>Yuchen Zou</strong> (student first author), Chengcheng Liu, Qiang Guo, Dexing Zhong*",
      venue: "TIFS 2024",
      image: "./assets/images/publications/tifs24_PDFG.jpg",
      links: [
        { label: "Paper", href: "https://ieeexplore.ieee.org/document/10453292" },
      ],
    },
    {
      title: "Unsupervised Palmprint Image Quality Assessment via Pseudo-Label Generation and Ranking Guidance",
      authors: "<strong>Yuchen Zou</strong>, Chengcheng Liu, Huikai Shao*, Dexing Zhong",
      venue: "TIM 2023",
      image: "./assets/images/publications/tim23_PGRP.jpg",
      links: [
        { label: "Paper", href: "https://ieeexplore.ieee.org/document/10158718" },
      ],
    },
    {
      title: "Cross-dataset Image Matching Network for Heterogeneous Palmprint Recognition",
      authors: "<strong>Yuchen Zou</strong>, Huikai Shao, Dexing Zhong*",
      venue: "CCBR 2022",
      image: "./assets/images/publications/ccbr22.jpg",
      links: [
        { label: "Paper", href: "https://link.springer.com/chapter/10.1007/978-3-031-20233-9_6" },
      ],
    },
  ],
  awards: [
    {
      date: "2025",
      title: "入选中国科协青培(前青托)工程博士生专项",
      description:
        "Selected for the 2025 China Association for Science and Technology Young Talent Support Program for Doctoral Students.",
    },
    {
      date: "2023",
      title: "National Scholarship",
      description:
        "Received the National Scholarship during my graduate study at Xi'an Jiaotong University.",
    },
  ],
  internships: [
    {
      date: "2024 - 2026",
      title: "Research Intern, IDEA Research Institute",
      description:
        "Worked at <strong>International Digital Economy Academy (IDEA)</strong> from <strong>Aug. 2024 to Feb. 2026</strong>, focusing on research related to low-altitude economy and generative modeling.",
    },
    {
      date: "Now",
      title: "Open to Internship Opportunities",
      description:
        "I am currently <strong>actively looking for internship opportunities</strong>, especially in biometrics, computer vision, and 2D/3D AIGC generation.",
    },
  ],
};
