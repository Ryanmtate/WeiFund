/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonRss = (function (_React$Component) {
    _inherits(GoOcticonRss, _React$Component);

    function GoOcticonRss() {
        _classCallCheck(this, GoOcticonRss);

        _React$Component.apply(this, arguments);
    }

    GoOcticonRss.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm12.5 32.5h-5v-5c2.8 0 5 2.2 5 5z m-5-25v2.5c12.4 0 22.5 10.1 22.5 22.5h2.5c0-13.8-11.2-25-25-25z m0 10v2.5c6.9 0 12.5 5.6 12.5 12.5h2.5c0-8.3-6.7-15-15-15z' })
            )
        );
    };

    return GoOcticonRss;
})(React.Component);

exports['default'] = GoOcticonRss;
module.exports = exports['default'];