/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonClock = (function (_React$Component) {
    _inherits(GoOcticonClock, _React$Component);

    function GoOcticonClock() {
        _classCallCheck(this, GoOcticonClock);

        _React$Component.apply(this, arguments);
    }

    GoOcticonClock.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm22.5 20h7.5v5h-10c-1.4 0-2.5-1.1-2.5-2.5v-12.5h5v10z m-2.5-14.3c7.9 0 14.3 6.4 14.3 14.3s-6.4 14.3-14.3 14.3-14.3-6.4-14.3-14.3 6.4-14.3 14.3-14.3m0-3.2c-9.6 0-17.5 7.9-17.5 17.5s7.9 17.5 17.5 17.5 17.5-7.9 17.5-17.5-7.9-17.5-17.5-17.5z' })
            )
        );
    };

    return GoOcticonClock;
})(React.Component);

exports['default'] = GoOcticonClock;
module.exports = exports['default'];