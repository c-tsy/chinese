# 中文数字和阿拉伯数字互转函数库
## 安装/install
```shell
npm install @ctsy/chinese
npx install @ctsy/chinese
yarn add @ctsy/chinese
```

## 使用/use
```typescript
import {chinese2number,number2chinese} from '@ctsy/chinese'
let chinese = "叁仟伍佰元整"
let num = chinese2number(chinese);// num = 3500
// 简体模式
let simpleChinese = number2chinese(num,true) // 三千五百
// 繁体模式
let traChinese = number2chinese(num) // 叁仟伍佰
```

欢迎使用。目前在中文转数字大于百万时似乎有问题。请联系castle@tansuyun.cn