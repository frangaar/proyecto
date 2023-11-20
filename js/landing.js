document.addEventListener('DOMContentLoaded',function(){

    
    let landing = document.querySelector('.games-section #india');
    let img1 = document.getElementById('india_static');
    let img2 = document.getElementById('india_gif');

    landing.addEventListener('mouseover',function(){
        img1.style.display = 'none';
        img2.style.display = 'block';
    })
    
    landing.addEventListener('mouseout',function(){
        img1.style.display = 'block';
        img2.style.display = 'none';
    })
});