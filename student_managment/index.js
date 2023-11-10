"use strict";
class School {
    addStudent(stdObj) {
        this.students.push(stdObj);
    }
    addTeacher(techObj) {
        this.teachers.push(techObj);
    }
    constructor(name) {
        this.students = [];
        this.teachers = [];
        this.name = name;
    }
}
class Student {
    constructor(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}
let school1 = new School("Kps");
let school2 = new School("The Smart School");
class Teacher extends Student {
}
let s1 = new Student("Fawad", 30, school1.name);
let s2 = new Student("Ali", 33, school2.name);
let s3 = new Student("salman", 24, school1.name);
let t1 = new Teacher("adnan", 47, school1.name);
let t2 = new Teacher(" Aslam", 67, school2.name);
let t3 = new Teacher("Zia Khan", 60, school1.name);
// add Students
school1.addStudent(s1);
school2.addStudent(s2);
school2.addStudent(s3);
// add Teacher
school1.addTeacher(t1);
school2.addTeacher(t2);
school2.addTeacher(t3);
// console.log(t1)
// console.log(t2)
// console.log(t3)
console.log(school1);
console.log(school2);
