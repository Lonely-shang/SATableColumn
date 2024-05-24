<template>
  <div style="width: 900px;">
    <el-table border :data="data">
    <sa-table-column label="占位列" prop="placeholder"></sa-table-column>
    <sa-table-column label="贴边定宽100" prop="fix" width="100" fixed="left"></sa-table-column>
    <sa-table-column label="定宽100少" prop="fixedLess" width="100"></sa-table-column>
    <sa-table-column label="固定宽度100-多" prop="fixedMore" width="100"></sa-table-column>
    <sa-table-column label="自由宽度-少1" prop="freedomLess1"></sa-table-column>
    <sa-table-column label="自由宽度-少2" prop="freedomLess2"></sa-table-column>
    <sa-table-column :fontSize="20" label="自由宽度-多1" prop="freedomMore1"></sa-table-column>
    <sa-table-column :fontRate="{OTHER_RATE: 1.5}" label="freedom-more2" prop="freedomMore2"></sa-table-column>
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
    <sa-table-column label="贴边 (自定义)" fixed="right">
      <template #default="scope">
        <el-button size="small">{{scope.row.fix}}</el-button>
      </template>
    </sa-table-column>
  </el-table>
  </div>
</template>
<script setup lang="ts">
defineOptions({ name: 'AllFit' })
import { onMounted, reactive } from 'vue';
import mockData from '../../mock/mockData'
const data = reactive([
  ...mockData.tableData
])
onMounted(() => {
  setTimeout(() => {
    data.push(...mockData.copyData)
  }, 1000)
})
</script>
<style></style>
