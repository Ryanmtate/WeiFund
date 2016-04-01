/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaTv = (function (_React$Component) {
    _inherits(FaTv, _React$Component);

    function FaTv() {
        _classCallCheck(this, FaTv);

        _React$Component.apply(this, arguments);
    }

    FaTv.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm31.1 25.2v-16.7q0-0.1999999999999993-0.1999999999999993-0.3000000000000007t-0.3000000000000007-0.20000000000000018h-27.8q-0.20000000000000107 0-0.4000000000000008 0.20000000000000018t-0.20000000000000018 0.3000000000000007v16.7q0 0.1999999999999993 0.20000000000000018 0.3999999999999986t0.3999999999999999 0.1999999999999993h27.8q0.1999999999999993 0 0.3000000000000007-0.1999999999999993t0.1999999999999993-0.3999999999999986z m2.200000000000003-16.7v16.7q0 1.1999999999999993-0.7999999999999972 2t-1.8999999999999986 0.8000000000000007h-12.800000000000008v2.1999999999999993h6.099999999999998q0.1999999999999993 0 0.3999999999999986 0.1999999999999993t0.10000000000000142 0.3999999999999986v1.1000000000000014q0 0.20000000000000284-0.10000000000000142 0.3999999999999986t-0.3999999999999986 0.10000000000000142h-14.499999999999998q-0.1999999999999993 0-0.40000000000000036-0.10000000000000142t-0.09999999999999964-0.3999999999999986v-1.1000000000000014q0-0.3000000000000007 0.09999999999999964-0.3999999999999986t0.40000000000000036-0.1999999999999993h6.200000000000001v-2.1999999999999993h-12.8q-1.2000000000000008 0-2.000000000000001-0.8000000000000007t-0.8-2v-16.7q0-1.0999999999999996 0.8-1.9000000000000004t2-0.7999999999999998h27.8q1.1000000000000014 0 1.8999999999999986 0.7999999999999998t0.7999999999999972 1.9000000000000004z' })
            )
        );
    };

    return FaTv;
})(React.Component);

exports['default'] = FaTv;
module.exports = exports['default'];