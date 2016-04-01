/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdFormatStrikethrough = (function (_React$Component) {
    _inherits(MdFormatStrikethrough, _React$Component);

    function MdFormatStrikethrough() {
        _classCallCheck(this, MdFormatStrikethrough);

        _React$Component.apply(this, arguments);
    }

    MdFormatStrikethrough.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm5 23.36v-3.3599999999999994h30v3.3599999999999994h-30z m3.360000000000001-16.72h23.28333333333334v5h-8.283333333333331v5h-6.716666666666669v-5h-8.283333333333333v-5z m8.28 25v-5h6.716666666666669v5h-6.716666666666669z' })
            )
        );
    };

    return MdFormatStrikethrough;
})(React.Component);

exports['default'] = MdFormatStrikethrough;
module.exports = exports['default'];