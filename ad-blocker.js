(function(){
const exceptOrigins = [
  'https://disqus.com',
  document.origin
];
function remIF(e){
  try{
    var orgn = new URL(e.src || 'http://unknown-src').origin;
    if( ! exceptOrigins.includes(orgn)){
      e.parentElement.removeChild(e);
      console.log('REMOVE IFRAME',orgn);
    }
  } catch(err) {
    console.log('REMOVE ERROR',err);
  }
}
function remIFs(){
  for(var e of document.getElementsByTagName('iframe')){
    remIF(e);
  }
}
window.setInterval(remIFs,500);
})();
