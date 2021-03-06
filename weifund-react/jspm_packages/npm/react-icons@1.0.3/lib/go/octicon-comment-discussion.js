/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonCommentDiscussion = (function (_React$Component) {
    _inherits(GoOcticonCommentDiscussion, _React$Component);

    function GoOcticonCommentDiscussion() {
        _classCallCheck(this, GoOcticonCommentDiscussion);

        _React$Component.apply(this, arguments);
    }

    GoOcticonCommentDiscussion.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm10 22.5c0 1.4 1.1 2.5 2.5 2.5h10v2.5c0 1.4-1.1 2.5-2.5 2.5h-7.5l-7.5 7.5v-7.5h-2.5c-1.4 0-2.5-1.1-2.5-2.5v-12.5c0-1.4 1.1-2.5 2.5-2.5h7.5v10z m25-17.5h-20c-1.4 0-2.5 1.1-2.5 2.5v12.5c0 1.4 1.1 2.5 2.5 2.5h10l7.5 7.5v-7.5h2.5c1.4 0 2.5-1.1 2.5-2.5v-12.5c0-1.4-1.1-2.5-2.5-2.5z' })
            )
        );
    };

    return GoOcticonCommentDiscussion;
})(React.Component);

exports['default'] = GoOcticonCommentDiscussion;
module.exports = exports['default'];