/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdRouter = (function (_React$Component) {
    _inherits(MdRouter, _React$Component);

    function MdRouter() {
        _classCallCheck(this, MdRouter);

        _React$Component.apply(this, arguments);
    }

    MdRouter.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm25 30v-3.3599999999999994h-3.3599999999999994v3.3599999999999994h3.3599999999999994z m-5.859999999999999 0v-3.3599999999999994h-3.283333333333333v3.3599999999999994h3.283333333333333z m-5.780000000000001 0v-3.3599999999999994h-3.3599999999999994v3.3599999999999994h3.3599999999999994z m18.28-8.36q1.3283333333333331 0 2.3433333333333337 1.0166666666666657t1.0166666666666657 2.3416666666666686v6.638333333333335q0 1.3283333333333331-1.0166666666666657 2.3433333333333337t-2.3433333333333337 1.0133333333333354h-23.28333333333333q-1.3266666666666689 0-2.3416666666666686-1.0166666666666657t-1.0150000000000006-2.3366666666666696v-6.640000000000004q0-1.3299999999999983 1.0166666666666666-2.344999999999999t2.3416666666666677-1.0166666666666657h16.641666666666666v-6.638333333333335h3.3583333333333343v6.640000000000001h3.2833333333333314z m0.5499999999999972-10.466666666666667l-1.3299999999999983 1.3266666666666662q-1.6400000000000006-1.6400000000000006-4.216666666666669-1.6400000000000006-2.5 0-4.141666666666666 1.6400000000000006l-1.326666666666668-1.3283333333333331q2.3433333333333337-2.3433333333333337 5.466666666666669-2.3433333333333337 3.2049999999999983 0 5.549999999999997 2.3433333333333337z m1.4833333333333343-1.33q-3.2049999999999983-2.8133333333333335-7.033333333333331-2.8133333333333335-3.75 0-6.953333333333333 2.8133333333333335l-1.3283333333333331-1.3283333333333331q3.5166666666666657-3.5150000000000006 8.283333333333331-3.5150000000000006 4.841666666666669 0 8.358333333333334 3.5166666666666675z' })
            )
        );
    };

    return MdRouter;
})(React.Component);

exports['default'] = MdRouter;
module.exports = exports['default'];