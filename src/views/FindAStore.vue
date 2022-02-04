<template>
  <div class="tw-container tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-gray-base">
    <div class="tw-flex tw-flex-col tw-w-full tw-max-w-[700px] tw-py-2 tw-bg-white tw-h-full tw-h-screen">
      <header class="tw-px-4 tw-mt-3">
        <h3 class="tw-font-lora tw-text-xl tw-text-black">Find A <span class="tw-text-brand-primary">Nearest Store</span></h3>
      </header>

        <!-- Input        -->
        <div class="tw-mt-6 tw-px-4 tw-flex tw-w-full">
          <input type="text" id="zipcode" placeholder="Change your zipcode here" class="tw-leading-none tw-border-black tw-input-text tw-flex-1 tw-rounded-r-none tw-text-rg tw-py-4 tw-px-2">
          <button class="tw-leading-none tw-rounded tw-rounded-l-none tw-bg-brand-dark-base tw-uppercase tw-text-rg tw-py-4 tw-px-8 tw-text-white tw-transition tw-duration-300 hover:tw-bg-brand-primary">Update</button>
        </div>
        <ul class="tw-px-4 tw-mt-6 tw-space-y-6 tw-scroll-smooth tw-overflow-y-auto tw-no-scroll-style">
          <li v-for="n in 20" :key="n" class="tw-w-full">
            <div class="tw-w-full tw-border tw-rounded tw-p-4">
              <div class="tw-flex tw-justify-between">
                <h4 class="tw-text-black tw-text-xl tw-flex-1 tw-leading-10">Nome da joalheria gigante que não pode caber na tela gigante que não pode caber na tela gigante que não pode caber na tela</h4>
                <div class="tw-text-brand-secondary tw-text-rg tw-shrink-0 tw-text-right tw-ml-4 tw-leading-10">2.3 Mile away</div>
              </div>
              <div class="tw-mt-2"><a href="#" class="tw-text-brand-primary hover:tw-underline tw-text-rg" target="_blank">View Profile</a></div>
              <div class="tw-mt-6 tw-text-rg tw-text-black">
                <span class="tw-block">607 S. Hil SStreet, #316</span>
                <span class="tw-block tw-mt-1">Los Angeles, CA, 90014, US</span>
              </div>
              <ul class="tw-bg-gray-100 tw-inline-flex tw-py-2 tw-mt-6  tw-rounded tw-divide-x tw-text-sm tw-bg-purple-100 xs:tw-bg-red-100 sm:tw-bg-blue-100 sm:tw-text-rg tw-items-center">
                <li class="tw-px-4 tw-py-0 tw-text-center">Bridal</li>
                <li class="tw-px-4 tw-py-0 tw-text-center">Fashion</li>
                <li class="tw-px-4 tw-py-0 tw-text-center">Mens Bands</li>
                <li class="tw-px-4 tw-py-0 tw-text-center">Stackables</li>
              </ul>
              <div class="tw-mt-4 tw-grid tw-grid-cols-2 tw-items-center tw-gap-4">
                <a href="callto:###" class="tw-flex hover:tw-text-brand-primary tw-items-center tw-py-2 tw-text-rg tw-justify-start">
                  <svg class="tw-fill-current tw-h-8 tw-w-8" viewBox="0 0 440 320" aria-hidden="true" role="img">
                    <path d="M340.273,275.083l-53.755-53.761c-10.707-10.664-28.438-10.34-39.518,0.744l-27.082,27.076
                        c-1.711-0.943-3.482-1.928-5.344-2.973c-17.102-9.476-40.509-22.464-65.14-47.113c-24.704-24.701-37.704-48.144-47.209-65.257
                        c-1.003-1.813-1.964-3.561-2.913-5.221l18.176-18.149l8.936-8.947c11.097-11.1,11.403-28.826,0.721-39.521L73.39,8.194
                        C62.708-2.486,44.969-2.162,33.872,8.938l-15.15,15.237l0.414,0.411c-5.08,6.482-9.325,13.958-12.484,22.02
                        C3.74,54.28,1.927,61.603,1.098,68.941C-6,127.785,20.89,181.564,93.866,254.541c100.875,100.868,182.167,93.248,185.674,92.876
                        c7.638-0.913,14.958-2.738,22.397-5.627c7.992-3.122,15.463-7.361,21.941-12.43l0.331,0.294l15.348-15.029
                        C350.631,303.527,350.95,285.795,340.273,275.083z"></path></svg>
                    <span class="tw-ml-2 tw-mt-1 tw-leading-none">703-3123-232</span>
                  </a>
                <a href="callto:###" class="tw-flex hover:tw-text-brand-primary tw-items-center tw-py-2 tw-text-rg tw-justify-end">
                  <svg class="tw-fill-current tw-h-8 tw-w-8" aria-hidden="true" role="img">
                    <path d="M21.408,10.545L11.627,0.763a0.432,0.432,0,0,0-.611,0L1.236,10.545a0.43,0.43,0,0,0,0,.609l9.781,9.782a0.433,0.433,0,0,0,.306.127,0.428,0.428,0,0,0,.3-0.127l7.051-7.051a0.431,0.431,0,1,0-.61-0.609l-6.746,6.746L2.15,10.85l9.173-9.173L20.8,11.154A0.431,0.431,0,0,0,21.408,10.545Zm-8.328.413a0.431,0.431,0,0,0,.611,0l1.32-1.321a0.43,0.43,0,0,0,0-.61L13.69,7.707a0.431,0.431,0,1,0-.61.61L13.665,8.9H8.729a0.431,0.431,0,0,0-.431.431v5.676a0.431,0.431,0,1,0,.862,0V9.763h4.5l-0.585.586A0.432,0.432,0,0,0,13.08,10.958Z"/>
                  </svg>
                  <span class="tw-ml-3 tw-mt-1 tw-leading-none">Get directions</span>
                </a>
              </div>
              <button class="tw-btn-black tw-text-lg tw-block tw-mt-4 tw-w-full tw-py-2">Book an Appointment</button>
            </div>
          </li>
        </ul>


    </div>
  </div>
</template>

<script>
export default {
  name: "FindAStore"
}
</script>

<style scoped>

</style>