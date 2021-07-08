<template>
  <div>
    <div class="tw-bg-red-500 lg:tw-bg-yellow-500 xl:tw-bg-blue-200">
      <div class="tw-text-4xl">Olá João</div>
    </div>

    <div class="Principal lg:tw-mt-10 tw-group">
      <div class="tw-mb-16 tw-text-4xl tw-bg-gray-300">Olá João</div>
      <div class="tw-p-16">BREAK</div>
      <div :class="{'tw-text-brand-primary tw-text-xs tw-bg-purple-500': active, 'tw-bg-red-700': !active }" class="Clicar Aqui tw-text-4xl">Tchau Leo</div>
    </div>
    {{active | json}}


    <button @click="toggle()" class="tw-btn-black tw-px-4 tw-py-2 tw-mt-10">Trocar</button>
  </div>
</template>

<script>
export default {
  name: "TestJoao",
  data() {
    return {
      active: false
    }
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
    buttonClass() {
      if(this.active) {
        return 'tw-text-brand-primary';
      }
      return 'tw-text-brand-primary-900'
    }
  }
}
</script>

<style scoped>
.lg\:tw-bg-yellow-500 {}
</style>