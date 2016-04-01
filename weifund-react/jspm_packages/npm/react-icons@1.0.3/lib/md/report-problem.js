/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdReportProblem = (function (_React$Component) {
    _inherits(MdReportProblem, _React$Component);

    function MdReportProblem() {
        _classCallCheck(this, MdReportProblem);

        _React$Component.apply(this, arguments);
    }

    MdReportProblem.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm21.64 23.36v-6.716666666666669h-3.2833333333333314v6.716666666666669h3.2833333333333314z m0 6.640000000000001v-3.3599999999999994h-3.2833333333333314v3.3599999999999994h3.2833333333333314z m-20 5l18.36-31.64 18.36 31.64h-36.71666666666667z' })
            )
        );
    };

    return MdReportProblem;
})(React.Component);

exports['default'] = MdReportProblem;
module.exports = exports['default'];