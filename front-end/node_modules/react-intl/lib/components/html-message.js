/* jshint esnext:true */

// TODO: Use `import React from "react";` when external modules are supported.
"use strict";
var src$react$$ = require("../react"), src$escape$$ = require("../escape"), src$mixin$$ = require("../mixin");

var FormattedHTMLMessage = src$react$$["default"].createClass({
    displayName: 'FormattedHTMLMessage',
    mixins     : [src$mixin$$["default"]],

    propTypes: {
        tagName: src$react$$["default"].PropTypes.string,
        message: src$react$$["default"].PropTypes.string.isRequired
    },

    getDefaultProps: function () {
        return {tagName: 'span'};
    },

    render: function () {
        var props   = this.props;
        var tagName = props.tagName;
        var message = props.message;

        // Process all the props before they are used as values when formatting
        // the ICU Message string. Since the formatted message will be injected
        // via `innerHTML`, all String-based values need to be HTML-escaped. Any
        // React Elements that are passed as props will be rendered to a static
        // markup string that is presumed to be safe.
        var values = Object.keys(props).reduce(function (values, name) {
            var value = props[name];

            if (typeof value === 'string') {
                value = src$escape$$["default"](value);
            } else if (src$react$$["default"].isValidElement(value)) {
                value = src$react$$["default"].renderToStaticMarkup(value);
            }

            values[name] = value;
            return values;
        }, {});

        // Since the message presumably has HTML in it, we need to set
        // `innerHTML` in order for it to be rendered and not escaped by React.
        // To be safe, all string prop values were escaped before formatting the
        // message. It is assumed that the message is not UGC, and came from
        // the developer making it more like a template.
        //
        // Note: There's a perf impact of using this component since there's no
        // way for React to do its virtual DOM diffing.
        return src$react$$["default"].DOM[tagName]({
            dangerouslySetInnerHTML: {
                __html: this.formatMessage(message, values)
            }
        });
    }
});

exports["default"] = FormattedHTMLMessage;

//# sourceMappingURL=html-message.js.map