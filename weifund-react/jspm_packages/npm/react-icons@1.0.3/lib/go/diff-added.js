/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoDiffAdded = (function (_React$Component) {
    _inherits(GoDiffAdded, _React$Component);

    function GoDiffAdded() {
        _classCallCheck(this, GoDiffAdded);

        _React$Component.apply(this, arguments);
    }

    GoDiffAdded.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm22.5 12.5h-5v5h-5v5h5v5h5v-5h5v-5h-5v-5z m12.5-10h-30s-2.5 1.25-2.5 2.5v30s1.25 2.5 2.5 2.5h30s2.5-1.25 2.5-2.5v-30s-1.25-2.5-2.5-2.5z m-2.5 28.75c0 0.625-0.6625000000000014 1.25-1.25 1.25h-22.5s-1.25-0.46875-1.25-1.25v-22.5s0.625-1.25 1.25-1.25h22.5s1.25 0.625 1.25 1.25v22.5z' })
            )
        );
    };

    return GoDiffAdded;
})(React.Component);

exports['default'] = GoDiffAdded;
module.exports = exports['default'];