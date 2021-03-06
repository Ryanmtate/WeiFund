/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdViewDay = (function (_React$Component) {
    _inherits(MdViewDay, _React$Component);

    function MdViewDay() {
        _classCallCheck(this, MdViewDay);

        _React$Component.apply(this, arguments);
    }

    MdViewDay.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm3.3600000000000003 5h31.64v5h-31.64v-5z m30 8.360000000000001q0.7033333333333331 0 1.1716666666666669 0.4666666666666668t0.4683333333333337 1.173333333333332v10q0 0.7033333333333331-0.46666666666666856 1.1716666666666669t-1.173333333333332 0.466666666666665h-28.36q-0.7033333333333331 0-1.1716666666666669-0.466666666666665t-0.46666666666666634-1.1716666666666669v-10q0-0.7033333333333331 0.4666666666666668-1.1716666666666669t1.1716666666666664-0.4666666666666668h28.36z m-30 21.64v-5h31.64v5h-31.64z' })
            )
        );
    };

    return MdViewDay;
})(React.Component);

exports['default'] = MdViewDay;
module.exports = exports['default'];