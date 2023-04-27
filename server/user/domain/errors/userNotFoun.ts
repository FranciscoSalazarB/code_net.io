import { ModelError, ErrorType } from "@/shared/domain/ERROR";

export class UserNotFound extends ModelError {
  constructor() {
    super(
      "User not found",
      "El usuario no se ha encontrado",
      ErrorType.NotFound
    );
  }
}
