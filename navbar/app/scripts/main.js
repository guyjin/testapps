jQuery(document).ready(function($) {
	$navbar = new NavBar();
});

var NavBar = function(){
	var self = this;
	$('.topnavlink a').on('click',function(){
		$('.topnavlink a.open').removeClass('open');
		$(this).toggleClass('open')
		var target = $(this).attr('href');
		self.toggleDropMenu(target);
		return false;
	});

	self.toggleDropMenu = function(target) {
		$('.dropmenu:visible').each(function(i){
			if ($(this).attr('id') !== target) {
				$(this).hide();
			};
		});
		$('.dropmenu#' + target).slideToggle('fast');
	};
};

