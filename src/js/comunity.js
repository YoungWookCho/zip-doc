require([
	"common",
], function() {
	var source = $("#community-title").html();
	var template = Handlebars.compile(source);
	var titleData = {
		titles: [
			{
				titleImg: "img/index_icon_comm_qna.png",
				titleTitle: "나의 셀프 인테리어 이야기",
				titleDesc: "인테리어에 관한것이라면, 어떤 사소한 질문도 괜찮아요. 집" +
				" 닥과 집닥 파트너스의 전문가들이 속 시원히 알려드립니다.<br>"+
				"나만 알고 있는 경험과 노하우가 있다면 도움이"+
				"필요한 분들에게 나누어 주세요.",
			},
			{
				titleImg: "img/index_icon_comm_photo.png",
				titleTitle: "나의 셀프 인테리어 이야기",
				titleDesc: "혼자 보기 아까운, 정성과 애정이 가득 담긴 나만의 공간을 자랑하세요.<br>"+
							"알려주고 싶은 인테리어 팁이나 노하우가 있다면 모두와 공유해 보세요.",
			},
			{
				titleImg: "img/index_icon_comm_qna.png",
				titleTitle: " 인테리어 이렇게 했어요",
				titleDesc: "인테리어를 하셨거나 준비중이신가요? 인테리어를 하며 경험하고 느낀 후기를 남겨주세요. <br>"+
							"현재 인테리어를 하고 계신 분들, 혹은 앞으로 인테리어를 계획하고 계신 분들에게 많은 도움이 될거에요.",
			},

		],
	};
	var html = template(titleData);
	$(".community-title-box").append(html);
});
