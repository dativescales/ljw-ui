<template>
  <div class="ljw-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LjwRadioGroup',
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    // 接收到了value
    // 触发input
    // provide 与 inject
    value: null
  }
}
</script>

<style>

</style>
