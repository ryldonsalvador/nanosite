var first;
var tab1Animation; 
var tab2Animation;
var tab3Animation; 
var video;

function initializeEnabler(){
	if (Enabler.isInitialized()) {
		onCreativeLoad();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT, onCreativeLoad);
	}
}    
function exit() {
    Enabler.exit('Background Click')
}

function onCreativeLoad() {
    gsap.set("#container", {display:"block"});
    gsap.set(".headline", {y: 50, opacity: 0});
    gsap.set(".sub_headline", {y: 50, opacity: 0});
    gsap.set(".intro_cta", {y: 50, opacity: 0});
    gsap.set(".intro_image", {scale:1.2});
    
    gsap.to(".intro_image", {duration: 1, scale:1, opacity:1})

    setTimeout(startAnimation,100);

    registerClicks();

    // setup tab 1
    gsap.set(".tab1_headline", {y: 10, opacity: 0});
    gsap.set(".tab1_sub_headline", {y: 10, opacity: 0});
    gsap.set(".tab1_headline_2", {y: 10, opacity: 0});
    gsap.set(".tab1_sub_headline_2", {y: 10, opacity: 0});
    gsap.set(".video_holder", {y: 10, opacity: 0});
    gsap.set(".end_cta", {y:100, opacity:0});

    // setup tab 2
    gsap.set(".tab2_headline", {y: 10, opacity: 0});
    gsap.set(".tab2_sub_headline", {opacity: 0});
    gsap.set(".tab2_ul", {opacity: 0});
    gsap.set(".tab2_quote", {opacity: 0});
    gsap.set(".end_cta_tab2", {y:100, opacity:0});

    // setup tab 3
    gsap.set(".tab3_headline", {y: 10, opacity: 0});
    gsap.set(".tab3_sub_headline", {opacity: 0});
    gsap.set(".line", {width:"0px"});
    gsap.set(".tab3_sub_headline_2", {y: 10, opacity: 0});
    gsap.set(".tab3_sub_headline_2_sub", {y: 10, opacity: 0});

    gsap.set(".line2", {width:"0px"});
    gsap.set(".tab3_sub_headline_3", {y: 10, opacity: 0});
    gsap.set(".tab3_sub_headline_3_sub", {y: 10, opacity: 0});

    gsap.set(".line3", {width:"0px"});
    gsap.set(".tab3_sub_headline_4", {y: 10, opacity: 0});
    gsap.set(".tab3_sub_headline_4_sub", {y: 10, opacity: 0});

}

function startAnimation(){
    var tl = gsap.timeline();

    tl.to(".headline", {y: 0, opacity: 1})
    .to(".sub_headline", {y: 0, opacity: 1})
    .to(".intro_cta", {y: 0, opacity: 1, display:"block"})
    .to(".intro_cta", {x: 10})
    .to(".intro_cta", {x: 0}, 2)

    video = $('#video1').get(0);
        
    Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
        studio.video.Reporter.attach('video_1', video);
    });
}

function registerClicks(){
    $('.intro_cta').click(function(){
        gsap.to(".intro_container", {duration: 1, x:-300})
        gsap.to(".end_container", {duration: 1, x:0})
        
        setTimeout(function(){
            startTabAnim(event, 'Tab1')    
            startTab1Animation();
        },800);

        gsap.to(".logo_holder", {y: -4, width:"125px", height:"23px"});
        gsap.to(".top_text", {y: -36, x:138});
    });
    $('#clickthru0').click(function(){
        Enabler.exit('Background Click', 'https://am.vontobel.com/en/active-investing');
    });
    $('#clickthru1').click(function(){
        Enabler.exit('Background Click', 'https://am.vontobel.com/en/active-investing');
    });
    $('#clickthru2').click(function(){
        Enabler.exit('Background Click', 'https://am.vontobel.com/en/active-investing');
    });
    $('#clickthru3').click(function(){
        Enabler.exit('Background Click', 'https://am.vontobel.com/en/active-investing');
    });
    $('#clickthru4').click(function(){
        Enabler.exit('Background Click', 'https://am.vontobel.com/en/active-investing');
    });

    $('.end_cta').click(function(){
        Enabler.exit('CTA Click', 'https://am.vontobel.com/en/active-investing');
    });

    $('.end_cta_tab2').click(function(){
        Enabler.exit('CTA Click', 'https://am.vontobel.com/en/active-investing');
    });

    $('.intro_cta').click(function(){
        Enabler.counter('Click to see more');
    });
}

function startTabAnim(evt, tabName){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }  
    document.getElementById(tabName).style.display = "block";
}
function openCity(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }   
    evt.currentTarget.className += " active";
    document.getElementById(tabName).style.display = "block";

    if(tabName == 'Tab1'){
        // gsap.set(".end_cta", {display:"block"});
        startTab1Animation();
        Enabler.counter('Tab 1',true);
    }else if(tabName == 'Tab2'){
        if($('#video1').get(0).paused == false){
            $('#video1').get(0).pause()
        }
        startTab2Animation();
        Enabler.counter('Tab 2',true);
        // gsap.set(".end_cta", {display:"block"});
    }else if(tabName == 'Tab3'){
        if($('#video1').get(0).paused == false){
            $('#video1').get(0).pause()
        }
        startTab3Animation();
        Enabler.counter('Tab 3',true);
    }

}

function startTab1Animation(){
    tab1Animation = gsap.timeline();

    tab1Animation.to(".tab1_headline", {y: 0, opacity: 1})
    .to(".tab1_sub_headline", {y: 0, opacity: 1})
    .to(".tab1_headline_2", {y: 0, opacity: 1})
    .to(".tab1_sub_headline_2", {y: 0, opacity: 1})
    .to(".video_holder", {y: 0, opacity: 1})
    .to(".end_cta", {y: 0, opacity: 1})
}

function startTab2Animation(){
    tab2Animation = gsap.timeline();

    tab2Animation.to(".tab2_headline", {y:0, opacity:1})
    .to(".tab2_sub_headline", {y: 0, opacity: 1})
    .to(".tab2_ul", {opacity: 1})
    .to(".tab2_quote", {opacity: 1})
    .to(".end_cta_tab2", {y: 0, opacity: 1, display:"block"})
}   

function startTab3Animation(){
    tab3Animation = gsap.timeline();

    tab3Animation.to(".tab3_headline", {y:0, opacity:1})
    .to(".tab3_headline", {y: 0, opacity: 1})
    .to(".tab3_sub_headline", {opacity: 1})
    .to(".line", {width:"50px"})
    .to(".tab3_sub_headline_2", {y: 0, opacity: 1})
    .to(".tab3_sub_headline_2_sub", {y: 0, opacity: 1})

    .to(".line2", {width:"50px"})
    .to(".tab3_sub_headline_3", {y: 0, opacity: 1})
    .to(".tab3_sub_headline_3_sub", {y: 0, opacity: 1})

    .to(".line3", {width:"50px"})
    .to(".tab3_sub_headline_4", {y: 0, opacity: 1})
    .to(".tab3_sub_headline_4_sub", {y: 0, opacity: 1})

}   

window.onload = initializeEnabler();
