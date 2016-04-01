/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPower = (function (_React$Component) {
    _inherits(MdPower, _React$Component);

    function MdPower() {
        _classCallCheck(this, MdPower);

        _React$Component.apply(this, arguments);
    }

    MdPower.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm26.71666666666667 11.64q1.25 0 2.2666666666666657 1.0549999999999997t1.0166666666666657 2.3049999999999997v9.14l-5.863333333333333 5.859999999999999v5h-8.283333333333333v-5l-5.8533333333333335-5.859999999999999v-9.14q0-1.25 1.0166666666666657-2.3049999999999997t2.2633333333333336-1.0549999999999997h0.07833333333333314v-6.640000000000001h3.283333333333333v6.640000000000001h6.716666666666669v-6.640000000000001h3.2833333333333314z' })
            )
        );
    };

    return MdPower;
})(React.Component);

exports['default'] = MdPower;
module.exports = exports['default'];