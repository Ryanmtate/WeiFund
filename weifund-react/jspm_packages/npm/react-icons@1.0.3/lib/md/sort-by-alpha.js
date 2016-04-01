/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSortByAlpha = (function (_React$Component) {
    _inherits(MdSortByAlpha, _React$Component);

    function MdSortByAlpha() {
        _classCallCheck(this, MdSortByAlpha);

        _React$Component.apply(this, arguments);
    }

    MdSortByAlpha.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm24.9 7.8h-7.9l4-4z m-7.8 24.5h7.8l-3.9 3.9z m-6.9-21.9l-7.5 19.2h3l1.6-4.1h8.5l1.5 4.1h3.1l-7.5-19.2h-2.7z m-1.9 12.3l3.2-8.6 3.3 8.6h-6.5z m17.9 4.2h10.2v2.7h-14.2v-2.2l9.9-14.3h-9.8v-2.6h13.8v2.1l-9.9 14.3z' })
            )
        );
    };

    return MdSortByAlpha;
})(React.Component);

exports['default'] = MdSortByAlpha;
module.exports = exports['default'];