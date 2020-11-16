<template>
    
    <section class="tw-mb-20" id="Login">
        <h1 class="tw-text-7xl tw-font-normal tw-tracking-wide tw-my-16 tw-font-sans tw-mr-4">Login</h1>
        <div class="tw-border tw-border-gray-400 tw-border-solid tw-p-4">

            <!-- Container -->
            <div class="tw-flex tw-justify-center tw-p-0 tw-m-0">
                <!-- Row -->
                <div class="tw-w-full xl:tw-3/4 tw-lg:tw-11/12 tw-flex">
                    <!-- Col -->
                    <div class="tw-w-full tw-h-full tw-hidden lg:tw-block lg:tw-w-1/2 tw-bg-cover" style="background-image: url('https://gabrieldev.smartagehosting.com/static/version1602193373/frontend/GabrielCo/default/en_US/../web/images/login.jpg')">
                    </div>
                    <!-- Col -->
                    <div class="tw-w-full lg:tw-w-1/2 tw-flex tw-items-center tw-justify-center ">
                        <div class="tw-w-8/12 tw-flex tw-flex-col tw-items-center ">
                            <h1 class="tw-font-lora tw-text-4xl tw-text-gray-dark tw-font-normal tw-mb-5">Sign in</h1>
                            <p class="tw-font-sans tw-text-base tw-tracking-wide tw-font-light tw-text-center">If you have an account, please sign in with your email address.</p>

                            <input placeholder="Email Address" class="tw-w-full tw-rounded-md tw-h-20 tw-font-sans tw-txt-base tw-border tw-border-solid tw-border-gray-lightest tw-px-8 tw-text-dark tw-font-light tw-tracking-wide">
                            
                            <input placeholder="Email Address" class="tw-w-full tw-rounded-md tw-h-20 tw-font-sans tw-txt-base tw-border tw-border-solid tw-border-gray-lightest tw-px-8 tw-text-dark tw-font-light tw-tracking-wide tw-mt-6">
                            
                            <p class="tw-underline tw-text-left tw-w-full tw-font-sans tw-font-normal tw-text-tiny tw-mt-6 tw-mb-0">Forgot your password?</p>

                            <a href="" class="tw-w-full tw-rounded-md tw-h-20 tw-font-sans tw-text-xl tw-border-0 tw-px-8 tw-text-dark tw-font-semibold tw-tracking-wider tw-mt-6 tw-bg-base tw-flex tw-items-center tw-justify-center tw-text-white tw-no-underline">Sign in</a>
                            <p class="tw-font-sans tw-font-normal tw-text-gray-darkest tw-mt-16">Don’t have an account ? <a href="#" class="tw-text-base">Signup now.</a></p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>

</template>


<script>
export default {
  name: 'login',
}
</script>