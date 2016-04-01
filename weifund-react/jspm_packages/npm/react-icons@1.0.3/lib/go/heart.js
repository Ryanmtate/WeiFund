/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoHeart = (function (_React$Component) {
    _inherits(GoHeart, _React$Component);

    function GoHeart() {
        _classCallCheck(this, GoHeart);

        _React$Component.apply(this, arguments);
    }

    GoHeart.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 33.75c15.587499999999999-12.26625 15-16.599999999999998 15-20s-2.8125-7.5-7.5-7.5-7.5 5-7.5 5-2.8125-5-7.5-5-7.5 4.1-7.5 7.5-0.5875000000000004 7.734999999999999 15 20z' })
            )
        );
    };

    return GoHeart;
})(React.Component);

exports['default'] = GoHeart;
module.exports = exports['default'];