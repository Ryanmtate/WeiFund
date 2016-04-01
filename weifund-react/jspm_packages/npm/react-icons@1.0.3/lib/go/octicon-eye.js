/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonEye = (function (_React$Component) {
    _inherits(GoOcticonEye, _React$Component);

    function GoOcticonEye() {
        _classCallCheck(this, GoOcticonEye);

        _React$Component.apply(this, arguments);
    }

    GoOcticonEye.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20.2 5c-12.7 0-20.2 15-20.2 15s7.5 15 20.2 15c12.3 0 19.8-15 19.8-15s-7.5-15-19.8-15z m-0.2 25c-5.5 0-10-4.5-10-10 0-5.5 4.5-10 10-10 5.5 0 10 4.5 10 10 0 5.5-4.5 10-10 10z m5-10c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5 5 2.2 5 5z' })
            )
        );
    };

    return GoOcticonEye;
})(React.Component);

exports['default'] = GoOcticonEye;
module.exports = exports['default'];