/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonChevronRight = (function (_React$Component) {
    _inherits(GoOcticonChevronRight, _React$Component);

    function GoOcticonChevronRight() {
        _classCallCheck(this, GoOcticonChevronRight);

        _React$Component.apply(this, arguments);
    }

    GoOcticonChevronRight.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm28.7 20l-12.4 12.5-3.8-3.8 9.4-8.7-9.4-8.8 3.8-3.7 12.4 12.5z' })
            )
        );
    };

    return GoOcticonChevronRight;
})(React.Component);

exports['default'] = GoOcticonChevronRight;
module.exports = exports['default'];