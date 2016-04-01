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
                React.createElement('path', { d: 'm13.3 18.3h5v16.7h3.4v-16.7h5l-6.7-6.6-6.7 6.6z m-6.6-13.3v3.3h26.6v-3.3h-26.6z' })
            )
        );
    };

    return MdVerticalAlignTop;
})(React.Component);

exports['default'] = MdVerticalAlignTop;
module.exports = exports['default'];