//add in the drop down menu in wordpress theme
jQuery(document).ready(function(){
  jQuery(" .menu > li").hover(function(){
    jQuery(this).find(".sub-menu").stop().slideToggle(200);
	   
	   //this is for only drop down of 1 level drop down
      jQuery(this).find(".sub-menu  .sub-menu > li").stop().slideToggle(200);
	  
	  jQuery(" #menu-item-163 ").hover(function(){
		  jQuery(this).find(".sub-menu li").stop().slideToggle(200,function(){
			  jQuery(".sub-menu").mouseout(function(){
				  jQuery(this).slideDown();
			  });
		  });
	  });
 });
});


//this is the code for pages part 

jQuery(document).ready(function(){
	jQuery("#menu-item-79").hover(function(){
			jQuery("#block1").css({
				'background':'red'
			});
		});
	jQuery("#menu-item-79").mouseout(function(){
		jQuery("#block1").css({
	      'background':'#fff'		
		});
	 });
});

