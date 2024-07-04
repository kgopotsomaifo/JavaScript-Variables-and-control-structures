// first prompt: initial metric
let temp1 = prompt(
  "In which metric is the temparature you are converting? \n C - Celcius \n F - Farenheit \n K - Kelvin "
);

// second prompt: number of temperature:
let numTemp = Number(prompt("please enter the number of your temparature: "));

// third prompt: converted metric
let temp2 = prompt(
  "To which metric would you like to convert the temparature? \n C - Celcius \n F - Farenheit \n K - Kelvin "
);

let convertTemp;

// desirable output: '217 ℃ is 0K' or °F
switch (temp2) {
  case "C":
    if (temp1 === "F") {
      convertTemp = (numTemp - 32 * (5 / 9)).toFixed(2);
      console.log(`${numTemp}°F is ${convertTemp}℃`);
    } else if (temp1 === "K") {
      convertTemp = (numTemp - 273.15).toFixed(2);
      console.log(`${numTemp}K is ${convertTemp}℃`);
    }
    break;

  case "F":
    if (temp1 === "C") {
      convertTemp = (numTemp * (9 / 5) + 32).toFixed(2);
      console.log(`${numTemp}℃ is ${convertTemp}°F`);
    } else if (temp1 === "K") {
      convertTemp = (numTemp * (9 / 5) - 459.67).toFixed(2);
      console.log(`${numTemp}K is ${convertTemp}°F`);
    }
    break;

  default: // case 'K'
    if (temp1 === "C") {
      convertTemp = (numTemp + 273.15).toFixed(2);
      console.log(`${numTemp}℃ is ${convertTemp}K`);
    } else if (temp1 === "F") {
      convertTemp = ((numTemp + 459.67) * (5 / 9)).toFixed(2);
      console.log(`${numTemp}°F is ${convertTemp}K`);
    }
}
