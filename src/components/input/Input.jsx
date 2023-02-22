import "./Input.scss";

const überschriftTodo = "My Todos";

const textTodoArray = ["But Grocery", "Send Email", "Finish Assignment", "Write Blog", "Bake Cake  "];

const anzahlTodoArray = [];
for (let i = 0; i < textTodoArray.length; i++) {
       anzahlTodoArray.push(i);
}
console.log(anzahlTodoArray);


// Blaupause
class Obj {
    constructor(überschrift, id, text){
        this.überschrift = überschrift;
        this.id = id;
        this.text = text;
    }
    descriptions() {console.log(this.überschrift,this.id,this.text);}
}

// Blaupause befüllen 
export const dataObj = new Obj(überschriftTodo, anzahlTodoArray, textTodoArray);
console.log(dataObj); // { "0" [5] [5]}

// Blaupause befüllen und Array output
export const dataArrayObj = [];
for (let i = 0; i < anzahlTodoArray.length; i++){
    const obj_i_runden = new Obj(überschriftTodo, anzahlTodoArray[i], textTodoArray[i]);
    console.log(obj_i_runden)
    dataArrayObj.push(obj_i_runden);
}

console.log(dataArrayObj); // [{}{}{}{}{}]

const Input = () => {


    return (

        <form className="form_Input" >
            <label htmlFor="input">text</label>
            <input type="text" name="input" id="input" />
            <input id="button" type="button" value="senden" />
        </form>



    );
}


export default {Input, dataObj, dataArrayObj};      // da mehrere Sachen zum exportieren, geht das nur mit einem Objekt, deshalb {}

