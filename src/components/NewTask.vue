<template>
  <div class="new-task" v-if="board">
    <button
      class="new-task__button"
      :disabled="board.columns.length === 0"
      @click="modalOpen = true"
    >
      +
    </button>
    <ModalComponent :content="modalOpen">
      <h2 class="heading-large">Add New Task</h2>

      <task-form :board="board" />
      <button @click="modalOpen = false">Close</button>
    </ModalComponent>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TaskForm from "./subcomponents/TaskForm.vue";
import ModalComponent from "./subcomponents/ModalComponent";

export default defineComponent({
  props: ["board"],
  data() {
    return {
      modalOpen: false,
    };
  },
  components: { TaskForm, ModalComponent },
});
</script>

<style lang="scss">
.new-task {
  &__button {
    background-color: var(--main-purple);
    color: var(--white);
    border-radius: 25px;
    font-weight: bold;
    font-size: 23px;
    height: 32px;
    width: 48px;

    &:disabled {
      opacity: 0.25;
    }
  }
}
</style>
