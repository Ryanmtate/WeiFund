/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdVerticalAlignCenter = (function (_React$Component) {
    _inherits(MdVerticalAlignCenter, _React$Component);

    function MdVerticalAlignCenter() {
        _classCallCheck(this, MdVerticalAlignCenter);

        _React$Component.apply(this, arguments);
    }

    MdVerticalAlignCenter.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm13.3 31.7h5v6.6h3.4v-6.6h5l-6.7-6.7-6.7 6.7z m13.4-23.4h-5v-6.6h-3.4v6.6h-5l6.7 6.7 6.7-6.7z m-20 10v3.4h26.6v-3.4h-26.6z' })
            )
        );
    };

    return MdVerticalAlignCenter;
})(React.Component);

exports['default'] = MdVerticalAlignCenter;
module.exports = exports['default'];