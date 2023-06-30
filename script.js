const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === '') {
    alert("You must have to write something!");
  }
  else {
    let node = document.createElement("li");
    node.innerHTML = inputBox.value;
    listContainer.appendChild(node);

    let cross = document.createElement("span");
    cross.innerHTML = "\u00d7"
    node.appendChild(cross);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function (i) {
  if (i.target.tagName === "LI") {
    i.target.classList.toggle("checked");
    saveData();

  }
  else if (i.target.tagName === "SPAN") {
    i.target.parentElement.remove();
    saveData();
  }
});
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();