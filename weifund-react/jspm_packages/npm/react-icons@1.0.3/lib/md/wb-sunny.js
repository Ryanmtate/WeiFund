/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdWbSunny = (function (_React$Component) {
    _inherits(MdWbSunny, _React$Component);

    function MdWbSunny() {
        _classCallCheck(this, MdWbSunny);

        _React$Component.apply(this, arguments);
    }

    MdWbSunny.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm5.9383333333333335 30.938333333333333l2.9666666666666677-3.046666666666667 2.344999999999999 2.3416666666666686-2.966666666666667 3.049999999999997z m12.421666666666667 6.483333333333334v-4.921666666666667h3.2833333333333314v4.921666666666667h-3.2833333333333314z m1.6400000000000006-28.28333333333333q4.140000000000001-1.7763568394002505e-15 7.07 2.933333333333332t2.9299999999999997 7.0649999999999995-2.9299999999999997 7.071666666666669-7.07 2.9316666666666684-7.07-2.9299999999999997-2.9299999999999997-7.070000000000004 2.9299999999999997-7.07 7.07-2.9299999999999997z m13.36 8.361666666666665h5v3.3599999999999994h-5v-3.3599999999999994z m-4.609999999999999 12.733333333333334l2.3433333333333337-2.2633333333333354 2.9666666666666686 2.9666666666666686-2.3416666666666686 2.344999999999999z m5.313333333333333-22.811666666666667l-2.9666666666666686 2.966666666666667-2.346666666666664-2.338333333333333 2.969999999999999-2.966666666666667z m-12.423333333333332-6.483333333333333v4.921666666666667h-3.2833333333333314v-4.921666666666667h3.2833333333333314z m-15 16.561666666666667v3.3599999999999994h-5v-3.3599999999999994h5z m4.609999999999999-9.453333333333333l-2.343333333333332 2.3433333333333337-2.966666666666667-2.966666666666667 2.341666666666667-2.3450000000000006z' })
            )
        );
    };

    return MdWbSunny;
})(React.Component);

exports['default'] = MdWbSunny;
module.exports = exports['default'];