import Vue from 'vue';
//import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

new Vue({
  el: "#reviews",
  components: {
    swiper,
    swiperSlide,
  },  
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 50,
        slidesPerGroup: 2,
        slidesPerView: 2,
        navigation: {
          nextEl: '.reviews__contrs-next',
          prevEl: '.reviews__contrs-prev'
        },
        breakpoints: {
          1800: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            spaceBetween: 40
          },
          768: {
            slidesPerGroup: 1,
            slidesPerView: 1,
            spaceBetween: 0
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          }
        }
      },
      reviews: []      
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    arrWithImg(array) {
      return array.map(item => {
        const pic = require(`images/content/${item.pic}`);
        item.pic = pic;
        return item;
      })
    }
  },
  created() {
    const data = require("../data/reviews.json");    
    this.reviews = this.arrWithImg(data);
  }
});