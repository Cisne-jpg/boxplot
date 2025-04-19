export interface Student {
    matricula: string;
    nombre: string;
    calificacion: number;
    adeudo: boolean;
  }
  
  export function getStudentsFromDB(): Student[] {
   
    return [
      { matricula: 'A001', nombre: 'Juan Cruz',    calificacion: 95, adeudo: false },
      { matricula: 'A002', nombre: 'Ana Lopez',     calificacion: 92, adeudo: true },
      { matricula: 'A003', nombre: 'Luis Zempoalteca',    calificacion: 85, adeudo: false },
      { matricula: 'A004', nombre: 'María Piña',   calificacion: 75, adeudo: true },
      { matricula: 'A005', nombre: 'Carlos Beltrán',  calificacion: 68, adeudo: false },
      { matricula: 'A006', nombre: 'Sofía Chacón',   calificacion: 55, adeudo: true },
      { matricula: 'A007', nombre: 'Diego Osuna',   calificacion: 70, adeudo: false },
      { matricula: 'A008', nombre: 'Laura Ramirez',   calificacion: 88, adeudo: false },
      { matricula: 'A009', nombre: 'Pedro Sanchez',   calificacion: 60, adeudo: false },
      { matricula: 'A010', nombre: 'Marta Alvarado',   calificacion: 93, adeudo: false }
    ];
  }
  