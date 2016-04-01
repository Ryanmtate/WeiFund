/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdTextFields = (function (_React$Component) {
    _inherits(MdTextFields, _React$Component);

    function MdTextFields() {
        _classCallCheck(this, MdTextFields);

        _React$Component.apply(this, arguments);
    }

    MdTextFields.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm35.86 15v5h-5v11.64h-5v-11.64h-5v-5h15z m-31.72-8.36h21.716666666666665v5h-8.356666666666666v20h-5v-20h-8.363333333333333v-5z' })
            )
        );
    };

    return MdTextFields;
})(React.Component);

exports['default'] = MdTextFields;
module.exports = exports['default'];