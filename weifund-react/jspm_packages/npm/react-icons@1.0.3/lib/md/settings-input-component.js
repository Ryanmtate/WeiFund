/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSettingsInputComponent = (function (_React$Component) {
    _inherits(MdSettingsInputComponent, _React$Component);

    function MdSettingsInputComponent() {
        _classCallCheck(this, MdSettingsInputComponent);

        _React$Component.apply(this, arguments);
    }

    MdSettingsInputComponent.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm8.3 3.3c0-0.9-0.7-1.6-1.6-1.6s-1.7 0.7-1.7 1.6v6.7h-3.3v10h10v-10h-3.4v-6.7z m6.7 23.4c0 2.1 1.4 4 3.3 4.7v6.9h3.4v-6.9c1.9-0.7 3.3-2.5 3.3-4.7v-3.4h-10v3.4z m-13.3 0c0 2.1 1.4 4 3.3 4.7v6.9h3.3v-6.9c2-0.7 3.4-2.6 3.4-4.7v-3.4h-10v3.4z m33.3-16.7v-6.7c0-0.9-0.7-1.6-1.7-1.6s-1.6 0.7-1.6 1.6v6.7h-3.4v10h10v-10h-3.3z m-13.3-6.7c0-0.9-0.8-1.6-1.7-1.6s-1.7 0.7-1.7 1.6v6.7h-3.3v10h10v-10h-3.3v-6.7z m6.6 23.4c0 2.1 1.4 4 3.4 4.7v6.9h3.3v-6.9c1.9-0.7 3.3-2.5 3.3-4.7v-3.4h-10v3.4z' })
            )
        );
    };

    return MdSettingsInputComponent;
})(React.Component);

exports['default'] = MdSettingsInputComponent;
module.exports = exports['default'];