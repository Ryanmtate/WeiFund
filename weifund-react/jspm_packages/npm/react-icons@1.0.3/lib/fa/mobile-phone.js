/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaMobilePhone = (function (_React$Component) {
    _inherits(FaMobilePhone, _React$Component);

    function FaMobilePhone() {
        _classCallCheck(this, FaMobilePhone);

        _React$Component.apply(this, arguments);
    }

    FaMobilePhone.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm7.6 29q0.5-0.3999999999999986 0.5-1t-0.5-1q-0.40000000000000036-0.3999999999999986-0.9000000000000004-0.3999999999999986t-1 0.3999999999999986q-0.40000000000000036 0.3999999999999986-0.40000000000000036 1t0.40000000000000036 1q0.40000000000000036 0.3999999999999986 1 0.3999999999999986t0.9000000000000004-0.3999999999999986z m4.1-3.8000000000000007v-12.2q0-0.1999999999999993-0.1999999999999993-0.40000000000000036t-0.40000000000000036-0.1999999999999993h-8.899999999999999q-0.20000000000000107 0-0.4000000000000008 0.1999999999999993t-0.10000000000000009 0.40000000000000036v12.2q0 0.1999999999999993 0.10000000000000009 0.3999999999999986t0.3999999999999999 0.1999999999999993h8.900000000000002q0.1999999999999993 0 0.40000000000000036-0.1999999999999993t0.1999999999999993-0.3999999999999986z m-3.5999999999999996-14.399999999999999q0.1999999999999993 0 0.1999999999999993-0.3000000000000007t-0.1999999999999993-0.3000000000000007h-2.8q-0.2999999999999998 0-0.2999999999999998 0.3000000000000007t0.2999999999999998 0.3000000000000007h2.8z m5.200000000000001-0.5999999999999996v17.799999999999997q0 0.8999999999999986-0.5999999999999996 1.5t-1.5999999999999996 0.6999999999999993h-8.900000000000002q-0.899999999999999 0-1.4999999999999991-0.6999999999999993t-0.7000000000000002-1.5v-17.8q0-0.9000000000000004 0.7-1.5999999999999996t1.5000000000000002-0.5999999999999996h8.900000000000002q0.9000000000000004 0 1.5999999999999996 0.5999999999999996t0.5999999999999996 1.5999999999999996z' })
            )
        );
    };

    return FaMobilePhone;
})(React.Component);

exports['default'] = FaMobilePhone;
module.exports = exports['default'];