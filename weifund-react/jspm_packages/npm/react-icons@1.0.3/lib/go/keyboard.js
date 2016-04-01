/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoKeyboard = (function (_React$Component) {
    _inherits(GoKeyboard, _React$Component);

    function GoKeyboard() {
        _classCallCheck(this, GoKeyboard);

        _React$Component.apply(this, arguments);
    }

    GoKeyboard.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm25 22.5h2.5v-5h-2.5v5z m5-12.5h-2.5v5h2.5v-5z m-5 0h-2.5v5h2.5v-5z m-5 12.5h2.5v-5h-2.5v5z m-5 7.5h12.5v-5h-12.5v5z m15-7.5h5v-12.5h-2.5v7.5h-2.5v5z m-20 7.5h2.5v-5h-2.5v5z m20 0h5v-5h-5v5z m-10-20h-2.5v5h2.5v-5z m-12.5 7.5h-2.5v5h2.5v-5z m0 7.5h-2.5v5h2.5v-5z m-7.5-20v30h40v-30h-40z m37.5 27.5h-35v-25h35v25z m-22.5-10h2.5v-5h-2.5v5z m-5-12.5h-5v5h5v-5z m5 0h-2.5v5h2.5v-5z m-5 12.5h2.5v-5h-2.5v5z' })
            )
        );
    };

    return GoKeyboard;
})(React.Component);

exports['default'] = GoKeyboard;
module.exports = exports['default'];