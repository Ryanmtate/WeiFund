/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPlayForWork = (function (_React$Component) {
    _inherits(MdPlayForWork, _React$Component);

    function MdPlayForWork() {
        _classCallCheck(this, MdPlayForWork);

        _React$Component.apply(this, arguments);
    }

    MdPlayForWork.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm10 23.36h3.3599999999999994q0 2.7333333333333343 1.9533333333333331 4.688333333333333t4.686666666666667 1.951666666666668 4.690000000000001-1.9499999999999993 1.9533333333333331-4.690000000000001h3.3599999999999994q0 4.140000000000001-2.9299999999999997 7.07t-7.07 2.9299999999999997-7.07-2.9299999999999997-2.9299999999999997-7.07z m8.36-15h3.2833333333333314v9.296666666666667h5.856666666666669l-7.5 7.5-7.5-7.5h5.861666666666665v-9.296666666666665z' })
            )
        );
    };

    return MdPlayForWork;
})(React.Component);

exports['default'] = MdPlayForWork;
module.exports = exports['default'];