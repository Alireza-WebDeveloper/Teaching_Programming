interface User {
  name: string;
  id: string;
}

interface Comment {
  _id: string;
  text: string;
  status: boolean;
  createAt: string;
  user: User;
  course: string;
  replies: ReplyComment[];
  likes: LikeComment[];
}

export interface LikeComment {
  user: string;
  _id: string;
}

export interface ReplyComment {
  _id: string;
  text: string;
  status: boolean;
  createAt: string;
  user: User;
  comment: string;
}

export type CommentState = Comment;
export interface CommentResponse {
  status: string;
  data: {
    comments: Comment[];
  };
}
