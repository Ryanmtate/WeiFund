/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdFilterList = (function (_React$Component) {
    _inherits(MdFilterList, _React$Component);

    function MdFilterList() {
        _classCallCheck(this, MdFilterList);

        _React$Component.apply(this, arguments);
    }

    MdFilterList.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm10 21.64v-3.2833333333333314h20v3.2833333333333314h-20z m-5-11.64h30v3.3599999999999994h-30v-3.3599999999999994z m11.64 20v-3.3599999999999994h6.716666666666669v3.3599999999999994h-6.716666666666669z' })
            )
        );
    };

    return MdFilterList;
})(React.Component);

exports['default'] = MdFilterList;
module.exports = exports['default'];