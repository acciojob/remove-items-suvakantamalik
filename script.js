//your JS code here. If required.
let select = document.getElementById("colorSelect");
select.addEventListener("click", function(event) {
	select.remove(select.selectedIndex);
});