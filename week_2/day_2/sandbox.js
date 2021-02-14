const greetings = (name, cb)=> {
console.log("hello", name)
cb();
}


const followUpQuestions = ()=>{
    console.log("How are you doing?")
}

const name ="Grace"

greetings("Grace", followUpQuestions)