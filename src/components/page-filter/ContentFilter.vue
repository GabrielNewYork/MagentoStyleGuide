<template>
  <div class="filter-options-item tw-bg-transparent styleFilter allow active tw-z-75">
    <div data-role="title" class="filter-options-title tw-flex tw-items-center tw-border tw-border-brand-secondary-light tw-px-4 tw-py-4 tw-mb-4"  role="tab"
         aria-selected="true" aria-expanded="true" tabindex="0">
      <span class="tw-text-rg tw-mr-auto">Style</span>

      <svg version="1.1" class="tw-w-8 tw-h-8 tw-transform tw-fill-current tw-text-brand-secondary" id="ArrowDown" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 26.8 16.2" style="enable-background:new 0 0 26.8 16.2;" xml:space="preserve">
        <path class="st0" d="M26.5,3.1c0.4-0.4,0.4-1.1,0-1.5s-1.1-0.4-1.5,0L13.1,13.3L1.8,1.5c-0.4-0.4-1.1-0.4-1.5,0s-0.4,1.1,0,1.5
	l12.8,13.2L26.5,3.1z"/>
      </svg>

      <svg version="1.1" class="tw-w-8 tw-h-8 tw-transform tw-rotate-180" id="ArrowUp" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 26.8 16.2" style="enable-background:new 0 0 26.8 16.2;" xml:space="preserve">
        <path class="st0" d="M26.5,3.1c0.4-0.4,0.4-1.1,0-1.5s-1.1-0.4-1.5,0L13.1,13.3L1.8,1.5c-0.4-0.4-1.1-0.4-1.5,0s-0.4,1.1,0,1.5
	l12.8,13.2L26.5,3.1z"/>
      </svg>
      <svg version="1.1" class="tw-w-8 tw-h-8 tw-transform tw-rotate-180 collapse-icon" id="ArrowUp" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 26.8 16.2" style="enable-background:new 0 0 26.8 16.2;" xml:space="preserve">
        <path class="st0" d="M26.5,3.1c0.4-0.4,0.4-1.1,0-1.5s-1.1-0.4-1.5,0L13.1,13.3L1.8,1.5c-0.4-0.4-1.1-0.4-1.5,0s-0.4,1.1,0,1.5
	l12.8,13.2L26.5,3.1z"/>
      </svg>

      <svg version="1.1" class="tw-w-8 tw-h-8 tw-transform tw--rotate-90" id="Arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 15 27" style="enable-background:new 0 0 15 27;" xml:space="preserve">
        <path class="st0" d="M13.1,26.6c0.4,0.4,1.1,0.4,1.5,0c0.4-0.4,0.4-1.1,0-1.5L2.9,13.2L14.7,1.9c0.4-0.4,0.4-1.1,0-1.5
	c-0.4-0.4-1.1-0.4-1.5,0L0,13.2L13.1,26.6z"/>
    </svg>

      <svg version="1.1" class="tw-w-8 tw-h-8 tw-transform tw-rotate-90" id="Arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 15 27" style="enable-background:new 0 0 15 27;" xml:space="preserve">
        <path class="st0" d="M13.1,26.6c0.4,0.4,1.1,0.4,1.5,0c0.4-0.4,0.4-1.1,0-1.5L2.9,13.2L14.7,1.9c0.4-0.4,0.4-1.1,0-1.5
	c-0.4-0.4-1.1-0.4-1.5,0L0,13.2L13.1,26.6z"/>
    </svg>
    </div>


    <div data-role="content" class="filter-options-content tw-border tw-shadow-lg" role="tabpanel" aria-hidden="false">
      <div data-bind="scope: 'styleFilter'">
        <!-- ko template: getTemplate() -->
        <div class="field search" data-bind="if: displaySearch">
          <div class="control tw-p-4">
            <input class="filter-search tw-input-text tw-w-full tw-text-sm tw-py-2" type="text" autocomplete="off"
                   data-bind="attr: {placeholder: searchPlaceholder}, event: {keyup: onSearchChange.bind(this), focusout: onSearchFocusOut}"
                   placeholder="Search (Halo, Straight, ...)">
          </div>
        </div>

        <ol class="items" data-bind="foreach: {data: getDisplayedItems(), as: 'itemFilter'}">
          <li class="item- tw-p-4 tw-mb-2">
            <a class="tw-flex  tw-items-center hover:tw-text-brand-primary tw-cursor-pointer"
               data-bind="attr: {href: itemFilter.url}, visible: count >= 1"
               href="https://gabrielny.test/engagement-rings/all?stone_shape=Round&amp;style%5B0%5D=Split+Shank&amp;style%5B1%5D=Solitaire">

              <input type="checkbox"
                     class="tw-mr-4 tw-h-8 tw-w-8 tw-cursor-pointer tw-text-brand-primary tw-input-checkbox"
                     id="styleFilter_option_44">

              <label class="tw-flex tw-flex-1 tw-items-center tw-cursor-pointer"
                     data-bind="attr: {for: itemFilter.id}" for="styleFilter_option_44">
                <span data-bind="html: label" class="tw-text-rg">Halo</span>
                <span class="count tw-hidden" data-bind="text: count, visible: $parent.displayProductCount">279</span>
                <span class="tw-ml-auto" data-bind="if: $parent.hasIcon(itemFilter.attribute_code)">
                  <img class="tw-w-[42px]" style="width: 38px;" alt="" title=""
                     src="https://gabrielny.test/pub/static/version1622821510/frontend/GabrielCo/default/en_US/../web/images/svg/style/halo.svg">
                </span>
              </label>


            </a>

            <div data-bind="visible: count < 1" style="display: none;">
              <span data-bind="html: label">Halo</span>
              <span class="count" data-bind="text: count">279</span>
            </div>
          </li>
        </ol>

        <div class="no-results-message" data-bind="if: fulltextSearch() &amp;&amp; !hasSearchResult()"></div>

        <div class="actions tw-mt-8">
          <div class="secondary tw-flex tw-p-4">
            <a class="action show-more tw-rounded tw-bg-brand-secondary-lightest tw-ml-auto tw-px-4 tw-py-2 tw-text-lg tw-cursor-pointer">
              <span data-bind="text: showMoreLabel">Show more</span>
            </a>
            <a class="action show-less" style="display: none;"><span
                data-bind="text: showLessLabel">Show less</span></a>
          </div>
        </div>

        <!-- /ko -->
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ContentFilter"
}
</script>

<style scoped>

</style>