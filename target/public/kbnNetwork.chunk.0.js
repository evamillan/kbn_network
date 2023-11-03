(window["kbnNetwork_bundle_jsonpfunction"] = window["kbnNetwork_bundle_jsonpfunction"] || []).push([[0],{

/***/ "./public/components/kbn_network_vis_options.tsx":
/*!*******************************************************!*\
  !*** ./public/components/kbn_network_vis_options.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KbnNetworkOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _number_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number_input */ "./public/components/number_input.tsx");
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./switch */ "./public/components/switch.tsx");
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */







function KbnNetworkOptions(_ref) {
  let {
    stateParams,
    setValue
  } = _ref;
  const shapeOptions = [{
    value: 'circle',
    text: 'Circle'
  }, {
    value: 'dot',
    text: 'Dot'
  }, {
    value: 'ellipse',
    text: 'Ellipse'
  }, {
    value: 'database',
    text: 'Database'
  }, {
    value: 'box',
    text: 'Box'
  }, {
    value: 'text',
    text: 'Text only'
  }, {
    value: 'diamond',
    text: 'Diamond'
  }, {
    value: 'star',
    text: 'Star'
  }, {
    value: 'triangle',
    text: 'Triangle'
  }, {
    value: 'triangleDown',
    text: 'Triangle down'
  }, {
    value: 'square',
    text: 'Square'
  }];
  const arrowPositionOptions = [{
    value: 'from',
    text: 'Beginning'
  }, {
    value: 'middle',
    text: 'Middle'
  }, {
    value: 'to',
    text: 'End'
  }];
  const smoothTypeOptions = [{
    value: 'dynamic',
    text: 'Dynamic'
  }, {
    value: 'continuous',
    text: 'Continous anchor'
  }, {
    value: 'discrete',
    text: 'Discrete anchor'
  }, {
    value: 'diagonalCross',
    text: 'Diagonal anchor'
  }, {
    value: 'straightCross',
    text: 'Straight line'
  }, {
    value: 'horizontal',
    text: 'Horizontal anchor'
  }, {
    value: 'vertical',
    text: 'Vertical anchor'
  }, {
    value: 'curvedCW',
    text: 'Clock-wise curve'
  }, {
    value: 'curvedCCW',
    text: 'Counter clock-wise curve'
  }, {
    value: 'cubicBezier',
    text: 'Cubic bezier'
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "kbn-network-vis-params"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiPanel"], {
    paddingSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiTitle"], {
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "visTypeKbnNetwork.params.networkSettingsSection",
    defaultMessage: "Network Settings"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_switch__WEBPACK_IMPORTED_MODULE_5__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeKbnNetwork.params.showLabels', {
      defaultMessage: 'Show labels'
    }),
    paramName: "showLabels",
    value: stateParams.showLabels,
    setValue: setValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_switch__WEBPACK_IMPORTED_MODULE_5__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeKbnNetwork.params.showPopup', {
      defaultMessage: 'Show Popup'
    }),
    paramName: "showPopup",
    value: stateParams.showPopup,
    setValue: setValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_switch__WEBPACK_IMPORTED_MODULE_5__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeKbnNetwork.params.showColorLegend', {
      defaultMessage: 'Show Color Legend'
    }),
    paramName: "showColorLegend",
    value: stateParams.showColorLegend,
    setValue: setValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_switch__WEBPACK_IMPORTED_MODULE_5__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeKbnNetwork.params.nodePhysics', {
      defaultMessage: 'Node Physics'
    }),
    paramName: "nodePhysics",
    value: stateParams.nodePhysics,
    setValue: setValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSpacer"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiTitle"], {
    size: "xxs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Colors")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFormRow"], {
    fullWidth: true,
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "visTypeKbnNetwork.params.firstNodeColor",
      defaultMessage: "First node"
    }),
    display: "columnCompressed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiColorPicker"], {
    compressed: true,
    onChange: e => setValue('firstNodeColor', e),
    color: stateParams.firstNodeColor,
    fullWidth: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFormRow"], {
    fullWidth: true,
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "visTypeKbnNetwork.params.secondNodeColor",
      defaultMessage: "Second node"
    }),
    display: "columnCompressed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiColorPicker"], {
    compressed: true,
    onChange: e => setValue('secondNodeColor', e),
    color: stateParams.secondNodeColor,
    fullWidth: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFormRow"], {
    fullWidth: true,
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "visTypeKbnNetwork.params.labelColor",
      defaultMessage: "Label"
    }),
    display: "columnCompressed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiColorPicker"], {
    compressed: true,
    onChange: e => setValue('labelColor', e),
    color: stateParams.labelColor,
    fullWidth: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSpacer"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiTitle"], {
    size: "xxs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Shapes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFormRow"], {
    label: "Shape of first node",
    fullWidth: true,
    display: "columnCompressed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSelect"], {
    fullWidth: true,
    compressed: true,
    options: shapeOptions,
    value: stateParams.shapeFirstNode,
    onChange: e => setValue('shapeFirstNode', e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFormRow"], {
    label: "Shape of second node",
    fullWidth: true,
    display: "columnCompressed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSelect"], {
    fullWidth: true,
    compressed: true,
    options: shapeOptions,
    value: stateParams.shapeSecondNode,
    onChange: e => setValue('shapeSecondNode', e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSpacer"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiTitle"], {
    size: "xxs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Size")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_number_input__WEBPACK_IMPORTED_MODULE_4__["NumberInputOption"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "visTypeTable.params.maxNodeSize",
      defaultMessage: "Max node size"
    }),
    value: stateParams.maxNodeSize,
    paramName: "maxNodeSize",
    setValue: setValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_number_input__WEBPACK_IMPORTED_MODULE_4__["NumberInputOption"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "visTypeTable.params.minNodeSize",
      defaultMessage: "Min node size"
    }),
    value: stateParams.minNodeSize,
    paramName: "minNodeSize",
    setValue: setValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_number_input__WEBPACK_IMPORTED_MODULE_4__["NumberInputOption"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "visTypeTable.params.maxEdgeSize",
      defaultMessage: "Max edge width"
    }),
    value: stateParams.maxEdgeSize,
    paramName: "maxEdgeSize",
    setValue: setValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_number_input__WEBPACK_IMPORTED_MODULE_4__["NumberInputOption"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "visTypeTable.params.minEdgeSize",
      defaultMessage: "Min edge width"
    }),
    value: stateParams.minEdgeSize,
    paramName: "minEdgeSize",
    setValue: setValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSpacer"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiTitle"], {
    size: "xxs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Directional Edges")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_switch__WEBPACK_IMPORTED_MODULE_5__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeKbnNetwork.params.displayArrow', {
      defaultMessage: 'Display directional edges'
    }),
    paramName: "displayArrow",
    value: stateParams.displayArrow,
    setValue: setValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFormRow"], {
    label: "Endpoint position",
    fullWidth: true,
    display: "columnCompressed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSelect"], {
    fullWidth: true,
    compressed: true,
    options: arrowPositionOptions,
    value: stateParams.posArrow,
    onChange: e => setValue('posArrow', e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFormRow"], {
    label: "Endpoint type",
    fullWidth: true,
    display: "columnCompressed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSelect"], {
    fullWidth: true,
    compressed: true,
    options: [{
      value: 'arrow',
      text: 'Arrow'
    }, {
      value: 'circle',
      text: 'Circle'
    }],
    value: stateParams.shapeArrow,
    onChange: e => setValue('shapeArrow', e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFormRow"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "visTypeKbnNetwork.params.smoothType",
      defaultMessage: "Smooth Type"
    }),
    fullWidth: true,
    display: "columnCompressed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSelect"], {
    fullWidth: true,
    compressed: true,
    options: smoothTypeOptions,
    value: stateParams.smoothType,
    onChange: e => setValue('smoothType', e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_number_input__WEBPACK_IMPORTED_MODULE_4__["NumberInputOption"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "visTypeTable.params.scaleArrow",
      defaultMessage: "Scale factor"
    }),
    value: stateParams.scaleArrow,
    paramName: "scaleArrow",
    setValue: setValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSpacer"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiTitle"], {
    size: "xxs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Network constants")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_number_input__WEBPACK_IMPORTED_MODULE_4__["NumberInputOption"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "visTypeTable.params.springConstant",
      defaultMessage: "Spring Force"
    }),
    value: stateParams.springConstant,
    paramName: "springConstant",
    setValue: setValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_number_input__WEBPACK_IMPORTED_MODULE_4__["NumberInputOption"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "visTypeTable.params.gravitationalConstant",
      defaultMessage: "Attraction Force"
    }),
    value: stateParams.gravitationalConstant,
    paramName: "gravitationalConstant",
    setValue: setValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSpacer"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiTitle"], {
    size: "xxs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Top values")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_number_input__WEBPACK_IMPORTED_MODULE_4__["NumberInputOption"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "visTypeTable.params.maxCutMetricSizeNode",
      defaultMessage: "Node size"
    }),
    value: stateParams.maxCutMetricSizeNode,
    paramName: "maxCutMetricSizeNode",
    setValue: setValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_number_input__WEBPACK_IMPORTED_MODULE_4__["NumberInputOption"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "visTypeTable.params.maxCutMetricSizeEdge",
      defaultMessage: "Edge size"
    }),
    value: stateParams.maxCutMetricSizeEdge,
    paramName: "maxCutMetricSizeEdge",
    setValue: setValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_number_input__WEBPACK_IMPORTED_MODULE_4__["NumberInputOption"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "visTypeTable.params.minCutMetricSizeNode",
      defaultMessage: "Don't show nodes below this value"
    }),
    value: stateParams.minCutMetricSizeNode,
    paramName: "minCutMetricSizeNode",
    setValue: setValue
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSpacer"], {
    size: "m"
  }));
} // default export required for React.Lazy
// eslint-disable-next-line import/no-default-export




/***/ }),

/***/ "./public/components/number_input.tsx":
/*!********************************************!*\
  !*** ./public/components/number_input.tsx ***!
  \********************************************/
/*! exports provided: NumberInputOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberInputOption", function() { return NumberInputOption; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);



function NumberInputOption(_ref) {
  let {
    'data-test-subj': dataTestSubj,
    disabled,
    helpText,
    error,
    isInvalid,
    label,
    placeholder,
    paramName,
    value = '',
    setValue
  } = _ref;

  const setNumber = (paramName, value) => {
    if (value) {
      setValue(paramName, Number(value));
    } else {
      setValue(paramName, '');
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
    helpText: helpText,
    label: label,
    error: error,
    isInvalid: isInvalid,
    fullWidth: true,
    display: "columnCompressed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFieldNumber"], {
    compressed: true,
    fullWidth: true,
    isInvalid: isInvalid,
    placeholder: placeholder,
    "data-test-subj": dataTestSubj,
    disabled: disabled,
    value: value,
    onChange: ev => setNumber(paramName, ev.target.value)
  }));
}



/***/ }),

/***/ "./public/components/switch.tsx":
/*!**************************************!*\
  !*** ./public/components/switch.tsx ***!
  \**************************************/
/*! exports provided: SwitchOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchOption", function() { return SwitchOption; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



function SwitchOption(_ref) {
  let {
    'data-test-subj': dataTestSubj,
    icontip,
    label,
    disabled,
    paramName,
    value = false,
    setValue
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSwitch"], {
    compressed: true,
    label: label,
    checked: value,
    disabled: disabled,
    "data-test-subj": dataTestSubj,
    onChange: ev => setValue(paramName, ev.target.checked)
  }), icontip && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIconTip"], {
    content: icontip,
    position: "right"
  }))));
}



/***/ })

}]);
//# sourceMappingURL=kbnNetwork.chunk.0.js.map