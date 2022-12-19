<template>
  <div class="app-input">
    <label :for="name" class="label">{{ label }}</label>
    <input
      type="text"
      v-model="localValue"
      :placeholder="placeholder"
      class="input"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    name: {
      type: String,
    },
    label: {
      type: String,
    },
  },

  computed: {
    localValue: {
      get() {
        return this.value;
      },
      set(data) {
        this.$emit("input", data);
      },
    },
  },
};
</script>

<style scoped lang="scss">
.app-input {
  display: flex;
  flex-direction: column;
  gap: 10px;

  > .label {
    text-align: left;
  }

  > .input {
    border: none;
    padding: 5px 20px;
    border-radius: 5px;
    outline: none;
    height: 46px;
    border: 1px solid #dba39a;
  }
}
</style>
