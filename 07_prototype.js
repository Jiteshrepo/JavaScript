let empDetails = function(name,id){
    this.name=name;
    this.id=id;
}

this.getName=function(){
    return this.getName;
};

this.getId=function(){
    return this.getId;
};

let emp1 = empDetails('jitesh',46);
let emp2 = empDetails('tarun',67);
console.log(emp1.getName());
console.log(emp2.getId());