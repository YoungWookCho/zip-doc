require([
	"common",
], function() {
	/* 디테일스 마우스오버 이벤트*/
	function itemEnter() {
		$(".item").mouseenter( function() {
			$(this).find(".item-hide").fadeIn(100);
		});
	}
	function itemLeave() {
		$(".item").mouseleave( function() {
			$(this).find(".item-hide").fadeOut(100);
		});
	}
	itemEnter();
	itemLeave();
});
