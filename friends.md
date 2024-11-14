# 朋友圈🐧

<!-- 来自不同领域的优秀朋友们 -->

<div class="friends-grid">
  <FriendCard
    name="戴森球"
    avatar="./public/mylogo.png"
    role="前端开发者"
    description="永远相信美好的事情即将发生"
    link="http://www.daisenqiu.top"
    linkText="欢迎交换友链"
  />
  <FriendCard
    name="zbwer"
    avatar="public/FriendsPhoto/zbwer.jpg"
    role="前端开发工程师"
    description="字节、腾讯大佬,来自电子科技大学"
    link="https://blog.zbwer.work/"
    linkText="地球其实只是一个柯基的屁股"
  />
  <FriendCard
    name="Kaiven"
    avatar="public/FriendsPhoto/Kaiven.jpg"
      role="全栈开发"
    description="医学生转码,全栈佬"
    link="https://www.kaiven666.online/"
    linkText="有了目标就做，Just do it！"
  />
 
  <!-- 继续添加其他朋友的 FriendCard 组件 -->
</div>

<script setup>
import FriendCard from '.vitepress/components/Friends.vue';
</script>

<style>
.friends-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 20px;
}
</style>
