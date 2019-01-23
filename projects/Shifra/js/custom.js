$(function(){
    var header = '<div class="container"><div class="nav-container"><a href="#"><img src="images/logo.png" class="logo" alt="shifraa"></a><div class="abs header-icon"><div class="search-div rel"><a class="search-icon" href="#"><img src="images/search-icon.png" alt="search-icon" style="width: 25px;"></a><div class="search abs"><form class="form"><input class="abs form-control col-sm-6" placeholder="Search Here"><a href="#" class="btn btn-default abs">Search</a></form></div></div><div class="notification-div rel"><a class="notification-icon" href="#" class=""><img src="images/bell-icon.png" alt="bell-icon" style="width: 22px;"></a><div class="abs notification"><span class="triangle"></span><div class="notification-header"><h3>Notification</h3></div><div class="notification-body"><div class="notification-item"><p>some text here<br>some text here<br>some text here<br>some text here</p></div><hr><div class="notification-item"><p>some text here<br>some text here<br>some text here<br>some text here</p></div><hr><div class="notification-item"><p>some text here<br>some text here<br>some text here<br>some text here</p></div><hr></div></div></div><a href="#"><img src="images/cart-icon.png" alt="cart-icon" style="width: 28px;"></a></div></div></div><nav class="navbar myNav"><div class="container"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"><ul class="nav navbar-nav navbar-center"><li class=""><a href="index.html">HOME<span class="sr-only">(current)</span></a></li><span style="color: white">|</span><li class="dropdown-list"><div class="dropdown"><a class="dropbtn">PEDIGREE</a><div class="dropdown-content"><a href="about-us.html">About Shifraa</a><a href="#">Vision &amp; Mission</a><a href="green-story.html">Green Story</a></div></div></li><span style="color: white">|</span><li class=""><a href="why-shifraa.html">WHY SHIFRAA?</a></li><span style="color: white">|</span><li class="dropdown-list"><div class="dropdown"><a id="products-btn" class="dropbtn" href="products.html">PRODUCTS</a><div id="products" class="dropdown-content"><a href="palazzos.html">Palazzos</a><a href="chudidar-legings.html">Chudidar Leggings</a><a href="#">Ankle Leggings</a><a href="#">Capris</a></div></div></li><span style="color: white">|</span><li><a href="contact-us.html" class="last-item">CONTACT US</a></li></ul></div></div></nav>';
    $('header').append(header);
    var width = 0;
        $('#products-btn, #products')
            .mouseover(function(){
                width = $('html')["0"].clientWidth;
                if(width <= 767){
                    $('.navbar-collapse').css('height','285px');
                }
            })
            .mouseout(function(){
                if(width <= 767){
                    $('.navbar-collapse').css('height','unset');
                }
            });

    $('body').click(function() {
        $('.notification').hide('500');
        $('.search').hide();
     }); 

     $('.notification-div').click(function(e){
        //  console.log(e);
         e.stopPropagation();
     });
    
     $('.notification-icon').click(function(e) {
         $('.notification').toggle({},500);
     });

    $('.search-div').click(function(e){
        e.stopPropagation();
    });

    $('.search-icon').click(function(e) {
        $('.search').toggle();
        $('.notification').hide('500');
    });;    

    change();
    $( window ).resize(function(){
        change();
    });

    function change(){    
        var w = $( window ).width();
        if(w <= 767){
            $('.up').attr('src','images/left-icon.png');
            $('.down').attr('src','images/right-icon.png');
        }
        else{
            $('.up').attr('src','images/up.png');
            $('.down').attr('src','images/down.png');
        }
    }    

    $('#zoom').click(function(){
        $('.product-img').addClass('product-img-zoom');
    })
    // $('.anim-slide > div').addClass('hero-heading'); 
});
