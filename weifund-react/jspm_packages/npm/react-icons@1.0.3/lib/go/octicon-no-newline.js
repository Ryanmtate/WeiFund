/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonNoNewline = (function (_React$Component) {
    _inherits(GoOcticonNoNewline, _React$Component);

    function GoOcticonNoNewline() {
        _classCallCheck(this, GoOcticonNoNewline);

        _React$Component.apply(this, arguments);
    }

    GoOcticonNoNewline.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm40 12.5v7.5c0 1.4-1.1 2.5-2.5 2.5h-7.5v5l-7.5-7.5 7.5-7.5v5h5v-5h5z m-20 7.5c0 5.5-4.5 10-10 10s-10-4.5-10-10 4.5-10 10-10 10 4.5 10 10z m-16.2 4.1l10.3-10.4c-1.2-0.7-2.6-1.2-4.1-1.2-4.1 0-7.5 3.4-7.5 7.5 0 1.5 0.5 2.9 1.3 4.1z m13.7-4.1c0-1.5-0.5-2.9-1.2-4.1l-10.4 10.3c1.2 0.8 2.6 1.3 4.1 1.3 4.1 0 7.5-3.4 7.5-7.5z' })
            )
        );
    };

    return GoOcticonNoNewline;
})(React.Component);

exports['default'] = GoOcticonNoNewline;
module.exports = exports['default'];