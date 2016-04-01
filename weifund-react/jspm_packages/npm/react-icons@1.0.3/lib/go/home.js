/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoHome = (function (_React$Component) {
    _inherits(GoHome, _React$Component);

    function GoHome() {
        _classCallCheck(this, GoHome);

        _React$Component.apply(this, arguments);
    }

    GoHome.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm7.5 22.5l2.5 15h7.5v-12.5h5v12.5h7.5l2.5-15-12.5-12.5-12.5 12.5z m25-7.5v-10h-5l0.01249999999999929 5.012499999999999-7.512499999999999-7.512499999999999-20 20h5l15-15 15 15h5l-7.5-7.5z' })
            )
        );
    };

    return GoHome;
})(React.Component);

exports['default'] = GoHome;
module.exports = exports['default'];