'use strict';

/**
 * Returns true if the type is 'number' and it's not NaN
 * @param  {*} val
 * @return {boolean}
 */
var isNum = function (val) {
    return typeof val === 'number' && !isNaN(val);
};

/**
 * Get the relative position from a mouse/touch event to an element
 *
 * @param  {Event}   ev                           The mouse or touch event
 * @param  {Element} [toElement=ev.currentTarget] The element
 * @return {object}                               {x, y}
 */
var getRelativePosition = function (ev, toElement) {
    toElement = toElement || toElement.currentTarget;

    var toElementBoundingRect = toElement.getBoundingClientRect(),
        orgEv = ev.originalEvent || ev,
        hasTouches = ev.touches && ev.touches.length,
        pageX = 0,
        pageY = 0;

    if (hasTouches) {
        if (isNum(ev.touches[0].pageX) && isNum(ev.touches[0].pageY)) {
            pageX = ev.touches[0].pageX;
            pageY = ev.touches[0].pageY;
        } else if (isNum(ev.touches[0].clientX) && isNum(ev.touches[0].clientY)) {
            pageX = orgEv.touches[0].clientX;
            pageY = orgEv.touches[0].clientY;
        }
    } else {
        if (isNum(ev.pageX) && isNum(ev.pageY)) {
            pageX = ev.pageX;
            pageY = ev.pageY;
        } else if (ev.currentPoint && isNum(ev.currentPoint.x) && isNum(ev.currentPoint.y)) {
            pageX = ev.currentPoint.x;
            pageY = ev.currentPoint.y;
        }
    }

    return {
        x: pageX - toElementBoundingRect.left,
        y: pageY - toElementBoundingRect.top
    };
};

/**
 * @type {Function}
 */
module.exports = getRelativePosition;
