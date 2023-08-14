import { createStore } from "vuex";

export default createStore({
  state: {
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
                  },
                  {
                    name: "Task 2",
                  },
                  {
                    name: "Task 3",
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
    selectedBoard: null,
    newTask: {
      id: "",
      title: "",
      description: "",
      subtasks: [],
      columnId: "",
    },
    sideMenuOpen: false,
  },
  actions: {
    addBoard({ commit }, board) {
      const id = Date.now();
      commit("ADD_BOARD", { id, ...board });
      console.log(board);
    },
    selectBoard({ commit }, board) {
      commit("SELECT_BOARD", board.id);
    },
    async addTask({ state, commit }, newTask) {
      const board = state.boards.find((board) =>
        board.columns.some((column: any) => column.id === newTask.columnId)
      );
      if (board) {
        const column = board.columns.find(
          (column: any) => column.id === newTask.columnId
        );
        column.tasks.push(newTask);
        commit("ADD_TASK", newTask);
      }
      console.log(board);
    },
    toggleSideMenu() {
      this.commit("TOGGLE_SIDE_MENU");
    },
    initializeSelectedBoard({ commit, state }) {
      const selectedBoard = state.boards.length > 0 ? state.boards[0] : null;
      console.log(selectedBoard);

      commit("SET_SELECTED_BOARD", selectedBoard);
    },
  },
  mutations: {
    ADD_BOARD(state, board) {
      state.boards.push(board);
      if (!state.selectedBoard) {
        state.selectedBoard = board.id;
      }
    },
    SELECT_BOARD(state, boardId) {
      state.selectedBoard = boardId;
    },
    ADD_TASK(state, task) {
      const column = state.boards
        .find((board) => board.id === task.boardId)
        .columns.find((column: any) => column.id === task.columnId);
      column.tasks.push(task);
    },
    TOGGLE_SIDE_MENU(state) {
      state.sideMenuOpen = !state.sideMenuOpen;
    },
    SET_SELECTED_BOARD(state, boardId) {
      state.selectedBoard = boardId;
    },
  },
});
