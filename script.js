const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here

btn_toggle.onclick = () => {
  const ans = 630610733 - length.value;
  author.innerHTML = ans;

}

// more codes for Search and Reset buttons here
