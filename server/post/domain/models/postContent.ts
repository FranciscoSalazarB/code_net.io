import { PostContentId, PostId, PostResponseId } from "./postId";

export enum PostContentType {
    TEXT = "text",
    IMAGE = "image",
    LINK = "link",
    REPLAY = "replay",
    CODE = "code",
}

export class PostContent {
    constructor(
        readonly id: PostContentId,
        readonly PostId: PostId | PostResponseId,
        readonly contentType: PostContentType,
        readonly createdAt: Date,
        public updatedAt: Date,
        public deletedAt: Date,
    ) {}
}