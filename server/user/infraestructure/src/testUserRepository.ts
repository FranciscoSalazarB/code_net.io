import { UserRepository } from "../../domain/contracts/userRepository";
import { User } from "../../domain/models/user";
import { UserId } from "../../domain/models/userId";

export class TestUserRepository implements UserRepository {
  db: User[];
  constructor() {
    this.db = [
    ];
  }

  async find(id: UserId): Promise<User | null> {
    return this.db.find(user => user.id.value == id.value) ?? null
  }
  async save(model: User): Promise<UserId> {
    return new UserId(Math.random().toString());
  }
  async update(model: User) {}
  async delete(id: UserId) {}
}
