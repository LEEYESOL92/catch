$(function () {
  // gnb scroll top fix
  $(".corpwrap")
    .find("#corpGnB")
    .each(function () {
      var contArea = $("#corpGnB").offset().top;
      $(window).scroll(function () {
        if ($(window).scrollTop() >= contArea) {
          $("#corpGnB").addClass("gnbTopFix");
        } else {
          $("#corpGnB").removeClass("gnbTopFix");
        }
      });
    });

  $(".tooltip1 .txt").mouseenter(function () {
    $(this).next().show();
  });
  $(".tooltip1 .txt").mouseleave(function () {
    $(this).next().hide();
  });

  $(".tooltip2 .tool_btn").mouseenter(function () {
    $(this).next().show();
  });
  $(".tooltip2 .tool_btn").mouseleave(function () {
    $(this).next().hide();
  });

  // resize load 될때 컨텐츠 높이 화면 맞춤
  autoContentHeight();
  $(window).resize(function () {
    autoContentHeight();
  });
});

// 컨텐츠 높이 화면 맞춤
function autoContentHeight() {
  var auto_cht;
  var headerht = $("#corpTop").outerHeight() + $("#corpGnB").outerHeight();
  var footerht = $(".crop_footer").outerHeight();

  if ($(".settle_cont .inner").length) {
    auto_cht = $(window).height() - headerht - footerht - 166;
    $(".settle_cont .inner").css("min-height", auto_cht);
  } else if ($(".applicant_cont > .inner").length) {
    auto_cht = $(window).height() - headerht - footerht - 135;
    $(".applicant_cont > .inner").css("min-height", auto_cht);
  } else if ($(".cscenter .inner").length) {
    auto_cht = $(window).height() - headerht - footerht - 135;
    $(".cscenter .inner").css("min-height", auto_cht);
  }
}
