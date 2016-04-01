/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaCaretLeft = (function (_React$Component) {
    _inherits(FaCaretLeft, _React$Component);

    function FaCaretLeft() {
        _classCallCheck(this, FaCaretLeft);

        _React$Component.apply(this, arguments);
    }

    FaCaretLeft.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm26.42857142857143 10v20q0 0.5799999999999983-0.4242857142857126 1.0042857142857144t-1.004285714285718 0.42428571428571615-1.0042857142857144-0.4242857142857126l-10-10q-0.4242857142857144-0.42428571428571615-0.4242857142857144-1.004285714285718t0.4242857142857144-1.0042857142857144l10-10q0.42428571428571615-0.4242857142857144 1.0042857142857144-0.4242857142857144t1.0042857142857144 0.4242857142857144 0.42428571428571615 1.0042857142857144z' })
            )
        );
    };

    return FaCaretLeft;
})(React.Component);

exports['default'] = FaCaretLeft;
module.exports = exports['default'];