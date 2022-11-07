import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/core/models/student.model';
import { CourseService } from 'src/app/core/services/course/course.service';
import { StudentService } from 'src/app/core/services/student/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-studend-detail',
  templateUrl: './studend-detail.component.html',
  styleUrls: ['./studend-detail.component.scss'],
})
export class StudendDetailComponent implements OnInit {
  formValue!: FormGroup;
  students: any;
  id: any;
  studentModel: Student = new Student();
  courses: any;
  studentCourses: any;

  constructor(
    private aRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private studentService: StudentService,
    private courseService: CourseService
  ) {
    //this.id = this.aRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.fields();
    this.getData();
  }
  fields() {
    this.formValue = this.fb.group({
      name: [''],
      lastName: [''],
      grade: [' '],
      group: [''],
      email: [''],
      courses: [],
    });
    this.getData();
  }

  getData() {
    this.aRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.studentService.studentById(this.id).subscribe((response) => {
        this.students = response;
        //console.log(this.students);
        this.formValue.controls['name'].setValue(this.students.name);
        this.formValue.controls['lastName'].setValue(this.students.lastName);
        this.formValue.controls['grade'].setValue(this.students.grade);
        this.formValue.controls['group'].setValue(this.students.group);
        this.formValue.controls['email'].setValue(this.students.email);
        this.studentCourses = this.students.courses;
        console.log(this.studentCourses);
        //this.formValue.controls['courses'].setValue(this.students.courses);
        this.studentModel._id = this.students._id;
        this.courseService.getAllCourses().subscribe((response) => {
          this.courses = response;
        });
      });
    });
  }
  updateStudent() {
    this.studentModel.name = this.formValue.value.name;
    this.studentModel.lastName = this.formValue.value.lastName;
    this.studentModel.grade = this.formValue.value.grade;
    this.studentModel.group = this.formValue.value.group;
    let idnumber = this.formValue.value.courses.toString();
    this.studentModel.courses = this.studentCourses.concat(idnumber);

    this.studentService
      .updateStudent(this.studentModel._id, this.studentModel)
      .subscribe((res) => {
        Swal.fire({
          icon: 'success',
          title: 'Student Uploaded!',
        });
        setTimeout(() => {
          this.router.navigate(['']);
        }, 2000);
        console.log(res);
      });
  }
}
