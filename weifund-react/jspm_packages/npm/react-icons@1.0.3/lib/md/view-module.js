/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdViewModule = (function (_React$Component) {
    _inherits(MdViewModule, _React$Component);

    function MdViewModule() {
        _classCallCheck(this, MdViewModule);

        _React$Component.apply(this, arguments);
    }

    MdViewModule.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm26.64 8.360000000000001h8.36v9.999999999999998h-8.36v-10z m-10 9.999999999999998v-10h8.36v10h-8.36z m10 11.64v-10h8.36v10h-8.36z m-10 0v-10h8.36v10h-8.36z m-10 0v-10h8.36v10h-8.36z m0-11.64v-10h8.36v10h-8.36z' })
            )
        );
    };

    return MdViewModule;
})(React.Component);

exports['default'] = MdViewModule;
module.exports = exports['default'];