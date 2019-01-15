var scen = {

	"startingPoint" : [
		{
			"type" : "01"
			, "script" : "안녕하세요. 레드마인을 보다 편리하게 쓸 수 있게 해드리는 프로그램입니다."
		
		}
		, {
			"type" : "01"
			, "script" : "현재 이 프로그램은 개발단계이므로 버그가 아주 많습니다."
		
		}
		, {
			"type" : "01"
			, "script" : "자, 무엇을 하시겠습니까?"
		
		}
		, {
			"type" : "02"
			, "select" : [
				{
					"script" : "개발 활동을 등록한다"
					, "code" : "dev"
				}
				, {
					"script" : "PM 활동을 등록한다"
					, "code" : "pm"
				}
			]
		}
	]
	, "dev" : [
		{
			"type" : "11"
			, "code" : "linkProject"
		}
		, {
			"type" : "01"
			, "script" : "어떤 개발 활동을 했습니까?"
		}
		, {
			"type" : "03"
			, "select" : [
				{
					"script" : "신규 기능을 개발했다"
					, "text" : "기능 개발"
				}
				, {
					"script" : "기존 기능을 수정했다"
					, "text" : "수정"
				}
				, {
					"script" : "Q/A를 했다"
					, "text" : "QA"
				}
				, {
					"script" : "테스트를 했다"
					, "text" : "테스트"
				}
				, {
					"script" : "테스트 코드 작성"
					, "text" : "테스트 코드 개발"
				}
				, {
					"script" : "코드를 검증했다"
					, "text" : "소스 코드 검증"
				}
			]
		}
		
	]
	, "pm" : [
		{
			"type" : "11"
			, "code" : "linkProject"
		}
		, {
			"type" : "01"
			, "script" : "PM에 관련된 E-mail 또는 그에 상응하는 내용을 붙여넣기 합니다."
		}
		, {
			"type" : "05"
			, "code" : ""
		}
	]
	, "linkProject" : [
		{
			"type" : "01"
			, "script" : "어떤 프로그램 또는 시스템에 대하여 활동을 하였습니까?"
		
		}
		, {
			"type" : "03"
			, "select" : [
				{
					"script" : "NXPG"
					, "text" : "[NXPG]"
				}
				, {
					"script" : "MCS"
					, "text" : "[MCS]"
				}
				, {
					"script" : "SMDXPG"
					, "text" : "[SMDXPG]"
				}
			]
		}
	]
};
