/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdViewCompact = (function (_React$Component) {
    _inherits(MdViewCompact, _React$Component);

    function MdViewCompact() {
        _classCallCheck(this, MdViewCompact);

        _React$Component.apply(this, arguments);
    }

    MdViewCompact.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm5 8.360000000000001h31.64v9.999999999999998h-31.64v-10z m11.64 23.28v-11.64h20v11.64h-20z m-11.64 0v-11.64h10v11.64h-10z' })
            )
        );
    };

    return MdViewCompact;
})(React.Component);

exports['default'] = MdViewCompact;
module.exports = exports['default'];