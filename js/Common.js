$(function () {
  // $(".fixed").hide(); 사용안함
  // $(window).scroll(function () {
  //     // 2020-01-28 : 스크롤 체크 시작점 20으로 변경
  //     if ($(this).scrollTop() > 20) {
  //         $(".fixed").fadeIn();
  //         $(".service_gnb").addClass("fix");
  //     } else {
  //         $(".fixed").fadeOut();
  //         $(".service_gnb").removeClass("fix");
  //     }
  // });

  $(".btn_top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0
      },
      "fast"
    );
    return false;
  });
});
