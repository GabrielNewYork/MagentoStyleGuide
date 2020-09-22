<style>

.active, .accordion:hover {
  background-color: #ccc;
}

.panel {
  padding: 0 18px;
  background-color: white;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}
</style>

<template>
    <div class="tw-border tw-border-gray-400 tw-border-solid tw-p-4">

      <div class="tw-flex tw-justify-center tw-items-center">

        <div class="tw-w-1/2">
          <h3 class="tw-text-xl tw-tracking-wide tw-font-semibold tw-font-sans tw-mb-6">WHAT’S INCLUDED</h3>
          <ul class="tw-list-none tw-m-0 tw-p-0 tw-font-sans">
            <li class="tw-m-0 tw-p-0">
              <img class="tw-mr-2 tw-py-3" src="https://cdn-images.gabrielny.com/is/image/GabrielCo/dark-label?$trans$" alt="Pointer">
              Lifetime Warranty for any manufacturing defects on registered styles
            </li>
            <li class="tw-mr-2 tw-py-3">
              <img class="tw-mr-2" src="https://cdn-images.gabrielny.com/is/image/GabrielCo/dark-label?$trans$" alt="Pointer">
              One year coverage of damages from normal wear & tear on registered styles
            </li>
            <li class="tw-mr-2 tw-py-3">
              <img class="tw-mr-2" src="https://cdn-images.gabrielny.com/is/image/GabrielCo/dark-label?$trans$" alt="Pointer">
              Shop Confidently guarantee on all engagement rings. Learn More
            </li>
            <li class="tw-mr-2 tw-py-3">
              <img class="tw-mr-2" src="https://cdn-images.gabrielny.com/is/image/GabrielCo/dark-label?$trans$" alt="Pointer">
              Certificate of Authenticity with unique serial number
            </li>
            <li class="tw-mr-2 tw-py-3">
              <img class="tw-mr-2" src="https://cdn-images.gabrielny.com/is/image/GabrielCo/dark-label?$trans$" alt="Pointer">
              Complimentary cleaning twice a year at a retail partner near you
            </li>
          </ul>
        </div>

        <div class="tw-w-1/2">
          <!-- Product Details -->
          <div class="tw-border-1 tw-border-solid tw-border-gray-300 tw-mb-5">
            <button class="accordion tw-w-full tw-text-left tw-bg-white hover:tw-bg-white tw-py-5 tw-px-10 tw-font-sans tw-text-xl tw-flex tw-justify-between tw-items-center tw-border-0 focus:tw-outline-none">
              PRODUCT DETAILS
              <span class="tw-text-4xl tw-p-0 tw-m-0">+</span>
            </button>
            <div class="panel tw-mb-8">
              <hr class="tw-mt-0 tw-mb-8 tw-border-1 tw-border-solid tw-border-gray-400">
              <p class="tw-font-light tw-leading-8 tw-mb-8">This spectacular Gabriel & Co. engagement ring features a geometrical halo inspired in the Art Deco period. The shape in 14k white gold carries side stones. Shop.</p>
            
              <div class="tw-flex tw-justify-between tw-items-center tw-w-full tw-py-1 tw-font-sans">
                <div class="tw-w-1/2 tw-flex tw-justify-between tw-items-center tw-pr-4 ">
                  Product Line
                  <span class="tw-mr-4">:</span>
                </div>
                <div class="tw-w-1/2">
                  Carrington
                </div>
              </div>
              <div class="tw-flex tw-justify-between tw-items-center tw-w-full tw-py-1 tw-font-sans">
                <div class="tw-w-1/2 tw-flex tw-justify-between tw-items-center tw-pr-4">
                  Item Code
                  <span class="tw-mr-4">:</span>
                </div>
                <div class="tw-w-1/2">
                  ER14508R4W44JJ
                </div>
              </div>
              <div class="tw-flex tw-justify-between tw-items-center tw-w-full tw-py-1 tw-font-sans">
                <div class="tw-w-1/2 tw-flex tw-justify-between tw-items-center tw-pr-4">
                  Crown Type
                  <span class="tw-mr-4">:</span>
                </div>
                <div class="tw-w-1/2">
                  Not changeable
                </div>
              </div>
              <div class="tw-flex tw-justify-between tw-items-center tw-w-full tw-py-1 tw-font-sans">
                <div class="tw-w-1/2 tw-flex tw-justify-between tw-items-center tw-pr-4">
                  Center Stone Size
                  <span class="tw-mr-4">:</span>
                </div>
                <div class="tw-w-1/2">
                  1.00 CT -6.5 mm
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
</template>

<script>
export default {
  name: 'ProductPageBottom',
}

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }
</script>