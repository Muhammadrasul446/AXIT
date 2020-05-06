location.href = "index.html#top";

function changeContent(arg) {
	let firstTab = document.getElementsByClassName('tab_content')[0];
	let secondTab = document.getElementsByClassName('tab_content')[1];
	let thirdTab = document.getElementsByClassName('tab_content')[2];

	let active = arg.toString();

	if (active == "0") {
		firstTab.classList.add('show');
	} else {
		firstTab.classList.remove('show');
	}
	if (active == "1") {
		secondTab.classList.add('show');
	} else {
		secondTab.classList.remove('show');
	}
	if (active == "2") {
		thirdTab.classList.add('show');
	} else {
		thirdTab.classList.remove('show');
	}
}
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const blockID = anchor.getAttribute('href').substr(1)

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}
