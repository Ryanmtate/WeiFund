/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonInfo = (function (_React$Component) {
    _inherits(GoOcticonInfo, _React$Component);

    function GoOcticonInfo() {
        _classCallCheck(this, GoOcticonInfo);

        _React$Component.apply(this, arguments);
    }

    GoOcticonInfo.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm18.2 14.2c-0.4-0.5-0.7-1-0.7-1.7s0.3-1.3 0.7-1.8 1.1-0.7 1.8-0.7 1.3 0.2 1.8 0.7 0.7 1.1 0.7 1.8-0.3 1.2-0.7 1.7-1.1 0.8-1.8 0.8-1.3-0.3-1.8-0.8z m4.3 5.8c0-0.7-0.3-1.3-0.8-1.8-0.5-0.4-1-0.7-1.7-0.7h-2.5c-0.7 0-1.2 0.3-1.7 0.7-0.5 0.5-0.8 1.1-0.8 1.8h2.5v7.5c0 0.6 0.3 1.2 0.8 1.7 0.5 0.5 1 0.8 1.7 0.8h2.5c0.7 0 1.2-0.3 1.7-0.8 0.5-0.5 0.8-1.1 0.8-1.7h-2.5v-7.5z m-2.5-14.3c-7.9 0-14.3 6.4-14.3 14.3s6.4 14.2 14.3 14.2 14.3-6.3 14.3-14.2-6.4-14.3-14.3-14.3m0-3.2c9.6 0 17.5 7.8 17.5 17.5s-7.9 17.5-17.5 17.5-17.5-7.9-17.5-17.5 7.9-17.5 17.5-17.5z' })
            )
        );
    };

    return GoOcticonInfo;
})(React.Component);

exports['default'] = GoOcticonInfo;
module.exports = exports['default'];