/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdKeyboardArrowLeft = (function (_React$Component) {
    _inherits(MdKeyboardArrowLeft, _React$Component);

    function MdKeyboardArrowLeft() {
        _classCallCheck(this, MdKeyboardArrowLeft);

        _React$Component.apply(this, arguments);
    }

    MdKeyboardArrowLeft.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm25.7 26.8l-7.6-7.6 7.6-7.7-2.4-2.3-10 10 10 10z' })
            )
        );
    };

    return MdKeyboardArrowLeft;
})(React.Component);

exports['default'] = MdKeyboardArrowLeft;
module.exports = exports['default'];