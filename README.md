# 游戏网页开发项目文件指南

本文档提供了游戏网页开发项目中图片和下载文件的存放位置指南，帮助您轻松找到需要添加内容的位置。

## 图片文件存放位置

项目中已经创建了以下图片文件夹结构，每个文件夹都有特定用途：

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

### 2. images/chapters - 五个游戏章节图片

- **chapter1.jpg** - 第一章：时空漩涡
- **chapter2.jpg** - 第二章：光影之谜
- **chapter3.jpg** - 第三章：汴京的挑战
- **chapter4.jpg** - 第四章：梦溪园的奇遇
- **chapter5.jpg** - 第五章：回归与传承
  - 尺寸建议：每张 400x250px
  - 用于位置：各章节卡片中
  - 代码更新方法：可在每个章节卡片中添加 `<img src="images/chapters/chapterX.jpg" alt="章节X">`

### 3. images/features - 游戏特色图片

- 可以为每个游戏特色添加图片，例如：
  - **feature1.jpg** - 沉浸式时空穿越
  - **feature2.jpg** - 科学实验玩法
  - **feature3.jpg** - 史实与教育融合
  - 等等...
  - 尺寸建议：每张 300x200px
  - 用于位置：各特色卡片中

### 4. images/team - 团队成员头像

- **teacher.jpg** - 指导老师(梅险)头像
- **member1.jpg** - 于逸潇头像
- **member2.jpg** - 陈业头像
- **member3.jpg** - 郑佳悦头像
- **member4.jpg** - 梁震宇头像
- **member5.jpg** - 赵晨曦头像
  - 尺寸建议：每张 200x200px (正方形，会显示为圆形)
  - 用于位置：`about.html` 中的团队成员部分
  - 代码更新方法：用 `<img src="images/team/xxx.jpg" alt="成员名">` 替换占位符

### 5. images/ui - 界面元素和图标

- 存放网站界面使用的小图标、按钮等元素
- 大多数图标已通过 Remix Icon 引入，但如需自定义图标可放置于此

### 6. images/about - 关于我们页面的图片

- **about-hero.jpg** - 关于我们页面的顶部大图

  - 尺寸建议：1920x800px
  - 用于位置：`about.html` 页面顶部
  - 代码位置：`css/about.css` 中的 `.about-hero` 样式

- **mission.jpg** - 工作室理念图片

  - 尺寸建议：600x400px
  - 用于位置：替换"工作室理念"占位符
  - 代码位置：`about.html` 中的 `<div class="image-placeholder">工作室理念</div>`

- **project-cover.jpg** - 游戏封面图
  - 尺寸建议：500x400px
  - 用于位置：替换"游戏封面"占位符
  - 代码位置：`about.html` 中的 `<div class="image-placeholder">游戏封面</div>`

## 下载文件存放位置

### downloads/installer - 游戏安装程序

- **game-installer.exe** - 游戏安装程序（或其他格式）
  - 用于位置：下载按钮的链接目标
  - 代码位置 1：`js/script.js` 中 `downloadGame` 方法内的 `downloadLink` 变量
    ```javascript
    // 位于第54行左右
    downloadGame() {
      // 修改这里的链接为实际下载路径
      const downloadLink = "downloads/installer/game-installer.exe";
      // ...其余代码
    }
    ```
  - 代码位置 2：`js/script.js` 中创建下载链接的部分
    ```javascript
    // 位于第140行左右
    setTimeout(() => {
      const link = document.createElement("a");
      // 修改这里的链接为实际下载路径
      link.href = downloadLink;
      link.download = "理科生穿越之旅-安装程序.exe";
      // ...其余代码
    }, 400);
    ```

## 如何添加图片到网页中

1. 将准备好的图片放入对应的文件夹中
2. 对于直接在代码中引用的图片（如背景图），确保文件名与 CSS 中的引用一致
3. 对于需要替换占位符的图片，可以：
   - 使用图片替换 `<div class="image-placeholder">xxx</div>` 占位元素
   - 例如：`<img src="images/chapters/chapter1.jpg" alt="时空漩涡">`

## 其他注意事项

- 确保所有图片都经过优化，以减少加载时间
- 考虑为重要图片准备不同尺寸的版本，以适应不同设备
- 可以使用 WebP 格式图片来获得更好的压缩比和质量
- 游戏安装程序可能较大，考虑提供云存储链接或分卷下载选项
