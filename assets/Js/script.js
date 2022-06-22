// Typing 
let typed = new Typed(".typing", {
	strings: ["Frontend || JavaScript Developer."],
	typeSpeed: 170,
	backSpeed: 60,
	loop: true,
});
// End Typing



//Preloader
const loader = document.querySelector(".loader");
const mainContainer = document.querySelector(".main");

function init() {
	setTimeout(() => {

		loader.style.opacity = 0;
		loader.style.display = "none";

		mainContainer.style.display = "block";
		setTimeout(() => mainContainer.style.opacity = 1, 50);

	}, 4500);
}

init();
//End Preloader




//Theme Text Display
const themeBtn = document.querySelectorAll(".theme-btn");
const settingNote = document.querySelector("#settings-note");

for (var i = 0; themeBtn.length > i; i++) {
	themeBtn[i].addEventListener("click", () => {

		settingNote.style.display = "block";

		setTimeout(() => {
			settingNote.style.display = "none";
		}, 5000);

	});
};
//End Theme Text Display



//Theme Saved at Local Storage
let theme = localStorage.getItem("theme");

if (theme == null) {
	setTheme("light");
} else {
	setTheme(theme);
}

let themeBtns = document.getElementsByClassName("theme-btn");

for (var i = 0; themeBtns.length > i; i++) {
	themeBtns[i].addEventListener("click", function () {
		let mode = this.dataset.mode;
		console.log("Option clicked:", mode);
		setTheme(mode);
	});
}

function setTheme(mode) {
	if (mode == "light") {
		document.getElementById("theme-style").href = "assets/css/style.css";
	}

	if (mode == "blue") {
		document.getElementById("theme-style").href = "assets/css/blue.css";
	}

	if (mode == "green") {
		document.getElementById("theme-style").href = "assets/css/green.css";
	}

	localStorage.setItem("theme", mode);
}




// Back to top
const backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
	if (window.pageYOffset > 100) {

		backToTop.classList.add("active");

	} else {

		backToTop.classList.remove("active");
	}
});