import { CommentResponse } from '@/app/Models/Comment';
import BaseApi from '../Base';
const asyncGetCommentByCourseId = async (courseId: any) => {
  try {
    const response = await BaseApi.get<CommentResponse>(
      `course/${courseId}/comment`
    );
    return response.data;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
};

const asyncCreateCommentByCourse = async (courseId: any, data: any) => {
  try {
    const response = await BaseApi.post<any>(
      `course/${courseId}/comment`,
      data
    );
    return response.data;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
};

const asyncCreateReplyByCourseAndComment = async (
  courseId: any,
  commentId: any,
  data: any
) => {
  try {
    const response = await BaseApi.post<any>(
      `course/${courseId}/comment/${commentId}/commentReply`,
      data
    );
    return response.data;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
};

export {
  asyncGetCommentByCourseId,
  asyncCreateCommentByCourse,
  asyncCreateReplyByCourseAndComment,
};
