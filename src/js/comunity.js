require([
	"common",
], function() {
	$(".header-details-bar>ul>li").on("click", function() {
		$(".zd-contents-under>section").removeClass("community-active");
		if($(this).hasClass("curious-clicker")) {
			$(".curious").addClass("community-active");
		}
		else if($(this).hasClass("myroom-clicker")) {
			$(".myroom").addClass("community-active");
		}
		else if($(this).hasClass("review-clicker")) {
			$(".review").addClass("community-active");
		}
	});
});
