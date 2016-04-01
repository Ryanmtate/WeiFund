/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdFormatIndentDecrease = (function (_React$Component) {
    _inherits(MdFormatIndentDecrease, _React$Component);

    function MdFormatIndentDecrease() {
        _classCallCheck(this, MdFormatIndentDecrease);

        _React$Component.apply(this, arguments);
    }

    MdFormatIndentDecrease.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm18.3 28.3h16.7v-3.3h-16.7v3.3z m-13.3-8.3l6.7 6.7v-13.4l-6.7 6.7z m0 15h30v-3.3h-30v3.3z m0-30v3.3h30v-3.3h-30z m13.3 10h16.7v-3.3h-16.7v3.3z m0 6.7h16.7v-3.4h-16.7v3.4z' })
            )
        );
    };

    return MdFormatIndentDecrease;
})(React.Component);

exports['default'] = MdFormatIndentDecrease;
module.exports = exports['default'];