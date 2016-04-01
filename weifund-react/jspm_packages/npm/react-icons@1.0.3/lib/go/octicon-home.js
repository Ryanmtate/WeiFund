/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonHome = (function (_React$Component) {
    _inherits(GoOcticonHome, _React$Component);

    function GoOcticonHome() {
        _classCallCheck(this, GoOcticonHome);

        _React$Component.apply(this, arguments);
    }

    GoOcticonHome.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm40 22.5l-7.5-7.5v-10h-5v5l-7.5-7.5-20 20h5l2.5 12.5c0 1.4 1.1 2.5 2.5 2.5h20c1.4 0 2.5-1.1 2.5-2.5l2.5-12.5h5z m-10 12.5h-7.5v-10h-5v10h-7.5l-3-15.8 13-13 13 13-3 15.8z' })
            )
        );
    };

    return GoOcticonHome;
})(React.Component);

exports['default'] = GoOcticonHome;
module.exports = exports['default'];