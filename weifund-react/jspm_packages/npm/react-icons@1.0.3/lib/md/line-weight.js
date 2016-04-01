/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdLineWeight = (function (_React$Component) {
    _inherits(MdLineWeight, _React$Component);

    function MdLineWeight() {
        _classCallCheck(this, MdLineWeight);

        _React$Component.apply(this, arguments);
    }

    MdLineWeight.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm5 6.640000000000001h30v6.716666666666669h-30v-6.716666666666668z m0 15v-5h30v5h-30z m0 11.719999999999999v-1.7166666666666686h30v1.7166666666666686h-30z m0-5v-3.3599999999999994h30v3.3599999999999994h-30z' })
            )
        );
    };

    return MdLineWeight;
})(React.Component);

exports['default'] = MdLineWeight;
module.exports = exports['default'];