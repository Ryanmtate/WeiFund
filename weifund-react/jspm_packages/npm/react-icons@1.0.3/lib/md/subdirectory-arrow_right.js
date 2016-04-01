/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSubdirectoryArrowRight = (function (_React$Component) {
    _inherits(MdSubdirectoryArrowRight, _React$Component);

    function MdSubdirectoryArrowRight() {
        _classCallCheck(this, MdSubdirectoryArrowRight);

        _React$Component.apply(this, arguments);
    }

    MdSubdirectoryArrowRight.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm31.640000000000004 25l-10 10-2.3433333333333337-2.3433333333333337 6.016666666666666-6.016666666666666h-18.675000000000004v-20h3.361666666666668v16.720000000000002h15.313333333333333l-6.016666666666666-6.016666666666666 2.344999999999999-2.341666666666667z' })
            )
        );
    };

    return MdSubdirectoryArrowRight;
})(React.Component);

exports['default'] = MdSubdirectoryArrowRight;
module.exports = exports['default'];