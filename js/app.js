// Code here


/* Expand collapse on click */
/*
 <div class="container">
     <div class="expandContainer"><span>Expand</span>
     </div>

     <div class="content">
         <ul>
         <li>This is just some random content.</li>
         <li>This is just some random content.</li>
         <li>This is just some random content.</li>
         <li>This is just some random content.</li>
         </ul>
     </div>
 </div>
 */
$(".expandContainer").click(function () {

    $expandContainer = $(this);
    //getting the next element
    $content = $expandContainer.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $header.text(function () {
            //change text based on condition
            return $content.is(":visible") ? "Collapse" : "Expand";
        });
    });

});


/* Search jquery line */
$('#inputSearch').keyup(function () {
    var input_content = $.trim($(this).val());
    if (!input_content) {
        $('ul>li').show();
    } else {
        $('ul>li').show().not(':contains(' + input_content  + ')').hide();
    }
});

$("#inputSearch").children("input").keypress(function (e) {
    var key = e.which;
    if(key == 13)  // the enter key code
    {
        var input_value = $(this).val();
        // Get all metro div
        var metroClass = document.getElementsByClassName('.metroDiv')

        for(var i=0; i<metroClass.length; i++){
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

        }
    }
});