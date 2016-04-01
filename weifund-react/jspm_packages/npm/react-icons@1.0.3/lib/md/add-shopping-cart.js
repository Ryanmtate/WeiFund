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
                React.createElement('path', { d: 'm18.3 15h3.4v-5h5v-3.3h-5v-5h-3.4v5h-5v3.3h5v5z m-6.6 15c-1.9 0-3.3 1.5-3.3 3.3s1.4 3.4 3.3 3.4 3.3-1.5 3.3-3.4-1.5-3.3-3.3-3.3z m16.6 0c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.4 3.3 3.4 3.4-1.5 3.4-3.4-1.5-3.3-3.4-3.3z m-16.3-5.4l0-0.2 1.5-2.7h12.4c1.3 0 2.4-0.7 2.9-1.8l6.5-11.6-2.9-1.6h0l-1.9 3.3-4.6 8.3h-11.7l-0.2-0.4-3.7-7.9-1.6-3.3-1.6-3.4h-5.4v3.4h3.3l6 12.6-2.2 4.1c-0.3 0.5-0.5 1-0.5 1.6 0 1.8 1.5 3.3 3.4 3.3h20v-3.3h-19.3c-0.2 0-0.4-0.2-0.4-0.4z' })
            )
        );
    };

    return MdAddShoppingCart;
})(React.Component);

exports['default'] = MdAddShoppingCart;
module.exports = exports['default'];