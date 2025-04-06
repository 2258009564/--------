// 关于我们页面的专用脚本

document.addEventListener("DOMContentLoaded", function () {
  // 设置当前页面为关于页面
  const setupNavigation = () => {
    // 获取当前页面路径
    const currentPath = window.location.pathname;

    // 处理顶部导航栏
    const header = document.querySelector(".header");
    if (header) {
      // 为导航链接添加激活状态
      const navLinks = document.querySelectorAll(".nav-link");
      navLinks.forEach((link) => {
        const href = link.getAttribute("href");

        // 设置关于页面的导航为活跃状态 - 修复高亮逻辑
        if (href && href.includes("about.html")) {
          link.classList.add("active-link");
          // 清除可能的hover效果
          link.classList.remove("ancient-hover");
          // 确保立即下载按钮不会获得普通的active-link样式
          if (link.classList.contains("nav-highlight")) {
            link.classList.remove("active-link");
          }
        } else {
          link.classList.remove("active-link");
        }

        // 添加悬停效果
        link.addEventListener("mouseenter", () => {
          if (!link.classList.contains("active-link")) {
            link.classList.add("ancient-hover");
          }
        });

        link.addEventListener("mouseleave", () => {
          link.classList.remove("ancient-hover");
        });
      });

      // 添加滚动时的样式变化
      window.addEventListener(
        "scroll",
        () => {
          if (window.scrollY > 20) {
            header.classList.add("scrolled");
            header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.1)";
            header.style.backdropFilter = "blur(8px)";
          } else {
            header.classList.remove("scrolled");
            header.style.boxShadow = "none";
            header.style.backdropFilter = "blur(0px)";
          }
        },
        { passive: true }
      );
    }
  };

  // 初始化导航设置
  setupNavigation();

  // 为团队成员卡片添加悬停效果
  const teamCards = document.querySelectorAll(".team-member-card");

  teamCards.forEach((card) => {
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

        const rotateX = (y - centerY) / 15; // 减小角度使效果更微妙
        const rotateY = (centerX - x) / 15;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        card.style.transition = "transform 0.1s ease";

        // 添加古风风格的光影效果
        const lightIntensity = 0.03;
        card.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,${lightIntensity}), transparent 40%)`;

        rafId = null;
      });
    });

    card.addEventListener("mouseleave", () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }

      card.style.transform = "";
      card.style.transition = "transform 0.3s ease, background-image 0.3s ease";
      card.style.backgroundImage = "";
    });
  });

  // 为项目卡片添加视差效果
  const projectCard = document.querySelector(".project-card");
  if (projectCard) {
    projectCard.addEventListener("mousemove", (e) => {
      const rect = projectCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const width = rect.width;
      const height = rect.height;

      // 计算鼠标在卡片上的相对位置 (0-1)
      const xPercent = x / width;
      const yPercent = y / height;

      // 找到所有需要移动的元素
      const projectImage = projectCard.querySelector(".project-image");
      const projectInfo = projectCard.querySelector(".project-info");

      // 计算位移
      const moveX = (xPercent - 0.5) * 10;
      const moveY = (yPercent - 0.5) * 10;

      // 施加变换
      if (projectImage) {
        projectImage.style.transform = `translate(${moveX * -1}px, ${
          moveY * -1
        }px)`;
      }

      if (projectInfo) {
        projectInfo.style.transform = `translate(${moveX * 0.5}px, ${
          moveY * 0.5
        }px)`;
      }
    });

    projectCard.addEventListener("mouseleave", () => {
      const projectImage = projectCard.querySelector(".project-image");
      const projectInfo = projectCard.querySelector(".project-info");

      if (projectImage) {
        projectImage.style.transform = "";
      }

      if (projectInfo) {
        projectInfo.style.transform = "";
      }
    });
  }

  // 平滑滚动处理
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // 添加页面淡入效果
  const pageElements = document.querySelectorAll(
    ".section, .team-member-card, .project-card, .about-header-content"
  );

  // 使用Intersection Observer添加淡入效果
  const fadeInObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          fadeInObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  pageElements.forEach((el) => {
    el.classList.add("fade-in");
    fadeInObserver.observe(el);
  });

  // 页面加载完成后的初始动画
  requestAnimationFrame(() => {
    document.body.classList.add("loaded");

    // 添加页面头部的初始可见性
    setTimeout(() => {
      const aboutHeader = document.querySelector(".about-header-content");
      if (aboutHeader) {
        aboutHeader.classList.add("visible");
      }
    }, 300);
  });
});
