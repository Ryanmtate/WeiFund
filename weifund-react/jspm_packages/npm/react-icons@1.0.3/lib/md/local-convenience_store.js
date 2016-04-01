/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdLocalConvenienceStore = (function (_React$Component) {
    _inherits(MdLocalConvenienceStore, _React$Component);

    function MdLocalConvenienceStore() {
        _classCallCheck(this, MdLocalConvenienceStore);

        _React$Component.apply(this, arguments);
    }

    MdLocalConvenienceStore.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm26.64 20v-8.36h-1.6400000000000006v3.3599999999999994h-1.6400000000000006v-3.3599999999999994h-1.7166666666666686v5h3.356666666666669v3.3599999999999994h1.6416666666666657z m-8.280000000000001-3.3599999999999994v-5h-5v1.7166666666666668h3.2833333333333314v1.6433333333333326h-3.283333333333333v5h5.000000000000002v-1.6416666666666657h-3.3599999999999994v-1.7166666666666686h3.3599999999999994z m13.280000000000001-5h5v21.71666666666667h-13.283333333333331v-6.716666666666669h-6.716666666666669v6.716666666666669h-13.283333333333333v-21.715000000000003h5v-4.999999999999998h23.28333333333333v5z' })
            )
        );
    };

    return MdLocalConvenienceStore;
})(React.Component);

exports['default'] = MdLocalConvenienceStore;
module.exports = exports['default'];