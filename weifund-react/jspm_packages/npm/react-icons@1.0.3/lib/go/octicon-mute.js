/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonMute = (function (_React$Component) {
    _inherits(GoOcticonMute, _React$Component);

    function GoOcticonMute() {
        _classCallCheck(this, GoOcticonMute);

        _React$Component.apply(this, arguments);
    }

    GoOcticonMute.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 7v26c0 1.6-2 2.5-3.2 1.3l-9.3-9.3h-5c-1.4 0-2.5-1.1-2.5-2.5v-5c0-1.4 1.1-2.5 2.5-2.5h5l9.3-9.3c1.2-1.2 3.2-0.3 3.2 1.3z m18.8 8.1l-2.6-2.7-5 4.9-4.9-4.9-2.6 2.7 4.9 4.9-4.9 4.9 2.6 2.7 4.9-4.9 5 4.9 2.6-2.7-4.9-4.9 4.9-4.9z' })
            )
        );
    };

    return GoOcticonMute;
})(React.Component);

exports['default'] = GoOcticonMute;
module.exports = exports['default'];