<template>
  <div class="tw-mx-auto tw-text-center">
    <div data-bind="scope: 'menu-icon-country'" class="tw-inline-block tw-relative">
        <button id="openCountryModal" title="Shopping in other countries" data-bind="click: self.onClickChangeSite.bind(event,self)" class="linkHeader tw-flex tw-flex-row">

            <img src="https://gabrielny.test/pub/static/version1626810255/frontend/GabrielCo/default/en_US/GabrielCo_Base/images/us-flag.png" alt="US Flag">
            <span class="">
                <svg class="tw-block tw-text-neutral-dark-3 tw-text-brand-primary tw-stroke-current tw-transition tw-transform tw-rotate-180" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </span>
        </button>
        <div class="tw-border tw-border-brand-secondary-light tw-rounded tw-bg-white tw-absolute tw-right-0 tw-mt-2 " style="width: 220px;">
          <p class="tw-p-4 tw-text-left tw-text-rg tw-border-b tw-border-brand-secondary-light">How do you like to shop?</p>
          <ul class="">
            <li class="tw-p-4 tw-text-left tw-text-rg tw-bg-neutral-light-1 tw-cursor-pointer">From US Stores</li>
            <li class="tw-p-4 tw-text-left tw-text-rg hover:tw-bg-brand-secondary-light tw-transition tw-cursor-pointer">
              <a href="#" class="tw-block tw-cursor-pointer tw-transition">From Canadian Stores</a>
            </li>
          </ul>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "CountryMenu"
}
</script>

<style scoped>

</style>