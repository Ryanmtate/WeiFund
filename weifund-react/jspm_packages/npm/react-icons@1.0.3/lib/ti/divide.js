/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var TiDivide = (function (_React$Component) {
    _inherits(TiDivide, _React$Component);

    function TiDivide() {
        _classCallCheck(this, TiDivide);

        _React$Component.apply(this, arguments);
    }

    TiDivide.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm23.75 10c0 2.071666666666667-1.6783333333333346 3.75-3.75 3.75s-3.75-1.6783333333333328-3.75-3.75 1.6783333333333346-3.75 3.75-3.75 3.75 1.6783333333333328 3.75 3.75z m0 20c0 2.0716666666666654-1.6783333333333346 3.75-3.75 3.75s-3.75-1.6783333333333346-3.75-3.75 1.6783333333333346-3.75 3.75-3.75 3.75 1.6783333333333346 3.75 3.75z m6.25-13.333333333333332h-20c-1.8399999999999999 0-3.333333333333334 1.4933333333333323-3.333333333333334 3.333333333333332s1.493333333333334 3.333333333333332 3.333333333333334 3.333333333333332h20c1.8399999999999999 0 3.3333333333333357-1.4933333333333323 3.3333333333333357-3.333333333333332s-1.4933333333333323-3.333333333333332-3.333333333333332-3.333333333333332z' })
            )
        );
    };

    return TiDivide;
})(React.Component);

exports['default'] = TiDivide;
module.exports = exports['default'];