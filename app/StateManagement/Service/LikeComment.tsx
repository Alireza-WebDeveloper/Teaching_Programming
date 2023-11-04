import BaseApi from '../Base';
const asyncSaveLikeComment = async (commentId: string) => {
  try {
    const response = await BaseApi.post(`comment/${commentId}/likeComment`);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
};
const asyncDeleteLikeComment = async (commentId: string) => {
  try {
    const response = await BaseApi.delete(`comment/${commentId}/likeComment`);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
};

export { asyncSaveLikeComment, asyncDeleteLikeComment };
