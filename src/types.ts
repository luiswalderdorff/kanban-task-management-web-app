export interface Subtask {
  name: string;
  checked?: boolean;
}

export interface Task {
  title: string;
  description: string;
  subtasks: Subtask[];
  id: string | null;
  columnId?: string;
}

export interface Column {
  name: string;
  id: string;
  tasks: Task[];
}

export interface Board {
  id: number;
  name: string;
  columns: Column[];
}

export interface State {
  boards: Board[];
  selectedBoardId: number | null;
  sideMenuOpen: boolean;
  darkMode: boolean;
}

export interface Payload {
  boardIndex: number;
  board: Board;
  column: Column;
  taskIndex: number;
  task: Task;
  columnId: string;
  boardId: number;
  taskId: string;
  subtaskIndex: number;
  checked: boolean;
}
