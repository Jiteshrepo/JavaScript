class Employee{
    setDeteails(name,id){
        this.name=name;
        this.id=id;
    }
}

let emp1 =new Employee();
emp1.setDeteails('jitesh',78);
console.log(emp1.name);
console.log(emp1.id);