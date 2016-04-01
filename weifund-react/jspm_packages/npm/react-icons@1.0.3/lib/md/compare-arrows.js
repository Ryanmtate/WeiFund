/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdCompareArrows = (function (_React$Component) {
    _inherits(MdCompareArrows, _React$Component);

    function MdCompareArrows() {
        _classCallCheck(this, MdCompareArrows);

        _React$Component.apply(this, arguments);
    }

    MdCompareArrows.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm25 21.64l-6.640000000000001-6.640000000000001 6.640000000000001-6.639999999999999v5h11.64v3.283333333333333h-11.64v5z m-10 1.7199999999999989v-5l6.640000000000001 6.640000000000001-6.640000000000001 6.640000000000004v-5h-11.64v-3.283333333333335h11.64z' })
            )
        );
    };

    return MdCompareArrows;
})(React.Component);

exports['default'] = MdCompareArrows;
module.exports = exports['default'];