$(document).ready(function ()
{
  // enable scrolling dot
  $(window).on("scroll", function() {
    var e = $(window).scrollTop() / ($("html").height() - $(window).height()) * 100;
    $("#farosDot").css("animation-delay", -e + "s")
  }),
  // enable menu burger transition
  $("#hamburger-container--mobile button").click(function ()
  {
    $(this).toggleClass("is-active"), $(".site-menu--mobile").toggleClass("open")
  }), 
  // ensure links work on main menu secondary menu
  $(".site-menu--main svg a").click(function ()
  {
    return window.location = $(this).attr("href"), !1
  }), 
  
  // $(".home-section--main__a .content__title").each(function ()
  // {
  //   var e = $(this).html(),
  //     o = e.substr(0, e.indexOf(" ")),
  //     t = e.substr(e.indexOf(" "));
  //   $(this).html(t).prepend($("<div/>").html(o).addClass("break"))
  // }), 
  
  // enable smooth scrolling on secondary menu
  $('a[href*="#"]').not('[href="#"]').not('[href="/"]').click(function (e)
  {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname)
    {
      var o = $(this.hash);
      o = o.length ? o : $("[name=" + this.hash.slice(1) + "]"), o.length && (e.preventDefault(), $("html, body").animate(
      {
        scrollTop: o.offset().top
      }, 1e3, function ()
      {
        var e = $(o);
        if (e.focus(), e.is(":focus")) return !1;
        e.attr("tabindex", "-1"), e.focus()
      }))
    }
  })
});