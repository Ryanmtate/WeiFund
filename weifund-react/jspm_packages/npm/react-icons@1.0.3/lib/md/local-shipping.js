/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdLocalShipping = (function (_React$Component) {
    _inherits(MdLocalShipping, _React$Component);

    function MdLocalShipping() {
        _classCallCheck(this, MdLocalShipping);

        _React$Component.apply(this, arguments);
    }

    MdLocalShipping.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30 30.86q1.0933333333333337 0 1.7966666666666669-0.7416666666666671t0.7033333333333331-1.7566666666666677-0.7033333333333331-1.7583333333333329-1.7966666666666669-0.7416666666666636-1.7966666666666669 0.7416666666666671-0.7033333333333331 1.7600000000000016 0.7033333333333331 1.7583333333333329 1.7966666666666669 0.7433333333333323z m2.5-15h-4.140000000000001v4.140000000000001h7.421666666666667z m-22.5 15q1.0933333333333337 0 1.7966666666666669-0.7416666666666671t0.7033333333333331-1.7566666666666677-0.7033333333333331-1.7583333333333329-1.7966666666666669-0.7416666666666636-1.7966666666666669 0.7416666666666671-0.7033333333333331 1.7600000000000016 0.7033333333333331 1.7583333333333329 1.7966666666666669 0.7399999999999984z m23.36-17.5l5 6.640000000000001v8.36h-3.3599999999999994q0 2.0333333333333314-1.4833333333333343 3.5166666666666657t-3.5166666666666657 1.4833333333333343-3.5166666666666657-1.4833333333333343-1.4833333333333343-3.5166666666666657h-10q0 2.0333333333333314-1.4833333333333343 3.5166666666666657t-3.5166666666666657 1.4833333333333343-3.5166666666666666-1.4833333333333343-1.4833333333333334-3.5166666666666657h-3.36v-18.36q0-1.3283333333333331 1.0166666666666666-2.3433333333333337t2.3416666666666663-1.0166666666666666h23.358333333333334v6.72h5z' })
            )
        );
    };

    return MdLocalShipping;
})(React.Component);

exports['default'] = MdLocalShipping;
module.exports = exports['default'];