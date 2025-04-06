// 关于我们页面的专用脚本

document.addEventListener("DOMContentLoaded", function () {
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

        rafId = null;
      });
    });

    card.addEventListener("mouseleave", () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }

      card.style.transform = "";
      card.style.transition = "transform 0.3s ease";
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
});
