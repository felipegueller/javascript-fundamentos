const modal = document.getElementById("myModal");
const btn = document.getElementById("open-modal");
const span = document.getElementsByClassName("close")[0];
const closeBtn = document.getElementById("modal-button");

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
