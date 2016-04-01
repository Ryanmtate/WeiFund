/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonRepoClone = (function (_React$Component) {
    _inherits(GoOcticonRepoClone, _React$Component);

    function GoOcticonRepoClone() {
        _classCallCheck(this, GoOcticonRepoClone);

        _React$Component.apply(this, arguments);
    }

    GoOcticonRepoClone.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm37.5 0h-15v17.5c0 1.4 1.1 2.5 2.5 2.5h2.5v2.5h2.5v-2.5h7.5c1.4 0 2.5-1.1 2.5-2.5v-15c0-1.4-1.1-2.5-2.5-2.5z m-10 17.5h-2.5v-2.5h2.5v2.5z m10 0h-7.5v-2.5h7.5v2.5z m0-5h-10v-10h10v10z m-27.5 0h-2.5v-2.5h2.5v2.5z m0-5h-2.5v-2.5h2.5v2.5z m-5-5h15v-2.5h-17.5c-1.4 0-2.5 1.1-2.5 2.5v30c0 1.4 1.1 2.5 2.5 2.5h5v5l3.8-3.8 3.7 3.8v-5h12.5c1.4 0 2.5-1.1 2.5-2.5v-7.5h-25v-22.5z m22.5 25v5h-12.5v-2.5h-7.5v2.5h-5v-5h25z m-20-7.5h2.5v2.5h-2.5v-2.5z m2.5-2.5h-2.5v-2.5h2.5v2.5z' })
            )
        );
    };

    return GoOcticonRepoClone;
})(React.Component);

exports['default'] = GoOcticonRepoClone;
module.exports = exports['default'];