/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdFlipToFront = (function (_React$Component) {
    _inherits(MdFlipToFront, _React$Component);

    function MdFlipToFront() {
        _classCallCheck(this, MdFlipToFront);

        _React$Component.apply(this, arguments);
    }

    MdFlipToFront.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm5 21.7h3.3v-3.4h-3.3v3.4z m0 6.6h3.3v-3.3h-3.3v3.3z m3.3 6.7v-3.3h-3.3c0 1.8 1.5 3.3 3.3 3.3z m-3.3-20h3.3v-3.3h-3.3v3.3z m20 20h3.3v-3.3h-3.3v3.3z m6.7-30h-16.7c-1.8 0-3.3 1.5-3.3 3.3v16.7c0 1.8 1.4 3.3 3.3 3.3h16.7c1.8 0 3.3-1.5 3.3-3.3v-16.7c0-1.8-1.5-3.3-3.3-3.3z m0 20h-16.7v-16.7h16.7v16.7z m-13.4 10h3.4v-3.3h-3.4v3.3z m-6.6 0h3.3v-3.3h-3.3v3.3z' })
            )
        );
    };

    return MdFlipToFront;
})(React.Component);

exports['default'] = MdFlipToFront;
module.exports = exports['default'];