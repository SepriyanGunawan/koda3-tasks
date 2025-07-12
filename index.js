/**
 * Task Irul
 */

const irul = require("./tasks/irul");

function tasksIrul(){
    // Program: Sum Number
    // Success
    const resultSum = irul.sumNumber(10,50);
    console.log(resultSum);

    // Failed
    try{
        const result = irul.sumNumber("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
    // Program: Multiply Number
    // Success
    const resultMultiply = irul.multiplyNumbers(10,50);
    console.log(resultMultiply);

    // Failed
    try{
        const result = irul.multiplyNumbers("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
    // Program: Convert Celcius to Fahrenheit
    // Success
    const temperatureResult = irul.celciusToFahrenheit(10);
    console.log(`the temperature ${temperatureResult.celcius}°C is ${temperatureResult.fahrenheit}°F`);

    // Failed
    try{
        const result = irul.celciusToFahrenheit("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
}
// tasksIrul();

/**
 * Task "Person Name"
 */
const sepriyan = require("./tasks/sepriyan");
function taskSepriyan(){
    try {
        sepriyan.triangle(3);
    } catch (error) {
        console.log(error);
    }
    // soal nomor 2
    try {
        const arr =[1,2,3,4,5];
        sepriyan.perkalianarry(arr);
    } catch (error) {
        console.log(error.message);
    }
}
taskSepriyan();
// import your tasks here
