<template>
  <div id="app">

    <!-- Expand Btn  -->
    <a class="tw-fixed tw-right-0 tw-top-0 tw-m-10 tw-z-10 tw-text-gray-900 hover:tw-text-red-600" href="#"  v-on:click="open = !open">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></svg>
    </a>

    <!-- Content -->
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
      <Menu v-show="!open"></Menu>
      <Main></Main>
    </div>

  </div>
</template>


<script>
import Menu from './components/menu'
import Main from './components/main'

export default {
  name: 'app',
  components: {
    Menu,
    Main
  },
      data () {
      return {
         open: false 
      }
     } 
}
</script>

<style src="./assets/tailwind.css">
