var settings = {
	cell_size: 120,
	variance: 0.90,
	x_colors: "BuPu",
	y_colors: "match_x",
	palette: Trianglify.colorbrewer,
	color_space: "lab",
	color_function: false,
	stroke_width: 1.51,
	width: 612,
	height: 792,
	seed: "Liam Coleman-Aulenbach"
}

$(document).ready(function () {
	$("#resume").append(Trianglify(settings).svg({includeNamespace: true}));
});
