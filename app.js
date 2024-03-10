let toggle = document.querySelector("#header .toggle-button"),
	collapse = document.querySelectorAll("#header .collapse");
toggle.addEventListener("click", function () {
	collapse.forEach((e) => e.classList.toggle("collapse-toggle"));
}),
	new Masonry("#posts .grid", { itemSelector: ".grid-item", gutter: 20 }),
	new Swiper(".swiper-container", {
		direction: "horizontal",
		loop: !0,
		slidesPerView: 5,
		autoplay: { delay: 3e3 },
		breakpoints: {
			"@0": { slidesPerView: 2 },
			"@1.00": { slidesPerView: 3 },
			"@1.25": { slidesPerView: 4 },
			"@1.50": { slidesPerView: 5 },
		},
	}),
	(window.onscroll = function () {
		myFunction();
	});
let navbar = document.getElementById("header"),
	sticky = navbar.offsetTop;
function myFunction() {
	window.pageYOffset >= sticky
		? navbar.classList.add("sticky")
		: navbar.classList.remove("sticky");
}
