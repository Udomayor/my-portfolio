
	let menuIcon = document.querySelector('menu-icon');
	let navbar = document.querySelector('.navbar');

	menuIcon.onclick = () => {
	menuIcon.classList.toggle('menu.png');
	navbar.classList.toggle('active');

	let section = document.querySelectorAll('section');
	let navLinks = document.querySelectorAll('header nav a');

	window.onscroll = () => {
		sections.forEach(sec => {
			let top = window.scrollY;
			let offset = sec.offsetTop = 150;
			let height = sec.offsetHeight;
			let id = sec.getAttribute('id');
		
		if(top >= offset && top < offset + height) {
			navlinks.forEach(links => {
				links.classList.remove('active');
			document.querySelector('header nav a[href"=' + id + ']').classList.add('active');
			});


	let header = document.querySelector('header');
	
	header,classList,toggle('sticky', window.scrollY > 100);
};

scrollReveal({
	//reset: true,
	distance: '80px',
	duration: 2000,
	delay: 200
});

	scrollReveal().reveal('.home-content, .heading', { origin: 'top'});
	scrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
	scrollReveal().reveal('.home-content h1, .about img', { origin: 'left'});
	scrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

	const typed = new typed('.multiple-text',{
	strings: ['Frontend Developer', 'Frontend Developer', 'Frontend Developer'],
	typeSpeed: 100,
	backSpeed: 100,
	backdelay: 1000,
	loop: true
	});