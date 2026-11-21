import type { Base } from "./base";
import type { Permission } from "./permissions";

export interface Role extends Base {
  name: string;
  permission: Permission[];
}
