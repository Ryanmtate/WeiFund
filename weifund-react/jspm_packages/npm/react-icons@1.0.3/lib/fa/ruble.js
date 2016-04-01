/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaRuble = (function (_React$Component) {
    _inherits(FaRuble, _React$Component);

    function FaRuble() {
        _classCallCheck(this, FaRuble);

        _React$Component.apply(this, arguments);
    }

    FaRuble.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm17 16.2q1.1000000000000014-1.0999999999999996 1.1000000000000014-2.9000000000000004t-1.1000000000000014-2.799999999999999q-1.0999999999999996-1-3-1h-5.5v7.699999999999999h5.5q1.9000000000000004 0 3-1z m3-8.3q2.1999999999999993 2.0999999999999996 2.1999999999999993 5.4t-2.1999999999999993 5.500000000000002q-2.1999999999999993 2.1000000000000014-5.6 2.1000000000000014h-5.9v2.099999999999998h8.7q0.3000000000000007 0 0.3999999999999986 0.10000000000000142t0.1999999999999993 0.3999999999999986v2.3000000000000007q0 0.1999999999999993-0.1999999999999993 0.3999999999999986t-0.3999999999999986 0.10000000000000142h-8.7v3.3999999999999986q0 0.1999999999999993-0.1999999999999993 0.3999999999999986t-0.40000000000000036 0.10000000000000142h-2.9000000000000004q-0.20000000000000018 0-0.40000000000000036-0.10000000000000142t-0.20000000000000018-0.3999999999999986v-3.3999999999999986h-3.7999999999999994q-0.3000000000000001 0-0.40000000000000013-0.10000000000000142t-0.2-0.3999999999999986v-2.3000000000000007q0-0.1999999999999993 0.2-0.3999999999999986t0.4-0.10000000000000142h3.7999999999999994v-2.1000000000000014h-3.7999999999999994q-0.3000000000000001 0-0.40000000000000013-0.10000000000000142t-0.2-0.3999999999999986v-2.6000000000000014q0-0.1999999999999993 0.2-0.3999999999999986t0.4-0.1999999999999993h3.7999999999999994v-10.899999999999999q0-0.20000000000000107 0.20000000000000018-0.40000000000000124t0.40000000000000036-0.09999999999999964h9.4q3.4000000000000004 0 5.6 2.1000000000000005z' })
            )
        );
    };

    return FaRuble;
})(React.Component);

exports['default'] = FaRuble;
module.exports = exports['default'];