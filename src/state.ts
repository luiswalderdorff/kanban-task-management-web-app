import { createStore } from "vuex";
import { localStoragePlugin } from "./services/localStoragePlugin";
import { v4 as uuidv4 } from "uuid";

const savedState = localStorage.getItem("state");

export default createStore({
  state: savedState
    ? JSON.parse(savedState)
    : {
        boards: [
          // Testdata
          {
            id: 1691875119710,
            name: "Platform Launch",
            columns: [
              {
                name: "To Do",
                id: "1691875119719",
                tasks: [
                  {
                    title: "Build UI",
                    description:
                      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    subtasks: [
                      {
                        name: "Task1",
                        checked: false,
                      },
                      {
                        name: "Task 2",
                        checked: false,
                      },
                      {
                        name: "Task 3",
                        checked: false,
                      },
                    ],
                    id: "1691875119720",
                  },
                  {
                    title: "More stuff",
                    description:
                      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    subtasks: [
                      {
                        name: "Task1",
                      },
                      {
                        name: "Task 2",
                      },
                      {
                        name: "Task 3",
                      },
                    ],
                    id: "1691875119730",
                  },
                ],
              },
              {
                name: "Doing",
                id: "1691875119710111",
                tasks: [
                  {
                    title: "Doing task 1",
                    description:
                      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    subtasks: [
                      {
                        name: "Task1",
                      },
                      {
                        name: "Task 2",
                      },
                      {
                        name: "Task 3",
                      },
                    ],
                    id: "1691875119750",
                  },
                  {
                    title: "Doing task 2",
                    description:
                      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    subtasks: [
                      {
                        name: "Task1",
                      },
                      {
                        name: "Task 2",
                      },
                      {
                        name: "Task 3",
                      },
                    ],
                    id: "1691875119760",
                  },
                ],
              },
              {
                name: "Done",
                id: "1691875119718",
                tasks: [
                  {
                    title: "Build UI for onboarding flow",
                    description:
                      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    subtasks: [
                      {
                        name: "Task1",
                      },
                      {
                        name: "Task 2",
                      },
                      {
                        name: "Task 3",
                      },
                    ],
                    id: "1691875119770",
                  },
                  {
                    title: "Build UI for onboarding flow",
                    description:
                      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    subtasks: [
                      {
                        name: "Task1",
                      },
                      {
                        name: "Task 2",
                      },
                      {
                        name: "Task 3",
                      },
                    ],
                    id: "1691875119780",
                  },
                ],
              },
            ],
          },
          {
            id: 1691875119741,
            name: "Platform Launch 2",
            columns: [
              {
                name: "To Do",
                id: "1691875119717",
                tasks: [
                  {
                    title: "Build UI for onboarding flow",
                    description:
                      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    subtasks: [
                      {
                        name: "Task1",
                      },
                      {
                        name: "Task 2",
                      },
                      {
                        name: "Task 3",
                      },
                    ],
                    id: "1691875119742",
                  },
                  {
                    title: "Build UI for onboarding flow",
                    description:
                      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    subtasks: [
                      {
                        name: "Task1",
                      },
                      {
                        name: "Task 2",
                      },
                      {
                        name: "Task 3",
                      },
                    ],
                    id: "1691875119743",
                  },
                ],
              },
              {
                name: "Doing",
                id: "1691875119716",
                tasks: [
                  {
                    title: "Build UI for onboarding flow",
                    description:
                      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    subtasks: [
                      {
                        name: "Task1",
                      },
                      {
                        name: "Task 2",
                      },
                      {
                        name: "Task 3",
                      },
                    ],
                    id: "1691875119744",
                  },
                  {
                    title: "Build UI for onboarding flow",
                    description:
                      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    subtasks: [
                      {
                        name: "Task1",
                      },
                      {
                        name: "Task 2",
                      },
                      {
                        name: "Task 3",
                      },
                    ],
                    id: "1691875119746",
                  },
                ],
              },
              {
                name: "Done",
                id: "1691875119715",
                tasks: [
                  {
                    title: "Build UI for onboarding flow",
                    description:
                      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    subtasks: [
                      {
                        name: "Task1",
                      },
                      {
                        name: "Task 2",
                      },
                      {
                        name: "Task 3",
                      },
                    ],
                    id: "1691875119746",
                  },
                  {
                    title: "Build UI for onboarding flow",
                    description:
                      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    subtasks: [
                      {
                        name: "Task1",
                      },
                      {
                        name: "Task 2",
                      },
                      {
                        name: "Task 3",
                      },
                    ],
                    id: "1691875119747",
                  },
                ],
              },
            ],
          },
        ] as any[],
        // TODO: Add first board naturally
        selectedBoardId: null,
        sideMenuOpen: false,
        darkMode: false,
      },
  actions: {
    async saveBoard({ state, commit }, board) {
      if (!board.id) {
        // Add new board
        board.id = uuidv4();
        commit("ADD_BOARD", board);
      } else {
        // Edit existing board
        const boardIndex = state.boards.findIndex(
          (b: any) => b.id === board.id
        );
        if (boardIndex !== -1) {
          commit("EDIT_BOARD", { boardIndex, board });
        }
      }
    },
    selectBoard({ state, commit }, board) {
      state.sideMenuOpen = !state.sideMenuOpen;
      commit("SELECT_BOARD", board.id);
    },
    async saveTask({ state, commit }, task) {
      const board = state.boards.find((board: any) =>
        board.columns.some((column: any) => column.id === task.columnId)
      );
      if (board) {
        const column = board.columns.find(
          (column: any) => column.id === task.columnId
        );
        if (task.id) {
          // Edit existing task
          const taskIndex = column.tasks.findIndex(
            (existingTask: any) => existingTask.id === task.id
          );
          commit("EDIT_TASK", { column, taskIndex, task });
        } else {
          // Add new task
          task.id = uuidv4();
          commit("ADD_TASK", { column, task });
        }
      }
    },
    deleteTask({ commit, state }, task) {
      const board = state.boards.find((board: any) =>
        board.columns.some((column: any) =>
          column.tasks.some((t: any) => t.id === task.id)
        )
      );
      if (board) {
        const column = board.columns.find((column: any) =>
          column.tasks.some((t: any) => t.id === task.id)
        );
        const taskIndex = column.tasks.findIndex(
          (existingTask: any) => existingTask.id === task.id
        );
        commit("DELETE_TASK", { column, taskIndex });
      }
    },
    toggleSideMenu() {
      this.commit("TOGGLE_SIDE_MENU");
    },
    initializeSelectedBoard({ commit, state }) {
      if (!state.selectedBoardId) {
        const selectedBoardId =
          state.boards.length > 0 ? state.boards[0].id : null;
        commit("SET_SELECTED_BOARD_ID", selectedBoardId);
      }
    },
    // TODO: Objekt at the moment is referenced directly and changed. In the future, create deep copy, change it manually through mutations
    updateSubtask({ commit }, payload) {
      //commit("UPDATE_SUBTASK", payload);
    },
    toggleDarkMode({ commit }) {
      commit("TOGGLE_DARK_MODE");
    },
  },
  mutations: {
    ADD_BOARD(state, board) {
      state.boards.push(board);
      if (!state.selectedBoardId) {
        state.selectedBoardId = board.id;
      }
    },
    EDIT_BOARD(state, { boardIndex, board }) {
      state.boards.splice(boardIndex, 1, board);
    },
    SELECT_BOARD(state, boardId) {
      state.selectedBoardId = boardId;
    },
    ADD_TASK(state, { column, task }) {
      column.tasks.push(task);
    },
    TOGGLE_SIDE_MENU(state) {
      state.sideMenuOpen = !state.sideMenuOpen;
    },
    SET_SELECTED_BOARD_ID(state, boardId) {
      state.selectedBoardId = boardId;
    },
    UPDATE_SUBTASK(
      state,
      { boardId, columnId, taskId, subtaskIndex, checked }
    ) {
      /*const board = state.boards.find((board: any) => board.id === boardId);
      const column = board.columns.find(
        (column: any) => column.id === columnId
      );
      const task = column.tasks.find((task: any) => task.id === taskId);
      const subtask = task.subtasks[subtaskIndex];
      subtask.checked = checked;*/
    },
    MOVE_TASK(state, event) {
      console.log(state);

      // Update the state based on the event
      // You can access the old and new indices of the moved task from event.oldIndex and event.newIndex
      // You can access the old and new column from event.from and event.to
    },
    EDIT_TASK(state, { column, taskIndex, task }) {
      column.tasks.splice(taskIndex, 1, task);
    },
    DELETE_TASK(state, { column, taskIndex }) {
      column.tasks.splice(taskIndex, 1);
    },
    TOGGLE_DARK_MODE(state) {
      state.darkMode = !state.darkMode;
    },
  },
  plugins: [localStoragePlugin],
});
