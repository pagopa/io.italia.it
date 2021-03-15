$(document).ready(function() {
    var itemselclass = ".card-selector-response__item";
    var $cardselectors = $('[data-card]');

    function toggleItems() {
        var selecting = "";
        var $cardsSelected = $cardselectors.filter(':checked');
        $(itemselclass).hide();
        $cardsSelected.each(function(index,el){
            selecting += '.'+el.getAttribute('data-card');
        });

        if (selecting!="" && $(itemselclass + selecting).length > 0) {
            $(itemselclass + selecting).fadeIn();
        }
        else if (selecting!="" && $(itemselclass + selecting).length == 0) {
            $(itemselclass+'.noresults').fadeIn();
        }
        else  {
            $(itemselclass+'.empty').fadeIn();
        }

    }

    $cardselectors.on('click', function (e) {
        var $this = $(this);
        var selected = this.checked;
        var selectedCard = $this.data('card');
        toggleItems()
    });
});
 