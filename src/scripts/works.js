import Vue from "vue";

const thumbs = {
  template: "#slider-thumbs",
  props: {
    works: Array,
    currentWork: Object,
    currentIndex: Number,
    direction: String
  },
  computed: {
    thumbWidth() {
      return this.$refs.thumbsItem[0].clientWidth;
    },  
    visibleThumbsCount() {
      let countThumbsVisible = Math.round(this.$refs.thumbsList.clientWidth / this.$refs.thumbsItem[0].clientWidth);
      return countThumbsVisible;
    }
  },
  methods: {
    moveThumbs(i) {
      if (this.direction === "next" && i > this.visibleThumbsCount - 1 && i <= this.works.length - 1) {
        this.$refs.thumbsList.style.transition = 'transform .5s ease-in-out'; 
        this.$refs.thumbsList.style.transform = `translateX(${- i - this.visibleThumbsCount - 1 * this.thumbWidth + 6}px)`;
      }; 
      if (this.direction === "prev" && i < (this.works.length - this.visibleThumbsCount)) {
        this.$refs.thumbsList.style.transition = 'transform .5s ease-in-out'; 
        this.$refs.thumbsList.style.transform = `translateX(${ i * this.thumbWidth}px)`;
      }
    }
  }, 
  watch: {
    currentIndex(i) {
      this.moveThumbs(i);
    }
  }
};

const btns = {
  template: "#slider-btns",
  props: {
    works: Array,
    currentIndex: Number
  },
  methods: {
    setDisableClass() {
      if (this.currentIndex >= this.works.length - 1) {
        this.$refs["btn-next"].classList.add("disable");
      } else  if (this.currentIndex === 0) {
        this.$refs["btn-prev"].classList.add("disable");
      } else {
        this.$refs["btn-next"].classList.remove("disable");
        this.$refs["btn-prev"].classList.remove("disable");
      }
    }
  },
  watch: {
    currentIndex(i) {
      this.setDisableClass();
    }
  }
};

const display = {
  template: "#slider-display",
  components: {
    btns,
    thumbs
  },
  data() {
    return {
      direction: undefined
    }
  },
  props: {
    works: Array,
    currentWork: Object,
    currentIndex: Number
  },
  computed: {
    // reversedWorks() {
    //   const works = [...this.works].reverse();
    //   return works;
    // }
  },
  methods: {
    setDirection(value) {
      this.direction = value;
      this.$emit('slide', this.direction);
    }
  }
};

const tags = {
  template: "#slider-tags",
  props: {
    tagsArray: Array
  }
};

const info = {
  template: "#slider-info",
  components: {
    tags
  },
  props: {
    currentWork: Object
  },
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(',');
    }
  }
};

new Vue({
  template: "#slider-container",
  el: "#slider-component",
  components: {
    display,
    info
  },
  data() {
    return {
      works: [],
      currentIndex: 0,
      direction: undefined
    };
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex];
    }
  },
  watch: {
    currentIndex(value) {
      this.makeLoopForCurIndex(value);
    }
  },
  methods: {
    makeLoopForCurIndex(value) {
      const worksAmount = this.works.length - 1;
      if (value > worksAmount) this.currentIndex = worksAmount;
      if (value < 0) this.currentIndex = 0;
    },
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requiredPic = require(`../images/content/${item.photo}`);
        item.photo = requiredPic;

        return item;
      });
    },
    handleSlide(direction) {
      switch (direction) {
        case "next":
          this.currentIndex++;
          this.direction = direction;
          break;
        case "prev":
          this.currentIndex--;
          this.direction = direction;
          break;
      }
    }
  },
  created() {
    const data = require("../data/works.json");
    this.works = this.makeArrWithRequiredImages(data);
  }
});