var insert = (num) => {
  result.display.value += num;
}
var fraction = () => {
  result.display.value += ".";
}
var remove = () => {
  result.display.value = "";
}
//operators
var sign = () => {
  result.display.value *= -1;
}
var percent = () => {
  result.display.value *= .01;
}
var divide = () => {
  result.display.value += "/";
}
var multiply = () => {
  result.display.value += "*";
}
var subtract = () => {
  result.display.value += "-";
}
var add = () => {
  result.display.value += "+";
}
//return
var calculate = () => {
  result.display.value = eval(result.display.value);
}
