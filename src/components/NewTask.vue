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
      <div class="new-task__header">
        <h2 class="heading-large">Add New Task</h2>
        <button @click="modalOpen = false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <rect
              x="12.7279"
              width="3"
              height="18"
              transform="rotate(45 12.7279 0)"
              fill="#828FA3"
            />
            <rect
              y="2.12109"
              width="3"
              height="18"
              transform="rotate(-45 0 2.12109)"
              fill="#828FA3"
            />
          </svg>
        </button>
      </div>

      <task-form :board="board" @close-event="modalOpen = false" />
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
  margin-right: 16px;
  &__header {
    display: flex;
    justify-content: space-between;
  }
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
