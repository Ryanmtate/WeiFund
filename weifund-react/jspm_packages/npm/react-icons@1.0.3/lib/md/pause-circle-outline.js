/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPauseCircleOutline = (function (_React$Component) {
    _inherits(MdPauseCircleOutline, _React$Component);

    function MdPauseCircleOutline() {
        _classCallCheck(this, MdPauseCircleOutline);

        _React$Component.apply(this, arguments);
    }

    MdPauseCircleOutline.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm15 26.7h3.3v-13.4h-3.3v13.4z m5-23.4c-9.2 0-16.7 7.5-16.7 16.7s7.5 16.7 16.7 16.7 16.7-7.5 16.7-16.7-7.5-16.7-16.7-16.7z m0 30c-7.4 0-13.3-6-13.3-13.3s5.9-13.3 13.3-13.3 13.3 5.9 13.3 13.3-5.9 13.3-13.3 13.3z m1.7-6.6h3.3v-13.4h-3.3v13.4z' })
            )
        );
    };

    return MdPauseCircleOutline;
})(React.Component);

exports['default'] = MdPauseCircleOutline;
module.exports = exports['default'];