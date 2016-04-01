/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdScreenLockPortrait = (function (_React$Component) {
    _inherits(MdScreenLockPortrait, _React$Component);

    function MdScreenLockPortrait() {
        _classCallCheck(this, MdScreenLockPortrait);

        _React$Component.apply(this, arguments);
    }

    MdScreenLockPortrait.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm16.7 26.7h6.6c1 0 1.7-0.8 1.7-1.7v-5c0-0.9-0.7-1.7-1.7-1.7v-1.6c0-1.9-1.5-3.4-3.3-3.4-1.8 0-3.3 1.5-3.3 3.4v1.6c-0.9 0-1.7 0.8-1.7 1.7v5c0 0.9 0.8 1.7 1.7 1.7z m1.3-10c0-1.1 0.9-2 2-2 1.1 0 2 0.9 2 2v1.6h-4v-1.6z m10.3-15h-16.6c-1.9 0-3.4 1.5-3.4 3.3v30c0 1.8 1.5 3.3 3.4 3.3h16.6c1.9 0 3.4-1.5 3.4-3.3v-30c0-1.8-1.5-3.3-3.4-3.3z m0 30h-16.6v-23.4h16.6v23.4z' })
            )
        );
    };

    return MdScreenLockPortrait;
})(React.Component);

exports['default'] = MdScreenLockPortrait;
module.exports = exports['default'];