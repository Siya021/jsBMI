function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value / 100;

  
    if (weight === "" || height === "") {
      document.getElementById("answer").innerHTML = "Please enter the missing values";
    } else {
      let bmi = weight /Math.pow(height * height);
      document.getElementById("answer").innerHTML = "Answer is =" + bmi.toFixed(2);
    }}

function clearValue() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("answer").innerHTML = "";
}