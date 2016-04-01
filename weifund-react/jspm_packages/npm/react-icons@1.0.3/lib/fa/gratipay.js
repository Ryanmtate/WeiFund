/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaGratipay = (function (_React$Component) {
    _inherits(FaGratipay, _React$Component);

    function FaGratipay() {
        _classCallCheck(this, FaGratipay);

        _React$Component.apply(this, arguments);
    }

    FaGratipay.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm13.4 26.1l6.1-8.2q0.3000000000000007-0.3000000000000007 0.3999999999999986-1t-0.10000000000000142-1.5q-0.1999999999999993-0.8000000000000007-1-1.3000000000000007-0.6999999999999993-0.5-1.5-0.5t-1.3000000000000007 0.3000000000000007q-0.5 0.3000000000000007-0.9000000000000004 0.8000000000000007-0.5999999999999996 0.6999999999999993-1.6999999999999993 0.6999999999999993-1 0-1.5999999999999996-0.6999999999999993-0.40000000000000036-0.5-1-0.8000000000000007t-1.3000000000000007-0.3000000000000007q-0.6999999999999993 0-1.4000000000000004 0.5-0.7999999999999998 0.5-1.0999999999999996 1.3000000000000007t-0.09999999999999964 1.5q0.20000000000000018 0.6999999999999993 0.5 1l6 8.2z m11.499999999999998-13.7q1.8000000000000007 3.0999999999999996 1.8000000000000007 6.699999999999999t-1.8000000000000007 6.699999999999999q-1.8000000000000007 3.1000000000000014-4.899999999999999 4.800000000000001t-6.699999999999999 1.7999999999999972q-3.5999999999999996 0-6.7-1.8000000000000007t-4.8-4.800000000000001q-1.8000000000000007-3.099999999999998-1.8000000000000007-6.699999999999996t1.8-6.699999999999999q1.8-3.0999999999999996 4.8-4.8t6.700000000000001-1.7999999999999998q3.6999999999999993 0 6.699999999999999 1.7999999999999998t4.899999999999999 4.8z' })
            )
        );
    };

    return FaGratipay;
})(React.Component);

exports['default'] = FaGratipay;
module.exports = exports['default'];