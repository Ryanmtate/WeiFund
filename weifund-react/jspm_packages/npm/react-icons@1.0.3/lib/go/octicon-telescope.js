/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonTelescope = (function (_React$Component) {
    _inherits(GoOcticonTelescope, _React$Component);

    function GoOcticonTelescope() {
        _classCallCheck(this, GoOcticonTelescope);

        _React$Component.apply(this, arguments);
    }

    GoOcticonTelescope.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm22.5 22.5l7.5 15h-2.5l-5-10v12.5h-2.5v-15l-5 12.5h-2.5l5-12.5 5-2.5z m-2.5-22.5h-2.5v2.5h2.5v-2.5z m-5 7.5h-2.5v2.5h2.5v-2.5z m-7.5-5h-2.5v2.5h2.5v-2.5z m-3.4 20c-0.6 0.4-0.7 1.1-0.4 1.7l1.3 2.3c0.4 0.6 1.1 0.8 1.6 0.5l3.5-1.6-2.9-5-3.1 2.1z m19.7-13.5l-14.5 9.9 3.1 5.4 15.8-7.6-4.4-7.7z m10.5 3.2l-3.6-6.3c-0.4-0.6-1.2-0.8-1.8-0.4l-3 2.1 4.6 8 3.3-1.6c0.7-0.3 0.9-1.1 0.5-1.8z' })
            )
        );
    };

    return GoOcticonTelescope;
})(React.Component);

exports['default'] = GoOcticonTelescope;
module.exports = exports['default'];