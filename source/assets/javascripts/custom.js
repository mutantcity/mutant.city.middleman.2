$(function () {

    $(function () {
        var controller = new ScrollMagic.Controller();
        new ScrollMagic.Scene({
            triggerElement: '#container',
            duration: 300
        })
        .setPin('#block')
        .addIndicators()
        .addTo(controller);
     });

});
