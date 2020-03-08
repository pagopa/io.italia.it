function getHash() {
    var hash = window.location.hash;
    return hash.substring(1); 
  }
$(document).ready(function() {
    var accordionNumber = getHash();
    var $accordionBtn = $("button[data-nfaq='"+accordionNumber+"']");
    if (accordionNumber!='' && $accordionBtn) {
        $accordionBtn.trigger('click');
    }
});