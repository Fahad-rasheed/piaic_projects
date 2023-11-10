
import   inquirer from "inquirer" 


class Student {
    name:string;
    constructor(n:string){
        this.name=n;
    }
}
class Person{
    students:Student[]=[];

    addStudent(obj:Student) {
        this.students.push(obj);
    }
}

const persons = new Person()


const programmerStart = async (persons:Person) => {

    do{console.log(`Welcome guest`)
    const ans = await inquirer.prompt({

        type: 'list',
        message:"ap kis sy bat krna pasnad kryngy..",
        name:"select",
        choices:["self","student"],
    })
    
    if(ans.select == "self"){
        console.log("Hello my Self mn khudsy bat kr raha hun")
        console.log("meri tbyat theek hy")

    }

       if(ans.select == "student" ){
            const ans = await inquirer.prompt({
                type : "input",
                message :"apko kis student sy bat krni hy",
                name : "student",

            });
        
            const student = persons.students.find((val => val.name ==ans.student))
        
            if(!student){
                const name  = new Student(ans.student)
                    persons.addStudent(name)
            
            console.log(`hello i am ${name.name}, or me thek hun`);
            console.log(persons.students);

        }
        if (student){
            console.log(`Hello i am ${student.name}, or me thek hun.........`);
            console.log(persons.students);
        }

        }}while(true)
    };

programmerStart(persons)




