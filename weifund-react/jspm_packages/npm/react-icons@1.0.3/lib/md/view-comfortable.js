/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdViewComfortable = (function (_React$Component) {
    _inherits(MdViewComfortable, _React$Component);

    function MdViewComfortable() {
        _classCallCheck(this, MdViewComfortable);

        _React$Component.apply(this, arguments);
    }

    MdViewComfortable.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30 8.360000000000001h6.640000000000001v6.639999999999999h-6.640000000000001v-6.639999999999999z m0 23.28v-6.640000000000001h6.640000000000001v6.640000000000001h-6.640000000000001z m-8.36 0v-6.640000000000001h6.716666666666669v6.640000000000001h-6.716666666666669z m-8.280000000000001 0v-6.640000000000001h6.640000000000001v6.640000000000001h-6.639999999999999z m-8.360000000000001 0v-6.640000000000001h6.640000000000001v6.640000000000001h-6.639999999999999z m25-8.280000000000001v-6.716666666666669h6.640000000000001v6.716666666666669h-6.640000000000001z m-8.36-15h6.716666666666669v6.640000000000001h-6.716666666666669v-6.639999999999999z m-8.28 6.640000000000001v-6.639999999999999h6.639999999999999v6.639999999999999h-6.639999999999999z m8.28 8.36v-6.716666666666669h6.716666666666669v6.716666666666669h-6.716666666666669z m-8.280000000000001 0v-6.716666666666669h6.640000000000001v6.716666666666669h-6.639999999999999z m-8.360000000000001 0v-6.716666666666669h6.640000000000001v6.716666666666669h-6.639999999999999z m1.7763568394002505e-15-8.36v-6.639999999999999h6.640000000000001v6.639999999999999h-6.640000000000001z' })
            )
        );
    };

    return MdViewComfortable;
})(React.Component);

exports['default'] = MdViewComfortable;
module.exports = exports['default'];