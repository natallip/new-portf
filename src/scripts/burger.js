const toggleBurger = function () {
  const burger = document.querySelector('.burger'),
        nav = document.querySelector('.menu'),
        page = document.querySelector('.wrapper');
  burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    nav.classList.toggle('open');
    page.classList.toggle('no-scroll');
  }); 
}
toggleBurger();

// const openNav () {
//   const links = document.querySelectorAll('.navigation__link');
//   links.forEach(item => {
//     item.addEventListener('click', function() {
//       let elementClick = this.attr('href');    
//       let destination = $(elementClick).offset().top - 40;
                
//       $('html, body').animate({scrollTop: destination},{
//         duration: 500,
//         easing: 'swing'
//       });        

//       if ($('.burger.active')) {
//         $('.burger').removeClass('active');
//         $('.navigation').removeClass('open');
//         $('#fullpage').removeClass('no-scroll');   
//       }

//       return false;
//     }); 
//   })
// }


// $('.navigation__link').on('click', function() {
    
//   let elementClick = $(this).attr('href');    
//   let destination = $(elementClick).offset().top - 40;
            
//   $('html, body').animate({scrollTop: destination},{
//     duration: 500,
//     easing: 'swing'
//   });        

//   if ($('.burger.active')) {
//     $('.burger').removeClass('active');
//     $('.navigation').removeClass('open');
//     $('#fullpage').removeClass('no-scroll');   
//   }

//   return false;
// });