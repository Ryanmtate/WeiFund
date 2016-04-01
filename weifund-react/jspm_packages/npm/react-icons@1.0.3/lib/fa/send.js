/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaSend = (function (_React$Component) {
    _inherits(FaSend, _React$Component);

    function FaSend() {
        _classCallCheck(this, FaSend);

        _React$Component.apply(this, arguments);
    }

    FaSend.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30.6 3.7q0.6000000000000014 0.40000000000000036 0.5 1.1000000000000005l-4.5 26.7q0 0.5-0.5 0.7999999999999972-0.1999999999999993 0.10000000000000142-0.5 0.10000000000000142-0.1999999999999993 0-0.5-0.10000000000000142l-7.800000000000001-3.1999999999999993-4.199999999999999 5.199999999999999q-0.3000000000000007 0.3999999999999986-0.9000000000000004 0.3999999999999986-0.1999999999999993 0-0.40000000000000036-0.10000000000000142-0.3000000000000007-0.10000000000000142-0.5-0.3999999999999986t-0.1999999999999993-0.7000000000000028v-6l15-18.4-18.5 16.100000000000005-6.900000000000001-2.8999999999999986q-0.6000000000000002-0.1999999999999993-0.7000000000000002-0.8999999999999986 0-0.6999999999999993 0.6-1l28.799999999999997-16.700000000000003q0.3000000000000007-0.1999999999999993 0.6000000000000014-0.1999999999999993t0.6000000000000014 0.20000000000000018z' })
            )
        );
    };

    return FaSend;
})(React.Component);

exports['default'] = FaSend;
module.exports = exports['default'];