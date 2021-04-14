<template>
  <section class="tw-mb-20" id="AlertMessages">
    <h2>Alert messages</h2>
  <div class="page messages tw-container">
    <div data-placeholder="messages"></div>
    <div data-bind="scope: 'messages'">
      <!-- ko if: cookieMessages && cookieMessages.length > 0 -->
      <div role="alert" data-bind="foreach: { data: cookieMessages, as: 'message' }" class="messages">
        <div data-bind="attr: {
            class: 'message-' + message.type + ' ' + message.type + ' message',
            'data-ui-id': 'message-' + message.type
        }" class="message-success success message tw-bg-gray-theme-light tw-p-6" data-ui-id="message-success">
          <div data-bind="html: message.text">Thank you for your subscription.</div>
        </div>
      </div>
      <!-- /ko -->
      <!-- ko if: messages().messages && messages().messages.length > 0 --><!-- /ko -->
    </div>

  </div>
  </section>
</template>

<script>
export default {
name: "AlertMessages"
}
</script>

<style scoped>

</style>