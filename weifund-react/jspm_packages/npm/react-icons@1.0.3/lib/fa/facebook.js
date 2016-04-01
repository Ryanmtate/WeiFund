/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaFacebook = (function (_React$Component) {
    _inherits(FaFacebook, _React$Component);

    function FaFacebook() {
        _classCallCheck(this, FaFacebook);

        _React$Component.apply(this, arguments);
    }

    FaFacebook.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm29.97714285714286 0.2671428571428571v5.892857142857143h-3.5057142857142836q-1.918571428571429 0-2.588571428571427 0.8028571428571425t-0.6714285714285708 2.41v4.220000000000001h6.5428571428571445l-0.8714285714285701 6.607142857142859h-5.671428571428571v16.939999999999998h-6.8257142857142945v-16.942857142857143h-5.694285714285714v-6.604285714285714h5.691428571428572v-4.867142857142857q0-4.151428571428572 2.321428571428573-6.44t6.181428571428572-2.2885714285714283q3.282857142857143-1.8778381627448937e-16 5.0914285714285725 0.26714285714285696z' })
            )
        );
    };

    return FaFacebook;
})(React.Component);

exports['default'] = FaFacebook;
module.exports = exports['default'];