/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonChevronDown = (function (_React$Component) {
    _inherits(GoOcticonChevronDown, _React$Component);

    function GoOcticonChevronDown() {
        _classCallCheck(this, GoOcticonChevronDown);

        _React$Component.apply(this, arguments);
    }

    GoOcticonChevronDown.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 27.5l-12.5-12.5 3.8-3.8 8.7 9.4 8.7-9.4 3.8 3.8-12.5 12.5z' })
            )
        );
    };

    return GoOcticonChevronDown;
})(React.Component);

exports['default'] = GoOcticonChevronDown;
module.exports = exports['default'];