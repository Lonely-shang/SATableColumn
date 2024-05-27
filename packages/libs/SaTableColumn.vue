<template>
  <el-table-column
    v-bind="attrs"
    :label="props.label"
    :key="attrs.label"
    :min-width="minWidth"
    :class-name="className"
    >
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
  import type { AsTableColumnFontRate, AsTableColumnProps } from 'packages/types';
  import { asTableColumnConfig, getColumnContentLength, transChar } from '../utils';
  import { computed, getCurrentInstance, nextTick, reactive, useAttrs, useSlots, watch } from 'vue'

  const instance = getCurrentInstance()?.parent as any;

  const config = reactive({
    minLength: 5,
    getComputedWidth: 0,
  })

  const attrs = useAttrs()
  const { default: defaultSlot, header: headerSlot } = useSlots()

  const props = withDefaults(defineProps<AsTableColumnProps>(),{
    label: () => '请设置label属性',
    fontSize: () => asTableColumnConfig.fontSize,
    fontRate: () => asTableColumnConfig.fontRate,
  })

  const values = computed(() => {
    const data = instance?.ctx?.data as any[] || []
    return data.map(item => item[attrs.prop as string])
  })

  const isFit = computed(() => {
    if (instance.attrs.autoFit === false) {
      return attrs.fit === true || attrs.fit === '';
    }
    return attrs.fit !== false;
  })

  const className = computed(() => {
    const parentClass = attrs['class-name'] || ''
    const classPre = attrs.prop || `encode-${transChar(props.label)}-column`
    return classPre ? `${parentClass} ${classPre}-column` : ''
  })

  const fontSize = computed(() => {
    return props.fontSize || asTableColumnConfig.fontSize
  })

  const fontRate = computed<AsTableColumnFontRate>(() => {
    return {
      ...asTableColumnConfig.fontRate!,
      ...props.fontRate
    }
  })

  const minWidth = computed(() => {
    if (!!attrs.label || !isFit.value) return undefined
    const maxOne = Math.max(config.minLength, props.label.length * fontRate.value.CHAR_RATE) * fontSize.value! + 20
    return attrs.width || Math.max(maxOne, config.getComputedWidth);
  })

  watch(values, (newVal) => {
    isFit.value !== false && nextTick(() => {
      if (defaultSlot) {
        setTimeout(() => {
          const bodyWrapper = attrs.fixed ? document.querySelector(`.el-table__fixed${attrs.fixed === 'right' ? `-${attrs.fixed}` : ''}`)?.querySelector('.el-table__fixed-body-wrapper') : document.querySelector('.el-table__body-wrapper')
          const nodes = bodyWrapper?.querySelectorAll(`.${attrs.prop || `encode-${transChar(props.label)}`}-column`)
          if (nodes?.length) {
            const target: Element[] = []
            const getComputedLength: number[] = []
            Array.from(nodes).forEach((node: Element) => {
              target.push(node)
              getComputedLength.push(node.querySelector('.cell')?.scrollWidth || 0);
            })
            config.getComputedWidth = Math.max(...getComputedLength)
            config.minLength = getColumnContentLength(newVal, fontRate.value)
          }
        }, 0)
      } else {
        config.minLength = getColumnContentLength(newVal, fontRate.value)
      }
    })
  }, {
    deep: true,
    immediate: true
  })


</script>
