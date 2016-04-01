/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonLinkExternal = (function (_React$Component) {
    _inherits(GoOcticonLinkExternal, _React$Component);

    function GoOcticonLinkExternal() {
        _classCallCheck(this, GoOcticonLinkExternal);

        _React$Component.apply(this, arguments);
    }

    GoOcticonLinkExternal.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm32.5 25h2.5v7.5c0 1.4-1.1 2.5-2.5 2.5h-25c-1.4 0-2.5-1.1-2.5-2.5v-25c0-1.4 1.1-2.5 2.5-2.5h7.5v2.5h-7.5v25h25v-7.5z m-12.5-20l5.6 5.6-8.1 8.1 3.7 3.8 8.2-8.1 5.6 5.6v-15h-15z' })
            )
        );
    };

    return GoOcticonLinkExternal;
})(React.Component);

exports['default'] = GoOcticonLinkExternal;
module.exports = exports['default'];