/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdHourglassFull = (function (_React$Component) {
    _inherits(MdHourglassFull, _React$Component);

    function MdHourglassFull() {
        _classCallCheck(this, MdHourglassFull);

        _React$Component.apply(this, arguments);
    }

    MdHourglassFull.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm10 3.3600000000000003h20v10l-6.640000000000001 6.640000000000001 6.640000000000001 6.640000000000001v10h-20v-10l6.640000000000001-6.640000000000001-6.640000000000001-6.639999999999999v-10z' })
            )
        );
    };

    return MdHourglassFull;
})(React.Component);

exports['default'] = MdHourglassFull;
module.exports = exports['default'];