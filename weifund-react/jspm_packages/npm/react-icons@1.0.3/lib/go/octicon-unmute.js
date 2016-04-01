/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonUnmute = (function (_React$Component) {
    _inherits(GoOcticonUnmute, _React$Component);

    function GoOcticonUnmute() {
        _classCallCheck(this, GoOcticonUnmute);

        _React$Component.apply(this, arguments);
    }

    GoOcticonUnmute.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm27.5 20c0 2.8-1.1 5.3-2.9 7.1l-1.7-1.7c1.4-1.4 2.2-3.3 2.2-5.4s-0.8-4-2.2-5.4l1.7-1.6c1.8 1.8 2.9 4.3 2.9 7z m-10.7-14.3l-9.3 9.3h-5c-1.4 0-2.5 1.1-2.5 2.5v5c0 1.4 1.1 2.5 2.5 2.5h5l9.3 9.3c1.2 1.2 3.2 0.3 3.2-1.3v-26c0-1.6-2-2.5-3.2-1.3z m14.8 0.2l-1.6 1.7c3.2 3.2 5.1 7.6 5.1 12.4 0 4.9-1.9 9.3-5.1 12.5l1.6 1.7c3.7-3.7 5.9-8.7 5.9-14.2 0-5.5-2.2-10.5-5.9-14.1z m-3.5 3.5l-1.7 1.7c2.3 2.3 3.7 5.5 3.7 8.9s-1.4 6.7-3.7 8.9l1.7 1.7c2.7-2.7 4.4-6.4 4.4-10.6s-1.7-7.9-4.4-10.6z' })
            )
        );
    };

    return GoOcticonUnmute;
})(React.Component);

exports['default'] = GoOcticonUnmute;
module.exports = exports['default'];