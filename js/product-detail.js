

















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