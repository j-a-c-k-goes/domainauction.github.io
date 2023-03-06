const text_area = document.querySelector("textarea");
const content_output = document.querySelector("#message_output");
text_area.oninput = () => {
	content_output.innerHTML = text_area.value;
}
text_area.onmouseout = () => {
	window.localStorage.setItem("typed_text", text_area.value);
}

window.onresize = () =>{
	// console.clear();
	console.log("width", window.innerWidth);
	console.log("height", window.innerHeight);

}
// window.location.assign();
// window.location.reload();
// window.location.replace();
console.log("title:", window.document.title);
console.log("hostname:", window.document.location.hostname);
console.log("domain:", window.document.domain);
console.log("window location:", window.location.href)
console.log("last modified:", window.document.lastModified);
console.log("cookie:", window.document.cookie);
console.log("design mode:", window.document.designMode);