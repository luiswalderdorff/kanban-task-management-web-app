<template>
  <div class="board-task">
    <!-- TODO: Add colors -->
    <h3 class="heading-medium board-task__title">{{ task.title }}</h3>
    <p class="body-medium board-task__subtasks">
      {{ task.subtasks.filter((subtask: any) => subtask.checked).length }} of
      {{ task.subtasks.length }} subtasks
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["task"],
});
</script>

<style lang="scss">
.main-board__column {
  min-height: 80vh;

  h2 {
    width: 280px;
  }

  & > div {
    min-height: 80%;
  }
}
.board-task {
  width: 280px;
  max-width: 75vw;
  border-radius: 8px;
  background: var(--white);
  box-shadow: 0px 4px 6px 0px rgba(54, 78, 126, 0.1);
  padding: 23px 16px;
  margin-bottom: 20px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    .board-task__title {
      color: var(--main-purple);
    }
  }

  &__title {
    margin: 0;
    word-wrap: break-word;
  }

  &__subtasks {
    color: var(--medium-grey) !important;
    margin: 8px 0 0;
  }

  .dark-mode & {
    background: var(--dark-grey);
    color: var(--white);
  }
}
</style>
