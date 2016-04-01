/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonLocation = (function (_React$Component) {
    _inherits(GoOcticonLocation, _React$Component);

    function GoOcticonLocation() {
        _classCallCheck(this, GoOcticonLocation);

        _React$Component.apply(this, arguments);
    }

    GoOcticonLocation.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 0c-8.3 0-15 6.2-15 13.7 0 11.3 15 26.3 15 26.3s15-15 15-26.3c0-7.5-6.7-13.7-15-13.7z m0 36.4c-4.6-5.1-12.5-15.3-12.5-22.7 0-6.2 5.6-11.2 12.5-11.2 3.4 0 6.5 1.2 8.9 3.4 2.3 2.1 3.6 4.9 3.6 7.8 0 7.4-7.9 17.6-12.5 22.7z m5-22.7c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5 5 2.3 5 5z' })
            )
        );
    };

    return GoOcticonLocation;
})(React.Component);

exports['default'] = GoOcticonLocation;
module.exports = exports['default'];