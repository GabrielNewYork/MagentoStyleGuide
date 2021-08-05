<template>
  <div class="tw-container">
    <header class="tw-bg-red-100 tw-mb-8"><h2 class="tw-text-black tw-font-lora tw-text-3xl tw-text-center">Schedule Private Viewing</h2></header>
    <div class="tw-flex tw-flex-col md:tw-flex-row md:tw-items-start">
      <div class="tw-w-full tw-mb-4 md:tw-mb-0 md:tw-max-w-[220px]">
        <figure class="tw-border tw-p-2">
          <img class="tw-w-full" src="https://cdn-images.gabrielny.com/is/image/GabrielCo/Medium/Gabriel-14K-White-Gold-Princess-Cut-Diamond-Engagement-Ring~ER14465S4W44JJ-1.jpg" alt="14K White Gold Princess Cut Diamond Engagement Ring">
          <figcaption class="tw-text-lg tw-text-center tw-mb-2">ER14465S4W44JJ</figcaption>
        </figure>
        <p class="tw-p-2 tw-text-sm"><span class="tw-text-brand-primary">*</span>Please note that viewings will only include a white gold design in size 6.5.</p>
      </div>
      <div class="tw-w-full tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-4 md:tw-px-4">
        <div class="md:tw-mb-4">
          <label for="zipcode" class="tw-text-rg tw-block">Zipcode</label>
          <input type="text" id="zipcode" name="zipcode" class="tw-input-text tw-w-full">
        </div>
        <div class="md:tw-mb-4">
          <label for="email" class="tw-text-rg tw-block">Email Id</label>
          <input type="text" id="email" name="zipcode" placeholder="example@gmail.com" class="tw-input-text tw-w-full">
        </div>
        <div class="md:tw-mb-4">
          <label for="full_name" class="tw-text-rg tw-block">Full name</label>
          <input type="text" id="full_name" name="full_name" placeholder="John Doe" class="tw-input-text tw-w-full">
        </div>
        <div class="md:tw-mb-4">
          <label for="phone_no" class="tw-text-rg tw-block">Phone No.</label>
          <input type="text" id="phone_no" name="phone_no" placeholder="Ex.: 112-286-5656" class="tw-input-text tw-w-full">
        </div>
        <div>
          <label class="tw-text-rg tw-block">Prefer Method of Contact</label>
          <div>
            <label>
              <input  type="radio" name="contactMethod" value="Text" checked="checked">
              <span>Text</span>
            </label>
            <label for="">Text</label>
            <label for="">Text</label>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ProductBookAppointment"
}
</script>

<style scoped>

</style>