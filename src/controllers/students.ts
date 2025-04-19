import { getStudentsFromDB, Student } from '../db/students';

export interface StudentResult {
  matricula: string;
  nombre: string;
  calificacion: number;
  mensaje: string;
}

class StudentController {
  getFinalResults(): StudentResult[] {
    const students: Student[] = getStudentsFromDB();

    return students.map(student => {
      let mensaje = '';

      if (student.calificacion > 90) {
        mensaje = student.adeudo 
          ? 'tenias honores, pero tienes un adeudo' 
          : 'te graduaste con honores';
      } else if (student.calificacion >= 70 && student.calificacion <= 90) {
        mensaje = 'pasaste muy apenas';
      } else { 
        mensaje = student.adeudo 
          ? 'expulsado' 
          : 'como no tienes adeudo, tienes derecho a un examen de recuperacion';
      }

      return {
        matricula: student.matricula,
        nombre: student.nombre, 
        calificacion: student.calificacion,
        mensaje
      };
    });
  }
}

export default StudentController;
