import { createStore } from "vuex";
import { localStoragePlugin } from "./services/localStoragePlugin";
import { v4 as uuidv4 } from "uuid";
import { Task, Column, Board } from "./types";

const savedState = localStorage.getItem("state");

export default createStore({
  state: savedState
    ? JSON.parse(savedState)
    : {
        boards: [] as Board[],
        selectedBoardId: null,
        sideMenuOpen: false,
        mobile: false,
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
          (b: Board) => b.id === board.id
        );
        if (boardIndex !== -1) {
          commit("EDIT_BOARD", { boardIndex, board });
        }
      }
    },
    selectBoard({ state, commit }, board) {
      if (state.mobile) {
        state.sideMenuOpen = !state.sideMenuOpen;
      }
      commit("SELECT_BOARD", board.id);
    },
    async saveTask({ state, commit }, task) {
      const board = state.boards.find((board: Board) =>
        board.columns.some((column: Column) => column.id === task.columnId)
      );
      if (board) {
        const column = board.columns.find(
          (column: Column) => column.id === task.columnId
        );
        if (task.id) {
          // Edit existing task
          const taskIndex = column?.tasks.findIndex(
            (existingTask: Task) => existingTask.id === task.id
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
      const board = state.boards.find((board: Board) =>
        board.columns.some((column: Column) =>
          column.tasks.some((t: Task) => t.id === task.id)
        )
      );
      if (board) {
        const column = board.columns.find((column: Column) =>
          column.tasks.some((t: Task) => t.id === task.id)
        );
        const taskIndex = column?.tasks.findIndex(
          (existingTask: Task) => existingTask.id === task.id
        );
        commit("DELETE_TASK", { column, taskIndex });
      }
    },
    toggleSideMenu({ state }) {
      if (state.mobile) {
        this.commit("TOGGLE_SIDE_MENU");
      }
    },
    initializeSelectedBoard({ commit, state }) {
      if (!state.selectedBoardId) {
        const selectedBoardId =
          state.boards.length > 0 ? state.boards[0].id : null;
        commit("SET_SELECTED_BOARD_ID", selectedBoardId);
      }
    },
    // TODO: Objekt at the moment is referenced directly and changed. In the future, create deep copy, change it manually through mutations
    /*updateSubtask({ commit }, payload) {
      //commit("UPDATE_SUBTASK", payload);
    },*/
    toggleDarkMode({ commit }) {
      commit("TOGGLE_DARK_MODE");
    },
    deleteBoard({ commit, state }, boardId) {
      const board = state.boards.find((board: Board) => board.id === boardId);
      if (board) {
        commit("DELETE_BOARD", { board });
      }
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
      if (state.mobile) {
        state.sideMenuOpen = !state.sideMenuOpen;
      }
    },
    SET_SELECTED_BOARD_ID(state, boardId) {
      state.selectedBoardId = boardId;
    },
    /*UPDATE_SUBTASK(
      state,
      { boardId, columnId, taskId, subtaskIndex, checked }
    ) {
      const board = state.boards.find((board: Board) => board.id === boardId);
      const column = board.columns.find(
        (column: Column) => column.id === columnId
      );
      const task = column.tasks.find((task: Task) => task.id === taskId);
      const subtask = task.subtasks[subtaskIndex];
      subtask.checked = checked;
    },*/
    MOVE_TASK(state, event) {
      console.log(state);
      console.log(event);

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
    DELETE_BOARD(state, { board }) {
      const boardIndex = state.boards.findIndex(
        (b: Board) => b.id === board.id
      );
      state.boards.splice(boardIndex, 1);

      // If the deleted board was the selected board, select the next available board
      if (state.selectedBoardId === board.id) {
        if (state.boards.length > 0) {
          // If there are still boards left, select the next one (or the first one if the deleted board was the last one)
          state.selectedBoardId =
            state.boards[Math.min(boardIndex, state.boards.length - 1)].id;
        } else {
          // If there are no boards left, set selectedBoardId to null
          state.selectedBoardId = null;
        }
      }
    },
  },
  plugins: [localStoragePlugin],
});
