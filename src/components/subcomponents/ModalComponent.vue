<template>
  <div class="modal" v-if="content">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { EventBus } from "../../services/EventBus";

export default defineComponent({
  props: ["content"],
  watch: {
    content(newVal, oldVal) {
      if (newVal && !oldVal) {
        EventBus.emit("modal-open");
      } else if (!newVal && oldVal) {
        EventBus.emit("modal-close");
      }
    },
  },
  beforeUnmount() {
    EventBus.emit("modal-close");
  },
});
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--white);
  padding: 20px;
  z-index: 2;
  width: 90%;
  border-radius: 6px;
  padding: 24px;
  box-sizing: border-box;
  max-height: 90vh;
  overflow: auto;

  @media only screen and (min-width: 768px) {
    width: 480px;
    padding: 32px;
  }

  &__section {
    margin-bottom: 24px;
  }

  .dark-mode & {
    background-color: var(--dark-grey);
  }
}
</style>
