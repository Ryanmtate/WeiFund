/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonX = (function (_React$Component) {
    _inherits(GoOcticonX, _React$Component);

    function GoOcticonX() {
        _classCallCheck(this, GoOcticonX);

        _React$Component.apply(this, arguments);
    }

    GoOcticonX.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm23.7 20l9.4 9.4-3.7 3.7-9.4-9.4-9.4 9.4-3.7-3.7 9.4-9.4-9.4-9.4 3.7-3.7 9.4 9.4 9.4-9.4 3.7 3.7-9.4 9.4z' })
            )
        );
    };

    return GoOcticonX;
})(React.Component);

exports['default'] = GoOcticonX;
module.exports = exports['default'];