/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdExposureNeg1 = (function (_React$Component) {
    _inherits(MdExposureNeg1, _React$Component);

    function MdExposureNeg1() {
        _classCallCheck(this, MdExposureNeg1);

        _React$Component.apply(this, arguments);
    }

    MdExposureNeg1.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm6.7 18.3v3.4h13.3v-3.4h-13.3z m25 11.7h-3.4v-17.7l-5 1.7v-2.8l7.9-2.9h0.5v21.7z' })
            )
        );
    };

    return MdExposureNeg1;
})(React.Component);

exports['default'] = MdExposureNeg1;
module.exports = exports['default'];