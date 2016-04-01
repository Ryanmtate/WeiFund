/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonKeyboard = (function (_React$Component) {
    _inherits(GoOcticonKeyboard, _React$Component);

    function GoOcticonKeyboard() {
        _classCallCheck(this, GoOcticonKeyboard);

        _React$Component.apply(this, arguments);
    }

    GoOcticonKeyboard.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm25 12.5h-2.5v-2.5h2.5v2.5z m-17.5 2.5h-2.5v2.5h2.5v-2.5z m12.5-5h-2.5v2.5h2.5v-2.5z m-10 0h-5v2.5h5v-2.5z m20 17.5h5v-2.5h-5v2.5z m-10-10h2.5v-2.5h-2.5v2.5z m-10 7.5h-5v2.5h5v-2.5z m20-15h-2.5v2.5h2.5v-2.5z m5 0h-2.5v2.5h2.5v-2.5z m-5 12.5h5v-7.5h-5v7.5z m10-15v22.5c0 1.4-1.1 2.5-2.5 2.5h-35c-1.4 0-2.5-1.1-2.5-2.5v-22.5c0-1.4 1.1-2.5 2.5-2.5h35c1.4 0 2.5 1.1 2.5 2.5z m-2.5 0h-35v22.5h35v-22.5z m-22.5 10h2.5v-2.5h-2.5v2.5z m0-7.5h-2.5v2.5h2.5v-2.5z m-5 7.5h2.5v-2.5h-2.5v2.5z m2.5 10h15v-2.5h-15v2.5z m12.5-10h2.5v-2.5h-2.5v2.5z m-17.5 2.5h-2.5v2.5h2.5v-2.5z m12.5 0v2.5h2.5v-2.5h-2.5z m-5 0v2.5h2.5v-2.5h-2.5z m-2.5 0h-2.5v2.5h2.5v-2.5z m12.5 2.5h2.5v-2.5h-2.5v2.5z' })
            )
        );
    };

    return GoOcticonKeyboard;
})(React.Component);

exports['default'] = GoOcticonKeyboard;
module.exports = exports['default'];