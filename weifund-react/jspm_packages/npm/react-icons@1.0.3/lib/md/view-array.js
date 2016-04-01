/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdViewArray = (function (_React$Component) {
    _inherits(MdViewArray, _React$Component);

    function MdViewArray() {
        _classCallCheck(this, MdViewArray);

        _React$Component.apply(this, arguments);
    }

    MdViewArray.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm13.360000000000001 30v-21.64h14.999999999999998v21.64h-15z m16.64-21.64h5v21.64h-5v-21.64z m-23.36 21.64v-21.64h5v21.64h-5z' })
            )
        );
    };

    return MdViewArray;
})(React.Component);

exports['default'] = MdViewArray;
module.exports = exports['default'];