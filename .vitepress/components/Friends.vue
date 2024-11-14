<template>
  <div class="friend-card">
    <div class="avatar-container">
      <img :src="avatar" :alt="name + '的头像'" class="avatar" />
    </div>
    <h3>{{ name }}</h3>
    <span v-if="role" class="role" :style="{backgroundColor:getTechStackBackgroundColor(role)}">{{ role }}</span>
    <p>{{ description }}</p>
    <a :href="link" target="_blank" rel="noopener">{{ linkText }}</a>
  </div>
</template>

<script>
import {getTechStackBackgroundColor} from "/.vitepress/utils/changeColor.js"
export default {
  props: {
    name: String,
    avatar: String,
    role: String,
    description: String,
    link: String,
    linkText: String
  },
  methods:{
    getTechStackBackgroundColor
  }
};
</script>

<style scoped>
a{
  color:rgb(56 189 248);
  text-decoration: none;
}
.friend-card {
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: #fff;
}

.friend-card:hover{
transform: scale(1.2);
transition: all 0.3s ease-out;
}
.avatar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.role {
  display: inline-block;
  margin: 8px 0;
  padding: 2px 8px;
  /* background-color: rgb(2 132 199); */
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
}
</style>
