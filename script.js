const move = (e) => {
    document.querySelector(' div.x p span').innerHTML = e.x;
    document.querySelector('div.y p span').innerHTML = e.y;
    document.querySelector('div.client-x p span').innerHTML = e.clientX;
    document.querySelector('div.client-y p span').innerHTML = e.clientY;
    document.querySelector('div.screen-x p span').innerHTML = e.screenX;
    document.querySelector('div.screen-y p span').innerHTML = e.screenY;
    document.querySelector('div.page-x p span').innerHTML = e.pageX;
    document.querySelector('div.page-y p span').innerHTML = e.pageY;

}
console.log(MouseEvent)

window.addEventListener('mousemove', move)




const reset = (r) => {
    document.querySelector(' div.x p span').innerHTML = '0';
    document.querySelector('div.y p span').innerHTML = '0';
    document.querySelector('div.client-x p span').innerHTML = '0';
    document.querySelector('div.client-y p span').innerHTML = '0';
    document.querySelector('div.screen-x p span').innerHTML = '0';
    document.querySelector('div.screen-y p span').innerHTML = '0';
    document.querySelector('div.page-x p span').innerHTML = '0';
    document.querySelector('div.page-y p span').innerHTML = '0';
}

window.addEventListener('click', reset)