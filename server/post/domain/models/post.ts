import { UserId } from "@/server/user/domain/models/userId";
import { PostId } from "./postId";

export enum PostVisibility {
    PUBLIC = "Public",
    PRIVATE = "Private",
}

export class Post {
    constructor(
        readonly id: PostId,
        readonly authorId: UserId,
        public title: string,
        public description: string,
        public visibility: PostVisibility,
        readonly createdAt: Date,
        public updatedAt: Date,
        private _likes: number,
    ) {}

    get likes(): number { return this._likes }

    addLike(): void { this._likes++ }
}