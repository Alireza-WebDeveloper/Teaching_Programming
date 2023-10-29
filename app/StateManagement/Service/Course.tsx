import {
  CourseDetailResponse,
  CourseResponse,
  CourseState,
} from '@/app/Models/Course';
import BaseApi from '../Base';

const asyncGetCourseByLimit = async (limit = 5) => {
  try {
    const response = await BaseApi.get<CourseResponse>(
      `/course?limit=${limit}`
    );
    return response.data;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
};

const asyncGetAllCourse = async () => {
  try {
    const response = await BaseApi.get<CourseState[]>('/api/course');
    return response;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
};
const asyncGetCourseById = async (data: { id: any }) => {
  try {
    const response = await BaseApi.get<CourseDetailResponse>(
      `/course/${data.id}`
    );
    return response.data;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
};

export { asyncGetCourseByLimit, asyncGetAllCourse, asyncGetCourseById };
