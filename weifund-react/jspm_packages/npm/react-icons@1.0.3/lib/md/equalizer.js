/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdEqualizer = (function (_React$Component) {
    _inherits(MdEqualizer, _React$Component);

    function MdEqualizer() {
        _classCallCheck(this, MdEqualizer);

        _React$Component.apply(this, arguments);
    }

    MdEqualizer.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm26.64 15h6.716666666666669v18.36h-6.716666666666669v-18.36z m-20 18.36v-13.36h6.716666666666669v13.36h-6.716666666666668z m10 0v-26.716666666666665h6.716666666666669v26.716666666666665h-6.716666666666669z' })
            )
        );
    };

    return MdEqualizer;
})(React.Component);

exports['default'] = MdEqualizer;
module.exports = exports['default'];