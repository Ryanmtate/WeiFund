/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSettingsInputAntenna = (function (_React$Component) {
    _inherits(MdSettingsInputAntenna, _React$Component);

    function MdSettingsInputAntenna() {
        _classCallCheck(this, MdSettingsInputAntenna);

        _React$Component.apply(this, arguments);
    }

    MdSettingsInputAntenna.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 8.3c-6.4 0-11.7 5.3-11.7 11.7h3.4c0-4.6 3.7-8.3 8.3-8.3s8.3 3.7 8.3 8.3h3.4c0-6.4-5.2-11.7-11.7-11.7z m1.7 15.5c1.4-0.6 2.5-2.1 2.5-3.8 0-2.3-1.9-4.2-4.2-4.2s-4.2 1.9-4.2 4.2c0 1.7 1.1 3.2 2.5 3.8v5.5l-5.6 5.7 2.3 2.4 5-5 5 5 2.4-2.4-5.7-5.7v-5.5z m-1.7-22.1c-10.1 0-18.3 8.2-18.3 18.3h3.3c0-8.3 6.7-15 15-15s15 6.7 15 15h3.3c0-10.1-8.2-18.3-18.3-18.3z' })
            )
        );
    };

    return MdSettingsInputAntenna;
})(React.Component);

exports['default'] = MdSettingsInputAntenna;
module.exports = exports['default'];