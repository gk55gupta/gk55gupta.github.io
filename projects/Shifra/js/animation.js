$(".anim-slider").animateSlider(
    {
        // autoplay	:true,
        interval	:1000000000,
        animations 	: 
       {
           //0	: 	//Slide No1
//					{
//						h1	: 
//						{
//							show   	  : "bounceIn",
//							hide 	  : "flipOutX",
//							delayShow : "delay1s"
//	 					},
//	 					h2:
//	 					{
//	 						show 	  : "fadeInUpBig",
//							hide 	  : "fadeOutDownBig",
//							delayShow : "delay1-5s"
//	 					},
//	 					h3 	:
//	 					{
//							show   	  : "bounceInRight",
//							hide 	  : "fadeOutRightBig",
//							delayShow : "delay1-5s"
//	 					},
//	 					h4:
//	 					{
//	 						show 	  : "bounceInUp",
//							hide 	  : "fadeOutLeftBig",
//							delayShow : "delay2s"
//						}	
//					},
           0	: //Slide No2
           {	
               //"#todo":
//						{
//							show 		: "fadeIn",
//							hide 		: "fadeOut",
//							delayShow   : "delay1s"
//						},
               "#bounce" 	:
               {
                   show 	 	: "bounceIn",
                   hide 	 	: "bounceOut",
                   delayShow 	: "delay1s"
               },
               "#bounceUp":
               {
                   show 	 	: "bounceInDown",
                   hide 	 	: "bounceOutLeft",
                   delayShow 	: "delay2-5s"
               },
               "#bounceRight":
               {
                   show 	 	: "bounceInRight",
                   hide 	 	: "bounceOutRight",
                   delayShow 	: "delay2s"
               },
               //"#fade" :
//						{
//							show 	 	: "fadeInLeft",
//							hide 	 	: "fadeOutLeft",
//							delayShow 	: "delay3-5s"
//						},
//						"#fadeUp":
//						{
//							show 	 	: "fadeInUpBig",
//							hide 	 	: "fadeOutUpBig",
//							delayShow 	: "delay4s"
//						},
               "#fadeDown":
               {
                   show 	 	: "fadeInDownBig",
                   hide 	 	: "fadeOutDownBig",
                   delayShow 	: "delay2-5s"	
               },
               "#rotate" :
               {
                   show 	 	: "rotateIn",
                   hide 	 	: "rotateOut",
                   delayShow 	: "delay0-8s"
               }
//						"#rotateRight" :
//						{
//							show 	 	: "rotateInUpRight",
//							hide 	 	: "rotateOutDownRight",
//							delayShow 	: "delay6s"
//						},
//						"#rotateLeft" :
//						{
//							show 	 	: "rotateInUpLeft",
//							hide 	 	: "rotateOutDownLeft",
//							delayShow 	: "delay6-5s"
//						}
           },
           1	: //Slide No3
           {
//						"img#css3"	:
//						{
//							show 	  : "flipInY",
//							hide 	  : "flipOutY",
//							delayShow : "delay0-5s"
//						},
//						"img#html5"	:
//						{
//							show 	  : "flipInY",
//							hide 	  : "flipOutY",
//							delayShow : "delay0-5s"
//						},
//						"img#jquery"  :
//						{
//							show 	  : "bounceIn",
//							hide 	  : "flipOutY",
//							delayShow : "delay1-5s"
//						},
//						"img#modernizr" :
//						{
//							show 	  : "rollIn",
//							hide 	  : "flipOutY",
//							delayShow : "delay2s"
//						},
//						"#animatecss"	: 
//						{
//							show 	  : "lightSpeedIn",
//							hide 	  : "flipOutY",
//							delayShow : "delay2-5s"
//						}
               "#bounce2" 	:
               {
                   show 	 	: "bounceIn",
                   hide 	 	: "bounceOut",
                   delayShow 	: "delay1s"
               },
               "#bounceUp2":
               {
                   show 	 	: "bounceInDown",
                   hide 	 	: "bounceOutLeft",
                   delayShow 	: "delay2-5s"
               },
               "#bounceRight2":
               {
                   show 	 	: "bounceInRight",
                   hide 	 	: "bounceOutRight",
                   delayShow 	: "delay2s"
               },
               "#fadeDown2":
               {
                   show 	 	: "fadeInDownBig",
                   hide 	 	: "fadeOutDownBig",
                   delayShow 	: "delay2-5s"	
               },
               "#rotate2" :
               {
                   show 	 	: "rotateIn",
                   hide 	 	: "rotateOut",
                   delayShow 	: "delay0-8s"
               }

           },
           2	:
           {
               "#bounce3" 	:
               {
                   show 	 	: "bounceIn",
                   hide 	 	: "bounceOut",
                   delayShow 	: "delay1s"
               },
               "#bounceUp3":
               {
                   show 	 	: "bounceInDown",
                   hide 	 	: "bounceOutLeft",
                   delayShow 	: "delay2-5s"
               },
               "#bounceRight3":
               {
                   show 	 	: "bounceInRight",
                   hide 	 	: "bounceOutRight",
                   delayShow 	: "delay2s"
               },
               "#fadeDown3":
               {
                   show 	 	: "fadeInDownBig",
                   hide 	 	: "fadeOutDownBig",
                   delayShow 	: "delay2-5s"	
               },
               "#rotate3" :
               {
                   show 	 	: "rotateIn",
                   hide 	 	: "rotateOut",
                   delayShow 	: "delay0-8s"
               }	
           }
       }
    });