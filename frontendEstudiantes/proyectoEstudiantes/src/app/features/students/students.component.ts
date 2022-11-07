import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/core/models/student.model';

import { StudentService } from 'src/app/core/services/student/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];

  constructor(public estudianteService: StudentService) {}

  ngOnInit(): void {
    this.obtenerData();
  }

  obtenerData() {
    this.estudianteService.obtenerEstudiantes().subscribe({
      next: (res) => (this.students = res),
      error: (e) => console.log(e),
      complete: () => console.info('completa'),
    });
  }
}
