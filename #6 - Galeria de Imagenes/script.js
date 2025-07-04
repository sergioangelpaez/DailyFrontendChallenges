function loadApp(){
    let currentImgIndex = 0;

    const imgVisualizer = document.getElementById('imgSrc');
    const arrows = document.querySelectorAll('.arrow');
    const imgTittle = document.getElementById('imgTittle');
    const imgData = [
        {path: './media/wallpaper1.png', tittle: 'Blasphemous Image 1'},
        {path: './media/wallpaper2.jpg', tittle: 'Blasphemous Image 2'},
        {path: './media/wallpaper3.webp', tittle: 'Blasphemous Image 5'},
        {path: './media/wallpaper4.png', tittle: 'Blasphemous Image 4'},
        {path: './media/wallpaper5.png', tittle: 'Blasphemous Image 5'},         
    ];

    arrows.forEach(arrow => {
        arrow.addEventListener('click', (e) => {
            if(e.currentTarget.id === 'leftArrow'){
                currentImgIndex = (currentImgIndex - 1 + imgData.length) % imgData.length;
                displayImg();
            }else{
                currentImgIndex = (currentImgIndex + 1 + imgData.length) % imgData.length;
                displayImg();
            }
        })
    });

    function displayImg(){
        imgVisualizer.src = imgData[currentImgIndex].path;
        imgTittle.textContent = imgData[currentImgIndex].tittle;
    }

    displayImg();
}

document.addEventListener('DOMContentLoaded', loadApp);