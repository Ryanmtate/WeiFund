/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPictureAsPdf = (function (_React$Component) {
    _inherits(MdPictureAsPdf, _React$Component);

    function MdPictureAsPdf() {
        _classCallCheck(this, MdPictureAsPdf);

        _React$Component.apply(this, arguments);
    }

    MdPictureAsPdf.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm33.3 3.3h-20c-1.8 0-3.3 1.5-3.3 3.4v20c0 1.8 1.5 3.3 3.3 3.3h20c1.9 0 3.4-1.5 3.4-3.3v-20c0-1.9-1.5-3.4-3.4-3.4z m-14.1 12.5c0 1.4-1.1 2.5-2.5 2.5h-1.7v3.4h-2.5v-10h4.2c1.4 0 2.5 1.1 2.5 2.5v1.6z m8.3 3.4c0 1.4-1.1 2.5-2.5 2.5h-4.2v-10h4.2c1.4 0 2.5 1.1 2.5 2.5v5z m6.7-5h-2.5v1.6h2.5v2.5h-2.5v3.4h-2.5v-10h5v2.5z m-19.2 1.6h1.7v-1.6h-1.7v1.6z m-8.3-5.8h-3.4v23.3c0 1.9 1.5 3.4 3.4 3.4h23.3v-3.4h-23.3v-23.3z m16.6 9.2h1.7v-5h-1.7v5z' })
            )
        );
    };

    return MdPictureAsPdf;
})(React.Component);

exports['default'] = MdPictureAsPdf;
module.exports = exports['default'];