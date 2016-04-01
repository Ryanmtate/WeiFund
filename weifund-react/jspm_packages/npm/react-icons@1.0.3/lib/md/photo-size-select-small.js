/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPhotoSizeSelectSmall = (function (_React$Component) {
    _inherits(MdPhotoSizeSelectSmall, _React$Component);

    function MdPhotoSizeSelectSmall() {
        _classCallCheck(this, MdPhotoSizeSelectSmall);

        _React$Component.apply(this, arguments);
    }

    MdPhotoSizeSelectSmall.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm38.3 25h-3.3v3.3h3.3v-3.3z m0-6.7h-3.3v3.4h3.3v-3.4z m0 13.4h-3.3v3.3c1.7 0 3.3-1.7 3.3-3.3z m-13.3-26.7h-3.3v3.3h3.3v-3.3z m13.3 6.7h-3.3v3.3h3.3v-3.3z m-3.3-6.7v3.3h3.3c0-1.6-1.6-3.3-3.3-3.3z m-30 30h13.3v-10h-16.6v6.7c0 1.8 1.5 3.3 3.3 3.3z m0-23.3h-3.3v3.3h3.3v-3.3z m20 20h-3.3v3.3h3.3v-3.3z m6.7-26.7h-3.4v3.3h3.4v-3.3z m0 26.7h-3.4v3.3h3.4v-3.3z m-26.7-26.7c-1.7 0-3.3 1.7-3.3 3.3h3.3v-3.3z m0 13.3h-3.3v3.4h3.3v-3.4z m13.3-13.3h-3.3v3.3h3.3v-3.3z m-6.6 0h-3.4v3.3h3.4v-3.3z' })
            )
        );
    };

    return MdPhotoSizeSelectSmall;
})(React.Component);

exports['default'] = MdPhotoSizeSelectSmall;
module.exports = exports['default'];