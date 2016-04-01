/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonClippy = (function (_React$Component) {
    _inherits(GoOcticonClippy, _React$Component);

    function GoOcticonClippy() {
        _classCallCheck(this, GoOcticonClippy);

        _React$Component.apply(this, arguments);
    }

    GoOcticonClippy.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm7.5 30h10v2.5h-10v-2.5z m12.5-15h-12.5v2.5h12.5v-2.5z m5 7.5v-5l-7.5 7.5 7.5 7.5v-5h12.5v-5h-12.5z m-11.2-2.5h-6.3v2.5h6.3v-2.5z m-6.3 7.5h6.3v-2.5h-6.3v2.5z m22.5 2.5h2.5v5c0 0.7-0.3 1.3-0.7 1.8s-1.1 0.7-1.8 0.7h-25c-1.4 0-2.5-1.1-2.5-2.5v-27.5c0-1.4 1.1-2.5 2.5-2.5h7.5c0-2.8 2.2-5 5-5s5 2.2 5 5h7.5c1.4 0 2.5 1.1 2.5 2.5v12.5h-2.5v-7.5h-25v22.5h25v-5z m-22.5-20h20c0-1.4-1.1-2.5-2.5-2.5h-2.5c-1.4 0-2.5-1.1-2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5-1.1 2.5-2.5 2.5h-2.5c-1.4 0-2.5 1.1-2.5 2.5z' })
            )
        );
    };

    return GoOcticonClippy;
})(React.Component);

exports['default'] = GoOcticonClippy;
module.exports = exports['default'];