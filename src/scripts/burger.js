const burger = document.querySelector('.burger'),
      nav = document.querySelector('.menu'),
      body = document.body;

const toggleBurger = function () {  
  burger.addEventListener('click', function() {
    burger.classList.add('active');
    nav.classList.add('open');
    body.classList.add('no-scroll');
  }); 
}
toggleBurger();

nav.addEventListener('click', function(e) {
  const id = e.target.getAttribute('data-id');   
  const to = document.querySelector('#' + id);
  // const coordY = to.offsetTop();
  console.log(123, to, to.offsetTop) 
  
  if (burger.classList.contains('active')) {
    burger.classList.remove('active');
    nav.classList.remove('open');
    body.classList.remove('no-scroll');   
  }
  //window.scrollTo(0, coordY);
  //to.scrollTop = 0;
  window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': to.offsetTop
  });
  // to.scrollIntoView({
  //   behavior: 'smooth',
  //   top: true
  // })
})