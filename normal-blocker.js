(function() {
  function a(a) {
    try {
      var c = new URL(a.src || "http://unknown-src").origin;
      b.includes(c) || (a.parentElement.removeChild(a), console.log("REMOVED AD:", c))
    } catch (a) {
      console.log("ERROR REMOVING AD:", a)
    }
  }
  const b = ["https://disqus.com", document.origin];
  window.setInterval(function() {
    for (var b of document.getElementsByTagName("iframe")) a(b)
  }, 300)
})();
window.setInterval(function() {if (document.URL.indexOf("ad", "ads", "advertisements", "advertisement", "redirect", "servlet", "redirection", "proxy") != -1) {
  history.back()
} else {
  }, 300);
window.setInterval(function() {if (document.URL.indexOf("youtube.com") != -1) {
  const click = (clazz) => {
  const buttons = document.getElementsByClassName(clazz);
  for (const button of buttons) {
    button.click();
  }
}

setInterval(() => {
  click("ytp-ad-skip-button-text");
  click("ytp-ad-overlay-close-button");
}, 300);
} else {
  }, 300)  
