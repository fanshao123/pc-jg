$(function(){
//	yi
	var a=$(".sc8>.scc3>div>div>.d>p>.wz").html();
	var b=parseFloat(a);
	var fls=true;
	var fls1=true;
	var fls2=true;
	var fls3=true;
	$(".sc8>.scc3>div>div>.d>p>.shou").click(function(){
		if(fls){
			var c=b+1;
		    $(".sc8>.scc3>div>div>.d>p>.wz").html(c);
		    fls=false;
		}else{
			$(".sc8>.scc3>div>div>.d>p>.wz").html(a);
			fls=true;
		}
		
	})
//	er
	var aa=$(".sc8>.scc3>div>div>.d>p>.wz1").html();
	var bb=parseFloat(aa);
	$(".sc8>.scc3>div>div>.d>p>.shou1").click(function(){
		if(fls1){
			var cc=bb+1;
		    $(".sc8>.scc3>div>div>.d>p>.wz1").html(cc);
		    fls1=false;
		}else{
			$(".sc8>.scc3>div>div>.d>p>.wz1").html(aa);
			fls1=true;
		}
	})
//	san
	var aaa=$(".sc8>.scc3>div>div>.d>p>.wz2").html();
	var bbb=parseFloat(aaa);
	$(".sc8>.scc3>div>div>.d>p>.shou2").click(function(){
		if(fls2){
			var ccc=bbb+1;
		    $(".sc8>.scc3>div>div>.d>p>.wz2").html(ccc);
		    fls2=false;
		}else{
			$(".sc8>.scc3>div>div>.d>p>.wz2").html(aaa);
			fls2=true;
		}
	})
//	si
	var aaaa=$(".sc8>.scc3>div>div>.d>p>.wz3").html();
	var bbbb=parseFloat(aaaa);
	$(".sc8>.scc3>div>div>.d>p>.shou3").click(function(){
		if(fls3){
			var cccc=bbbb+1;
		    $(".sc8>.scc3>div>div>.d>p>.wz3").html(cccc);
		    fls3=false;
		}else{
			$(".sc8>.scc3>div>div>.d>p>.wz3").html(aaaa);
			fls3=true;
		}
	})
		//	wu
	var flss=true;
	var flss1=true;
	var flss2=true;
	var flss3=true;
	var d=$(".sc8>.scc3>div>div>.d>p>.wz11").html();
	var e=parseFloat(d);
	$(".sc8>.scc3>div>div>.d>p>.shou11").click(function(){
		if(flss){
			var f=e+1;
		    $(".sc8>.scc3>div>div>.d>p>.wz11").html(f);
		    flss=false;
		}else{
			$(".sc8>.scc3>div>div>.d>p>.wz11").html(d);
			flss=true;
		}
	})
//	liu
     var dd=$(".sc8>.scc3>div>div>.d>p>.wz22").html();
	var ee=parseFloat(dd);
	$(".sc8>.scc3>div>div>.d>p>.shou22").click(function(){
		if(flss1){
			var ff=ee+1;
		    $(".sc8>.scc3>div>div>.d>p>.wz22").html(ff);
		    flss1=false;
		}else{
			$(".sc8>.scc3>div>div>.d>p>.wz22").html(ee);
			flss1=true;
		}
	})
//	qi
 var ddd=$(".sc8>.scc3>div>div>.d>p>.wz33").html();
	var eee=parseFloat(ddd);
	$(".sc8>.scc3>div>div>.d>p>.shou33").click(function(){
		if(flss2){
			var fff=eee+1;
		    $(".sc8>.scc3>div>div>.d>p>.wz33").html(fff);
		    flss2=false;
		}else{
			$(".sc8>.scc3>div>div>.d>p>.wz33").html(eee);
			flss2=true;
		}
	})
//	ba
    var dddd=$(".sc8>.scc3>div>div>.d>p>.wz44").html();
	var eeee=parseFloat(dddd);
	$(".sc8>.scc3>div>div>.d>p>.shou44").click(function(){
		if(flss3){
			var ffff=eeee+1;
		    $(".sc8>.scc3>div>div>.d>p>.wz44").html(ffff);
		    flss3=false;
		}else{
			$(".sc8>.scc3>div>div>.d>p>.wz44").html(eeee);
			flss3=true;
		}
	})
	$(".sc8>.scc3>div>.jia").click(function(){
		$(".sc8>.scc3>div>.jia").hide();
		$(".sc8>.scc3>div>.yin").slideDown();
		$(".sc8>.scc3>div>.sou").show();
	})
	$(".sc8>.scc3>div>.sou").click(function(){
		$(".sc8>.scc3>div>.jia").show();
		$(".sc8>.scc3>div>.yin").slideUp();
		$(".sc8>.scc3>div>.sou").hide();
	})
})