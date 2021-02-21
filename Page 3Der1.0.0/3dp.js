console.log('%c 您已使用「Page 3Der」!','background:#ffeba0;color:#905000')
console.log('%cPage 3Der是一款由貓虎皮開發的瀏覽器外掛。','background:#ffeba0;color:#905000')
//()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()
const P3dStyle = document.createElement('style');
P3dStyle.innerHTML = `
body {
	position:relative;
	width:100%;
	height:100%;
	transform-style:preserve-3d;
	-moz-transform-style:preserve-3d;
	-webkit-transform-style:preserve-3d;
	transform-origin:center center -50px;
	-moz-transform-origin:center center -50px;
	-webkit-transform-origin:center center -50px;
	animation:s 4s linear infinite;
	-moz-animation:s 4s linear infinite;
	-webkit-animation:s 4s linear infinite;
}
`;
document.body.appendChild(P3dStyle);
const P3dScript = document.createElement('script');
P3dScript.innerHTML = 
`
var oneN = 10;
	var spaceX = 0;
	var spaceY = 0;
	var spaceZ = 0;
	var Key = {
	  A: 37,
	  W: 38,
	  D: 39,
	  s: 40
	};
	
	const addStyle = document.createElement('style');
	document.head.appendChild(addStyle);
	setTimeout('run_space()',1);
	
	function _addEventListener(evt, element, fn) {
		  if (window.addEventListener) {
			element.addEventListener(evt, fn, false);
		  }
		  else {
				element.attachEvent('on'+evt, fn);
		 }
	}
	function handleKeyboardEvent(evt) {
	  if (!evt) {evt = window.event;} // for old IE compatible
	  var keycode = evt.keyCode || evt.which; // also for cross-browser compatible
		var info = document.getElementById("info");
		switch (keycode) {
			case Key.W:
				spaceX -= oneN;
				break;
			case Key.S:
				spaceX += oneN;
				break;
			case Key.D:
				spaceY += oneN;
				break;
			case Key.A:
				spaceY -= oneN;
				break;
		}
	}
	_addEventListener('keydown', document, handleKeyboardEvent);

	function run_space() {
	addStyle.innerHTML = 'body{transform:rotateX( ' + spaceX + 'deg) rotateY( ' + spaceY + 'deg) rotateZ( ' + spaceZ + 'deg);-moz-transform:rotateX( ' + spaceX + 'deg ) rotateY( ' + spaceY + 'deg) rotateZ( ' + spaceZ + 'deg);-webkit-transform:rotateX( ' + spaceX + 'deg ) rotateY( ' + spaceY + 'deg) rotateZ( ' + spaceZ + 'deg);}';
	setTimeout('run_space()',10);
	}
`;
document.body.appendChild(P3dScript);