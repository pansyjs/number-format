<h1 align="center" style="line-height: 50px; height: 50px">
  <span>@pansy/number-format<span>
</h1>

<div align="center">
  Format numbers as a text. 将数字格式化为文本。
</div>

## ✨ 特性

- 📦 开箱即用
- 💝 无任何第三方依赖
- 💻 使用 TypeScript 编写

## 🏗 安装

```sh
# npm install
$ npm install @pansy/number-format --save

# yarn install
$ yarn add @pansy/number-format
```

## 🔨 使用

```ts
import numberFormat from '@pansy/number-format';

// 直接使用
numberFormat().format(123456) 
// >> 123,456

// 不使用千分符
numberFormat({ thousandSeparator: false }).format(123456) 
// >> 123456

// 添加前缀
numberFormat({ prefix: '$' }).format(123456) 
// >> $123,456

// 添加后缀
numberFormat({ suffix: '/100' }).format(98) 
// >> 98/100

// 格式化
numberFormat({ template: '## [##] ##' }).format(123456) 
// >> 12 [34] 56
```

### 🎉 参数

|参数名|类型|默认值|描述|
|----|-----|----|----|
|prefix| `string` |--|设置数值的前缀|
|suffix| `string` |--|设置数值的后缀|
|groupSeparator| `string`| `,` |设置千分位标识符|
|thousandSeparator| `boolean` | `true` |是否显示千分位分隔符|
|precision| `number` | `true`|是否显示千分位分隔符|
|template| `string` | -- |格式化的模板, 使用`#`占位|
