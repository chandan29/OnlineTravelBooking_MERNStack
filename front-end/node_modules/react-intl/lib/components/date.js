/* jshint esnext:true */

// TODO: Use `import React from "react";` when external modules are supported.
"use strict";
var src$react$$ = require("../react"), src$mixin$$ = require("../mixin");

var FormattedDate = src$react$$["default"].createClass({
    displayName: 'FormattedDate',
    mixins     : [src$mixin$$["default"]],

    statics: {
        formatOptions: [
            'localeMatcher', 'timeZone', 'hour12', 'formatMatcher', 'weekday',
            'era', 'year', 'month', 'day', 'hour', 'minute', 'second',
            'timeZoneName'
        ]
    },

    propTypes: {
        format: src$react$$["default"].PropTypes.string,
        value : src$react$$["default"].PropTypes.any.isRequired
    },

    render: function () {
        var props    = this.props;
        var value    = props.value;
        var format   = props.format;
        var defaults = format && this.getNamedFormat('date', format);
        var options  = FormattedDate.filterFormatOptions(props, defaults);

        return src$react$$["default"].DOM.span(null, this.formatDate(value, options));
    }
});

exports["default"] = FormattedDate;

//# sourceMappingURL=date.js.map