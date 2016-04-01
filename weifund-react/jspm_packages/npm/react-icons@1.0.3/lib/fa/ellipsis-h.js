/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaEllipsisH = (function (_React$Component) {
    _inherits(FaEllipsisH, _React$Component);

    function FaEllipsisH() {
        _classCallCheck(this, FaEllipsisH);

        _React$Component.apply(this, arguments);
    }

    FaEllipsisH.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm12.857142857142858 16.42857142857143v4.285714285714285q0 0.8928571428571423-0.6257142857142863 1.5171428571428578t-1.517142857142856 0.6257142857142846h-4.285714285714286q-0.8928571428571432 0-1.517142857142857-0.6257142857142846t-0.6257142857142872-1.5171428571428578v-4.285714285714285q0-0.8928571428571423 0.6257142857142854-1.5171428571428578t1.5171428571428578-0.6257142857142863h4.2857142857142865q0.8928571428571423 0 1.5171428571428578 0.6257142857142863t0.6257142857142846 1.5171428571428578z m11.428571428571427 0v4.285714285714285q0 0.8928571428571423-0.6257142857142846 1.5171428571428578t-1.5171428571428578 0.6257142857142846h-4.285714285714285q-0.8928571428571423 0-1.5171428571428578-0.6257142857142846t-0.6257142857142846-1.5171428571428578v-4.285714285714285q0-0.8928571428571423 0.6257142857142846-1.5171428571428578t1.5171428571428578-0.6257142857142863h4.285714285714285q0.8928571428571423 0 1.5171428571428578 0.6257142857142863t0.6257142857142846 1.5171428571428578z m11.42857142857143 0v4.285714285714285q0 0.8928571428571423-0.6257142857142881 1.5171428571428578t-1.5171428571428578 0.6257142857142846h-4.285714285714285q-0.8928571428571423 0-1.5171428571428578-0.6257142857142846t-0.6257142857142846-1.5171428571428578v-4.285714285714285q0-0.8928571428571423 0.6257142857142846-1.5171428571428578t1.5171428571428578-0.6257142857142863h4.285714285714285q0.8928571428571459 0 1.5171428571428578 0.6257142857142863t0.6257142857142881 1.5171428571428578z' })
            )
        );
    };

    return FaEllipsisH;
})(React.Component);

exports['default'] = FaEllipsisH;
module.exports = exports['default'];