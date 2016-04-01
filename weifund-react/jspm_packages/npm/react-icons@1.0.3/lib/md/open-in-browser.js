/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdOpenInBrowser = (function (_React$Component) {
    _inherits(MdOpenInBrowser, _React$Component);

    function MdOpenInBrowser() {
        _classCallCheck(this, MdOpenInBrowser);

        _React$Component.apply(this, arguments);
    }

    MdOpenInBrowser.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm31.7 6.7h-23.4c-1.8 0-3.3 1.5-3.3 3.3v20c0 1.8 1.5 3.3 3.3 3.3h6.7v-3.3h-6.7v-16.7h23.4v16.7h-6.7v3.3h6.7c1.8 0 3.3-1.5 3.3-3.3v-20c0-1.8-1.5-3.3-3.3-3.3z m-11.7 10l-6.7 6.6h5v10h3.4v-10h5l-6.7-6.6z' })
            )
        );
    };

    return MdOpenInBrowser;
})(React.Component);

exports['default'] = MdOpenInBrowser;
module.exports = exports['default'];