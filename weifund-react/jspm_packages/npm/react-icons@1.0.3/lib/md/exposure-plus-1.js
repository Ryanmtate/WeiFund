/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdExposurePlus1 = (function (_React$Component) {
    _inherits(MdExposurePlus1, _React$Component);

    function MdExposurePlus1() {
        _classCallCheck(this, MdExposurePlus1);

        _React$Component.apply(this, arguments);
    }

    MdExposurePlus1.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm16.7 11.7h-3.4v6.6h-6.6v3.4h6.6v6.6h3.4v-6.6h6.6v-3.4h-6.6v-6.6z m16.6 18.3h-3.3v-17.7l-5 1.7v-2.8l7.8-2.9h0.5v21.7z' })
            )
        );
    };

    return MdExposurePlus1;
})(React.Component);

exports['default'] = MdExposurePlus1;
module.exports = exports['default'];