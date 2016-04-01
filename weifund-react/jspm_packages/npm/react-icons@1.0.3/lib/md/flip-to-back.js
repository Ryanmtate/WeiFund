/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdFlipToBack = (function (_React$Component) {
    _inherits(MdFlipToBack, _React$Component);

    function MdFlipToBack() {
        _classCallCheck(this, MdFlipToBack);

        _React$Component.apply(this, arguments);
    }

    MdFlipToBack.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm15 11.7h-3.3v3.3h3.3v-3.3z m0 6.6h-3.3v3.4h3.3v-3.4z m0-13.3c-1.8 0-3.3 1.5-3.3 3.3h3.3v-3.3z m6.7 20h-3.4v3.3h3.4v-3.3z m10-20v3.3h3.3c0-1.8-1.5-3.3-3.3-3.3z m-10 0h-3.4v3.3h3.4v-3.3z m-6.7 23.3v-3.3h-3.3c0 1.8 1.5 3.3 3.3 3.3z m16.7-6.6h3.3v-3.4h-3.3v3.4z m0-6.7h3.3v-3.3h-3.3v3.3z m0 13.3c1.8 0 3.3-1.5 3.3-3.3h-3.3v3.3z m-23.4-16.6h-3.3v20c0 1.8 1.5 3.3 3.3 3.3h20v-3.3h-20v-20z m16.7-3.4h3.3v-3.3h-3.3v3.3z m0 20h3.3v-3.3h-3.3v3.3z' })
            )
        );
    };

    return MdFlipToBack;
})(React.Component);

exports['default'] = MdFlipToBack;
module.exports = exports['default'];