# belvoly-vue-iaoa-examples

belvoly-vue-iaoa 示例项目。分为PC端和移动端组件库

## PC 端
1. @belvoly-vue-iaoa/ui 
2. @belvoly-vue-iaoa/tinymce 富文本组件

### 使用方式
1. 安装   
   `npm i @belvoly-vue-aioa/core @belvoly-vue-aioa/ui`
2. 在 main.js、ts
   ```js
   import { setGloablConfig } from '@belvoly-vue-aioa/core'
   // 设置UI组件使用的API 地址
   setGloablConfig({ apiHost: 'http://192.168.101.135:2001/api/' })
   ```
3. 使用组件
   查看具体示例代码

## Mobile 端
1. @belvoly-vue-iaoa/m-ui


### 使用方式
1. 安装   
   `npm i @belvoly-vue-aioa/m-core @belvoly-vue-aioa/m-ui`
2. 在 main.js、ts
   ```js
   import { setGloablConfig } from '@belvoly-vue-aioa/m-core'
   // 设置UI组件使用的API 地址
   setGloablConfig({ apiHost: 'http://192.168.101.135:2001/api/' })
   ```
3. 使用组件
   查看具体示例代码