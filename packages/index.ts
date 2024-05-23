import type { App } from 'vue'

import SATableColumn from './libs/SaTableColumn.vue'

const SaTableColumn = {
  install: (app: App, options?: { componentName: string }) => {
    const componentName = options?.componentName || 'SaTableColumn'
    app.component(componentName, SATableColumn)
  }
}

export default SaTableColumn
