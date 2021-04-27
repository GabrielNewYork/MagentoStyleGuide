<template>
  <div>
    <render-component>

      <div class="tw-bg-green-200 md:tw-bg-green-700 lg:tw-bg-yellow-200 xl:tw-bg-blue-200 2xl:tw-red-darkest">Teste Me2!</div>


    </render-component>
  </div>

</template>

<script>


import RenderComponent from "@/components/support/RenderComponent";
export default {
  name: "BreakpointTest",
  components: {RenderComponent},
}
</script>

<style scoped>

</style>