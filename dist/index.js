"use strict";
const Cat = {
    name: "cat",
    height: 23,
    t_animal: "partner",
};
function getAnimal(a) {
    if (a.t_animal == "Pet") {
        console.log("*********** Pet ****************");
        return `${a.name} : ${a.height}in : ${a.getDate()}`;
    }
    console.log("*********** Wild ****************");
    return `${a.name} : ${a.height}in : ${a.getDate()}`;
}
console.log(getAnimal({
    name: "Dog",
    height: 23,
    t_animal: "Pet",
    getDate() {
        return new Date();
    },
}));
const newAnimal = {
    name: "Lion",
    height: 765,
    t_animal: "Wild",
    getDate() {
        return new Date();
    },
};
console.log(getAnimal(newAnimal));
class Box {
    length;
    breadth;
    height;
    constructor(length, breadth, height) {
        this.length = length;
        this.breadth = breadth;
        this.height = height;
    }
    info = () => {
        return `
         ${this.height} =>  ${this.length}  => ${this.breadth}
        `;
    };
}
const box = new Box(23, 34, 34);

console.log(box.info());
