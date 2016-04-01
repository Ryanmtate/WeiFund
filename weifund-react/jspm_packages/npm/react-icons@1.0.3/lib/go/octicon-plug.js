/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonPlug = (function (_React$Component) {
    _inherits(GoOcticonPlug, _React$Component);

    function GoOcticonPlug() {
        _classCallCheck(this, GoOcticonPlug);

        _React$Component.apply(this, arguments);
    }

    GoOcticonPlug.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm37.5 15v-2.5h-10v-5h-5v2.5h-5c-2.6 0-4.4 2-5 5l-2.5 2.5c-4.1 0-7.5 3.4-7.5 7.5v5h2.5v-5c0-2.8 2.2-5 5-5l2.5 2.5c0.6 2.9 2.5 5 5 5h5v2.5h5v-5h10v-2.5h-10v-7.5h10z' })
            )
        );
    };

    return GoOcticonPlug;
})(React.Component);

exports['default'] = GoOcticonPlug;
module.exports = exports['default'];