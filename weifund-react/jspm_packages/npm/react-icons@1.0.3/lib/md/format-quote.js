/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdFormatQuote = (function (_React$Component) {
    _inherits(MdFormatQuote, _React$Component);

    function MdFormatQuote() {
        _classCallCheck(this, MdFormatQuote);

        _React$Component.apply(this, arguments);
    }

    MdFormatQuote.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm23.36 28.36l3.2833333333333314-6.716666666666669h-5v-10h10v10l-3.2833333333333314 6.716666666666669h-5z m-13.360000000000001 0l3.360000000000001-6.716666666666669h-5v-10h10v10l-3.3599999999999994 6.715000000000003h-5z' })
            )
        );
    };

    return MdFormatQuote;
})(React.Component);

exports['default'] = MdFormatQuote;
module.exports = exports['default'];