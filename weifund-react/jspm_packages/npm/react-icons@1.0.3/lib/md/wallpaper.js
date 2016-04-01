/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdWallpaper = (function (_React$Component) {
    _inherits(MdWallpaper, _React$Component);

    function MdWallpaper() {
        _classCallCheck(this, MdWallpaper);

        _React$Component.apply(this, arguments);
    }

    MdWallpaper.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm6.7 6.7h11.6v-3.4h-11.6c-1.9 0-3.4 1.5-3.4 3.4v11.6h3.4v-11.6z m10 15l-6.7 8.3h20l-5-6.7-3.4 4.5-4.9-6.1z m11.6-7.5c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.2 2.5 2.5 2.5 2.5-1.1 2.5-2.5z m5-10.9h-11.6v3.4h11.6v11.6h3.4v-11.6c0-1.9-1.5-3.4-3.4-3.4z m0 30h-11.6v3.4h11.6c1.9 0 3.4-1.5 3.4-3.4v-11.6h-3.4v11.6z m-26.6-11.6h-3.4v11.6c0 1.9 1.5 3.4 3.4 3.4h11.6v-3.4h-11.6v-11.6z' })
            )
        );
    };

    return MdWallpaper;
})(React.Component);

exports['default'] = MdWallpaper;
module.exports = exports['default'];