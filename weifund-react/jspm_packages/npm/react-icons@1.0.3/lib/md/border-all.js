/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdBorderAll = (function (_React$Component) {
    _inherits(MdBorderAll, _React$Component);

    function MdBorderAll() {
        _classCallCheck(this, MdBorderAll);

        _React$Component.apply(this, arguments);
    }

    MdBorderAll.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm31.640000000000004 18.36v-10h-10v10h10z m0 13.280000000000001v-10h-10v10h10z m-13.280000000000001-13.280000000000001v-10h-10v10h10z m0 13.280000000000001v-10h-10v10h10z m-13.360000000000003-26.64h30v30h-30v-30z' })
            )
        );
    };

    return MdBorderAll;
})(React.Component);

exports['default'] = MdBorderAll;
module.exports = exports['default'];