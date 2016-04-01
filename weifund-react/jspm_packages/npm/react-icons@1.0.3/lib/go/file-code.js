/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoFileCode = (function (_React$Component) {
    _inherits(GoFileCode, _React$Component);

    function GoFileCode() {
        _classCallCheck(this, GoFileCode);

        _React$Component.apply(this, arguments);
    }

    GoFileCode.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm16.25 15l-6.25 6.25 6.25 6.25 2.5-2.5-3.75-3.75 3.75-3.75-2.5-2.5z m5 2.5l3.75 3.75-3.75 3.75 2.5 2.5 6.25-6.25-6.25-6.25-2.5 2.5z m6.25-15h-22.5v35h30v-27.5l-7.5-7.5z m5 32.5h-25v-30h17.5l7.5 7.5v22.5z' })
            )
        );
    };

    return GoFileCode;
})(React.Component);

exports['default'] = GoFileCode;
module.exports = exports['default'];