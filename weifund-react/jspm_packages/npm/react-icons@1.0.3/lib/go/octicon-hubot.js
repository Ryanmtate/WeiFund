/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonHubot = (function (_React$Component) {
    _inherits(GoOcticonHubot, _React$Component);

    function GoOcticonHubot() {
        _classCallCheck(this, GoOcticonHubot);

        _React$Component.apply(this, arguments);
    }

    GoOcticonHubot.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm10 15c-1.4 0-2.5 1.1-2.5 2.5v5c0 1.4 1.1 2.5 2.5 2.5h20c1.4 0 2.5-1.1 2.5-2.5v-5c0-1.4-1.1-2.5-2.5-2.5h-20z m20 4.4l-3.1 3.1h-3.8l-3.1-3.1-3.1 3.1h-3.8l-3.1-3.1v-1.9h1.9l3.1 3.1 3.1-3.1h3.8l3.1 3.1 3.1-3.1h1.9v1.9z m-15 8.1h10v2.5h-10v-2.5z m5-22.5c-9.6 0-17.5 7.3-17.5 16.2v11.3c0 1.4 1.1 2.5 2.5 2.5h30c1.4 0 2.5-1.1 2.5-2.5v-11.3c0-8.9-7.9-16.2-17.5-16.2z m15 27.5h-30v-11.3c0-7.7 6.6-13.9 15-13.9s15 6.2 15 13.9v11.3z' })
            )
        );
    };

    return GoOcticonHubot;
})(React.Component);

exports['default'] = GoOcticonHubot;
module.exports = exports['default'];