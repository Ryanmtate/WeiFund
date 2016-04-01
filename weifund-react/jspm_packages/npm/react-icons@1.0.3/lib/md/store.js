/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdStore = (function (_React$Component) {
    _inherits(MdStore, _React$Component);

    function MdStore() {
        _classCallCheck(this, MdStore);

        _React$Component.apply(this, arguments);
    }

    MdStore.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 30v-6.640000000000001h-10v6.640000000000001h10z m15-6.640000000000001h-1.6400000000000006v10h-3.3599999999999994v-10h-6.640000000000001v10h-16.716666666666665v-10h-1.6433333333333344v-3.3599999999999994l1.6416666666666666-8.360000000000001h26.71666666666667l1.6416666666666657 8.360000000000001v3.3599999999999994z m-1.6400000000000006-16.720000000000002v3.360000000000003h-26.716666666666665v-3.3599999999999994h26.716666666666665z' })
            )
        );
    };

    return MdStore;
})(React.Component);

exports['default'] = MdStore;
module.exports = exports['default'];