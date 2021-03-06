/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaCodepen = (function (_React$Component) {
    _inherits(FaCodepen, _React$Component);

    function FaCodepen() {
        _classCallCheck(this, FaCodepen);

        _React$Component.apply(this, arguments);
    }

    FaCodepen.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm4.821428571428571 26.09428571428571l13.459999999999999 8.971428571428568v-8.008571428571418l-7.457142857142857-4.977142857142855z m-1.3857142857142857-3.2142857142857153l4.311428571428571-2.8799999999999955-4.308571428571428-2.879999999999999v5.757142857142856z m18.282857142857143 12.185714285714283l13.46-8.971428571428572-6.0042857142857144-4.017142857142858-7.4571428571428555 4.977142857142855v8.014285714285712z m-1.7185714285714297-11.001428571428566l6.071428571428573-4.064285714285713-6.071428571428573-4.062857142857142-6.071428571428571 4.062857142857142z m-9.174285714285714-6.138571428571428l7.457142857142857-4.977142857142857v-8.014285714285714l-13.462857142857143 8.974285714285715z m21.42857142857143 2.0757142857142874l4.308571428571426 2.879999999999999v-5.75714285714286z m-3.0799999999999983-2.0757142857142874l6.0042857142857144-4.017142857142858-13.46-8.971428571428572v8.01142857142857z m10.825714285714284-4.02v12.185714285714287q0 0.9171428571428564-0.7571428571428598 1.428571428571427l-18.28571428571428 12.190000000000001q-0.46571428571428797 0.28999999999999915-0.9571428571428591 0.28999999999999915t-0.9600000000000009-0.29142857142856826l-18.282857142857143-12.18571428571429q-0.7571428571428562-0.5142857142857125-0.7571428571428562-1.428571428571427v-12.19q0-0.9142857142857146 0.7571428571428572-1.4285714285714288l18.28571428571429-12.184285714285714q0.4657142857142844-0.2914285714285718 0.9571428571428555-0.2914285714285718t0.9600000000000009 0.29000000000000004l18.28142857142857 12.185714285714287q0.7571428571428598 0.5142857142857142 0.7571428571428598 1.4285714285714288z' })
            )
        );
    };

    return FaCodepen;
})(React.Component);

exports['default'] = FaCodepen;
module.exports = exports['default'];