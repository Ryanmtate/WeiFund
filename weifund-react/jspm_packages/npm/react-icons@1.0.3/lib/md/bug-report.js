/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdBugReport = (function (_React$Component) {
    _inherits(MdBugReport, _React$Component);

    function MdBugReport() {
        _classCallCheck(this, MdBugReport);

        _React$Component.apply(this, arguments);
    }

    MdBugReport.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm23.36 20v-3.3599999999999994h-6.716666666666669v3.3599999999999994h6.716666666666669z m0 6.640000000000001v-3.2833333333333314h-6.716666666666669v3.2833333333333314h6.716666666666669z m10-13.280000000000001v3.2833333333333314h-3.5166666666666657q0.158333333333335 1.0916666666666686 0.158333333333335 1.7166666666666686v1.6400000000000006h3.361666666666668v3.3599999999999994h-3.363333333333337v1.6400000000000006q0 0.5466666666666669-0.15500000000000114 1.6400000000000006h3.5166666666666657v3.3599999999999994h-4.690000000000001q-1.3283333333333331 2.2666666666666657-3.633333333333333 3.633333333333333t-5.03833333333333 1.3666666666666671-5.038333333333334-1.3666666666666671-3.633333333333333-3.633333333333333h-4.688333333333333v-3.3599999999999994h3.5166666666666657q-0.15833333333333321-1.0933333333333337-0.15833333333333321-1.6400000000000006v-1.6400000000000006h-3.3616666666666655v-3.3599999999999994h3.3633333333333324v-1.6400000000000006q0-0.625 0.15499999999999936-1.7166666666666686h-3.5166666666666666v-3.283333333333333h4.69q1.1716666666666669-1.9533333333333331 3.046666666666667-3.283333333333333l-2.7333333333333343-2.7333333333333334 2.3416666666666686-2.343333333333331 3.671666666666667 3.5933333333333337q1.1716666666666669-0.2333333333333325 2.3433333333333337-0.2333333333333325t2.3416666666666686 0.2333333333333325l3.673333333333332-3.5933333333333337 2.3433333333333337 2.3433333333333337-2.7333333333333343 2.7333333333333343q1.8733333333333348 1.33 3.0450000000000017 3.283333333333333h4.689999999999998z' })
            )
        );
    };

    return MdBugReport;
})(React.Component);

exports['default'] = MdBugReport;
module.exports = exports['default'];