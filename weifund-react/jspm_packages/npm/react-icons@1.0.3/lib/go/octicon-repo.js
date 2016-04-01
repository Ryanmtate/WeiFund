/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonRepo = (function (_React$Component) {
    _inherits(GoOcticonRepo, _React$Component);

    function GoOcticonRepo() {
        _classCallCheck(this, GoOcticonRepo);

        _React$Component.apply(this, arguments);
    }

    GoOcticonRepo.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm15 22.5h-2.5v-2.5h2.5v2.5z m0-7.5h-2.5v2.5h2.5v-2.5z m0-5h-2.5v2.5h2.5v-2.5z m0-5h-2.5v2.5h2.5v-2.5z m20-2.5v30c0 1.4-1.1 2.5-2.5 2.5h-12.5v5l-3.7-3.8-3.8 3.8v-5h-5c-1.4 0-2.5-1.1-2.5-2.5v-30c0-1.4 1.1-2.5 2.5-2.5h25c1.4 0 2.5 1.1 2.5 2.5z m-2.5 25h-25v5h5v-2.5h7.5v2.5h12.5v-5z m0-25h-22.5v22.5h22.5v-22.5z' })
            )
        );
    };

    return GoOcticonRepo;
})(React.Component);

exports['default'] = GoOcticonRepo;
module.exports = exports['default'];