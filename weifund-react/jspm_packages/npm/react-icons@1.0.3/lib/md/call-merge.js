/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdCallMerge = (function (_React$Component) {
    _inherits(MdCallMerge, _React$Component);

    function MdCallMerge() {
        _classCallCheck(this, MdCallMerge);

        _React$Component.apply(this, arguments);
    }

    MdCallMerge.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm12.5 13.360000000000001l7.5-7.5 7.5 7.5h-5.859999999999999v10.624999999999998l-10 10-2.3433333333333337-2.3416666666666686 9.063333333333333-8.983333333333334v-9.3h-5.859999999999999z m15.86 20.625l-5.703333333333333-5.623333333333335 2.3433333333333337-2.344999999999999 5.703333333333333 5.625z' })
            )
        );
    };

    return MdCallMerge;
})(React.Component);

exports['default'] = MdCallMerge;
module.exports = exports['default'];