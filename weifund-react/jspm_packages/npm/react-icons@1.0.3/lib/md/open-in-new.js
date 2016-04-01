/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdOpenInNew = (function (_React$Component) {
    _inherits(MdOpenInNew, _React$Component);

    function MdOpenInNew() {
        _classCallCheck(this, MdOpenInNew);

        _React$Component.apply(this, arguments);
    }

    MdOpenInNew.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm31.7 31.7h-23.4v-23.4h11.7v-3.3h-11.7c-1.8 0-3.3 1.5-3.3 3.3v23.4c0 1.8 1.5 3.3 3.3 3.3h23.4c1.8 0 3.3-1.5 3.3-3.3v-11.7h-3.3v11.7z m-8.4-26.7v3.3h6l-16.4 16.4 2.4 2.4 16.4-16.4v6h3.3v-11.7h-11.7z' })
            )
        );
    };

    return MdOpenInNew;
})(React.Component);

exports['default'] = MdOpenInNew;
module.exports = exports['default'];