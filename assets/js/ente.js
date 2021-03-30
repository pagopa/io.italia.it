$(function() {
    var entedummyUrl = "/enti/entedummy.html";
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
    function pageRender(datasource) {
        $.ajax({
            url: entedummyUrl,
            dataType: 'html',
            success: function(data,textStatus,xhr) {
                var appendHtml = data;
                var template = Handlebars.compile(appendHtml);
                var html = template(datasource);
                $("body").append(html);
            }
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
