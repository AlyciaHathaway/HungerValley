---
title: task_16
---

### CSS和JS在网页中的放置顺序是怎样的？

 - CSS使用link标签引入并放入head中
 - JS放置在body标签内的最后。外部引入`<script src=""></script>`，内部引入`<script></script>`

### 解释白屏和FOUC

**白屏**
 - 浏览器的bug：如果把 CSS 放在底部，对于IE浏览器,在某些场景下(新窗口打开,刷新等)页面会出现白屏，而不是内容逐步展现
 - 使用 @import 标签：即使 CSS link引入，并且放在头部，也可能出现白屏
 - 网速慢：CSS link引入，放在头部，但在低于2G网速的情况下，会有一段白屏时间
 - 对于图片和CSS，在加载时会并发加载(如一个域名下同时加载两个文件)。 但在加载 JavaScript 时，会禁用并发，并且阻止其他内容的下载.。所以把 JavaScript 放入页面顶部也会导致白屏现象。

**FOUC(Flash of Unstyled Content)**

 - 浏览器厂商的渲染模式：如果把 CSS 放在底部,对于IE浏览器,在某些场景下(点击链接,输入URL,使用书签进入等)，会出现 FOUC 现象(逐步加载无样式的内容，等CSS加载后页面突然展现样式)。对于 Firefox 会一直表现出 FOUC 。


### async和defer的作用是什么？有什么区别
![enter description here][1]
 - 没有 defer 或 async，浏览器遇到JS会立即下载并执行指定的脚本

![enter description here][2]
 - async，加载和渲染后续文档元素的过程将和 JS 的下载并行进行（异步），但在JS下载完立刻执行，会阻塞后续文档渲染

![enter description here][3]
 - defer，加载后续文档元素的过程将和 JS 的加载并行进行（异步），但 JS 的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成。

![enter description here][4]

### 简述网页的渲染机制

 - 解析 HTML 标签, 构建 DOM 树
 - 解析 CSS 标签, 构建 CSSOM 树
 - 把 DOM 和 CSSOM 组合成 渲染树 (render tree)
 - 在渲染树的基础上进行布局, 计算每个节点的几何结构
 - 把每个节点绘制到屏幕上 (painting)

![enter description here][5]


  [1]: http://home.jscode.me/uploads/default/original/2X/d/d22d83925d18bf3db02944d0c4c9ae14dc979c48.jpg
  [2]: http://home.jscode.me/uploads/default/optimized/2X/8/8fb770d05b2b79c03b6c69437bb9829f6fd6f4cb_1_690x84.jpg
  [3]: http://home.jscode.me/uploads/default/optimized/2X/9/9984d1d0d3efc1a61e4c12052502add2e2737ac5_1_690x85.jpg
  [4]: http://home.jscode.me/uploads/default/optimized/2X/8/8a8b064b6cf1c69127d633368fb2ad4d2610ab05_1_690x99.jpg
  [5]: http://home.jscode.me/uploads/default/optimized/2X/4/4ce0d6fcb620b662d55d072e68e0876957225289_1_690x322.png