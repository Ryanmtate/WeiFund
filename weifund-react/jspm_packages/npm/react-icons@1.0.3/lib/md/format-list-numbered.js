/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdFormatListNumbered = (function (_React$Component) {
    _inherits(MdFormatListNumbered, _React$Component);

    function MdFormatListNumbered() {
        _classCallCheck(this, MdFormatListNumbered);

        _React$Component.apply(this, arguments);
    }

    MdFormatListNumbered.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm3.3 28.3h3.4v0.9h-1.7v1.6h1.7v0.9h-3.4v1.6h5v-6.6h-5v1.6z m1.7-15h1.7v-6.6h-3.4v1.6h1.7v5z m-1.7 5h3l-3 3.5v1.5h5v-1.6h-3l3-3.5v-1.5h-5v1.6z m8.4-10v3.4h23.3v-3.4h-23.3z m0 23.4h23.3v-3.4h-23.3v3.4z m0-10h23.3v-3.4h-23.3v3.4z' })
            )
        );
    };

    return MdFormatListNumbered;
})(React.Component);

exports['default'] = MdFormatListNumbered;
module.exports = exports['default'];