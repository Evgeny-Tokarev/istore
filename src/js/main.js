import Swiper from "swiper/bundle";
import "normalize.css";
import "swiper/swiper-bundle.css";
import "../css/style.scss";
var swiper = new Swiper(".swiper-container", {
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
