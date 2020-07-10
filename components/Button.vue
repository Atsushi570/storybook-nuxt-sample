<template>
  <div>
    <button
      :class="['button', colors || 'is-primary', size || 'is-normal']"
      :Disabled="disable"
      @click="clickHandler"
    >
      <slot>
        <span>{{ btnText }}</span>
      </slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    btnText: String,
    colors: String,
    size: String,
    disable: Boolean,
  },
  methods: {
    clickHandler(event) {
      this.$emit('click', event)
    },
  },
}
</script>
