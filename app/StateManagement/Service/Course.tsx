import { CourseResponse, CourseState } from '@/app/Models/Course';
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
const asyncGetCourseById = async (data: any) => {
  try {
    const response = await BaseApi.get(`/api/course/${data}`);
    return response;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
};

export { asyncGetCourseByLimit, asyncGetAllCourse, asyncGetCourseById };
