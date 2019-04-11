$(document).ready(function(){
    $("button").click(function(){
        var texto = "";
        var x = "El valor del atributo es: " + $("input").attr("type");
        var y = "El valor del atributo es: " + $("input").attr("id");
        texto += $("#caja").width() + " px" + "<br/>";
        texto += $("#caja").height() + " px";
        $("#info").html(x,y);
        $("#detalles").html(texto);
    });
});