/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoFileText = (function (_React$Component) {
    _inherits(GoFileText, _React$Component);

    function GoFileText() {
        _classCallCheck(this, GoFileText);

        _React$Component.apply(this, arguments);
    }

    GoFileText.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm22.5 10h-12.5v2.5h12.5v-2.5z m5-7.5h-22.5v35h30v-27.5l-7.5-7.5z m5 32.5h-25v-30h17.5l7.5 7.5v22.5z m-22.5-5h20v-2.5h-20v2.5z m0-5h20v-2.5h-20v2.5z m0-5h20v-2.5h-20v2.5z' })
            )
        );
    };

    return GoFileText;
})(React.Component);

exports['default'] = GoFileText;
module.exports = exports['default'];