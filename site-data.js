const siteData = {
  meta: {
    title: "Yuchen Zou (邹雨辰) | Personal Homepage",
    description:
      "Yuchen Zou (邹雨辰, Zou Yuchen, zouyuchen) is a Ph.D. student at Xi'an Jiaotong University and a Tencent Qingyun Program intern focusing on biometrics, palm recognition, and 2D/3D AIGC generation.",
    keywords: [
      "Yuchen Zou",
      "邹雨辰",
      "Zou Yuchen",
      "zouyuchen",
      "Xi'an Jiaotong University",
      "Tencent Qingyun Program",
      "biometrics",
      "palm recognition",
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
      "I am a Ph.D. student at <strong>Xi'an Jiaotong University</strong>. My research interests lie in <em>2D/3D AIGC generation</em>.",
      "I received my B.Eng. from Shandong University in 2022, and joined Xi'an Jiaotong University in the same year. I transferred to the Ph.D. program in 2024.",
      "Since 2026.05, I have been a <strong>Tencent 🐧 Qingyun Program intern</strong>.",
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
      date: "Jul, 2026",
      text: "Two papers are accepted by <strong>ACM MM 2026</strong>! 🎉",
    },
    {
      date: "May, 2026",
      text: 'Our <a href="https://arxiv.org/pdf/2603.01613" target="_blank" rel="noreferrer">paper</a> received the <strong>Best Presentation Award</strong> at the <strong>ICRA 2026</strong> Workshop on Robots Meet Prior Maps! 🎉',
    },
    {
      date: "Apr, 2026",
      text: "FlowPalm was selected as a <strong>CVPR 2026 Highlight</strong>! 🎉",
    },
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
      title: "CityPaint: A Free Lunch from 2D Diffusion for City-Scale 3D Texturing",
      authors: '<a href="https://openreview.net/profile?id=~Yuchen_Zou2" target="_blank" rel="noreferrer"><strong>Yuchen Zou*</strong></a>, <a href="https://openreview.net/profile?id=~Lihuang_Fang2" target="_blank" rel="noreferrer">Lihuang Fang*</a>, <a href="https://openreview.net/profile?id=~Siyu_Zhu8" target="_blank" rel="noreferrer">Siyu Zhu</a>, <a href="https://openreview.net/profile?id=~Xiao_Hu13" target="_blank" rel="noreferrer">Xiao Hu†</a>',
      venue: "ACM MM 2026 (CCF A)",
      image: "./assets/images/publications/acmmm26_citypaint.png",
      links: [],
    },
    {
      title: "EmoAgent-R1: Towards Multimodal Emotion Understanding with Reinforcement Learning-based Dynamic Agent Specialization",
      authors: "Lihuang Fang*, <strong>Yuchen Zou*</strong>, Kebing Jin, Jinghui Qin†",
      venue: "ACM MM 2026 (CCF A)",
      image: "./assets/images/publications/acmmm26_emoagent_r1.png",
      links: [
        { label: "Paper", href: "https://arxiv.org/pdf/2607.21013" },
      ],
    },
    {
      title: "Uncertainty-Aware Hierarchical Re-Localization in OpenStreetMap via Semantic Alignment",
      authors: "<strong>Yuchen Zou</strong>, Xiao Hu, Lihuang Fang, Yuqing Tang†",
      venue: "ICRA 2026 Workshop on Robots Meet Prior Maps (Oral, Best Presentation Award)",
      image: "./assets/images/publications/icra26_osm_relocalization.png",
      links: [
        { label: "Paper", href: "https://arxiv.org/pdf/2603.01613" },
      ],
    },
    {
      title: "FlowPalm: Optical Flow-Driven Non-Rigid Deformation for Geometrically Diverse Palmprint Generation",
      authors: "<strong>Yuchen Zou</strong>, Huikai Shao†, Lihuang Fang, Zhipeng Xiong, Dexing Zhong†",
      venue: "CVPR 2026 (CCF A) (Highlight)",
      image: "./assets/images/publications/cvpr26_palmflow.jpg",
      links: [
        { label: "Project", href: "https://yuchenzou.github.io/FlowPalm/" },
        { label: "Paper", href: "http://arxiv.org/abs/2604.09989" },
        { label: "Code", href: "https://github.com/YuchenZou/FlowPalm-master" },
      ],
    },
    {
      title: "CogStereo: Neural Stereo Matching with Implicit Spatial Cognition Embedding",
      authors: "Lihuang Fang, Xiao Hu, <strong>Yuchen Zou</strong>, Hong Zhang†",
      venue: "ICRA 2026",
      image: "./assets/images/publications/icra26_cogstereo.jpg",
      links: [
        { label: "Paper", href: "https://arxiv.org/abs/2510.22119" },
        { label: "Code", href: "https://github.com/lhfang228/CogStereo" },
      ],
    },
    {
      title: "PFIG-Palm: Controllable Palmprint Generation via Pixel and Feature Identity Guidance",
      authors: "<strong>Yuchen Zou</strong>, Huikai Shao†, Chengcheng Liu, Siyu Zhu, Zongqing Hou, Dexing Zhong",
      venue: "TIP 2025 (CCF A)",
      image: "./assets/images/publications/tip25_PFIG.jpg",
      links: [
        { label: "Paper", href: "https://ieeexplore.ieee.org/document/11196020" },
        { label: "Code", href: "https://github.com/YuchenZou/PFIG-Palm" },
      ],
    },
    {
      title: "Learning to Generalize Unseen Dataset for Cross-Dataset Palmprint Recognition",
      authors: "Huikai Shao, <strong>Yuchen Zou</strong> (student first author), Chengcheng Liu, Qiang Guo, Dexing Zhong†",
      venue: "TIFS 2024 (CCF A)",
      image: "./assets/images/publications/tifs24_PDFG.jpg",
      links: [
        { label: "Paper", href: "https://ieeexplore.ieee.org/document/10453292" },
      ],
    },
    {
      title: "Unsupervised Palmprint Image Quality Assessment via Pseudo-Label Generation and Ranking Guidance",
      authors: "<strong>Yuchen Zou</strong>, Chengcheng Liu, Huikai Shao†, Dexing Zhong",
      venue: "TIM 2023",
      image: "./assets/images/publications/tim23_PGRP.jpg",
      links: [
        { label: "Paper", href: "https://ieeexplore.ieee.org/document/10158718" },
      ],
    },
    {
      title: "Cross-dataset Image Matching Network for Heterogeneous Palmprint Recognition",
      authors: "<strong>Yuchen Zou</strong>, Huikai Shao, Dexing Zhong†",
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
      title: "中国科协青培工程(前青托工程)博士生专项",
      description:
        "Selected for the Young Elite Scientists Sponsorship Program (Doctoral Student Special Plan) by CAST.",
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
      date: "2026.05 - Present",
      title: "Qingyun Program Intern, Tencent",
      logo: "./assets/images/intern/tencent_logo.png",
      logoAlt: "Tencent logo",
      description:
        "Working as a <strong>Tencent Qingyun Program</strong> intern on AIGC and biometrics.",
    },
    {
      date: "2024.08 - 2026.04",
      title: "Research Intern, IDEA Research Institute",
      logo: "./assets/images/intern/idea-logo.png",
      logoAlt: "IDEA Research Institute logo",
      description:
        "Worked at <strong>International Digital Economy Academy (IDEA)</strong>, focusing on research related to low-altitude economy and generative modeling.",
    },
  ],
};

// Language-specific copy is kept separate from links and media so content can
// be updated once while both language versions stay aligned by item order.
const siteTranslations = {
  en: {
    htmlLang: "en",
    ogLocale: "en_US",
    meta: siteData.meta,
    ui: {
      navLabel: "Page navigation",
      switchLabel: "切换至中文",
      switchText: "中文",
      photoAlt: "Portrait of Yuchen Zou",
      previewLabel: "preview",
      publicationImageAlt: "illustration",
      sections: {
        news: "News",
        publications: "Publications",
        awards: "Awards",
        internships: "Internships",
      },
      notes: {
        equalContribution: "* Equal contribution",
        correspondingAuthor: "† Corresponding author",
      },
      empty: {
        news: "No news has been added yet.",
        publications: "No publications have been added yet.",
        awards: "No awards have been added yet.",
        internships: "No internships have been added yet.",
      },
      linkLabels: {
        Project: "Project",
        Paper: "Paper",
        Code: "Code",
      },
    },
    profile: {
      name: "Yuchen Zou (邹雨辰)",
      email: "Email: yuchenzou@stu.xjtu.edu.cn",
      about: siteData.profile.about,
      contacts: siteData.profile.contacts.map(({ label }) => ({ label })),
    },
    nav: siteData.nav.map(({ label }) => ({ label })),
    news: siteData.news,
    publications: siteData.publications.map(({ title }) => ({ title })),
    awards: [
      {
        title: "CAST Young Elite Scientists Sponsorship Program (Doctoral Student Special Plan)",
        description:
          "Selected for the Young Elite Scientists Sponsorship Program (Doctoral Student Special Plan) by CAST.",
      },
      {
        title: "National Scholarship",
        description:
          "Received the National Scholarship during my graduate study at Xi'an Jiaotong University.",
      },
    ],
    internships: siteData.internships,
  },
  zh: {
    htmlLang: "zh-CN",
    ogLocale: "zh_CN",
    meta: {
      title: "邹雨辰（Yuchen Zou）｜个人主页",
      description:
        "邹雨辰，西安交通大学博士研究生、腾讯青云计划实习生，研究方向包括生物特征识别、掌纹识别与二维/三维 AIGC 生成。",
      keywords: [
        "邹雨辰",
        "Yuchen Zou",
        "西安交通大学",
        "腾讯青云计划",
        "生物特征识别",
        "掌纹识别",
        "二维三维 AIGC 生成",
      ],
    },
    ui: {
      navLabel: "页面导航",
      switchLabel: "Switch to English",
      switchText: "EN",
      photoAlt: "邹雨辰的个人照片",
      previewLabel: "预览",
      publicationImageAlt: "论文展示图",
      sections: {
        news: "最新动态",
        publications: "发表论文",
        awards: "荣誉奖励",
        internships: "实习经历",
      },
      notes: {
        equalContribution: "* 共同贡献",
        correspondingAuthor: "† 通讯作者",
      },
      empty: {
        news: "暂无最新动态。",
        publications: "暂无论文条目。",
        awards: "暂无荣誉奖励。",
        internships: "暂无实习经历。",
      },
      linkLabels: {
        Project: "项目主页",
        Paper: "论文",
        Code: "代码",
      },
    },
    profile: {
      name: "邹雨辰（Yuchen Zou）",
      email: "邮箱：yuchenzou@stu.xjtu.edu.cn",
      about: [
        "我是<strong>西安交通大学</strong>博士研究生，主要研究方向为<em>二维/三维 AIGC 生成</em>。",
        "我于 2022 年获得山东大学工学学士学位，同年进入西安交通大学学习，并于 2024 年转入博士研究生阶段。",
        "自 2026 年 5 月起，我在<strong>腾讯 🐧 青云计划</strong>实习。",
      ],
      contacts: [
        { label: "谷歌学术" },
        { label: "GitHub" },
        { label: "微信" },
      ],
    },
    nav: [
      { label: "关于我" },
      { label: "发表论文" },
      { label: "荣誉奖励" },
      { label: "实习经历" },
      { label: "微信" },
    ],
    news: [
      {
        date: "2026 年 7 月",
        text: "两篇论文被 <strong>ACM MM 2026</strong> 录用！🎉",
      },
      {
        date: "2026 年 5 月",
        text: '我们的<a href="https://arxiv.org/pdf/2603.01613" target="_blank" rel="noreferrer">论文</a>荣获 <strong>ICRA 2026</strong> Robots Meet Prior Maps Workshop <strong>最佳报告奖</strong>！🎉',
      },
      {
        date: "2026 年 4 月",
        text: "FlowPalm 入选 <strong>CVPR 2026 Highlight</strong>！🎉",
      },
      {
        date: "2026 年 2 月",
        text: "一篇论文被 <strong>CVPR 2026</strong> 录用！🎉",
      },
      {
        date: "2026 年 1 月",
        text: "一篇论文被 <strong>ICRA 2026</strong> 录用！🎉",
      },
      {
        date: "2025 年 9 月",
        text: "一篇论文被 <strong>TIP 2025</strong> 录用！🎉",
      },
    ],
    publications: [
      { title: "CityPaint：借助二维扩散模型实现城市尺度三维纹理生成" },
      { title: "EmoAgent-R1：基于强化学习动态智能体专门化的多模态情感理解" },
      { title: "基于语义对齐的 OpenStreetMap 不确定性感知层次化重定位" },
      { title: "FlowPalm：用于生成几何多样掌纹的光流驱动非刚性形变" },
      { title: "CogStereo：融合隐式空间认知嵌入的神经立体匹配" },
      { title: "PFIG-Palm：基于像素与特征身份引导的可控掌纹生成" },
      { title: "面向跨数据集掌纹识别的未见数据集泛化学习" },
      { title: "基于伪标签生成与排序引导的无监督掌纹图像质量评估" },
      { title: "面向异构掌纹识别的跨数据集图像匹配网络" },
    ],
    awards: [
      {
        title: "中国科协青培工程（前青托工程）博士生专项",
        description: "入选中国科协青培工程（前青托工程）博士生专项。",
      },
      {
        title: "国家奖学金",
        description: "在西安交通大学研究生学习期间获得国家奖学金。",
      },
    ],
    internships: [
      {
        date: "2026.05 - 至今",
        title: "腾讯青云计划实习生",
        description: "在<strong>腾讯青云计划</strong>开展 AIGC 与生物特征识别相关研究。",
      },
      {
        date: "2024.08 - 2026.04",
        title: "粤港澳大湾区数字经济研究院（IDEA）研究实习生",
        description: "在<strong>粤港澳大湾区数字经济研究院（IDEA）</strong>开展低空经济与生成式建模相关研究。",
      },
    ],
  },
};
