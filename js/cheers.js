$(function(){
    // 初始隱藏找店、優惠板塊
    $(".coupon_list").hide();
    $(".shop_list").hide();
    $(".list_menu span").click(function(){
        $(".list_menu span").removeClass("selected_menu");
        $(this).addClass("selected_menu");
        $(".article_list,.shop_list,.coupon_list").hide();
        var showList = $(this).attr("id") + "list";
        $("."+showList).show();
    })


    // 手机-menu
    $(".mobile_menu li").click(function(){
        $(".article_list,.shop_list,.coupon_list").hide();
        var showList = $(this).attr("id") + "_list";
        $("."+showList).show();
        $(".mobile_menu").hide();
    })
    // 点击-moblie-menu
    $(".menu_mo img").click(function(e){
        e.stopPropagation(); //阻止冒泡事件向上
        $('.mobile_menu').slideToggle();
    })
    $(window).scroll(function(){
        $('.mobile_menu').fadeOut();
    });
    $(window).click(function(){
        $('.mobile_menu').fadeOut();
    });
    


})


var mySwiper = new Swiper('#home_banner', {
    loop: true, // 循环模式选项
    autoplay: {
        delay: 20000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    speed:  500,
    fade: {
        crossFade: true,
    },
    // 如果需要前进后退按钮
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
})


// 判断是否移动端
var u = navigator.userAgent;
var page_height = document.documentElement.clientHeight;
if (u.indexOf("Android")>-1 || u.indexOf("iPhone")>-1 || u.indexOf('Linux') > -1) {  //移动端(iPad处外)
    // 測試-改變找店的導航欄
    $(".shop_nav").attr("id","shop_menu");
    $(".shop_nav").addClass("swiper-container");
    $(".shop_menu").addClass("swiper-wrapper");
    $(".shop_menu").removeClass("shop_pc");
    $(".shop_menu div").addClass("swiper-slide");

    // 找店-導航
    var mySwiper2 = new Swiper('#shop_menu', {
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        slidesPerView: 6,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

}else{

}



// 定位
function getLocation(){
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showPosition,showError);
	}else{
		alert("浏览器不支持地理定位。");
	}
}
function showPosition(position){
	$("#latlon").html("纬度:"+position.coords.latitude +'，经度:'+ position.coords.longitude);

}

function showError(error){
	switch(error.code) {
		case error.PERMISSION_DENIED:
			alert("定位失败,用户拒绝请求地理定位");
			break;
		case error.POSITION_UNAVAILABLE:
			alert("定位失败,位置信息是不可用");
			break;
		case error.TIMEOUT:
			alert("定位失败,请求获取用户位置超时");
			break;
		case error.UNKNOWN_ERROR:
			alert("定位失败,定位系统失效");
			break;
    }
}

//解析url路径,获取参数
    function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}