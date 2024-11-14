export const getTechStackBackgroundColor=(tech)=>{
    const techColor={
        'HTML':'#43CD80',
        'CSS':'#FFC1C1',
        'vue': '#42b883',    
        'React': '#61dafb',     
        'Node': '#3c873a',   
        'MongoDB': '#47A248',   
        'JavaScript': '#f7df1e', 
        'Python': '#306998',
        'GIT':'#E0EEE0',
        '前端':'#66CDAA',
        'MySql':'LightSkyBlue',
        'HTTP':'#FFFACD',
        'HTTPS':'#FFDAB9',
        '前端开发者':'#AFEEEE',
        '前端开发工程师':'#ADD8E6',
        '全栈开发':'#FFE4B5',
        '海康威视实习总结':'#90EE90'
    };
      // 返回对应的背景色，默认使用灰色
      return techColor[tech] || '#d1d5db';  // 默认背景颜色为灰色


};