let mainimg = document.querySelector('.image img');
let imgs = document.querySelectorAll('.icons img');
let container = document.querySelector('.container');

window.onload = () => {
     if (localStorage.getItem('pagedata')) {
          data = JSON.parse(localStorage.getItem('pagedata'));
          if (data.image) {
               mainimg.src = data.image
          }
          if (data.color) {
               container.style.backgroundColor = data.color;
          }
     }
}

imgs.forEach(img => {
     img.addEventListener('click', (e) => {
          mainimg.src = `${e.target.src}`;
          savedatainlocalstg()
     })
});
function chngColor(color) {
     container.style.backgroundColor = color;
     savedatainlocalstg()
}
function savedatainlocalstg() {
     let data = {
          image: mainimg.src,
          color: container.style.backgroundColor
     }
     localStorage.setItem('pagedata', JSON.stringify(data))
}