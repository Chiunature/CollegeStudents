document.addEventListener("DOMContentLoaded", function () {
	const slides = document.querySelectorAll(".hero-banner .slide");
	const dots = document.querySelectorAll(".hero-banner .dot");
	console.log("照片", slides);
	console.log("点", dots);
	let currentIndex = 0;
	const totalSlides = slides.length;

	// 检查是否有幻灯片
	if (totalSlides === 0) {
		console.error("未找到幻灯片元素");
		return;
	}

	//切换到指定索引幻灯片
	function showSlide(index) {
		//防止越界
		if (index < 0) index = totalSlides - 1;
		if (index >= totalSlides) index = 0;
		//隐藏所有幻灯片，而且移除激活状态
		slides.forEach((slide) => slide.classList.remove("active"));
		dots.forEach((dot) => dot.classList.remove("active"));

		//显示当前幻灯片&激活对应小圆点
		slides[index].classList.add("active");
		dots[index].classList.add("active");
		currentIndex = index;
	}

	let autoSlideInterval = setInterval(() => {
		showSlide(currentIndex + 1);
	}, 4000);

	//点击小圆点切换
	dots.forEach((dot) => {
		dot.addEventListener("click", () => {
			const targetIndex = parseInt(dot.getAttribute("data-index"));
			showSlide(targetIndex);
		});

		//重置自动轮播
		clearInterval(autoSlideInterval);
		autoSlideInterval = setInterval(() => {
			showSlide(currentIndex + 1);
		}, 4000);
	});
});
