/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdRotate90DegreesCcw = (function (_React$Component) {
    _inherits(MdRotate90DegreesCcw, _React$Component);

    function MdRotate90DegreesCcw() {
        _classCallCheck(this, MdRotate90DegreesCcw);

        _React$Component.apply(this, arguments);
    }

    MdRotate90DegreesCcw.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm12.2 10.7l-10.8 10.8 10.9 10.8 10.8-10.8-10.9-10.8z m-6 10.8l6.1-6.1 6 6.1-6.1 6.1-6-6.1z m26.1-10.4c-2.9-3-6.8-4.4-10.6-4.4v-5.4l-7.1 7 7.1 7.1v-5.4c3 0 5.9 1.1 8.2 3.4 4.6 4.6 4.6 12 0 16.5-2.3 2.3-5.3 3.4-8.2 3.4-1.6 0-3.3-0.3-4.8-1l-2.5 2.5c2.3 1.2 4.8 1.9 7.3 1.9 3.8 0 7.7-1.5 10.6-4.4 5.8-5.9 5.8-15.4 0-21.2z' })
            )
        );
    };

    return MdRotate90DegreesCcw;
})(React.Component);

exports['default'] = MdRotate90DegreesCcw;
module.exports = exports['default'];