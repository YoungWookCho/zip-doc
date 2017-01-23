require([
	"common",
], function() {
	$(".header-details-bar>ul>li").on("click", function() {
		$(".zd-contents>section").removeClass("common-active");
		if($(this).hasClass("interior-tip-clicker")) {
			$(".interior-tip").addClass("common-active");
		}
		else if($(this).hasClass("diary-clicker")) {
			$(".diary").addClass("common-active");
		}
		else if($(this).hasClass("news-clicker")) {
			$(".news").addClass("common-active");
		}
		else if($(this).hasClass("event-clicker")) {
			$(".event").addClass("common-active");
		}
	});
});
