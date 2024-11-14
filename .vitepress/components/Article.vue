<template>
    <a :href="link" class="paper-card">
        <p class="title">{{ title }}</p>
        <p class="description">{{ description }}</p>
        <p class="time">🌐{{ time }}</p>
        <div class="technologe-stack">
            <p v-for="(item, index) in about" :key="index" :style="{backgroundColor:getTechStackBackgroundColor(item)}">{{ item }}</p>
        </div>
    </a>
</template>

<script>
import {getTechStackBackgroundColor} from "/.vitepress/utils/changeColor.js"
export default {
    props: {
        link: String,
        title: String,
        time: String,
        description: String,
        about: Array
    },
    methods:{
        getTechStackBackgroundColor
    }
}
</script>

<style scoped>
a{
    color: black;
}
.paper-card {
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    background-color: #fff;
    text-decoration: none;
    position: relative;
    overflow: hidden;
}

.paper-card:hover {
    color: inherit;
    transform: scale(1.1);
    transition: all 0.3s ease-out;
}

.title{
    margin: 10px 0;
    font-size: 16px;
    font-weight: bold;
}
.description{
    margin: 10px 0;
    font-size: 12px;
}
.time{
    color: rgb(124, 121, 121);
}
.technologe-stack {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-top: 10px;
    flex-wrap: wrap;
    position: absolute; 
    right: 7px; 
    bottom: -12px; 
    max-width: 90%; 
}
.technologe-stack p {
    width: auto;
    padding:0 5px;
    font-size: 8px;
    border-radius: 8px;
    /* background-color: rgb(219 234 254); */
    margin-right: 3px;
    color: rgb(30 64 175);
    display: inline-block;
    text-align: center;
}
</style>