require([
	"common",
], function() {
	/* 메인로고 마우스오버 이벤트*/
	$(".header-info-logo").mouseenter( function() {
		$(".main-logo").attr("src", "img/img_zipdoc_logo_ani.gif");
	});
	$(".header-info-logo").mouseleave( function() {
		$(".main-logo").attr("src", "img/img_zipdoc_logo.png");
	});
	/* 디테일스 마우스오버 이벤트*/
	$(".header-details>ul>li>ul>li").mouseenter( function() {
		$(this).find(".details-hover").fadeIn(100);
	});
	$(".header-details>ul>li>ul>li").mouseleave( function() {
		$(this).find(".details-hover").fadeOut(100);
	});
	/* 메뉴바 마우스오버 이벤트*/
	$(".header-menu").hover( function() {
		$(".header-details-wrapper").fadeIn(10);
	});
	$(".header-menu").mouseleave( function() {
		$(".header-details-wrapper").fadeOut(10);
	});
});
