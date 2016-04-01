/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdFormatAlignCenter = (function (_React$Component) {
    _inherits(MdFormatAlignCenter, _React$Component);

    function MdFormatAlignCenter() {
        _classCallCheck(this, MdFormatAlignCenter);

        _React$Component.apply(this, arguments);
    }

    MdFormatAlignCenter.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm11.7 25v3.3h16.6v-3.3h-16.6z m-6.7 10h30v-3.3h-30v3.3z m0-13.3h30v-3.4h-30v3.4z m6.7-10v3.3h16.6v-3.3h-16.6z m-6.7-6.7v3.3h30v-3.3h-30z' })
            )
        );
    };

    return MdFormatAlignCenter;
})(React.Component);

exports['default'] = MdFormatAlignCenter;
module.exports = exports['default'];