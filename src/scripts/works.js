import Vue from "vue";

const thumbs = {
  template: "#slider-thumbs",
  props: {
    works: Array,
    currentWork: Object
  }
};

const btns = {
  template: "#slider-btns"
};

const display = {
  template: "#slider-display",
  components: {
    btns,
    thumbs
  },
  props: {
    works: Array,
    currentWork: Object,
    currentIndex: Number
  },
  computed: {
    reversedWorks() {
      const works = [...this.works];
      return works;
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
      //visibleThumbsCount : 4,
      visibleThumbs: []
    };
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex];
    },
    visibleThumbsCount() {
      console.log(333, this.$refs.thumbsList);
      let countThumbs = Math.round(this.$refs.thumbsList.clientWidth() / this.$refs.thumbsItem[0].clientWidth());
      console.log(123, countThumbs);
      return countThumbs;
    }
  },
  watch: {
    currentIndex(value) {
      this.makeInfiniteLoopForCurIndex(value);
    }
  },
  methods: {
    makeInfiniteLoopForCurIndex(value) {

      //console.log(555, this.$refs["thumbsList"]);


      const worksAmount = this.works.length - 1;
      if (value > worksAmount) this.currentIndex = 0;
      if (value < 0) this.currentIndex = worksAmount;
    },
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requiredPic = require(`../images/content/${item.photo}`);
        item.photo = requiredPic;

        return item;
      });
    },
    makeVisibleThumbsArray() {
      if (currentIndex > visibleThumbsCount) {

      }
    },
    handleSlide(direction) {
      switch (direction) {
        case "next":
          this.currentIndex++;
          break;
        case "prev":
          this.currentIndex--;
          break;
      }
    }
  },
  created() {
    const data = require("../data/works.json");
    this.works = this.makeArrWithRequiredImages(data);
  },
  mounted() {
    
    //console.log(123, this.visibleThumbsCount);
  }
});