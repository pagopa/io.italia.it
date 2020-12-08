if (window.location.hash=='#expanded') {
    document.body.classList.add("expanded");
  }

  var readers = document.getElementsByClassName('read-more');
  var showEl = function() {
      var morelabel = this.getAttribute("data-more");
      var eles = document.getElementsByClassName(morelabel);
      
      for (var i=0; i<eles.length; i++) {
          eles[i].style.display='block';
      }
      this.style.display='none';
  };
  
  for (var i = 0; i < readers.length; i++) {
      readers[i].addEventListener('click', showEl, false);
      
  }   