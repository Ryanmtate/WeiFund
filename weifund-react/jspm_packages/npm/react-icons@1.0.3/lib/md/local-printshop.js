/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdLocalPrintshop = (function (_React$Component) {
    _inherits(MdLocalPrintshop, _React$Component);

    function MdLocalPrintshop() {
        _classCallCheck(this, MdLocalPrintshop);

        _React$Component.apply(this, arguments);
    }

    MdLocalPrintshop.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm31.7 13.3h-23.4c-2.7 0-5 2.3-5 5v10h6.7v6.7h20v-6.7h6.7v-10c0-2.7-2.3-5-5-5z m-5 18.4h-13.4v-8.4h13.4v8.4z m5-11.7c-0.9 0-1.7-0.7-1.7-1.7s0.8-1.6 1.7-1.6 1.6 0.7 1.6 1.6-0.7 1.7-1.6 1.7z m-1.7-15h-20v6.7h20v-6.7z' })
            )
        );
    };

    return MdLocalPrintshop;
})(React.Component);

exports['default'] = MdLocalPrintshop;
module.exports = exports['default'];