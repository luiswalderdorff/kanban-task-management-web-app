<template>
  <div class="board-task">
    <!-- TODO: Add colors -->
    <h3 class="h3 board-task__title">{{ task.title }}</h3>
    <!-- TODO: calculate finished subtasks and test with 0 subtasks -->
    <p class="p2 board-task__subtasks">
      0 of {{ task.subtasks.length }} subtasks
    </p>
    <!--<p>{{ task.description }}</p>
    
    <ul>
      <li v-for="subtask in task.subtasks" :key="subtask.id">
        {{ subtask.name }}
      </li>
    </ul>
    -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["task"],
});
</script>

<style lang="scss">
.board-task {
  width: 280px;
  max-width: 75vw;
  border-radius: 8px;
  background: var(--white);
  box-shadow: 0px 4px 6px 0px rgba(54, 78, 126, 0.1);
  padding: 23px 16px;
  margin-bottom: 20px;

  &__title {
    margin: 0;
  }

  &__subtasks {
    color: var(--medium-grey);
    margin: 8px 0 0;
  }
}
</style>
