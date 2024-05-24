<template>
  <el-table border stripe :data="mockData.tableData" :autoFit="false">
    <sa-table-column label="占位列" prop="placeholder"></sa-table-column>
    <sa-table-column label="贴边定宽100" prop="fix" width="100" fixed="left"></sa-table-column>
    <sa-table-column label="定宽100少" prop="fixedLess" width="100"></sa-table-column>
    <sa-table-column label="固定宽度100-多" prop="fixedMore" width="100"></sa-table-column>
    <sa-table-column label="自由宽度-多" prop="fixedMore"></sa-table-column>
    <sa-table-column label="自由宽度-少" prop="freedomLess1"></sa-table-column>
    <sa-table-column label="自由宽度-自适应!!!" prop="freedomMore1" fit>
      <template #header>
        <div class="mark">自由宽度-自适应 <code>&lt;table-column fit&gt;</code></div>
      </template>
    </sa-table-column>
    <sa-table-column label="freedom-more2" prop="freedomMore2"></sa-table-column>
    <sa-table-column label="占位列" prop="placeholder"></sa-table-column>
    <sa-table-column label="占位列" prop="placeholder"></sa-table-column>
    <sa-table-column label="占位列" prop="placeholder"></sa-table-column>
    <sa-table-column label="占位列" prop="placeholder"></sa-table-column>
    <sa-table-column label="占位列" prop="placeholder"></sa-table-column>
    <sa-table-column label="占位列" prop="placeholder"></sa-table-column>
    <sa-table-column label="占位列" prop="placeholder"></sa-table-column>
    <sa-table-column label="占位列" prop="placeholder"></sa-table-column>
    <sa-table-column label="占位列" prop="placeholder"></sa-table-column>
    <sa-table-column label="占位列" prop="placeholder"></sa-table-column>
    <sa-table-column label="占位列" prop="placeholder"></sa-table-column>
    <sa-table-column label="占位列" prop="placeholder"></sa-table-column>
    <sa-table-column label="占位列" prop="placeholder"></sa-table-column>
    <sa-table-column label="占位列" prop="placeholder"></sa-table-column>
    <sa-table-column label="占位列" prop="placeholder"></sa-table-column>
    <sa-table-column label="贴边的 (自定义)" fixed="right">
      <template #default="scope">
        <el-button>{{scope.row.fix}}</el-button>
      </template>
    </sa-table-column>
  </el-table>
</template>

<script setup lang="ts">
  defineOptions({ name: 'PartFit' })
  import mockData from '../../mock/mockData'
</script>

<style scoped>
  .mark {
    color: red;
    font-weight: 600;
  }
</style>
