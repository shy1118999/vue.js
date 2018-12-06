# 流程

## 制作首页App组件
    1. 完成 Header 区域，使用的是Mint-UI组件
    2. 制作底部的 Tabbarr 区域，使用的是MUI组件
        + 在制作样式图标时，注意引入css扩展库与字体文件
    3. 要在中间区域放置一个 router-view

## 改造 Tabbar 为 router-link
## 设置路由高亮
## 点击 tabbar 中的路由链接，展示对应的路由组件
## 制作首页轮播图
## 加载首页轮播图数据
    1. 获取数据，使用 vue-resource
    2. 使用vue-resource的this.$http.get获取
    3. 获取到的数据，要保存到data身上
    4. 使用v-for循环渲染每个item项
## 改造 九宫格 样式