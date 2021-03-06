/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdCloudDone = (function (_React$Component) {
    _inherits(MdCloudDone, _React$Component);

    function MdCloudDone() {
        _classCallCheck(this, MdCloudDone);

        _React$Component.apply(this, arguments);
    }

    MdCloudDone.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm16.64 28.36l11.016666666666666-11.016666666666666-2.344999999999999-2.341666666666667-8.671666666666667 8.595-3.4383333333333344-3.4383333333333326-2.341666666666665 2.341666666666665z m15.625-11.641666666666666q3.200000000000003 0.23666666666666814 5.466666666666669 2.616666666666667t2.268333333333331 5.664999999999999q0 3.4366666666666674-2.463333333333331 5.896666666666668t-5.899999999999999 2.461666666666666h-21.63666666666667q-4.141666666666667 0-7.071666666666667-2.9299999999999997t-2.928333333333333-7.07q0-3.828333333333333 2.5766666666666667-6.68t6.328333333333335-3.241666666666667q1.6399999999999988-3.046666666666667 4.611666666666665-4.92t6.483333333333334-1.8783333333333339q4.533333333333335 0 7.966666666666669 2.8499999999999996t4.299999999999997 7.228333333333335z' })
            )
        );
    };

    return MdCloudDone;
})(React.Component);

exports['default'] = MdCloudDone;
module.exports = exports['default'];