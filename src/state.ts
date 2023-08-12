import { createStore } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default createStore({
  state: {
    boards: [
      // Testdata
      {
        id: 1691875119740,
        name: "Platform Launch",
        columns: [
          {
            name: "To Do",
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
                boardId: 1691875119740,
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
                boardId: 1691875119740,
              },
            ],
          },
          {
            name: "Doing",
            id: "2023-08-12T21:18:29.474Z",
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
                boardId: 1691875119740,
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
                boardId: 1691875119740,
              },
            ],
          },
          {
            name: "Done",
            id: "2023-08-12T21:18:30.018Z",
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
                boardId: 1691875119740,
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
                boardId: 1691875119740,
              },
            ],
          },
        ],
      },
    ] as any[],
    selectedBoard: null,
    newTask: {
      id: "",
      title: "",
      description: "",
      subtasks: [],
      columnId: "",
    },
  },
  actions: {
    addBoard({ commit }, board) {
      const id = uuidv4();
      commit("ADD_BOARD", { id, ...board });
      console.log(board);
    },
    selectBoard({ commit }, boardId) {
      commit("SELECT_BOARD", boardId);
    },
    async addTask({ state, commit }, newTask) {
      const board = state.boards.find((board) =>
        board.columns.some((column: any) => column.id === newTask.columnId)
      );
      if (board) {
        const column = board.columns.find(
          (column: any) => column.id === newTask.columnId
        );
        console.log(column);

        column.tasks.push(newTask);
        commit("ADD_TASK", newTask);
      }
      console.log(board);
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
  },
});
