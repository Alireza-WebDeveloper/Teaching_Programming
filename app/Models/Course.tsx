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

export interface CourseChapter {
  _id: string;
  name: string;
  totalVideoDuration: number;
  sections: {
    _id: string;
    name: string;
    video: { url: string; duration: number; title: string };
  }[];
}

export interface CourseDetailState extends CourseState {
  chapters: CourseChapter[];
}
export interface CourseDetailResponse {
  status: string;
  data: {
    course: CourseDetailState;
  };
}

export interface CourseResponse {
  status: string;
  data: {
    course: CourseState[];
  };
}
