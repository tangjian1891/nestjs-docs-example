# nestjs-docs-demo
带你一步步分解官方文档，手把手撸穿nestjs。正在更新中...

# 由于 nestjs 官网的 api 和功能例子太多，无法一次性消化，遂采取逐一测试的方式，加深对官网例子学习与使用

# 对应的概念使用可以去对应的示例代码中查看 md 指南,可能有你所需要的。

# 通用性的功能代码。例如创建一个项目等等。快捷生成指令在这里找

- 1.安装 cli 脚手架.安装一次即可
  npm i -g @nestjs/cli

- 2.创建一个初始化的项目
  nest new project-name

FAQ: 1.访问路由发现 404?

- 查看控制器是否有注册到模块，查看模块是否注册到 AppModule 根模块.
