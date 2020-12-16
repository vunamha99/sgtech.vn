let hiddenIconTop = document.getElementsByClassName('hidden-icon-top');
let sideBar = document.getElementsByClassName('side-bar');
let btnClose = document.getElementsByClassName('btn-close');
let overLay = document.getElementsByClassName('overlay-menu');

hiddenIconTop[0].onclick = function(){
    sideBar[0].style.marginLeft = 0 + 'px';
    overLay[0].style.display = "block";
}
btnClose[0].onclick = function(){
    sideBar[0].style.marginLeft = -500 + 'px';
    overLay[0].style.display = "none";
}

window.onclick = function(e){
    if(e.target == overLay[0]){
        sideBar[0].style.marginLeft = -500 + 'px';
        overLay[0].style.display = "none";
    }
}



let subwarp = document.getElementsByClassName('subwrap');
let item = document.getElementsByClassName('item');
let img = item[0].getElementsByTagName('img');
let imgarray = ['images/slider_1_image.webp','images/slider_2_image.jpg'];
let li = subwarp[0].getElementsByTagName('li');
let a = subwarp[0].getElementsByTagName('a');
for (let i = 0; i < a.length; i++) {
    a[i].onclick = function(){
        subwarp[0].getElementsByClassName('active')[0].classList.remove('active');
        li[i].className +=" active";
        img[0].src = imgarray[i];
    }
    
}






// document.getElementsByClassName('hidden-nav')[0].onclick = function(){
//     document.getElementsByClassName('hidden-subnav')[0].classList.toggle('show');
// }
let hiddenNavs = document.getElementsByClassName('hidden-nav');
let hiddenSubnavs = document.getElementsByClassName('hidden-subnav');
for (let i = 0; i < hiddenNavs.length; i++) {
    hiddenNavs[i].onclick = function () {
        hiddenSubnavs[i].classList.toggle('show');
    }

}