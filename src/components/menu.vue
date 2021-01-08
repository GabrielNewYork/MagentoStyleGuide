<template>
    <div class="mdl-layout__drawer sidebar p-6" id="plugin-list">
        <h1 class="tw-ml-10 tw-text-xl tw-font-thin tw-leading-tight tw-mb-0">
            <span class="tw-font-extrabold tw-text-3xl">GABRIEL&CO</span><br>Styleguide
        </h1>
        <p class="tw-ml-10 tw-text-gray-500 tw-text-tiny">1.0.0</p>
        <form>
            <div class="mdl-textfield mdl-js-textfield search-area tw-py-2 tw-flex tw-justify-center">
                <input class="tw-border-none tw-rounded-md tw-w-4/6 tw-bg-gray-200 hover:tw-bg-gray-300 tw-text-base tw-py-3 tw-px-8 mdl-textfield__input js-component-search search" type="text" placeholder="Search...">
            </div>
        </form>
        <nav>
            <ul class="tw-list-none list tw-pl-10 tw-text-xg">
                <li class="tw-my-3">
                    <a class="hover:tw-text-gray-900 mdl-navigation__link name" href="#Intro">Intro</a>
                </li>
                <li class="tw-ml-4 tw-my-3">
                    <a class="hover:tw-text-gray-900 mdl-navigation__link name" href="#Designing">Designing</a>
                </li>
                <li class="tw-my-3">
                    <a class="hover:tw-text-gray-900 mdl-navigation__link name" href="#Styles">Styles</a>
                </li>
                <li class="tw-ml-4 tw-my-3">
                    <a class="hover:tw-text-gray-900 mdl-navigation__link name" href="#Breakpoints">Breakpoints</a>
                </li>
                <li class="tw-ml-4 tw-my-3">
                    <a class="hover:tw-text-gray-900 mdl-navigation__link name" href="#Typography">Typography</a>
                </li>
                <li class="tw-ml-4 tw-my-3">
                    <a class="hover:tw-text-gray-900 mdl-navigation__link name" href="#Colors">Colors</a>
                </li>

                <li class="tw-my-3">
                    <a class="hover:tw-text-gray-900 mdl-navigation__link name" href="#Header">Header</a>
                </li>
                <li class="tw-my-3">
                    <a class="hover:ttw-ext-gray-900 mdl-navigation__link name" href="#Footer">Footer</a>
                </li>
                <li class="tw-my-3">
                    <a class="hover:tw-text-gray-900 mdl-navigation__link name" href="#Product">Product</a>
                </li>
                <li class="tw-ml-4 tw-my-3">
                    <a class="hover:tw-text-gray-900 mdl-navigation__link name" href="#Productcard">Product Card</a>
                </li>
                <li class="tw-my-3">
                    <a class="hover:tw-text-gray-900 mdl-navigation__link name" href="#Storelocator">Store Locator</a>
                </li>
                <li class="tw-my-3">
                  <a class="hover:tw-text-gray-900 mdl-navigation__link name" href="#OnBehalfRetailer">Checkout</a>
                </li>
                <li class="tw-ml-4 tw-my-3">
                  <a class="hover:tw-text-gray-900 mdl-navigation__link name" href="#OnBehalfRetailer">On Behalf</a>
                </li>
                <li class="tw-ml-4 tw-my-3">
                  <a class="hover:tw-text-gray-900 mdl-navigation__link name" href="#Stores">Stores</a>
                </li>
              <li class="tw-ml-4 tw-my-3">
                <a class="hover:tw-text-gray-900 mdl-navigation__link name" href="#MediaPages">Media pages</a>
              </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'Menu',
}
</script>
