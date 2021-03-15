function wrap_marquee() {
  console.log(
    "おかしくなりました。一応reset()を実行するか。リロードすると戻ります。"
  );
  $("body").wrap('<marquee behavior="alternate">');
  $("header").wrap('<marquee direction="right" behavior="alternate">');
  $("footer").wrap('<marquee direction="right" behavior="alternate">');
  $("h2").wrap('<marquee direction="down" behavior="alternate">');
  $("p").wrap('<marquee direction="down" behavior="alternate">');
  $(".home-main").wrap(
    '<marquee direction="right" scrolldelay="500" behavior="alternate">'
  );
}
function reset() {
  location.reload();
}
