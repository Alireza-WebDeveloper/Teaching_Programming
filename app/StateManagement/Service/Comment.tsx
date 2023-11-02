import { CommentResponse } from '@/app/Models/Comment';
import BaseApi from '../Base';

/**
 *
 * @param courseId = 526358896963
 * @returns
 */
const asyncGetCommentByCourseId = async (courseId: string) => {
  try {
    const response = await BaseApi.get<CommentResponse>(
      `course/${courseId}/comment`
    );
    return response.data;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
};

/**
 *
 * @param courseId = 59695252
 * @param data = {text:'good'}
 * @returns
 */
const asyncCreateCommentByCourse = async (
  courseId: string,
  data: { text: string }
) => {
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

/**
 *
 * @param courseId = 6863625
 * @param commentId = 695223
 * @param data = {text:'good'}
 * @returns
 */
const asyncCreateReplyByCourseAndComment = async (
  courseId: string,
  commentId: string,
  data: { text: string }
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
