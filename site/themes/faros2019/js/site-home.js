$(document).ready(function() {
  // $(".fadeIn").addClass("hide"),
  $("#hamburger-container--main button").click(function() {
      $(this).toggleClass("is-active"),
      $(".site-menu--main").toggleClass("open")
  }),
  $("#hamburger-container--mobile button").click(function() {
      $(this).toggleClass("is-active"),
      $(".site-menu--mobile").toggleClass("open")
  }),
  $(".donation--time").hover(function() {
      $(this).hasClass("hovered") ? $(".donation--money").removeClass("hovered") : ($(this).addClass("hovered"),
      $(".donation--money").removeClass("hovered"),
      $(".give-img").attr("src", "/site/themes/faros2019/assets/give-time.jpg"))
  }),
  $(".donation--money").hover(function() {
      $(this).hasClass("hovered") ? $(".donation--time").removeClass("hovered") : ($(this).addClass("hovered"),
      $(".donation--time").removeClass("hovered"),
      $(".give-img").attr("src", "/site/themes/faros2019/assets/give-money.jpg"))
  }),
  $(".site-menu--main svg a").click(function() {
      return window.location = $(this).attr("href"),
      !1
  }),
  // $(".home-section--main__a .content__title").each(function() {
  //     var e = $(this).html()
  //       , o = e.substr(0, e.indexOf(" "))
  //       , t = e.substr(e.indexOf(" "));
  //     $(this).html(t).prepend($("<div/>").html(o).addClass("break"))
  // }),
  $('a[href*="#"]').not('[href="#"]').not('[href="/"]').click(function(e) {
      if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
          var o = $(this.hash);
          o = o.length ? o : $("[name=" + this.hash.slice(1) + "]"),
          o.length && (e.preventDefault(),
          $("html, body").animate({
              scrollTop: o.offset().top
          }, 1e3, function() {
              var e = $(o);
              if (e.focus(),
              e.is(":focus"))
                  return !1;
              e.attr("tabindex", "-1"),
              e.focus()
          }))
      }
  })
}),
$(document).ready(function() {
  
  $(window).on("scroll", function() {
      var e = $(window).scrollTop() / ($("html").height() - $(window).height()) * 100;
      $("#farosDot").css("animation-delay", -e + "s")
  })
  
});
