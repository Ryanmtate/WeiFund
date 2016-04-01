/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var TiHeart = (function (_React$Component) {
    _inherits(TiHeart, _React$Component);

    function TiHeart() {
        _classCallCheck(this, TiHeart);

        _React$Component.apply(this, arguments);
    }

    TiHeart.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 17.291666666666668c0-4.025-3.2666666666666657-7.291666666666668-7.291666666666666-7.291666666666668s-7.291666666666667 3.2666666666666675-7.291666666666667 7.291666666666668c0 1.8783333333333339 0.2666666666666666 4.640000000000001 2.916666666666667 7.291666666666668s11.666666666666666 8.75 11.666666666666666 8.75 9.016666666666666-6.100000000000001 11.666666666666668-8.75 2.916666666666668-5.413333333333334 2.916666666666668-7.291666666666668c0-4.025-3.2666666666666693-7.291666666666668-7.291666666666668-7.291666666666668s-7.291666666666668 3.2666666666666675-7.291666666666668 7.291666666666668z' })
            )
        );
    };

    return TiHeart;
})(React.Component);

exports['default'] = TiHeart;
module.exports = exports['default'];