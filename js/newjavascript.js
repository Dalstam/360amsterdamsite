$(function(){
           var scene =   $('a-scene');
            var sky = $('a-sky');
            var animat = $('a-animation');
            var n = 1;
            var nameImg = $("#imgName");
 
 
 
   if (scene.hasLoaded) {
                run();
            } else {
                scene.on("loaded", run);
            }
            
              function run() {

                     animat.on('animationend', function (e) {
                    console.log("animationend");
                    console.log("status voor = " + n);

                    switch (n) {
                        case 0:
                        sky.attr('easing', 'easeInOutSine')
                            sky.attr('src', '#img360');
                            nameImg.html('Baksels -ABSOLUTELY HOMEMADE');
                            n++;
                            break;
                        case 1:
                            sky.attr('easing', 'easeInOutSine');
                            sky.attr('src', '#img3601');
                            nameImg.html ( 'Gallerie Mokum');

                            n++;
                            break;
                        case 2:
                            sky.attr('src', '#img3602');
                            nameImg.html ('Pim Dekkers - Hoofdkantoor Zoover');
                            n++;
                            break;
                        case 3:
                            sky.attr('src', '#img3603');
                            nameImg.html( 'Voldamse Vishandel Dick Tol');
                            n++;
                            break;
                        case 4:
                            sky.attr('src', '#img3604');
                            nameImg.html('Lazangne');
                            n++;
                            break;
                        case 5:
                            sky.attr('src', ' #img3605');
                            nameImg.html('Wijnbar De Liefde');
                            n++;
                            break;
                        default:
                            sky.attr('src', 'img/header/header.jpg');
                            nameImg.html('artRoxy');
                            n = 0;
                    }

                    console.log("status na = " + n);
                    animat.start();
                }, false);

            }
});