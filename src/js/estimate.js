require([
	"common",
], function() {
	/* 견적 셀렉트 박스들*/

	var spaceSelected=$("#estimate-select-space>option:selected").val();
	/* 견적 step-1 옵션*/
	/* 견적 step-1 공간 spaceSelected*/
	$("#estimate-select-space").on("change", function() {
		spaceSelected=$("#estimate-select-space>option:selected").val();
		if ("--공간선택--" === spaceSelected) {
			$("#estimate-select-desc").html("<option>--주거선택--</option>");
		}
		else if ( "주거공간" === spaceSelected) {
			$("#estimate-select-desc").html("" +
				"<option>--주거선택--</option>" +
				"<option >아파트</option>" +
				"<option >빌라</option>" +
				"<option >주택</option>" +
				"<option >원룸</option>");
		}
		else if ( "상업공간" === spaceSelected) {
			$("#estimate-select-desc").html("" +
				"<option>--주거선택--</option>" +
				"<option >사무실</option>" +
				"<option >상가/매장</option>" +
				"<option>카페/식당</option>" +
				"<option >학원/교육</option>" +
				"<option >간판</option>" +
				"<option >숙박/병원</option>" +
				"<option >기타</option>");
		}
		else if ( "부분시공" === spaceSelected) {
			$("#estimate-select-desc").html("" +
				"<option>--주거선택--</option>" +
				"<option >도배/장판</option>" +
				"<option >욕실</option>" +
				"<option >집닥키친</option>" +
				"<option >수납가구</option>" +
				"<option >기타</option>");
		}
	});
	var nowStep=1;
	/* 견적 step-1 주거 descSelected*/
	var descSelected=$("#estimate-select-desc>option:selected").val();
	$("#estimate-select-desc").on("change", function() {
		descSelected=$("#estimate-select-desc>option:selected").val();

		/* 스텝2액티브, 프로그레스바 업데이트, 버튼, circle */
		if (!("--주거선택--" === descSelected)) {
			/* 스텝투 넘어가기*/
			$(".step-"+nowStep).removeClass("estimate-active");
			nowStep+=1;
			$(".step-"+nowStep).addClass("estimate-active");
			/* 버튼*/
			$(".estimate-pre").addClass("estimate-btn-active");
			/* 프로그레스바*/
			$(".step2-left-active").animate({"width": "50%"}, 1000);
			$(".step1-right-active").animate({"width": "50%"}, 1000);
			/* circle 색상변경*/
			$(".step-2-circle").addClass("circle-active");
		}
	});
	/* 시선택한것 나타내준것 간단하게*/
	var siSelected=$("#estimate-select-si").val();
	$("#estimate-select-si").on("change", function() {
		siSelected=$("#estimate-select-si").val();
	});

	/* 이전으로 돌아가기*/
	$(".estimate-pre").on("click", function() {
			$(".step-"+nowStep).removeClass("estimate-active");
			nowStep-=1;
			if (nowStep === 1) {
				/* 버튼*/
				$(".estimate-pre").removeClass("estimate-btn-active");
			}
			if( nowStep === 3 ) {
				$(".estimate-next").html("다음 &gt;");
			}
			$(".step-"+nowStep).addClass("estimate-active");
	});

	/* 견적 step-1 버튼 다음 눌렀을 때*/
	var goNext=1;
	$(".estimate-next").on("click", function() {
		/* step1*/
		if ( nowStep === 1) {
			if ("--공간선택--" === spaceSelected) {
				alert("공간유형을 선택하세요");
				goNext=0;
			}
			else if ("--주거선택--" === descSelected) {
				alert("세부유형을 선택하세요");
				goNext=0;
			}
			else if (!("--주거선택--" === descSelected)) {
				goNext=1;
			}
		}

		/* step2*/
		if (nowStep === 2 ) {
			if ("전체" === siSelected) {
				alert("시를 선택해주세요");
				goNext = 0;
			}
			else if (!("전체" === siSelected )) {
				goNext = 1;
			}
		}

		if (nowStep === 3 ) {
			$(".estimate-next").html("이 단계 건너뛰기 &gt;");
		}

		/* 다음페이지로 넘기기*/
		if(goNext === 1) {
			if(nowStep === 1) {
				/* 버튼*/
				$(".estimate-pre").addClass("estimate-btn-active");
			}

			/* 프로그레스바 R*/
			$(".step"+nowStep+"-right-active").animate({"width": "50%"}, 1000);
			/* 전의 스텝 삭제*/
			$(".step-"+nowStep).removeClass("estimate-active");
			nowStep+=1;
			/* 프로그레스바 L*/
			$(".step"+nowStep+"-left-active").animate({"width": "50%"}, 1000);
			/* circle 색상변경*/
			$(".step-"+nowStep+"-circle").addClass("circle-active");
			/* 다음 스텝 보이기*/
			$(".step-"+nowStep).addClass("estimate-active");
		}
	});
});
