<template>

    <div class="tw-container tw-border tw-border-red-600">
      <form action="">
      <header class="tw-bg-red-100 tw-mb-8"><h2 class="tw-text-black tw-font-lora tw-text-3xl tw-text-center">Schedule
        Private Viewing</h2></header>
      <div class="tw-flex tw-flex-col md:tw-flex-row md:tw-items-start tw-mb-6">
        <div class="tw-w-full tw-mb-4 md:tw-mb-0 md:tw-max-w-[220px]">
          <figure class="tw-w-full tw-border tw-p-2">
            <img class="tw-w-full tw-max-w-[220px] tw-mx-auto"
                 src="https://cdn-images.gabrielny.com/is/image/GabrielCo/Medium/Gabriel-14K-White-Gold-Princess-Cut-Diamond-Engagement-Ring~ER14465S4W44JJ-1.jpg"
                 alt="14K White Gold Princess Cut Diamond Engagement Ring">
            <figcaption class="tw-text-lg tw-text-center tw-mb-2">ER14465S4W44JJ</figcaption>
          </figure>
          <p class="tw-p-2 tw-text-sm"><span class="tw-text-brand-primary">*</span>Please note that viewings will only
            include a white gold design in size 6.5.</p>
        </div>
        <div class="tw-w-full tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-6 md:tw-px-6">
          <div class="md:tw-mb-4">
            <label for="zipcode" class="tw-text-rg tw-block">Zipcode</label>
            <input type="text" id="zipcode" name="zipcode" class="tw-input-text tw-w-full">
          </div>
          <div class="md:tw-mb-4">
            <label for="email" class="tw-text-rg tw-block">Email Id</label>
            <input type="text" id="email" name="zipcode" placeholder="example@gmail.com"
                   class="tw-input-text tw-w-full">
          </div>
          <div class="md:tw-mb-4">
            <label for="full_name" class="tw-text-rg tw-block">Full name</label>
            <input type="text" id="full_name" name="full_name" placeholder="John Doe" class="tw-input-text tw-w-full">
          </div>
          <div class="md:tw-mb-4">
            <label for="phone_no" class="tw-text-rg tw-block">Phone No.</label>
            <input type="text" id="phone_no" name="phone_no" placeholder="Ex.: 112-286-5656"
                   class="tw-input-text tw-w-full">
          </div>
          <div>
            <label class="tw-text-rg tw-block">Prefer Method of Contact</label>
            <div>
              <label for="contactText" class="tw-text-lg tw-inline-flex tw-items-center tw-mr-6">
                <input type="radio" id="contactText" class="tw-form-radio tw-text-brand-primary tw-mr-2" name="contactMethod"
                       value="Text" checked="checked">
                <span>Text</span>
              </label>
              <label for="contactCall" class="tw-text-lg tw-inline-flex tw-items-center tw-mr-6">
                <input type="radio" id="contactCall" class="tw-form-radio tw-text-brand-primary tw-mr-2" name="contactMethod"
                       value="Call" checked="checked">
                <span>Call</span>
              </label>
              <label for="contactEmail" class="tw-text-lg tw-inline-flex tw-items-center tw-mr-6">
                <input type="radio" id="contactEmail" class="tw-form-radio tw-text-brand-primary tw-mr-2" name="contactMethod"
                       value="Email" checked="checked">
                <span>Email</span>
              </label>
            </div>
          </div>
        </div>

      </div>
      <!-- Gift  -->
      <div class="tw-border tw-w-full tw-p-6 md:tw-p-0 md:tw-py-6 tw-mb-6 md:tw-flex md:tw-flex-row md:tw-items-start">
        <div class="tw-w-full md:tw-max-w-[220px]">
          <figure class="tw-w-full">
            <img class="tw-w-full tw-max-w-[220px] tw-mx-auto"
                 src="https://images.gabrielny.com/is/image/GabrielCo/Thumb/Gabriel-925-Sterling-Silver-Bujukan-Beaded-Double-Circle-Necklace~NK6388SVJJJ-1.jpg"
                 alt="925 Sterling Silver Bujukan Beaded Double Circle Necklace">
          </figure>
        </div>
        <div class="md:tw-px-6 tw-transition tw-transition-all tw-w-full">
          <p class="tw-text-lg tw-text-center md:tw-text-left tw-mb-6">Would you like to receive this <span
              style="color: #0ed145;">FREE</span> Sterling Silver Necklace simply by walking in the store?</p>
          <div>Yes/No</div>
          <div class="tw-transition tw-transition-all tw-max-h-0 tw-max-h-[100vh] tw-overflow-hidden">
            <p class="tw-text-rg tw-mb-2">Simply enter your shipping information below!</p>
            <div>
              <input type="hidden" name="ship_country" value="US">
              <div class="tw-mb-4">
                <label for="ship_address_1" class="tw-text-rg tw-block">Address</label>
                <input type="text" id="ship_address_1" name="ship_address_1" placeholder="Address 1"
                     class="tw-input-text tw-w-full">
              </div>
              <div class="tw-mb-4">
                <label for="ship_address_2" class="tw-text-rg tw-hidden">Address</label>
                <input type="text" id="ship_address_2" name="ship_address_2" placeholder="Address 2"
                       class="tw-input-text tw-w-full">
              </div>
              <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-4">
                <div>
                  <label for="ship_zipcode" class="tw-text-rg tw-hidden">Zipcode</label>
                  <input type="text" id="ship_zipcode" name="ship_zipcode" placeholder="Zip/Postal Code"
                         class="tw-input-text tw-w-full">
                </div>
                <div>
                  <label for="ship_city" class="tw-text-rg tw-hidden">City</label>
                  <input type="text" id="ship_city" name="ship_city" placeholder="City"
                         class="tw-input-text tw-w-full">
                </div>
                <div>
                  <label for="ship_state" class="tw-text-rg tw-hidden">State</label>
                  <select id="ship_state" name="ship_state" class="tw-input-text tw-w-full">
                    <option value="AS">AS</option>
                  </select>
                </div>
              </div>
            </div>
            <p class="tw-text-rg"><span class="tw-text-brand-primary">*</span>shippment may take up to 3 weeks to arrive
            </p>
          </div>
        </div>
      </div>

      <!-- Choose Store -->
      <div class="tw-mb-12">
        <p class="tw-text-rg tw-mb-6">Is there a specific store you’d like to view this ring? (optional)</p>
        <div class="tw-grid tw-gap-6 tw-grid-cols-1 md:tw-grid-cols-3 tw-items-start">
            <label for="storeCheck" class="tw-flex tw-h-full tw-cursor-pointer tw-flex-row tw-border tw-p-6 focus:tw-bg-red-300 focus-within:tw-ring-brand-primary">
              <span class="tw-mr-auto tw-flex tw-flex-col tw-flex-1">
                <span class="tw-block tw-text-lg tw-text-black tw-mb-3">Robbins Brothers - Glendale</span>
                <span class="tw-block tw-text-rg tw-text-brand-secondary tw-mb-3">300 W Colorado Street, Glendale, CA, 91204, US</span>
                <span class="tw-block tw-mt-auto tw-text-rg tw-text-black">9.31 mi away</span>
              </span>

                <input type="checkbox" id="storeCheck" class="tw-ml-6 tw-h-8 tw-w-8 tw-cursor-pointer tw-text-brand-primary tw-input-checkbox">

            </label>
        </div>
      </div>

      <!-- Note -->
      <div class="tw-mb-12">
        <label for="note" class="tw-text-lg tw-font-bold tw-block tw-mb-3">Have a question or concern?
          (optional)</label>
        <textarea class="tw-input-text tw-w-full tw-min-h-[100px]" name="note" id="note" cols="30" rows="10"
                  placeholder="Leave us your comment here. Please include your preferred from of communication and best time to reach you."></textarea>
      </div>
      <!-- Submit -->
      <div class="tw-w-full tw-text-center">
        <button class="tw-btn-black tw-mx-auto tw-px-6 tw-py-3 tw-text-lg tw-w-full md:tw-max-w-[320px] tw-mb-6">Submit
        </button>
        <p class="tw-text-lg tw-text-center tw-mb-6 tw-px-6 md:tw-px-0">This service is 100% free. There is no risk nor
          obligation to purchase.</p>
      </div>
      <!-- Faq -->
      <div class="tw-border tw-p-6 tw-mb-12">Faq</div>
      <!-- Contact -->
      <div class="tw-border tw-p-6">
        <p class="tw-text-center tw-text-black tw-text-xl tw-mb-6 sm:tw-mb-3">We are here to help you</p>
        <ul class="tw-flex tw-flex-col sm:tw-flex-row tw-justify-center tw-items-center tw-w-full">
          <li class="sm:tw-w-[140px] tw-text-center sm:tw-text-right tw-mb-6 sm:tw-mb-0">
            <a href="tel:2125191400" class="tw-flex tw-items-center tw-group">
              <svg id="svg-newcall" class="tw-w-[18px] tw-h-[18px] tw-mr-3 tw-fill-current group-hover:tw-text-red-base"
                   viewBox="0 0 348.077 348.077" style="enable-background:new 0 0 348.077 348.077;" xml:space="preserve"
                   aria-hidden="true" role="img"><g>
                <path d="M340.273,275.083l-53.755-53.761c-10.707-10.664-28.438-10.34-39.518,0.744l-27.082,27.076
                c-1.711-0.943-3.482-1.928-5.344-2.973c-17.102-9.476-40.509-22.464-65.14-47.113c-24.704-24.701-37.704-48.144-47.209-65.257
                c-1.003-1.813-1.964-3.561-2.913-5.221l18.176-18.149l8.936-8.947c11.097-11.1,11.403-28.826,0.721-39.521L73.39,8.194
                C62.708-2.486,44.969-2.162,33.872,8.938l-15.15,15.237l0.414,0.411c-5.08,6.482-9.325,13.958-12.484,22.02
                C3.74,54.28,1.927,61.603,1.098,68.941C-6,127.785,20.89,181.564,93.866,254.541c100.875,100.868,182.167,93.248,185.674,92.876
                c7.638-0.913,14.958-2.738,22.397-5.627c7.992-3.122,15.463-7.361,21.941-12.43l0.331,0.294l15.348-15.029
                C350.631,303.527,350.95,285.795,340.273,275.083z"></path>
              </g>
            </svg>
              <span class="tw-text-rg sm:tw-text-lg">(212)-519-1400</span>
            </a>
          </li>
          <li class="sm:tw-mx-3 sm:tw-mx-6 md:tw-mx-12 tw-text-center tw-mb-6 sm:tw-mb-0">
            <a href="mailto:hello@gabrielny.com" class="tw-flex tw-items-center tw-group" target="_top">
              <svg id="svg-env" class="tw-w-[18px] tw-h-[18px] tw-mr-3 tw-fill-current group-hover:tw-text-red-base"
                   viewBox="0 0 22 17" aria-hidden="true" role="img">
                <path d="M2.3,15.5c-0.5,0-0.8-0.4-0.8-0.8c0,0,0,0,0,0V5.1l7.9,5c1,0.6,2.2,0.6,3.2,0l7.9-5v9.6
	c0,0.5-0.4,0.8-0.8,0.8c0,0,0,0,0,0L2.3,15.5z M10,9L1.5,3.8V2.3c0-0.4,0.4-0.8,0.8-0.8h17.3c0.4,0,0.8,0.4,0.8,0.8v1.5L12,9
	C11.4,9.4,10.6,9.4,10,9L10,9z"></path>
              </svg>
              <span class="tw-text-rg sm:tw-text-lg">Email Us</span>
            </a>
          </li>
          <li class="sm:tw-w-[130px] tw-text-center sm:tw-text-left tw-mb-0">
            <a href="javascript:LC_API.open_chat_window();" class="tw-flex tw-items-center tw-group">
              <svg id="svg-newhelp" class="tw-w-[18px] tw-h-[18px] tw-mr-3 tw-fill-current group-hover:tw-text-red-base"
                   viewBox="0 0 422.139 422.139" style="enable-background:new 0 0 422.139 422.139;" xml:space="preserve"
                   aria-hidden="true" role="img"><g><path d="M363.631,174.498h-1.045v-25.6C362.586,66.664,295.923,0,213.688,0S64.79,66.664,64.79,148.898v25.6h-6.269
                  c-22.988,0-40.751,20.375-40.751,43.886v65.306c-0.579,22.787,17.425,41.729,40.212,42.308c0.18,0.005,0.359,0.008,0.539,0.01
                  h38.661c5.476-0.257,9.707-4.906,9.449-10.382c-0.009-0.197-0.024-0.394-0.045-0.59v-128c0-6.269-3.657-12.539-9.404-12.539
                  H85.688v-25.6c0-70.692,57.308-128,128-128s128,57.308,128,128v25.6h-11.494c-5.747,0-9.404,6.269-9.404,12.539v128
                  c-0.583,5.451,3.363,10.343,8.814,10.926c0.196,0.021,0.393,0.036,0.59,0.045h12.016l-1.045,1.567
                  c-15.677,20.835-40.277,33.038-66.351,32.914c-5.708-27.989-33.026-46.052-61.015-40.343
                  c-23.935,4.881-41.192,25.843-41.385,50.27c0.286,28.65,23.594,51.724,52.245,51.722c14.183-0.23,27.702-6.05,37.616-16.196
                  c6.689-6.85,11.072-15.617,12.539-25.078c32.652,0.124,63.445-15.176,83.069-41.273l9.927-14.629
                  c22.465-1.567,36.571-15.673,36.571-36.049v-65.306C404.382,201.143,387.664,174.498,363.631,174.498z M85.688,305.11H58.521
                  c-11.25-0.274-20.148-9.615-19.874-20.865c0.005-0.185,0.012-0.37,0.021-0.556v-65.306c0-12.016,8.359-22.988,19.853-22.988
                  h27.167V305.11z M247.125,391.314c-5.79,6.278-13.925,9.873-22.465,9.927c-16.998-0.27-30.792-13.834-31.347-30.825
                  c-0.007-17.024,13.788-30.83,30.812-30.837c17.024-0.007,30.83,13.788,30.837,30.812c0,0.008,0,0.017,0,0.025
                  C255.397,378.173,252.553,385.756,247.125,391.314z M383.484,288.914c0,14.106-13.584,16.196-19.853,16.196h-21.943V195.396
                  h21.943c11.494,0,19.853,16.196,19.853,28.212V288.914z"></path>
                  </g>
                </svg>
              <span class="tw-text-rg sm:tw-text-lg">Live Chat</span>
            </a>
          </li>
        </ul>
      </div>
      </form>
    </div>

</template>

<script>
export default {
  name: "ProductBookAppointment"
}
</script>

<style scoped>

</style>