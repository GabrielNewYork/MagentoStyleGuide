<template>
  <div class="tw-relative tw-my-40">

    <h2>{{componentTitle}}</h2>
    <ResponsiveContainer
        :default-breakpoint="desktopFirst ? 'desktop' : 'phone'"
        :breakpoints="breakpoints"
        :strategy="desktopFirst ? 'desktop-first' : 'mobile-first'"
        ref="container"
        class="responsive-container tw-bg-white tw-relative tw-border-solid tw-resize-x tw-overflow-auto tw-border-2 tw-border-gray-400"
    >
      <template slot-scope="container">
        <div class="w-full">
          <i-frame style="height: 600px;">
            <div class="tw-py-16">
              <slot></slot>
            </div>
          </i-frame>
        </div>
        <div class="tw-bg-gray-200">
          <p class="tw-px-2 tw-mb-2">Breakpoints</p>
          <div class="tw-flex tw-flex-row tw-justify-between tw-px-4 tw-py-3">
            <!-- Reset  -->
            <div class="infobox">
              <button class="tw-cursor-pointer focus:tw-outline-none tw-text-white tw-font-bold tw-text-md tw-py-2 tw-px-5 tw-border-0 tw-border-solid  tw-border-b-4 tw-border-gray-600 tw-rounded-md tw-bg-gray-500 hover:tw-bg-gray-400" @click="$refs.container.$el.style = ''">Reset width</button>
              <div class="tw-mt-2 tw-text-purple-400">Current width: {{ container.size | rounded }}px</div>
            </div>
            <!-- Breakpoints -->
            <div class="tw-flex tw-justify-around">
<!--              <div v-if="container.strategy === 'mobile-first'" class="tw-mr-4">-->
<!--                <span>{{ container.defaultBreakpoint }}</span>: <span>default</span>-->
<!--              </div>-->
              <template v-for="(size, breakpoint) in container.breakpoints">
                <div class="tw-mr-4" :key="breakpoint" v-if="isCurrentContainerBreakpoint(container, breakpoint)">
                  <button
                      class="tw-cursor-pointer focus:tw-outline-none tw-text-white tw-font-bold tw-text-md tw-py-2 tw-px-5 tw-border-0 tw-border-solid  tw-border-b-4 tw-border-purple-600 tw-rounded-md tw-bg-purple-500 hover:tw-bg-purple-400">
                    <span>{{ breakpoint }}</span>: <span>{{ desktopFirst ? '≤' : '≥' }} {{ size }}px</span>
                  </button>
                </div>
              </template>
            </div>
          </div>

        </div>


      </template>
    </ResponsiveContainer>
  </div>
</template>

<script>
import ResponsiveContainer from "./ResponsiveContainer";

export default {
  name: "RenderComponent",
  props: {
    componentTitle: {
      default: 'Component name'
    },
  },
  components: {
    ResponsiveContainer
  },
  computed: {
    breakpoints: () => {
      return {
        'sm': '640',
        'md': '768',
        // => @media (min-width: 768px) { ... }
        'lg': '1024',
        // => @media (min-width: 1024px) { ... }
        'xl': '1280',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536',
      }
    }
  },
  filters: {
    rounded: v => Math.round(v)
  },
  data: () => ({
    desktopFirst: false
  }),
  methods: {
    isCurrentContainerBreakpoint(container, current) {
      return (container.breakpoint === current);
    }
  }
}
</script>

<style scoped>

</style>