<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import AllFit from './views/allFit/allFit.vue'
import PartFit from './views/partFit/PartFit.vue'
import PartNotFit from './views/partNotFit/PartNotFit.vue'
const activeNames = ref('all-fit')
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header> -->

  <!-- <main> -->
    <!-- <TheWelcome /> -->
    <el-tabs v-model="activeNames" type="border-card">
      <el-tab-pane label="全部自适应 (默认)" name="all-fit">
        <div class="el-table">固定宽度者以宽度为准, 非固定宽度者自适应</div>
        <all-fit />
      </el-tab-pane>
      <el-tab-pane label="部分不适应" name="part-not-fit">
        <div class="el-table">设置 <code>&lt;af-table-column :fit="false"&gt;</code> 者不适应</div>
        <part-not-fit />
      </el-tab-pane>
      <el-tab-pane label="部分自适应" name="part-fit">
        <div class="el-table">
          设置 <code>&lt;el-table :autoFit="false"&gt;</code>后, 设置
          <code>&lt;af-table-column fit&gt;</code> 者自适应
        </div>
        <part-fit />
      </el-tab-pane>
    </el-tabs>
  <!-- </main> -->
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
