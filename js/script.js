// 创建Vue应用
const { createApp } = Vue;

// 初始化Vue应用
const app = createApp({
  // 数据
  data() {
    return {
      // 游戏基本信息
      gameTitle: "荣耀战场",
      gameVersion: "v2.5.3",
      gameSize: "52.7 GB",
      isScrolled: false,

      // 游戏特色列表
      features: [
        {
          id: 1,
          iconClass: "ri-planet-line",
          title: "无边界开放世界",
          description:
            "探索一个面积超过180平方公里的巨大开放世界，包含七大独特区域，每个区域拥有自己的气候、生态系统和种族文明。",
        },
        {
          id: 2,
          iconClass: "ri-sword-line",
          title: "深度战斗系统",
          description:
            "体验基于物理引擎的实时战斗系统，掌握各种武器、元素魔法和战术组合，应对各类挑战。",
        },
        {
          id: 3,
          iconClass: "ri-user-settings-line",
          title: "极致角色自定义",
          description:
            "通过数百种外观选项和深度技能树，打造专属于你的独特角色，定制专属战斗风格。",
        },
        {
          id: 4,
          iconClass: "ri-book-open-line",
          title: "史诗级叙事体验",
          description:
            "参与由获奖作家精心打造的主线任务和无数支线任务，每个选择都将对游戏世界产生深远影响。",
        },
        {
          id: 5,
          iconClass: "ri-team-line",
          title: "沉浸式多人体验",
          description:
            "与好友组队冒险，探索隐藏副本，参与大型公会战争，或在光荣竞技场中测试你的实力。",
        },
        {
          id: 6,
          iconClass: "ri-music-2-line",
          title: "顶级视听盛宴",
          description:
            "沉浸在由奥斯卡获奖作曲家创作的原创交响乐配乐和全3D空间音效中，感受震撼听觉体验。",
        },
      ],
    };
  },

  // 方法
  methods: {
    // 下载游戏
    downloadGame() {
      // 创建一个模拟的游戏安装程序下载链接
      const downloadLink = "game-installer.exe";

      // 显示下载弹窗效果
      this.showDownloadModal();

      // 跟踪下载事件
      console.log("游戏下载已启动", {
        gameTitle: this.gameTitle,
        gameVersion: this.gameVersion,
        timestamp: new Date().toISOString(),
      });
    },

    // 显示下载弹窗
    showDownloadModal() {
      // 创建模态框元素
      const modal = document.createElement("div");
      modal.className = "download-modal";

      // 设置模态框内容
      modal.innerHTML = `
                <div class="download-modal-content">
                    <div class="download-modal-header">
                        <h3>准备开始下载</h3>
                        <button class="close-btn"><i class="ri-close-line"></i></button>
                    </div>
                    <div class="download-modal-body">
                        <div class="download-animation">
                            <i class="ri-download-cloud-2-line"></i>
                        </div>
                        <p>《${this.gameTitle}》将在几秒钟后开始下载</p>
                        <div class="download-progress">
                            <div class="progress-bar"></div>
                        </div>
                        <div class="download-info">
                            <p>文件大小: ${this.gameSize}</p>
                            <p>版本: ${this.gameVersion}</p>
                        </div>
                    </div>
                </div>
            `;

      // 添加到文档
      document.body.appendChild(modal);

      // 添加样式
      const style = document.createElement("style");
      style.textContent = `
                .download-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(15, 23, 42, 0.8);
                    backdrop-filter: blur(10px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                    opacity: 0;
                    transition: opacity 0.2s ease;
                }
                .download-modal-content {
                    background: white;
                    border-radius: 16px;
                    width: 90%;
                    max-width: 500px;
                    overflow: hidden;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                    transform: translateY(20px);
                    transition: transform 0.2s ease;
                    will-change: transform;
                }
                .download-modal-header {
                    padding: 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                }
                .download-modal-header h3 {
                    font-size: 22px;
                    font-weight: 700;
                    color: #0f172a;
                    margin: 0;
                }
                .close-btn {
                    background: none;
                    border: none;
                    font-size: 24px;
                    cursor: pointer;
                    color: #64748b;
                    transition: color 0.2s ease;
                }
                .close-btn:hover {
                    color: #0f172a;
                }
                .download-modal-body {
                    padding: 30px;
                    text-align: center;
                }
                .download-animation {
                    font-size: 80px;
                    color: #6366f1;
                    margin-bottom: 20px;
                    animation: pulse 1.5s infinite;
                }
                @keyframes pulse {
                    0% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    50% {
                        transform: scale(1.05);
                        opacity: 0.8;
                    }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
                .download-progress {
                    height: 6px;
                    background: #e2e8f0;
                    border-radius: 3px;
                    margin: 25px 0;
                    overflow: hidden;
                }
                .progress-bar {
                    height: 100%;
                    width: 0;
                    background: linear-gradient(90deg, #6366f1, #8b5cf6);
                    border-radius: 3px;
                    transition: width 0.2s linear;
                    will-change: width;
                }
                .download-info {
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                    color: #64748b;
                }
            `;
      document.head.appendChild(style);

      // 显示模态框
      requestAnimationFrame(() => {
        modal.style.opacity = "1";
        modal.querySelector(".download-modal-content").style.transform =
          "translateY(0)";
      });

      // 进度条动画
      let progress = 0;
      const progressBar = modal.querySelector(".progress-bar");
      const progressInterval = setInterval(() => {
        progress += 2;
        progressBar.style.width = `${progress}%`;

        if (progress >= 100) {
          clearInterval(progressInterval);

          // 显示下载开始状态
          modal.querySelector(".download-animation i").className =
            "ri-arrow-down-circle-line";
          modal.querySelector(".download-animation").style.color = "#10b981";
          modal.querySelector(".download-modal-body p").textContent =
            "下载即将开始，请稍候...";

          // 模拟下载开始
          setTimeout(() => {
            const link = document.createElement("a");
            link.href = downloadLink;
            link.download = "荣耀战场-安装程序.exe";

            modal.querySelector(".download-modal-body p").textContent =
              "下载已开始，请勿关闭此窗口";
          }, 400);
        }
      }, 20);

      // 关闭按钮事件
      modal.querySelector(".close-btn").addEventListener("click", () => {
        modal.style.opacity = "0";
        modal.querySelector(".download-modal-content").style.transform =
          "translateY(20px)";
        setTimeout(() => {
          document.body.removeChild(modal);
        }, 200);
      });
    },

    // 检测滚动位置
    handleScroll() {
      if (!this.ticking) {
        requestAnimationFrame(() => {
          this.isScrolled = window.scrollY > 50;
          this.ticking = false;
        });
        this.ticking = true;
      }
    },

    // 滚动到指定位置
    scrollToSection(sectionId) {
      const targetElement = document.querySelector(sectionId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    },
  },

  // 生命周期钩子 - 挂载后
  mounted() {
    console.log("游戏概况页面已加载");

    this.ticking = false;
    window.addEventListener("scroll", this.handleScroll, { passive: true });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
        }
      });
    });

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".section, .fade-in").forEach((el) => {
      observer.observe(el);
    });

    requestAnimationFrame(() => {
      document.body.classList.add("loaded");
    });
  },

  // 销毁前移除事件监听
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
}).mount("#app");

// 添加页面图像延迟加载功能
document.addEventListener("DOMContentLoaded", () => {
  const preloadImages = () => {
    const imageUrls = ["images/hero-bg.jpg", "images/download-bg.jpg"];

    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  };

  setTimeout(preloadImages, 100);

  const cards = document.querySelectorAll(".feature-card, .requirement-col");

  cards.forEach((card) => {
    let rafId = null;

    card.addEventListener("mousemove", (e) => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        card.style.transition = "transform 0.1s ease";

        rafId = null;
      });
    });

    card.addEventListener("mouseleave", () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }

      card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
      card.style.transition = "transform 0.3s ease";
    });
  });

  let lastScrollY = window.scrollY;
  let ticking = false;

  window.addEventListener(
    "scroll",
    () => {
      lastScrollY = window.scrollY;

      if (!ticking) {
        requestAnimationFrame(() => {
          const heroSection = document.querySelector(".hero-section");
          if (heroSection) {
            heroSection.style.backgroundPositionY = `${lastScrollY * 0.3}px`;
          }
          ticking = false;
        });

        ticking = true;
      }
    },
    { passive: true }
  );
});
