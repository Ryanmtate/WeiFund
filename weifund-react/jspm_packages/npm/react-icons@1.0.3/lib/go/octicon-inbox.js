/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonInbox = (function (_React$Component) {
    _inherits(GoOcticonInbox, _React$Component);

    function GoOcticonInbox() {
        _classCallCheck(this, GoOcticonInbox);

        _React$Component.apply(this, arguments);
    }

    GoOcticonInbox.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm37.5 22.5l-2.8-17.9c-0.2-1.2-1.3-2.1-2.5-2.1h-24.4c-1.2 0-2.3 0.9-2.5 2.1l-2.8 17.9v12.5c0 1.4 1.1 2.5 2.5 2.5h30c1.4 0 2.5-1.1 2.5-2.5v-12.5z m-8.2 1.4l-1.1 2.2c-0.4 0.9-1.3 1.4-2.3 1.4h-11.9c-0.9 0-1.8-0.5-2.2-1.4l-1.1-2.2c-0.4-0.9-1.3-1.4-2.2-1.4h-3.5l2.5-17.5h25l2.5 17.5h-3.4c-1 0-1.9 0.5-2.3 1.4z' })
            )
        );
    };

    return GoOcticonInbox;
})(React.Component);

exports['default'] = GoOcticonInbox;
module.exports = exports['default'];