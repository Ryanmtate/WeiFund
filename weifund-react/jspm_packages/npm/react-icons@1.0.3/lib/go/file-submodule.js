/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoFileSubmodule = (function (_React$Component) {
    _inherits(GoFileSubmodule, _React$Component);

    function GoFileSubmodule() {
        _classCallCheck(this, GoFileSubmodule);

        _React$Component.apply(this, arguments);
    }

    GoFileSubmodule.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm35 20h-7.5c0-1.25-1.25-2.5-2.5-2.5h-5s-2.5 1.25-2.5 2.5v12.5h20v-10s-1.25-2.5-2.5-2.5z m-10 2.5h-5v-1.25s0.5874999999999986-1.25 1.25-1.25h2.5s1.25 0.5874999999999986 1.25 1.25v1.25z m10-12.5h-13.75s-1.25-0.6624999999999996-1.25-1.25v-1.25s-1.25-2.5-2.5-2.5h-12.5s-2.5 1.25-2.5 2.5v25h12.5v-15s1.25-2.5 2.5-2.5h10s2.5 1.25 2.5 2.5h7.5v-5s-1.25-2.5-2.5-2.5z m-17.5 0h-12.5v-1.25s0.625-1.25 1.25-1.25h10s1.25 0.6624999999999996 1.25 1.25v1.25z' })
            )
        );
    };

    return GoFileSubmodule;
})(React.Component);

exports['default'] = GoFileSubmodule;
module.exports = exports['default'];