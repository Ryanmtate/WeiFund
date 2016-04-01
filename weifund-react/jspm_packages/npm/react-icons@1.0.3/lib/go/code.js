/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoCode = (function (_React$Component) {
    _inherits(GoCode, _React$Component);

    function GoCode() {
        _classCallCheck(this, GoCode);

        _React$Component.apply(this, arguments);
    }

    GoCode.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm26.25 7.5l-3.75 3.75 8.75 8.75-8.75 8.75 3.75 3.75 11.25-12.5-11.25-12.5z m-12.5 0l-11.25 12.5 11.25 12.5 3.75-3.75-8.75-8.75 8.75-8.75-3.75-3.75z' })
            )
        );
    };

    return GoCode;
})(React.Component);

exports['default'] = GoCode;
module.exports = exports['default'];