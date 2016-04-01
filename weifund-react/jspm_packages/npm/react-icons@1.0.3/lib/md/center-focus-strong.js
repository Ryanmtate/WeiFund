/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdCenterFocusStrong = (function (_React$Component) {
    _inherits(MdCenterFocusStrong, _React$Component);

    function MdCenterFocusStrong() {
        _classCallCheck(this, MdCenterFocusStrong);

        _React$Component.apply(this, arguments);
    }

    MdCenterFocusStrong.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 13.3c-3.7 0-6.7 3-6.7 6.7s3 6.7 6.7 6.7 6.7-3 6.7-6.7-3-6.7-6.7-6.7z m-11.7 11.7h-3.3v6.7c0 1.8 1.5 3.3 3.3 3.3h6.7v-3.3h-6.7v-6.7z m0-16.7h6.7v-3.3h-6.7c-1.8 0-3.3 1.5-3.3 3.3v6.7h3.3v-6.7z m23.4-3.3h-6.7v3.3h6.7v6.7h3.3v-6.7c0-1.8-1.5-3.3-3.3-3.3z m0 26.7h-6.7v3.3h6.7c1.8 0 3.3-1.5 3.3-3.3v-6.7h-3.3v6.7z' })
            )
        );
    };

    return MdCenterFocusStrong;
})(React.Component);

exports['default'] = MdCenterFocusStrong;
module.exports = exports['default'];