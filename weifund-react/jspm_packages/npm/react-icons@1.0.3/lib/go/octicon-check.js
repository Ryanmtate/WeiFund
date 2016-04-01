/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonCheck = (function (_React$Component) {
    _inherits(GoOcticonCheck, _React$Component);

    function GoOcticonCheck() {
        _classCallCheck(this, GoOcticonCheck);

        _React$Component.apply(this, arguments);
    }

    GoOcticonCheck.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm35 12.5l-20 20-10-10 3.8-3.8 6.2 6.3 16.2-16.3 3.8 3.8z' })
            )
        );
    };

    return GoOcticonCheck;
})(React.Component);

exports['default'] = GoOcticonCheck;
module.exports = exports['default'];