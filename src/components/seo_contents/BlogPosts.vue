<template>
  <render-component>

    <div class="tw-p-6">
      <div class="BlogPosts">
        <header class="tw-mb-12">
          <div class="tw-flex tw-justify-center tw-mb-8"><span class="tw-h-2 tw-w-16 tw-bg-black tw-block"></span></div>
            <h3 class="tw-text-black tw-text-2xl tw-text-center tw-font-lora">Interest to <span class="tw-text-red-base">know</span>
          </h3>
        </header>
        <div class="tw-grid sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-6">
          <template v-for="$index in 3">
            <a href="#" class="BlogPostsCard tw-mb-12" :key="$index">
              <div aria-hidden="true">
                <img
                    class="tw-w-full"
                    src="https://cdn-images.gabrielny.com/is/image/GabrielCo/Default/~wb-should-your-wedding-band-match-your-engagement-ring-exactly.jpg"
                    alt="">
              </div>
              <div class="tw-mt-4 tw-px-6">
                <h3 class="tw-text-black tw-text-xl tw-font-lora">I Don't Like My Engagement Ring, Now What?</h3>
                <p class="tw-font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel neque nunc. Sed facilisis sed
                  tellus nec volutpat. Sed eget nisl ipsum. Ut id eros ut arcu consequat ultrices porttitor eget
                  nisi.</p>
              </div>
            </a>
          </template>
        </div>
      </div>
    </div>

  </render-component>
</template>

<script>
import RenderComponent from "@/components/support/RenderComponent";

export default {
  name: "BlogPosts",
  components: {RenderComponent}
}
</script>

<style scoped>

</style>