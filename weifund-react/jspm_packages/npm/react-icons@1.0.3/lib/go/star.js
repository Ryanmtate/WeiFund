/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoStar = (function (_React$Component) {
    _inherits(GoStar, _React$Component);

    function GoStar() {
        _classCallCheck(this, GoStar);

        _React$Component.apply(this, arguments);
    }

    GoStar.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm37.5 15l-12.24625-1.5924999999999994-5.25375-10.9075-5.254999999999999 10.9075-12.245000000000001 1.5924999999999994 9.0025 8.158749999999998-2.3225 11.837499999999999 10.82-5.811249999999998 10.822499999999998 5.8125000000000036-2.3249999999999993-11.837499999999999 9.002500000000001-8.160000000000004z' })
            )
        );
    };

    return GoStar;
})(React.Component);

exports['default'] = GoStar;
module.exports = exports['default'];