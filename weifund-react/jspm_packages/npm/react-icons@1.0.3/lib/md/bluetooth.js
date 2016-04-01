/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdBluetooth = (function (_React$Component) {
    _inherits(MdBluetooth, _React$Component);

    function MdBluetooth() {
        _classCallCheck(this, MdBluetooth);

        _React$Component.apply(this, arguments);
    }

    MdBluetooth.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm24.766666666666666 27.188333333333333l-3.126666666666665-3.203333333333333v6.329999999999998z m-3.126666666666665-17.5v6.328333333333333l3.125-3.203333333333333z m7.891666666666666 3.125l-7.190000000000001 7.186666666666667 7.188333333333333 7.190000000000001-9.529999999999998 9.453333333333337h-1.6400000000000006v-12.656666666666666l-7.656666666666666 7.656666666666666-2.3433333333333337-2.3433333333333337 9.296666666666667-9.296666666666667-9.296666666666667-9.296666666666667 2.3433333333333337-2.3433333333333337 7.656666666666666 7.656666666666666v-12.65666666666667h1.6400000000000006z' })
            )
        );
    };

    return MdBluetooth;
})(React.Component);

exports['default'] = MdBluetooth;
module.exports = exports['default'];