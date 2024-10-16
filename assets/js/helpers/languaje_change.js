// const check = document.querySelector('.check');
// check.addEventListener('change', language);

// function language() {
// 	let language = check.checked;
// 	console.log(check.checked);
// 	if (language == true) {
// 		location.href = '/myPortfolio/index-en.html';
// 	} else {
// 		location.href = '/myPortfolio/index.html';
// 	}
// }

// export default language;
const langToggle = document.querySelector('.check');
const currentLang = window.location.href.includes('index-en.html');
langToggle.checked = currentLang;

function language() {
	langToggle.addEventListener('change', () => {
		if (langToggle.checked) {
			window.location.href = 'index-en.html';
		} else {
			window.location.href = 'index.html';
		}
	});
}

export default language;
