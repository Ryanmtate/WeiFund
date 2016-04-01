/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaHotel = (function (_React$Component) {
    _inherits(FaHotel, _React$Component);

    function FaHotel() {
        _classCallCheck(this, FaHotel);

        _React$Component.apply(this, arguments);
    }

    FaHotel.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm4.4 21.3h30q0.5 0 0.7999999999999972 0.3000000000000007t0.3999999999999986 0.8000000000000007v7.800000000000001h-4.5v-4.399999999999999h-26.699999999999996v4.399999999999999h-4.399999999999999v-21.1q0-0.5000000000000018 0.3-0.8000000000000025t0.8-0.2999999999999998h2.2q0.5 0 0.8000000000000003 0.2999999999999998t0.2999999999999998 0.8000000000000007v12.199999999999998z m8.7-2.3999999999999986q1.3000000000000007-1.3000000000000007 1.3000000000000007-3.0999999999999996t-1.3000000000000007-3.200000000000001q-1.3000000000000007-1.3000000000000007-3.0999999999999996-1.3000000000000007t-3.0999999999999996 1.3000000000000007q-1.2999999999999998 1.3000000000000007-1.2999999999999998 3.1999999999999993t1.2999999999999998 3.1000000000000014q1.3000000000000007 1.3000000000000007 3.0999999999999996 1.3000000000000007t3.0999999999999996-1.3000000000000007z m22.5 1.3000000000000007v-1.1000000000000014q0-2.8000000000000007-2-4.699999999999999t-4.699999999999999-2h-12.200000000000003q-0.5 0-0.8000000000000007 0.40000000000000036t-0.3000000000000007 0.6999999999999993v6.700000000000001h19.999999999999996z' })
            )
        );
    };

    return FaHotel;
})(React.Component);

exports['default'] = FaHotel;
module.exports = exports['default'];