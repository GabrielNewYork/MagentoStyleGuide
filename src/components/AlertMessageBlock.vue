<template>
  <div>
    <div class="AlertMessagesBlock tw-container page-- messages--">
      <div data-placeholder="messages"></div>
      <div data-bind="scope: 'messages'">
        <!-- ko if: cookieMessages && cookieMessages.length > 0 --><!-- /ko -->
        <!-- ko if: messages().messages && messages().messages.length > 0 --><!-- /ko -->
      </div>

      <div class="messages">
        <div class="message message-success success">
          <div data-ui-id="checkout-cart-validationmessages-message-success">You added 14K White Gold Diamond Charm
            Choker Necklace to your shopping cart.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertMessageBlock"
}
</script>

<style scoped>

</style>