<template>
    
    <section class="tw-mb-20" id="Storelocator">
        <h1 class="tw-text-7xl tw-font-normal tw-tracking-wide tw-my-16 tw-font-sans ">Store Locator</h1>
        <h2 class="tw-text-2xl tw-font-bold tw-mb-4">Book Appointment success message</h2>

        <div class="tw-border tw-border-gray-400 tw-border-solid tw-p-4 tw-w-5/12">

            <div class="tw-flex tw-flex-col tw-font-sans tw-text-center tw-justify-center tw-items-center">
                <img class="tw-w-full" src="https://cdn-images.gabrielny.com/is/image/GabrielCo/Default/~view_store_thank_you-n.jpg">
                <div class="tw-bg-gray-600 tw-text-white tw-py-3 tw-w-full">
                    <h1 class="tw-text-2xl tw-m-0">Thank You</h1>
                    <p class="tw-m-0">For choosing and trusting Gabriel</p>
                </div>
                <p class="tw-my-4 tw-leading-normal tw-tracking-wide tw-text-base">We look forward to servicing your request.<br>
                For immediate assistance, please contact us via</p>
                <a href="#" class="tw-underline hover:tw-text-red-600 tw-text-lg tw-font-light tw-text-gray-900">Live Chat</a>
                <p class="tw-py-2 tw-m-0">or call us at</p>
                <a href="tel:212-519-1400" class="tw-text-gray-900 tw-underline hover:tw-text-red-600 tw-text-lg tw-font-light">212-519-1400</a>
                <button class="tw-border-gray-900 hover:tw-border-red-900 tw-transition tw-duration-500 tw-ease-in-out focus:tw-outline-none tw-block tw-bg-gray-900 hover:tw-bg-red-600 tw-text-white tw-font-bold tw-py-3 tw-px-6 tw-rounded tw-my-5 tw-border-none">Continue Shopping</button>
                <p class="tw-m-0">The Gabriel & Co. Concierge Team</p>
                <img class="tw-w-3/4 tw-my-2" src="http://cdn-themes.gabrielny.com/site2017theme/images/theme2019/svg/logo-theme2019.svg">
            </div>

        </div>

    <!-- Code -->
    <button v-on:click="open = !open" class="mdl-button mdl-js-button mdl-js-ripple-effect tw-my-4 tw-text-sm focus:tw-outline-none">Show Code</button>
        
    <pre v-show="open">
        <code class="html">
        &lt;div class="flex flex-col font-sans text-center justify-center items-center">
            &lt;img src="view_store_thank_you-n.jpg">
            &lt;div class="bg-gray-600 text-white py-3 w-full">
                &lt;h1 class="text-2xl">Thank You&lt;/h1>
                &lt;p>For choosing and trusting Gabriel&lt;/p>
            &lt;/div>
            &lt;p class="my-4 leading-normal tracking-wide text-base">We look forward to servicing your request.&lt;br>
            For immediate assistance, please contact us via&lt;/p>
            &lt;a href="#" class="underline transition duration-500 ease-in-out hover:text-red-600 text-lg font-light">Live Chat&lt;/a>
            &lt;p class="py-1">or call us at&lt;/p>
            &lt;a href="tel:212-519-1400" class="underline transition duration-500 ease-in-out hover:text-red-600 text-lg font-light">212-519-1400&lt;/a>
            &lt;button class="transition duration-500 ease-in-out focus:outline-none block bg-gray-900 hover:bg-red-600 text-white font-bold py-2 px-4 rounded my-5">Continue Shopping&lt;/button>
            &lt;p>The Gabriel & Co. Concierge Team&lt;/p>
            &lt;img class="w-3/4 my-2" src="logo.svg">
        &lt;/div>
        </code>
    </pre>

    </section>
</template>


<script>
export default {
  name: 'Storelocator',
   data () {
      return {
         open: false 
      }
    } 
}
</script>