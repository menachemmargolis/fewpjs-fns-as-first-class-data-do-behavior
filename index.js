/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function displayMessage(msg){
  document.getElementById("greeting").innerHTML = msg
}

function greet(timStr){
  let time = parseInt(timStr)

  if (time < 12 ){return "Good Morning"}
  else if (time > 17 ){return "Good Evening"}
  else {return "Good Afternoon"}
}
/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
