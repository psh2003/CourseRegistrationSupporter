let pageX, pageY;
let css = '.circle {position: absolute;top: 0;left: 0;width: 50px;height: 50px; border-radius: 50%;background-color: #9bf50b;transform: translate(-50%, -50%);}',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
head.appendChild(style);
style.type = 'text/css';
if (style.styleSheet){
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}
const circle = document.querySelector(".circle");
let body = document.querySelector("body");

body.addEventListener("mousemove", (e) => { // mousemove이벤트를 이용해 움

    // 마우스의 좌표는 clientX와 clientY를 이용해 알수 있다. -> 브라우저 window의 좌표값 위치를 전달한다.

    // pageX, pageY와는 다름.

    const mouseX = e.clientX;

    const mouseY = e.clientY;

    circle.style.left = mouseX + 'px';

    circle.style.top = mouseY + 'px';

});

body.addEventListener('click', (e) => {
    document.removeEventListener('mousemove', body);
    document.removeEventListener('click', body);
    pageX = e.pageX;
    pageY = e.pageY;
    alert(pageX);
});