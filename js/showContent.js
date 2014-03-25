{
	function showContent(id) {
		if (document.getElementById(id)) {
			oldElement = element;
			element = document.getElementById(id);
			if (oldElement != element) {
				element.style.display = "block";
				oldElement.style.display = "none";
			}
		}
	}

	var element;
	var oldElement;
	
}