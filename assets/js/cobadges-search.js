$( document ).ready(function() {
    var bankdata = $(".list-cobadges__item");
    var banklist = [];

    bankdata.each(function(index, bank) {
        var bankProps = new Object();
        var $bankEl = $(bank).find('.list-cobadges__itemname')
        bankProps.abi = $bankEl.data('abi');
        bankProps.name = $bankEl.text();
        banklist.push (bankProps);
    })

    $("#banksearch").keyup(function(){
        var searchField = $(this).val();
        var regex = new RegExp(searchField, "i");
        var $empty = $('.list-cobadges__empty');
        bankdata.removeClass("d-none").removeClass('loaded');
        $empty.addClass("d-none");
        if (searchField.length < 3) {
            return;
        }
        
        var result = banklist.filter(function (el) {
            return regex.test(el.name);
          });

        if (result.length > 0) {
            bankdata.addClass("d-none");
            $empty.addClass("d-none");
        } else {
            $empty.removeClass("d-none");
            bankdata.addClass("d-none");
        };

        $(result).each(function(index, el) {
            $("." + el.abi).removeClass('d-none').addClass('loaded');
        });

    });
});