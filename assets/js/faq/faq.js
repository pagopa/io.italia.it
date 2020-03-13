function getHash() {
    var hash = window.location.hash;
    return hash.substring(1); 
  }
$(document).ready(function() {
    var accordionNumber = getHash();
    var $accordionBtn = $("button[data-nfaq='"+accordionNumber+"']");
    if (accordionNumber!='' && $accordionBtn) {
        var offset =  $accordionBtn.offset();
        $accordionBtn.trigger('click');
        window.scroll({
            top: offset.top - 220, 
            left: 0, 
            behavior: 'smooth'
          });
    }
    
});