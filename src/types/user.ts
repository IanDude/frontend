import type { Base } from "./base";
import type { Role } from "./role";

export interface User extends Base {
  username: string;
  email: string;
  role: Role[];
  password: string;
}
