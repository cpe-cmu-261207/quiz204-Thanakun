const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const btn = document.querySelector("button")

// define more constants and variables here

btn_toggle.onclick = () => {
  const ans = 630610733 - length.value;
  author.style.display = "none";
  calculation.innerHTML = ans;
  btn_toggle.innerHTML = "Display author"
  // if(btn_toggle.innerHTML === "Display author"){
    
  // }
}


// more codes for Search and Reset buttons here

