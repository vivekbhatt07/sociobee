import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Vivek",
    lastName: "Bhatt",
    username: "vivekbhatt07",
    password: "vivekbhatt07@",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
