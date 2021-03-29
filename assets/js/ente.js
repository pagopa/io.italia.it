$(function() {
    var entedummyUrl = "/enti/entedummy.html";
    var pageDataHtml = $("#pageData").text();
    var pageData = JSON.parse(pageDataHtml);
    Handlebars.registerHelper('setImgSrc', function(value){
        var imgname = value.replace(/^0+/, "");
        return imgname + ".png";
    });
    Handlebars.registerHelper('breaklines', function(text) {
        text = Handlebars.Utils.escapeExpression(text);
        text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
        return new Handlebars.SafeString(text);
    });
    $.ajax({
        url: entedummyUrl,
        dataType: 'html',
        success: function(data,textStatus,xhr) {
            var appendHtml = data;
            var template = Handlebars.compile(appendHtml);
            var html = template(pageData);
            $("body").append(html);
        },
        done: function() {
            $("#pageData").remove();
        }
    });
});
