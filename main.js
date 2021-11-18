function fireClickEvent(element) {
    var evt = new window.MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    element.dispatchEvent(evt);
  }
  
  function openurl(url, newtab = false) {
    var a = document.createElement("a");
    if (newtab) {
      a.target = "_blank";
    }
    a.href = url;
    fireClickEvent(a);
  }