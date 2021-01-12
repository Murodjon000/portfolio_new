var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".modal-close-btn");
var overlay = document.querySelector(".overlay")

function toggleModal() {
  modal.classList.toggle("show-modal");
  overlay.classList.toggle('is-visible')
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);







// document.getElementById('btn-modal').addEventListener('click', function() {
//     document.getElementById('overlay').classList.add('is-visible');
//     document.getElementById('modal').classList.add('is-visible');
//   });

//   document.getElementById('close-btn').addEventListener('click', function() {
//     document.getElementById('overlay').classList.remove('is-visible');
//     document.getElementById('modal').classList.remove('is-visible');
//   });
//   document.getElementById('overlay').addEventListener('click', function() {
//     document.getElementById('overlay').classList.remove('is-visible');
//     document.getElementById('modal').classList.remove('is-visible');
//   });



  // var modal = document.getElementById('popup-modal');
// var btn = document.getElementById("open-popup-modal");
// var span = document.getElementsByClassName("modal-close")[0];
// btn.onclick = function() {
// modal.style.display = "block";
// }
// span.onclick = function() {
// modal.style.display = "none";
// }
// window.onload = function() {
// setTimeout(function() {
// modal.style.display = 'block';
// }, 3000);
// }
// window.onclick = function(event) {
// if (event.target == modal) {
// modal.style.display = "none";
// }
// }

