{
	var timeOut = 500;
	var closeTimer = 0;
	var currentMenuItem = 0;

	document.onclick = menuClose;
}

function menuOpen(id) {

	menuClose();

	currentMenuItem = document.getElementById(id);
	currentMenuItem.style.visibility = 'visible';
}

function menuClose() {
	if (currentMenuItem) {
		currentMenuItem.style.visibility = 'hidden';
	}
}

function menuCloseOnTimer() {
	closeTimer = window.setTimeout(menuClose, timeOut);
}

function menuCancelClose() {
	if (closeTimer) {
		window.clearTimeout(closeTimer);
		closeTimer = null;
	}
}