<template>
  <section id="MediaPages" class="tw-mb-20">
    <h1 class="tw-text-7xl tw-font-normal tw-tracking-wide tw-my-16 tw-font-sans tw-mr-4">Media Pages - Post Card</h1>
    <div>


      <br>

      <div class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-12">

        <a class="MediaPageCard tw-block tw-border tw-border-solid tw-border-gray-200 hover:tw-border-gray-400 tw-cursor-pointer">
          <figure class="MediaPageCardThumb tw-m-0">
            <img class="tw-w-full"
                 src="https://cdn-images.gabrielny.com/is/image/GabrielCo/Default/~2020-Designer-Flash-Top-Banner-Oscar-De-la-Re-new.jpg"
                 alt="Designer flash Oscar de la Renta">
          </figure>
          <div class="MediaPageCardContent tw-p-12">
            <h2 class="MediaPageCardTitle tw-text-dark01 tw-font-sans tw-w-full tw-text-center tw-m-0 tw-mb-8 tw-text-4xl">
              Oscar de la
              renta</h2>
            <div
                class="MediaPageCardExcerpt tw-text-dark01 tw-font-sans tw-w-full tw-text-center tw-text-lg tw-leading-12 tw-tracking-wide">
              Oscar de La Renta Oscar De La Renta is one the most desired and revered brand in American fashion. Even
              the name has the prefect lilt and rhythm to describe a line of clothing that embraces romance, that
              creates drama, and that moves as sinuously as if the ever charming Mr. De La Renta was gliding you across
              the dance floor himself. So imagine how daunting it must have been for Laura Kim and Fernando Garcia to
              inherit this enviable but daunting branding. Kim and Garcia had already established their own clothing
              line Monse – which is both fresh and irreverent - but they had to adjust the aesthetic when it came time
              to taking on the De La Renta brand.
            </div>
            <div class="MediaPageCardCallToAction tw-block md:tw-hidden tw-text-center tw-mt-12">
              <span class="tw-underline tw-text-dark01">Learn more ></span>
            </div>
          </div>
        </a>
      </div>
      <br>
      <br>
      <div>
        <h3>Ads & Editorials</h3>
        <div>
          <render-component>

            <div class="tw-mt-12 tw-px-12 md:tw-px-0 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-12">
              <template v-for="$n in 4">
                <a href="#"
                   :key="$n"
                   class="MediaPageCoverCard tw-flex tw-flex-col md:tw-flex-row tw-border tw-border-solid tw-border-gray-200 hover:tw-border-gray-400 tw-cursor-pointer">
                  <figure class="md:tw-w-1/2 tw-m-0">
                    <img class="tw-w-full tw-m-0 tw-block"
                         src="http://images.gabrielny.com/is/image/GabrielCo/Instyle-Cover-December2020?$Default$"
                         alt="<?= $heroImgAlt?>">
                  </figure>
                  <div class="tw-flex-1 tw-p-12 tw-flex tw-flex-col tw-items-center tw-justify-center">
                    <h2 class="tw-uppercase tw-m-0 tw-mb-8 tw-text-dark01 tw-font-sans tw-w-full tw-text-center tw-text-xl tw-leading-12 tw-tracking-wide">
                      November 2020
                    </h2>
                    <div
                        class="tw-text-dark01 tw-font-sans tw-w-full tw-text-center tw-text-lg tw-leading-12 tw-tracking-wide">
                      “Your Most Picky Relatives Are No Match for InStyle’s Editors Picks Gift Guide” Gabriel&Co.’s 14K
                      Yellow Gold Heart Plain Pendant Necklace included on InStyle.com.
                    </div>
                  </div>
                </a>
              </template>
            </div>
          </render-component>
        </div>

      </div>


    </div>

  </section>
</template>

<script>
import RenderComponent from "@/components/support/RenderComponent";

export default {
  name: "PostCard",
  components: {RenderComponent},
}
</script>

<style scoped>

</style>