function getHash() {
    let hash = window.location.hash;
    return hash.substring(1); 
  }
$(function () {
    let accordionNumber = getHash();
    let $accordionBtn = $("#accordio"+accordionNumber);
    if (accordionNumber!='' && $accordionBtn) {
      $accordionBtn.collapse('show');
    }
    $("*[data-parent='#accordionDivFAQ']").on('show.bs.collapse', function () {
      let idToHash = $(this).attr('id');
      idToHash = idToHash.replace('accordion','n');
      window.history.replaceState(null,null,'#'+idToHash);
    })
    
});