/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdScreenLockLandscape = (function (_React$Component) {
    _inherits(MdScreenLockLandscape, _React$Component);

    function MdScreenLockLandscape() {
        _classCallCheck(this, MdScreenLockLandscape);

        _React$Component.apply(this, arguments);
    }

    MdScreenLockLandscape.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm35 8.3h-30c-1.8 0-3.3 1.5-3.3 3.4v16.6c0 1.9 1.5 3.4 3.3 3.4h30c1.8 0 3.3-1.5 3.3-3.4v-16.6c0-1.9-1.5-3.4-3.3-3.4z m-3.3 20h-23.4v-16.6h23.4v16.6z m-15-1.6h6.6c1 0 1.7-0.8 1.7-1.7v-5c0-0.9-0.7-1.7-1.7-1.7v-1.6c0-1.9-1.5-3.4-3.3-3.4-1.8 0-3.3 1.5-3.3 3.4v1.6c-0.9 0-1.7 0.8-1.7 1.7v5c0 0.9 0.8 1.7 1.7 1.7z m1.3-10c0-1.1 0.9-2 2-2 1.1 0 2 0.9 2 2v1.6h-4v-1.6z' })
            )
        );
    };

    return MdScreenLockLandscape;
})(React.Component);

exports['default'] = MdScreenLockLandscape;
module.exports = exports['default'];