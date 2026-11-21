import type { Base } from "./base";
import type { User } from "./user";

export interface Todo extends Base {
  title: string;
  description: string;
  status: string;
  assignee: User;
  dueDate: Date;
}
