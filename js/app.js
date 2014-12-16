// Code here


/* Expand collapse on click */


$(".showList").click(function () {

    $expandContainer = $(this).parent();
    //getting the next element
    $content = $expandContainer.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500);
});

/* Search jquery line */
/*$('.search').keyup(function () {
    var input_content = $.trim($(this).val());
    if (!input_content) {
        $('ul>li').show();
    } else {
        $('ul>li').show().not(':contains(' + input_content  + ')').hide();
    }
});  */

$(".search").keypress(function (e) {
    var key = e.which;
    if(key == 13)  // the enter key code
    {
        var input_value = $(this).val();
        // Get all metro div
        var metroLists = document.getElementsByClassName('contentMetroList')

        // for each metro div content
        metroLists.each(function(){
            // for each li in metro
            $(this).find('li').each(function(){
                var current = $(this);
                //if()
            });
        });

        /*for(var i=0; i<metroClass.length; i++){
            // Get element
            var element = metroClass.eq(i);

            // check if element contains search val
            // if yes remove hide
            // if else add hide class
            if (element.className.indexOf(input_value) > -1) {
                element.show();
            } else {
                element.hide();
            }

        } */
    }
});