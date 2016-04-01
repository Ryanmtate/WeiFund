/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdViewList = (function (_React$Component) {
    _inherits(MdViewList, _React$Component);

    function MdViewList() {
        _classCallCheck(this, MdViewList);

        _React$Component.apply(this, arguments);
    }

    MdViewList.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm15 8.360000000000001h20v6.639999999999999h-20v-6.639999999999999z m0 23.28v-6.640000000000001h20v6.640000000000001h-20z m0-8.280000000000001v-6.716666666666669h20v6.716666666666669h-20z m-8.36-8.36v-6.639999999999999h6.716666666666669v6.639999999999999h-6.716666666666668z m0 16.64v-6.640000000000001h6.716666666666669v6.640000000000001h-6.716666666666668z m0-8.280000000000001v-6.716666666666669h6.716666666666669v6.716666666666669h-6.716666666666668z' })
            )
        );
    };

    return MdViewList;
})(React.Component);

exports['default'] = MdViewList;
module.exports = exports['default'];