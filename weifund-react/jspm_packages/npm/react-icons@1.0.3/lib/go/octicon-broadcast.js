/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonBroadcast = (function (_React$Component) {
    _inherits(GoOcticonBroadcast, _React$Component);

    function GoOcticonBroadcast() {
        _classCallCheck(this, GoOcticonBroadcast);

        _React$Component.apply(this, arguments);
    }

    GoOcticonBroadcast.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm22.5 22.5h-2.5c1.4 0 2.5-1.1 2.5-2.5v-2.5c0-1.4-1.1-2.5-2.5-2.5h-2.5c-1.4 0-2.5 1.1-2.5 2.5v2.5c0 1.4 1.1 2.5 2.5 2.5h-2.5c-1.4 0-2.5 1.1-2.5 2.5v5h2.5v7.5c0 1.4 1.1 2.5 2.5 2.5h2.5c1.4 0 2.5-1.1 2.5-2.5v-7.5h2.5v-5c0-1.4-1.1-2.5-2.5-2.5z m-5-5h2.5v2.5h-2.5v-2.5z m5 10h-2.5v10h-2.5v-10h-2.5v-2.5h7.5v2.5z m5.2-8.8c0-4.9-4-8.9-8.9-8.9s-9 4-9 8.9c0 0.8 0 1.4 0.2 2.1v4.9c-1.5-1.9-2.5-4.3-2.5-7 0-6.2 5-11.2 11.3-11.2s11.2 5 11.2 11.2c0 2.7-1 5.1-2.5 7v-4.9c0.2-0.7 0.2-1.3 0.2-2.1z m9.8 0c0 7.2-4.1 13.5-10 16.6v-2.6c4.6-2.9 7.7-8.1 7.7-14 0-9.1-7.3-16.4-16.4-16.4s-16.5 7.3-16.5 16.4c0 5.9 3.1 11.1 7.7 14v2.6c-5.9-3.1-10-9.4-10-16.6 0-10.3 8.4-18.7 18.8-18.7s18.7 8.4 18.7 18.7z' })
            )
        );
    };

    return GoOcticonBroadcast;
})(React.Component);

exports['default'] = GoOcticonBroadcast;
module.exports = exports['default'];