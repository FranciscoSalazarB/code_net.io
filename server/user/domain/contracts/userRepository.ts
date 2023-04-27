import { CRUD } from "@/shared/domain/CRUD";
import { User } from "../models/user";
import { UserId } from "../models/userId";

export interface UserRepository extends CRUD<User, UserId> {}