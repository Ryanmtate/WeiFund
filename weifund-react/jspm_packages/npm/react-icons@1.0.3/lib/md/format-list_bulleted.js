/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdFormatListBulleted = (function (_React$Component) {
    _inherits(MdFormatListBulleted, _React$Component);

    function MdFormatListBulleted() {
        _classCallCheck(this, MdFormatListBulleted);

        _React$Component.apply(this, arguments);
    }

    MdFormatListBulleted.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm11.64 8.360000000000001h23.36v3.283333333333333h-23.36v-3.283333333333333z m0 13.28v-3.2833333333333314h23.36v3.2833333333333314h-23.36z m0 10v-3.2833333333333314h23.36v3.2833333333333314h-23.36z m-5-3.826666666666668q0.9383333333333335 0 1.5999999999999996 0.625t0.6666666666666661 1.5633333333333326-0.6666666666666661 1.5666666666666664-1.5999999999999996 0.6233333333333313-1.5633333333333335-0.625-0.6266666666666669-1.5666666666666629 0.6266666666666669-1.5616666666666674 1.5633333333333335-0.625z m0-20.313333333333336q1.0166666666666666 0 1.7583333333333329 0.7033333333333331t0.7400000000000002 1.7966666666666704-0.7383333333333333 1.7966666666666669-1.7616666666666667 0.7033333333333331-1.755-0.7033333333333331-0.7450000000000001-1.7966666666666669 0.7416666666666671-1.7966666666666669 1.7583333333333329-0.7033333333333331z m0 10q1.0166666666666666 0 1.7583333333333329 0.7033333333333331t0.7400000000000002 1.7966666666666704-0.7416666666666671 1.7966666666666669-1.7599999999999998 0.7033333333333331-1.7583333333333329-0.7033333333333331-0.7400000000000002-1.7966666666666669 0.7416666666666671-1.7966666666666669 1.7566666666666668-0.7033333333333331z' })
            )
        );
    };

    return MdFormatListBulleted;
})(React.Component);

exports['default'] = MdFormatListBulleted;
module.exports = exports['default'];