/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaFacebookF = (function (_React$Component) {
    _inherits(FaFacebookF, _React$Component);

    function FaFacebookF() {
        _classCallCheck(this, FaFacebookF);

        _React$Component.apply(this, arguments);
    }

    FaFacebookF.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm16.6 3.7v4.6000000000000005h-2.6999999999999993q-1.5 0-2 0.6999999999999993t-0.5 1.8000000000000007v3.3000000000000007h5.099999999999998l-0.6999999999999993 5.199999999999999h-4.4v13.099999999999998h-5.300000000000001v-13.099999999999998h-4.5v-5.199999999999999h4.5v-3.8000000000000007q0-3.2 1.7999999999999998-5t4.8-1.7999999999999998q2.5 0 3.8999999999999986 0.20000000000000018z' })
            )
        );
    };

    return FaFacebookF;
})(React.Component);

exports['default'] = FaFacebookF;
module.exports = exports['default'];