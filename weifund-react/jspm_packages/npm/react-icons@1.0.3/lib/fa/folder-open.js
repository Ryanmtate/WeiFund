/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaFolderOpen = (function (_React$Component) {
    _inherits(FaFolderOpen, _React$Component);

    function FaFolderOpen() {
        _classCallCheck(this, FaFolderOpen);

        _React$Component.apply(this, arguments);
    }

    FaFolderOpen.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm40.49655172413793 21.20689655172414q0 0.6675862068965515-0.6689655172413822 1.4206896551724135l-7.241379310344826 8.53793103448276q-0.9268965517241377 1.0979310344827624-2.5972413793103435 1.8620689655172384t-3.09241379310345 0.7668965517241375h-23.448275862068968q-0.7310344827586208 0-1.3034482758620687-0.2786206896551704t-0.5710344827586207-0.9268965517241412q0-0.6675862068965515 0.6689655172413795-1.4206896551724135l7.241379310344827-8.53793103448276q0.9268965517241377-1.0979310344827589 2.5972413793103453-1.862068965517242t3.0910344827586247-0.7682758620689611h23.448275862068964q0.7310344827586235 0 1.303448275862067 0.28000000000000114t0.5710344827586198 0.9268965517241377z m-7.393103448275859-7.413793103448276v3.448275862068966h-17.931034482758623q-2.027586206896551 0-4.245517241379311 1.0234482758620693t-3.533793103448275 2.5765517241379285l-7.371034482758621 8.662068965517246q1.3530843112619095e-16-0.0868965517241378-0.011034482758620555-0.26896551724138007t-0.01103448275862069-0.26896551724138007v-20.689655172413794q0-1.9820689655172412 1.420689655172414-3.406896551724138t3.4068965517241376-1.4206896551724157h6.896551724137932q1.9820689655172412 0 3.406896551724138 1.420689655172414t1.4206896551724135 3.406896551724138v0.6896551724137936h11.724137931034484q1.982068965517243 0 3.406896551724138 1.4206896551724135t1.4206896551724135 3.406896551724138z' })
            )
        );
    };

    return FaFolderOpen;
})(React.Component);

exports['default'] = FaFolderOpen;
module.exports = exports['default'];