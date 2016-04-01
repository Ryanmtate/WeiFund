/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSignalCellularOff = (function (_React$Component) {
    _inherits(MdSignalCellularOff, _React$Component);

    function MdSignalCellularOff() {
        _classCallCheck(this, MdSignalCellularOff);

        _React$Component.apply(this, arguments);
    }

    MdSignalCellularOff.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm35 1.7l-14.3 14.3 14.3 14.3v-28.6z m-27.1 5.8l-2.1 2.1 10.6 10.6-14.7 14.8h29.5l3.4 3.3 2.1-2.1-28.8-28.7z' })
            )
        );
    };

    return MdSignalCellularOff;
})(React.Component);

exports['default'] = MdSignalCellularOff;
module.exports = exports['default'];