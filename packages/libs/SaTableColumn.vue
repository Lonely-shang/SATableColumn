<template>
  <el-table-column v-bind="attrs" :key="attrs.label">
    <template v-if="!!headerSlot" #header="scope">
      <slot name="header" v-bind="scope"></slot>
    </template>
    <template v-if="!!defaultSlot" #default="scope">
      <slot name="default" v-bind="scope"></slot>
    </template>
  </el-table-column>
</template>

<script setup lang="ts">
defineOptions({ name: 'SaTableColumn' })
import { useAttrs, useSlots } from 'vue'

const attrs = useAttrs()
const { default: defaultSlot, header: headerSlot } = useSlots()
</script>
