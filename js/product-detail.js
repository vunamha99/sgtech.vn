let listThumb = document.getElementsByClassName('list-thumbs');
let lis = listThumb[0].getElementsByTagName('li');
let image = listThumb[0].getElementsByTagName('img');
let arrayimage = ['images/product/anker-power-port-wireless-10w_grande.webp','images/product/anker-power-port-wireless-10w-3_grande.jpg',
'images/product/anker-power-port-wireless-10w-1_grande.jpg','images/product/anker-power-port-wireless-10w-2_grande.jpg'];

let imgFeatured = document.getElementById('img-featured');
let imgBox = imgFeatured.getElementsByTagName('img');


    for (let i = 0; i < image.length; i++) {
        image[i].onclick = function(){
            imgBox[0].src = arrayimage[i];
            listThumb[0].getElementsByClassName('active')[0].classList.remove('active');
            lis[i].className += ' active';
        }  
    }

let imagezoom = document.getElementById('image');
let closeoverlay = document.getElementsByClassName('close-overlay');
    imgBox[0].onclick = function(e){
        document.getElementsByClassName('overlay-image')[0].style.display = 'block';
        imagezoom.src = imgBox[0].src;
    }

    closeoverlay[0].onclick = function(e){
        document.getElementsByClassName('overlay-image')[0].style.display = 'none';
    }

    window.onclick = function(e){
        if(e.target == document.getElementsByClassName('overlay-image')[0]){
            document.getElementsByClassName('overlay-image')[0].style.display = 'none';
        }
    }




    let increase = document.getElementsByClassName('increase')[0];
    let decrease = document.getElementsByClassName('decrease')[0];
    let input = document.getElementById('quantity');

    increase.onclick = function(){
        if(input.value >= 12){
            input.value = 12;
        }else{
            input.value = Number(input.value) + 1;
        }
    }
    decrease.onclick = function(){
        if(input.value <= 0){
            input.value = 0;
        }else{
            input.value = Number(input.value) - 1;
        }
    }



let screen = window.matchMedia("(max-width:768px)");

    function matchscreen(x){
        if(x.matches){
            document.getElementsByClassName('btn-tab')[2].style.display = 'none'; 
        }else{
            document.getElementsByClassName('btn-tab')[2].style.display = 'block';
        }
    }
    matchscreen(screen);
    screen.addListener(matchscreen);







function showtab(e,id){
    let button, tabcontent, i;

    button = document.getElementsByClassName('btn-tab');
    tabcontent = document.getElementsByClassName('tab-content');


    for (i = 0; i < tabcontent.length; i++) {      
        tabcontent[i].style.display = 'none';  
    }

    for (i = 0; i < button.length; i++) {
        button[i].classList.remove('active'); 
    }
    document.getElementById(id).style.display= 'block';
    e.currentTarget.className += ' active';
}

document.getElementById('defaultOpen').click();