/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdAirlineSeatIndividualSuite = (function (_React$Component) {
    _inherits(MdAirlineSeatIndividualSuite, _React$Component);

    function MdAirlineSeatIndividualSuite() {
        _classCallCheck(this, MdAirlineSeatIndividualSuite);

        _React$Component.apply(this, arguments);
    }

    MdAirlineSeatIndividualSuite.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm11.7 21.7c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.2-5 5 2.2 5 5 5z m20-10h-13.4v11.6h-13.3v-11.6h-3.3v16.6h36.6v-10c0-3.6-2.9-6.6-6.6-6.6z' })
            )
        );
    };

    return MdAirlineSeatIndividualSuite;
})(React.Component);

exports['default'] = MdAirlineSeatIndividualSuite;
module.exports = exports['default'];