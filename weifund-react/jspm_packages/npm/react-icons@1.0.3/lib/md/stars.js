/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdStars = (function (_React$Component) {
    _inherits(MdStars, _React$Component);

    function MdStars() {
        _classCallCheck(this, MdStars);

        _React$Component.apply(this, arguments);
    }

    MdStars.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm27.03333333333333 30l-1.8766666666666652-8.046666666666667 6.25-5.390000000000001-8.203333333333333-0.7033333333333331-3.203333333333333-7.499999999999998-3.203333333333333 7.578333333333333-8.203333333333333 0.6249999999999982 6.25 5.390000000000001-1.876666666666667 8.046666666666667 7.033333333333333-4.216666666666665z m-7.033333333333331-26.64q6.875 8.881784197001252e-16 11.758333333333333 4.883333333333335t4.883333333333333 11.756666666666666-4.883333333333333 11.759999999999998-11.758333333333333 4.88333333333334-11.758333333333333-4.883333333333333-4.883333333333333-11.760000000000005 4.883333333333333-11.756666666666668 11.758333333333333-4.883333333333332z' })
            )
        );
    };

    return MdStars;
})(React.Component);

exports['default'] = MdStars;
module.exports = exports['default'];