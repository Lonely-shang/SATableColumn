# **sa-table-column**

基于`vue3` `element plus` 组件库的 `el-table-column` 组件, 支持根据列内容自适应列宽。

### **安装**

```sh
npm install sa-table-column
pnpm add sa-table-column
bun add sa-table-column
```

### **使用**

> 注意: 需要事先引入 `Vue` 和 `Element-UI` 依赖库, 并在 `<el-table></el-table>` 组件下使用该组件

* 全局注册

  ```javascript
  import Vue from 'vue'
  import SaTableColumn from 'sa-table-column'
  app.use(SaTableColumn)

  // 支持自定义组件名
  app.use(SaTableColumn, {name: "SelfTableColumn"})
  ```
* 默认全部自动自适应

  ```html
  /// 固定宽度者以宽度为准, 非固定宽度者自适应
  <el-table border :data="data">
    <sa-table-column label="贴边定宽100" prop="fix" width="100" fixed="left"></sa-table-column>
    <sa-table-column label="定宽100少" prop="fixedLess" width="100"></sa-table-column>
    <sa-table-column label="固定宽度100-多" prop="fixedMore" width="100"></sa-table-column>
    <sa-table-column label="占位列" prop="placeholder"></sa-table-column>
    <sa-table-column label="占位列" prop="placeholder"></sa-table-column>
    <sa-table-column label="贴边 (自定义)" fixed="right">
      <template #default="scope">
        <el-button size="small">{{scope.row.fix}}</el-button>
      </template>
    </sa-table-column>
  </el-table>
  ```
* 部分不自适应 使用`:fit="false"`属性

  ```html
  <el-table border :data="data">
    <sa-table-column label="自由宽度-少" prop="freedomLess1"></sa-table-column>
    <sa-table-column label="自由宽度-不适应" prop="freedomMore1" :fit="false">
      <template #header >
        <div>
          <p>不适应</p>
          <p><code>:fit="false"</code></p>
        </div>
      </template>
    </sa-table-column>
    <sa-table-column label="freedom-more2" prop="freedomMore2"></sa-table-column>
    <sa-table-column label="占位列" prop="placeholder"></sa-table-column>
  </el-table>
  ```
* 部分自适应

  > 需要给`el-table`增加`:autoFit="false"` 并在`sa-table-column`上增加`fit or :fit="true"`实现部分自适应
  >

  ```html
  <el-table border stripe :data="data" :autoFit="false">
    <sa-table-column label="自由宽度-自适应!!!" prop="freedomMore1" fit>
      <template #header>
        <div class="mark">自由宽度-自适应 <code><table-column fit></code></div>
      </template>
    </sa-table-column>
    <sa-table-column label="freedom-more2" prop="freedomMore2"></sa-table-column>
    <sa-table-column label="占位列" prop="placeholder"></sa-table-column>
    <sa-table-column label="占位列" prop="placeholder"></sa-table-column>
  </el-table>
  ```
* 根据字体大小自适应

  > 在`sa-table-column`上使用`fontSize`、`fontRate`属性
  >
  > 1. `fontRate`: 自适应列宽时三种字符的字体比例
  > 2. `fontSize`: 字体大小px值, 用于计算各种字符占的像素宽度, 默认为 14    // 注意: 此字段并非控制样式的 `font-size`
  >

  ```typescript
  interface AsTableColumnFontRate {
    CHAR_RATE: number;
    NUM_RATE: number;
    OTHER_RATE: number;
  }
  ```
  ```html
  <el-table border stripe :data="data" :autoFit="false">
    <sa-table-column label="自由宽度-少2" prop="freedomLess2"></sa-table-column>
    <sa-table-column :fontSize="20" label="自由宽度-多1" prop="freedomMore1"></sa-table-column>
    <sa-table-column :fontRate="{OTHER_RATE: 1.5}" label="freedom-more2" prop="freedomMore2"></sa-table-column>
    <sa-table-column label="占位列" prop="placeholder"></sa-table-column>
  </el-table>
  ```

  `fontRate`自适应列宽时三种字符的字体比例值
  | 属性       | 说明 | Type   | 默认值 |
  | ---------- | ---- | ------ | ------ |
  | CHAR\_RATE | 汉字 | number | 1.1    |
  | NUM\_RATE  | 数字 | number | 0.65   |
  | OTHER\_RATE  | 其他 | number | 0.5   |

>备注: 可缺省任意字段, 组件将使用默认值.