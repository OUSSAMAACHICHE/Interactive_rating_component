// dom elements 
const addBtn = document.querySelector('.submit'),
	  bullets = document.querySelectorAll('.bullets li'),
	  selectedMsg = document.querySelector('.selected'),
	  ratingCard = document.querySelector('.rating_container'),
	  thankYouCard = document.querySelector('.thank_you');




// click addBtn 
addBtn.onclick = thankYou;

// click bullets
bullets.forEach((e) => {

	e.addEventListener('click', (el) => {
		// trigger function delete classes
		deleteActiveClass();

		let clickedBullet = el.target;

		let indexBullet = clickedBullet.getAttribute('data-index');
		// trigger showThankYouCard function
		showThankYouCard(indexBullet);
		// loop through indxe bullet
		for(let i = 0; i < indexBullet; i++) {

			bullets[i].classList.add('active');

		}
	});

});

// delete all active classes
function deleteActiveClass() {
	// loop through bullets
	bullets.forEach((bullet) => {
		bullet.classList.remove('active');
	});
}

function thankYou() {
	// add hide class to rating card
	ratingCard.classList.add('hide');
	// add active class to thankYOu card
	thankYouCard.classList.add('active');

}

function showThankYouCard(clickedBullet) {
	// count of the bullets
	const countOfBullets = bullets.length;
	// check if clickedBullet selected
	if(clickedBullet) {

		selectedMsg.innerHTML = `You selected ${clickedBullet} out of ${countOfBullets}`
	} else {
		clickedBullet = '0';
		selectedMsg.innerHTML = `You selected ${clickedBullet} out of ${countOfBullets}`
	}


}

showThankYouCard();