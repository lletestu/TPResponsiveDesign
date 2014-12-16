// Code here


/* Expand collapse on click */


$(".showList").click(function () {

    $expandContainer = $(this).parent();
    //getting the next element
    $content = $expandContainer.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500);
});


$(".search").on("keyup", function (e) {

    var input_value = $(this).val().toLowerCase();;
    // Get all metro div
    var i = 0;

    $('.contentMetroList').each(function(){
        // this is inner scope, in reference to the .phrase element
        var container = $(this);
        $(this).find('li').each(function(){
            // cache jquery var
            var current = $(this);
            var text = current.text().toLowerCase();;
            var article = container.closest("article");
            if (text.indexOf(input_value) > -1) {
                //article.addClass("show");
                article.removeClass("hidden")
                i++;
                return false;

            } else {
                //article.hide();
                article.addClass("hidden");
            }

        });
    });

    $("#countTotalStation").text("Tous - "+i+" ligne(s)");
});