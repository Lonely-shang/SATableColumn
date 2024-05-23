<template>
  <el-table border>
    <sa-table-column prop="date" label="编号" width="180" />
    <el-table-column prop="date" label="日期" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
  </el-table>
</template>
<script setup lang="ts">
defineOptions({ name: 'AllFit' })
</script>
<style></style>
