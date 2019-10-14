import Vue from 'vue';
import Flickity from 'vue-flickity';

new Vue({
  el: "#reviewsSlider",
  components: {
    Flickity
  },
  
  data() {
    return {
      flickityOptions: {
        prevNextButtons: false,
        pageDots: false,
        groupCells: 2
      },
      reviews: [
        // {"id": "100", "text": "Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 2 месяца только самых тяжелых испытаний и бессонных ночей!", "img": "review1.jpg", "name": "Ковальчук Дмитрий", "position": "основатель Loftschool"},
        // {"id": "200", "text": "Этот код выдержит любые испытания. Только пожалуйста, не загружается сайт на слишком старых браузерах!", "img": "review2.jpg", "name": "Сабанцев Владимир ", "position": "преподаватель"}, 
        // {"id": "300", "text": "Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 2 месяца только самых тяжелых испытаний и бессонных ночей!", "img": "review1.jpg", "name": "Ковальчук Дмитрий", "position": "основатель Loftschool"}, 
        // {"id": "400", "text": "Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 2 месяца только самых тяжелых испытаний и бессонных ночей!", "img": "review2.jpg", "name": "Сабанцев Владимир", "position": "преподаватель"}
      ]      
    }
  },
  
  methods: {
    arrWithImg(array) {
      return array.map(item => {
        const pic = require(`images/content/${item.pic}`);
        item.pic = pic;
        return item;
      })
    },
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  },
  created() {
    const data = require("../data/reviews.json");
    
    this.reviews = this.arrWithImg(data);
  }
});




// function moveSlider(obj, wrap) {
//   const slider = document.querySelector(obj);
//   //console.log(222, obj, slider);
//   const sliders = [...slider.children];
//   const wrapper = document.querySelector(wrap);
//   const next = wrapper.querySelector('.next');
//   const prev = wrapper.querySelector('.prev');
//   const computedStyle = sliders[0].currentStyle || getComputedStyle(sliders[0], '');
//   const sliderWidth = sliders[0].offsetWidth;
//   let i = 0;

//   function move(contr) {
//     console.log(111, contr, i);
//     // i > sliders.length + 1 ? false : i++; 
//     // i < 0 ? i = 0 : false;
//     if (contr === "next") {
//       i++;
//       prev.classList.remove("disable");
//       if (i > sliders.length - 2) {
//         i = sliders.length - 2;
//         next.classList.add("disable");
//         return;
//       }
//       slider.style.transform = `translateX(${-i * sliderWidth}px)`;      
//       console.log(222, i, `translateX(${-i * sliderWidth}px)`);
//     }
//     if (contr === "prev") {
//       i--;
//       next.classList.remove("disable");
//       if (i < 0) {
//         i = 0;
//         prev.classList.add("disable");
//         return;
//       }
//       slider.style.transform = `translateX(${i * sliderWidth}px)`;
//       console.log(333, i, `translateX(${-i * sliderWidth}px)`);
//     }
//   }

//   next.addEventListener("click", move.bind(null, "next"));
//   prev.addEventListener("click", move.bind(null, "prev"));
// }

// moveSlider(".reviews__items", ".reviews");

