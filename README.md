# 游戏网页开发项目文件指南

本文档提供了游戏网页开发项目中图片和下载文件的存放位置指南，帮助您轻松找到需要添加内容的位置。

## 图片文件存放位置

项目中需要创建以下图片文件夹结构，每个文件夹都有特定用途：

### 1. images/hero - 首页大图和英雄区域图片

- **hero-bg.jpg** - 首页顶部背景图

  - 尺寸建议：1920x1080px 或更大
  - 用于位置：CSS 文件中的.hero-section 背景
  - 代码位置：`css/styles.css` 中的 `.hero-section` 样式

- **download-bg.jpg** - 下载区域背景图

  - 尺寸建议：1920x1080px
  - 用于位置：CSS 中的 section-download 背景
  - 代码位置：`css/styles.css` 中的 `.section-download` 样式

- **game-overview.jpg** - 游戏概述图片
  - 尺寸建议：800x500px
  - 用于位置：替换"游戏场景预览"占位符
  - 代码位置：`index.html` 中的 `<div class="image-placeholder">游戏场景预览</div>`
  - 使用方法：`<img src="images/hero/game-overview.jpg" alt="游戏概述" class="overview-img">`

### 2. images/chapters - 五个游戏章节图片

需要创建以下章节图片到 images/chapters 目录：

- **chapter1.jpg** - 第一章：时空漩涡
- **chapter2.jpg** - 第二章：光影之谜
- **chapter3.jpg** - 第三章：汴京的挑战
- **chapter4.jpg** - 第四章：梦溪园的奇遇
- **chapter5.jpg** - 第五章：回归与传承
  - 尺寸建议：每张 400x250px
  - 用于位置：各章节卡片中
  - 使用方法示例：
  ```html
  <div class="chapter-card" data-number="壹">
    <div class="chapter-number">第一章</div>
    <img src="images/chapters/chapter1.jpg" alt="时空漩涡" />
    <h3>时空漩涡</h3>
    <p>被卷入时空漩涡，与沈括初次相遇，开始探索小孔成像的物理奥秘。</p>
  </div>
  ```

### 3. images/features - 游戏特色图片

需要创建以下特色图片到 images/features 目录：

- **feature1.jpg** - 沉浸式时空穿越
- **feature2.jpg** - 科学实验玩法
- **feature3.jpg** - 史实与教育融合
- **feature4.jpg** - 探索开放世界
- **feature5.jpg** - 分支剧情选择
- **feature6.jpg** - 古风音乐配乐
  - 尺寸建议：每张 300x200px
  - 用于位置：各特色卡片中
  - 使用方法示例：
  ```html
  <div class="feature-card fade-in ancient-feature-card">
    <div class="feature-icon ancient-icon">
      <i class="ri-time-line"></i>
    </div>
    <img
      src="images/features/feature1.jpg"
      alt="沉浸式时空穿越"
      class="feature-img"
    />
    <h3>沉浸式时空穿越</h3>
    <p>
      体验从现代穿越到北宋的奇妙旅程，与历史名人沈括面对面交流，亲历古代科学探索的过程。
    </p>
  </div>
  ```

### 4. images/team - 团队成员头像

需要创建以下团队成员头像到 images/team 目录：

- **teacher.jpg** - 指导老师(梅险)头像
- **member1.jpg** - 于逸潇头像
- **member2.jpg** - 陈业头像
- **member3.jpg** - 郑佳悦头像
- **member4.jpg** - 梁震宇头像
- **member5.jpg** - 赵晨曦头像
  - 尺寸：每张 200x200px (正方形，会显示为圆形)
  - 用于位置：`about.html` 中的团队成员部分
  - 使用方法：替换占位符，例如：
  ```html
  <div class="team-member-avatar">
    <img src="images/team/member1.jpg" alt="于逸潇" />
  </div>
  ```

### 5. images/ui - 界面元素和图标

需要创建以下 UI 元素到 images/ui 目录：

- **logo.png** - 工作室 logo
- **scroll-down.png** - 下滑指示图标
- **ancient-pattern.png** - 古风纹理背景
- **cloud-decoration.png** - 云纹装饰
  - 用于位置：网站界面使用的小图标、按钮等元素
  - 注意：大多数图标已通过 Remix Icon 引入，但如需自定义图标可放置于此

### 6. images/about - 关于我们页面的图片

需要创建以下关于页面的图片到 images/about 目录：

- **about-hero.jpg** - 关于我们页面的顶部大图

  - 尺寸：1920x800px
  - 用于位置：`about.html` 页面顶部
  - 代码位置：`css/about.css` 中的 `.about-hero` 样式
  - 使用方法：在 CSS 中设置背景图

- **mission.jpg** - 工作室理念图片

  - 尺寸：600x400px
  - 用于位置：替换"工作室理念"占位符
  - 代码位置：`about.html` 中的 `<div class="image-placeholder">工作室理念</div>`
  - 使用方法：`<img src="images/about/mission.jpg" alt="工作室理念">`

- **project-cover.jpg** - 游戏封面图
  - 尺寸：500x400px
  - 用于位置：替换"游戏封面"占位符
  - 代码位置：`about.html` 中的 `<div class="image-placeholder">游戏封面</div>`
  - 使用方法：`<img src="images/about/project-cover.jpg" alt="游戏封面">`

## 下载文件存放位置

### downloads/installer - 游戏安装程序

- **game-installer.exe** - 游戏安装程序（或其他格式）
  - 当前状态：需要创建
  - 用于位置：下载按钮的链接目标
  - 代码位置：`js/script.js` 中 `downloadGame` 方法内的 `downloadLink` 变量
  ```javascript
  downloadGame() {
    // 修改这里的链接为实际下载路径
    const downloadLink = "downloads/installer/game-installer.exe";
    // ...其余代码
  }
  ```

## 如何创建并使用图片

1. **创建必要的目录结构**

   ```
   d:\Desktop\游戏网页开发\images\
       ├── hero\
       ├── chapters\
       ├── features\
       ├── team\
       ├── ui\
       └── about\
   ```

   ```
   d:\Desktop\游戏网页开发\downloads\
       └── installer\
   ```

2. **创建或准备图片**

   - 可以使用设计软件创建图片，如 Photoshop、GIMP 或 Canva
   - 也可以从图库网站获取适合的图片，注意版权问题
   - 确保图片符合上述尺寸建议和格式要求

3. **替换 HTML 中的占位符**

   ```html
   <!-- 从这样: -->
   <div class="image-placeholder">游戏场景预览</div>

   <!-- 变成这样: -->
   <img
     src="images/hero/game-overview.jpg"
     alt="游戏场景预览"
     class="overview-img"
   />
   ```

4. **更新 CSS 中的背景图**

   ```css
   /* 从这样: */
   .hero-section {
     background-image: url("https://img.freepik.com/free-vector/chinese-painting-background_52683-63125.jpg");
   }

   /* 变成这样: */
   .hero-section {
     background-image: url("../images/hero/hero-bg.jpg");
   }
   ```

5. **更新团队成员头像**

   ```html
   <!-- 从这样: -->
   <div class="team-member-avatar">
     <div class="avatar-placeholder">YY</div>
   </div>

   <!-- 变成这样: -->
   <div class="team-member-avatar">
     <img src="images/team/member1.jpg" alt="于逸潇" />
   </div>
   ```

## 其他注意事项

- 图片应经过优化，以减少加载时间
- 考虑为重要图片准备不同尺寸的版本，以适应不同设备
- 可以使用 WebP 格式图片获得更好的压缩比和质量
- 游戏安装程序可能较大，考虑提供云存储链接或分卷下载选项
