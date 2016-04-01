/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonDeviceMobile = (function (_React$Component) {
    _inherits(GoOcticonDeviceMobile, _React$Component);

    function GoOcticonDeviceMobile() {
        _classCallCheck(this, GoOcticonDeviceMobile);

        _React$Component.apply(this, arguments);
    }

    GoOcticonDeviceMobile.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30 0h-20c-1.4 0-2.5 1.1-2.5 2.5v35c0 1.4 1.1 2.5 2.5 2.5h20c1.4 0 2.5-1.1 2.5-2.5v-35c0-1.4-1.1-2.5-2.5-2.5z m-10 38.2c-1.8 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2 3.2 1.4 3.2 3.2-1.4 3.2-3.2 3.2z m10-8.2h-20v-25h20v25z' })
            )
        );
    };

    return GoOcticonDeviceMobile;
})(React.Component);

exports['default'] = GoOcticonDeviceMobile;
module.exports = exports['default'];