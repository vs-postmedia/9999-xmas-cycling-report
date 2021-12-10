// CSS
import normalize from './css/normalize.css';
import postmedia from './css/postmedia.css';
import colours from './css/colors.css';
import fonts from './css/fonts.css';
import css from './css/main.css';

const iframes = [
	{
		id: "clark",
		hed: "Clark Dr. and E. 1st Ave",
		dek: "This intersection – which has no bike infrastructure of any kind – has the highest collision rate of any in the city from 2015-2020.",
		url: "https://www.google.com/maps/embed?pb=!4v1638919884201!6m8!1m7!1sRzc91uLUaC4sZ9oL5cPKDA!2m2!1d49.26956530084876!2d-123.0775706005678!3f311.8931709175703!4f0.9551184579334802!5f0.4000000000000002"
	},
	{
		id: "hornby",
		hed: "Dunsmuir St. and Hornby St.",
		dek: "A protected land on Hornby ends and Dunsmuir, which could contribute to the high collision rate at an intersection with heavy bike and vehicle traffic.",
		url: "https://www.google.com/maps/embed?pb=!4v1639157410979!6m8!1m7!1sc1amLp0Bfnee1zocBdMf3g!2m2!1d49.28484675111414!2d-123.1183912381874!3f124.73329999999999!4f0!5f0.7820865974627469"
	},
	{
		id: "sw-marine",
		hed: "Granville St. and SW Marine Dr.",
		dek: "A protected land at Granville and SW Marine ends at a shared street – and has the second highest crash rate in the city.",
		url: "https://www.google.com/maps/embed?pb=!4v1639157508609!6m8!1m7!1s4tRihGaI0qA_Q82NUCr3HQ!2m2!1d49.20512566546893!2d-123.140902424991!3f42.91124585226484!4f-0.35922587483902646!5f0.7820865974627469"
	}
];

// JS
const init = async () => {
	const id = getURLParameter('id');
	const data= iframes.filter(d => d.id === id);

	const h1 = document.getElementById('header');
	const subhead = document.getElementById('subhead');
	const iframe = document.getElementById('iframe');

	h1.innerHTML = data[0].hed
	subhead.innerHTML = data[0].dek
	iframe.src = data[0].url;
};

init();


function getURLParameter(name) {
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}
