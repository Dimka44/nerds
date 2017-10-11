var link = document.querySelector('.link');
var modal = document.querySelector(".modal");
var name = modal.querySelector("[name=nam]")
var closeModal = modal.querySelector('.close');

link.addEventListener("click", function(e) {
	e.preventDefault();
	modal.classList.toggle("open");
	nam.focus();
});

closeModal.addEventListener('click', function(){
	modal.classList.remove('open');
});