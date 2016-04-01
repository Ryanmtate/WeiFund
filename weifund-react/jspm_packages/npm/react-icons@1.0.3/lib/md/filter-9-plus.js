/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdFilter9Plus = (function (_React$Component) {
    _inherits(MdFilter9Plus, _React$Component);

    function MdFilter9Plus() {
        _classCallCheck(this, MdFilter9Plus);

        _React$Component.apply(this, arguments);
    }

    MdFilter9Plus.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm5 8.3h-3.3v26.7c0 1.8 1.5 3.3 3.3 3.3h26.7v-3.3h-26.7v-26.7z m18.3 11.7v-6.7c0-1.8-1.5-3.3-3.3-3.3h-1.7c-1.8 0-3.3 1.5-3.3 3.3v1.7c0 1.9 1.5 3.3 3.3 3.3h1.7v1.7h-5v3.3h5c1.8 0 3.3-1.5 3.3-3.3z m-5-5v-1.7h1.7v1.7h-1.7z m16.7-13.3h-23.3c-1.9 0-3.4 1.5-3.4 3.3v23.3c0 1.9 1.5 3.4 3.4 3.4h23.3c1.8 0 3.3-1.5 3.3-3.4v-23.3c0-1.8-1.5-3.3-3.3-3.3z m0 13.3h-3.3v-3.3h-3.4v3.3h-3.3v3.3h3.3v3.4h3.4v-3.4h3.3v10h-23.3v-23.3h23.3v10z' })
            )
        );
    };

    return MdFilter9Plus;
})(React.Component);

exports['default'] = MdFilter9Plus;
module.exports = exports['default'];