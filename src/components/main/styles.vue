<template>
    
    <section class="tw-mb-20" id="Styles">
        <h1 class="tw-text-7xl tw-font-normal tw-tracking-wide tw-my-16 tw-font-sans">Styles</h1>
        
        <p>Gabriel & CO Styleguide uses <a class="tw-text-red-600 hover:tw-text-red-800 tw-no-underline" href="https://tailwindcss.com/">Tailwind</a> as our CSS framework.</p>
        <div class="tw-bg-gray-100 tw-p-5 tw-text-gray-700">Use tw- as prefix before any classes (eg. hover:tw-flex)</div>
    
        <h2 class="tw-text-3xl tw-font-bold tw-mb-4" id="Colors">Colors</h2>
        <Colors></Colors>

        <h2 class="tw-text-3xl tw-font-bold tw-mb-4" id="Typography">Typography</h2>
        <Typography></Typography>

        <h2 class="tw-text-3xl tw-font-bold tw-mb-4" id="Breakpoints">Breakpoints</h2>
        <Breakpoints></Breakpoints>
    </section>

</template>


<script>
import Colors from './styles/colors'
import Typography from './styles/typography'
import Breakpoints from './styles/breakpoints'

export default {
  name: 'Styles',
  components: {
      Colors,
      Typography,
      Breakpoints
  },
}
</script>