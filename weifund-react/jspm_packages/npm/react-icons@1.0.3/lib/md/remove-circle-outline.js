/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdRemoveCircleOutline = (function (_React$Component) {
    _inherits(MdRemoveCircleOutline, _React$Component);

    function MdRemoveCircleOutline() {
        _classCallCheck(this, MdRemoveCircleOutline);

        _React$Component.apply(this, arguments);
    }

    MdRemoveCircleOutline.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm11.7 18.3v3.4h16.6v-3.4h-16.6z m8.3-15c-9.2 0-16.7 7.5-16.7 16.7s7.5 16.7 16.7 16.7 16.7-7.5 16.7-16.7-7.5-16.7-16.7-16.7z m0 30c-7.4 0-13.3-5.9-13.3-13.3s5.9-13.3 13.3-13.3 13.3 5.9 13.3 13.3-5.9 13.3-13.3 13.3z' })
            )
        );
    };

    return MdRemoveCircleOutline;
})(React.Component);

exports['default'] = MdRemoveCircleOutline;
module.exports = exports['default'];