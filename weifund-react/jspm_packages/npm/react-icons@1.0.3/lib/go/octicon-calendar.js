/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonCalendar = (function (_React$Component) {
    _inherits(GoOcticonCalendar, _React$Component);

    function GoOcticonCalendar() {
        _classCallCheck(this, GoOcticonCalendar);

        _React$Component.apply(this, arguments);
    }

    GoOcticonCalendar.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm32.5 5h-2.5v3.7c0 0.8-0.5 1.3-1.3 1.3h-5c-0.7 0-1.2-0.5-1.2-1.3v-3.7h-7.5v3.7c0 0.8-0.5 1.3-1.2 1.3h-5c-0.8 0-1.3-0.5-1.3-1.3v-3.7h-2.5c-1.4 0-2.5 1.1-2.5 2.5v27.5c0 1.4 1.1 2.5 2.5 2.5h27.5c1.4 0 2.5-1.1 2.5-2.5v-27.5c0-1.4-1.1-2.5-2.5-2.5z m0 30h-27.5v-22.5h27.5v22.5z m-20-27.5h-2.5v-5h2.5v5z m15 0h-2.5v-5h2.5v5z m-12.5 10h-2.5v-2.5h2.5v2.5z m5 0h-2.5v-2.5h2.5v2.5z m5 0h-2.5v-2.5h2.5v2.5z m5 0h-2.5v-2.5h2.5v2.5z m-20 5h-2.5v-2.5h2.5v2.5z m5 0h-2.5v-2.5h2.5v2.5z m5 0h-2.5v-2.5h2.5v2.5z m5 0h-2.5v-2.5h2.5v2.5z m5 0h-2.5v-2.5h2.5v2.5z m-20 5h-2.5v-2.5h2.5v2.5z m5 0h-2.5v-2.5h2.5v2.5z m5 0h-2.5v-2.5h2.5v2.5z m5 0h-2.5v-2.5h2.5v2.5z m5 0h-2.5v-2.5h2.5v2.5z m-20 5h-2.5v-2.5h2.5v2.5z m5 0h-2.5v-2.5h2.5v2.5z m5 0h-2.5v-2.5h2.5v2.5z m5 0h-2.5v-2.5h2.5v2.5z' })
            )
        );
    };

    return GoOcticonCalendar;
})(React.Component);

exports['default'] = GoOcticonCalendar;
module.exports = exports['default'];