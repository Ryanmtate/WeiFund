/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdFindInPage = (function (_React$Component) {
    _inherits(MdFindInPage, _React$Component);

    function MdFindInPage() {
        _classCallCheck(this, MdFindInPage);

        _React$Component.apply(this, arguments);
    }

    MdFindInPage.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm33.3 32.6v-19.3l-10-10h-13.3c-1.8 0-3.3 1.5-3.3 3.4l0 26.6c0 1.9 1.5 3.4 3.3 3.4h20c0.8 0 1.4-0.3 2-0.7l-7.4-7.4c-1.3 0.9-2.9 1.4-4.6 1.4-4.6 0-8.3-3.7-8.3-8.3s3.7-8.4 8.3-8.4 8.3 3.8 8.3 8.4c0 1.7-0.5 3.2-1.3 4.6l6.3 6.3z m-18.3-10.9c0 2.7 2.2 5 5 5s5-2.3 5-5-2.2-5-5-5-5 2.2-5 5z' })
            )
        );
    };

    return MdFindInPage;
})(React.Component);

exports['default'] = MdFindInPage;
module.exports = exports['default'];