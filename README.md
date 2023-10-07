# 找餐店 APP

## **作品緣由**

<font color="blue">**作品緣由**</font>

> 因每天都會到早餐店用餐，看著他們做的一套這個 APP 服務，想說可以發揮自己所學技能來實作一套自己 APP 來跟他們致敬；看到他們運用了二維碼點餐技術，於是開始思考這後面商業邏輯怎麼運作，雖然無法得知他們做的邏輯，但能透過點餐方式自己探索"可能"的點餐流程，這是覺得相當有趣的點。

:::

## **APP 功能流程**

:::spoiler <font color="blue">**流程**</font>
![](https://hackmd.io/_uploads/BJxZ9a7l6.png)

## **功能介紹**

<font color="blue">**功能介紹**</font>

| 功能           | 顧客版 | 業主版 |
| -------------- | ------ | ------ |
| 選購早餐       | ✔      |        |
| 精選早餐       | ✔      |        |
| 新增購物車     | ✔      |        |
| 刪除購物車     | ✔      |        |
| 二維碼送出訂單 | ✔      |        |
| 直接送單       | ✔      |        |
| 訂單追蹤       | ✔      |        |
| 餐點反饋       | ✔      |        |
| 登入頁面       | ✔      | ✔      |
| 接單管理       |        | ✔      |
| 新增餐點       |        | ✔      |
| 顧客反饋       |        | ✔      |

:::

## **功能截圖 (客戶版)**

<font color="blue">**APP 功能截圖 (客戶版)**</font>

>

![](https://hackmd.io/_uploads/r1gM3hqXea.png)
![](https://hackmd.io/_uploads/BJeMn39QlT.png)
![](https://hackmd.io/_uploads/B1Gh35XeT.png)
![](https://hackmd.io/_uploads/H1f235QgT.png)
![](https://hackmd.io/_uploads/SJzh29mxa.png)
![](https://hackmd.io/_uploads/ByG339Qlp.png)
:::

## **功能截圖 (業主版)**

<font color="blue">**APP 功能截圖 (業主版)**</font>

![](https://hackmd.io/_uploads/SyxeTqmep.png)
![](https://hackmd.io/_uploads/SyWx69QeT.png)
![](https://hackmd.io/_uploads/r1-xT9mxp.png)
:::

**API**

## **使用技術與工具**

<font color="blue">**使用技術與工具**</font>

| 使用軟體                                      | 用途                                                   | 備註     |
| --------------------------------------------- | ------------------------------------------------------ | -------- |
| ![](https://hackmd.io/_uploads/r1Cvq57e6.png) | 部署 JSON Server API 環境                              |          |
| ![](https://hackmd.io/_uploads/Hk8Fc57lT.png) | 將 APP 所需要用到的資料透過編輯 json 檔 來建構後端服務 |          |
| ![](https://hackmd.io/_uploads/B1Xs9cmxa.png) | 撰寫 APP 的框架                                        |          |
| ![](https://hackmd.io/_uploads/SyUTq9QeT.png) | 生成 apk 構建工具                                      |          |
| ![](https://hackmd.io/_uploads/S1lyj9Ql6.png) | 撰寫 Code                                              |          |
| ![](https://hackmd.io/_uploads/SyGS7oQlp.png) | 調整專案設定                                           |          |
| ![](https://hackmd.io/_uploads/H1Gs7jXxa.png) | 構建專案                                               | V18.18.0 |
| ![](https://hackmd.io/_uploads/SyvPNp7gT.png) | API 函式庫                                             |          |
| ![](https://hackmd.io/_uploads/H1lP4oQea.png) | 測試 API 工具                                          |          |
| ![](https://hackmd.io/_uploads/HkZFuiXlT.png) | 查詢資料                                               |          |
| ![](https://hackmd.io/_uploads/rygNE67gT.png) | Git                                                    |          |
| ![](https://hackmd.io/_uploads/BJLxEameT.png) | Git Desktop 版控工具                                   |          |

:::

## **遇到問題**

:::spoiler <font color="blue">**遇到問題**</font>

> 對於一開始 JavaScript ES6 箭頭函數語法不熟悉，在撰寫功能時，透過 FlatList 渲染列表元件在 ItemRender 逐行資料時，加上點擊事件，怎麼 Hot Reload 頁面重刷新會導致資料被提交 API，這不是我想要的，想要的是當用戶按下 Item 點擊事件方可提交送 API 請求，於是找到了原來是寫法上錯誤導致的問題

```

> 在新增訂單到JSON Server 發送請求時 每一筆資料的id 在渲染FlatList列表必須要無重複 否則會有警告 所以就在發送訂單請求時候將id做一個random，但之後可能必須要將每一筆訂單都Load回到APP端逐筆檢查是否有重複id，亦或是後端人員必須檢查id重複性，提示給前端知道

```

const handleClickPostOrder = ( ) =>{
let data =
{
id: Math.random().toString(36).substr(2, 9),
M_Name: "測試",
M_DT: "2023-09-23 10:30:00",
M_ImgSrc: "",
OrderType: 2,
CIdx: 1,
Price: 30,
Progress: 0
}
axios.post("https://json-server-vercel-w33n-git-main-raychen1996.vercel.app/Orders",data)
.then((response) => {
console.log(response.data)
Alert.alert("已送單！");
})
.catch((error) => {
Alert.alert("送單失敗！");
});
}

```

也可以用keyExtractor的屬性透過元件自己產生index 也可讓警告消失
![](https://hackmd.io/_uploads/SJ0xJ67e6.png)

:::

**未來規劃&展望**
--

:::spoiler <font color="blue">**未來規劃**</font>

> 希望能夠再將React 例如:useState useEffect狀態管理、以及常用元件生命週期Hook 知識點使用方式補齊更加熟悉處理方式
> 希望能夠提高切版細緻度更貼近設計師真實線稿圖的設計

:::

**希望優化此作品的點**
--

:::spoiler <font color="blue">**希望優化**</font>

- [ ] 登入登出功能串接
- [ ] 店家可透過APP控制訂單進度 也可掌握接單 製作 送單 客戶完單
- [ ] 將其餘JSON Server  CRUD API功能串接完成
- [ ] 列表分類
- [ ] 結合真實手機APP相機功能來完成業主掃描二維條碼餐點流程
- [ ] 顧客可瀏覽每日餐點輪播動效
- [ ] 可以跟第三方串接登入API
- [ ] 業主APP能及時與伺服器刷新達到通知定通知效果

:::

**專案連結**
--

  <font color="blue">**專案連結**</font>

[APK下載連結](https://drive.google.com/drive/folders/1W-dhPT1oGvodOcJt7Nzitqp-Fn__Uz3m?usp=sharing)

[業主版Repo](https://github.com/RayChen1996/orderbreakfast_Boss)

[顧客版Repo](https://github.com/RayChen1996/orderbreakfast)

:::
```
