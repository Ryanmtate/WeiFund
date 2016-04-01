/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoMoveLeft = (function (_React$Component) {
    _inherits(GoMoveLeft, _React$Component);

    function GoMoveLeft() {
        _classCallCheck(this, GoMoveLeft);

        _React$Component.apply(this, arguments);
    }

    GoMoveLeft.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm0 32.5h7.5v-25h-7.5v25z m27.5-17.5v-7.5l-15 12.5 15 12.5v-7.5h12.5v-10h-12.5z' })
            )
        );
    };

    return GoMoveLeft;
})(React.Component);

exports['default'] = GoMoveLeft;
module.exports = exports['default'];