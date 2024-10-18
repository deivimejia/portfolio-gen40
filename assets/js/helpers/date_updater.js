function updatedateYear() {
	const currentYear = new Date().getFullYear();

	const copyrightElement = document.querySelector('.footer__copy');

	copyrightElement.textContent = `© ${currentYear},`;
}

export default updatedateYear;
