<template lang="pug">
  .skill-container
    input(type="text" v-model="skillTitle" placeholder="Название новой группы").skill-input
    button.btn-add(type="button" @click="addSkillGroup") &#10004;
    hr
    hr
    .add-skill-wrapper.blocked
      input(type="text" placeholder="Новый навык")
      button(type="button") Добавить
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      skillTitle: ""
    };
  },
  methods: {
    ...mapActions("categories", ["addNewSkillGroup"]),
    async addSkillGroup() {
      try {
        await this.addNewSkillGroup(this.skillTitle);
        this.skillTitle = "";
      } catch (error) {
        alert(error.message)
      }
    }
  }
};
</script>



<style lang="postcss" scoped>
.add-skill-wrapper.blocked {
  opacity: 0.5;
  filter: grayscale(100%);
  pointer-events: none;
  user-select: none;
}
.skill-container {
  width: 520px;
  min-height: 390px;
  background: #fff;
  
}
.skill-input {
  border: none;
  border-bottom: 1px solid #000;
}
.btn-add {
  border: none;
  color: green;
}
</style>
