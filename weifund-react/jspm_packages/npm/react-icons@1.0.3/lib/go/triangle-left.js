/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoTriangleLeft = (function (_React$Component) {
    _inherits(GoTriangleLeft, _React$Component);

    function GoTriangleLeft() {
        _classCallCheck(this, GoTriangleLeft);

        _React$Component.apply(this, arguments);
    }

    GoTriangleLeft.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm12.5 19.995l14.990000000000002 14.989999999999998v-29.98l-14.990000000000002 14.990000000000002z' })
            )
        );
    };

    return GoTriangleLeft;
})(React.Component);

exports['default'] = GoTriangleLeft;
module.exports = exports['default'];