/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdFormatSize = (function (_React$Component) {
    _inherits(MdFormatSize, _React$Component);

    function MdFormatSize() {
        _classCallCheck(this, MdFormatSize);

        _React$Component.apply(this, arguments);
    }

    MdFormatSize.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm5 20v-5h15v5h-5v11.64h-5v-11.64h-5z m10-13.360000000000001h21.64v5h-8.283333333333331v20h-5v-20h-8.35666666666667v-5z' })
            )
        );
    };

    return MdFormatSize;
})(React.Component);

exports['default'] = MdFormatSize;
module.exports = exports['default'];