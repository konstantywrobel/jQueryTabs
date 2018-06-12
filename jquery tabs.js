(function($) {

    var tabsNav = $(".tabs-nav__item"),
        tabsItems = $(".tabs__item"),
        activeClass = "tabs-nav__item--active";

    tabsNav.first().addClass(activeClass);
    tabsItems.not(":first").hide();

    tabsNav.on("click", function(){

        var tabNav = $(this),
            index = tabNav.index();

        tabsNav.removeClass(activeClass);
        tabNav.addClass(activeClass);

        tabsItems.hide().eq(index).fadeIn(300);
    });

})($);

