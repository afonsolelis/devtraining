import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Angular',
      description:
        'Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
      tags: ['angular', 'angularjs', 'typescript'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findone(id: string) {
    return this.courses.find((course) => course.id === Number(id));
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
  }

  update(id: string, updateCourseDto: any) {
    const indexCourse = this.findIndex(
      (course: Course) => course.id === Number(id),
    );

    this.courses[indexCourse] = updateCourseDto;
  }

  remove(id: string) {
    const indexCourse = this.courses.findIndex(
      (course: Course) => course.id === Number(id),
    );
  }

  if (indexCourse >= 0) {
    this.courses.splice(indexCourse, deleteCount: 1);
  }
}
