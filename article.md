<div class="paper-grid">
 <ArticleCard
   link="/public/page/myfeeling"
    title="心路历程"
    time="2024.9.30"
    description="永远相信美好的事情即将发生"
    :about="['海康威视实习总结', '面经']"
    />
  <ArticleCard
    link="/public/page/git"
    title="GIT食用指南"
     time="2024.9.1"
    description="GIT的基本操作"
    :about="['GIT']"
    />
    <ArticleCard
   link="/public/page/react"
    title="React"
    time="2024.11.14"
    description="React18以及HOOKS"
    :about="['React','钩子函数']"
    />
  <ArticleCard
   link="/public/page/mysql"
    title="MySql"
    time="2024.9.2"
    description="数据库的基本操作,锁以及底层原理"
    :about="['MySql']"
    />
  <ArticleCard
   link="/public/page/font-end-interview"
    title="前端面试合集"
    time="2024.11.16"
    description="前端八股集合,常见的面试问题"
    :about="['Vue', '前端', 'React','JavaScript']"
    />
  <ArticleCard
   link="/public/page/basic"
    title="HTML,CSS,JavaScript"
    time="2023.7.16"
    description="前端基础,样式以及JS基础"
    :about="['HTML', '前端', 'CSS','JavaScript']"
    />

 
  <ArticleCard
   link="/public/page/http"
    title="http概论"
    time="2024.11.14"
    description="HTTP的基本知识"
    :about="['HTTP', 'HTTPS']"
    />
  <ArticleCard
   link="/public/page/network"
    title="计算机网络"
    time="2024.11.14"
    description="计算机网络的基本概念、功能、组成、分类和标准化工作"
    :about="['HTTP', '计算机网络']"
    />
  <ArticleCard
   link="/public/page/operating-system"
    title="操作系统概念"
    time="2024.11.14"
    description="进程的管理、内存的分配以及IO文件的输入输出以及Linux基本操作"
    :about="['操作系统']"
    />
  <ArticleCard
   link="/public/page/vue"
    title="Vue"
    time="2024.5.1"
    description="基础知识以及工程化，生命周期函数"
    :about="['vue']"
    />
    

  </div>

 <script setup>
 import ArticleCard from '.vitepress/components/Article.vue';
</script>

<style>
.paper-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 20px;
}
</style>
