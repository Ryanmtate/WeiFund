/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdNavigation = (function (_React$Component) {
    _inherits(MdNavigation, _React$Component);

    function MdNavigation() {
        _classCallCheck(this, MdNavigation);

        _React$Component.apply(this, arguments);
    }

    MdNavigation.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 3.3600000000000003l12.5 30.46666666666667-1.1716666666666669 1.173333333333332-11.328333333333333-5-11.328333333333333 5-1.1716666666666669-1.1716666666666669z' })
            )
        );
    };

    return MdNavigation;
})(React.Component);

exports['default'] = MdNavigation;
module.exports = exports['default'];