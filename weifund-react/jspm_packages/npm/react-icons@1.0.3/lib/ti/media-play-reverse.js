/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var TiMediaPlayReverse = (function (_React$Component) {
    _inherits(TiMediaPlayReverse, _React$Component);

    function TiMediaPlayReverse() {
        _classCallCheck(this, TiMediaPlayReverse);

        _React$Component.apply(this, arguments);
    }

    TiMediaPlayReverse.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm23.3 31.7c1.8999999999999986 0 3.3999999999999986-1.5 3.3999999999999986-3.3999999999999986v-16.6c0-1.9000000000000004-1.5-3.4000000000000004-3.3999999999999986-3.4000000000000004-0.8000000000000007 0-1.6000000000000014 0.40000000000000036-2.3000000000000007 1-4.300000000000001 4.200000000000001-11 10.700000000000001-11 10.700000000000001s6.699999999999999 6.5 11 10.7c0.6999999999999993 0.6000000000000014 1.5 1 2.3000000000000007 1z' })
            )
        );
    };

    return TiMediaPlayReverse;
})(React.Component);

exports['default'] = TiMediaPlayReverse;
module.exports = exports['default'];