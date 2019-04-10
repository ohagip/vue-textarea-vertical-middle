<template>
  <div class="tvm" ref="contents">
    <textarea
      ref="textarea"
      class="tvm_textarea"
      :placeholder="placeholder"
      :style="style"
      @keyup="onChange"
      @change="onChange"
    ></textarea>
    <div class="tvm_cal">
      <div class="tvm_textarea tvm_textarea-cal" ref="calHeight" v-html="calText"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextareaVerticalMiddle',

  data() {
    return {
      text: '',
      placeholder: 'プレースポルダー',
      textArea: {
        paddingTop: 0,
        height: 0
      }
    }
  },

  computed: {
    style() {
      return {
        'padding-top': `${this.textArea.paddingTop}px`,
        'height': `${this.textArea.height}px`
      }
    },

    calText() {
      if (this.text === '') {
        return this.placeholder;
      } else {
        return this.text.replace(/\n/g, '<br>');
      }
    },
  },

  methods: {
    calTextAreaHeight() {
        const wrapHeight = this.$refs.contents.clientHeight;
        const textHeight = this.$refs.calHeight.clientHeight;
        const pTop = Math.max(0, (wrapHeight - textHeight) / 2);
        this.textArea.paddingTop = pTop;
        this.textArea.height = wrapHeight - pTop;
    },

    onChange() {
      this.text = this.$refs.textarea.value;
      this.$nextTick(() => {
        this.calTextAreaHeight();
      });
    }
  },

  mounted() {
    this.calTextAreaHeight()
  }
}
</script>
<style scoped>
.tvm {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  background-color: #fff;
}

.tvm_cal {
  display: block;
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  width: 100%;
  height: 0;
}

.tvm_textarea {
  box-sizing: content-box;
  padding: 0;
  height: 0;
  width: 100%;
  color: #333;
  font-size: 16px;
  text-align: center;
  border: none;
  word-wrap: break-word;
  outline: none;
  resize: none;
}

.tvm_textarea.tvm_textarea-cal {
  padding: 0;
  height: auto;
}

</style>
