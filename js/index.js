$(document).ready(function(){
	 var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    paginationClickable: true,
    autoplay : 2000,
 // 如果需要分页器
    pagination: '.swiper-pagination',
  });
	 
	    $(".catalogo").click(function(){
		   	$(".menu").slideToggle(function(){
		   		$(".menu>a").click(function(){
					$(".menu").find("a").removeClass("active");
					$(this).addClass("active");
				})
		   	 })  		
		}) 
})
