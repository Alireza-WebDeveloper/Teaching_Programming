interface User {
  name: string;
}

interface Comment {
  _id: string;
  text: string;
  status: boolean;
  createAt: string;
  user: User;
  course: string;
  replies: ReplyComment[];
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
