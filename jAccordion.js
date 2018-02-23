(function ($, window, document, undefined) {

    'use strict';

    var pluginName = 'jAccordion',
        defaults = {
            activeItemClassName: 'selected',
            slideDownDuration: 500,
            slideUpDuration: 500,
            scrollDuration: 500,
            extraScrollOffset: 0,
            scrollAfterSelection: true,
            onOpen: function(el) {},
            onClose: function(el) {}
        };

    function Plugin(element, options) {

        this.element = element;
        this.options = $.extend({}, defaults, options);

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {

        init: function () {

            var self = this;
            var accordion = this.element;
            var activeClass = this.options.activeItemClassName;
            $(this.element).addClass('jAccordion');

            var itemAlreadySelected = $('.' + activeClass, accordion);

            if(itemAlreadySelected.length > 0) {
                self.openItem($('.jacc-heading', itemAlreadySelected), false);
            }

            $('.jacc-heading', accordion).click(function() {

                var isItemAlreadyOpen = $(this).parent().hasClass(activeClass);
                var anyItemsOpen = $('.' + activeClass, accordion).length > 0;
                var newItem = this;

                if (isItemAlreadyOpen) {
                    self.closeItem();
                } else if (anyItemsOpen) {
                    self.closeItem();
                    self.openItem(newItem);
                } else {
                    self.openItem(newItem);
                }
            });
        },

        openItem: function(src, shouldScroll) {
            var self = this;

            shouldScroll = shouldScroll === undefined ? true : shouldScroll;

            var itemToShow = $(src).parent();
            var itemToShowContent = $('.jacc-content', itemToShow);

            itemToShow.addClass(this.options.activeItemClassName);
            itemToShowContent.clearQueue();
            itemToShowContent.slideDown(this.options.slideDownDuration, function() {
                if (shouldScroll) {
                    self.scrollToItem(itemToShow);
                }
            });

            this.options.onOpen(itemToShow);
        },

        closeItem: function() {
            var itemToHide = $('.' + this.options.activeItemClassName, this.element);
            var contentToHide = $('.jacc-content', itemToHide);

            itemToHide.removeClass(this.options.activeItemClassName);
            contentToHide.clearQueue();
            contentToHide.slideUp();
            this.options.onClose(itemToHide);
        },

        closeAll: function () {
            var anyItemsOpen = $('.' + this.options.activeItemClassName, this.element).length > 0;
            if (anyItemsOpen) {
                this.closeItem();
            }
        },

        scrollToItem: function(el) {
            $('html, body').animate({
                scrollTop: el.offset().top - this.options.extraScrollOffset
            }, this.options.scrollDuration);
        }
    };

    $.fn[pluginName] = function (options) {

        return this.each(function () {

            if (!$.data(this, pluginName)) {
                $.data(this, pluginName,
                       new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);