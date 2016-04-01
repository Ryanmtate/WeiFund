/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaRemove = (function (_React$Component) {
    _inherits(FaRemove, _React$Component);

    function FaRemove() {
        _classCallCheck(this, FaRemove);

        _React$Component.apply(this, arguments);
    }

    FaRemove.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm22 25.3q0.5 0.5 0.5 1.1999999999999993t-0.5 1.1999999999999993l-2.3000000000000007 2.3000000000000007q-0.5 0.5-1.1999999999999993 0.5t-1.1999999999999993-0.5l-5.1-5.100000000000001-5.100000000000001 5.100000000000001q-0.5 0.5-1.2000000000000002 0.5t-1.0999999999999996-0.5l-2.4-2.3000000000000007q-0.5-0.5-0.5-1.1999999999999993t0.5-1.1999999999999993l5.1-5.099999999999998-5.1-5.1q-0.5-0.5-0.5-1.1999999999999993t0.5-1.1999999999999993l2.4000000000000004-2.299999999999999q0.40000000000000036-0.5 1.0999999999999996-0.5t1.2000000000000002 0.5l5.099999999999999 5.1 5.099999999999998-5.1q0.5-0.5 1.1999999999999993-0.5t1.1999999999999993 0.5l2.3000000000000007 2.3000000000000007q0.5 0.5 0.5 1.1999999999999993t-0.5 1.1999999999999993l-5.099999999999998 5.099999999999998 5.100000000000001 5.100000000000001z' })
            )
        );
    };

    return FaRemove;
})(React.Component);

exports['default'] = FaRemove;
module.exports = exports['default'];