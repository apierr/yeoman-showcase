(function (define) {
    'use strict';
    define([
    ], function () {
        return function () {
            return {
                restrict: 'A', // only matches attribute name
                link: function link(scope, element, attrs) {
                    element.bind('click', function () {
                        scope.$apply(function () {
                            if (!element.hasClass(attrs.nsStateful)) {
                                element.addClass(attrs.nsStateful);
                            } else {
                                element.removeClass(attrs.nsStateful);
                            }
                        });
                    });
                }
            };    
        };
    });
}(this.define));
