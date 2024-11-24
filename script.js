const imgs = ['pexels-olly-853151.jpg', 'pexels-polina-tankilevitch-4570564.jpg', 'pexels-vera-arsic-304265-984923.jpg'];

let imageIndex = 0;

function changeBackgroundImg() 
{
    const header = document.querySelector('header');
    header.style.transition = "background-image 2s";
    header.style.backgroundImage = `url(${imgs[imageIndex]})`;
    imageIndex = (imageIndex + 1) % imgs.length; 
}
changeBackgroundImg();
setInterval(changeBackgroundImg, 5000);

function scrollToAbout() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  }