/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdViewColumn = (function (_React$Component) {
    _inherits(MdViewColumn, _React$Component);

    function MdViewColumn() {
        _classCallCheck(this, MdViewColumn);

        _React$Component.apply(this, arguments);
    }

    MdViewColumn.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm26.64 8.360000000000001h8.36v21.64h-8.36v-21.64z m-20 21.64v-21.64h8.36v21.64h-8.36z m10 0v-21.64h8.36v21.64h-8.36z' })
            )
        );
    };

    return MdViewColumn;
})(React.Component);

exports['default'] = MdViewColumn;
module.exports = exports['default'];