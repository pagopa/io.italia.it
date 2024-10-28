$(function() {
    var entedummyUrl = "/enti-embeddable/ente-embeddable-dummy.html";
    var jsonPath ="/assets/entijson/";
    var enteFc = $("body").data("enteFc");
    Handlebars.registerHelper('setImgSrc', function(value){
        var imgname = value.replace(/^0+/, "");
        return imgname + ".png";
    });
    Handlebars.registerHelper('breaklines', function(text) {
        text = Handlebars.Utils.escapeExpression(text);
        text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
        return new Handlebars.SafeString(text);
    });
    Handlebars.registerHelper('arriving', function(q, options){
        return q == 0 ? options.fn(this) : options.inverse(this);
      });
    function pageRender(datasource) {
        $.ajax({
            url: entedummyUrl,
            dataType: 'html',
            success: function(data,textStatus,xhr) {
                var appendHtml = data;
                var template = Handlebars.compile(appendHtml);
                var html = template(datasource);
                $("body").append(html);
                navmenu();
            }
        });
    }
    function navmenu() {
        var $navigationitems = $('.navigation-item.withDropdown');
        $navigationitems.on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('on');
            $(this).parent().siblings().children().removeClass('on');
        });
    }
    $.ajax({
        url: jsonPath + enteFc + ".json",
        dataType: 'json',
        success: function(data,textStatus,xhr) {
            pageRender(data);
        }
    });
});
