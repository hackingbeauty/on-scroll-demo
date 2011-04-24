ScrollDemo = {
  init:function(){
    var elemId = document.getElementById('merchFooter');
    this.loadWhenViewable(elemId);
    console.log("viewPort height: " + this.vpHeight());
  },
  loadWhenViewable:function(elemId){ // source: http://www.dustindiaz.com/element-scroll-into-view/
    window.onscroll = function(){
      // Notes.  "document" is the JavaScript object that represents the container for all HTML HEAD and BODY object/
      //"documentElement" is a property on the "document" object that represents the root element a.k.a. the <html> tag
      // If the scrollLeft/Top properties are provided on either the document.body or document.documentElement, they are reliable in everything except older Safari and OmniWeb 4.5+, which return -8 if the scrolling is 0
      // reference => http://www.howtocreate.co.uk/tutorials/javascript/browserwindow
      var top = (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
      //console.log("offsetLeft: " + elemId.offsetLeft + " offsetTop: " + elemId.offsetTop);
      var vpH = ScrollDemo.vpHeight();
      var coverage = parseInt(vpH + top);
      //console.log("coverage is: " + coverage);
      if (coverage >= elemId.offsetTop){
        console.log("it is there!");
      }
    }//end window.onscroll
  },
  findPos:function(obj){ // source: http://www.quirksmode.org/js/findpos.html
    var curleft = curtop = 0;
    if (obj.offsetParent) {
      do {
        curleft += obj.offsetLeft;
       curtop += obj.offsetTop;
      } while (obj = obj.offsetParent);    
       return [curleft,curtop];
    }
  },
  vpHeight:function() { // source: http://javascript.about.com/od/browserobjectmodel/a/bom10.htm
    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  }
}

ScrollDemo.init();