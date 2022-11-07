import { Course } from './course.model';

export class Student {
  _id!: string;
  name!: string;
  lastName!: string;
  grade!: string;
  group!: number;
  email!: string;
  status!: boolean;
  geolocation!: string;
  courses: any;
}
