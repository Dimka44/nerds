var link = document.querySelector('.link');
var modal = document.querySelector(".modal");
var closeModal = modal.querySelector('.close');

link.addEventListener("click", function(e) {
	e.preventDefault();
	modal.classList.toggle("open");
});

closeModal.addEventListener('click', function(){
	modal.classList.remove('open');
});