/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonBook = (function (_React$Component) {
    _inherits(GoOcticonBook, _React$Component);

    function GoOcticonBook() {
        _classCallCheck(this, GoOcticonBook);

        _React$Component.apply(this, arguments);
    }

    GoOcticonBook.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm5 12.5h10v2.5h-10v-2.5z m0 7.5h10v-2.5h-10v2.5z m0 5h10v-2.5h-10v2.5z m27.5-12.5h-10v2.5h10v-2.5z m0 5h-10v2.5h10v-2.5z m0 5h-10v2.5h10v-2.5z m5-15v22.5c0 1.4-1.1 2.5-2.5 2.5h-13.8l-2.4 2.5-2.5-2.5h-13.8c-1.4 0-2.5-1.1-2.5-2.5v-22.5c0-1.4 1.1-2.5 2.5-2.5h13.8l2.5 2.5 2.4-2.5h13.8c1.4 0 2.5 1.1 2.5 2.5z m-20 1.2l-1.2-1.2h-13.8v22.5h15v-21.3z m17.5-1.2h-13.8l-1.2 1.2v21.3h15v-22.5z' })
            )
        );
    };

    return GoOcticonBook;
})(React.Component);

exports['default'] = GoOcticonBook;
module.exports = exports['default'];