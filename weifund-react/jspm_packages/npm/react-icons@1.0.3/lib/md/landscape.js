/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdLandscape = (function (_React$Component) {
    _inherits(MdLandscape, _React$Component);

    function MdLandscape() {
        _classCallCheck(this, MdLandscape);

        _React$Component.apply(this, arguments);
    }

    MdLandscape.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm23.36 10l15 20h-36.71666666666667l10.000000000000002-13.36 7.499999999999998 10 2.655000000000001-1.9533333333333331-4.690000000000001-6.328333333333333z' })
            )
        );
    };

    return MdLandscape;
})(React.Component);

exports['default'] = MdLandscape;
module.exports = exports['default'];