/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoMail = (function (_React$Component) {
    _inherits(GoMail, _React$Component);

    function GoMail() {
        _classCallCheck(this, GoMail);

        _React$Component.apply(this, arguments);
    }

    GoMail.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm2.5 7.5v25h35v-25h-35z m30 2.5l-12.5 10.3125-12.5-10.3125h25z m-27.5 2.5l9.845 7.484999999999999-9.845 7.515000000000001v-15z m2.5 17.5l9.9225-8.056249999999999 2.5775000000000006 1.9624999999999986 2.5749999999999993-1.9574999999999996 9.925 8.05125h-25z m27.5-2.5l-9.85875-7.502499999999998 9.85875-7.497500000000002v15z' })
            )
        );
    };

    return GoMail;
})(React.Component);

exports['default'] = GoMail;
module.exports = exports['default'];