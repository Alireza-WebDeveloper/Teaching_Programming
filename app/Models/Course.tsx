export interface CourseState {
  _id: string;
  title: string;
  name: string;
  description: string;
  image: string;
  price: Number;
  categories: string[];
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
