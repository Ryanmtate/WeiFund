/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSwapVerticalCircle = (function (_React$Component) {
    _inherits(MdSwapVerticalCircle, _React$Component);

    function MdSwapVerticalCircle() {
        _classCallCheck(this, MdSwapVerticalCircle);

        _React$Component.apply(this, arguments);
    }

    MdSwapVerticalCircle.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm29.140000000000004 25h-4.140000000000004v-6.640000000000001h-3.3599999999999994v6.640000000000001h-4.140000000000001l5.859999999999999 5.859999999999999z m-18.28-10h4.139999999999997v6.640000000000001h3.3599999999999994v-6.640000000000001h4.140000000000001l-5.859999999999999-5.859999999999999z m9.139999999999997-11.64q6.875 8.881784197001252e-16 11.758333333333333 4.883333333333335t4.883333333333333 11.756666666666666-4.883333333333333 11.759999999999998-11.758333333333333 4.88333333333334-11.758333333333333-4.883333333333333-4.883333333333333-11.760000000000005 4.883333333333333-11.756666666666668 11.758333333333333-4.883333333333332z' })
            )
        );
    };

    return MdSwapVerticalCircle;
})(React.Component);

exports['default'] = MdSwapVerticalCircle;
module.exports = exports['default'];