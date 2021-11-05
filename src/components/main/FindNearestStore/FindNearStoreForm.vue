<template>
  <div style="max-width: 500px;">

    <section>
      <header><h3 class="tw-text-5xl tw-font-lora">Find Store</h3></header>
      <form class="tw-border tw-border-2 tw-p-6">
        <label for="zipcode" class="tw-uppercase tw-block tw-text-xl tw-mb-2">Change your zipcode</label>

        <div class="tw-grid tw-grid-cols-4 tw-gap-2">
          <div class="tw-col-span-3">
            <span class="tw-w-full tw-relative tw-flex tw-items-center">
              <input id="zipcode" type="text" placeholder="zipcode" class="tw-input-text tw-w-full tw-pr-[116px]" maxlength="12">
              <a href="javascript:void(0);" class="tw-absolute tw-flex tw-items-center tw-right-0 tw-mr-6" id="findStorePopUseMyLoc">
                <span class="tw-h-8 tw-w-[2px] tw-mr-4 tw-bg-gray-300"><!-- PIPE --></span>
                <svg class="svg-gps tw-h-6 tw-w-6 tw-mr-2 tw-fill-current tw-text-brand-primary" viewBox="0 0 561 561" aria-hidden="true" role="img"><g><g id="gps-gps"><path d="M280.5,178.5c-56.1,0-102,45.9-102,102c0,56.1,45.9,102,102,102c56.1,0,102-45.9,102-102
                        C382.5,224.4,336.6,178.5,280.5,178.5z M507.45,255C494.7,147.9,410.55,63.75,306,53.55V0h-51v53.55
                        C147.9,63.75,63.75,147.9,53.55,255H0v51h53.55C66.3,413.1,150.45,497.25,255,507.45V561h51v-53.55
                        C413.1,494.7,497.25,410.55,507.45,306H561v-51H507.45z M280.5,459C181.05,459,102,379.95,102,280.5S181.05,102,280.5,102
                        S459,181.05,459,280.5S379.95,459,280.5,459z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                <span class="tw-text-brand-primary tw-text-rg tw-mt-1">Locate Me</span>
              </a>
            </span>
          </div>
          <button class="tw-btn-black tw-text-rg sm:tw-text-xl tw-col-span-1">Update</button>
        </div>
        <div>
          <div class="tw-mt-4 tw-border tw-border-black tw-p-4">
            <h3 class="tw-text-xl tw-text-left md:tw-text-center tw-mb-1 md:tw-mb-4 md:tw-text-3xl hover:tw-text-brand-primary">Robbins Brothers - Glendale</h3>
            <p class="tw-text-gray-500 tw-mb-1 md:tw-text-xl md:tw-text-center">300 W Colorado Street  Glendale, CA, 91204, US</p>
            <p class="tw-font-bold md:tw-text-xl md:tw-text-center">9.31 mi away</p>
            <div class="tw-grid tw-grid-cols-2 tw-gap-4 tw-mt-2">
              <button class="tw-btn-black tw-text-xl tw-col-span-2 tw-py-2">Book An Appointment</button>
              <a href="#" class="tw-btn-black-o tw-text-rg tw-py-2 tw-text-center tw-flex tw-items-center tw-justify-center">
                <svg class="tw-fill-current tw-h-8 tw-w-8" viewBox="0 0 440 320" aria-hidden="true" role="img">
                  <path d="M340.273,275.083l-53.755-53.761c-10.707-10.664-28.438-10.34-39.518,0.744l-27.082,27.076
                        c-1.711-0.943-3.482-1.928-5.344-2.973c-17.102-9.476-40.509-22.464-65.14-47.113c-24.704-24.701-37.704-48.144-47.209-65.257
                        c-1.003-1.813-1.964-3.561-2.913-5.221l18.176-18.149l8.936-8.947c11.097-11.1,11.403-28.826,0.721-39.521L73.39,8.194
                        C62.708-2.486,44.969-2.162,33.872,8.938l-15.15,15.237l0.414,0.411c-5.08,6.482-9.325,13.958-12.484,22.02
                        C3.74,54.28,1.927,61.603,1.098,68.941C-6,127.785,20.89,181.564,93.866,254.541c100.875,100.868,182.167,93.248,185.674,92.876
                        c7.638-0.913,14.958-2.738,22.397-5.627c7.992-3.122,15.463-7.361,21.941-12.43l0.331,0.294l15.348-15.029
                        C350.631,303.527,350.95,285.795,340.273,275.083z"></path></svg>
                <span class="tw-ml-2 tw-mt-1">213-622-6150</span>
              </a>
              <a href="#" class="tw-btn-black-o tw-text-rg tw-py-2 tw-text-center tw-flex tw-items-center tw-justify-center">
                <svg class="tw-fill-current tw-h-8 tw-w-8" aria-hidden="true" role="img">
                    <path d="M21.408,10.545L11.627,0.763a0.432,0.432,0,0,0-.611,0L1.236,10.545a0.43,0.43,0,0,0,0,.609l9.781,9.782a0.433,0.433,0,0,0,.306.127,0.428,0.428,0,0,0,.3-0.127l7.051-7.051a0.431,0.431,0,1,0-.61-0.609l-6.746,6.746L2.15,10.85l9.173-9.173L20.8,11.154A0.431,0.431,0,0,0,21.408,10.545Zm-8.328.413a0.431,0.431,0,0,0,.611,0l1.32-1.321a0.43,0.43,0,0,0,0-.61L13.69,7.707a0.431,0.431,0,1,0-.61.61L13.665,8.9H8.729a0.431,0.431,0,0,0-.431.431v5.676a0.431,0.431,0,1,0,.862,0V9.763h4.5l-0.585.586A0.432,0.432,0,0,0,13.08,10.958Z"/>
                </svg>
                <span class="tw-ml-2 tw-mt-1">Directions</span>
              </a>
            </div>
          </div>
        </div>
      </form>
    </section>

  </div>
</template>

<script>
export default {
  name: "FindNearestStoreForm"
}
</script>

<style scoped>

</style>