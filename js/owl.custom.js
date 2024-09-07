
 $(document).ready(function(){
     $('.owl-banner').owlCarousel({
        loop:true,
        // autoplay:true,
        // autoplayTimeout:5000,
        dots:false,
        margin:27,
        responsive:{

           0:{
                items:1
            },

           480:{
                items:1
            },

            640:{
                items:1
            },

            990:{
                items:1
            },

            1140:{
                items:1
            }
        }
    });
    $('.owl-one').owlCarousel({
        loop:true, 
        margin:27,
        responsive:{

           0:{
                items:1
            },

           480:{
                items:1
            },

            640:{
                items:2
            },

            990:{
                items:3
            },

            1140:{
                items:4
            }
        }
    });

    $('.owl-two').owlCarousel({
        loop:true,
		autoplay:true,
        margin:30,
        responsive:{
           0:{
                items:1
            },

            480:{
                items:1
            },
            640:{
               items:2
            },
            800:{
                items:3
            },

            1140:{
                items:3
            }
        }
    });

    $('.owl-three').owlCarousel({
		autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        loop:true,
        nav: true,
        margin:20,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive:{
           0:{
                items:2
            },

            400:{
                items:2
            },

            640:{
                items:4
            },

            800:{
                items:5
            },
            1000:{
                items:6
            }
        }
    });

     $('.owl-four').owlCarousel({
        loop:true,
        margin:28,
        responsive:{
           0:{
                items:1
            },

           480:{
                items:1
            },

            640:{
                items:1
            },

            768:{
                items:2
            },

            990:{
                items:2
            },

            1140:{
                items:2
            }
        }
    });

     $('.owl-five').owlCarousel({
		 autoplay:true,
		 autoplayTimeout:5000,
		 autoplayHoverPause:true,
        loop:true,
        margin:30,
        responsive:{
           0:{
                items:1
            },

          
            480:{
                items:1
            },


            640:{
                items:2
            },
            768:{
                items:2
            },

            1140:{
                items:3
            }
        }
    });
   
});

 $('.owl-six').owlCarousel({
        loop:true,
        margin:20,
        responsive:{
           0:{
                items:1
            },

            400:{
                items:2
            },

            640:{
                items:4
            },

            800:{
                items:4
            },
            1000:{
                items:5
            }
        }
    });


  $('.owl-seven').owlCarousel({
        loop:true,
        margin:0,
        responsive:{
            320:{
                items:1
            }
            ,
           1000:{
                items:1
            }
        }
    });


  $('.owl-main').owlCarousel({
        loop:true,
        margin:0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay:true,
        autoplayTimeout:7000,
        autoplayHoverPause:false,
        responsive:{
            320:{
                items:1
            }
            ,
           1920:{
                items:1
            }
        }
    });



  $('.owl-preview').owlCarousel({
        loop:true,
        margin:0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay:true,
        autoplayTimeout:7000,
        autoplayHoverPause:false,
        responsive:{
            320:{
                items:1
            }
            ,
           1920:{
                items:1
            }
        }
    });


    $('.owl-twiter').owlCarousel({
		autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        loop:true,
        margin:15,
        responsive:{
           0:{
                items:1
            },

            400:{
                items:2
            },

            640:{
                items:3
            },

            800:{
                items:4
            },
            1000:{
                items:4
            }
        }
    });
  