// 创建Vue应用
const { createApp } = Vue;

// 初始化Vue应用
const app = createApp({
  // 数据
  data() {
    return {
      // 游戏基本信息
      gameTitle: "理科生穿越之旅——与北宋沈括的故事",
      shortGameTitle: "理科生穿越之旅",
      gameVersion: "v1.2.1",
      gameSize: "32.8 GB",
      isScrolled: false,

      // 游戏特色列表
      features: [
        {
          id: 1,
          iconClass: "ri-time-line",
          title: "沉浸式时空穿越",
          description:
            "体验从现代穿越到北宋的奇妙旅程，与历史名人沈括面对面交流，亲历古代科学探索的过程。",
        },
        {
          id: 2,
          iconClass: "ri-flask-line",
          title: "科学实验玩法",
          description:
            "通过互动实验验证古代科学原理，从小孔成像到磁针偏角，亲手操作并解锁物理学原理卡牌。",
        },
        {
          id: 3,
          iconClass: "ri-book-open-line",
          title: "史实与教育融合",
          description:
            "基于《梦溪笔谈》等历史文献，还原北宋时期的科学成就，在游戏中学习物理学知识。",
        },
        {
          id: 4,
          iconClass: "ri-compass-3-line",
          title: "探索开放世界",
          description:
            "在精心还原的北宋场景中自由探索，从小镇到汴京，再到梦溪园，体验古代中国的风貌。",
        },
        {
          id: 5,
          iconClass: "ri-movie-line",
          title: "分支剧情选择",
          description:
            "做出不同的选择将影响游戏进程和结局，多种结局等待发现，体验不同的历史可能性。",
        },
        {
          id: 6,
          iconClass: "ri-headphone-line",
          title: "古风音乐配乐",
          description:
            "原创古典音乐配乐，与游戏场景完美融合，让您沉浸在北宋的文化氛围中。",
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
            link.download = "理科生穿越之旅-安装程序.exe";

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

    // 添加章节卡片动画效果
    const chapterCards = document.querySelectorAll(".chapter-card");

    chapterCards.forEach((card) => {
      // 添加鼠标悬停效果
      card.addEventListener("mouseenter", () => {
        const number = card.getAttribute("data-number");
        card.style.borderColor = "rgba(99, 102, 241, 0.3)";
      });

      card.addEventListener("mouseleave", () => {
        card.style.borderColor = "rgba(99, 102, 241, 0.1)";
      });
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
