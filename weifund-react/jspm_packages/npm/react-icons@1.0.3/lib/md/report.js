/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdReport = (function (_React$Component) {
    _inherits(MdReport, _React$Component);

    function MdReport() {
        _classCallCheck(this, MdReport);

        _React$Component.apply(this, arguments);
    }

    MdReport.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm21.64 21.64v-10h-3.2833333333333314v10h3.2833333333333314z m-1.6400000000000006 7.188333333333336q0.8599999999999994 0 1.5233333333333334-0.663333333333334t0.663333333333334-1.5249999999999986-0.663333333333334-1.4833333333333343-1.5233333333333334-0.6266666666666652-1.5233333333333334 0.6233333333333348-0.663333333333334 1.4833333333333343 0.663333333333334 1.5249999999999986 1.5233333333333334 0.6616666666666653z m6.25-23.828333333333337l8.75 8.75v12.5l-8.75 8.75h-12.5l-8.75-8.75v-12.5l8.75-8.75h12.5z' })
            )
        );
    };

    return MdReport;
})(React.Component);

exports['default'] = MdReport;
module.exports = exports['default'];