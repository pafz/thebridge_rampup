//Crea la clase Persona, con las propiedades nombre, edad y género, y el método obtDetalles(), que muestre por consola las propiedades de la persona.

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  obtDetails() {
    console.log(
      `Hello, I am ${this.name}. I am ${this.age} old and my gender is ${this.gender}`
    );
  }
}
let personAround = new Person('Peter', 22, 'M');
personAround.obtDetails();

//Crea la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por consola el resultado.

class Student extends Person {
  constructor(name, age, gender, course, group) {
    super(name, age, gender);
    this.course = course;
    this.group = group;
  }
  register() {
    console.log(
      `The studen ${this.name} whith ${this.age} old which is a ${this.gender} is being registred in ${this.course} group: ${this.group}`
    );
  }
}

let studentAround = new Student('Mery', 22, 'F', 'Full Stack', '22.05');
studentAround.register();

//Crea la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por consola el resultado.
class Teacher extends Person {
  constructor(name, age, gender, subject, level) {
    super(name, age, gender);
    this.subject = subject;
    this.level = level;
  }
  asign() {
    console.log(
      `${this.name} is the teacher of the subject ${this.subject} in a level ${this.level}. It's age is ${this.age} old and it's gender ${this.gender}.`
    );
  }
}

let teacherAorund = new Teacher('Sofi', 26, 'F', 'Front-end', 'expert');
teacherAorund.asign();
