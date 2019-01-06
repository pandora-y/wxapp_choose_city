本插件已开源：[https://github.com/zh28/wxapp_choose_city](https://github.com/zh28/wxapp_choose_city)

# 属性

|    属性     |   类型   | 默认值 | 说明                     |
| :--------- | :------ | :----: | :----------------------- |
| haveHistory | Boolean  |  true  | 是否需要显示历史选择一栏 |
| bindconfirm | Function |  none  | 点击“完成”后的回调       |

# 回调参数

|       属性       |  类型  | 说明       |
| :-------------- | :---- | :--------- |
|       code       | Number | 地区编码   |
|    firstChar     | String | 拼音首字母 |
|       name       | String | 城市名称   |
|       rank       | Number | ----       |
| subLevelModeList |  null  | null       |

# 示例

* app.json

  ```json
  {
      "plugins": {
          "chooseCity": {
              "version": "1.0.0",
              "provider": "wxcdf8cca1bde64773"
          }
      }
  }
  ```


* index.json

  ```json
  {
      "navigationBarTitleText": "选择城市",
      "usingComponents": {
          "city-choose": "plugin://chooseCity/citys"
      }
  }
  ```


* index.wxml

  ```html
  <city-choose have-history="{{false}}" catch:confirm="confirm" />
  ```

* index.js

  ```js
  Page({
      confirm({ detail }) {
          console.log(detail);
          /*
          输出：
          {
              code: 101280600,
              firstChar: "s",
              name: "深圳",
              rank: 0,
              subLevelModelList: null
          }
          */
      }
  });
  ```


# 预览

![预览图](https://mmbiz.qpic.cn/mmbiz_gif/lgHPYChuCFb2hOC2ydQtPY5lvCOSiaOdzQ97IhVTmQ5QQdQV8Fibr7sw6xibicNWsRVuenETorj3HDTM4HVpGkS7og/0)
