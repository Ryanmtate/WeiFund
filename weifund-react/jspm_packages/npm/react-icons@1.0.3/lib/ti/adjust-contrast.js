/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var TiAdjustContrast = (function (_React$Component) {
    _inherits(TiAdjustContrast, _React$Component);

    function TiAdjustContrast() {
        _classCallCheck(this, TiAdjustContrast);

        _React$Component.apply(this, arguments);
    }

    TiAdjustContrast.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 6.666666666666667c-7.363333333333333 0-13.333333333333334 5.97-13.333333333333334 13.333333333333332s5.970000000000001 13.333333333333336 13.333333333333334 13.333333333333336 13.333333333333336-5.969999999999999 13.333333333333336-13.333333333333336-5.969999999999999-13.333333333333334-13.333333333333336-13.333333333333334z m0 23.333333333333336c-5.523333333333333 0-10-4.476666666666667-10-10s4.476666666666667-10 10-10 10 4.476666666666667 10 10-4.476666666666667 10-10 10z m0-18.333333333333336v16.666666666666668c4.594999999999999 0 8.333333333333336-3.7383333333333333 8.333333333333336-8.333333333333336s-3.7383333333333333-8.333333333333334-8.333333333333336-8.333333333333334z' })
            )
        );
    };

    return TiAdjustContrast;
})(React.Component);

exports['default'] = TiAdjustContrast;
module.exports = exports['default'];