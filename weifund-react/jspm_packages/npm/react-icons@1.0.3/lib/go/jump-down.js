/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoJumpDown = (function (_React$Component) {
    _inherits(GoJumpDown, _React$Component);

    function GoJumpDown() {
        _classCallCheck(this, GoJumpDown);

        _React$Component.apply(this, arguments);
    }

    GoJumpDown.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm34.99 7.5h-29.980000000000004l14.990000000000002 14.990000000000002 14.990000000000002-14.990000000000002z m-29.990000000000002 20v5h30v-5h-30z' })
            )
        );
    };

    return GoJumpDown;
})(React.Component);

exports['default'] = GoJumpDown;
module.exports = exports['default'];