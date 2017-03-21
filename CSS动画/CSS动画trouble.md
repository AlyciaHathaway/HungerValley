---
title: CSS动画trouble
---

 - translate和rotate的顺序很重要
 - rotate时的基点很重要，transform-origin要设置好是围绕哪个轴旋转
 - 如果原地拼装，要注意DOM顺序，上面的会覆盖下面的