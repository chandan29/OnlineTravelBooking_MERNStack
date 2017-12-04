/* jshint esnext: true */

"use strict";
var src$react$intl$$ = require("./react-intl");

exports["default"] = {
    IntlMixin           : src$react$intl$$.IntlMixin,
    FormattedDate       : src$react$intl$$.FormattedDate,
    FormattedTime       : src$react$intl$$.FormattedTime,
    FormattedRelative   : src$react$intl$$.FormattedRelative,
    FormattedNumber     : src$react$intl$$.FormattedNumber,
    FormattedMessage    : src$react$intl$$.FormattedMessage,
    FormattedHTMLMessage: src$react$intl$$.FormattedHTMLMessage,

    __addLocaleData: src$react$intl$$.__addLocaleData
};

// Back-compat for v1.0.0. This adds a `ReactIntlMixin` global that references
// the mixin directly. This will be deprecated in v2.0.0.
if (typeof window !== 'undefined') {
    window.ReactIntlMixin     = src$react$intl$$.IntlMixin;
    src$react$intl$$.IntlMixin.__addLocaleData = src$react$intl$$.__addLocaleData;
}

//# sourceMappingURL=main.js.map