<template>
    <canvas id="canvas"></canvas>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  
  onMounted(() => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    canvas.height = window.innerHeight; // 使用窗口高度
    canvas.width = window.innerWidth; // 使用窗口宽度
    const str = 'DSQWOSGDAISEWOSUKCBNLCCHM'.split('');
    const Arr = Array(Math.ceil(canvas.width / 10)).fill(0);
  
    const rain = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // 填充背景颜色
      ctx.fillRect(0, 0, canvas.width, canvas.height); // 背景
      ctx.fillStyle = "#0f0"; // 文字颜色
      Arr.forEach((item, index) => {
        ctx.fillText(str[Math.floor(Math.random() * str.length)], index * 10, item + 10);
        Arr[index] = item >= canvas.height || item > 10000 * Math.random() ? 0 : item + 10;
      });
    };
  
    const intervalId = setInterval(rain, 40);
  
    // 清理定时器
    onBeforeUnmount(() => {
      clearInterval(intervalId);
    });
  });
  </script>
  
  <style scoped>
  canvas {
    display: block; /* 防止出现空白区域 */
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1; /* 确保画布在底层 */
  }
  </style>
  