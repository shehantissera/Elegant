stylesheet='<link href="demo/demo.css" rel="stylesheet" type="text/css">'
$('head').append(stylesheet);

var isPanelOpended = false;
var switcher = '<div id="style-switcher"><div id="toggle-button" class="vc_main-color"><i class="icon-cogs"></i></div>';
switcher += '<h3 id="color-text" class="demo"><i class="icon-tint vc_main-color"></i> Colors</h3>';
switcher += '<ul class="color-list">';
switcher += '<li><a id="blue" href="javascript:;"></a></li>';
switcher += '<li><a id="green" href="javascript:;"></a></li>';
switcher += '<li><a id="red" href="javascript:;"></a></li>';
switcher += '<li><a id="orange" href="javascript:;"></a></li>';
switcher += '<li><a id="yellow" href="javascript:;"></a></li>';
switcher += '<li><a id="purple" href="javascript:;"></a></li>';
switcher += '</ul><div class="clearfix"></div><br/>';
switcher += '<h3 id="layout-text" class="demo"><i class="icon-tablet vc_main-color"></i> Layout</h3>';
switcher += '<ul id="page-type" class="text-type">';
switcher += '<li><a id="boxed" href="javascript:;">Boxed</a></li>';
switcher += '<li class="active"><a id="full"  href="javascript:;">Full</a></li>';
switcher += '</ul><div class="clearfix"></div><br/>';
switcher += '<h3 id="background-text" class="demo"><i class="icon-magic vc_main-color" ></i> Backgrounds</h3>';
switcher += '<ul id="bg-list">';
switcher += '<li><a id="bg1" href="javascript:;"><img src="img/pattern/pattern1.png" alt=""></a></li>';
switcher += '<li><a id="bg2" href="javascript:;"><img src="img/pattern/pattern2.png" alt=""></a></li>';
switcher += '<li><a id="bg3" href="javascript:;"><img src="img/pattern/pattern3.png" alt=""></a></li>';
switcher += '<li><a id="bg4" href="javascript:;"><img src="img/pattern/pattern4.png" alt=""></a></li>';
switcher += '<li><a id="bg5" href="javascript:;"><img src="img/pattern/pattern5.png" alt=""></a></li>';
switcher += '<li><a id="bg6" href="javascript:;"><img src="img/pattern/pattern6.png" alt=""></a></li>';
switcher += '<li><a id="bg7" href="javascript:;"><img src="img/pattern/pattern7.png" alt=""></a></li>';
switcher += '<li><a id="bg8" href="javascript:;"><img src="img/pattern/pattern8.png" alt=""></a></li>';
switcher += '<li><a id="bg9" href="javascript:;"><img src="img/pattern/pattern9.png" alt=""></a></li>';
switcher += '</ul><div class="clearfix"></div><br/>';
switcher += '<h3 id="design-text" class="demo"><i class="icon-beaker vc_main-color"></i> Design Mode</h3>';
switcher += '<ul id="design-type" class="text-type">';
switcher += '<li class="active"><a id="slash" href="javascript:;">Slash</a></li>';
switcher += '<li><a id="stylish"  href="javascript:;">Stylish</a></li>';
switcher += '</ul><div class="clearfix"></div><br/>';
switcher += '</div>';

$('body').append(switcher);
/*$('#style-switcher').stop().animate({
	left : '-300px'
}, 1000);*/
$('#toggle-button').click(function() {
    if (isPanelOpended) {
        isPanelOpended = false;
        $('#style-switcher').stop().animate({
            left : '-300px'
        }, 300)
    } else {
        isPanelOpended = true;
        $('#style-switcher').stop().animate({
            left : '0'
        }, 300)
    }
});

$('ul.color-list a').click(function() {
    var path = window.location.pathname;
    var link = 'css/color/color-' + $(this).attr('id') + '.css';
    if (path.indexOf('elements/') > 0) {
        link = '../css/color/color-' + $(this).attr('id') + '.css';
    }
	$('head #link-color').attr('href',link);
});

$('#bg-list li a').click(function() {
    if($(this).attr('id') != 'no-bg') {
        $('body').css('background', 'url(' + $(this).find('img').attr('src') + ')');
    } else {
        $('body').removeAttr('style');
    }
    
});
$('#page-type li a').click(function() {
	$(this).parent().siblings().removeClass('active');		
	$(this).parent().addClass('active');	
	
    if($(this).attr('id') == 'boxed') {
		$('body').addClass('boxed');
		$('body').removeClass('sticky-menu-active');
        $('body, header .logo img').removeAttr('style');	
//		$('#bg-list, #background-text').css('display','block');	
												
    } else {	
		$('body').removeClass('boxed');
//		$('#bg-list, #background-text').css('display','none');		
    }  
});
$('#design-type li a').click(function() {
    var path = window.location.pathname;
    var link = 'css/mode/mode-' + $(this).attr('id') + '.css';
    if (path.indexOf('elements/') > 0) {
        link = '../css/mode/mode-' + $(this).attr('id') + '.css';
    }
	$(this).parent().siblings().removeClass('active');		
	$(this).parent().addClass('active');	
	$('head #link-design').attr('href',link);
});