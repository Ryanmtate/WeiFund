/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaToggleUp = (function (_React$Component) {
    _inherits(FaToggleUp, _React$Component);

    function FaToggleUp() {
        _classCallCheck(this, FaToggleUp);

        _React$Component.apply(this, arguments);
    }

    FaToggleUp.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm19.9 22.9q-0.3000000000000007 0.6000000000000014-1 0.6000000000000014h-11.099999999999998q-0.7000000000000011 0-1.0000000000000009-0.6000000000000014-0.2999999999999998-0.6000000000000014 0.09999999999999964-1.1000000000000014l5.499999999999999-7.800000000000001q0.40000000000000036-0.5 0.9000000000000004-0.5t0.9000000000000004 0.5l5.599999999999998 7.800000000000001q0.3999999999999986 0.5 0.10000000000000142 1.1000000000000014z m2.3000000000000007 4.5v-16.599999999999998q0-0.3000000000000007-0.10000000000000142-0.40000000000000036t-0.3999999999999986-0.1999999999999993h-16.7q-0.20000000000000018 0-0.40000000000000036 0.1999999999999993t-0.20000000000000018 0.40000000000000036v16.6q0 0.3000000000000007 0.20000000000000018 0.3999999999999986t0.40000000000000036 0.1999999999999993h16.7q0.1999999999999993 0 0.3999999999999986-0.1999999999999993t0.10000000000000142-0.3999999999999986z m4.5-16.6v16.6q0 2.1000000000000014-1.5 3.6000000000000014t-3.5 1.3999999999999986h-16.7q-2.1 0-3.5-1.3999999999999986t-1.5-3.6000000000000014v-16.599999999999998q0-2.0999999999999996 1.5-3.5999999999999996t3.5-1.4000000000000012h16.7q2 0 3.5 1.3999999999999995t1.5 3.5999999999999996z' })
            )
        );
    };

    return FaToggleUp;
})(React.Component);

exports['default'] = FaToggleUp;
module.exports = exports['default'];