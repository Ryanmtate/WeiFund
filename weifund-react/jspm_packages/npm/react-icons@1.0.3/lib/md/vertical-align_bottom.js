/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdVerticalAlignBottom = (function (_React$Component) {
    _inherits(MdVerticalAlignBottom, _React$Component);

    function MdVerticalAlignBottom() {
        _classCallCheck(this, MdVerticalAlignBottom);

        _React$Component.apply(this, arguments);
    }

    MdVerticalAlignBottom.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm6.640000000000001 31.640000000000004h26.71666666666667v3.359999999999996h-26.715000000000003v-3.3599999999999994z m20-10l-6.640000000000001 6.7166666666666615-6.640000000000001-6.716666666666669h5v-16.639999999999997h3.2833333333333314v16.64h5z' })
            )
        );
    };

    return MdVerticalAlignBottom;
})(React.Component);

exports['default'] = MdVerticalAlignBottom;
module.exports = exports['default'];