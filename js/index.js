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

    // 移动端菜单切换功能
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (mobileMenuToggle && mobileNav) {
      mobileMenuToggle.addEventListener('click', function () {
        mobileMenuToggle.classList.toggle('active');
        mobileNav.classList.toggle('active');
      });

      // 点击菜单项后关闭菜单
      const mobileNavLinks = mobileNav.querySelectorAll('a');
      mobileNavLinks.forEach(link => {
        link.addEventListener('click', function () {
          mobileMenuToggle.classList.remove('active');
          mobileNav.classList.remove('active');
        });
      });

      // 点击菜单外部区域关闭菜单
      document.addEventListener('click', function (e) {
        if (!mobileMenuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
          mobileMenuToggle.classList.remove('active');
          mobileNav.classList.remove('active');
        }
      });
    }
  });