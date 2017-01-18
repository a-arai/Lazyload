var A_ARAI = A_ARAI || {};
A_ARAI.SAMPLE = {};


A_ARAI.SAMPLE.LAZYLOAD = {
	DURATION : 250,

	init: function() {
		this.bindEvent();
		this.loadImage();
	},
	setParameters : function(){
		this.windowTop = $(window).scrollTop();
		this.windowHeight = $(window).height();
		this.windowBottm = this.windowTop + this.windowHeight;
	},
	bindEvent: function() {
		$(window).on('resize scroll', $.proxy(this.loadImage, this));
	},
	loadImage : function(){
		var _self = this;
		this.setParameters();

		$('img').each(function(){
			var imgTopPosition = $(this).parent().offset().top,
			imgHeight = $(this).parent().height();

			if(_self.windowTop < imgTopPosition && _self.windowBottm > (imgTopPosition + imgHeight)) {
				if(!$(this).is(':visible')) {
					var imgUrl = $(this).attr('data-url');
					$(this).attr('src', '' + imgUrl + '')
					.animate({'opacity':'1'},700);
				}
			}
		});
	}
};
$(function(){
	A_ARAI.SAMPLE.LAZYLOAD.init();
});
