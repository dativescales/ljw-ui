<template>
  <div class="ljw-switch" :class="{'is-checked': value}" @click="handleClick">
    <span class="ljw-switch__core" ref="core">
      <span class="ljw-switch__button"></span>
    </span>
    <input
      class="ljw-switch__input"
      type="checkbox"
      :name="name"
      ref="input"
    >
  </div>
</template>

<script>
export default {
  name: 'LjwSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }

  },
  methods: {
    async handleClick () {
      this.$emit('input', !this.value)
      // 点击的时候还需要修改背景色
      // console.log(this.value, '为等待')
      // 等待value发生了改变，再setColor
      // 数据修改后，等待DOM更新，再修改按钮的颜色
      await this.$nextTick()
      console.log(this.value, '已等待')
      this.setColor()
      this.$refs.input.checked = this.value
    },
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        // console.log(color)
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  mounted () {
    // 修改开关颜色
    this.setColor()
    // 控制checkbox的checkbox
    this.$refs.input.checked = this.value
  }
}
</script>

<style lang="scss">
.ljw-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;

  .ljw-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .ljw-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .ljw-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
.ljw-switch.is-checked {
  .ljw-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .ljw-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>
