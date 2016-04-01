/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoMailReply = (function (_React$Component) {
    _inherits(GoMailReply, _React$Component);

    function GoMailReply() {
        _classCallCheck(this, GoMailReply);

        _React$Component.apply(this, arguments);
    }

    GoMailReply.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 6.25l-15 11.25 15 11.25v-7.5c4.337499999999999 0 12.850000000000001 2.3825000000000003 15 10.9375 0-11.3675-7.65625-17.6175-15-18.4375v-7.5z' })
            )
        );
    };

    return GoMailReply;
})(React.Component);

exports['default'] = GoMailReply;
module.exports = exports['default'];