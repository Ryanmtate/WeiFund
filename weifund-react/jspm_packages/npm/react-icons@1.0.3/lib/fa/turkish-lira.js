/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaTurkishLira = (function (_React$Component) {
    _inherits(FaTurkishLira, _React$Component);

    function FaTurkishLira() {
        _classCallCheck(this, FaTurkishLira);

        _React$Component.apply(this, arguments);
    }

    FaTurkishLira.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 18q0 3.3000000000000007-1.6000000000000014 6.100000000000001t-4.5 4.5q-2.8000000000000007 1.6000000000000014-6.1 1.6000000000000014h-2.799999999999999q-0.20000000000000018 0-0.40000000000000036-0.10000000000000142t-0.20000000000000018-0.3999999999999986v-10.700000000000003l-3.6999999999999993 1.1999999999999993h-0.1000000000000002q-0.2 0-0.4-0.10000000000000142-0.2-0.1999999999999993-0.2-0.3999999999999986v-2.3000000000000007q0-0.3999999999999986 0.4-0.5l4-1.1999999999999993v-1.6999999999999993l-3.7 1.1999999999999993h-0.1000000000000002q-0.2 0-0.4-0.09999999999999964-0.2-0.1999999999999993-0.2-0.40000000000000036v-2.3000000000000007q0-0.40000000000000036 0.4-0.5l4-1.1999999999999993v-4.3999999999999995q0-0.20000000000000018 0.20000000000000018-0.40000000000000036t0.40000000000000036-0.09999999999999964h2.8q0.1999999999999993 0 0.40000000000000036 0.09999999999999964t0.09999999999999964 0.40000000000000036v3.2l6.5-2.0999999999999996q0.3000000000000007 0 0.5 0.09999999999999964t0.3000000000000007 0.5v2.1999999999999993q0 0.40000000000000036-0.40000000000000036 0.5l-6.9 2.0999999999999996v1.6999999999999993l6.5-2.0999999999999996q0.3000000000000007 0 0.5 0.09999999999999964t0.3000000000000007 0.5v2.200000000000001q0 0.40000000000000036-0.40000000000000036 0.5l-6.9 2.1000000000000014v8.5q3.3000000000000007-0.1999999999999993 5.6-2.6000000000000014t2.200000000000001-5.699999999999999q0-0.3000000000000007 0.1999999999999993-0.3999999999999986t0.3999999999999986-0.1999999999999993h2.6999999999999993q0.3000000000000007 0 0.3999999999999986 0.1999999999999993t0.1999999999999993 0.3999999999999986z' })
            )
        );
    };

    return FaTurkishLira;
})(React.Component);

exports['default'] = FaTurkishLira;
module.exports = exports['default'];