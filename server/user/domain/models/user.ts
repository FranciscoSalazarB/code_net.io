import { UserId } from "./userId";

export class User {
  constructor(
    readonly id: UserId,
    public name: string,
    public email: string,
    public password: string
  ) {}
}
