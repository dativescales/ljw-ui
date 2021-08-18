<template>
<!-- 对话框的遮罩 self点击自己才触发-->
  <transition name="dialog-fade">
    <div class="ljw-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <div class="ljw-dialog" :style="{width, marginTop:top}">
        <div class="ljw-dialog__header">
          <slot name="title">
            <span class="ljw-dialog__title">{{title}}</span>
          </slot>
          <button class="ljw-dialog__headerbtn" @click="handleClose">
            <i class="ljw-icon-close"></i>
          </button>
        </div>
        <div class="ljw-dialog__body">
          <!-- 默认插槽 -->
          <slot></slot>
        </div>
        <div class="ljw-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'LjwDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      console.log('111')
      // this.$emit('close', false)
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.ljw-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0, .5);

  .ljw-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 10px;
      .ljw-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .ljw-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }

    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .ljw-button:first-child {
        margin-right: 20px;
      }

    }
  }
}
.dialog-fade-enter-active {
  animation: fade .3s;
}
.dialog-fade-leave-active {
  animation: fade .3s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
