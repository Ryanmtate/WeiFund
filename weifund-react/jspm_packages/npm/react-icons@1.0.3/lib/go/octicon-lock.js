/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonLock = (function (_React$Component) {
    _inherits(GoOcticonLock, _React$Component);

    function GoOcticonLock() {
        _classCallCheck(this, GoOcticonLock);

        _React$Component.apply(this, arguments);
    }

    GoOcticonLock.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm15 32.5h-2.5v-2.5h2.5v2.5z m20-15v17.5c0 1.4-1.1 2.5-2.5 2.5h-25c-1.4 0-2.5-1.1-2.5-2.5v-17.5c0-1.4 1.1-2.5 2.5-2.5h2.5v-5c0-5.5 4.5-10 10-10s10 4.5 10 10v5h2.5c1.4 0 2.5 1.1 2.5 2.5z m-20.5-2.5h11v-5c0-3-2.5-5.5-5.5-5.5s-5.5 2.5-5.5 5.5v5z m18 2.5h-22.5v17.5h22.5v-17.5z m-17.5 2.5h-2.5v2.5h2.5v-2.5z m0 5h-2.5v2.5h2.5v-2.5z' })
            )
        );
    };

    return GoOcticonLock;
})(React.Component);

exports['default'] = GoOcticonLock;
module.exports = exports['default'];