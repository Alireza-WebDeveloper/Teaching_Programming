export interface CourseState {
  _id: string;
  name: string;
  description: string;
  image: string;
  price: Number;
  instructor: string;
  createAt: Date;
  startDate: Date;
}

export interface CourseResponse {
  status: string;
  data: {
    course: CourseState[];
  };
}
