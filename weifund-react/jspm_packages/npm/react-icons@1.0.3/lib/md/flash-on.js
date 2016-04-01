/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdFlashOn = (function (_React$Component) {
    _inherits(MdFlashOn, _React$Component);

    function MdFlashOn() {
        _classCallCheck(this, MdFlashOn);

        _React$Component.apply(this, arguments);
    }

    MdFlashOn.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm11.64 3.3600000000000003h16.716666666666665l-6.716666666666669 13.283333333333335h6.716666666666669l-11.716666666666665 19.999999999999996v-15h-5v-18.284999999999997z' })
            )
        );
    };

    return MdFlashOn;
})(React.Component);

exports['default'] = MdFlashOn;
module.exports = exports['default'];