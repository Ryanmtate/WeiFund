/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdAddShoppingCart = (function (_React$Component) {
    _inherits(MdAddShoppingCart, _React$Component);

    function MdAddShoppingCart() {
        _classCallCheck(this, MdAddShoppingCart);

        _React$Component.apply(this, arguments);
    }

    MdAddShoppingCart.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm11.953333333333333 24.61q0 0.39000000000000057 0.39000000000000057 0.39000000000000057h19.296666666666667v3.3599999999999994h-20q-1.3283333333333331 0-2.3049999999999997-1.0166666666666657t-0.9749999999999996-2.3416666666666686q0-0.7800000000000011 0.39000000000000057-1.5616666666666674l2.2633333333333336-4.140000000000001-6.016666666666667-12.658333333333333h-3.3566666666666687v-3.283333333333333h5.466666666666667q1.5666666666666664 3.285000000000003 3.126666666666665 6.641666666666669 0.38833333333333364 0.7033333333333331 1.795 3.711666666666666t2.1883333333333326 4.649999999999999h11.716666666666665q5.861666666666665-10.626666666666667 6.408333333333331-11.72l2.8900000000000006 1.6400000000000006-6.408333333333335 11.638333333333334q-0.9383333333333326 1.716666666666665-2.8900000000000006 1.716666666666665h-12.41666666666666l-1.4833333333333343 2.736666666666668z m16.406666666666666 5.390000000000001q1.3283333333333331 0 2.3049999999999997 1.0166666666666657t0.9750000000000014 2.3416666666666686-0.9766666666666666 2.3049999999999997-2.306666666666665 0.9766666666666666-2.3433333333333337-0.9766666666666666-1.0166666666666657-2.3049999999999997 1.0166666666666657-2.3433333333333337 2.3433333333333337-1.0166666666666657z m-16.72 0q1.3283333333333331 0 2.3433333333333337 1.0166666666666657t1.0166666666666657 2.3400000000000034-1.0166666666666657 2.3049999999999997-2.3433333333333337 0.9766666666666666-2.3049999999999997-0.9766666666666666-0.9749999999999996-2.3049999999999997 0.9766666666666666-2.3433333333333337 2.3049999999999997-1.0133333333333354z m6.719999999999999-15v-5h-5v-3.3599999999999994h5v-5h3.2833333333333314v5h5v3.3599999999999994h-5v5h-3.2833333333333314z' })
            )
        );
    };

    return MdAddShoppingCart;
})(React.Component);

exports['default'] = MdAddShoppingCart;
module.exports = exports['default'];