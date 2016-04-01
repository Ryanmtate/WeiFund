/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdRemoveRedEye = (function (_React$Component) {
    _inherits(MdRemoveRedEye, _React$Component);

    function MdRemoveRedEye() {
        _classCallCheck(this, MdRemoveRedEye);

        _React$Component.apply(this, arguments);
    }

    MdRemoveRedEye.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 7.5c-8.3 0-15.5 5.2-18.3 12.5 2.8 7.3 10 12.5 18.3 12.5s15.5-5.2 18.3-12.5c-2.8-7.3-10-12.5-18.3-12.5z m0 20.8c-4.6 0-8.3-3.7-8.3-8.3s3.7-8.3 8.3-8.3 8.3 3.7 8.3 8.3-3.7 8.3-8.3 8.3z m0-13.3c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z' })
            )
        );
    };

    return MdRemoveRedEye;
})(React.Component);

exports['default'] = MdRemoveRedEye;
module.exports = exports['default'];