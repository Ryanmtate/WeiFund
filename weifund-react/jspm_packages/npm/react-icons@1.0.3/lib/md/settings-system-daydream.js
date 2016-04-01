/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSettingsSystemDaydream = (function (_React$Component) {
    _inherits(MdSettingsSystemDaydream, _React$Component);

    function MdSettingsSystemDaydream() {
        _classCallCheck(this, MdSettingsSystemDaydream);

        _React$Component.apply(this, arguments);
    }

    MdSettingsSystemDaydream.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm15 26.7h10.8c2.3 0 4.2-1.9 4.2-4.2s-1.9-4.2-4.2-4.2h0c-0.4-2.8-2.9-5-5.8-5-2.3 0-4.3 1.4-5.3 3.4h-0.2c-2.5 0.3-4.5 2.4-4.5 5 0 2.7 2.2 5 5 5z m20-21.7h-30c-1.8 0-3.3 1.5-3.3 3.3v23.4c0 1.8 1.5 3.3 3.3 3.3h30c1.8 0 3.3-1.5 3.3-3.3v-23.4c0-1.8-1.5-3.3-3.3-3.3z m0 26.7h-30v-23.4h30v23.4z' })
            )
        );
    };

    return MdSettingsSystemDaydream;
})(React.Component);

exports['default'] = MdSettingsSystemDaydream;
module.exports = exports['default'];