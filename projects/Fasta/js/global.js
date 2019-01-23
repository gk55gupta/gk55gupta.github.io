$(document).ready(function () {
    var footer_content = '<div style="background-color:  rgba(212, 212, 212, 0.9);height: 34px;"><div class="container rel"><a class="fixed chat" href="#" style="color:white;text-decoration: none;"><img src="assets/chat1600.png" alt="Chat" style="margin-right:10px;">CHAT WITH US</a></div></div><div class="container" style="padding-top:2%"><div class="row"><div class="col-sm-8" style="color:black;"><a href="#"><img src="assets/layer 3.png" alt="logo"></a><p style="margin-top:30px;">ADDRESS LINE 1</p><p>ADDRESS LINE 2</p><p style="margin-bottom:30px;">ADDRESS LINE 3</p><div style="color:black !important;"><a href="callto:04422651661" style="color:black !important;text-decoration:none;"><img style="margin-right:10px;" src="assets/call copy.png" alt="icon">044 22651661</a><span>,</span><a href="callto:8682911232" style="color:black !important;text-decoration:none;">8682911232</a></div></div><div class="col-sm-4"><h4 style="color:  #1a4ba2;font-size: 23.5px;font-weight: 400; margin-bottom:15px; margin-top:0;">We\'re Here</h4><div class="mapouter" style="margin-bottom: 10px; box-shadow: 0px 6px 14.88px 1.12px rgba(0, 0, 0, 0.18);"><div class="gmap_canvas"><iframe width="525" height="150" id="gmap_canvas" src="https://maps.google.com/maps?q=chromepet,+chennai&t=&z=9&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div></div></div><p class="cpyright">&copy;2017 All Rights Reserved</p></div>';
    var nav_content = '<div class="container"><!-- Brand and toggle get grouped for better mobile display --><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="index.html"><img class="logo" src="assets/Layer 8.png" alt="logo"></a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"><ul class="nav navbar-nav navbar-right"><li><a href="index.html" style="padding-left:0">HOME</a></li><li class="dropdown-list"><div class="dropdown"><button class="dropbtn">PRODUCTS<span class="caret"></span></button><div class="dropdown-content"><a href="frames.html">Frames</a><a href="lenses.html">Lenses</a><a href="contact-lenses.html">Contact Lenses</a><a href="sunglass.html">Sunglasses</a></div></div></li><li><a href="services.html">SERVICES</a></li><li><a href="#">GALLERY</a></li><li><a href="contact-us.html" style="padding-right:0">CONTACT US</a></li></ul></div></div>';
    var floating_nav_content = '<div class="floating-nav"><ul id="menu-floating-menu float-logo-donate-btn" class="menu" style="margin:0;padding:0;"><div class="container"><div class="donate-floating-section"><!--<li class="floating-logo"><a href="index.html" class="logo-floating"><img src="assets/Layer 8.png" class=""></a></li>--><li class="floating-navbar"><a href="#" class="shop-btn" id="appointment-btn">Book An Appointment</a><a class="contact-no" href="callto:04422651661"><img class="call-icon" src="assets/call.png" alt="icon" style="margin-left:30px;">044 22651661</a><span class="contact-no">, </span><a class="contact-no" href="callto:8682911232">8682911232</a></li></div></div></ul></div>';
    $('.navbar-default').append(nav_content);
    $('#floating-nav-content').append(floating_nav_content);
    $('footer').append(footer_content);
    
    
    $(document).scroll(function () {
        if ($(this).scrollTop() < 150) {
            $("#floating-nav-content").slideUp(400);
        } else if($(this).scrollTop() >= 150) {
            $("#floating-nav-content").slideDown(600);
        }
        else{

        }

    });
});
