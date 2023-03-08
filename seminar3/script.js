alert("привет мир");
let user_name = prompt("введите своё имя");
function welcome(){
    alert(`здравствуй ${user_name}`);
}
welcome()
let num = Number(prompt(`${user_name} введи число`));
let sum = 158 + num;

function ask_again(){
    let result = Number(prompt(`${user_name} сколько будет 158 + ${num} ?`, "введи число"));
    confirm('вы уверены') ? alert("проверим?"): ask_again();
    return result;
}
function check(){
    return sum == ask_again();
}

switch(check()) {
    case true:
        alert(`точно, 158 + ${num} = ${sum}`)
        break
    case false:
        alert(`неверно, 158 + ${num} = ${sum}`)
        break
}