module.exports = {
  title: "milk-blog",
  description: "",
  dest: "public",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/milk-icon.png",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    nav: [
      {
        text: "主页",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "时间轴",
        link: "/timeline/",
        icon: "reco-date",
      },
      // {
      //   text: "文档",
      //   link: "/docs/",
      //   icon: "reco-message",
      // },
      {
        text: "链接",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/recoluan",
            icon: "reco-github",
          },
        ],
      },
    ],
    sidebar: {
      "/docs/theme-reco/": ["", "theme", "plugin", "api"],
    },
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "分类",
      },
      tag: {
        location: 3,
        text: "标签",
      },
      socialLinks: [
        // 信息栏展示社交信息
        { icon: "reco-github", link: "https://github.com/MilkCXB" },
      ],
    },
    // friendLink: [
    //   {
    //     title: "午后南杂",
    //     desc: "Enjoy when you can, and endure when you must.",
    //     email: "1156743527@qq.com",
    //     link: "https://www.recoluan.com",
    //   },
    // ],
    logo: "/milk-icon.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    //头像和作者
    author: "milk",
    authorAvatar: "/avatar.jpeg",
    record: "xxxx",
    startYear: "2022",
    //评论区
    valineConfig: {
      appId: "bmfHHvDDdKE6Dm0IyJYbjCMr-gzGzoHsz", // your appId
      appKey: "0nbUAMGM4aEfBxBWu0tBYbJm", // your appKey
    },
    //侧边栏
    subSidebar: "auto",
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    [
      "ribbon-animation",
      {
        size: 90, // 默认数据
        opacity: 0.3, //  透明度
        zIndex: -1, //  层级
        opt: {
          // 色带HSL饱和度
          colorSaturation: "80%",
          // 色带HSL亮度量
          colorBrightness: "60%",
          // 带状颜色不透明度
          colorAlpha: 0.55,
          // 在HSL颜色空间中循环显示颜色的速度有多快
          colorCycleSpeed: 6,
          // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
          verticalPosition: "center",
          // 到达屏幕另一侧的速度有多快
          horizontalSpeed: 200,
          // 在任何给定时间，屏幕上会保留多少条带
          ribbonCount: 2,
          // 添加笔划以及色带填充颜色
          strokeSize: 0,
          // 通过页面滚动上的因子垂直移动色带
          parallaxAmount: -0.5,
          // 随着时间的推移，为每个功能区添加动画效果
          animateSections: true,
        },
        ribbonShow: false, //  点击彩带  true显示  false为不显示
        ribbonAnimationShow: true, // 滑动彩带
      },
    ],
    [
      "meting",
      {
        meting: {
          auto: "https://music.163.com/#/playlist?id=6922723828",
        }, // 不配置该项的话不会出现全局播放器
        aplayer: {
          lrcType: 0,
        },
        defaultCover: "https://nyakku.moe/avatar.jpg",
      },
    ],
  ],
};
