<template>
  <div class="ljw-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LjwCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style>

</style>
