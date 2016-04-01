/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdWidgets = (function (_React$Component) {
    _inherits(MdWidgets, _React$Component);

    function MdWidgets() {
        _classCallCheck(this, MdWidgets);

        _React$Component.apply(this, arguments);
    }

    MdWidgets.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm21.7 21.7v13.3h13.3v-13.3h-13.3z m-16.7 13.3h13.3v-13.3h-13.3v13.3z m0-30v13.3h13.3v-13.3h-13.3z m22.8-2.2l-9.5 9.4 9.5 9.5 9.4-9.5-9.4-9.4z' })
            )
        );
    };

    return MdWidgets;
})(React.Component);

exports['default'] = MdWidgets;
module.exports = exports['default'];