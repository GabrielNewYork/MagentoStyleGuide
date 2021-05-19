<template>
  <div>
    <form action="#" class="tw-px-8">
      <div class="tw-flex tw-flex-col tw-mb-8">
        <label for="name" class="tw-font-sans tw-font-light tw-text-brand-secondary-darkest tw-text-rg tw-mb-4">Name</label>
        <input type="text" id="name" placeholder="What's your name?" class="tw-placeholder-sans tw-placeholder-brand-secondary-base tw-text-rg tw-font-light tw-font-sans tw-text-neutral-dark-2 tw-rounded tw-border tw-border-solid tw-border-brand-secondary-light tw-outline-none focus:tw-border-brand-secondary-base tw-p-4">
      </div>

      <div class="tw-flex tw-flex-col tw-mb-8">
        <label for="name" class="tw-font-sans tw-font-light tw-text-brand-secondary-darkest tw-text-rg tw-mb-4">tw-input-text</label>
        <input type="text" id="name" placeholder="What's your name?" class="tw-input-text">
      </div>

      <div class="tw-flex tw-flex-col tw-mb-8">
        <label for="name" class="tw-font-sans tw-font-light tw-text-brand-secondary-darkest tw-text-rg tw-mb-4">tw-input-text + tw-text-xl tw-p-6</label>
        <div class="tw-flex">
          <input type="text" id="name" placeholder="What's your name?" class="tw-input-text tw-text-xl tw-p-6">
          <button class="tw-rounded tw-ml-4 tw-bg-brand-dark-base tw-uppercase tw-text-xl tw-py-6 tw-px-10 tw-text-white tw-transition tw-duration-300 hover:tw-bg-brand-primary">Find</button>
        </div>

      </div>

      <div class="tw-flex tw-flex-col tw-mb-8">
        <label for="name" class="tw-font-sans tw-font-light tw-text-brand-secondary-darkest tw-text-rg tw-mb-4">tw-input-text + tw-text-xl tw-p-6</label>
        <div class="tw-flex">
          <input type="text" id="name" placeholder="What's your name?" class="tw-input-text tw-rounded-r-none tw-text-xl tw-p-6">
          <button class="tw-rounded tw-rounded-l-none tw-bg-brand-dark-base tw-uppercase tw-text-xl tw-py-6 tw-px-10 tw-text-white tw-transition tw-duration-300 hover:tw-bg-brand-primary">Find</button>
        </div>

      </div>

      <div class="tw-flex tw-flex-col">
        <label for="name" class="tw-font-sans tw-font-light tw-text-brand-secondary-darkest tw-text-rg tw-mb-4">tw-input-text with icon</label>
        <div class="tw-relative focus-within:tw-text-gray-400">
          <span class="tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center tw-pl-2">
            <svg class="tw-w-6 tw-h-6" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
                <path d="M17.5 8.33337C17.5 14.1667 10 19.1667 10 19.1667C10 19.1667 2.5 14.1667 2.5 8.33337C2.5 6.34425 3.29018 4.4366 4.6967 3.03007C6.10322 1.62355 8.01088 0.833374 10 0.833374C11.9891 0.833374 13.8968 1.62355 15.3033 3.03007C16.7098 4.4366 17.5 6.34425 17.5 8.33337Z" stroke="#898B99" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 10.8334C11.3807 10.8334 12.5 9.71409 12.5 8.33337C12.5 6.95266 11.3807 5.83337 10 5.83337C8.61929 5.83337 7.5 6.95266 7.5 8.33337C7.5 9.71409 8.61929 10.8334 10 10.8334Z" stroke="#898B99" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="20" height="20" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </span>
          <input type="text" id="name" placeholder="What's your name?" class=" tw-input-text tw-pl-12">

        </div>
      </div>


    </form>
  </div>
</template>

<script>
export default {
name: "ContactForm"
}
</script>

<style scoped>

</style>