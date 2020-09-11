<template>
    
    <section class="tw-mb-20" id="Header">
        <h1 class="tw-text-7xl tw-font-normal tw-tracking-wide tw-my-16 tw-font-sans ">Header</h1>
        
        <h2 class="tw-text-2xl tw-font-bold tw-mb-4">Header Top</h2>
        <Headertop></Headertop>

        <h2 class="tw-text-2xl tw-font-bold tw-mb-4">Header Middle</h2>
        <Headermiddle></Headermiddle>

        <h2 class="tw-text-2xl tw-font-bold tw-mb-4">Header Bottom</h2>
        <Headerbottom></Headerbottom>
     </section>

</template>


<script>

import Headertop from './header/headertop'
import Headermiddle from './header/headermiddle'
import Headerbottom from './header/headerbottom'

export default {
    name: 'Header',
    components: {
        Headertop,
        Headermiddle,
        Headerbottom,
  },
}

</script>