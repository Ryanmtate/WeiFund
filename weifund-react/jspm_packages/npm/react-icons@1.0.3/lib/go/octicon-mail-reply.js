/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonMailReply = (function (_React$Component) {
    _inherits(GoOcticonMailReply, _React$Component);

    function GoOcticonMailReply() {
        _classCallCheck(this, GoOcticonMailReply);

        _React$Component.apply(this, arguments);
    }

    GoOcticonMailReply.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 6.2l-15 11.3 15 11.2v-7.5c4.3 0 12.9 2.4 15 11 0-11.4-7.7-17.6-15-18.5v-7.5z' })
            )
        );
    };

    return GoOcticonMailReply;
})(React.Component);

exports['default'] = GoOcticonMailReply;
module.exports = exports['default'];