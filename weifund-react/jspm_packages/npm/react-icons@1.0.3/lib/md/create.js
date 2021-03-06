/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdCreate = (function (_React$Component) {
    _inherits(MdCreate, _React$Component);

    function MdCreate() {
        _classCallCheck(this, MdCreate);

        _React$Component.apply(this, arguments);
    }

    MdCreate.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm34.53333333333333 11.716666666666667l-3.0500000000000007 3.0500000000000007-6.25-6.25 3.0500000000000007-3.0500000000000007q0.466666666666665-0.4666666666666668 1.1700000000000017-0.4666666666666668t1.1716666666666669 0.4666666666666668l3.9066666666666663 3.908333333333333q0.46666666666666856 0.4666666666666668 0.46666666666666856 1.1716666666666669t-0.46666666666666856 1.1716666666666669z m-29.53333333333333 17.03333333333333l18.438333333333336-18.438333333333333 6.25 6.25-18.438333333333336 18.438333333333333h-6.25v-6.25z' })
            )
        );
    };

    return MdCreate;
})(React.Component);

exports['default'] = MdCreate;
module.exports = exports['default'];