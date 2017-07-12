# jQuery Equalize Height of elements

Version 0.1.2

## Summary

This is a simple jQuery Plugin that can easily allow user to equalize height the elements.

## Author

Louis Ho

## Installation

To include the plugin in your code:

	<script src="jquery.equalHeight.js"></script>
	
or

	<script src="jquery.equalHeight.min.js"></script>

Alternatively, install with [bower](https://github.com/bower/bower): 
	
	bower install jquery.equalHeight

## Requirements/Browsers

THIS PLUGIN REQUIRES AJAX, CHROME WOULD NOT GIVE YOU ANY PREVIEWS. 
YOU NEED TO UPLOAD IT TO THE SERVER SO THAT IT RUNS PERFECTLY.

Works in IE9+, Chrome 14+, Safari 4+, Firefox 3.0+, Opera 10+.

Tested with jQuery 1.12.x.

## Code Example

**index.html**:

	<html>
		<head>
			<script src="jquery.1.12.4.min.js"></script>
			<script src="jquery.equalHeight.min.js"></script>

			<script>
				$(document).ready(function () {
					$("#container").equalHeight();
				});
			</script>
		</head>
		<body>
			<div id="container">
				<div data-setHeight="true">
					<div data-getHeight="true">This sentence will be equalized. This sentence will be equalized.</div>
				</div>
				<div data-setHeight="true">
					<div data-getHeight="true">This sentence will be equalized.</div>
				</div>
			</div>
		</body>
	</html>


See `example.html` in example folder.

## Functions

NOTES: This plugin requires jQuery.


There are 1 functions and 2 attributes in this plugin:

	function: .equalHeight();	

is used to apply the equalization to your elements inside the container.

	attribute: getHeight="true"

is used to put into the element(s) you want to determine the highest height.

	attribute: setHeight="true"		
	
is used to put into the element(s) you want to apply the highest height.


## License

This plugin is under the MIT license.
