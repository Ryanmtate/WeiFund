/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaStarHalfFull = (function (_React$Component) {
    _inherits(FaStarHalfFull, _React$Component);

    function FaStarHalfFull() {
        _classCallCheck(this, FaStarHalfFull);

        _React$Component.apply(this, arguments);
    }

    FaStarHalfFull.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20.6 20.2l4.5-4.4-6.199999999999999-0.9000000000000004-1.1999999999999993-0.1999999999999993-0.5-1-2.8000000000000007-5.6v16.699999999999996l1.0999999999999996 0.6000000000000014 5.499999999999998 2.8999999999999986-1.1000000000000014-6.199999999999999-0.1999999999999993-1.1000000000000014 0.8999999999999986-0.8000000000000007z m7.800000000000001-4.6l-6.300000000000001 6.200000000000001 1.5 8.599999999999998q0.10000000000000142 0.6000000000000014-0.10000000000000142 0.8999999999999986t-0.6000000000000014 0.3000000000000007q-0.3000000000000007 0-0.6999999999999993-0.1999999999999993l-7.800000000000001-4.100000000000001-7.8 4.100000000000001q-0.40000000000000036 0.1999999999999993-0.5999999999999996 0.1999999999999993-0.40000000000000036 0-0.5999999999999996-0.3000000000000007t-0.09999999999999964-0.8999999999999986l1.5-8.600000000000001-6.4-6.199999999999999q-0.5-0.5-0.4-1t1-0.5999999999999996l8.7-1.3000000000000007 3.9000000000000004-7.9q0.3000000000000007-0.7000000000000002 0.8000000000000007-0.7000000000000002t0.9000000000000004 0.7000000000000002l3.8999999999999986 7.9 8.7 1.3000000000000007q0.8000000000000007 0.09999999999999964 1 0.5999999999999996t-0.5 1z' })
            )
        );
    };

    return FaStarHalfFull;
})(React.Component);

exports['default'] = FaStarHalfFull;
module.exports = exports['default'];