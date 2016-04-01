/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoJumpUp = (function (_React$Component) {
    _inherits(GoJumpUp, _React$Component);

    function GoJumpUp() {
        _classCallCheck(this, GoJumpUp);

        _React$Component.apply(this, arguments);
    }

    GoJumpUp.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm5.0075 32.5h29.979999999999997l-14.987499999999997-14.990000000000002-14.9925 14.990000000000002z m-0.007500000000000284-25v5h30v-5h-30z' })
            )
        );
    };

    return GoJumpUp;
})(React.Component);

exports['default'] = GoJumpUp;
module.exports = exports['default'];