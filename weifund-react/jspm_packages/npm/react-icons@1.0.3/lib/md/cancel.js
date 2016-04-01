/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdCancel = (function (_React$Component) {
    _inherits(MdCancel, _React$Component);

    function MdCancel() {
        _classCallCheck(this, MdCancel);

        _React$Component.apply(this, arguments);
    }

    MdCancel.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm28.36 26.016666666666666l-6.016666666666666-6.016666666666666 6.016666666666666-6.016666666666666-2.3433333333333337-2.341666666666667-6.016666666666666 6.0166666666666675-6.013333333333334-6.016666666666666-2.3433333333333337 2.341666666666665 6.0166666666666675 6.016666666666666-6.016666666666666 6.016666666666666 2.3433333333333337 2.3416666666666686 6.016666666666666-6.016666666666666 6.013333333333332 6.016666666666666z m-8.36-22.65833333333333q6.875-4.440892098500626e-16 11.758333333333333 4.883333333333333t4.883333333333333 11.758333333333333-4.883333333333333 11.759999999999998-11.758333333333333 4.88333333333334-11.758333333333333-4.883333333333333-4.883333333333333-11.760000000000005 4.883333333333333-11.756666666666668 11.758333333333333-4.883333333333332z' })
            )
        );
    };

    return MdCancel;
})(React.Component);

exports['default'] = MdCancel;
module.exports = exports['default'];