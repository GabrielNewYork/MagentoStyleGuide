<template>
  <div>
    <splitpanes class="default-theme" style="height: 400px">
      <pane>

        <div class="tw-h-full tw-bg-blue-400 md:tw-bg-red-400 lg:tw-bg-green-200 xl:tw-bg-yellow-100">
          Teste de cor
        </div>

      </pane>
      <pane>
        <span>Teste</span>
      </pane>
    </splitpanes>
    <br/>
    <br/>
  </div>

</template>

<script>
import {Splitpanes, Pane} from 'splitpanes';
import 'splitpanes/dist/splitpanes.css';

export default {
  name: "PopularSearches",
  components: {Splitpanes, Pane},
}
</script>

<style scoped>

</style>