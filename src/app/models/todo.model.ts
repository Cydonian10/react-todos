export interface ITodo {
  id: number;
  text: string;
  done: boolean;
}

export interface CreateTodoDto extends Omit<ITodo, "id" | "done"> {}
