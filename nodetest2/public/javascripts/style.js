// Alex Norton
// a^N 
// http://alexnortn.com

/*


Seperation of styling for complex page animations


*/


// Set up page-load animation

var $info = $("#info"),
	$landingArrow = $("#landingArrow"),
	$navBurger = $('#navBurger'),
	$pagination = $('pagination');


var loadingSequence = [
	{ 
		e: $info,
		p: { opacity: [0, 1] },
		o: { 
			duration: 250,
			easing: "easeInSine",
			sequenceQueue: false
		}
	},
	{
		e: $landingArrow,
		p: {
			opacity: [0, 1],
			bottom: [-50, 75]
		},
		o: {
			duration: 250,
			easing: "easeInSine",
			sequenceQueue: false
		}
	},
	{
		e: $navBurger,
		p: {
			right: [-125, 50],
			opacity: [0, 1] 
		},
		o: {
			duration: 250,
			easing: "easeInSine",
			sequenceQueue: false
		}
	},
	{
		e: $pagination,
		p: {
			right: [-75, 57],
			opacity: [0, 1] 
		}, 
		o: {
			duration: 250,
			easing: "easeInSine",
			sequenceQueue: false
		}
	}
]