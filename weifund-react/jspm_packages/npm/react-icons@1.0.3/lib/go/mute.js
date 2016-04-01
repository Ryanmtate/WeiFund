/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoMute = (function (_React$Component) {
    _inherits(GoMute, _React$Component);

    function GoMute() {
        _classCallCheck(this, GoMute);

        _React$Component.apply(this, arguments);
    }

    GoMute.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm7.5 15h-5v10h5l10 7.5h2.5v-25h-2.5l-10 7.5z m28.75 1.25l-2.5-2.5-3.75 3.75-3.75-3.75-2.4624999999999986 2.4800000000000004 3.7124999999999986 3.7699999999999996-3.75 3.75 2.5 2.5 3.75-3.75 3.75 3.75 2.5-2.5-3.75-3.75 3.75-3.75z' })
            )
        );
    };

    return GoMute;
})(React.Component);

exports['default'] = GoMute;
module.exports = exports['default'];