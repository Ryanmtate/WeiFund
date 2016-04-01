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
                React.createElement('path', { d: 'm18.36 21.64v-3.2833333333333314h16.64v3.2833333333333314h-16.64z m0-6.640000000000001v-3.3599999999999994h16.64v3.3599999999999994h-16.64z m-13.36-10h30v3.3599999999999994h-30v-3.3599999999999994z m0 30v-3.3599999999999994h30v3.3599999999999994h-30z m0-15l6.640000000000001-6.640000000000001v13.283333333333331z m13.36 8.36v-3.3599999999999994h16.64v3.3599999999999994h-16.64z' })
            )
        );
    };

    return MdFormatIndentDecrease;
})(React.Component);

exports['default'] = MdFormatIndentDecrease;
module.exports = exports['default'];