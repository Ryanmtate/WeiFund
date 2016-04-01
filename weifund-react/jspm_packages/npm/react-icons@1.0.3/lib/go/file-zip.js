/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoFileZip = (function (_React$Component) {
    _inherits(GoFileZip, _React$Component);

    function GoFileZip() {
        _classCallCheck(this, GoFileZip);

        _React$Component.apply(this, arguments);
    }

    GoFileZip.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm17.5 22.5v-2.5h-2.5v2.5h2.5z m0-5v-2.5h-2.5v2.5h2.5z m0-5v-2.5h-2.5v2.5h2.5z m-5 2.5h2.5v-2.5h-2.5v2.5z m15-12.5h-22.5v35h30v-27.5l-7.5-7.5z m5 32.5h-25v-30h7.5v2.5h2.5v-2.5h7.5l7.5 7.5v22.5z m-20-25h2.5v-2.5h-2.5v2.5z m0 10h2.5v-2.5h-2.5v2.5z m0 5l-2.5 2.5v5h10v-5l-2.5-2.5h-2.5v-2.5h-2.5v2.5z m5 2.5v2.5h-5v-2.5h5z' })
            )
        );
    };

    return GoFileZip;
})(React.Component);

exports['default'] = GoFileZip;
module.exports = exports['default'];