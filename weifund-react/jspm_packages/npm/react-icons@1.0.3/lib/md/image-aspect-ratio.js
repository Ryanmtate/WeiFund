/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdImageAspectRatio = (function (_React$Component) {
    _inherits(MdImageAspectRatio, _React$Component);

    function MdImageAspectRatio() {
        _classCallCheck(this, MdImageAspectRatio);

        _React$Component.apply(this, arguments);
    }

    MdImageAspectRatio.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm26.7 16.7h-3.4v3.3h3.4v-3.3z m0 6.6h-3.4v3.4h3.4v-3.4z m-13.4-6.6h-3.3v3.3h3.3v-3.3z m6.7 0h-3.3v3.3h3.3v-3.3z m13.3-10h-26.6c-1.9 0-3.4 1.5-3.4 3.3v20c0 1.8 1.5 3.3 3.4 3.3h26.6c1.9 0 3.4-1.5 3.4-3.3v-20c0-1.8-1.5-3.3-3.4-3.3z m0 23.3h-26.6v-20h26.6v20z' })
            )
        );
    };

    return MdImageAspectRatio;
})(React.Component);

exports['default'] = MdImageAspectRatio;
module.exports = exports['default'];