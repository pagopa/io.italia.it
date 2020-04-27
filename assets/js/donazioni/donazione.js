const elToStick = '.donazione-detail__colwrapper';
let sb = stickybits(elToStick, {useStickyClasses: true, stickyBitStickyOffset:80});
let sbManaged = true;
let elpaymentform = document.getElementById("paymentform");

// Grazie div
if (window.location.hash && window.location.hash=='#grazie') {
    let donor_name_placeholder = document.getElementById("donor_name");
    if(sessionStorage) {
        let donor_name = sessionStorage.getItem("donor_name");
        donor_name_placeholder.textContent = donor_name;
    }
    
    document.body.classList.add("grazie");
}

// test if an element is in viewport
function isElementInViewport(el) {
    let top = el.offsetTop;
    let left = el.offsetLeft;
    let width = el.offsetWidth;
    let height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
}

// test if paymentform is in the viewport
function paymentFormInViewport(el) {
    if (isElementInViewport(el)==true) {
        document.body.setAttribute('data-pfvisible','1');
        document.querySelector(elToStick).classList.remove('slide-in');
        document.querySelector(elToStick).classList.add('slide-out');
    } else {
        document.body.removeAttribute('data-pfvisible');
        document.querySelector(elToStick).classList.remove('slide-out');
        document.querySelector(elToStick).classList.add('slide-in');
    }
}

// let's sticky an element
function stick () {
  if (window.innerWidth < 992){
    if (sbManaged) {
      sb.cleanup();
      document.querySelector(elToStick).classList.remove('js-is-sticky--change');
      document.querySelector(elToStick).classList.add('slide-in');
    }
    sbManaged = false;
  }
  else {
    if (!sbManaged) {
      sb = stickybits(elToStick, {useStickyClasses: true, stickyBitStickyOffset:80});
      document.querySelector(elToStick).classList.remove('slide-in');
      document.querySelector(elToStick).classList.remove('slide-out');
      
    }
    sbManaged = true;
  }
}

// copy value js
function copyInClipboard(id, message) {
    let copyText = document.getElementById(id);
    let messageText = document.getElementById(message);
  
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    document.execCommand("copy");
    
    if (messageText!==undefined) {
        messageText.classList.remove('d-none');
    }

  }

// resize listner
window.addEventListener('resize', () => {
  stick();

})
// scroll listner
window.addEventListener('scroll', () => {
  paymentFormInViewport(elpaymentform);
 }, true);

stick();
paymentFormInViewport(elpaymentform);

//PAYMENT FORM
$(function () {
    // FIELDS
    const $choice = $('#choice');
    const $amount = $('#amount');
    const $perimpresa = $('#perimpresa');
    const $nome = $('#nome');
    const $cognome = $('#cognome');
    const $ragsociale = $('#ragsociale');
    const $email = $('#email');
    const $cf = $('#cf');
    const $privacypol = $('#privacypol');
    const $nonmostrare = $('#nonmostrare');
    const $paymentform = $('#paymentform');
    const $paymentformerror = $(".error[for='paymentform']");
    const $invoiceType = $('#invoiceType');
    const $unitaBeneficiaria = $('#unitaBeneficiaria');
    const $tributo = $('#tributo');
    const serviceUrl = "https://solutionpa-coll.intesasanpaolo.com/IntermediarioPARestServer/services/netapay/activePayment";
    const authCode = "cHRfYXNhbDokUDRnMHB0NHM0MTY2IQ==";

    function formatDateAsExpected(date) {
        let year = date.getFullYear();
        let month = ("0" + (date.getMonth() + 1)).slice(-2); // to avoid months with one digit...
        let day = ("0" + date.getDate()).slice(-2); // to avoid days with one digit...
        return day + "/" + month + "/" + year + " " + date.toLocaleTimeString();
    }

    function sendData() {
        let dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 1);
        let impresa = $perimpresa.is(":checked") ? true : false;
        let callbackURL = window.location.origin + window.location.pathname + "#grazie";
        let totAmount = parseInt($amount.val()) * 100; // pagopa process an amount by cents
        let clientFiscalID = $cf.val();
        let email = $email.val();
        let clientDescription = impresa==true ? $nome.val() +" "+ $cognome.val() : $ragsociale.val();
        let invoiceType = $invoiceType.val() ? $invoiceType.val() : document.title;
        let unitaBeneficiaria = $unitaBeneficiaria.val();
        let tributo = $tributo.val();
        let clientType = $nonmostrare.is(":checked") ? 'A' : 'F';

        let data = {
            "callbackURL": callbackURL,
            "sessionID": "111",
            "domainId": "15376371009",
            "unitaBeneficiaria": unitaBeneficiaria,
            "tributo": tributo,
            "activePaymentList":[{
                                    "paymentId": 1,
                                    "totAmount": totAmount,
                                    "invoiceType": invoiceType,
                                    "dueDate": formatDateAsExpected(dueDate),
                                    "clientType": clientType,
                                    "clientDescription": clientDescription,
                                    "clientFiscalID": clientFiscalID,
                                    "email" : email
                                    }
                                 ]
           };

        $.ajax({
            url: serviceUrl,
            dataType: 'json',
            method: 'POST',
            crossDomain: true,
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data),
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + authCode );
            },
            success: function( data, textStatus, jQxhr ){
                $paymentform.removeClass('loading');
                if (data.result == 'OK') {
                    if(sessionStorage) {
                        // Store sessionstorage
                        sessionStorage.setItem("donor_name", $nome.val());
                    }
                    window.location.href = data.redirectURL;
                } else {
                    $paymentformerror.text('Il server di pagamento ha riscontrato problemi, riprovare più tardi');
                    $paymentformerror.show();
                }
            },
            error: function( jqXhr, textStatus, errorThrown ){
                $paymentform.removeClass('loading');
                $paymentformerror.text('Problemi di connessione con il server di pagamento, riprovare più tardi.');
                $paymentformerror.show();
            }
        });
    }
    
    $('.donazione-detail__colwrapper .donazione-detail__btn').click(function(e) {
        e.preventDefault();
        let valsel = $(this).data('value');
        $('.donazione-detail__btn[data-value="'+ $(this).data('value') +'"]').addClass('active');
        $('.donazione-detail__btn[data-value="'+ $(this).data('value') +'"]').siblings().removeClass('active');
        $choice.val( $(this).data('value') );
        $amount.val( $(this).data('value') );
    });

    $('#paymentform .donazione-detail__btn').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.donazione-detail__btn').removeClass('active');
        $('.donazione-detail__btn[data-value="'+ $(this).data('value') +'"]').addClass('active');
        $choice.val( $(this).data('value') );
        $amount.val( $(this).data('value') );
        $nome.focus();
    });

    $('.donazione-detail__sceglitu').click(function(e) {
        $choice.focus();
    });

    $('[data-toggle]').click(function(e){
        let toToggle = $(this).data('toggle');
        $('.'+toToggle).toggleClass('d-none');
    });


    function onChoice() {
        let currVal = $(this).val();
        $('.donazione-detail__btn').removeClass('active');
        $amount.val( currVal );
        $('.donazione-detail__btn[data-value="'+currVal+'"]').addClass('active');
    }

    function resetVal() {
        $('.error').attr('style','');
        $('.inputerror').removeClass('inputerror');
    }

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function validateCF(cf) {
        var re = /^[a-zA-Z]{6}[0-9]{2}[a-zA-Z][0-9]{2}[a-zA-Z][0-9]{3}[a-zA-Z]$/;
        return re.test(String(cf).toLowerCase());
    }

    function checkVal() {
        
        let amount = parseInt($amount.val());
        let nome = $nome.val();
        let cognome = $cognome.val();
        let ragsociale = $ragsociale.val();
        let email = $email.val();
        let cf = $cf.val();
        let errors = false;
        let impresa = $perimpresa.is(":checked") ? true : false

        if (amount < 1 || Number.isNaN(amount) || typeof(amount) !=='number') {
            $choice.addClass('inputerror');
            $(".error[for='" + $choice.attr('id') +"']").show();
            errors = true;
        }

        if (impresa==false && (nome.length < 1 || cognome.length < 1)) {
            $nome.addClass('inputerror');
            $cognome.addClass('inputerror');
            $(".error[for='" + $nome.attr('id') +"']").show();
            errors = true;
        } else if (impresa==true && ragsociale.length<1) {
            $ragsociale.addClass('inputerror');
            $(".error[for='" + $ragsociale.attr('id') +"']").show();
            errors = true;
        }

        if (validateEmail(email)==false) {
            $email.addClass('inputerror');
            $(".error[for='" + $email.attr('id') +"']").show();
            errors = true;
        }

        if (validateCF(cf)==false) {
            $cf.addClass('inputerror');
            $(".error[for='" + $cf.attr('id') +"']").show();
            errors = true;
        }

        if ($privacypol.is(":checked")==false) {
            $privacypol.addClass('inputerror');
            $(".error[for='" + $privacypol.attr('id') +"']").show();
            errors = true;
        }

        return errors;
    }

    $choice.on('keyup', onChoice);
    
    $paymentform.on('submit', function(e) {
        e.preventDefault();
        resetVal();
        
        if (checkVal()==false) {
            $paymentform.addClass('loading');
            sendData($paymentform, $paymentformerror);
        } else {
            $paymentformerror.show();
        }


    });

    // MODAL SHARE
    if (window.location.hash && window.location.hash=='#share') {
        $('#modalShare').modal();
    }
    

});
