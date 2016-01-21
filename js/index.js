var settings = {
	cell_size: 120,
	variance: 0.90,
	x_colors: "BuPu",
	y_colors: "match_x",
	palette: Trianglify.colorbrewer,
	color_space: "lab",
	color_function: false,
	stroke_width: 0.6,
	width: 4096,
	height: 120,
	seed: String(Math.floor(Math.random() * 1000))
}

/*$(document).ready(function () {
	$("#header").append(Trianglify(settings).svg({includeNamespace: true}));
});*/
