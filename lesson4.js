// Первое задание

function makeNegative(num) {
    console.log( Math.abs(num) * -1);
};
makeNegative(10)

// Второе задание

    function play(player, computer){
        if (player === computer) {
        console.log ("Ничья!");
        } else if (
        (player === "камень" && computer === "ножницы") ||
        (player === "ножницы" && computer === "бумага") ||
        (player === "бумага" && computer === "камень")
        ) {
        console.log ("Вы победили!");
        } else {
        console.log( "Компьютер победил!");
        }
    }
play("бумага","ножницы")

// Третье задание

let arrayOne = [1,-10,16,12,-34]
let arraySum = 0
function sumArray(array){
    for(let i=0;i<array.length;i++){
        arraySum = arraySum + Math.abs(array[i])
        
}
console.log(arraySum)
}
sumArray(arrayOne)

// Четвертое задание
let valueMaxArray = []
function valueMax(step,maxValue){
    let maximum = maxValue*step
    for(let y=0;y<=maximum;y+=step){
        valueMaxArray.push(y)
        
    }
    console.log(valueMaxArray)
}

valueMax(3,10)

// Пятое задание
const trafficLights = ['green','yellow','red']
let resultArray = []
func .... {
    const colors = ["red", "yellow", "green"];
        let currentIndex = colors.indexOf(currentColor);
    
        if (currentIndex === -1) {
            return "Invalid color";
        }
    
        let result = "";
        for (let i = 0; i < iterations; i++) {....} 
    return result
    }