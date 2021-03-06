/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdTextsms = (function (_React$Component) {
    _inherits(MdTextsms, _React$Component);

    function MdTextsms() {
        _classCallCheck(this, MdTextsms);

        _React$Component.apply(this, arguments);
    }

    MdTextsms.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm28.36 18.36v-3.3599999999999994h-3.3599999999999994v3.3599999999999994h3.3599999999999994z m-6.719999999999999 0v-3.3599999999999994h-3.2833333333333314v3.3599999999999994h3.2833333333333314z m-6.640000000000001 0v-3.3599999999999994h-3.3599999999999994v3.3599999999999994h3.3599999999999994z m18.36-15q1.3283333333333331 0 2.3049999999999997 0.9766666666666666t0.9750000000000014 2.3049999999999997v20q0 1.3283333333333331-0.9766666666666666 2.3433333333333337t-2.306666666666665 1.0166666666666657h-23.35666666666667l-6.640000000000001 6.640000000000001v-30q0-1.3283333333333331 0.9766666666666666-2.3049999999999997t2.3049999999999997-0.9750000000000001h26.71666666666667z' })
            )
        );
    };

    return MdTextsms;
})(React.Component);

exports['default'] = MdTextsms;
module.exports = exports['default'];