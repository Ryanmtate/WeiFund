/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdFormatIndentIncrease = (function (_React$Component) {
    _inherits(MdFormatIndentIncrease, _React$Component);

    function MdFormatIndentIncrease() {
        _classCallCheck(this, MdFormatIndentIncrease);

        _React$Component.apply(this, arguments);
    }

    MdFormatIndentIncrease.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm5 35h30v-3.3h-30v3.3z m0-21.7v13.4l6.7-6.7-6.7-6.7z m13.3 15h16.7v-3.3h-16.7v3.3z m-13.3-23.3v3.3h30v-3.3h-30z m13.3 10h16.7v-3.3h-16.7v3.3z m0 6.7h16.7v-3.4h-16.7v3.4z' })
            )
        );
    };

    return MdFormatIndentIncrease;
})(React.Component);

exports['default'] = MdFormatIndentIncrease;
module.exports = exports['default'];