/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdVerticalAlignTop = (function (_React$Component) {
    _inherits(MdVerticalAlignTop, _React$Component);

    function MdVerticalAlignTop() {
        _classCallCheck(this, MdVerticalAlignTop);

        _React$Component.apply(this, arguments);
    }

    MdVerticalAlignTop.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm6.640000000000001 5h26.71666666666667v3.3599999999999994h-26.715000000000003v-3.3599999999999994z m6.720000000000001 13.36l6.639999999999999-6.716666666666667 6.640000000000001 6.716666666666667h-5v16.64h-3.2833333333333314v-16.64h-5z' })
            )
        );
    };

    return MdVerticalAlignTop;
})(React.Component);

exports['default'] = MdVerticalAlignTop;
module.exports = exports['default'];