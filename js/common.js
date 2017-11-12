$(function(){
	var index=1;
	var flag=1;
	var LiBtn1=$('.buttons1 li');
	var LiBtn2=$('.buttons2 li');
	var oContainer = $('.rotation_up .win .container');
	var oContainer2 = $('.rotation_down .win2 .container2');
	var timer = null;

	$(".rotation_up,.rotation_down").hover(function() {
		$(this).find('.pre,.next').show();
	}, function() {
		$(this).find('.pre,.next').hide();
	});
	$('.pre,.next').hover(function() {
		$(this).css('opacity', '1');
	}, function() {
		$(this).css('opacity', '0.4');
	});
	// 箭头滚动
	//右箭头
	$(".rotation_up .next").click(function() {
		if (oContainer.is(':animated')) {
                    return;
                }
                if (index == 5) {
                    index = 1;
                }
                else {
                    index += 1;
                }
		animate(oContainer,-520);
		showButton();
	});
	$(".rotation_down .next").click(function() {
		if (oContainer2.is(':animated')) {
                    return;
                }
                if (flag == 5) {
                    flag = 1;
                }
                else {
                    flag += 1;
                }
		animate(oContainer2,-520);
		showButton2();
	});
	//左箭头
	$(".rotation_up .pre").click(function() {
			if (oContainer.is(':animated')) {
	                    return;
	                }
                if (index == 5) {
                    index = 1;
                }
                else {
                    index -= 1;
                }
		animate(oContainer,520);
		showButton();
	});
	$(".rotation_down .pre").click(function() {
		if (oContainer2.is(':animated')) {
                    return;
                }
                if (flag == 5) {
                    flag = 1;
                }
                else {
                    flag += 1;
                }
		animate(oContainer2,520);
		showButton2();
	});
	function animate(obj,phoW){
		var loc = obj.css('left');
		var loc =parseInt(loc)+phoW;
		obj.animate({left:'+='+phoW+'px'},500,function(){
		 	 if(loc > -200){
		 	obj.css('left','-2600px'); 
		 	}
			 if(loc < -2600 ){
		 	 // alert("!");
		 	obj.css('left','-520px');
			}
		 });
	}

	  function showButton() {
                LiBtn1.eq(index-1).addClass('active').siblings().removeClass('active');
            }
	function showButton2() {
                LiBtn2.eq(flag-1).addClass('active').siblings().removeClass('active');
            }
	LiBtn1.each(function() {
		$(this).bind('click',  function() {
			if(oContainer.is('animated')||$(this).attr('class')=='active'){
				return;
			}
			
			var NowIdex = parseInt($(this).attr('index'));
			var phoW = -520 * (NowIdex - index);
			console.log(NowIdex);
			animate(oContainer,phoW);
			
			index = NowIdex;
			showButton();
		});
	});
	var next1=$(".rotation_up .next");
	var next2=$(".rotation_down .next")
	function start(name,obj,time){
		name.timer = setInterval(function(){
			obj.trigger('click');
		},time);
	}
	function stop(name){
		clearTimeout(name.timer);
	}
	
	$(".rotation_up").hover(function(){
		stop(oContainer);
		},function(){ 
			start(oContainer,next1,3000)
		});
	start(oContainer,next1,3000);

	$(".rotation_down").hover(function(){
		stop(oContainer2);
		},function(){ 
			start(oContainer2,next2,2000)
		});
	start(oContainer2,next2,2000);

	/*浮动广告*/
	$(window).scroll(function(){  
	var scrollTop=$(document).scrollTop();
	var windowHeight=$(window).height();
	$('.adSideLeft').css('top', scrollTop+windowHeight-450+'px');
	});

	$('.adSideLeft ul li').first().css({
		'background': '#FF8916',
		'border-radius': '10px 10px 0 0 '
	});
	$('.adSideLeft ul li').last().css('border-radius','0 0 10px 10px');

	/*选项卡*/

	var p=$('.main .right .r2 p');
	var span=$('.main .right .r2 p span');
	span.mouseenter(function(event) {
		span.eq($(this).index()).addClass("on").siblings().removeClass('on');
		p.parent().find('div').hide().eq($(this).index()).show();
	});
	

});