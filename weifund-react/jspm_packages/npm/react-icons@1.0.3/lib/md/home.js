/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdHome = (function (_React$Component) {
    _inherits(MdHome, _React$Component);

    function MdHome() {
        _classCallCheck(this, MdHome);

        _React$Component.apply(this, arguments);
    }

    MdHome.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm16.64 33.36h-8.283333333333333v-13.36h-5l16.64333333333333-15 16.638333333333335 15h-5v13.36h-8.283333333333331v-10h-6.716666666666669v10z' })
            )
        );
    };

    return MdHome;
})(React.Component);

exports['default'] = MdHome;
module.exports = exports['default'];