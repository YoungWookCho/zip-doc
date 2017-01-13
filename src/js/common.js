define([
	"bootstrap",
], function() {
	/* 메뉴바 픽스드*/
	function menuFixer() {
		if (document.body.scrollTop>=117.99) {
			$(".header-menu-wrapper").addClass("header-menu-fixed");
		}
		else {
			$(".header-menu-wrapper").removeClass("header-menu-fixed");
		}
	}

	function headerMenuFixed() {
		$(window).on("scroll", function() {
			menuFixer();
		});
	}

	/* 메인로고 마우스오버 이벤트*/
	function mainLogoEnter() {
		$(".header-info-logo").mouseenter( function() {
			$(".main-logo").attr("src", "img/img_zipdoc_logo_ani.gif");
		});
	}

	function mainLogoLeave() {
		$(".header-info-logo").mouseleave( function() {
			$(".main-logo").attr("src", "img/img_zipdoc_logo.png");
		});
	}

	/* 디테일스 마우스오버 이벤트*/
	function detailsEnter() {
		$(".header-details>ul>li>ul>li").mouseenter( function() {
			$(this).find(".details-hover").fadeIn(100);
		});
	}

	function detailsLeave() {
		$(".header-details>ul>li>ul>li").mouseleave( function() {
			$(this).find(".details-hover").fadeOut(100);
		});
	}

	/* 메뉴바 마우스오버 이벤트*/
	function menuBarEnter() {
		$(".header-menu").hover( function() {
			$(".header-details").fadeIn(10);
		});
	}
	function menuBarLeave() {
		$(".header-menu").mouseleave( function() {
			$(".header-details").fadeOut(10);
		});
	}
	mainLogoEnter();
	mainLogoLeave();
	detailsEnter();
	detailsLeave();
	menuBarEnter();
	menuBarLeave();
	headerMenuFixed();
});
