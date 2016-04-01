/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonStop = (function (_React$Component) {
    _inherits(GoOcticonStop, _React$Component);

    function GoOcticonStop() {
        _classCallCheck(this, GoOcticonStop);

        _React$Component.apply(this, arguments);
    }

    GoOcticonStop.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm27.5 2.5h-15l-10 10v15l10 10h15l10-10v-15l-10-10z m7.5 23.7l-8.8 8.8h-12.4l-8.8-8.8v-12.5l8.8-8.7h12.4l8.8 8.7v12.5z m-17.5-16.2h5v12.5h-5v-12.5z m0 15h5v5h-5v-5z' })
            )
        );
    };

    return GoOcticonStop;
})(React.Component);

exports['default'] = GoOcticonStop;
module.exports = exports['default'];