/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdGavel = (function (_React$Component) {
    _inherits(MdGavel, _React$Component);

    function MdGavel() {
        _classCallCheck(this, MdGavel);

        _React$Component.apply(this, arguments);
    }

    MdGavel.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm6.406666666666666 15.783333333333335l9.375 9.45-4.690000000000001 4.690000000000001-9.451666666666664-9.373333333333335z m14.14-14.145000000000001l9.375 9.453333333333333-4.688333333333333 4.691666666666668-9.453333333333333-9.378333333333334z m-11.796666666666667 11.801666666666668l4.688333333333334-4.690000000000001 23.595 23.593333333333334-4.689999999999998 4.688333333333333z m-7.109999999999999 21.56h20v3.3599999999999994h-20v-3.3599999999999994z' })
            )
        );
    };

    return MdGavel;
})(React.Component);

exports['default'] = MdGavel;
module.exports = exports['default'];