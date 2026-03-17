# 个人主页模板

这是一个纯静态的个人主页，不依赖构建工具，直接双击 `index.html` 就可以打开。

## 你主要需要编辑的文件

- `site-data.js`
  - 修改姓名、简介、按钮链接、新闻、论文、获奖和实习信息
  - 后续新增论文时，复制 `publications` 数组中的一个对象即可
  - 新增获奖或实习时，分别编辑 `awards` 和 `internships` 数组
- `styles.css`
  - 修改颜色、间距、卡片样式和整体视觉风格
- `index.html`
  - 页面骨架，一般不用频繁改

## 图片放置方式

当前模板默认使用同目录下的图片：

- `photo.jpg`
- `cvpr26_palmflow.jpg`
- `tip25_PFIG.jpg`
- `tifs24_PDFG.jpg`
- `tim23_PGRP.jpg`

如果你后面增加图片：

1. 直接放在当前目录，或单独新建 `assets/` 文件夹。
2. 在 `site-data.js` 中把 `photo` 或 `image` 改成对应路径。

## 常见修改示例

### 改名字

把：

```js
name: "请输入你的名字"
```

改成：

```js
name: "张三"
```

### 改邮箱

把：

```js
href: "mailto:your_email@example.com"
```

改成你的真实邮箱地址。

### 新增一篇论文

在 `publications` 数组里复制一个对象，修改：

- `title`
- `authors`
- `venue`
- `summary`
- `image`
- `links`

## 可选下一步

如果你希望，我还可以继续帮你：

- 把内容直接替换成你的真实个人信息
- 增加 `Awards`、`Experience`、`Teaching`、`Services` 等版块
- 做成中英双语切换版本
- 帮你顺手部署到 GitHub Pages
