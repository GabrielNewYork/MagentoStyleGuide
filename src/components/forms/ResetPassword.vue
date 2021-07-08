<template>
  <form action="https://gabrielny.test/customer/account/resetpasswordpost/?token=YjtPkVeA1DSrWXo8hZlsBkkX3n5aziS1" method="post" autocomplete="off" id="form-validate"
        class="form password reset tw-max-w-2xl tw-py-16 tw-px-8 md:tw-px-0 tw-m-auto" novalidate="novalidate">
    <fieldset class="fieldset " data-hasrequired="* Required Fields">

      <div class="lg:tw-bg-red-500">Meu nome</div>


      <div class="field password required tw-mb-4">
        <label class="label tw-text-rg" for="password"><span>New Password</span></label>
        <div class="control">
          <input type="password" class="tw-input-text tw-w-full" name="password" id="password" data-password-min-length="8" data-password-min-character-sets="3" data-validate="{required:true, 'validate-customer-password':true}" autocomplete="off" aria-required="true">
          <div id="password-strength-meter-container" data-role="password-strength-meter" aria-live="polite">
            <div id="password-strength-meter" class="password-strength-meter">
              Password Strength:
              <span id="password-strength-meter-label" data-role="password-strength-meter-label">
                            No Password                        </span>
            </div>
          </div>
        </div>
      </div>
      <div class="field confirmation required tw-mb-4">
        <label class="label tw-text-rg" for="password-confirmation"><span>Confirm New Password</span></label>
        <div class="control">
          <input type="password" class="tw-input-text tw-w-full" name="password_confirmation" id="password-confirmation" data-validate="{required:true,equalTo:'#password'}" autocomplete="off" aria-required="true">
        </div>
      </div>
    </fieldset>
    <div class="actions-toolbar">
      <div class="primary">
        <button type="submit" class="tw-btn-black tw-py-8 tw-text-lg tw-w-full action submit primary"><span>Set a New Password</span></button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "ResetPassword"
}
</script>

<style scoped>

</style>