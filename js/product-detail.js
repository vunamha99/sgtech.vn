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