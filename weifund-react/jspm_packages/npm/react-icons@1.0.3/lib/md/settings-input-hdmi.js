/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSettingsInputHdmi = (function (_React$Component) {
    _inherits(MdSettingsInputHdmi, _React$Component);

    function MdSettingsInputHdmi() {
        _classCallCheck(this, MdSettingsInputHdmi);

        _React$Component.apply(this, arguments);
    }

    MdSettingsInputHdmi.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30 11.7v-5c0-1.9-1.5-3.4-3.3-3.4h-13.4c-1.8 0-3.3 1.5-3.3 3.4v5h-1.7v10l5 10v5h13.4v-5l5-10v-10h-1.7z m-16.7-5h13.4v5h-3.4v-3.4h-1.6v3.4h-3.4v-3.4h-1.6v3.4h-3.4v-5z' })
            )
        );
    };

    return MdSettingsInputHdmi;
})(React.Component);

exports['default'] = MdSettingsInputHdmi;
module.exports = exports['default'];