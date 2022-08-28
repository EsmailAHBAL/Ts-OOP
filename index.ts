type Genre = "Pet" | "Wlid";
interface IAnimal {
    name: string;
    height: number;
    t_animal ? : Genre;
    getDate(): Date;
}


const Cat = {
    name: "cat",
    height: 23,
    t_animal: "partner",
}


function getAnimal(a: IAnimal): string {


    if (a.t_animal == "Pet") {
        console.log("*********** Pet ****************");

        return `${a.name} : ${a.height}in : ${a.getDate()}`
    }

    console.log("*********** Wild ****************");

    return `${a.name} : ${a.height}in : ${a.getDate()}`;
}

console.log(getAnimal({
    name: "Dog",
    height: 23,
    t_animal: "Pet",
    getDate() {
        return new Date()
    },
}));

const newAnimal = {
    name: "Lion",
    height: 765,
    t_animal: "Wild",
    getDate() {
        return new Date()
    },
}

console.log(getAnimal(newAnimal as IAnimal));

class Box {
    constructor(
        public length: number,
        public breadth: number,
        public height: number
    ) {
       
    }

     info = () :string=>{
        return `
         ${this.height} =>  ${this.length}  => ${this.breadth}
        `
    }
}

const box = new Box(23,34,34);
const bbox = new Box(23,34,34);
console.log(box.info());

const sortFu =<T>(arr:Array <T> ) => {
     return arr.slice(0,2);
}

const x = sortFu([0,5,2,34])
const y = sortFu(['one',"two","three","four"])
const xy = sortFu([1,"two",3,"four"])


console.log(x);
console.log(y);
console.log(xy);

function getLastCas<T>(items :T[]):T[]{
    return items.slice(items.length-1,items.length);
}

console.log("****************");

const  xx = getLastCas([0,5,2,34],)
const yy = getLastCas(['one',"two","three","four"]);
console.log(xx);
console.log(yy);



