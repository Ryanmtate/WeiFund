/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdLocalDining = (function (_React$Component) {
    _inherits(MdLocalDining, _React$Component);

    function MdLocalDining() {
        _classCallCheck(this, MdLocalDining);

        _React$Component.apply(this, arguments);
    }

    MdLocalDining.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm13.5 22.2l4.7-4.7-11.7-11.7c-2.6 2.6-2.6 6.9 0 9.5l7 6.9z m11.3-3c2.6 1.2 6.1 0.4 8.8-2.3 3.2-3.2 3.8-7.7 1.3-10.2-2.4-2.4-7-1.8-10.2 1.4-2.6 2.6-3.4 6.2-2.3 8.8l-16.2 16.2 2.3 2.4 11.5-11.5 11.5 11.5 2.3-2.4-11.4-11.4 2.4-2.5z' })
            )
        );
    };

    return MdLocalDining;
})(React.Component);

exports['default'] = MdLocalDining;
module.exports = exports['default'];