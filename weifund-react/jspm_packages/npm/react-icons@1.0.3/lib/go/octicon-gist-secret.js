/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonGistSecret = (function (_React$Component) {
    _inherits(GoOcticonGistSecret, _React$Component);

    function GoOcticonGistSecret() {
        _classCallCheck(this, GoOcticonGistSecret);

        _React$Component.apply(this, arguments);
    }

    GoOcticonGistSecret.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm22.5 26.2l2.5 8.8h-10l2.5-8.8-1.9-3.7h8.8l-1.9 3.7z m5-11.2h-15l-5 2.5h25l-5-2.5z m-2.5-10l-5 2.5-5-2.5-2.5 7.5h15l-2.5-7.5z m10.1 19.4l-7.6-1.9 2.5 5-5 7.5h8c1.2 0 2.2-0.8 2.5-1.9l1.4-5.7c0.3-1.3-0.5-2.7-1.8-3z m-22.6-1.9l-7.6 1.9c-1.3 0.3-2.1 1.7-1.8 3l1.4 5.7c0.3 1.1 1.3 1.9 2.5 1.9h8l-5-7.5 2.5-5z' })
            )
        );
    };

    return GoOcticonGistSecret;
})(React.Component);

exports['default'] = GoOcticonGistSecret;
module.exports = exports['default'];