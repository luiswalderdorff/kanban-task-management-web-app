<template>
  <div
    class="main-board"
    :class="{ 'main-board--darkened': sideMenuOpen || selectedTask }"
  >
    <div class="main-board__columns" v-if="board">
      <div
        class="main-board__column"
        v-for="(column, index) in board.columns"
        :key="index"
      >
        <h2 class="h4 main-board__title">
          {{ column.name }}
          <template v-if="column.tasks.length"
            >({{ column.tasks.length }})</template
          >
        </h2>
        <draggable
          v-model="column.tasks"
          group="people"
          @start="drag = true"
          @end="drag = false"
          item-key="id"
        >
          <template #item="{ element }">
            <BoardTask :task="element" @click="showTask(element, column.id)" />
          </template>
        </draggable>
      </div>
    </div>

    <div class="task-modal" v-if="selectedTask">
      <h2 class="h2">{{ selectedTask.title }}</h2>
      <p class="p1">{{ selectedTask.description }}</p>
      <h3 class="h4">
        Subtasks ({{
          selectedTask.subtasks.filter((subtask: any) => subtask.checked).length
        }}
        of {{ selectedTask.subtasks.length }})
      </h3>
      <ul class="subtasks">
        <label
          class="subtasks__task"
          v-for="(subtask, index) in selectedTask.subtasks"
          :key="subtask.id"
          :for="selectedTask.id + '-' + index"
        >
          <input
            class="subtasks__checkbox"
            type="checkbox"
            :id="selectedTask.id + '-' + index"
            v-model="subtask.checked"
          />
          <span class="subtasks__description p2">{{ subtask.name }}</span>
          <svg
            class="subtasks__check-icon"
            width="10"
            height="8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="#FFF"
              stroke-width="2"
              fill="none"
              d="m1.276 3.066 2.756 2.756 5-5"
            />
          </svg>
        </label>
      </ul>
      <h3 class="h4">Current Status</h3>
      <select v-model="selectedColumnId">
        <option
          v-for="column in board.columns"
          :value="column.id"
          :key="column.id"
        >
          {{ column.name }}
        </option>
      </select>
      <button
        @click="
          selectedTask = null;
          selectedColumnId = null;
        "
      >
        Close
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import draggable from "vuedraggable";
import BoardTask from "./BoardTask.vue";

export default defineComponent({
  props: ["board"],
  data() {
    return {
      newTask: {
        title: "",
        description: "",
        subtasks: [{ name: "" }],
        columnIndex: null,
      },
      selectedTask: null as any,
      selectedColumnId: null as any,
      drag: false,
    };
  },
  components: { BoardTask, draggable },
  computed: {
    sideMenuOpen() {
      const store = useStore();
      return store.state.sideMenuOpen;
    },
  },
  methods: {
    showTask(task: any, columnId: string) {
      this.selectedTask = { ...task };
      this.selectedColumnId = columnId;
    },
    moveTaskToColumn(oldColumnId: string, newColumnId: string) {
      const oldColumn = this.board.columns.find(
        (column: any) => column.id === oldColumnId
      );
      console.log(oldColumnId);

      oldColumn.tasks = oldColumn.tasks.filter(
        (t: any) => t.id !== this.selectedTask.id
      );
      console.log(oldColumn);

      const newColumn = this.board.columns.find(
        (column: any) => column.id === newColumnId
      );

      newColumn.tasks.push(this.selectedTask);
    },
  },
  watch: {
    selectedColumnId: function (newColumnId, oldColumnId) {
      if (
        newColumnId !== oldColumnId &&
        oldColumnId !== null &&
        newColumnId !== null &&
        this.selectedTask
      ) {
        this.moveTaskToColumn(oldColumnId, newColumnId);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.main-board {
  background-color: var(--light-bg);
  position: relative;
  overflow: scroll;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    pointer-events: none;
  }
  &--darkened::after {
    opacity: 1;
  }

  &__columns {
    display: flex;
  }

  &__column {
    padding-right: 24px;

    &:last-child {
      padding-right: 16px;
    }
  }

  &__title {
    margin: 8px 0 24px;
  }
}

.task-modal {
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

  .h2 {
    margin: 0 0 24px;
  }

  .p1 {
    color: var(--medium-grey);
    margin: 24px 0 16px;
  }
}

.subtasks {
  padding: 0;
  &__task {
    border-radius: 4px;
    background: var(--light-bg, #f4f7fd);
    padding: 13px;
    margin: 0 16px 8px 0;
    display: block;
    position: relative;
    display: flex;
    align-items: center;
  }
  &__checkbox {
    appearance: none;
    border-radius: 2px;
    border: 1px solid rgba(130, 143, 163, 0.25);
    background: var(--white, #fff);
    width: 16px;
    height: 16px;
    padding: 2px;
    position: relative;
    transition: background-color 0.2s;
    margin: 0;

    &:checked {
      background-color: var(--main-purple);

      & + .subtasks__description {
        text-decoration: line-through;
        color: var(--medium-grey);
      }
    }
  }

  &__description {
    margin-left: 16px;
  }

  &__check-icon {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
  }
}
</style>
