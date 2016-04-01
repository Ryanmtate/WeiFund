/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSchool = (function (_React$Component) {
    _inherits(MdSchool, _React$Component);

    function MdSchool() {
        _classCallCheck(this, MdSchool);

        _React$Component.apply(this, arguments);
    }

    MdSchool.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 5l18.36 10v13.36h-3.3599999999999994v-11.563333333333333l-15 8.203333333333333-18.36-10z m-11.639999999999999 16.953333333333337l11.639999999999999 6.406666666666663 11.64-6.406666666666666v6.716666666666669l-11.64 6.329999999999998-11.64-6.328333333333333v-6.716666666666669z' })
            )
        );
    };

    return MdSchool;
})(React.Component);

exports['default'] = MdSchool;
module.exports = exports['default'];