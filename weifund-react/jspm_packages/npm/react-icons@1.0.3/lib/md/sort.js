/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSort = (function (_React$Component) {
    _inherits(MdSort, _React$Component);

    function MdSort() {
        _classCallCheck(this, MdSort);

        _React$Component.apply(this, arguments);
    }

    MdSort.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm5 21.64v-3.2833333333333314h20v3.2833333333333314h-20z m0-11.64h30v3.3599999999999994h-30v-3.3599999999999994z m0 20v-3.3599999999999994h10v3.3599999999999994h-10z' })
            )
        );
    };

    return MdSort;
})(React.Component);

exports['default'] = MdSort;
module.exports = exports['default'];