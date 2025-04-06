// 创建Vue应用
const { createApp } = Vue;

// 初始化Vue应用
const app = createApp({
  // 数据
  data() {
    return {
      // 游戏基本信息
      gameTitle: "荣耀战场",
      gameVersion: "v1.0.5",
      gameSize: "45.8 GB",

      // 游戏特色列表
      features: [
        {
          id: 1,
          icon: "🌍",
          title: "广阔的开放世界",
          description:
            "探索一个面积超过100平方公里的巨大开放世界，包含多种地形、气候和生态系统。",
        },
        {
          id: 2,
          icon: "⚔️",
          title: "深度战斗系统",
          description:
            "体验流畅且具有挑战性的实时战斗系统，掌握各种武器、技能和战术组合。",
        },
        {
          id: 3,
          icon: "🧙",
          title: "角色自定义",
          description: "通过数百种外观选项和技能树，创建并发展您独特的角色。",
        },
        {
          id: 4,
          icon: "🏰",
          title: "史诗级任务线",
          description:
            "参与由专业作家打造的主线任务和众多支线任务，每个选择都将影响游戏世界。",
        },
        {
          id: 5,
          icon: "🤝",
          title: "协作多人游戏",
          description:
            "与朋友组队冒险，挑战团队副本，或在PvP竞技场中测试您的技能。",
        },
        {
          id: 6,
          icon: "🎵",
          title: "震撼的音频体验",
          description:
            "沉浸在由屡获殊荣的作曲家创作的原创配乐和逼真的环境音效中。",
        },
      ],
    };
  },

  // 方法
  methods: {
    // 下载游戏
    downloadGame() {
      // 创建一个模拟的游戏安装程序下载链接
      // 在实际项目中，这应该是一个真实的下载链接
      const downloadLink = "game-installer.exe";

      // 创建一个虚拟的下载元素
      const link = document.createElement("a");
      link.href = downloadLink;
      link.download = "荣耀战场-安装程序.exe";

      // 显示下载开始的消息
      alert("游戏下载即将开始！文件大小: " + this.gameSize);

      // 在实际项目中应该触发下载，这里仅做演示
      // link.click();

      // 跟踪下载事件 (在实际项目中可能会使用analytics跟踪)
      console.log("游戏下载已启动", {
        gameTitle: this.gameTitle,
        gameVersion: this.gameVersion,
        timestamp: new Date().toISOString(),
      });
    },
  },

  // 生命周期钩子 - 挂载后
  mounted() {
    console.log("游戏概况页面已加载");

    // 添加页面滚动效果
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // 减去头部高度
            behavior: "smooth",
          });
        }
      });
    });

    // 添加滚动监听，实现元素进入视口时的动画效果
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // 监控所有需要动画的元素
    document.querySelectorAll(".section").forEach((section) => {
      observer.observe(section);
    });
  },
}).mount("#app");

// 添加一些页面交互效果
document.addEventListener("DOMContentLoaded", () => {
  // 设置页面加载动画
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 500);

  // 添加导航栏滚动效果
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
