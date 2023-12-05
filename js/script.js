// Menu Toggle /////////////////////////////////////////////////////////////

const breakPoint = 768;

$(function (){

  ShowAndHide( $(window).width() );

  $('#menuButton a').on('click', function () {
    $('#menuList').slideToggle(500);
    console.log('ok');
  });

  $(window).resize(function(){
    ShowAndHide( $(window).width() );
  });

});

// Smooth Scrool /////////////////////////////////////////////////////////////

$(function (){

   // Smooth Scroll
   $('a[href^="#"]').click(function() {

      // スクロールの速度(ms)
      var speed = 500;

      // アンカーを取得
      var anchor = $(this).attr("href");

      // ターゲットの位置を取得
      var target = $(anchor == "#" || anchor == "" ? 'html' : anchor);
      var position = target.offset().top　-80;

      // スクロール（アニメーション）
      $('body,html').animate({scrollTop:position}, speed, 'swing');

      return false;

   });


   $(".openbtn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  });
  
  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
      $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
  });


  $(window).on('resize', function(){
    var windowSize = $(window).width();
    $("#g-nav").removeClass
  });

});

