// Basic command-line example
// Usage: node save-as-png.js filename.png
var fs = require('fs');
var Trianglify = require('trianglify');

if (process.argv.length < 3) {
  console.log('Please specify a filename');
  console.log('Usage: node save-as-png.js filename.png');
  return;
}

// Generate a pattern and then grab the PNG data uri
var pngURI = Trianglify({
  	cell_size: 120,
	variance: 0.90,
	x_colors: "BuPu",
	y_colors: "match_x",
	palette: Trianglify.colorbrewer,
	color_space: "lab",
	color_function: false,
	stroke_width: 0.6,
	width: 612,
	height: 792,
	seed: "Liam Coleman-Aulenbach"
}).png();

// Strip off the uri part of the data uri, leaving the data
var data = pngURI.substr(pngURI.indexOf('base64') + 7);

// Decode the base64 encoded blob into a buffer
var buffer = new Buffer(data, 'base64');

// Save the buffer to a file
fs.writeFileSync(process.argv[2], buffer);