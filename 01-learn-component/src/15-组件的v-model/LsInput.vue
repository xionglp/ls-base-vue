<template>
  <div>
    <!-- <input :value="modelValue" @input="btnClick"> -->

    <input v-model="value">
    <input v-model="why">
  </div>
</template>

<script>
  export default {
    props: {
      modelValue: String,
      title: String
    },
    emits: ["update:modelValue", "update:title"],
    computed: {
      value: {
        set(value) {
          this.$emit("update:modelValue", value)
        },
        get() {
          return this.modelValue
        }
      },
      why: {
        set(value) {
          this.$emit("update:title", value)
        },
        get() {
          return this.title
        }
      }
    },
    methods: {
      btnClick(event) {
        this.$emit("update:modelValue", event.target.value)
      }
    }
  }
</script>

<style scoped>

</style>