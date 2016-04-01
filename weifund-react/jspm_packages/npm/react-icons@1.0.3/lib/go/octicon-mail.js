/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonMail = (function (_React$Component) {
    _inherits(GoOcticonMail, _React$Component);

    function GoOcticonMail() {
        _classCallCheck(this, GoOcticonMail);

        _React$Component.apply(this, arguments);
    }

    GoOcticonMail.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm2.5 10v20c0 1.4 1.1 2.5 2.5 2.5h30c1.4 0 2.5-1.1 2.5-2.5v-20c0-1.4-1.1-2.5-2.5-2.5h-30c-1.4 0-2.5 1.1-2.5 2.5z m32.5 0l-15 12.5-15-12.5h30z m-30 3.7l10 7.5-10 7.5v-15z m2.5 16.3l8.8-7.5 3.7 3.7 3.7-3.7 8.8 7.5h-25z m27.5-1.3l-10-7.5 10-7.5v15z' })
            )
        );
    };

    return GoOcticonMail;
})(React.Component);

exports['default'] = GoOcticonMail;
module.exports = exports['default'];