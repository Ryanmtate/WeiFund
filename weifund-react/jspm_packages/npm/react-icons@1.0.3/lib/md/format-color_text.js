/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdFormatColorText = (function (_React$Component) {
    _inherits(MdFormatColorText, _React$Component);

    function MdFormatColorText() {
        _classCallCheck(this, MdFormatColorText);

        _React$Component.apply(this, arguments);
    }

    MdFormatColorText.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm16.016666666666666 20h7.966666666666669l-3.9833333333333343-10.546666666666667z m2.3433333333333337-15h3.2833333333333314l9.138333333333335 23.36h-3.75l-1.8000000000000007-5h-10.465l-1.875 5h-3.75z m-18.36 28.36h40v6.640000000000001h-40v-6.640000000000001z' })
            )
        );
    };

    return MdFormatColorText;
})(React.Component);

exports['default'] = MdFormatColorText;
module.exports = exports['default'];