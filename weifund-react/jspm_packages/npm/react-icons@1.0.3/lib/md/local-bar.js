/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdLocalBar = (function (_React$Component) {
    _inherits(MdLocalBar, _React$Component);

    function MdLocalBar() {
        _classCallCheck(this, MdLocalBar);

        _React$Component.apply(this, arguments);
    }

    MdLocalBar.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm12.421666666666667 11.64h15.156666666666666l2.9666666666666686-3.283333333333333h-21.090000000000003z m22.578333333333333-3.2799999999999994l-13.36 14.999999999999998v8.283333333333331h8.36v3.356666666666669h-20v-3.3583333333333343h8.36v-8.283333333333331l-13.36-14.998333333333333v-3.360000000000001h30v3.3599999999999994z' })
            )
        );
    };

    return MdLocalBar;
})(React.Component);

exports['default'] = MdLocalBar;
module.exports = exports['default'];