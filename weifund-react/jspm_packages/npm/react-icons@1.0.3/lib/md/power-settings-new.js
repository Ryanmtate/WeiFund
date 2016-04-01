/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPowerSettingsNew = (function (_React$Component) {
    _inherits(MdPowerSettingsNew, _React$Component);

    function MdPowerSettingsNew() {
        _classCallCheck(this, MdPowerSettingsNew);

        _React$Component.apply(this, arguments);
    }

    MdPowerSettingsNew.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm21.7 5h-3.4v16.7h3.4v-16.7z m8 3.6l-2.3 2.4c2.6 2.1 4.3 5.4 4.3 9 0 6.4-5.2 11.7-11.7 11.7s-11.7-5.2-11.7-11.7c0-3.6 1.7-6.9 4.3-9l-2.3-2.4c-3.2 2.8-5.3 6.8-5.3 11.4 0 8.3 6.7 15 15 15s15-6.7 15-15c0-4.6-2-8.6-5.3-11.4z' })
            )
        );
    };

    return MdPowerSettingsNew;
})(React.Component);

exports['default'] = MdPowerSettingsNew;
module.exports = exports['default'];