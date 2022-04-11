$(function(){
	CKEDITOR.replace("writeContent", {
		height:'400px',
		startupFocus : false,
	});
	
	let totalFile = $("#innerFiles").attr("class"); 
	
	$(".xbtn").on('click', function(){
		$(this).parent().css("display", "none");
		$(this).parent().next().attr("name", "deleteFile");
		$(this).parent().next().next().attr("type","file");
		totalFile--;
	});
	
	$("#uploadBtn").click(function(){
		if($("#innerFiles").css("display")=='none'){
			$("#innerFiles").show();
		}else{
			$("#innerFiles").hide();
		};
	});
	
	$("#shareReqForm").submit(function(){
		if($("#shareAndReqTitle").val()==''){
			alert("🚫 제목을 입력해주세요");
			return false;
		}
		if(CKEDITOR.instances.writeContent.getData()==''){
			alert("🚫 내용을 입력해주세요");
			return false;
		}
	});
});