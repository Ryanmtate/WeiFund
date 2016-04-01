/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonPulse = (function (_React$Component) {
    _inherits(GoOcticonPulse, _React$Component);

    function GoOcticonPulse() {
        _classCallCheck(this, GoOcticonPulse);

        _React$Component.apply(this, arguments);
    }

    GoOcticonPulse.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm31.2 20l-6.7-6.5-5.5 7.7-2.7-17.2-7.8 16h-6v5h9l2.3-4.5 2.2 13.5 9-12.8 4 3.8h8.5v-5h-6.3z' })
            )
        );
    };

    return GoOcticonPulse;
})(React.Component);

exports['default'] = GoOcticonPulse;
module.exports = exports['default'];