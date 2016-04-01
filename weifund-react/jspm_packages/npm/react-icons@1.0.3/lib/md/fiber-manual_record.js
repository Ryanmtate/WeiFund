/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdFiberManualRecord = (function (_React$Component) {
    _inherits(MdFiberManualRecord, _React$Component);

    function MdFiberManualRecord() {
        _classCallCheck(this, MdFiberManualRecord);

        _React$Component.apply(this, arguments);
    }

    MdFiberManualRecord.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm6.640000000000001 20q0-5.466666666666667 3.9450000000000003-9.413333333333334t9.415-3.9449999999999994 9.411666666666669 3.9449999999999994 3.9450000000000003 9.413333333333334-3.9450000000000003 9.413333333333334-9.411666666666669 3.9450000000000003-9.416666666666668-3.9450000000000003-3.9416666666666655-9.413333333333334z' })
            )
        );
    };

    return MdFiberManualRecord;
})(React.Component);

exports['default'] = MdFiberManualRecord;
module.exports = exports['default'];