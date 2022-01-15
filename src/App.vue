<style>
</style>
<template>
  <div id="app" class="tw-py-10 tw-bg-red-100">
    <router-view class="view tw-bg-white"></router-view>
  </div>
</template>


<script>


export default {
  name: 'app',

      data () {
      return {
         open: false 
      }
     } 
}
</script>


