document.addEventListener('DOMContentLoaded', function () {
    // 选择所有 href="#" 的链接
    const hashLinks = document.querySelectorAll('a[href="#"]');
  
    hashLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault(); // 阻止滚动到顶部
        console.log('已阻止 # 链接的默认行为');
        
        // 可选：触发自定义逻辑（如果需要）
        // 例如：根据 class 或位置判断要做什么
      });
    });
  });