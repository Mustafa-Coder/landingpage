$(() => {
   // When click on search btn show search field 
   $(".btnSearch").on("click",function(){
      const FieldSearch = $(".pagesLinks  .form-control");
      // Active btn 
      $(this).toggleClass("active");
      // show field 
      FieldSearch.toggleClass("activeSearch");
   });
   // scrolling 
   $(window).scroll(() => {
      const scroll = $(window).scrollTop();
      // console.log(scroll);
      // nav 
      if(scroll >= 20){
         $(".naving").addClass("activenav");
      } else {
         $(".naving").removeClass("activenav");
      }
      if (scroll >= 300) {
         $(".aboutSection").addClass("activeElements")
      }
      if (scroll >= 1076) {
         $(".portfolioSection").addClass("activeElements")
      }
   
   });
   // navbar mobile show 
   $(".menuBtn").on("click",function(){
      $(".menuMobile").toggleClass("activemobile");
   });
   $(".Mclose").on("click",function(){
      $(".menuMobile").removeClass("activemobile");
   });


   // history 
   let boxs = $(".box"); 
   for (let box = 0; box < boxs.length; box++) {
      $(".box").eq(box).on("click",function(){
         $(".box").removeClass("activeBox");
         $(this).toggleClass("activeBox");
         $(".boxinfo").removeClass("show");
         $(".box .boxinfo").eq(box).addClass("show")
      }); 
      // leave
      $(".box").eq(box).on("mouseleave",function(){
         $(".box").removeClass("activeBox");
         $(".boxinfo").removeClass("show");
      }); 
   }

   // activites 
   const activites = $(".actinews"),
         lists = $(".lists_activites > span");

   for (let list = 0; list < lists.length; list++) {
         lists.eq(list).on("click",function(){
            // active 
            $(lists).removeClass("activeList");
            $(this).addClass("activeList");
            let items = $(this).eq(0).attr("data-item");
            activites.not('.'+items).removeClass("showActivites");
            activites.filter('.'+items).addClass('showActivites');
         });
   }

    // enteriment 
    const enteriment = $(".enteriment"),
    lists_enteriment = $(".lists_enteriment > span");

for (let list = 0; list < lists_enteriment.length; list++) {
   lists_enteriment.eq(list).on("click",function(){
       // active 
       $(lists_enteriment).removeClass("activeList");
       $(this).addClass("activeList");
       let items = $(this).eq(0).attr("data-item");
       enteriment.not('.'+items).removeClass("showActivites");
       enteriment.filter('.'+items).addClass('showActivites');
    });
}

   // news & articles 
   let news = $(".box-article"),
       models = $(".models");
   for (let n = 0; n < news.length; n++) {
      news.eq(n).on("click",function(){
         // active 
         let items = $(this).eq(0).attr("data-news");
         models.not('.'+items).removeClass("activenews");
         models.filter('.'+items).addClass('activenews');
      });
   }

   // remove models 
   $(".time").on("click",function () {
      $(".model-new1").removeClass("activenews");
      $(".model-new2").removeClass("activenews");
      $(".model-new3").removeClass("activenews");
      $(".model-new4").removeClass("activenews");
      $(".model-new5").removeClass("activenews");
      $(".model-new6").removeClass("activenews");
      $(".model-new7").removeClass("activenews");
      $(".model-new8").removeClass("activenews");
      $(".model-new8plus").removeClass("activenews");
      $(".model-new9").removeClass("activenews");
      $(".model-new10").removeClass("activenews");
      $(".model-new11").removeClass("activenews");
      $(".model-new12").removeClass("activenews");
      $(".model-new13").removeClass("activenews");
      $(".model-new14").removeClass("activenews");
      // alemeria news 
      $(".arnews1").removeClass("activenews");
      $(".arnews2").removeClass("activenews");
      $(".arnews3").removeClass("activenews");
      $(".arnews4").removeClass("activenews");
      $(".arnews5").removeClass("activenews");
      $(".kora")[0].pause();
      $(".koranews")[0].pause();
      $(".turkinew")[0].pause();
   });

   // play video news alemria 
   $(".boxvideo").on("click",function () {
        $(".kora")[0].play()
   });
   $(".boxvideo1").on("click",function () {
      $(".koranews")[0].play();
   });

   // play video news turki
   $(".boxvideoarticle").on("click",function () {
      $(".turkinew")[0].play();
   });
   
   
   // active match list 
   let slideBtn = $(".slideBtn");
   slideBtn.on("click",function () {
         $(".stepone").removeClass("activematch");
         $(".stepone").addClass("unactivematch");
         $(".steptwo").addClass("activematch");
         $(".steptwo").removeClass("unactivematch");
   });

   // left navbar  navmobileactive
   $(".menu").on("click",function(){
      $(".navmobile").toggleClass("navmobileactive");
      $(".naving").toggleClass("sizeingnav");
   });

   // nav scrolling smoth 
   $('.navmobile ul li a').click(function(e) {
      // get target href    
      let targetHref = $(this).attr('href');
      
      $('html, body').animate({
         scrollTop: $(targetHref).offset().top
      }, 2000);
     e.preventDefault();
   });
   
   // btn scroll down 
   $(".btnscollingdown").on("click",function(e){
      const page = $(this).attr("data-scroll");
      $("html,body").animate({
         scrollTop: $(page).offset().top = "813"
      },1000);
      e.preventDefault();
   });

   // btn scroll up 
   $(".btnscollingup").on("click",function(e){
      const page = $(this).attr("data-scroll");
      $("html,body").animate({
         scrollTop: $(page).offset().top 
      },1000);
      e.preventDefault();
   });
   
   // loading page screen 
   $(window).on("load",function(){
      $(".loading").fadeOut('3000');
   });
   
});