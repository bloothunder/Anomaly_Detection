// All programming courtesy of W3 Schools unless otherwise stated

// The code below is from https://www.tutorialrepublic.com/faq/show-hide-divs-based-on-dropdown-selection-in-jquery.php
$(document).ready(function(){
    $("select").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".box").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".box").hide();
            }
        });
    }).change();
});
// The code above is from https://www.tutorialrepublic.com/faq/show-hide-divs-based-on-dropdown-selection-in-jquery.php