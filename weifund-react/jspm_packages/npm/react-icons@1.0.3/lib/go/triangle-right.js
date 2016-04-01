/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoTriangleRight = (function (_React$Component) {
    _inherits(GoTriangleRight, _React$Component);

    function GoTriangleRight() {
        _classCallCheck(this, GoTriangleRight);

        _React$Component.apply(this, arguments);
    }

    GoTriangleRight.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm12.502500000000001 5.01l14.989999999999998 14.99-14.989999999999998 14.990000000000002v-29.980000000000004z' })
            )
        );
    };

    return GoTriangleRight;
})(React.Component);

exports['default'] = GoTriangleRight;
module.exports = exports['default'];