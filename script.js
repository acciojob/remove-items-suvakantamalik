//your JS code here. If required.
let btn = document.getElementById("btn");
btn.addEventListener("click", function(event) {
	const selElement = document.getElementById("colorSelect");
	const selIdx = selElement.selectedIndex;

	if(selIdx !== -1){
		selElement.remove(selIdx);
	}
}); 