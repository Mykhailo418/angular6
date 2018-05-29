webpackJsonp([1],{

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
var core_1 = __webpack_require__(23);
var platform_browser_1 = __webpack_require__(58);
var forms_1 = __webpack_require__(625);
// Declarations
var app_component_1 = __webpack_require__(201);
var menu_component_1 = __webpack_require__(626);
var custom_component_1 = __webpack_require__(628);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
        declarations: [app_component_1.AppComponent, menu_component_1.MenuComponent, custom_component_1.CustomComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(23);
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'angular';
        this.name = '';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-main',
        template: __webpack_require__(357)
    })
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ 357:
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n<section class=\"container\">\r\n\t<h1>Hello dear, {{title}}</h1>\r\n\t<input type=\"text\" name=\"name\" [(ngModel)]=\"name\" />\r\n\t<p>{{name}}</p>\r\n</section>\r\n<hr />\r\n<app-custom></app-custom>";

/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__(89);
var app_module_1 = __webpack_require__(194);
var core_1 = __webpack_require__(23);
core_1.enableProdMode();
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_forkJoin__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_fromPromise__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControlDirective", function() { return AbstractControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractFormGroupDirective", function() { return AbstractFormGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxControlValueAccessor", function() { return CheckboxControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlContainer", function() { return ControlContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALUE_ACCESSOR", function() { return NG_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPOSITION_BUFFER_MODE", function() { return COMPOSITION_BUFFER_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultValueAccessor", function() { return DefaultValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControl", function() { return NgControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatus", function() { return NgControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatusGroup", function() { return NgControlStatusGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgForm", function() { return NgForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModel", function() { return NgModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModelGroup", function() { return NgModelGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioControlValueAccessor", function() { return RadioControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlDirective", function() { return FormControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlName", function() { return FormControlName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupDirective", function() { return FormGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArrayName", function() { return FormArrayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupName", function() { return FormGroupName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectOption", function() { return NgSelectOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectControlValueAccessor", function() { return SelectControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleControlValueAccessor", function() { return SelectMultipleControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxRequiredValidator", function() { return CheckboxRequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return EmailValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxLengthValidator", function() { return MaxLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinLengthValidator", function() { return MinLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatternValidator", function() { return PatternValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredValidator", function() { return RequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilder", function() { return FormBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControl", function() { return AbstractControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArray", function() { return FormArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControl", function() { return FormControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return FormGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_ASYNC_VALIDATORS", function() { return NG_ASYNC_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALIDATORS", function() { return NG_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormsModule", function() { return ReactiveFormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵba", function() { return InternalFormsSharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵz", function() { return REACTIVE_DRIVEN_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return SHARED_FORM_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵy", function() { return TEMPLATE_DRIVEN_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CHECKBOX_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DEFAULT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return AbstractControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return ngControlStatusHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return formDirectiveProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return formControlBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return modelGroupProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbf", function() { return NgNoValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbb", function() { return NUMBER_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbc", function() { return NumberValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return RADIO_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return RadioControlRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbd", function() { return RANGE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbe", function() { return RangeValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return formControlBinding$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return controlNameBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return formDirectiveProvider$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return formArrayNameProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return formGroupNameProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return SELECT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return NgSelectMultipleOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return SELECT_MULTIPLE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return CHECKBOX_REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return EMAIL_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return MAX_LENGTH_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return MIN_LENGTH_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return PATTERN_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return REQUIRED_VALIDATOR; });

/**
 * @license Angular v4.2.6
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */





/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Base class for control directives.
 *
 * Only used internally in the forms module.
 *
 * \@stable
 * @abstract
 */
var AbstractControlDirective = (function () {
    function AbstractControlDirective() {
    }
    /**
     * @abstract
     * @return {?}
     */
    AbstractControlDirective.prototype.control = function () { };
    Object.defineProperty(AbstractControlDirective.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.value : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "valid", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.valid : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.invalid : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "pending", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.pending : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "errors", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.errors : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.pristine : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.dirty : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "touched", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.touched : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.untouched : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.disabled : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.enabled : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
        /**
         * @return {?}
         */
        get: function () {
            return this.control ? this.control.statusChanges : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
        /**
         * @return {?}
         */
        get: function () {
            return this.control ? this.control.valueChanges : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} value
     * @return {?}
     */
    AbstractControlDirective.prototype.reset = function (value) {
        if (value === void 0) { value = undefined; }
        if (this.control)
            this.control.reset(value);
    };
    /**
     * @param {?} errorCode
     * @param {?=} path
     * @return {?}
     */
    AbstractControlDirective.prototype.hasError = function (errorCode, path) {
        return this.control ? this.control.hasError(errorCode, path) : false;
    };
    /**
     * @param {?} errorCode
     * @param {?=} path
     * @return {?}
     */
    AbstractControlDirective.prototype.getError = function (errorCode, path) {
        return this.control ? this.control.getError(errorCode, path) : null;
    };
    return AbstractControlDirective;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A directive that contains multiple {\@link NgControl}s.
 *
 * Only used by the forms module.
 *
 * \@stable
 * @abstract
 */
var ControlContainer = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](ControlContainer, _super);
    function ControlContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ControlContainer.prototype, "formDirective", {
        /**
         * Get the form to which this container belongs.
         * @return {?}
         */
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlContainer.prototype, "path", {
        /**
         * Get the path to this container.
         * @return {?}
         */
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    return ControlContainer;
}(AbstractControlDirective));
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} value
 * @return {?}
 */
function isEmptyInputValue(value) {
    // we don't check for string here so it also works with arrays
    return value == null || value.length === 0;
}
/**
 * Providers for validators to be used for {\@link FormControl}s in a form.
 *
 * Provide this using `multi: true` to add validators.
 *
 * \@stable
 */
var NG_VALIDATORS = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["InjectionToken"]('NgValidators');
/**
 * Providers for asynchronous validators to be used for {\@link FormControl}s
 * in a form.
 *
 * Provide this using `multi: true` to add validators.
 *
 * See {\@link NG_VALIDATORS} for more details.
 *
 * \@stable
 */
var NG_ASYNC_VALIDATORS = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["InjectionToken"]('NgAsyncValidators');
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
/**
 * Provides a set of validators used by form controls.
 *
 * A validator is a function that processes a {\@link FormControl} or collection of
 * controls and returns a map of errors. A null map means that validation has passed.
 *
 * ### Example
 *
 * ```typescript
 * var loginControl = new FormControl("", Validators.required)
 * ```
 *
 * \@stable
 */
var Validators = (function () {
    function Validators() {
    }
    /**
     * Validator that requires controls to have a value greater than a number.
     * @param {?} min
     * @return {?}
     */
    Validators.min = function (min) {
        return function (control) {
            if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
                return null; // don't validate empty values to allow optional controls
            }
            var /** @type {?} */ value = parseFloat(control.value);
            // Controls with NaN values after parsing should be treated as not having a
            // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min
            return !isNaN(value) && value < min ? { 'min': { 'min': min, 'actual': control.value } } : null;
        };
    };
    /**
     * Validator that requires controls to have a value less than a number.
     * @param {?} max
     * @return {?}
     */
    Validators.max = function (max) {
        return function (control) {
            if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
                return null; // don't validate empty values to allow optional controls
            }
            var /** @type {?} */ value = parseFloat(control.value);
            // Controls with NaN values after parsing should be treated as not having a
            // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max
            return !isNaN(value) && value > max ? { 'max': { 'max': max, 'actual': control.value } } : null;
        };
    };
    /**
     * Validator that requires controls to have a non-empty value.
     * @param {?} control
     * @return {?}
     */
    Validators.required = function (control) {
        return isEmptyInputValue(control.value) ? { 'required': true } : null;
    };
    /**
     * Validator that requires control value to be true.
     * @param {?} control
     * @return {?}
     */
    Validators.requiredTrue = function (control) {
        return control.value === true ? null : { 'required': true };
    };
    /**
     * Validator that performs email validation.
     * @param {?} control
     * @return {?}
     */
    Validators.email = function (control) {
        return EMAIL_REGEXP.test(control.value) ? null : { 'email': true };
    };
    /**
     * Validator that requires controls to have a value of a minimum length.
     * @param {?} minLength
     * @return {?}
     */
    Validators.minLength = function (minLength) {
        return function (control) {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            var /** @type {?} */ length = control.value ? control.value.length : 0;
            return length < minLength ?
                { 'minlength': { 'requiredLength': minLength, 'actualLength': length } } :
                null;
        };
    };
    /**
     * Validator that requires controls to have a value of a maximum length.
     * @param {?} maxLength
     * @return {?}
     */
    Validators.maxLength = function (maxLength) {
        return function (control) {
            var /** @type {?} */ length = control.value ? control.value.length : 0;
            return length > maxLength ?
                { 'maxlength': { 'requiredLength': maxLength, 'actualLength': length } } :
                null;
        };
    };
    /**
     * Validator that requires a control to match a regex to its value.
     * @param {?} pattern
     * @return {?}
     */
    Validators.pattern = function (pattern) {
        if (!pattern)
            return Validators.nullValidator;
        var /** @type {?} */ regex;
        var /** @type {?} */ regexStr;
        if (typeof pattern === 'string') {
            regexStr = "^" + pattern + "$";
            regex = new RegExp(regexStr);
        }
        else {
            regexStr = pattern.toString();
            regex = pattern;
        }
        return function (control) {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            var /** @type {?} */ value = control.value;
            return regex.test(value) ? null :
                { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
        };
    };
    /**
     * No-op validator.
     * @param {?} c
     * @return {?}
     */
    Validators.nullValidator = function (c) { return null; };
    /**
     * @param {?} validators
     * @return {?}
     */
    Validators.compose = function (validators) {
        if (!validators)
            return null;
        var /** @type {?} */ presentValidators = (validators.filter(isPresent));
        if (presentValidators.length == 0)
            return null;
        return function (control) {
            return _mergeErrors(_executeValidators(control, presentValidators));
        };
    };
    /**
     * @param {?} validators
     * @return {?}
     */
    Validators.composeAsync = function (validators) {
        if (!validators)
            return null;
        var /** @type {?} */ presentValidators = (validators.filter(isPresent));
        if (presentValidators.length == 0)
            return null;
        return function (control) {
            var /** @type {?} */ observables = _executeAsyncValidators(control, presentValidators).map(toObservable);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map__["map"].call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_forkJoin__["forkJoin"])(observables), _mergeErrors);
        };
    };
    return Validators;
}());
/**
 * @param {?} o
 * @return {?}
 */
function isPresent(o) {
    return o != null;
}
/**
 * @param {?} r
 * @return {?}
 */
function toObservable(r) {
    var /** @type {?} */ obs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵisPromise"])(r) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_fromPromise__["fromPromise"])(r) : r;
    if (!(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵisObservable"])(obs))) {
        throw new Error("Expected validator to return Promise or Observable.");
    }
    return obs;
}
/**
 * @param {?} control
 * @param {?} validators
 * @return {?}
 */
function _executeValidators(control, validators) {
    return validators.map(function (v) { return v(control); });
}
/**
 * @param {?} control
 * @param {?} validators
 * @return {?}
 */
function _executeAsyncValidators(control, validators) {
    return validators.map(function (v) { return v(control); });
}
/**
 * @param {?} arrayOfErrors
 * @return {?}
 */
function _mergeErrors(arrayOfErrors) {
    var /** @type {?} */ res = arrayOfErrors.reduce(function (res, errors) {
        return errors != null ? Object.assign({}, /** @type {?} */ ((res)), errors) : ((res));
    }, {});
    return Object.keys(res).length === 0 ? null : res;
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Used to provide a {\@link ControlValueAccessor} for form controls.
 *
 * See {\@link DefaultValueAccessor} for how to implement one.
 * \@stable
 */
var NG_VALUE_ACCESSOR = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["InjectionToken"]('NgValueAccessor');
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return CheckboxControlValueAccessor; }),
    multi: true,
};
/**
 * The accessor for writing a value and listening to changes on a checkbox input element.
 *
 *  ### Example
 *  ```
 *  <input type="checkbox" name="rememberLogin" ngModel>
 *  ```
 *
 *  \@stable
 */
var CheckboxControlValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function CheckboxControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    CheckboxControlValueAccessor.prototype.writeValue = function (value) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    return CheckboxControlValueAccessor;
}());
CheckboxControlValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
                host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
                providers: [CHECKBOX_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
CheckboxControlValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var DEFAULT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return DefaultValueAccessor; }),
    multi: true
};
/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 * @return {?}
 */
function _isAndroid() {
    var /** @type {?} */ userAgent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["ɵgetDOM"])() ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["ɵgetDOM"])().getUserAgent() : '';
    return /android (\d+)/.test(userAgent.toLowerCase());
}
/**
 * Turn this mode on if you want form directives to buffer IME input until compositionend
 * \@experimental
 */
var COMPOSITION_BUFFER_MODE = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["InjectionToken"]('CompositionEventMode');
/**
 * The default accessor for writing a value and listening to changes that is used by the
 * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
 *
 *  ### Example
 *  ```
 *  <input type="text" name="searchQuery" ngModel>
 *  ```
 *
 *  \@stable
 */
var DefaultValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _compositionMode
     */
    function DefaultValueAccessor(_renderer, _elementRef, _compositionMode) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._compositionMode = _compositionMode;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        /**
         * Whether the user is creating a composition string (IME events).
         */
        this._composing = false;
        if (this._compositionMode == null) {
            this._compositionMode = !_isAndroid();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    DefaultValueAccessor.prototype.writeValue = function (value) {
        var /** @type {?} */ normalizedValue = value == null ? '' : value;
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DefaultValueAccessor.prototype._handleInput = function (value) {
        if (!this._compositionMode || (this._compositionMode && !this._composing)) {
            this.onChange(value);
        }
    };
    /**
     * @return {?}
     */
    DefaultValueAccessor.prototype._compositionStart = function () { this._composing = true; };
    /**
     * @param {?} value
     * @return {?}
     */
    DefaultValueAccessor.prototype._compositionEnd = function (value) {
        this._composing = false;
        this._compositionMode && this.onChange(value);
    };
    return DefaultValueAccessor;
}());
DefaultValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
                // TODO: vsavkin replace the above selector with the one below it once
                // https://github.com/angular/angular/issues/3011 is implemented
                // selector: '[ngModel],[formControl],[formControlName]',
                host: {
                    '(input)': '_handleInput($event.target.value)',
                    '(blur)': 'onTouched()',
                    '(compositionstart)': '_compositionStart()',
                    '(compositionend)': '_compositionEnd($event.target.value)'
                },
                providers: [DEFAULT_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
DefaultValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [COMPOSITION_BUFFER_MODE,] },] },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} validator
 * @return {?}
 */
function normalizeValidator(validator) {
    if (((validator)).validate) {
        return function (c) { return ((validator)).validate(c); };
    }
    else {
        return (validator);
    }
}
/**
 * @param {?} validator
 * @return {?}
 */
function normalizeAsyncValidator(validator) {
    if (((validator)).validate) {
        return function (c) { return ((validator)).validate(c); };
    }
    else {
        return (validator);
    }
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var NUMBER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return NumberValueAccessor; }),
    multi: true
};
/**
 * The accessor for writing a number value and listening to changes that is used by the
 * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
 *
 *  ### Example
 *  ```
 *  <input type="number" [(ngModel)]="age">
 *  ```
 */
var NumberValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function NumberValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NumberValueAccessor.prototype.writeValue = function (value) {
        // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
        var /** @type {?} */ normalizedValue = value == null ? '' : value;
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NumberValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    return NumberValueAccessor;
}());
NumberValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
                host: {
                    '(change)': 'onChange($event.target.value)',
                    '(input)': 'onChange($event.target.value)',
                    '(blur)': 'onTouched()'
                },
                providers: [NUMBER_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
NumberValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @return {?}
 */
function unimplemented() {
    throw new Error('unimplemented');
}
/**
 * A base class that all control directive extend.
 * It binds a {\@link FormControl} object to a DOM element.
 *
 * Used internally by Angular forms.
 *
 * \@stable
 * @abstract
 */
var NgControl = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](NgControl, _super);
    function NgControl() {
        var _this = _super.apply(this, arguments) || this;
        /**
         * \@internal
         */
        _this._parent = null;
        _this.name = null;
        _this.valueAccessor = null;
        /**
         * \@internal
         */
        _this._rawValidators = [];
        /**
         * \@internal
         */
        _this._rawAsyncValidators = [];
        return _this;
    }
    Object.defineProperty(NgControl.prototype, "validator", {
        /**
         * @return {?}
         */
        get: function () { return (unimplemented()); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgControl.prototype, "asyncValidator", {
        /**
         * @return {?}
         */
        get: function () { return (unimplemented()); },
        enumerable: true,
        configurable: true
    });
    /**
     * @abstract
     * @param {?} newValue
     * @return {?}
     */
    NgControl.prototype.viewToModelUpdate = function (newValue) { };
    return NgControl;
}(AbstractControlDirective));
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var RADIO_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return RadioControlValueAccessor; }),
    multi: true
};
/**
 * Internal class used by Angular to uncheck radio buttons with the matching name.
 */
var RadioControlRegistry = (function () {
    function RadioControlRegistry() {
        this._accessors = [];
    }
    /**
     * @param {?} control
     * @param {?} accessor
     * @return {?}
     */
    RadioControlRegistry.prototype.add = function (control, accessor) {
        this._accessors.push([control, accessor]);
    };
    /**
     * @param {?} accessor
     * @return {?}
     */
    RadioControlRegistry.prototype.remove = function (accessor) {
        for (var /** @type {?} */ i = this._accessors.length - 1; i >= 0; --i) {
            if (this._accessors[i][1] === accessor) {
                this._accessors.splice(i, 1);
                return;
            }
        }
    };
    /**
     * @param {?} accessor
     * @return {?}
     */
    RadioControlRegistry.prototype.select = function (accessor) {
        var _this = this;
        this._accessors.forEach(function (c) {
            if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
                c[1].fireUncheck(accessor.value);
            }
        });
    };
    /**
     * @param {?} controlPair
     * @param {?} accessor
     * @return {?}
     */
    RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
        if (!controlPair[0].control)
            return false;
        return controlPair[0]._parent === accessor._control._parent &&
            controlPair[1].name === accessor.name;
    };
    return RadioControlRegistry;
}());
RadioControlRegistry.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
RadioControlRegistry.ctorParameters = function () { return []; };
/**
 * \@whatItDoes Writes radio control values and listens to radio control changes.
 *
 * Used by {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName}
 * to keep the view synced with the {\@link FormControl} model.
 *
 * \@howToUse
 *
 * If you have imported the {\@link FormsModule} or the {\@link ReactiveFormsModule}, this
 * value accessor will be active on any radio control that has a form directive. You do
 * **not** need to add a special selector to activate it.
 *
 * ### How to use radio buttons with form directives
 *
 * To use radio buttons in a template-driven form, you'll want to ensure that radio buttons
 * in the same group have the same `name` attribute.  Radio buttons with different `name`
 * attributes do not affect each other.
 *
 * {\@example forms/ts/radioButtons/radio_button_example.ts region='TemplateDriven'}
 *
 * When using radio buttons in a reactive form, radio buttons in the same group should have the
 * same `formControlName`. You can also add a `name` attribute, but it's optional.
 *
 * {\@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
 *
 *  * **npm package**: `\@angular/forms`
 *
 *  \@stable
 */
var RadioControlValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _registry
     * @param {?} _injector
     */
    function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._registry = _registry;
        this._injector = _injector;
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    /**
     * @return {?}
     */
    RadioControlValueAccessor.prototype.ngOnInit = function () {
        this._control = this._injector.get(NgControl);
        this._checkName();
        this._registry.add(this._control, this);
    };
    /**
     * @return {?}
     */
    RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
    /**
     * @param {?} value
     * @return {?}
     */
    RadioControlValueAccessor.prototype.writeValue = function (value) {
        this._state = value === this.value;
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', this._state);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
        var _this = this;
        this._fn = fn;
        this.onChange = function () {
            fn(_this.value);
            _this._registry.select(_this);
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
    /**
     * @param {?} fn
     * @return {?}
     */
    RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /**
     * @return {?}
     */
    RadioControlValueAccessor.prototype._checkName = function () {
        if (this.name && this.formControlName && this.name !== this.formControlName) {
            this._throwNameError();
        }
        if (!this.name && this.formControlName)
            this.name = this.formControlName;
    };
    /**
     * @return {?}
     */
    RadioControlValueAccessor.prototype._throwNameError = function () {
        throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
    };
    return RadioControlValueAccessor;
}());
RadioControlValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
                host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
                providers: [RADIO_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
RadioControlValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], },
    { type: RadioControlRegistry, },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"], },
]; };
RadioControlValueAccessor.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    'formControlName': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var RANGE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return RangeValueAccessor; }),
    multi: true
};
/**
 * The accessor for writing a range value and listening to changes that is used by the
 * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
 *
 *  ### Example
 *  ```
 *  <input type="range" [(ngModel)]="age" >
 *  ```
 */
var RangeValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function RangeValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    RangeValueAccessor.prototype.writeValue = function (value) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RangeValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RangeValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    RangeValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    return RangeValueAccessor;
}());
RangeValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
                host: {
                    '(change)': 'onChange($event.target.value)',
                    '(input)': 'onChange($event.target.value)',
                    '(blur)': 'onTouched()'
                },
                providers: [RANGE_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
RangeValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return SelectControlValueAccessor; }),
    multi: true
};
/**
 * @param {?} id
 * @param {?} value
 * @return {?}
 */
function _buildValueString(id, value) {
    if (id == null)
        return "" + value;
    if (value && typeof value === 'object')
        value = 'Object';
    return (id + ": " + value).slice(0, 50);
}
/**
 * @param {?} valueString
 * @return {?}
 */
function _extractId(valueString) {
    return valueString.split(':')[0];
}
/**
 * \@whatItDoes Writes values and listens to changes on a select element.
 *
 * Used by {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName}
 * to keep the view synced with the {\@link FormControl} model.
 *
 * \@howToUse
 *
 * If you have imported the {\@link FormsModule} or the {\@link ReactiveFormsModule}, this
 * value accessor will be active on any select control that has a form directive. You do
 * **not** need to add a special selector to activate it.
 *
 * ### How to use select controls with form directives
 *
 * To use a select in a template-driven form, simply add an `ngModel` and a `name`
 * attribute to the main `<select>` tag.
 *
 * If your option values are simple strings, you can bind to the normal `value` property
 * on the option.  If your option values happen to be objects (and you'd like to save the
 * selection in your form as an object), use `ngValue` instead:
 *
 * {\@example forms/ts/selectControl/select_control_example.ts region='Component'}
 *
 * In reactive forms, you'll also want to add your form directive (`formControlName` or
 * `formControl`) on the main `<select>` tag. Like in the former example, you have the
 * choice of binding to the  `value` or `ngValue` property on the select's options.
 *
 * {\@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
 *
 * ### Caveat: Option selection
 *
 * Angular uses object identity to select option. It's possible for the identities of items
 * to change while the data does not. This can happen, for example, if the items are produced
 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
 * second response will produce objects with different identities.
 *
 * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
 * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
 * If `compareWith` is given, Angular selects option by the return value of the function.
 *
 * #### Syntax
 *
 * ```
 * <select [compareWith]="compareFn"  [(ngModel)]="selectedCountries">
 *     <option *ngFor="let country of countries" [ngValue]="country">
 *         {{country.name}}
 *     </option>
 * </select>
 *
 * compareFn(c1: Country, c2: Country): boolean {
 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
 * }
 * ```
 *
 * Note: We listen to the 'change' event because 'input' events aren't fired
 * for selects in Firefox and IE:
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
 * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
 *
 * * **npm package**: `\@angular/forms`
 *
 * \@stable
 */
var SelectControlValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function SelectControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@internal
         */
        this._optionMap = new Map();
        /**
         * \@internal
         */
        this._idCounter = 0;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this._compareWith = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵlooseIdentical"];
    }
    Object.defineProperty(SelectControlValueAccessor.prototype, "compareWith", {
        /**
         * @param {?} fn
         * @return {?}
         */
        set: function (fn) {
            if (typeof fn !== 'function') {
                throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
            }
            this._compareWith = fn;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    SelectControlValueAccessor.prototype.writeValue = function (value) {
        this.value = value;
        var /** @type {?} */ id = this._getOptionId(value);
        if (id == null) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
        }
        var /** @type {?} */ valueString = _buildValueString(id, value);
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
        var _this = this;
        this.onChange = function (valueString) {
            _this.value = valueString;
            fn(_this._getOptionValue(valueString));
        };
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /**
     * \@internal
     * @return {?}
     */
    SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    SelectControlValueAccessor.prototype._getOptionId = function (value) {
        for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
            var id = _a[_i];
            if (this._compareWith(this._optionMap.get(id), value))
                return id;
        }
        return null;
    };
    /**
     * \@internal
     * @param {?} valueString
     * @return {?}
     */
    SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
        var /** @type {?} */ id = _extractId(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
    };
    return SelectControlValueAccessor;
}());
SelectControlValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
                host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
                providers: [SELECT_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
SelectControlValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], },
]; };
SelectControlValueAccessor.propDecorators = {
    'compareWith': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
};
/**
 * \@whatItDoes Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * \@howToUse
 *
 * See docs for {\@link SelectControlValueAccessor} for usage examples.
 *
 * \@stable
 */
var NgSelectOption = (function () {
    /**
     * @param {?} _element
     * @param {?} _renderer
     * @param {?} _select
     */
    function NgSelectOption(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select)
            this.id = this._select._registerOption();
    }
    Object.defineProperty(NgSelectOption.prototype, "ngValue", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (this._select == null)
                return;
            this._select._optionMap.set(this.id, value);
            this._setElementValue(_buildValueString(this.id, value));
            this._select.writeValue(this._select.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectOption.prototype, "value", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._setElementValue(value);
            if (this._select)
                this._select.writeValue(this._select.value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    NgSelectOption.prototype._setElementValue = function (value) {
        this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
    };
    /**
     * @return {?}
     */
    NgSelectOption.prototype.ngOnDestroy = function () {
        if (this._select) {
            this._select._optionMap.delete(this.id);
            this._select.writeValue(this._select.value);
        }
    };
    return NgSelectOption;
}());
NgSelectOption.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{ selector: 'option' },] },
];
/**
 * @nocollapse
 */
NgSelectOption.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer"], },
    { type: SelectControlValueAccessor, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Host"] },] },
]; };
NgSelectOption.propDecorators = {
    'ngValue': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['ngValue',] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['value',] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return SelectMultipleControlValueAccessor; }),
    multi: true
};
/**
 * @param {?} id
 * @param {?} value
 * @return {?}
 */
function _buildValueString$1(id, value) {
    if (id == null)
        return "" + value;
    if (typeof value === 'string')
        value = "'" + value + "'";
    if (value && typeof value === 'object')
        value = 'Object';
    return (id + ": " + value).slice(0, 50);
}
/**
 * @param {?} valueString
 * @return {?}
 */
function _extractId$1(valueString) {
    return valueString.split(':')[0];
}
/**
 * The accessor for writing a value and listening to changes on a select element.
 *
 *  ### Caveat: Options selection
 *
 * Angular uses object identity to select options. It's possible for the identities of items
 * to change while the data does not. This can happen, for example, if the items are produced
 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
 * second response will produce objects with different identities.
 *
 * To customize the default option comparison algorithm, `<select multiple>` supports `compareWith`
 * input. `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
 * If `compareWith` is given, Angular selects options by the return value of the function.
 *
 * #### Syntax
 *
 * ```
 * <select multiple [compareWith]="compareFn"  [(ngModel)]="selectedCountries">
 *     <option *ngFor="let country of countries" [ngValue]="country">
 *         {{country.name}}
 *     </option>
 * </select>
 *
 * compareFn(c1: Country, c2: Country): boolean {
 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
 * }
 * ```
 *
 * \@stable
 */
var SelectMultipleControlValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@internal
         */
        this._optionMap = new Map();
        /**
         * \@internal
         */
        this._idCounter = 0;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this._compareWith = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵlooseIdentical"];
    }
    Object.defineProperty(SelectMultipleControlValueAccessor.prototype, "compareWith", {
        /**
         * @param {?} fn
         * @return {?}
         */
        set: function (fn) {
            if (typeof fn !== 'function') {
                throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
            }
            this._compareWith = fn;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
        var _this = this;
        this.value = value;
        var /** @type {?} */ optionSelectedStateSetter;
        if (Array.isArray(value)) {
            // convert values to ids
            var /** @type {?} */ ids_1 = value.map(function (v) { return _this._getOptionId(v); });
            optionSelectedStateSetter = function (opt, o) { opt._setSelected(ids_1.indexOf(o.toString()) > -1); };
        }
        else {
            optionSelectedStateSetter = function (opt, o) { opt._setSelected(false); };
        }
        this._optionMap.forEach(optionSelectedStateSetter);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
        var _this = this;
        this.onChange = function (_) {
            var /** @type {?} */ selected = [];
            if (_.hasOwnProperty('selectedOptions')) {
                var /** @type {?} */ options = _.selectedOptions;
                for (var /** @type {?} */ i = 0; i < options.length; i++) {
                    var /** @type {?} */ opt = options.item(i);
                    var /** @type {?} */ val = _this._getOptionValue(opt.value);
                    selected.push(val);
                }
            }
            else {
                var /** @type {?} */ options = (_.options);
                for (var /** @type {?} */ i = 0; i < options.length; i++) {
                    var /** @type {?} */ opt = options.item(i);
                    if (opt.selected) {
                        var /** @type {?} */ val = _this._getOptionValue(opt.value);
                        selected.push(val);
                    }
                }
            }
            _this.value = selected;
            fn(selected);
        };
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
        var /** @type {?} */ id = (this._idCounter++).toString();
        this._optionMap.set(id, value);
        return id;
    };
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
        for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
            var id = _a[_i];
            if (this._compareWith(/** @type {?} */ ((this._optionMap.get(id)))._value, value))
                return id;
        }
        return null;
    };
    /**
     * \@internal
     * @param {?} valueString
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
        var /** @type {?} */ id = _extractId$1(valueString);
        return this._optionMap.has(id) ? ((this._optionMap.get(id)))._value : valueString;
    };
    return SelectMultipleControlValueAccessor;
}());
SelectMultipleControlValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
                host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
                providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
SelectMultipleControlValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], },
]; };
SelectMultipleControlValueAccessor.propDecorators = {
    'compareWith': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
};
/**
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * ### Example
 *
 * ```
 * <select multiple name="city" ngModel>
 *   <option *ngFor="let c of cities" [value]="c"></option>
 * </select>
 * ```
 */
var NgSelectMultipleOption = (function () {
    /**
     * @param {?} _element
     * @param {?} _renderer
     * @param {?} _select
     */
    function NgSelectMultipleOption(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select) {
            this.id = this._select._registerOption(this);
        }
    }
    Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (this._select == null)
                return;
            this._value = value;
            this._setElementValue(_buildValueString$1(this.id, value));
            this._select.writeValue(this._select.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (this._select) {
                this._value = value;
                this._setElementValue(_buildValueString$1(this.id, value));
                this._select.writeValue(this._select.value);
            }
            else {
                this._setElementValue(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    NgSelectMultipleOption.prototype._setElementValue = function (value) {
        this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
    };
    /**
     * \@internal
     * @param {?} selected
     * @return {?}
     */
    NgSelectMultipleOption.prototype._setSelected = function (selected) {
        this._renderer.setElementProperty(this._element.nativeElement, 'selected', selected);
    };
    /**
     * @return {?}
     */
    NgSelectMultipleOption.prototype.ngOnDestroy = function () {
        if (this._select) {
            this._select._optionMap.delete(this.id);
            this._select.writeValue(this._select.value);
        }
    };
    return NgSelectMultipleOption;
}());
NgSelectMultipleOption.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{ selector: 'option' },] },
];
/**
 * @nocollapse
 */
NgSelectMultipleOption.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer"], },
    { type: SelectMultipleControlValueAccessor, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Host"] },] },
]; };
NgSelectMultipleOption.propDecorators = {
    'ngValue': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['ngValue',] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['value',] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} name
 * @param {?} parent
 * @return {?}
 */
function controlPath(name, parent) {
    return ((parent.path)).concat([name]);
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function setUpControl(control, dir) {
    if (!control)
        _throwError(dir, 'Cannot find control with');
    if (!dir.valueAccessor)
        _throwError(dir, 'No value accessor for form control with');
    control.validator = Validators.compose([/** @type {?} */ ((control.validator)), dir.validator]);
    control.asyncValidator = Validators.composeAsync([/** @type {?} */ ((control.asyncValidator)), dir.asyncValidator]); /** @type {?} */
    ((dir.valueAccessor)).writeValue(control.value); /** @type {?} */
    ((
    // view -> model
    dir.valueAccessor)).registerOnChange(function (newValue) {
        dir.viewToModelUpdate(newValue);
        control.markAsDirty();
        control.setValue(newValue, { emitModelToViewChange: false });
    }); /** @type {?} */
    ((
    // touched
    dir.valueAccessor)).registerOnTouched(function () { return control.markAsTouched(); });
    control.registerOnChange(function (newValue, emitModelEvent) {
        ((
        // control -> view
        dir.valueAccessor)).writeValue(newValue);
        // control -> ngModel
        if (emitModelEvent)
            dir.viewToModelUpdate(newValue);
    });
    if (((dir.valueAccessor)).setDisabledState) {
        control.registerOnDisabledChange(function (isDisabled) { /** @type {?} */ ((((dir.valueAccessor)).setDisabledState))(isDisabled); });
    }
    // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
    dir._rawValidators.forEach(function (validator) {
        if (((validator)).registerOnValidatorChange)
            ((((validator)).registerOnValidatorChange))(function () { return control.updateValueAndValidity(); });
    });
    dir._rawAsyncValidators.forEach(function (validator) {
        if (((validator)).registerOnValidatorChange)
            ((((validator)).registerOnValidatorChange))(function () { return control.updateValueAndValidity(); });
    });
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function cleanUpControl(control, dir) {
    ((dir.valueAccessor)).registerOnChange(function () { return _noControlError(dir); }); /** @type {?} */
    ((dir.valueAccessor)).registerOnTouched(function () { return _noControlError(dir); });
    dir._rawValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange) {
            validator.registerOnValidatorChange(null);
        }
    });
    dir._rawAsyncValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange) {
            validator.registerOnValidatorChange(null);
        }
    });
    if (control)
        control._clearChangeFns();
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function setUpFormContainer(control, dir) {
    if (control == null)
        _throwError(dir, 'Cannot find control with');
    control.validator = Validators.compose([control.validator, dir.validator]);
    control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
}
/**
 * @param {?} dir
 * @return {?}
 */
function _noControlError(dir) {
    return _throwError(dir, 'There is no FormControl instance attached to form control element with');
}
/**
 * @param {?} dir
 * @param {?} message
 * @return {?}
 */
function _throwError(dir, message) {
    var /** @type {?} */ messageEnd;
    if (((dir.path)).length > 1) {
        messageEnd = "path: '" + ((dir.path)).join(' -> ') + "'";
    }
    else if (((dir.path))[0]) {
        messageEnd = "name: '" + dir.path + "'";
    }
    else {
        messageEnd = 'unspecified name attribute';
    }
    throw new Error(message + " " + messageEnd);
}
/**
 * @param {?} validators
 * @return {?}
 */
function composeValidators(validators) {
    return validators != null ? Validators.compose(validators.map(normalizeValidator)) : null;
}
/**
 * @param {?} validators
 * @return {?}
 */
function composeAsyncValidators(validators) {
    return validators != null ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
        null;
}
/**
 * @param {?} changes
 * @param {?} viewModel
 * @return {?}
 */
function isPropertyUpdated(changes, viewModel) {
    if (!changes.hasOwnProperty('model'))
        return false;
    var /** @type {?} */ change = changes['model'];
    if (change.isFirstChange())
        return true;
    return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵlooseIdentical"])(viewModel, change.currentValue);
}
var BUILTIN_ACCESSORS = [
    CheckboxControlValueAccessor,
    RangeValueAccessor,
    NumberValueAccessor,
    SelectControlValueAccessor,
    SelectMultipleControlValueAccessor,
    RadioControlValueAccessor,
];
/**
 * @param {?} valueAccessor
 * @return {?}
 */
function isBuiltInAccessor(valueAccessor) {
    return BUILTIN_ACCESSORS.some(function (a) { return valueAccessor.constructor === a; });
}
/**
 * @param {?} dir
 * @param {?} valueAccessors
 * @return {?}
 */
function selectValueAccessor(dir, valueAccessors) {
    if (!valueAccessors)
        return null;
    var /** @type {?} */ defaultAccessor = undefined;
    var /** @type {?} */ builtinAccessor = undefined;
    var /** @type {?} */ customAccessor = undefined;
    valueAccessors.forEach(function (v) {
        if (v.constructor === DefaultValueAccessor) {
            defaultAccessor = v;
        }
        else if (isBuiltInAccessor(v)) {
            if (builtinAccessor)
                _throwError(dir, 'More than one built-in value accessor matches form control with');
            builtinAccessor = v;
        }
        else {
            if (customAccessor)
                _throwError(dir, 'More than one custom value accessor matches form control with');
            customAccessor = v;
        }
    });
    if (customAccessor)
        return customAccessor;
    if (builtinAccessor)
        return builtinAccessor;
    if (defaultAccessor)
        return defaultAccessor;
    _throwError(dir, 'No valid value accessor for form control with');
    return null;
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * This is a base class for code shared between {\@link NgModelGroup} and {\@link FormGroupName}.
 *
 * \@stable
 */
var AbstractFormGroupDirective = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](AbstractFormGroupDirective, _super);
    function AbstractFormGroupDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AbstractFormGroupDirective.prototype.ngOnInit = function () {
        this._checkParentType(); /** @type {?} */
        ((this.formDirective)).addFormGroup(this);
    };
    /**
     * @return {?}
     */
    AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
        if (this.formDirective) {
            this.formDirective.removeFormGroup(this);
        }
    };
    Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
        /**
         * Get the {\@link FormGroup} backing this binding.
         * @return {?}
         */
        get: function () { return ((this.formDirective)).getFormGroup(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
        /**
         * Get the path to this control group.
         * @return {?}
         */
        get: function () { return controlPath(this.name, this._parent); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
        /**
         * Get the {\@link Form} to which this group belongs.
         * @return {?}
         */
        get: function () { return this._parent ? this._parent.formDirective : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
        /**
         * @return {?}
         */
        get: function () { return composeValidators(this._validators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
        /**
         * @return {?}
         */
        get: function () {
            return composeAsyncValidators(this._asyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@internal
     * @return {?}
     */
    AbstractFormGroupDirective.prototype._checkParentType = function () { };
    return AbstractFormGroupDirective;
}(ControlContainer));
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var AbstractControlStatus = (function () {
    /**
     * @param {?} cd
     */
    function AbstractControlStatus(cd) {
        this._cd = cd;
    }
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.untouched : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.touched : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.pristine : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.dirty : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.valid : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.invalid : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassPending", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.pending : false; },
        enumerable: true,
        configurable: true
    });
    return AbstractControlStatus;
}());
var ngControlStatusHost = {
    '[class.ng-untouched]': 'ngClassUntouched',
    '[class.ng-touched]': 'ngClassTouched',
    '[class.ng-pristine]': 'ngClassPristine',
    '[class.ng-dirty]': 'ngClassDirty',
    '[class.ng-valid]': 'ngClassValid',
    '[class.ng-invalid]': 'ngClassInvalid',
    '[class.ng-pending]': 'ngClassPending',
};
/**
 * Directive automatically applied to Angular form controls that sets CSS classes
 * based on control status (valid/invalid/dirty/etc).
 *
 * \@stable
 */
var NgControlStatus = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](NgControlStatus, _super);
    /**
     * @param {?} cd
     */
    function NgControlStatus(cd) {
        return _super.call(this, cd) || this;
    }
    return NgControlStatus;
}(AbstractControlStatus));
NgControlStatus.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] },
];
/**
 * @nocollapse
 */
NgControlStatus.ctorParameters = function () { return [
    { type: NgControl, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] },] },
]; };
/**
 * Directive automatically applied to Angular form groups that sets CSS classes
 * based on control status (valid/invalid/dirty/etc).
 *
 * \@stable
 */
var NgControlStatusGroup = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](NgControlStatusGroup, _super);
    /**
     * @param {?} cd
     */
    function NgControlStatusGroup(cd) {
        return _super.call(this, cd) || this;
    }
    return NgControlStatusGroup;
}(AbstractControlStatus));
NgControlStatusGroup.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
                host: ngControlStatusHost
            },] },
];
/**
 * @nocollapse
 */
NgControlStatusGroup.ctorParameters = function () { return [
    { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] },] },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
 */
var VALID = 'VALID';
/**
 * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
 */
var INVALID = 'INVALID';
/**
 * Indicates that a FormControl is pending, i.e. that async validation is occurring and
 * errors are not yet available for the input value.
 */
var PENDING = 'PENDING';
/**
 * Indicates that a FormControl is disabled, i.e. that the control is exempt from ancestor
 * calculations of validity or value.
 */
var DISABLED = 'DISABLED';
/**
 * @param {?} control
 * @param {?} path
 * @param {?} delimiter
 * @return {?}
 */
function _find(control, path, delimiter) {
    if (path == null)
        return null;
    if (!(path instanceof Array)) {
        path = ((path)).split(delimiter);
    }
    if (path instanceof Array && (path.length === 0))
        return null;
    return ((path)).reduce(function (v, name) {
        if (v instanceof FormGroup) {
            return v.controls[name] || null;
        }
        if (v instanceof FormArray) {
            return v.at(/** @type {?} */ (name)) || null;
        }
        return null;
    }, control);
}
/**
 * @param {?=} validator
 * @return {?}
 */
function coerceToValidator(validator) {
    return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
/**
 * @param {?=} asyncValidator
 * @return {?}
 */
function coerceToAsyncValidator(asyncValidator) {
    return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) :
        asyncValidator || null;
}
/**
 * \@whatItDoes This is the base class for {\@link FormControl}, {\@link FormGroup}, and
 * {\@link FormArray}.
 *
 * It provides some of the shared behavior that all controls and groups of controls have, like
 * running validators, calculating status, and resetting state. It also defines the properties
 * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
 * instantiated directly.
 *
 * \@stable
 * @abstract
 */
var AbstractControl = (function () {
    /**
     * @param {?} validator
     * @param {?} asyncValidator
     */
    function AbstractControl(validator, asyncValidator) {
        this.validator = validator;
        this.asyncValidator = asyncValidator;
        /**
         * \@internal
         */
        this._onCollectionChange = function () { };
        this._pristine = true;
        this._touched = false;
        /**
         * \@internal
         */
        this._onDisabledChange = [];
    }
    Object.defineProperty(AbstractControl.prototype, "value", {
        /**
         * The value of the control.
         * @return {?}
         */
        get: function () { return this._value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "parent", {
        /**
         * The parent control.
         * @return {?}
         */
        get: function () { return this._parent; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "status", {
        /**
         * The validation status of the control. There are four possible
         * validation statuses:
         *
         * * **VALID**:  control has passed all validation checks
         * * **INVALID**: control has failed at least one validation check
         * * **PENDING**: control is in the midst of conducting a validation check
         * * **DISABLED**: control is exempt from validation checks
         *
         * These statuses are mutually exclusive, so a control cannot be
         * both valid AND invalid or invalid AND disabled.
         * @return {?}
         */
        get: function () { return this._status; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "valid", {
        /**
         * A control is `valid` when its `status === VALID`.
         *
         * In order to have this status, the control must have passed all its
         * validation checks.
         * @return {?}
         */
        get: function () { return this._status === VALID; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "invalid", {
        /**
         * A control is `invalid` when its `status === INVALID`.
         *
         * In order to have this status, the control must have failed
         * at least one of its validation checks.
         * @return {?}
         */
        get: function () { return this._status === INVALID; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "pending", {
        /**
         * A control is `pending` when its `status === PENDING`.
         *
         * In order to have this status, the control must be in the
         * middle of conducting a validation check.
         * @return {?}
         */
        get: function () { return this._status == PENDING; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "disabled", {
        /**
         * A control is `disabled` when its `status === DISABLED`.
         *
         * Disabled controls are exempt from validation checks and
         * are not included in the aggregate value of their ancestor
         * controls.
         * @return {?}
         */
        get: function () { return this._status === DISABLED; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "enabled", {
        /**
         * A control is `enabled` as long as its `status !== DISABLED`.
         *
         * In other words, it has a status of `VALID`, `INVALID`, or
         * `PENDING`.
         * @return {?}
         */
        get: function () { return this._status !== DISABLED; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "errors", {
        /**
         * Returns any errors generated by failing validation. If there
         * are no errors, it will return null.
         * @return {?}
         */
        get: function () { return this._errors; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "pristine", {
        /**
         * A control is `pristine` if the user has not yet changed
         * the value in the UI.
         *
         * Note that programmatic changes to a control's value will
         * *not* mark it dirty.
         * @return {?}
         */
        get: function () { return this._pristine; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "dirty", {
        /**
         * A control is `dirty` if the user has changed the value
         * in the UI.
         *
         * Note that programmatic changes to a control's value will
         * *not* mark it dirty.
         * @return {?}
         */
        get: function () { return !this.pristine; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "touched", {
        /**
         * A control is marked `touched` once the user has triggered
         * a `blur` event on it.
         * @return {?}
         */
        get: function () { return this._touched; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "untouched", {
        /**
         * A control is `untouched` if the user has not yet triggered
         * a `blur` event on it.
         * @return {?}
         */
        get: function () { return !this._touched; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "valueChanges", {
        /**
         * Emits an event every time the value of the control changes, in
         * the UI or programmatically.
         * @return {?}
         */
        get: function () { return this._valueChanges; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "statusChanges", {
        /**
         * Emits an event every time the validation status of the control
         * is re-calculated.
         * @return {?}
         */
        get: function () { return this._statusChanges; },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the synchronous validators that are active on this control.  Calling
     * this will overwrite any existing sync validators.
     * @param {?} newValidator
     * @return {?}
     */
    AbstractControl.prototype.setValidators = function (newValidator) {
        this.validator = coerceToValidator(newValidator);
    };
    /**
     * Sets the async validators that are active on this control. Calling this
     * will overwrite any existing async validators.
     * @param {?} newValidator
     * @return {?}
     */
    AbstractControl.prototype.setAsyncValidators = function (newValidator) {
        this.asyncValidator = coerceToAsyncValidator(newValidator);
    };
    /**
     * Empties out the sync validator list.
     * @return {?}
     */
    AbstractControl.prototype.clearValidators = function () { this.validator = null; };
    /**
     * Empties out the async validator list.
     * @return {?}
     */
    AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
    /**
     * Marks the control as `touched`.
     *
     * This will also mark all direct ancestors as `touched` to maintain
     * the model.
     * @param {?=} opts
     * @return {?}
     */
    AbstractControl.prototype.markAsTouched = function (opts) {
        if (opts === void 0) { opts = {}; }
        this._touched = true;
        if (this._parent && !opts.onlySelf) {
            this._parent.markAsTouched(opts);
        }
    };
    /**
     * Marks the control as `untouched`.
     *
     * If the control has any children, it will also mark all children as `untouched`
     * to maintain the model, and re-calculate the `touched` status of all parent
     * controls.
     * @param {?=} opts
     * @return {?}
     */
    AbstractControl.prototype.markAsUntouched = function (opts) {
        if (opts === void 0) { opts = {}; }
        this._touched = false;
        this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
        if (this._parent && !opts.onlySelf) {
            this._parent._updateTouched(opts);
        }
    };
    /**
     * Marks the control as `dirty`.
     *
     * This will also mark all direct ancestors as `dirty` to maintain
     * the model.
     * @param {?=} opts
     * @return {?}
     */
    AbstractControl.prototype.markAsDirty = function (opts) {
        if (opts === void 0) { opts = {}; }
        this._pristine = false;
        if (this._parent && !opts.onlySelf) {
            this._parent.markAsDirty(opts);
        }
    };
    /**
     * Marks the control as `pristine`.
     *
     * If the control has any children, it will also mark all children as `pristine`
     * to maintain the model, and re-calculate the `pristine` status of all parent
     * controls.
     * @param {?=} opts
     * @return {?}
     */
    AbstractControl.prototype.markAsPristine = function (opts) {
        if (opts === void 0) { opts = {}; }
        this._pristine = true;
        this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
        if (this._parent && !opts.onlySelf) {
            this._parent._updatePristine(opts);
        }
    };
    /**
     * Marks the control as `pending`.
     * @param {?=} opts
     * @return {?}
     */
    AbstractControl.prototype.markAsPending = function (opts) {
        if (opts === void 0) { opts = {}; }
        this._status = PENDING;
        if (this._parent && !opts.onlySelf) {
            this._parent.markAsPending(opts);
        }
    };
    /**
     * Disables the control. This means the control will be exempt from validation checks and
     * excluded from the aggregate value of any parent. Its status is `DISABLED`.
     *
     * If the control has children, all children will be disabled to maintain the model.
     * @param {?=} opts
     * @return {?}
     */
    AbstractControl.prototype.disable = function (opts) {
        if (opts === void 0) { opts = {}; }
        this._status = DISABLED;
        this._errors = null;
        this._forEachChild(function (control) { control.disable({ onlySelf: true }); });
        this._updateValue();
        if (opts.emitEvent !== false) {
            this._valueChanges.emit(this._value);
            this._statusChanges.emit(this._status);
        }
        this._updateAncestors(!!opts.onlySelf);
        this._onDisabledChange.forEach(function (changeFn) { return changeFn(true); });
    };
    /**
     * Enables the control. This means the control will be included in validation checks and
     * the aggregate value of its parent. Its status is re-calculated based on its value and
     * its validators.
     *
     * If the control has children, all children will be enabled.
     * @param {?=} opts
     * @return {?}
     */
    AbstractControl.prototype.enable = function (opts) {
        if (opts === void 0) { opts = {}; }
        this._status = VALID;
        this._forEachChild(function (control) { control.enable({ onlySelf: true }); });
        this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
        this._updateAncestors(!!opts.onlySelf);
        this._onDisabledChange.forEach(function (changeFn) { return changeFn(false); });
    };
    /**
     * @param {?} onlySelf
     * @return {?}
     */
    AbstractControl.prototype._updateAncestors = function (onlySelf) {
        if (this._parent && !onlySelf) {
            this._parent.updateValueAndValidity();
            this._parent._updatePristine();
            this._parent._updateTouched();
        }
    };
    /**
     * @param {?} parent
     * @return {?}
     */
    AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
    /**
     * Sets the value of the control. Abstract method (implemented in sub-classes).
     * @abstract
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    AbstractControl.prototype.setValue = function (value, options) { };
    /**
     * Patches the value of the control. Abstract method (implemented in sub-classes).
     * @abstract
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    AbstractControl.prototype.patchValue = function (value, options) { };
    /**
     * Resets the control. Abstract method (implemented in sub-classes).
     * @abstract
     * @param {?=} value
     * @param {?=} options
     * @return {?}
     */
    AbstractControl.prototype.reset = function (value, options) { };
    /**
     * Re-calculates the value and validation status of the control.
     *
     * By default, it will also update the value and validity of its ancestors.
     * @param {?=} opts
     * @return {?}
     */
    AbstractControl.prototype.updateValueAndValidity = function (opts) {
        if (opts === void 0) { opts = {}; }
        this._setInitialStatus();
        this._updateValue();
        if (this.enabled) {
            this._cancelExistingSubscription();
            this._errors = this._runValidator();
            this._status = this._calculateStatus();
            if (this._status === VALID || this._status === PENDING) {
                this._runAsyncValidator(opts.emitEvent);
            }
        }
        if (opts.emitEvent !== false) {
            this._valueChanges.emit(this._value);
            this._statusChanges.emit(this._status);
        }
        if (this._parent && !opts.onlySelf) {
            this._parent.updateValueAndValidity(opts);
        }
    };
    /**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */
    AbstractControl.prototype._updateTreeValidity = function (opts) {
        if (opts === void 0) { opts = { emitEvent: true }; }
        this._forEachChild(function (ctrl) { return ctrl._updateTreeValidity(opts); });
        this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
    };
    /**
     * @return {?}
     */
    AbstractControl.prototype._setInitialStatus = function () { this._status = this._allControlsDisabled() ? DISABLED : VALID; };
    /**
     * @return {?}
     */
    AbstractControl.prototype._runValidator = function () {
        return this.validator ? this.validator(this) : null;
    };
    /**
     * @param {?=} emitEvent
     * @return {?}
     */
    AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
        var _this = this;
        if (this.asyncValidator) {
            this._status = PENDING;
            var /** @type {?} */ obs = toObservable(this.asyncValidator(this));
            this._asyncValidationSubscription =
                obs.subscribe(function (errors) { return _this.setErrors(errors, { emitEvent: emitEvent }); });
        }
    };
    /**
     * @return {?}
     */
    AbstractControl.prototype._cancelExistingSubscription = function () {
        if (this._asyncValidationSubscription) {
            this._asyncValidationSubscription.unsubscribe();
        }
    };
    /**
     * Sets errors on a form control.
     *
     * This is used when validations are run manually by the user, rather than automatically.
     *
     * Calling `setErrors` will also update the validity of the parent control.
     *
     * ### Example
     *
     * ```
     * const login = new FormControl("someLogin");
     * login.setErrors({
     *   "notUnique": true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({"notUnique": true});
     *
     * login.setValue("someOtherLogin");
     *
     * expect(login.valid).toEqual(true);
     * ```
     * @param {?} errors
     * @param {?=} opts
     * @return {?}
     */
    AbstractControl.prototype.setErrors = function (errors, opts) {
        if (opts === void 0) { opts = {}; }
        this._errors = errors;
        this._updateControlsErrors(opts.emitEvent !== false);
    };
    /**
     * Retrieves a child control given the control's name or path.
     *
     * Paths can be passed in as an array or a string delimited by a dot.
     *
     * To get a control nested within a `person` sub-group:
     *
     * * `this.form.get('person.name');`
     *
     * -OR-
     *
     * * `this.form.get(['person', 'name']);`
     * @param {?} path
     * @return {?}
     */
    AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
    /**
     * Returns true if the control with the given path has the error specified. Otherwise
     * returns null or undefined.
     *
     * If no path is given, it checks for the error on the present control.
     * @param {?} errorCode
     * @param {?=} path
     * @return {?}
     */
    AbstractControl.prototype.getError = function (errorCode, path) {
        var /** @type {?} */ control = path ? this.get(path) : this;
        return control && control._errors ? control._errors[errorCode] : null;
    };
    /**
     * Returns true if the control with the given path has the error specified. Otherwise
     * returns false.
     *
     * If no path is given, it checks for the error on the present control.
     * @param {?} errorCode
     * @param {?=} path
     * @return {?}
     */
    AbstractControl.prototype.hasError = function (errorCode, path) { return !!this.getError(errorCode, path); };
    Object.defineProperty(AbstractControl.prototype, "root", {
        /**
         * Retrieves the top-level ancestor of this control.
         * @return {?}
         */
        get: function () {
            var /** @type {?} */ x = this;
            while (x._parent) {
                x = x._parent;
            }
            return x;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@internal
     * @param {?} emitEvent
     * @return {?}
     */
    AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
        this._status = this._calculateStatus();
        if (emitEvent) {
            this._statusChanges.emit(this._status);
        }
        if (this._parent) {
            this._parent._updateControlsErrors(emitEvent);
        }
    };
    /**
     * \@internal
     * @return {?}
     */
    AbstractControl.prototype._initObservables = function () {
        this._valueChanges = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this._statusChanges = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
    };
    /**
     * @return {?}
     */
    AbstractControl.prototype._calculateStatus = function () {
        if (this._allControlsDisabled())
            return DISABLED;
        if (this._errors)
            return INVALID;
        if (this._anyControlsHaveStatus(PENDING))
            return PENDING;
        if (this._anyControlsHaveStatus(INVALID))
            return INVALID;
        return VALID;
    };
    /**
     * \@internal
     * @abstract
     * @return {?}
     */
    AbstractControl.prototype._updateValue = function () { };
    /**
     * \@internal
     * @abstract
     * @param {?} cb
     * @return {?}
     */
    AbstractControl.prototype._forEachChild = function (cb) { };
    /**
     * \@internal
     * @abstract
     * @param {?} condition
     * @return {?}
     */
    AbstractControl.prototype._anyControls = function (condition) { };
    /**
     * \@internal
     * @abstract
     * @return {?}
     */
    AbstractControl.prototype._allControlsDisabled = function () { };
    /**
     * \@internal
     * @param {?} status
     * @return {?}
     */
    AbstractControl.prototype._anyControlsHaveStatus = function (status) {
        return this._anyControls(function (control) { return control.status === status; });
    };
    /**
     * \@internal
     * @return {?}
     */
    AbstractControl.prototype._anyControlsDirty = function () {
        return this._anyControls(function (control) { return control.dirty; });
    };
    /**
     * \@internal
     * @return {?}
     */
    AbstractControl.prototype._anyControlsTouched = function () {
        return this._anyControls(function (control) { return control.touched; });
    };
    /**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */
    AbstractControl.prototype._updatePristine = function (opts) {
        if (opts === void 0) { opts = {}; }
        this._pristine = !this._anyControlsDirty();
        if (this._parent && !opts.onlySelf) {
            this._parent._updatePristine(opts);
        }
    };
    /**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */
    AbstractControl.prototype._updateTouched = function (opts) {
        if (opts === void 0) { opts = {}; }
        this._touched = this._anyControlsTouched();
        if (this._parent && !opts.onlySelf) {
            this._parent._updateTouched(opts);
        }
    };
    /**
     * \@internal
     * @param {?} formState
     * @return {?}
     */
    AbstractControl.prototype._isBoxedValue = function (formState) {
        return typeof formState === 'object' && formState !== null &&
            Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
    };
    /**
     * \@internal
     * @param {?} fn
     * @return {?}
     */
    AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
    return AbstractControl;
}());
/**
 * \@whatItDoes Tracks the value and validation status of an individual form control.
 *
 * It is one of the three fundamental building blocks of Angular forms, along with
 * {\@link FormGroup} and {\@link FormArray}.
 *
 * \@howToUse
 *
 * When instantiating a {\@link FormControl}, you can pass in an initial value as the
 * first argument. Example:
 *
 * ```ts
 * const ctrl = new FormControl('some value');
 * console.log(ctrl.value);     // 'some value'
 * ```
 *
 * You can also initialize the control with a form state object on instantiation,
 * which includes both the value and whether or not the control is disabled.
 * You can't use the value key without the disabled key; both are required
 * to use this way of initialization.
 *
 * ```ts
 * const ctrl = new FormControl({value: 'n/a', disabled: true});
 * console.log(ctrl.value);     // 'n/a'
 * console.log(ctrl.status);   // 'DISABLED'
 * ```
 *
 * To include a sync validator (or an array of sync validators) with the control,
 * pass it in as the second argument. Async validators are also supported, but
 * have to be passed in separately as the third arg.
 *
 * ```ts
 * const ctrl = new FormControl('', Validators.required);
 * console.log(ctrl.value);     // ''
 * console.log(ctrl.status);   // 'INVALID'
 * ```
 *
 * See its superclass, {\@link AbstractControl}, for more properties and methods.
 *
 * * **npm package**: `\@angular/forms`
 *
 * \@stable
 */
var FormControl = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](FormControl, _super);
    /**
     * @param {?=} formState
     * @param {?=} validator
     * @param {?=} asyncValidator
     */
    function FormControl(formState, validator, asyncValidator) {
        if (formState === void 0) { formState = null; }
        var _this = _super.call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator)) || this;
        /**
         * \@internal
         */
        _this._onChange = [];
        _this._applyFormState(formState);
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        _this._initObservables();
        return _this;
    }
    /**
     * Set the value of the form control to `value`.
     *
     * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
     * and not its parent component. This defaults to false.
     *
     * If `emitEvent` is `true`, this
     * change will cause a `valueChanges` event on the `FormControl` to be emitted. This defaults
     * to true (as it falls through to `updateValueAndValidity`).
     *
     * If `emitModelToViewChange` is `true`, the view will be notified about the new value
     * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
     * specified.
     *
     * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
     * model.  This is the default behavior if `emitViewToModelChange` is not specified.
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    FormControl.prototype.setValue = function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this._value = value;
        if (this._onChange.length && options.emitModelToViewChange !== false) {
            this._onChange.forEach(function (changeFn) { return changeFn(_this._value, options.emitViewToModelChange !== false); });
        }
        this.updateValueAndValidity(options);
    };
    /**
     * Patches the value of a control.
     *
     * This function is functionally the same as {\@link FormControl#setValue} at this level.
     * It exists for symmetry with {\@link FormGroup#patchValue} on `FormGroups` and `FormArrays`,
     * where it does behave differently.
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    FormControl.prototype.patchValue = function (value, options) {
        if (options === void 0) { options = {}; }
        this.setValue(value, options);
    };
    /**
     * Resets the form control. This means by default:
     *
     * * it is marked as `pristine`
     * * it is marked as `untouched`
     * * value is set to null
     *
     * You can also reset to a specific form state by passing through a standalone
     * value or a form state object that contains both a value and a disabled state
     * (these are the only two properties that cannot be calculated).
     *
     * Ex:
     *
     * ```ts
     * this.control.reset('Nancy');
     *
     * console.log(this.control.value);  // 'Nancy'
     * ```
     *
     * OR
     *
     * ```
     * this.control.reset({value: 'Nancy', disabled: true});
     *
     * console.log(this.control.value);  // 'Nancy'
     * console.log(this.control.status);  // 'DISABLED'
     * ```
     * @param {?=} formState
     * @param {?=} options
     * @return {?}
     */
    FormControl.prototype.reset = function (formState, options) {
        if (formState === void 0) { formState = null; }
        if (options === void 0) { options = {}; }
        this._applyFormState(formState);
        this.markAsPristine(options);
        this.markAsUntouched(options);
        this.setValue(this._value, options);
    };
    /**
     * \@internal
     * @return {?}
     */
    FormControl.prototype._updateValue = function () { };
    /**
     * \@internal
     * @param {?} condition
     * @return {?}
     */
    FormControl.prototype._anyControls = function (condition) { return false; };
    /**
     * \@internal
     * @return {?}
     */
    FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
    /**
     * Register a listener for change events.
     * @param {?} fn
     * @return {?}
     */
    FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
    /**
     * \@internal
     * @return {?}
     */
    FormControl.prototype._clearChangeFns = function () {
        this._onChange = [];
        this._onDisabledChange = [];
        this._onCollectionChange = function () { };
    };
    /**
     * Register a listener for disabled events.
     * @param {?} fn
     * @return {?}
     */
    FormControl.prototype.registerOnDisabledChange = function (fn) {
        this._onDisabledChange.push(fn);
    };
    /**
     * \@internal
     * @param {?} cb
     * @return {?}
     */
    FormControl.prototype._forEachChild = function (cb) { };
    /**
     * @param {?} formState
     * @return {?}
     */
    FormControl.prototype._applyFormState = function (formState) {
        if (this._isBoxedValue(formState)) {
            this._value = formState.value;
            formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
                this.enable({ onlySelf: true, emitEvent: false });
        }
        else {
            this._value = formState;
        }
    };
    return FormControl;
}(AbstractControl));
/**
 * \@whatItDoes Tracks the value and validity state of a group of {\@link FormControl}
 * instances.
 *
 * A `FormGroup` aggregates the values of each child {\@link FormControl} into one object,
 * with each control name as the key.  It calculates its status by reducing the statuses
 * of its children. For example, if one of the controls in a group is invalid, the entire
 * group becomes invalid.
 *
 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
 * along with {\@link FormControl} and {\@link FormArray}.
 *
 * \@howToUse
 *
 * When instantiating a {\@link FormGroup}, pass in a collection of child controls as the first
 * argument. The key for each child will be the name under which it is registered.
 *
 * ### Example
 *
 * ```
 * const form = new FormGroup({
 *   first: new FormControl('Nancy', Validators.minLength(2)),
 *   last: new FormControl('Drew'),
 * });
 *
 * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
 * console.log(form.status);  // 'VALID'
 * ```
 *
 * You can also include group-level validators as the second arg, or group-level async
 * validators as the third arg. These come in handy when you want to perform validation
 * that considers the value of more than one child control.
 *
 * ### Example
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('', Validators.minLength(2)),
 *   passwordConfirm: new FormControl('', Validators.minLength(2)),
 * }, passwordMatchValidator);
 *
 *
 * function passwordMatchValidator(g: FormGroup) {
 *    return g.get('password').value === g.get('passwordConfirm').value
 *       ? null : {'mismatch': true};
 * }
 * ```
 *
 * * **npm package**: `\@angular/forms`
 *
 * \@stable
 */
var FormGroup = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](FormGroup, _super);
    /**
     * @param {?} controls
     * @param {?=} validator
     * @param {?=} asyncValidator
     */
    function FormGroup(controls, validator, asyncValidator) {
        var _this = _super.call(this, validator || null, asyncValidator || null) || this;
        _this.controls = controls;
        _this._initObservables();
        _this._setUpControls();
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        return _this;
    }
    /**
     * Registers a control with the group's list of controls.
     *
     * This method does not update value or validity of the control, so for
     * most cases you'll want to use {\@link FormGroup#addControl} instead.
     * @param {?} name
     * @param {?} control
     * @return {?}
     */
    FormGroup.prototype.registerControl = function (name, control) {
        if (this.controls[name])
            return this.controls[name];
        this.controls[name] = control;
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
        return control;
    };
    /**
     * Add a control to this group.
     * @param {?} name
     * @param {?} control
     * @return {?}
     */
    FormGroup.prototype.addControl = function (name, control) {
        this.registerControl(name, control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Remove a control from this group.
     * @param {?} name
     * @return {?}
     */
    FormGroup.prototype.removeControl = function (name) {
        if (this.controls[name])
            this.controls[name]._registerOnCollectionChange(function () { });
        delete (this.controls[name]);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Replace an existing control.
     * @param {?} name
     * @param {?} control
     * @return {?}
     */
    FormGroup.prototype.setControl = function (name, control) {
        if (this.controls[name])
            this.controls[name]._registerOnCollectionChange(function () { });
        delete (this.controls[name]);
        if (control)
            this.registerControl(name, control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Check whether there is an enabled control with the given name in the group.
     *
     * It will return false for disabled controls. If you'd like to check for
     * existence in the group only, use {\@link AbstractControl#get} instead.
     * @param {?} controlName
     * @return {?}
     */
    FormGroup.prototype.contains = function (controlName) {
        return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
    };
    /**
     *  Sets the value of the {\@link FormGroup}. It accepts an object that matches
     *  the structure of the group, with control names as keys.
     *
     * This method performs strict checks, so it will throw an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     *  ### Example
     *
     *  ```
     *  const form = new FormGroup({
     *     first: new FormControl(),
     *     last: new FormControl()
     *  });
     *  console.log(form.value);   // {first: null, last: null}
     *
     *  form.setValue({first: 'Nancy', last: 'Drew'});
     *  console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
     *
     *  ```
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    FormGroup.prototype.setValue = function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this._checkAllValuesPresent(value);
        Object.keys(value).forEach(function (name) {
            _this._throwIfControlMissing(name);
            _this.controls[name].setValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
    };
    /**
     *  Patches the value of the {\@link FormGroup}. It accepts an object with control
     *  names as keys, and will do its best to match the values to the correct controls
     *  in the group.
     *
     *  It accepts both super-sets and sub-sets of the group without throwing an error.
     *
     *  ### Example
     *
     *  ```
     *  const form = new FormGroup({
     *     first: new FormControl(),
     *     last: new FormControl()
     *  });
     *  console.log(form.value);   // {first: null, last: null}
     *
     *  form.patchValue({first: 'Nancy'});
     *  console.log(form.value);   // {first: 'Nancy', last: null}
     *
     *  ```
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    FormGroup.prototype.patchValue = function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        Object.keys(value).forEach(function (name) {
            if (_this.controls[name]) {
                _this.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
            }
        });
        this.updateValueAndValidity(options);
    };
    /**
     * Resets the {\@link FormGroup}. This means by default:
     *
     * * The group and all descendants are marked `pristine`
     * * The group and all descendants are marked `untouched`
     * * The value of all descendants will be null or null maps
     *
     * You can also reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * can be a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * ### Example
     *
     * ```ts
     * this.form.reset({first: 'name', last: 'last name'});
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * ```
     *
     * - OR -
     *
     * ```
     * this.form.reset({
     *   first: {value: 'name', disabled: true},
     *   last: 'last'
     * });
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * console.log(this.form.get('first').status);  // 'DISABLED'
     * ```
     * @param {?=} value
     * @param {?=} options
     * @return {?}
     */
    FormGroup.prototype.reset = function (value, options) {
        if (value === void 0) { value = {}; }
        if (options === void 0) { options = {}; }
        this._forEachChild(function (control, name) {
            control.reset(value[name], { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
        this._updatePristine(options);
        this._updateTouched(options);
    };
    /**
     * The aggregate value of the {\@link FormGroup}, including any disabled controls.
     *
     * If you'd like to include all values regardless of disabled status, use this method.
     * Otherwise, the `value` property is the best way to get the value of the group.
     * @return {?}
     */
    FormGroup.prototype.getRawValue = function () {
        return this._reduceChildren({}, function (acc, control, name) {
            acc[name] = control instanceof FormControl ? control.value : ((control)).getRawValue();
            return acc;
        });
    };
    /**
     * \@internal
     * @param {?} name
     * @return {?}
     */
    FormGroup.prototype._throwIfControlMissing = function (name) {
        if (!Object.keys(this.controls).length) {
            throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
        }
        if (!this.controls[name]) {
            throw new Error("Cannot find form control with name: " + name + ".");
        }
    };
    /**
     * \@internal
     * @param {?} cb
     * @return {?}
     */
    FormGroup.prototype._forEachChild = function (cb) {
        var _this = this;
        Object.keys(this.controls).forEach(function (k) { return cb(_this.controls[k], k); });
    };
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._setUpControls = function () {
        var _this = this;
        this._forEachChild(function (control) {
            control.setParent(_this);
            control._registerOnCollectionChange(_this._onCollectionChange);
        });
    };
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._updateValue = function () { this._value = this._reduceValue(); };
    /**
     * \@internal
     * @param {?} condition
     * @return {?}
     */
    FormGroup.prototype._anyControls = function (condition) {
        var _this = this;
        var /** @type {?} */ res = false;
        this._forEachChild(function (control, name) {
            res = res || (_this.contains(name) && condition(control));
        });
        return res;
    };
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._reduceValue = function () {
        var _this = this;
        return this._reduceChildren({}, function (acc, control, name) {
            if (control.enabled || _this.disabled) {
                acc[name] = control.value;
            }
            return acc;
        });
    };
    /**
     * \@internal
     * @param {?} initValue
     * @param {?} fn
     * @return {?}
     */
    FormGroup.prototype._reduceChildren = function (initValue, fn) {
        var /** @type {?} */ res = initValue;
        this._forEachChild(function (control, name) { res = fn(res, control, name); });
        return res;
    };
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._allControlsDisabled = function () {
        for (var _i = 0, _a = Object.keys(this.controls); _i < _a.length; _i++) {
            var controlName = _a[_i];
            if (this.controls[controlName].enabled) {
                return false;
            }
        }
        return Object.keys(this.controls).length > 0 || this.disabled;
    };
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    FormGroup.prototype._checkAllValuesPresent = function (value) {
        this._forEachChild(function (control, name) {
            if (value[name] === undefined) {
                throw new Error("Must supply a value for form control with name: '" + name + "'.");
            }
        });
    };
    return FormGroup;
}(AbstractControl));
/**
 * \@whatItDoes Tracks the value and validity state of an array of {\@link FormControl},
 * {\@link FormGroup} or {\@link FormArray} instances.
 *
 * A `FormArray` aggregates the values of each child {\@link FormControl} into an array.
 * It calculates its status by reducing the statuses of its children. For example, if one of
 * the controls in a `FormArray` is invalid, the entire array becomes invalid.
 *
 * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
 * along with {\@link FormControl} and {\@link FormGroup}.
 *
 * \@howToUse
 *
 * When instantiating a {\@link FormArray}, pass in an array of child controls as the first
 * argument.
 *
 * ### Example
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy', Validators.minLength(2)),
 *   new FormControl('Drew'),
 * ]);
 *
 * console.log(arr.value);   // ['Nancy', 'Drew']
 * console.log(arr.status);  // 'VALID'
 * ```
 *
 * You can also include array-level validators as the second arg, or array-level async
 * validators as the third arg. These come in handy when you want to perform validation
 * that considers the value of more than one child control.
 *
 * ### Adding or removing controls
 *
 * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
 * the `FormArray` directly, as that will result in strange and unexpected behavior such
 * as broken change detection.
 *
 * * **npm package**: `\@angular/forms`
 *
 * \@stable
 */
var FormArray = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](FormArray, _super);
    /**
     * @param {?} controls
     * @param {?=} validator
     * @param {?=} asyncValidator
     */
    function FormArray(controls, validator, asyncValidator) {
        var _this = _super.call(this, validator || null, asyncValidator || null) || this;
        _this.controls = controls;
        _this._initObservables();
        _this._setUpControls();
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        return _this;
    }
    /**
     * Get the {\@link AbstractControl} at the given `index` in the array.
     * @param {?} index
     * @return {?}
     */
    FormArray.prototype.at = function (index) { return this.controls[index]; };
    /**
     * Insert a new {\@link AbstractControl} at the end of the array.
     * @param {?} control
     * @return {?}
     */
    FormArray.prototype.push = function (control) {
        this.controls.push(control);
        this._registerControl(control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Insert a new {\@link AbstractControl} at the given `index` in the array.
     * @param {?} index
     * @param {?} control
     * @return {?}
     */
    FormArray.prototype.insert = function (index, control) {
        this.controls.splice(index, 0, control);
        this._registerControl(control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Remove the control at the given `index` in the array.
     * @param {?} index
     * @return {?}
     */
    FormArray.prototype.removeAt = function (index) {
        if (this.controls[index])
            this.controls[index]._registerOnCollectionChange(function () { });
        this.controls.splice(index, 1);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Replace an existing control.
     * @param {?} index
     * @param {?} control
     * @return {?}
     */
    FormArray.prototype.setControl = function (index, control) {
        if (this.controls[index])
            this.controls[index]._registerOnCollectionChange(function () { });
        this.controls.splice(index, 1);
        if (control) {
            this.controls.splice(index, 0, control);
            this._registerControl(control);
        }
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    Object.defineProperty(FormArray.prototype, "length", {
        /**
         * Length of the control array.
         * @return {?}
         */
        get: function () { return this.controls.length; },
        enumerable: true,
        configurable: true
    });
    /**
     *  Sets the value of the {\@link FormArray}. It accepts an array that matches
     *  the structure of the control.
     *
     * This method performs strict checks, so it will throw an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     *  ### Example
     *
     *  ```
     *  const arr = new FormArray([
     *     new FormControl(),
     *     new FormControl()
     *  ]);
     *  console.log(arr.value);   // [null, null]
     *
     *  arr.setValue(['Nancy', 'Drew']);
     *  console.log(arr.value);   // ['Nancy', 'Drew']
     *  ```
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    FormArray.prototype.setValue = function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this._checkAllValuesPresent(value);
        value.forEach(function (newValue, index) {
            _this._throwIfControlMissing(index);
            _this.at(index).setValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
    };
    /**
     *  Patches the value of the {\@link FormArray}. It accepts an array that matches the
     *  structure of the control, and will do its best to match the values to the correct
     *  controls in the group.
     *
     *  It accepts both super-sets and sub-sets of the array without throwing an error.
     *
     *  ### Example
     *
     *  ```
     *  const arr = new FormArray([
     *     new FormControl(),
     *     new FormControl()
     *  ]);
     *  console.log(arr.value);   // [null, null]
     *
     *  arr.patchValue(['Nancy']);
     *  console.log(arr.value);   // ['Nancy', null]
     *  ```
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    FormArray.prototype.patchValue = function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        value.forEach(function (newValue, index) {
            if (_this.at(index)) {
                _this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
            }
        });
        this.updateValueAndValidity(options);
    };
    /**
     * Resets the {\@link FormArray}. This means by default:
     *
     * * The array and all descendants are marked `pristine`
     * * The array and all descendants are marked `untouched`
     * * The value of all descendants will be null or null maps
     *
     * You can also reset to a specific form state by passing in an array of states
     * that matches the structure of the control. The state can be a standalone value
     * or a form state object with both a value and a disabled status.
     *
     * ### Example
     *
     * ```ts
     * this.arr.reset(['name', 'last name']);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * ```
     *
     * - OR -
     *
     * ```
     * this.arr.reset([
     *   {value: 'name', disabled: true},
     *   'last'
     * ]);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * console.log(this.arr.get(0).status);  // 'DISABLED'
     * ```
     * @param {?=} value
     * @param {?=} options
     * @return {?}
     */
    FormArray.prototype.reset = function (value, options) {
        if (value === void 0) { value = []; }
        if (options === void 0) { options = {}; }
        this._forEachChild(function (control, index) {
            control.reset(value[index], { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
        this._updatePristine(options);
        this._updateTouched(options);
    };
    /**
     * The aggregate value of the array, including any disabled controls.
     *
     * If you'd like to include all values regardless of disabled status, use this method.
     * Otherwise, the `value` property is the best way to get the value of the array.
     * @return {?}
     */
    FormArray.prototype.getRawValue = function () {
        return this.controls.map(function (control) {
            return control instanceof FormControl ? control.value : ((control)).getRawValue();
        });
    };
    /**
     * \@internal
     * @param {?} index
     * @return {?}
     */
    FormArray.prototype._throwIfControlMissing = function (index) {
        if (!this.controls.length) {
            throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
        }
        if (!this.at(index)) {
            throw new Error("Cannot find form control at index " + index);
        }
    };
    /**
     * \@internal
     * @param {?} cb
     * @return {?}
     */
    FormArray.prototype._forEachChild = function (cb) {
        this.controls.forEach(function (control, index) { cb(control, index); });
    };
    /**
     * \@internal
     * @return {?}
     */
    FormArray.prototype._updateValue = function () {
        var _this = this;
        this._value = this.controls.filter(function (control) { return control.enabled || _this.disabled; })
            .map(function (control) { return control.value; });
    };
    /**
     * \@internal
     * @param {?} condition
     * @return {?}
     */
    FormArray.prototype._anyControls = function (condition) {
        return this.controls.some(function (control) { return control.enabled && condition(control); });
    };
    /**
     * \@internal
     * @return {?}
     */
    FormArray.prototype._setUpControls = function () {
        var _this = this;
        this._forEachChild(function (control) { return _this._registerControl(control); });
    };
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    FormArray.prototype._checkAllValuesPresent = function (value) {
        this._forEachChild(function (control, i) {
            if (value[i] === undefined) {
                throw new Error("Must supply a value for form control at index: " + i + ".");
            }
        });
    };
    /**
     * \@internal
     * @return {?}
     */
    FormArray.prototype._allControlsDisabled = function () {
        for (var _i = 0, _a = this.controls; _i < _a.length; _i++) {
            var control = _a[_i];
            if (control.enabled)
                return false;
        }
        return this.controls.length > 0 || this.disabled;
    };
    /**
     * @param {?} control
     * @return {?}
     */
    FormArray.prototype._registerControl = function (control) {
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
    };
    return FormArray;
}(AbstractControl));
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formDirectiveProvider = {
    provide: ControlContainer,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return NgForm; })
};
var resolvedPromise = Promise.resolve(null);
/**
 * \@whatItDoes Creates a top-level {\@link FormGroup} instance and binds it to a form
 * to track aggregate form value and validation status.
 *
 * \@howToUse
 *
 * As soon as you import the `FormsModule`, this directive becomes active by default on
 * all `<form>` tags.  You don't need to add a special selector.
 *
 * You can export the directive into a local template variable using `ngForm` as the key
 * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
 * {\@link FormGroup} instance are duplicated on the directive itself, so a reference to it
 * will give you access to the aggregate value and validity status of the form, as well as
 * user interaction properties like `dirty` and `touched`.
 *
 * To register child controls with the form, you'll want to use {\@link NgModel} with a
 * `name` attribute.  You can also use {\@link NgModelGroup} if you'd like to create
 * sub-groups within the form.
 *
 * You can listen to the directive's `ngSubmit` event to be notified when the user has
 * triggered a form submission. The `ngSubmit` event will be emitted with the original form
 * submission event.
 *
 * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `FormsModule`
 *
 *  \@stable
 */
var NgForm = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](NgForm, _super);
    /**
     * @param {?} validators
     * @param {?} asyncValidators
     */
    function NgForm(validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._submitted = false;
        _this.ngSubmit = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        _this.form =
            new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
        return _this;
    }
    Object.defineProperty(NgForm.prototype, "submitted", {
        /**
         * @return {?}
         */
        get: function () { return this._submitted; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "formDirective", {
        /**
         * @return {?}
         */
        get: function () { return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { return this.form; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "controls", {
        /**
         * @return {?}
         */
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.addControl = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var /** @type {?} */ container = _this._findContainer(dir.path);
            dir._control = (container.registerControl(dir.name, dir.control));
            setUpControl(dir.control, dir);
            dir.control.updateValueAndValidity({ emitEvent: false });
        });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.getControl = function (dir) { return (this.form.get(dir.path)); };
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.removeControl = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var /** @type {?} */ container = _this._findContainer(dir.path);
            if (container) {
                container.removeControl(dir.name);
            }
        });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.addFormGroup = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var /** @type {?} */ container = _this._findContainer(dir.path);
            var /** @type {?} */ group = new FormGroup({});
            setUpFormContainer(group, dir);
            container.registerControl(dir.name, group);
            group.updateValueAndValidity({ emitEvent: false });
        });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.removeFormGroup = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var /** @type {?} */ container = _this._findContainer(dir.path);
            if (container) {
                container.removeControl(dir.name);
            }
        });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.getFormGroup = function (dir) { return (this.form.get(dir.path)); };
    /**
     * @param {?} dir
     * @param {?} value
     * @return {?}
     */
    NgForm.prototype.updateModel = function (dir, value) {
        var _this = this;
        resolvedPromise.then(function () {
            var /** @type {?} */ ctrl = (_this.form.get(/** @type {?} */ ((dir.path))));
            ctrl.setValue(value);
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgForm.prototype.onSubmit = function ($event) {
        this._submitted = true;
        this.ngSubmit.emit($event);
        return false;
    };
    /**
     * @return {?}
     */
    NgForm.prototype.onReset = function () { this.resetForm(); };
    /**
     * @param {?=} value
     * @return {?}
     */
    NgForm.prototype.resetForm = function (value) {
        if (value === void 0) { value = undefined; }
        this.form.reset(value);
        this._submitted = false;
    };
    /**
     * \@internal
     * @param {?} path
     * @return {?}
     */
    NgForm.prototype._findContainer = function (path) {
        path.pop();
        return path.length ? (this.form.get(path)) : this.form;
    };
    return NgForm;
}(ControlContainer));
NgForm.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
                providers: [formDirectiveProvider],
                host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                outputs: ['ngSubmit'],
                exportAs: 'ngForm'
            },] },
];
/**
 * @nocollapse
 */
NgForm.ctorParameters = function () { return [
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var FormErrorExamples = {
    formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
    formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
    formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
    ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
    ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var TemplateDrivenErrors = (function () {
    function TemplateDrivenErrors() {
    }
    /**
     * @return {?}
     */
    TemplateDrivenErrors.modelParentException = function () {
        throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + FormErrorExamples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + FormErrorExamples.ngModelWithFormGroup);
    };
    /**
     * @return {?}
     */
    TemplateDrivenErrors.formGroupNameException = function () {
        throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
    };
    /**
     * @return {?}
     */
    TemplateDrivenErrors.missingNameException = function () {
        throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
    };
    /**
     * @return {?}
     */
    TemplateDrivenErrors.modelGroupParentException = function () {
        throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
    };
    return TemplateDrivenErrors;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var modelGroupProvider = {
    provide: ControlContainer,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return NgModelGroup; })
};
/**
 * \@whatItDoes Creates and binds a {\@link FormGroup} instance to a DOM element.
 *
 * \@howToUse
 *
 * This directive can only be used as a child of {\@link NgForm} (or in other words,
 * within `<form>` tags).
 *
 * Use this directive if you'd like to create a sub-group within a form. This can
 * come in handy if you want to validate a sub-group of your form separately from
 * the rest of your form, or if some values in your domain model make more sense to
 * consume together in a nested object.
 *
 * Pass in the name you'd like this sub-group to have and it will become the key
 * for the sub-group in the form's full value. You can also export the directive into
 * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
 *
 * {\@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `FormsModule`
 *
 * \@stable
 */
var NgModelGroup = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](NgModelGroup, _super);
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     */
    function NgModelGroup(parent, validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }
    /**
     * \@internal
     * @return {?}
     */
    NgModelGroup.prototype._checkParentType = function () {
        if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelGroupParentException();
        }
    };
    return NgModelGroup;
}(AbstractFormGroupDirective));
NgModelGroup.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] },
];
/**
 * @nocollapse
 */
NgModelGroup.ctorParameters = function () { return [
    { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Host"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["SkipSelf"] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
]; };
NgModelGroup.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['ngModelGroup',] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formControlBinding = {
    provide: NgControl,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return NgModel; })
};
/**
 * `ngModel` forces an additional change detection run when its inputs change:
 * E.g.:
 * ```
 * <div>{{myModel.valid}}</div>
 * <input [(ngModel)]="myValue" #myModel="ngModel">
 * ```
 * I.e. `ngModel` can export itself on the element and then be used in the template.
 * Normally, this would result in expressions before the `input` that use the exported directive
 * to have and old value as they have been
 * dirty checked before. As this is a very common case for `ngModel`, we added this second change
 * detection run.
 *
 * Notes:
 * - this is just one extra run no matter how many `ngModel` have been changed.
 * - this is a general problem when using `exportAs` for directives!
 */
var resolvedPromise$1 = Promise.resolve(null);
/**
 * \@whatItDoes Creates a {\@link FormControl} instance from a domain model and binds it
 * to a form control element.
 *
 * The {\@link FormControl} instance will track the value, user interaction, and
 * validation status of the control and keep the view synced with the model. If used
 * within a parent form, the directive will also register itself with the form as a child
 * control.
 *
 * \@howToUse
 *
 * This directive can be used by itself or as part of a larger form. All you need is the
 * `ngModel` selector to activate it.
 *
 * It accepts a domain model as an optional {\@link Input}. If you have a one-way binding
 * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
 * class will set the value in the view. If you have a two-way binding with `[()]` syntax
 * (also known as 'banana-box syntax'), the value in the UI will always be synced back to
 * the domain model in your class as well.
 *
 * If you wish to inspect the properties of the associated {\@link FormControl} (like
 * validity state), you can also export the directive into a local template variable using
 * `ngModel` as the key (ex: `#myVar="ngModel"`). You can then access the control using the
 * directive's `control` property, but most properties you'll need (like `valid` and `dirty`)
 * will fall through to the control anyway, so you can access them directly. You can see a
 * full list of properties directly available in {\@link AbstractControlDirective}.
 *
 * The following is an example of a simple standalone control using `ngModel`:
 *
 * {\@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
 *
 * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
 * so that the control can be registered with the parent form under that name.
 *
 * It's worth noting that in the context of a parent form, you often can skip one-way or
 * two-way binding because the parent form will sync the value for you. You can access
 * its properties by exporting it into a local template variable using `ngForm` (ex:
 * `#f="ngForm"`). Then you can pass it where it needs to go on submit.
 *
 * If you do need to populate initial values into your form, using a one-way binding for
 * `ngModel` tends to be sufficient as long as you use the exported form's value rather
 * than the domain model's value on submit.
 *
 * Take a look at an example of using `ngModel` within a form:
 *
 * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * To see `ngModel` examples with different form control types, see:
 *
 * * Radio buttons: {\@link RadioControlValueAccessor}
 * * Selects: {\@link SelectControlValueAccessor}
 *
 * **npm package**: `\@angular/forms`
 *
 * **NgModule**: `FormsModule`
 *
 *  \@stable
 */
var NgModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](NgModel, _super);
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     * @param {?} valueAccessors
     */
    function NgModel(parent, validators, asyncValidators, valueAccessors) {
        var _this = _super.call(this) || this;
        /**
         * \@internal
         */
        _this._control = new FormControl();
        /**
         * \@internal
         */
        _this._registered = false;
        _this.update = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        _this._parent = parent;
        _this._rawValidators = validators || [];
        _this._rawAsyncValidators = asyncValidators || [];
        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NgModel.prototype.ngOnChanges = function (changes) {
        this._checkForErrors();
        if (!this._registered)
            this._setUpControl();
        if ('isDisabled' in changes) {
            this._updateDisabled(changes);
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
            this._updateValue(this.model);
            this.viewModel = this.model;
        }
    };
    /**
     * @return {?}
     */
    NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
    Object.defineProperty(NgModel.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { return this._control; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () {
            return this._parent ? controlPath(this.name, this._parent) : [this.name];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "formDirective", {
        /**
         * @return {?}
         */
        get: function () { return this._parent ? this._parent.formDirective : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "validator", {
        /**
         * @return {?}
         */
        get: function () { return composeValidators(this._rawValidators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "asyncValidator", {
        /**
         * @return {?}
         */
        get: function () {
            return composeAsyncValidators(this._rawAsyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} newValue
     * @return {?}
     */
    NgModel.prototype.viewToModelUpdate = function (newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    };
    /**
     * @return {?}
     */
    NgModel.prototype._setUpControl = function () {
        this._isStandalone() ? this._setUpStandalone() :
            this.formDirective.addControl(this);
        this._registered = true;
    };
    /**
     * @return {?}
     */
    NgModel.prototype._isStandalone = function () {
        return !this._parent || !!(this.options && this.options.standalone);
    };
    /**
     * @return {?}
     */
    NgModel.prototype._setUpStandalone = function () {
        setUpControl(this._control, this);
        this._control.updateValueAndValidity({ emitEvent: false });
    };
    /**
     * @return {?}
     */
    NgModel.prototype._checkForErrors = function () {
        if (!this._isStandalone()) {
            this._checkParentType();
        }
        this._checkName();
    };
    /**
     * @return {?}
     */
    NgModel.prototype._checkParentType = function () {
        if (!(this._parent instanceof NgModelGroup) &&
            this._parent instanceof AbstractFormGroupDirective) {
            TemplateDrivenErrors.formGroupNameException();
        }
        else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelParentException();
        }
    };
    /**
     * @return {?}
     */
    NgModel.prototype._checkName = function () {
        if (this.options && this.options.name)
            this.name = this.options.name;
        if (!this._isStandalone() && !this.name) {
            TemplateDrivenErrors.missingNameException();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgModel.prototype._updateValue = function (value) {
        var _this = this;
        resolvedPromise$1.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgModel.prototype._updateDisabled = function (changes) {
        var _this = this;
        var /** @type {?} */ disabledValue = changes['isDisabled'].currentValue;
        var /** @type {?} */ isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
        resolvedPromise$1.then(function () {
            if (isDisabled && !_this.control.disabled) {
                _this.control.disable();
            }
            else if (!isDisabled && _this.control.disabled) {
                _this.control.enable();
            }
        });
    };
    return NgModel;
}(NgControl));
NgModel.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                selector: '[ngModel]:not([formControlName]):not([formControl])',
                providers: [formControlBinding],
                exportAs: 'ngModel'
            },] },
];
/**
 * @nocollapse
 */
NgModel.ctorParameters = function () { return [
    { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Host"] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_VALUE_ACCESSOR,] },] },
]; };
NgModel.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['disabled',] },],
    'model': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['ngModel',] },],
    'options': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['ngModelOptions',] },],
    'update': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"], args: ['ngModelChange',] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ReactiveErrors = (function () {
    function ReactiveErrors() {
    }
    /**
     * @return {?}
     */
    ReactiveErrors.controlParentException = function () {
        throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formControlName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.ngModelGroupException = function () {
        throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + FormErrorExamples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + FormErrorExamples.ngModelGroup);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.missingFormException = function () {
        throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + FormErrorExamples.formControlName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.groupParentException = function () {
        throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formGroupName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.arrayParentException = function () {
        throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + FormErrorExamples.formArrayName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.disabledAttrWarning = function () {
        console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
    };
    return ReactiveErrors;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formControlBinding$1 = {
    provide: NgControl,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return FormControlDirective; })
};
/**
 * \@whatItDoes Syncs a standalone {\@link FormControl} instance to a form control element.
 *
 * In other words, this directive ensures that any values written to the {\@link FormControl}
 * instance programmatically will be written to the DOM element (model -> view). Conversely,
 * any values written to the DOM element through user input will be reflected in the
 * {\@link FormControl} instance (view -> model).
 *
 * \@howToUse
 *
 * Use this directive if you'd like to create and manage a {\@link FormControl} instance directly.
 * Simply create a {\@link FormControl}, save it to your component class, and pass it into the
 * {\@link FormControlDirective}.
 *
 * This directive is designed to be used as a standalone control.  Unlike {\@link FormControlName},
 * it does not require that your {\@link FormControl} instance be part of any parent
 * {\@link FormGroup}, and it won't be registered to any {\@link FormGroupDirective} that
 * exists above it.
 *
 * **Get the value**: the `value` property is always synced and available on the
 * {\@link FormControl} instance. See a full list of available properties in
 * {\@link AbstractControl}.
 *
 * **Set the value**: You can pass in an initial value when instantiating the {\@link FormControl},
 * or you can set it programmatically later using {\@link AbstractControl#setValue} or
 * {\@link AbstractControl#patchValue}.
 *
 * **Listen to value**: If you want to listen to changes in the value of the control, you can
 * subscribe to the {\@link AbstractControl#valueChanges} event.  You can also listen to
 * {\@link AbstractControl#statusChanges} to be notified when the validation status is
 * re-calculated.
 *
 * ### Example
 *
 * {\@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `ReactiveFormsModule`
 *
 *  \@stable
 */
var FormControlDirective = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](FormControlDirective, _super);
    /**
     * @param {?} validators
     * @param {?} asyncValidators
     * @param {?} valueAccessors
     */
    function FormControlDirective(validators, asyncValidators, valueAccessors) {
        var _this = _super.call(this) || this;
        _this.update = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        _this._rawValidators = validators || [];
        _this._rawAsyncValidators = asyncValidators || [];
        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
        return _this;
    }
    Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    FormControlDirective.prototype.ngOnChanges = function (changes) {
        if (this._isControlChanged(changes)) {
            setUpControl(this.form, this);
            if (this.control.disabled && ((this.valueAccessor)).setDisabledState) {
                ((((this.valueAccessor)).setDisabledState))(true);
            }
            this.form.updateValueAndValidity({ emitEvent: false });
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
            this.form.setValue(this.model);
            this.viewModel = this.model;
        }
    };
    Object.defineProperty(FormControlDirective.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "validator", {
        /**
         * @return {?}
         */
        get: function () { return composeValidators(this._rawValidators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
        /**
         * @return {?}
         */
        get: function () {
            return composeAsyncValidators(this._rawAsyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { return this.form; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} newValue
     * @return {?}
     */
    FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FormControlDirective.prototype._isControlChanged = function (changes) {
        return changes.hasOwnProperty('form');
    };
    return FormControlDirective;
}(NgControl));
FormControlDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] },
];
/**
 * @nocollapse
 */
FormControlDirective.ctorParameters = function () { return [
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_VALUE_ACCESSOR,] },] },
]; };
FormControlDirective.propDecorators = {
    'form': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['formControl',] },],
    'model': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['ngModel',] },],
    'update': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"], args: ['ngModelChange',] },],
    'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['disabled',] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formDirectiveProvider$1 = {
    provide: ControlContainer,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return FormGroupDirective; })
};
/**
 * \@whatItDoes Binds an existing {\@link FormGroup} to a DOM element.
 *
 * \@howToUse
 *
 * This directive accepts an existing {\@link FormGroup} instance. It will then use this
 * {\@link FormGroup} instance to match any child {\@link FormControl}, {\@link FormGroup},
 * and {\@link FormArray} instances to child {\@link FormControlName}, {\@link FormGroupName},
 * and {\@link FormArrayName} directives.
 *
 * **Set value**: You can set the form's initial value when instantiating the
 * {\@link FormGroup}, or you can set it programmatically later using the {\@link FormGroup}'s
 * {\@link AbstractControl#setValue} or {\@link AbstractControl#patchValue} methods.
 *
 * **Listen to value**: If you want to listen to changes in the value of the form, you can subscribe
 * to the {\@link FormGroup}'s {\@link AbstractControl#valueChanges} event.  You can also listen to
 * its {\@link AbstractControl#statusChanges} event to be notified when the validation status is
 * re-calculated.
 *
 * Furthermore, you can listen to the directive's `ngSubmit` event to be notified when the user has
 * triggered a form submission. The `ngSubmit` event will be emitted with the original form
 * submission event.
 *
 * ### Example
 *
 * In this example, we create form controls for first name and last name.
 *
 * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * **npm package**: `\@angular/forms`
 *
 * **NgModule**: {\@link ReactiveFormsModule}
 *
 *  \@stable
 */
var FormGroupDirective = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](FormGroupDirective, _super);
    /**
     * @param {?} _validators
     * @param {?} _asyncValidators
     */
    function FormGroupDirective(_validators, _asyncValidators) {
        var _this = _super.call(this) || this;
        _this._validators = _validators;
        _this._asyncValidators = _asyncValidators;
        _this._submitted = false;
        _this.directives = [];
        _this.form = ((null));
        _this.ngSubmit = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FormGroupDirective.prototype.ngOnChanges = function (changes) {
        this._checkFormPresent();
        if (changes.hasOwnProperty('form')) {
            this._updateValidators();
            this._updateDomValue();
            this._updateRegistrations();
        }
    };
    Object.defineProperty(FormGroupDirective.prototype, "submitted", {
        /**
         * @return {?}
         */
        get: function () { return this._submitted; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
        /**
         * @return {?}
         */
        get: function () { return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupDirective.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { return this.form; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupDirective.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.addControl = function (dir) {
        var /** @type {?} */ ctrl = this.form.get(dir.path);
        setUpControl(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
        this.directives.push(dir);
        return ctrl;
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.getControl = function (dir) { return (this.form.get(dir.path)); };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.removeControl = function (dir) { remove(this.directives, dir); };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.addFormGroup = function (dir) {
        var /** @type {?} */ ctrl = this.form.get(dir.path);
        setUpFormContainer(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.removeFormGroup = function (dir) { };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.getFormGroup = function (dir) { return (this.form.get(dir.path)); };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.addFormArray = function (dir) {
        var /** @type {?} */ ctrl = this.form.get(dir.path);
        setUpFormContainer(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.removeFormArray = function (dir) { };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.getFormArray = function (dir) { return (this.form.get(dir.path)); };
    /**
     * @param {?} dir
     * @param {?} value
     * @return {?}
     */
    FormGroupDirective.prototype.updateModel = function (dir, value) {
        var /** @type {?} */ ctrl = (this.form.get(dir.path));
        ctrl.setValue(value);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    FormGroupDirective.prototype.onSubmit = function ($event) {
        this._submitted = true;
        this.ngSubmit.emit($event);
        return false;
    };
    /**
     * @return {?}
     */
    FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
    /**
     * @param {?=} value
     * @return {?}
     */
    FormGroupDirective.prototype.resetForm = function (value) {
        if (value === void 0) { value = undefined; }
        this.form.reset(value);
        this._submitted = false;
    };
    /**
     * \@internal
     * @return {?}
     */
    FormGroupDirective.prototype._updateDomValue = function () {
        var _this = this;
        this.directives.forEach(function (dir) {
            var /** @type {?} */ newCtrl = _this.form.get(dir.path);
            if (dir._control !== newCtrl) {
                cleanUpControl(dir._control, dir);
                if (newCtrl)
                    setUpControl(newCtrl, dir);
                dir._control = newCtrl;
            }
        });
        this.form._updateTreeValidity({ emitEvent: false });
    };
    /**
     * @return {?}
     */
    FormGroupDirective.prototype._updateRegistrations = function () {
        var _this = this;
        this.form._registerOnCollectionChange(function () { return _this._updateDomValue(); });
        if (this._oldForm)
            this._oldForm._registerOnCollectionChange(function () { });
        this._oldForm = this.form;
    };
    /**
     * @return {?}
     */
    FormGroupDirective.prototype._updateValidators = function () {
        var /** @type {?} */ sync = composeValidators(this._validators);
        this.form.validator = Validators.compose([/** @type {?} */ ((this.form.validator)), /** @type {?} */ ((sync))]);
        var /** @type {?} */ async = composeAsyncValidators(this._asyncValidators);
        this.form.asyncValidator = Validators.composeAsync([/** @type {?} */ ((this.form.asyncValidator)), /** @type {?} */ ((async))]);
    };
    /**
     * @return {?}
     */
    FormGroupDirective.prototype._checkFormPresent = function () {
        if (!this.form) {
            ReactiveErrors.missingFormException();
        }
    };
    return FormGroupDirective;
}(ControlContainer));
FormGroupDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                selector: '[formGroup]',
                providers: [formDirectiveProvider$1],
                host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                exportAs: 'ngForm'
            },] },
];
/**
 * @nocollapse
 */
FormGroupDirective.ctorParameters = function () { return [
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
]; };
FormGroupDirective.propDecorators = {
    'form': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['formGroup',] },],
    'ngSubmit': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] },],
};
/**
 * @template T
 * @param {?} list
 * @param {?} el
 * @return {?}
 */
function remove(list, el) {
    var /** @type {?} */ index = list.indexOf(el);
    if (index > -1) {
        list.splice(index, 1);
    }
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formGroupNameProvider = {
    provide: ControlContainer,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return FormGroupName; })
};
/**
 * \@whatItDoes Syncs a nested {\@link FormGroup} to a DOM element.
 *
 * \@howToUse
 *
 * This directive can only be used with a parent {\@link FormGroupDirective} (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the nested {\@link FormGroup} you want to link, and
 * will look for a {\@link FormGroup} registered with that name in the parent
 * {\@link FormGroup} instance you passed into {\@link FormGroupDirective}.
 *
 * Nested form groups can come in handy when you want to validate a sub-group of a
 * form separately from the rest or when you'd like to group the values of certain
 * controls into their own nested object.
 *
 * **Access the group**: You can access the associated {\@link FormGroup} using the
 * {\@link AbstractControl#get} method. Ex: `this.form.get('name')`.
 *
 * You can also access individual controls within the group using dot syntax.
 * Ex: `this.form.get('name.first')`
 *
 * **Get the value**: the `value` property is always synced and available on the
 * {\@link FormGroup}. See a full list of available properties in {\@link AbstractControl}.
 *
 * **Set the value**: You can set an initial value for each child control when instantiating
 * the {\@link FormGroup}, or you can set it programmatically later using
 * {\@link AbstractControl#setValue} or {\@link AbstractControl#patchValue}.
 *
 * **Listen to value**: If you want to listen to changes in the value of the group, you can
 * subscribe to the {\@link AbstractControl#valueChanges} event.  You can also listen to
 * {\@link AbstractControl#statusChanges} to be notified when the validation status is
 * re-calculated.
 *
 * ### Example
 *
 * {\@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `ReactiveFormsModule`
 *
 * \@stable
 */
var FormGroupName = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](FormGroupName, _super);
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     */
    function FormGroupName(parent, validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }
    /**
     * \@internal
     * @return {?}
     */
    FormGroupName.prototype._checkParentType = function () {
        if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.groupParentException();
        }
    };
    return FormGroupName;
}(AbstractFormGroupDirective));
FormGroupName.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] },
];
/**
 * @nocollapse
 */
FormGroupName.ctorParameters = function () { return [
    { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Host"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["SkipSelf"] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
]; };
FormGroupName.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['formGroupName',] },],
};
var formArrayNameProvider = {
    provide: ControlContainer,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return FormArrayName; })
};
/**
 * \@whatItDoes Syncs a nested {\@link FormArray} to a DOM element.
 *
 * \@howToUse
 *
 * This directive is designed to be used with a parent {\@link FormGroupDirective} (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the nested {\@link FormArray} you want to link, and
 * will look for a {\@link FormArray} registered with that name in the parent
 * {\@link FormGroup} instance you passed into {\@link FormGroupDirective}.
 *
 * Nested form arrays can come in handy when you have a group of form controls but
 * you're not sure how many there will be. Form arrays allow you to create new
 * form controls dynamically.
 *
 * **Access the array**: You can access the associated {\@link FormArray} using the
 * {\@link AbstractControl#get} method on the parent {\@link FormGroup}.
 * Ex: `this.form.get('cities')`.
 *
 * **Get the value**: the `value` property is always synced and available on the
 * {\@link FormArray}. See a full list of available properties in {\@link AbstractControl}.
 *
 * **Set the value**: You can set an initial value for each child control when instantiating
 * the {\@link FormArray}, or you can set the value programmatically later using the
 * {\@link FormArray}'s {\@link AbstractControl#setValue} or {\@link AbstractControl#patchValue}
 * methods.
 *
 * **Listen to value**: If you want to listen to changes in the value of the array, you can
 * subscribe to the {\@link FormArray}'s {\@link AbstractControl#valueChanges} event.  You can also
 * listen to its {\@link AbstractControl#statusChanges} event to be notified when the validation
 * status is re-calculated.
 *
 * **Add new controls**: You can add new controls to the {\@link FormArray} dynamically by
 * calling its {\@link FormArray#push} method.
 *  Ex: `this.form.get('cities').push(new FormControl());`
 *
 * ### Example
 *
 * {\@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `ReactiveFormsModule`
 *
 * \@stable
 */
var FormArrayName = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](FormArrayName, _super);
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     */
    function FormArrayName(parent, validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }
    /**
     * @return {?}
     */
    FormArrayName.prototype.ngOnInit = function () {
        this._checkParentType(); /** @type {?} */
        ((this.formDirective)).addFormArray(this);
    };
    /**
     * @return {?}
     */
    FormArrayName.prototype.ngOnDestroy = function () {
        if (this.formDirective) {
            this.formDirective.removeFormArray(this);
        }
    };
    Object.defineProperty(FormArrayName.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { return ((this.formDirective)).getFormArray(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "formDirective", {
        /**
         * @return {?}
         */
        get: function () {
            return this._parent ? (this._parent.formDirective) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () { return controlPath(this.name, this._parent); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "validator", {
        /**
         * @return {?}
         */
        get: function () { return composeValidators(this._validators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
        /**
         * @return {?}
         */
        get: function () {
            return composeAsyncValidators(this._asyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FormArrayName.prototype._checkParentType = function () {
        if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.arrayParentException();
        }
    };
    return FormArrayName;
}(ControlContainer));
FormArrayName.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] },
];
/**
 * @nocollapse
 */
FormArrayName.ctorParameters = function () { return [
    { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Host"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["SkipSelf"] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
]; };
FormArrayName.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['formArrayName',] },],
};
/**
 * @param {?} parent
 * @return {?}
 */
function _hasInvalidParent(parent) {
    return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
        !(parent instanceof FormArrayName);
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var controlNameBinding = {
    provide: NgControl,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return FormControlName; })
};
/**
 * \@whatItDoes Syncs a {\@link FormControl} in an existing {\@link FormGroup} to a form control
 * element by name.
 *
 * In other words, this directive ensures that any values written to the {\@link FormControl}
 * instance programmatically will be written to the DOM element (model -> view). Conversely,
 * any values written to the DOM element through user input will be reflected in the
 * {\@link FormControl} instance (view -> model).
 *
 * \@howToUse
 *
 * This directive is designed to be used with a parent {\@link FormGroupDirective} (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the {\@link FormControl} instance you want to
 * link, and will look for a {\@link FormControl} registered with that name in the
 * closest {\@link FormGroup} or {\@link FormArray} above it.
 *
 * **Access the control**: You can access the {\@link FormControl} associated with
 * this directive by using the {\@link AbstractControl#get} method.
 * Ex: `this.form.get('first');`
 *
 * **Get value**: the `value` property is always synced and available on the {\@link FormControl}.
 * See a full list of available properties in {\@link AbstractControl}.
 *
 *  **Set value**: You can set an initial value for the control when instantiating the
 *  {\@link FormControl}, or you can set it programmatically later using
 *  {\@link AbstractControl#setValue} or {\@link AbstractControl#patchValue}.
 *
 * **Listen to value**: If you want to listen to changes in the value of the control, you can
 * subscribe to the {\@link AbstractControl#valueChanges} event.  You can also listen to
 * {\@link AbstractControl#statusChanges} to be notified when the validation status is
 * re-calculated.
 *
 * ### Example
 *
 * In this example, we create form controls for first name and last name.
 *
 * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * To see `formControlName` examples with different form control types, see:
 *
 * * Radio buttons: {\@link RadioControlValueAccessor}
 * * Selects: {\@link SelectControlValueAccessor}
 *
 * **npm package**: `\@angular/forms`
 *
 * **NgModule**: {\@link ReactiveFormsModule}
 *
 *  \@stable
 */
var FormControlName = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](FormControlName, _super);
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     * @param {?} valueAccessors
     */
    function FormControlName(parent, validators, asyncValidators, valueAccessors) {
        var _this = _super.call(this) || this;
        _this._added = false;
        _this.update = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        _this._parent = parent;
        _this._rawValidators = validators || [];
        _this._rawAsyncValidators = asyncValidators || [];
        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
        return _this;
    }
    Object.defineProperty(FormControlName.prototype, "isDisabled", {
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    FormControlName.prototype.ngOnChanges = function (changes) {
        if (!this._added)
            this._setUpControl();
        if (isPropertyUpdated(changes, this.viewModel)) {
            this.viewModel = this.model;
            this.formDirective.updateModel(this, this.model);
        }
    };
    /**
     * @return {?}
     */
    FormControlName.prototype.ngOnDestroy = function () {
        if (this.formDirective) {
            this.formDirective.removeControl(this);
        }
    };
    /**
     * @param {?} newValue
     * @return {?}
     */
    FormControlName.prototype.viewToModelUpdate = function (newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    };
    Object.defineProperty(FormControlName.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () { return controlPath(this.name, /** @type {?} */ ((this._parent))); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "formDirective", {
        /**
         * @return {?}
         */
        get: function () { return this._parent ? this._parent.formDirective : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "validator", {
        /**
         * @return {?}
         */
        get: function () { return composeValidators(this._rawValidators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "asyncValidator", {
        /**
         * @return {?}
         */
        get: function () {
            return ((composeAsyncValidators(this._rawAsyncValidators)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { return this._control; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FormControlName.prototype._checkParentType = function () {
        if (!(this._parent instanceof FormGroupName) &&
            this._parent instanceof AbstractFormGroupDirective) {
            ReactiveErrors.ngModelGroupException();
        }
        else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
            !(this._parent instanceof FormArrayName)) {
            ReactiveErrors.controlParentException();
        }
    };
    /**
     * @return {?}
     */
    FormControlName.prototype._setUpControl = function () {
        this._checkParentType();
        this._control = this.formDirective.addControl(this);
        if (this.control.disabled && ((this.valueAccessor)).setDisabledState) {
            ((((this.valueAccessor)).setDisabledState))(true);
        }
        this._added = true;
    };
    return FormControlName;
}(NgControl));
FormControlName.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] },
];
/**
 * @nocollapse
 */
FormControlName.ctorParameters = function () { return [
    { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Host"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["SkipSelf"] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [NG_VALUE_ACCESSOR,] },] },
]; };
FormControlName.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['formControlName',] },],
    'model': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['ngModel',] },],
    'update': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"], args: ['ngModelChange',] },],
    'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['disabled',] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return RequiredValidator; }),
    multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return CheckboxRequiredValidator; }),
    multi: true
};
/**
 * A Directive that adds the `required` validator to any controls marked with the
 * `required` attribute, via the {\@link NG_VALIDATORS} binding.
 *
 * ### Example
 *
 * ```
 * <input name="fullName" ngModel required>
 * ```
 *
 * \@stable
 */
var RequiredValidator = (function () {
    function RequiredValidator() {
    }
    Object.defineProperty(RequiredValidator.prototype, "required", {
        /**
         * @return {?}
         */
        get: function () { return this._required; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._required = value != null && value !== false && "" + value !== 'false';
            if (this._onChange)
                this._onChange();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} c
     * @return {?}
     */
    RequiredValidator.prototype.validate = function (c) {
        return this.required ? Validators.required(c) : null;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    return RequiredValidator;
}());
RequiredValidator.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
                providers: [REQUIRED_VALIDATOR],
                host: { '[attr.required]': 'required ? "" : null' }
            },] },
];
/**
 * @nocollapse
 */
RequiredValidator.ctorParameters = function () { return []; };
RequiredValidator.propDecorators = {
    'required': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
};
/**
 * A Directive that adds the `required` validator to checkbox controls marked with the
 * `required` attribute, via the {\@link NG_VALIDATORS} binding.
 *
 * ### Example
 *
 * ```
 * <input type="checkbox" name="active" ngModel required>
 * ```
 *
 * \@experimental
 */
var CheckboxRequiredValidator = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](CheckboxRequiredValidator, _super);
    function CheckboxRequiredValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} c
     * @return {?}
     */
    CheckboxRequiredValidator.prototype.validate = function (c) {
        return this.required ? Validators.requiredTrue(c) : null;
    };
    return CheckboxRequiredValidator;
}(RequiredValidator));
CheckboxRequiredValidator.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
                providers: [CHECKBOX_REQUIRED_VALIDATOR],
                host: { '[attr.required]': 'required ? "" : null' }
            },] },
];
/**
 * @nocollapse
 */
CheckboxRequiredValidator.ctorParameters = function () { return []; };
/**
 * Provider which adds {\@link EmailValidator} to {\@link NG_VALIDATORS}.
 */
var EMAIL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return EmailValidator; }),
    multi: true
};
/**
 * A Directive that adds the `email` validator to controls marked with the
 * `email` attribute, via the {\@link NG_VALIDATORS} binding.
 *
 * ### Example
 *
 * ```
 * <input type="email" name="email" ngModel email>
 * <input type="email" name="email" ngModel email="true">
 * <input type="email" name="email" ngModel [email]="true">
 * ```
 *
 * \@experimental
 */
var EmailValidator = (function () {
    function EmailValidator() {
    }
    Object.defineProperty(EmailValidator.prototype, "email", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._enabled = value === '' || value === true || value === 'true';
            if (this._onChange)
                this._onChange();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} c
     * @return {?}
     */
    EmailValidator.prototype.validate = function (c) {
        return this._enabled ? Validators.email(c) : null;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    EmailValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    return EmailValidator;
}());
EmailValidator.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                selector: '[email][formControlName],[email][formControl],[email][ngModel]',
                providers: [EMAIL_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
EmailValidator.ctorParameters = function () { return []; };
EmailValidator.propDecorators = {
    'email': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
};
/**
 * Provider which adds {\@link MinLengthValidator} to {\@link NG_VALIDATORS}.
 *
 * ## Example:
 *
 * {\@example common/forms/ts/validators/validators.ts region='min'}
 */
var MIN_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return MinLengthValidator; }),
    multi: true
};
/**
 * A directive which installs the {\@link MinLengthValidator} for any `formControlName`,
 * `formControl`, or control with `ngModel` that also has a `minlength` attribute.
 *
 * \@stable
 */
var MinLengthValidator = (function () {
    function MinLengthValidator() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    MinLengthValidator.prototype.ngOnChanges = function (changes) {
        if ('minlength' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    MinLengthValidator.prototype.validate = function (c) {
        return this.minlength == null ? null : this._validator(c);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    /**
     * @return {?}
     */
    MinLengthValidator.prototype._createValidator = function () {
        this._validator = Validators.minLength(parseInt(this.minlength, 10));
    };
    return MinLengthValidator;
}());
MinLengthValidator.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
                providers: [MIN_LENGTH_VALIDATOR],
                host: { '[attr.minlength]': 'minlength ? minlength : null' }
            },] },
];
/**
 * @nocollapse
 */
MinLengthValidator.ctorParameters = function () { return []; };
MinLengthValidator.propDecorators = {
    'minlength': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
};
/**
 * Provider which adds {\@link MaxLengthValidator} to {\@link NG_VALIDATORS}.
 *
 * ## Example:
 *
 * {\@example common/forms/ts/validators/validators.ts region='max'}
 */
var MAX_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return MaxLengthValidator; }),
    multi: true
};
/**
 * A directive which installs the {\@link MaxLengthValidator} for any `formControlName,
 * `formControl`,
 * or control with `ngModel` that also has a `maxlength` attribute.
 *
 * \@stable
 */
var MaxLengthValidator = (function () {
    function MaxLengthValidator() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    MaxLengthValidator.prototype.ngOnChanges = function (changes) {
        if ('maxlength' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    MaxLengthValidator.prototype.validate = function (c) {
        return this.maxlength != null ? this._validator(c) : null;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    /**
     * @return {?}
     */
    MaxLengthValidator.prototype._createValidator = function () {
        this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
    };
    return MaxLengthValidator;
}());
MaxLengthValidator.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
                providers: [MAX_LENGTH_VALIDATOR],
                host: { '[attr.maxlength]': 'maxlength ? maxlength : null' }
            },] },
];
/**
 * @nocollapse
 */
MaxLengthValidator.ctorParameters = function () { return []; };
MaxLengthValidator.propDecorators = {
    'maxlength': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
};
var PATTERN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return PatternValidator; }),
    multi: true
};
/**
 * A Directive that adds the `pattern` validator to any controls marked with the
 * `pattern` attribute, via the {\@link NG_VALIDATORS} binding. Uses attribute value
 * as the regex to validate Control value against.  Follows pattern attribute
 * semantics; i.e. regex must match entire Control value.
 *
 * ### Example
 *
 * ```
 * <input [name]="fullName" pattern="[a-zA-Z ]*" ngModel>
 * ```
 * \@stable
 */
var PatternValidator = (function () {
    function PatternValidator() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    PatternValidator.prototype.ngOnChanges = function (changes) {
        if ('pattern' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    PatternValidator.prototype.validate = function (c) { return this._validator(c); };
    /**
     * @param {?} fn
     * @return {?}
     */
    PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    /**
     * @return {?}
     */
    PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
    return PatternValidator;
}());
PatternValidator.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
                providers: [PATTERN_VALIDATOR],
                host: { '[attr.pattern]': 'pattern ? pattern : null' }
            },] },
];
/**
 * @nocollapse
 */
PatternValidator.ctorParameters = function () { return []; };
PatternValidator.propDecorators = {
    'pattern': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@whatItDoes Creates an {\@link AbstractControl} from a user-specified configuration.
 *
 * It is essentially syntactic sugar that shortens the `new FormGroup()`,
 * `new FormControl()`, and `new FormArray()` boilerplate that can build up in larger
 * forms.
 *
 * \@howToUse
 *
 * To use, inject `FormBuilder` into your component class. You can then call its methods
 * directly.
 *
 * {\@example forms/ts/formBuilder/form_builder_example.ts region='Component'}
 *
 *  * **npm package**: `\@angular/forms`
 *
 *  * **NgModule**: {\@link ReactiveFormsModule}
 *
 * \@stable
 */
var FormBuilder = (function () {
    function FormBuilder() {
    }
    /**
     * Construct a new {\@link FormGroup} with the given map of configuration.
     * Valid keys for the `extra` parameter map are `validator` and `asyncValidator`.
     *
     * See the {\@link FormGroup} constructor for more details.
     * @param {?} controlsConfig
     * @param {?=} extra
     * @return {?}
     */
    FormBuilder.prototype.group = function (controlsConfig, extra) {
        if (extra === void 0) { extra = null; }
        var /** @type {?} */ controls = this._reduceControls(controlsConfig);
        var /** @type {?} */ validator = extra != null ? extra['validator'] : null;
        var /** @type {?} */ asyncValidator = extra != null ? extra['asyncValidator'] : null;
        return new FormGroup(controls, validator, asyncValidator);
    };
    /**
     * Construct a new {\@link FormControl} with the given `formState`,`validator`, and
     * `asyncValidator`.
     *
     * `formState` can either be a standalone value for the form control or an object
     * that contains both a value and a disabled status.
     *
     * @param {?} formState
     * @param {?=} validator
     * @param {?=} asyncValidator
     * @return {?}
     */
    FormBuilder.prototype.control = function (formState, validator, asyncValidator) {
        return new FormControl(formState, validator, asyncValidator);
    };
    /**
     * Construct a {\@link FormArray} from the given `controlsConfig` array of
     * configuration, with the given optional `validator` and `asyncValidator`.
     * @param {?} controlsConfig
     * @param {?=} validator
     * @param {?=} asyncValidator
     * @return {?}
     */
    FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
        var _this = this;
        var /** @type {?} */ controls = controlsConfig.map(function (c) { return _this._createControl(c); });
        return new FormArray(controls, validator, asyncValidator);
    };
    /**
     * \@internal
     * @param {?} controlsConfig
     * @return {?}
     */
    FormBuilder.prototype._reduceControls = function (controlsConfig) {
        var _this = this;
        var /** @type {?} */ controls = {};
        Object.keys(controlsConfig).forEach(function (controlName) {
            controls[controlName] = _this._createControl(controlsConfig[controlName]);
        });
        return controls;
    };
    /**
     * \@internal
     * @param {?} controlConfig
     * @return {?}
     */
    FormBuilder.prototype._createControl = function (controlConfig) {
        if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
            controlConfig instanceof FormArray) {
            return controlConfig;
        }
        else if (Array.isArray(controlConfig)) {
            var /** @type {?} */ value = controlConfig[0];
            var /** @type {?} */ validator = controlConfig.length > 1 ? controlConfig[1] : null;
            var /** @type {?} */ asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
            return this.control(value, validator, asyncValidator);
        }
        else {
            return this.control(controlConfig);
        }
    };
    return FormBuilder;
}());
FormBuilder.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
FormBuilder.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the common package.
 */
/**
 * \@stable
 */
var VERSION = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["Version"]('4.2.6');
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@whatItDoes Adds `novalidate` attribute to all forms by default.
 *
 * `novalidate` is used to disable browser's native form validation.
 *
 * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
 *
 * ```
 * <form ngNativeValidate></form>
 * ```
 *
 * \@experimental
 */
var NgNoValidate = (function () {
    function NgNoValidate() {
    }
    return NgNoValidate;
}());
NgNoValidate.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
                host: { 'novalidate': '' },
            },] },
];
/**
 * @nocollapse
 */
NgNoValidate.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SHARED_FORM_DIRECTIVES = [
    NgNoValidate,
    NgSelectOption,
    NgSelectMultipleOption,
    DefaultValueAccessor,
    NumberValueAccessor,
    RangeValueAccessor,
    CheckboxControlValueAccessor,
    SelectControlValueAccessor,
    SelectMultipleControlValueAccessor,
    RadioControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinLengthValidator,
    MaxLengthValidator,
    PatternValidator,
    CheckboxRequiredValidator,
    EmailValidator,
];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
/**
 * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
 */
var InternalFormsSharedModule = (function () {
    function InternalFormsSharedModule() {
    }
    return InternalFormsSharedModule;
}());
InternalFormsSharedModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                declarations: SHARED_FORM_DIRECTIVES,
                exports: SHARED_FORM_DIRECTIVES,
            },] },
];
/**
 * @nocollapse
 */
InternalFormsSharedModule.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The ng module for forms.
 * \@stable
 */
var FormsModule = (function () {
    function FormsModule() {
    }
    return FormsModule;
}());
FormsModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                declarations: TEMPLATE_DRIVEN_DIRECTIVES,
                providers: [RadioControlRegistry],
                exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
            },] },
];
/**
 * @nocollapse
 */
FormsModule.ctorParameters = function () { return []; };
/**
 * The ng module for reactive forms.
 * \@stable
 */
var ReactiveFormsModule = (function () {
    function ReactiveFormsModule() {
    }
    return ReactiveFormsModule;
}());
ReactiveFormsModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                declarations: [REACTIVE_DRIVEN_DIRECTIVES],
                providers: [FormBuilder, RadioControlRegistry],
                exports: [InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
            },] },
];
/**
 * @nocollapse
 */
ReactiveFormsModule.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * This module is used for handling user input, by defining and building a {@link FormGroup} that
 * consists of {@link FormControl} objects, and mapping them onto the DOM. {@link FormControl}
 * objects can then be used to read information from the form DOM elements.
 *
 * Forms providers are not included in default providers; you must import these providers
 * explicitly.
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the forms package.
 */
// This file only reexports content of the `src` folder. Keep it that way.
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=forms.es5.js.map


/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(23);
var MenuComponent = (function () {
    function MenuComponent() {
    }
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        selector: 'app-menu',
        template: __webpack_require__(627)
    })
], MenuComponent);
exports.MenuComponent = MenuComponent;


/***/ }),

/***/ 627:
/***/ (function(module, exports) {

module.exports = "<nav>\r\n\t<div class=\"container\">\r\n\t\tMenu\r\n\t</div>\r\n</nav>\r\n<hr />";

/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(23);
var CustomComponent = (function () {
    function CustomComponent() {
        this.serverName = '';
        this.isOutputName = false;
        this.idServer = 123;
    }
    CustomComponent.prototype.onChangeServerName = function (e) {
        this.serverName = e.target.value;
    };
    CustomComponent.prototype.outputServerName = function (e) {
        this.isOutputName = true;
    };
    CustomComponent.prototype.getServerName = function () {
        if (this.isOutputName) {
            this.isOutputName = false;
            return 'Server name is ' + this.serverName;
        }
    };
    CustomComponent.prototype.ngOnInit = function () {
        // Your script here
    };
    return CustomComponent;
}());
CustomComponent = __decorate([
    core_1.Component({
        selector: 'app-custom',
        template: __webpack_require__(629)
    })
], CustomComponent);
exports.CustomComponent = CustomComponent;


/***/ }),

/***/ 629:
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\r\n\t<h3>Custom Component</h3>\r\n\t<input type=\"text\" name=\"serverName\" (input)=\"onChangeServerName($event)\">\r\n\t<button class=\"btn btn-success\" (click)=\"outputServerName($event)\">Set Server Name</button>\r\n\t<p [attr.data-id-server]=\"idServer\">{{ getServerName() }}</p>\r\n</section>";

/***/ })

},[622]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Rpc3QvanMvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9kaXN0L2pzL2FwcC9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2Rpc3QvanMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9kaXN0L2pzL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vfi9AYW5ndWxhci9mb3Jtcy9AYW5ndWxhci9mb3Jtcy5lczUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9qcy9tZW51L21lbnUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2Rpc3QvanMvbWVudS9tZW51LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2Rpc3QvanMvY3VzdG9tL2N1c3RvbS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9qcy9jdXN0b20vY3VzdG9tLmNvbXBvbmVudC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8vIEltcG9ydHNcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgcGxhdGZvcm1fYnJvd3Nlcl8xID0gcmVxdWlyZShcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIik7XHJcbnZhciBmb3Jtc18xID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xyXG4vLyBEZWNsYXJhdGlvbnNcclxudmFyIGFwcF9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL2FwcC9hcHAuY29tcG9uZW50XCIpO1xyXG52YXIgbWVudV9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL21lbnUvbWVudS5jb21wb25lbnRcIik7XHJcbnZhciBjdXN0b21fY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9jdXN0b20vY3VzdG9tLmNvbXBvbmVudFwiKTtcclxudmFyIEFwcE1vZHVsZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBcHBNb2R1bGUoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQXBwTW9kdWxlO1xyXG59KCkpO1xyXG5BcHBNb2R1bGUgPSBfX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5OZ01vZHVsZSh7XHJcbiAgICAgICAgaW1wb3J0czogW3BsYXRmb3JtX2Jyb3dzZXJfMS5Ccm93c2VyTW9kdWxlLCBmb3Jtc18xLkZvcm1zTW9kdWxlXSxcclxuICAgICAgICBkZWNsYXJhdGlvbnM6IFthcHBfY29tcG9uZW50XzEuQXBwQ29tcG9uZW50LCBtZW51X2NvbXBvbmVudF8xLk1lbnVDb21wb25lbnQsIGN1c3RvbV9jb21wb25lbnRfMS5DdXN0b21Db21wb25lbnRdLFxyXG4gICAgICAgIGJvb3RzdHJhcDogW2FwcF9jb21wb25lbnRfMS5BcHBDb21wb25lbnRdXHJcbiAgICB9KVxyXG5dLCBBcHBNb2R1bGUpO1xyXG5leHBvcnRzLkFwcE1vZHVsZSA9IEFwcE1vZHVsZTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9kaXN0L2pzL2FwcC5tb2R1bGUudHNcbi8vIG1vZHVsZSBpZCA9IDE5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBBcHBDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXBwQ29tcG9uZW50KCkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSAnYW5ndWxhcic7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gJyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQXBwQ29tcG9uZW50O1xyXG59KCkpO1xyXG5BcHBDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAnYXBwLW1haW4nLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuaHRtbCcpXHJcbiAgICB9KVxyXG5dLCBBcHBDb21wb25lbnQpO1xyXG5leHBvcnRzLkFwcENvbXBvbmVudCA9IEFwcENvbXBvbmVudDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9kaXN0L2pzL2FwcC9hcHAuY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSAyMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxhcHAtbWVudT48L2FwcC1tZW51PlxcclxcbjxzZWN0aW9uIGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcblxcdDxoMT5IZWxsbyBkZWFyLCB7e3RpdGxlfX08L2gxPlxcclxcblxcdDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJuYW1lXFxcIiBbKG5nTW9kZWwpXT1cXFwibmFtZVxcXCIgLz5cXHJcXG5cXHQ8cD57e25hbWV9fTwvcD5cXHJcXG48L3NlY3Rpb24+XFxyXFxuPGhyIC8+XFxyXFxuPGFwcC1jdXN0b20+PC9hcHAtY3VzdG9tPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZGlzdC9qcy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHBsYXRmb3JtX2Jyb3dzZXJfZHluYW1pY18xID0gcmVxdWlyZShcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pY1wiKTtcclxudmFyIGFwcF9tb2R1bGVfMSA9IHJlcXVpcmUoXCIuL2FwcC5tb2R1bGVcIik7XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxuY29yZV8xLmVuYWJsZVByb2RNb2RlKCk7XHJcbnBsYXRmb3JtX2Jyb3dzZXJfZHluYW1pY18xLnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoYXBwX21vZHVsZV8xLkFwcE1vZHVsZSk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZGlzdC9qcy9tYWluLnRzXG4vLyBtb2R1bGUgaWQgPSA2MjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbi8qKlxuICogQGxpY2Vuc2UgQW5ndWxhciB2NC4yLjZcbiAqIChjKSAyMDEwLTIwMTcgR29vZ2xlLCBJbmMuIGh0dHBzOi8vYW5ndWxhci5pby9cbiAqIExpY2Vuc2U6IE1JVFxuICovXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdCwgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgSW5qZWN0b3IsIElucHV0LCBOZ01vZHVsZSwgT3B0aW9uYWwsIE91dHB1dCwgUmVuZGVyZXIsIFNlbGYsIFNraXBTZWxmLCBWZXJzaW9uLCBmb3J3YXJkUmVmLCDJtWlzT2JzZXJ2YWJsZSwgybVpc1Byb21pc2UsIMm1bG9vc2VJZGVudGljYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZvcmtKb2luIH0gZnJvbSAncnhqcy9vYnNlcnZhYmxlL2ZvcmtKb2luJztcbmltcG9ydCB7IGZyb21Qcm9taXNlIH0gZnJvbSAncnhqcy9vYnNlcnZhYmxlL2Zyb21Qcm9taXNlJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3IvbWFwJztcbmltcG9ydCB7IMm1Z2V0RE9NIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGNvbnRyb2wgZGlyZWN0aXZlcy5cbiAqXG4gKiBPbmx5IHVzZWQgaW50ZXJuYWxseSBpbiB0aGUgZm9ybXMgbW9kdWxlLlxuICpcbiAqIFxcQHN0YWJsZVxuICogQGFic3RyYWN0XG4gKi9cbnZhciBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZSgpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGFic3RyYWN0XG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLmNvbnRyb2wgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwidmFsdWVcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLnZhbHVlIDogbnVsbDsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwidmFsaWRcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLnZhbGlkIDogbnVsbDsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwiaW52YWxpZFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wuaW52YWxpZCA6IG51bGw7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcInBlbmRpbmdcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLnBlbmRpbmcgOiBudWxsOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJlcnJvcnNcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLmVycm9ycyA6IG51bGw7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcInByaXN0aW5lXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5wcmlzdGluZSA6IG51bGw7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcImRpcnR5XCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5kaXJ0eSA6IG51bGw7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcInRvdWNoZWRcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLnRvdWNoZWQgOiBudWxsOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJ1bnRvdWNoZWRcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLnVudG91Y2hlZCA6IG51bGw7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcImRpc2FibGVkXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5kaXNhYmxlZCA6IG51bGw7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcImVuYWJsZWRcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLmVuYWJsZWQgOiBudWxsOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJzdGF0dXNDaGFuZ2VzXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wuc3RhdHVzQ2hhbmdlcyA6IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcInZhbHVlQ2hhbmdlc1wiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLnZhbHVlQ2hhbmdlcyA6IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcInBhdGhcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/PX0gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSB2b2lkIDApIHsgdmFsdWUgPSB1bmRlZmluZWQ7IH1cbiAgICAgICAgaWYgKHRoaXMuY29udHJvbClcbiAgICAgICAgICAgIHRoaXMuY29udHJvbC5yZXNldCh2YWx1ZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGVycm9yQ29kZVxuICAgICAqIEBwYXJhbSB7Pz19IHBhdGhcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUuaGFzRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3JDb2RlLCBwYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wuaGFzRXJyb3IoZXJyb3JDb2RlLCBwYXRoKSA6IGZhbHNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBlcnJvckNvZGVcbiAgICAgKiBAcGFyYW0gez89fSBwYXRoXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLmdldEVycm9yID0gZnVuY3Rpb24gKGVycm9yQ29kZSwgcGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLmdldEVycm9yKGVycm9yQ29kZSwgcGF0aCkgOiBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZTtcbn0oKSk7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRoYXQgY29udGFpbnMgbXVsdGlwbGUge1xcQGxpbmsgTmdDb250cm9sfXMuXG4gKlxuICogT25seSB1c2VkIGJ5IHRoZSBmb3JtcyBtb2R1bGUuXG4gKlxuICogXFxAc3RhYmxlXG4gKiBAYWJzdHJhY3RcbiAqL1xudmFyIENvbnRyb2xDb250YWluZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKENvbnRyb2xDb250YWluZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29udHJvbENvbnRhaW5lcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29udHJvbENvbnRhaW5lci5wcm90b3R5cGUsIFwiZm9ybURpcmVjdGl2ZVwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIGZvcm0gdG8gd2hpY2ggdGhpcyBjb250YWluZXIgYmVsb25ncy5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnRyb2xDb250YWluZXIucHJvdG90eXBlLCBcInBhdGhcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSBwYXRoIHRvIHRoaXMgY29udGFpbmVyLlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gQ29udHJvbENvbnRhaW5lcjtcbn0oQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlKSk7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKipcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIGlzRW1wdHlJbnB1dFZhbHVlKHZhbHVlKSB7XG4gICAgLy8gd2UgZG9uJ3QgY2hlY2sgZm9yIHN0cmluZyBoZXJlIHNvIGl0IGFsc28gd29ya3Mgd2l0aCBhcnJheXNcbiAgICByZXR1cm4gdmFsdWUgPT0gbnVsbCB8fCB2YWx1ZS5sZW5ndGggPT09IDA7XG59XG4vKipcbiAqIFByb3ZpZGVycyBmb3IgdmFsaWRhdG9ycyB0byBiZSB1c2VkIGZvciB7XFxAbGluayBGb3JtQ29udHJvbH1zIGluIGEgZm9ybS5cbiAqXG4gKiBQcm92aWRlIHRoaXMgdXNpbmcgYG11bHRpOiB0cnVlYCB0byBhZGQgdmFsaWRhdG9ycy5cbiAqXG4gKiBcXEBzdGFibGVcbiAqL1xudmFyIE5HX1ZBTElEQVRPUlMgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ05nVmFsaWRhdG9ycycpO1xuLyoqXG4gKiBQcm92aWRlcnMgZm9yIGFzeW5jaHJvbm91cyB2YWxpZGF0b3JzIHRvIGJlIHVzZWQgZm9yIHtcXEBsaW5rIEZvcm1Db250cm9sfXNcbiAqIGluIGEgZm9ybS5cbiAqXG4gKiBQcm92aWRlIHRoaXMgdXNpbmcgYG11bHRpOiB0cnVlYCB0byBhZGQgdmFsaWRhdG9ycy5cbiAqXG4gKiBTZWUge1xcQGxpbmsgTkdfVkFMSURBVE9SU30gZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBcXEBzdGFibGVcbiAqL1xudmFyIE5HX0FTWU5DX1ZBTElEQVRPUlMgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ05nQXN5bmNWYWxpZGF0b3JzJyk7XG52YXIgRU1BSUxfUkVHRVhQID0gL14oPz0uezEsMjU0fSQpKD89LnsxLDY0fUApWy0hIyQlJicqKy8wLTk9P0EtWl5fYGEtent8fX5dKyhcXC5bLSEjJCUmJyorLzAtOT0/QS1aXl9gYS16e3x9fl0rKSpAW0EtWmEtejAtOV0oW0EtWmEtejAtOS1dezAsNjF9W0EtWmEtejAtOV0pPyhcXC5bQS1aYS16MC05XShbQS1aYS16MC05LV17MCw2MX1bQS1aYS16MC05XSk/KSokLztcbi8qKlxuICogUHJvdmlkZXMgYSBzZXQgb2YgdmFsaWRhdG9ycyB1c2VkIGJ5IGZvcm0gY29udHJvbHMuXG4gKlxuICogQSB2YWxpZGF0b3IgaXMgYSBmdW5jdGlvbiB0aGF0IHByb2Nlc3NlcyBhIHtcXEBsaW5rIEZvcm1Db250cm9sfSBvciBjb2xsZWN0aW9uIG9mXG4gKiBjb250cm9scyBhbmQgcmV0dXJucyBhIG1hcCBvZiBlcnJvcnMuIEEgbnVsbCBtYXAgbWVhbnMgdGhhdCB2YWxpZGF0aW9uIGhhcyBwYXNzZWQuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiB2YXIgbG9naW5Db250cm9sID0gbmV3IEZvcm1Db250cm9sKFwiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWQpXG4gKiBgYGBcbiAqXG4gKiBcXEBzdGFibGVcbiAqL1xudmFyIFZhbGlkYXRvcnMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFZhbGlkYXRvcnMoKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRvciB0aGF0IHJlcXVpcmVzIGNvbnRyb2xzIHRvIGhhdmUgYSB2YWx1ZSBncmVhdGVyIHRoYW4gYSBudW1iZXIuXG4gICAgICogQHBhcmFtIHs/fSBtaW5cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFZhbGlkYXRvcnMubWluID0gZnVuY3Rpb24gKG1pbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGNvbnRyb2wpIHtcbiAgICAgICAgICAgIGlmIChpc0VtcHR5SW5wdXRWYWx1ZShjb250cm9sLnZhbHVlKSB8fCBpc0VtcHR5SW5wdXRWYWx1ZShtaW4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vIGRvbid0IHZhbGlkYXRlIGVtcHR5IHZhbHVlcyB0byBhbGxvdyBvcHRpb25hbCBjb250cm9sc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gdmFsdWUgPSBwYXJzZUZsb2F0KGNvbnRyb2wudmFsdWUpO1xuICAgICAgICAgICAgLy8gQ29udHJvbHMgd2l0aCBOYU4gdmFsdWVzIGFmdGVyIHBhcnNpbmcgc2hvdWxkIGJlIHRyZWF0ZWQgYXMgbm90IGhhdmluZyBhXG4gICAgICAgICAgICAvLyBtaW5pbXVtLCBwZXIgdGhlIEhUTUwgZm9ybXMgc3BlYzogaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1L2Zvcm1zLmh0bWwjYXR0ci1pbnB1dC1taW5cbiAgICAgICAgICAgIHJldHVybiAhaXNOYU4odmFsdWUpICYmIHZhbHVlIDwgbWluID8geyAnbWluJzogeyAnbWluJzogbWluLCAnYWN0dWFsJzogY29udHJvbC52YWx1ZSB9IH0gOiBudWxsO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVmFsaWRhdG9yIHRoYXQgcmVxdWlyZXMgY29udHJvbHMgdG8gaGF2ZSBhIHZhbHVlIGxlc3MgdGhhbiBhIG51bWJlci5cbiAgICAgKiBAcGFyYW0gez99IG1heFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgVmFsaWRhdG9ycy5tYXggPSBmdW5jdGlvbiAobWF4KSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoY29udHJvbCkge1xuICAgICAgICAgICAgaWYgKGlzRW1wdHlJbnB1dFZhbHVlKGNvbnRyb2wudmFsdWUpIHx8IGlzRW1wdHlJbnB1dFZhbHVlKG1heCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gZG9uJ3QgdmFsaWRhdGUgZW1wdHkgdmFsdWVzIHRvIGFsbG93IG9wdGlvbmFsIGNvbnRyb2xzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB2YWx1ZSA9IHBhcnNlRmxvYXQoY29udHJvbC52YWx1ZSk7XG4gICAgICAgICAgICAvLyBDb250cm9scyB3aXRoIE5hTiB2YWx1ZXMgYWZ0ZXIgcGFyc2luZyBzaG91bGQgYmUgdHJlYXRlZCBhcyBub3QgaGF2aW5nIGFcbiAgICAgICAgICAgIC8vIG1heGltdW0sIHBlciB0aGUgSFRNTCBmb3JtcyBzcGVjOiBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUvZm9ybXMuaHRtbCNhdHRyLWlucHV0LW1heFxuICAgICAgICAgICAgcmV0dXJuICFpc05hTih2YWx1ZSkgJiYgdmFsdWUgPiBtYXggPyB7ICdtYXgnOiB7ICdtYXgnOiBtYXgsICdhY3R1YWwnOiBjb250cm9sLnZhbHVlIH0gfSA6IG51bGw7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyBjb250cm9scyB0byBoYXZlIGEgbm9uLWVtcHR5IHZhbHVlLlxuICAgICAqIEBwYXJhbSB7P30gY29udHJvbFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgVmFsaWRhdG9ycy5yZXF1aXJlZCA9IGZ1bmN0aW9uIChjb250cm9sKSB7XG4gICAgICAgIHJldHVybiBpc0VtcHR5SW5wdXRWYWx1ZShjb250cm9sLnZhbHVlKSA/IHsgJ3JlcXVpcmVkJzogdHJ1ZSB9IDogbnVsbDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFZhbGlkYXRvciB0aGF0IHJlcXVpcmVzIGNvbnRyb2wgdmFsdWUgdG8gYmUgdHJ1ZS5cbiAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFZhbGlkYXRvcnMucmVxdWlyZWRUcnVlID0gZnVuY3Rpb24gKGNvbnRyb2wpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRyb2wudmFsdWUgPT09IHRydWUgPyBudWxsIDogeyAncmVxdWlyZWQnOiB0cnVlIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBWYWxpZGF0b3IgdGhhdCBwZXJmb3JtcyBlbWFpbCB2YWxpZGF0aW9uLlxuICAgICAqIEBwYXJhbSB7P30gY29udHJvbFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgVmFsaWRhdG9ycy5lbWFpbCA9IGZ1bmN0aW9uIChjb250cm9sKSB7XG4gICAgICAgIHJldHVybiBFTUFJTF9SRUdFWFAudGVzdChjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7ICdlbWFpbCc6IHRydWUgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFZhbGlkYXRvciB0aGF0IHJlcXVpcmVzIGNvbnRyb2xzIHRvIGhhdmUgYSB2YWx1ZSBvZiBhIG1pbmltdW0gbGVuZ3RoLlxuICAgICAqIEBwYXJhbSB7P30gbWluTGVuZ3RoXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBWYWxpZGF0b3JzLm1pbkxlbmd0aCA9IGZ1bmN0aW9uIChtaW5MZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChjb250cm9sKSB7XG4gICAgICAgICAgICBpZiAoaXNFbXB0eUlucHV0VmFsdWUoY29udHJvbC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gZG9uJ3QgdmFsaWRhdGUgZW1wdHkgdmFsdWVzIHRvIGFsbG93IG9wdGlvbmFsIGNvbnRyb2xzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBsZW5ndGggPSBjb250cm9sLnZhbHVlID8gY29udHJvbC52YWx1ZS5sZW5ndGggOiAwO1xuICAgICAgICAgICAgcmV0dXJuIGxlbmd0aCA8IG1pbkxlbmd0aCA/XG4gICAgICAgICAgICAgICAgeyAnbWlubGVuZ3RoJzogeyAncmVxdWlyZWRMZW5ndGgnOiBtaW5MZW5ndGgsICdhY3R1YWxMZW5ndGgnOiBsZW5ndGggfSB9IDpcbiAgICAgICAgICAgICAgICBudWxsO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVmFsaWRhdG9yIHRoYXQgcmVxdWlyZXMgY29udHJvbHMgdG8gaGF2ZSBhIHZhbHVlIG9mIGEgbWF4aW11bSBsZW5ndGguXG4gICAgICogQHBhcmFtIHs/fSBtYXhMZW5ndGhcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFZhbGlkYXRvcnMubWF4TGVuZ3RoID0gZnVuY3Rpb24gKG1heExlbmd0aCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGNvbnRyb2wpIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGxlbmd0aCA9IGNvbnRyb2wudmFsdWUgPyBjb250cm9sLnZhbHVlLmxlbmd0aCA6IDA7XG4gICAgICAgICAgICByZXR1cm4gbGVuZ3RoID4gbWF4TGVuZ3RoID9cbiAgICAgICAgICAgICAgICB7ICdtYXhsZW5ndGgnOiB7ICdyZXF1aXJlZExlbmd0aCc6IG1heExlbmd0aCwgJ2FjdHVhbExlbmd0aCc6IGxlbmd0aCB9IH0gOlxuICAgICAgICAgICAgICAgIG51bGw7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyBhIGNvbnRyb2wgdG8gbWF0Y2ggYSByZWdleCB0byBpdHMgdmFsdWUuXG4gICAgICogQHBhcmFtIHs/fSBwYXR0ZXJuXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBWYWxpZGF0b3JzLnBhdHRlcm4gPSBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICByZXR1cm4gVmFsaWRhdG9ycy5udWxsVmFsaWRhdG9yO1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyByZWdleDtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gcmVnZXhTdHI7XG4gICAgICAgIGlmICh0eXBlb2YgcGF0dGVybiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJlZ2V4U3RyID0gXCJeXCIgKyBwYXR0ZXJuICsgXCIkXCI7XG4gICAgICAgICAgICByZWdleCA9IG5ldyBSZWdFeHAocmVnZXhTdHIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVnZXhTdHIgPSBwYXR0ZXJuLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICByZWdleCA9IHBhdHRlcm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChjb250cm9sKSB7XG4gICAgICAgICAgICBpZiAoaXNFbXB0eUlucHV0VmFsdWUoY29udHJvbC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gZG9uJ3QgdmFsaWRhdGUgZW1wdHkgdmFsdWVzIHRvIGFsbG93IG9wdGlvbmFsIGNvbnRyb2xzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB2YWx1ZSA9IGNvbnRyb2wudmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gcmVnZXgudGVzdCh2YWx1ZSkgPyBudWxsIDpcbiAgICAgICAgICAgICAgICB7ICdwYXR0ZXJuJzogeyAncmVxdWlyZWRQYXR0ZXJuJzogcmVnZXhTdHIsICdhY3R1YWxWYWx1ZSc6IHZhbHVlIH0gfTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE5vLW9wIHZhbGlkYXRvci5cbiAgICAgKiBAcGFyYW0gez99IGNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFZhbGlkYXRvcnMubnVsbFZhbGlkYXRvciA9IGZ1bmN0aW9uIChjKSB7IHJldHVybiBudWxsOyB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgVmFsaWRhdG9ycy5jb21wb3NlID0gZnVuY3Rpb24gKHZhbGlkYXRvcnMpIHtcbiAgICAgICAgaWYgKCF2YWxpZGF0b3JzKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHByZXNlbnRWYWxpZGF0b3JzID0gKHZhbGlkYXRvcnMuZmlsdGVyKGlzUHJlc2VudCkpO1xuICAgICAgICBpZiAocHJlc2VudFZhbGlkYXRvcnMubGVuZ3RoID09IDApXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChjb250cm9sKSB7XG4gICAgICAgICAgICByZXR1cm4gX21lcmdlRXJyb3JzKF9leGVjdXRlVmFsaWRhdG9ycyhjb250cm9sLCBwcmVzZW50VmFsaWRhdG9ycykpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSB2YWxpZGF0b3JzXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBWYWxpZGF0b3JzLmNvbXBvc2VBc3luYyA9IGZ1bmN0aW9uICh2YWxpZGF0b3JzKSB7XG4gICAgICAgIGlmICghdmFsaWRhdG9ycylcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBwcmVzZW50VmFsaWRhdG9ycyA9ICh2YWxpZGF0b3JzLmZpbHRlcihpc1ByZXNlbnQpKTtcbiAgICAgICAgaWYgKHByZXNlbnRWYWxpZGF0b3JzLmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoY29udHJvbCkge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gb2JzZXJ2YWJsZXMgPSBfZXhlY3V0ZUFzeW5jVmFsaWRhdG9ycyhjb250cm9sLCBwcmVzZW50VmFsaWRhdG9ycykubWFwKHRvT2JzZXJ2YWJsZSk7XG4gICAgICAgICAgICByZXR1cm4gbWFwLmNhbGwoZm9ya0pvaW4ob2JzZXJ2YWJsZXMpLCBfbWVyZ2VFcnJvcnMpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIFZhbGlkYXRvcnM7XG59KCkpO1xuLyoqXG4gKiBAcGFyYW0gez99IG9cbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIGlzUHJlc2VudChvKSB7XG4gICAgcmV0dXJuIG8gIT0gbnVsbDtcbn1cbi8qKlxuICogQHBhcmFtIHs/fSByXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiB0b09ic2VydmFibGUocikge1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIG9icyA9IMm1aXNQcm9taXNlKHIpID8gZnJvbVByb21pc2UocikgOiByO1xuICAgIGlmICghKMm1aXNPYnNlcnZhYmxlKG9icykpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIHZhbGlkYXRvciB0byByZXR1cm4gUHJvbWlzZSBvciBPYnNlcnZhYmxlLlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG9icztcbn1cbi8qKlxuICogQHBhcmFtIHs/fSBjb250cm9sXG4gKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIF9leGVjdXRlVmFsaWRhdG9ycyhjb250cm9sLCB2YWxpZGF0b3JzKSB7XG4gICAgcmV0dXJuIHZhbGlkYXRvcnMubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiB2KGNvbnRyb2wpOyB9KTtcbn1cbi8qKlxuICogQHBhcmFtIHs/fSBjb250cm9sXG4gKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIF9leGVjdXRlQXN5bmNWYWxpZGF0b3JzKGNvbnRyb2wsIHZhbGlkYXRvcnMpIHtcbiAgICByZXR1cm4gdmFsaWRhdG9ycy5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHYoY29udHJvbCk7IH0pO1xufVxuLyoqXG4gKiBAcGFyYW0gez99IGFycmF5T2ZFcnJvcnNcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIF9tZXJnZUVycm9ycyhhcnJheU9mRXJyb3JzKSB7XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gcmVzID0gYXJyYXlPZkVycm9ycy5yZWR1Y2UoZnVuY3Rpb24gKHJlcywgZXJyb3JzKSB7XG4gICAgICAgIHJldHVybiBlcnJvcnMgIT0gbnVsbCA/IE9iamVjdC5hc3NpZ24oe30sIC8qKiBAdHlwZSB7P30gKi8gKChyZXMpKSwgZXJyb3JzKSA6ICgocmVzKSk7XG4gICAgfSwge30pO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhyZXMpLmxlbmd0aCA9PT0gMCA/IG51bGwgOiByZXM7XG59XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKipcbiAqIFVzZWQgdG8gcHJvdmlkZSBhIHtcXEBsaW5rIENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmb3IgZm9ybSBjb250cm9scy5cbiAqXG4gKiBTZWUge1xcQGxpbmsgRGVmYXVsdFZhbHVlQWNjZXNzb3J9IGZvciBob3cgdG8gaW1wbGVtZW50IG9uZS5cbiAqIFxcQHN0YWJsZVxuICovXG52YXIgTkdfVkFMVUVfQUNDRVNTT1IgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ05nVmFsdWVBY2Nlc3NvcicpO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xudmFyIENIRUNLQk9YX1ZBTFVFX0FDQ0VTU09SID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3I7IH0pLFxuICAgIG11bHRpOiB0cnVlLFxufTtcbi8qKlxuICogVGhlIGFjY2Vzc29yIGZvciB3cml0aW5nIGEgdmFsdWUgYW5kIGxpc3RlbmluZyB0byBjaGFuZ2VzIG9uIGEgY2hlY2tib3ggaW5wdXQgZWxlbWVudC5cbiAqXG4gKiAgIyMjIEV4YW1wbGVcbiAqICBgYGBcbiAqICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJlbWVtYmVyTG9naW5cIiBuZ01vZGVsPlxuICogIGBgYFxuICpcbiAqICBcXEBzdGFibGVcbiAqL1xudmFyIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gX3JlbmRlcmVyXG4gICAgICogQHBhcmFtIHs/fSBfZWxlbWVudFJlZlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IoX3JlbmRlcmVyLCBfZWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IF9yZW5kZXJlcjtcbiAgICAgICAgdGhpcy5fZWxlbWVudFJlZiA9IF9lbGVtZW50UmVmO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKF8pIHsgfTtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLndyaXRlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NoZWNrZWQnLCB2YWx1ZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5yZWdpc3Rlck9uQ2hhbmdlID0gZnVuY3Rpb24gKGZuKSB7IHRoaXMub25DaGFuZ2UgPSBmbjsgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5yZWdpc3Rlck9uVG91Y2hlZCA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gaXNEaXNhYmxlZFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuc2V0RGlzYWJsZWRTdGF0ZSA9IGZ1bmN0aW9uIChpc0Rpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xuICAgIH07XG4gICAgcmV0dXJuIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3I7XG59KCkpO1xuQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3Nvci5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXRbdHlwZT1jaGVja2JveF1bZm9ybUNvbnRyb2xOYW1lXSxpbnB1dFt0eXBlPWNoZWNrYm94XVtmb3JtQ29udHJvbF0saW5wdXRbdHlwZT1jaGVja2JveF1bbmdNb2RlbF0nLFxuICAgICAgICAgICAgICAgIGhvc3Q6IHsgJyhjaGFuZ2UpJzogJ29uQ2hhbmdlKCRldmVudC50YXJnZXQuY2hlY2tlZCknLCAnKGJsdXIpJzogJ29uVG91Y2hlZCgpJyB9LFxuICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW0NIRUNLQk9YX1ZBTFVFX0FDQ0VTU09SXVxuICAgICAgICAgICAgfSxdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5DaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgIHsgdHlwZTogUmVuZGVyZXIsIH0sXG4gICAgeyB0eXBlOiBFbGVtZW50UmVmLCB9LFxuXTsgfTtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbnZhciBERUZBVUxUX1ZBTFVFX0FDQ0VTU09SID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIERlZmF1bHRWYWx1ZUFjY2Vzc29yOyB9KSxcbiAgICBtdWx0aTogdHJ1ZVxufTtcbi8qKlxuICogV2UgbXVzdCBjaGVjayB3aGV0aGVyIHRoZSBhZ2VudCBpcyBBbmRyb2lkIGJlY2F1c2UgY29tcG9zaXRpb24gZXZlbnRzXG4gKiBiZWhhdmUgZGlmZmVyZW50bHkgYmV0d2VlbiBpT1MgYW5kIEFuZHJvaWQuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBfaXNBbmRyb2lkKCkge1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIHVzZXJBZ2VudCA9IMm1Z2V0RE9NKCkgPyDJtWdldERPTSgpLmdldFVzZXJBZ2VudCgpIDogJyc7XG4gICAgcmV0dXJuIC9hbmRyb2lkIChcXGQrKS8udGVzdCh1c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG59XG4vKipcbiAqIFR1cm4gdGhpcyBtb2RlIG9uIGlmIHlvdSB3YW50IGZvcm0gZGlyZWN0aXZlcyB0byBidWZmZXIgSU1FIGlucHV0IHVudGlsIGNvbXBvc2l0aW9uZW5kXG4gKiBcXEBleHBlcmltZW50YWxcbiAqL1xudmFyIENPTVBPU0lUSU9OX0JVRkZFUl9NT0RFID0gbmV3IEluamVjdGlvblRva2VuKCdDb21wb3NpdGlvbkV2ZW50TW9kZScpO1xuLyoqXG4gKiBUaGUgZGVmYXVsdCBhY2Nlc3NvciBmb3Igd3JpdGluZyBhIHZhbHVlIGFuZCBsaXN0ZW5pbmcgdG8gY2hhbmdlcyB0aGF0IGlzIHVzZWQgYnkgdGhlXG4gKiB7XFxAbGluayBOZ01vZGVsfSwge1xcQGxpbmsgRm9ybUNvbnRyb2xEaXJlY3RpdmV9LCBhbmQge1xcQGxpbmsgRm9ybUNvbnRyb2xOYW1lfSBkaXJlY3RpdmVzLlxuICpcbiAqICAjIyMgRXhhbXBsZVxuICogIGBgYFxuICogIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzZWFyY2hRdWVyeVwiIG5nTW9kZWw+XG4gKiAgYGBgXG4gKlxuICogIFxcQHN0YWJsZVxuICovXG52YXIgRGVmYXVsdFZhbHVlQWNjZXNzb3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gX3JlbmRlcmVyXG4gICAgICogQHBhcmFtIHs/fSBfZWxlbWVudFJlZlxuICAgICAqIEBwYXJhbSB7P30gX2NvbXBvc2l0aW9uTW9kZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIERlZmF1bHRWYWx1ZUFjY2Vzc29yKF9yZW5kZXJlciwgX2VsZW1lbnRSZWYsIF9jb21wb3NpdGlvbk1vZGUpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSBfcmVuZGVyZXI7XG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYgPSBfZWxlbWVudFJlZjtcbiAgICAgICAgdGhpcy5fY29tcG9zaXRpb25Nb2RlID0gX2NvbXBvc2l0aW9uTW9kZTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uIChfKSB7IH07XG4gICAgICAgIHRoaXMub25Ub3VjaGVkID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogV2hldGhlciB0aGUgdXNlciBpcyBjcmVhdGluZyBhIGNvbXBvc2l0aW9uIHN0cmluZyAoSU1FIGV2ZW50cykuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9jb21wb3NpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX2NvbXBvc2l0aW9uTW9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9jb21wb3NpdGlvbk1vZGUgPSAhX2lzQW5kcm9pZCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIERlZmF1bHRWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS53cml0ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG5vcm1hbGl6ZWRWYWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCBub3JtYWxpemVkVmFsdWUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBmblxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRGVmYXVsdFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnJlZ2lzdGVyT25DaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5vbkNoYW5nZSA9IGZuOyB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIERlZmF1bHRWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5yZWdpc3Rlck9uVG91Y2hlZCA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gaXNEaXNhYmxlZFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRGVmYXVsdFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnNldERpc2FibGVkU3RhdGUgPSBmdW5jdGlvbiAoaXNEaXNhYmxlZCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIERlZmF1bHRWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5faGFuZGxlSW5wdXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jb21wb3NpdGlvbk1vZGUgfHwgKHRoaXMuX2NvbXBvc2l0aW9uTW9kZSAmJiAhdGhpcy5fY29tcG9zaW5nKSkge1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRGVmYXVsdFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9jb21wb3NpdGlvblN0YXJ0ID0gZnVuY3Rpb24gKCkgeyB0aGlzLl9jb21wb3NpbmcgPSB0cnVlOyB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIERlZmF1bHRWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fY29tcG9zaXRpb25FbmQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fY29tcG9zaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2NvbXBvc2l0aW9uTW9kZSAmJiB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9O1xuICAgIHJldHVybiBEZWZhdWx0VmFsdWVBY2Nlc3Nvcjtcbn0oKSk7XG5EZWZhdWx0VmFsdWVBY2Nlc3Nvci5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXQ6bm90KFt0eXBlPWNoZWNrYm94XSlbZm9ybUNvbnRyb2xOYW1lXSx0ZXh0YXJlYVtmb3JtQ29udHJvbE5hbWVdLGlucHV0Om5vdChbdHlwZT1jaGVja2JveF0pW2Zvcm1Db250cm9sXSx0ZXh0YXJlYVtmb3JtQ29udHJvbF0saW5wdXQ6bm90KFt0eXBlPWNoZWNrYm94XSlbbmdNb2RlbF0sdGV4dGFyZWFbbmdNb2RlbF0sW25nRGVmYXVsdENvbnRyb2xdJyxcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiB2c2F2a2luIHJlcGxhY2UgdGhlIGFib3ZlIHNlbGVjdG9yIHdpdGggdGhlIG9uZSBiZWxvdyBpdCBvbmNlXG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMzAxMSBpcyBpbXBsZW1lbnRlZFxuICAgICAgICAgICAgICAgIC8vIHNlbGVjdG9yOiAnW25nTW9kZWxdLFtmb3JtQ29udHJvbF0sW2Zvcm1Db250cm9sTmFtZV0nLFxuICAgICAgICAgICAgICAgIGhvc3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgJyhpbnB1dCknOiAnX2hhbmRsZUlucHV0KCRldmVudC50YXJnZXQudmFsdWUpJyxcbiAgICAgICAgICAgICAgICAgICAgJyhibHVyKSc6ICdvblRvdWNoZWQoKScsXG4gICAgICAgICAgICAgICAgICAgICcoY29tcG9zaXRpb25zdGFydCknOiAnX2NvbXBvc2l0aW9uU3RhcnQoKScsXG4gICAgICAgICAgICAgICAgICAgICcoY29tcG9zaXRpb25lbmQpJzogJ19jb21wb3NpdGlvbkVuZCgkZXZlbnQudGFyZ2V0LnZhbHVlKSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW0RFRkFVTFRfVkFMVUVfQUNDRVNTT1JdXG4gICAgICAgICAgICB9LF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbkRlZmF1bHRWYWx1ZUFjY2Vzc29yLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgIHsgdHlwZTogUmVuZGVyZXIsIH0sXG4gICAgeyB0eXBlOiBFbGVtZW50UmVmLCB9LFxuICAgIHsgdHlwZTogdW5kZWZpbmVkLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IEluamVjdCwgYXJnczogW0NPTVBPU0lUSU9OX0JVRkZFUl9NT0RFLF0gfSxdIH0sXG5dOyB9O1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBAcGFyYW0gez99IHZhbGlkYXRvclxuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplVmFsaWRhdG9yKHZhbGlkYXRvcikge1xuICAgIGlmICgoKHZhbGlkYXRvcikpLnZhbGlkYXRlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoYykgeyByZXR1cm4gKCh2YWxpZGF0b3IpKS52YWxpZGF0ZShjKTsgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAodmFsaWRhdG9yKTtcbiAgICB9XG59XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsaWRhdG9yXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBub3JtYWxpemVBc3luY1ZhbGlkYXRvcih2YWxpZGF0b3IpIHtcbiAgICBpZiAoKCh2YWxpZGF0b3IpKS52YWxpZGF0ZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHsgcmV0dXJuICgodmFsaWRhdG9yKSkudmFsaWRhdGUoYyk7IH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gKHZhbGlkYXRvcik7XG4gICAgfVxufVxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xudmFyIE5VTUJFUl9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBOdW1iZXJWYWx1ZUFjY2Vzc29yOyB9KSxcbiAgICBtdWx0aTogdHJ1ZVxufTtcbi8qKlxuICogVGhlIGFjY2Vzc29yIGZvciB3cml0aW5nIGEgbnVtYmVyIHZhbHVlIGFuZCBsaXN0ZW5pbmcgdG8gY2hhbmdlcyB0aGF0IGlzIHVzZWQgYnkgdGhlXG4gKiB7XFxAbGluayBOZ01vZGVsfSwge1xcQGxpbmsgRm9ybUNvbnRyb2xEaXJlY3RpdmV9LCBhbmQge1xcQGxpbmsgRm9ybUNvbnRyb2xOYW1lfSBkaXJlY3RpdmVzLlxuICpcbiAqICAjIyMgRXhhbXBsZVxuICogIGBgYFxuICogIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgWyhuZ01vZGVsKV09XCJhZ2VcIj5cbiAqICBgYGBcbiAqL1xudmFyIE51bWJlclZhbHVlQWNjZXNzb3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gX3JlbmRlcmVyXG4gICAgICogQHBhcmFtIHs/fSBfZWxlbWVudFJlZlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIE51bWJlclZhbHVlQWNjZXNzb3IoX3JlbmRlcmVyLCBfZWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IF9yZW5kZXJlcjtcbiAgICAgICAgdGhpcy5fZWxlbWVudFJlZiA9IF9lbGVtZW50UmVmO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKF8pIHsgfTtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIE51bWJlclZhbHVlQWNjZXNzb3IucHJvdG90eXBlLndyaXRlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgLy8gVGhlIHZhbHVlIG5lZWRzIHRvIGJlIG5vcm1hbGl6ZWQgZm9yIElFOSwgb3RoZXJ3aXNlIGl0IGlzIHNldCB0byAnbnVsbCcgd2hlbiBudWxsXG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG5vcm1hbGl6ZWRWYWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCBub3JtYWxpemVkVmFsdWUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBmblxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgTnVtYmVyVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUucmVnaXN0ZXJPbkNoYW5nZSA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKHZhbHVlKSB7IGZuKHZhbHVlID09ICcnID8gbnVsbCA6IHBhcnNlRmxvYXQodmFsdWUpKTsgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIE51bWJlclZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnJlZ2lzdGVyT25Ub3VjaGVkID0gZnVuY3Rpb24gKGZuKSB7IHRoaXMub25Ub3VjaGVkID0gZm47IH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBpc0Rpc2FibGVkXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBOdW1iZXJWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5zZXREaXNhYmxlZFN0YXRlID0gZnVuY3Rpb24gKGlzRGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gICAgfTtcbiAgICByZXR1cm4gTnVtYmVyVmFsdWVBY2Nlc3Nvcjtcbn0oKSk7XG5OdW1iZXJWYWx1ZUFjY2Vzc29yLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dFt0eXBlPW51bWJlcl1bZm9ybUNvbnRyb2xOYW1lXSxpbnB1dFt0eXBlPW51bWJlcl1bZm9ybUNvbnRyb2xdLGlucHV0W3R5cGU9bnVtYmVyXVtuZ01vZGVsXScsXG4gICAgICAgICAgICAgICAgaG9zdDoge1xuICAgICAgICAgICAgICAgICAgICAnKGNoYW5nZSknOiAnb25DaGFuZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSknLFxuICAgICAgICAgICAgICAgICAgICAnKGlucHV0KSc6ICdvbkNoYW5nZSgkZXZlbnQudGFyZ2V0LnZhbHVlKScsXG4gICAgICAgICAgICAgICAgICAgICcoYmx1ciknOiAnb25Ub3VjaGVkKCknXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtOVU1CRVJfVkFMVUVfQUNDRVNTT1JdXG4gICAgICAgICAgICB9LF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbk51bWJlclZhbHVlQWNjZXNzb3IuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgeyB0eXBlOiBSZW5kZXJlciwgfSxcbiAgICB7IHR5cGU6IEVsZW1lbnRSZWYsIH0sXG5dOyB9O1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiB1bmltcGxlbWVudGVkKCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndW5pbXBsZW1lbnRlZCcpO1xufVxuLyoqXG4gKiBBIGJhc2UgY2xhc3MgdGhhdCBhbGwgY29udHJvbCBkaXJlY3RpdmUgZXh0ZW5kLlxuICogSXQgYmluZHMgYSB7XFxAbGluayBGb3JtQ29udHJvbH0gb2JqZWN0IHRvIGEgRE9NIGVsZW1lbnQuXG4gKlxuICogVXNlZCBpbnRlcm5hbGx5IGJ5IEFuZ3VsYXIgZm9ybXMuXG4gKlxuICogXFxAc3RhYmxlXG4gKiBAYWJzdHJhY3RcbiAqL1xudmFyIE5nQ29udHJvbCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTmdDb250cm9sLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE5nQ29udHJvbCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fcGFyZW50ID0gbnVsbDtcbiAgICAgICAgX3RoaXMubmFtZSA9IG51bGw7XG4gICAgICAgIF90aGlzLnZhbHVlQWNjZXNzb3IgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogXFxAaW50ZXJuYWxcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9yYXdWYWxpZGF0b3JzID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3Jhd0FzeW5jVmFsaWRhdG9ycyA9IFtdO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ0NvbnRyb2wucHJvdG90eXBlLCBcInZhbGlkYXRvclwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAodW5pbXBsZW1lbnRlZCgpKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5nQ29udHJvbC5wcm90b3R5cGUsIFwiYXN5bmNWYWxpZGF0b3JcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHVuaW1wbGVtZW50ZWQoKSk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEBhYnN0cmFjdFxuICAgICAqIEBwYXJhbSB7P30gbmV3VmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIE5nQ29udHJvbC5wcm90b3R5cGUudmlld1RvTW9kZWxVcGRhdGUgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHsgfTtcbiAgICByZXR1cm4gTmdDb250cm9sO1xufShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUpKTtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbnZhciBSQURJT19WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yOyB9KSxcbiAgICBtdWx0aTogdHJ1ZVxufTtcbi8qKlxuICogSW50ZXJuYWwgY2xhc3MgdXNlZCBieSBBbmd1bGFyIHRvIHVuY2hlY2sgcmFkaW8gYnV0dG9ucyB3aXRoIHRoZSBtYXRjaGluZyBuYW1lLlxuICovXG52YXIgUmFkaW9Db250cm9sUmVnaXN0cnkgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJhZGlvQ29udHJvbFJlZ2lzdHJ5KCkge1xuICAgICAgICB0aGlzLl9hY2Nlc3NvcnMgPSBbXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBjb250cm9sXG4gICAgICogQHBhcmFtIHs/fSBhY2Nlc3NvclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgUmFkaW9Db250cm9sUmVnaXN0cnkucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChjb250cm9sLCBhY2Nlc3Nvcikge1xuICAgICAgICB0aGlzLl9hY2Nlc3NvcnMucHVzaChbY29udHJvbCwgYWNjZXNzb3JdKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gYWNjZXNzb3JcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFJhZGlvQ29udHJvbFJlZ2lzdHJ5LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoYWNjZXNzb3IpIHtcbiAgICAgICAgZm9yICh2YXIgLyoqIEB0eXBlIHs/fSAqLyBpID0gdGhpcy5fYWNjZXNzb3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fYWNjZXNzb3JzW2ldWzFdID09PSBhY2Nlc3Nvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2FjY2Vzc29ycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGFjY2Vzc29yXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBSYWRpb0NvbnRyb2xSZWdpc3RyeS5wcm90b3R5cGUuc2VsZWN0ID0gZnVuY3Rpb24gKGFjY2Vzc29yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX2FjY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuX2lzU2FtZUdyb3VwKGMsIGFjY2Vzc29yKSAmJiBjWzFdICE9PSBhY2Nlc3Nvcikge1xuICAgICAgICAgICAgICAgIGNbMV0uZmlyZVVuY2hlY2soYWNjZXNzb3IudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gY29udHJvbFBhaXJcbiAgICAgKiBAcGFyYW0gez99IGFjY2Vzc29yXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBSYWRpb0NvbnRyb2xSZWdpc3RyeS5wcm90b3R5cGUuX2lzU2FtZUdyb3VwID0gZnVuY3Rpb24gKGNvbnRyb2xQYWlyLCBhY2Nlc3Nvcikge1xuICAgICAgICBpZiAoIWNvbnRyb2xQYWlyWzBdLmNvbnRyb2wpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiBjb250cm9sUGFpclswXS5fcGFyZW50ID09PSBhY2Nlc3Nvci5fY29udHJvbC5fcGFyZW50ICYmXG4gICAgICAgICAgICBjb250cm9sUGFpclsxXS5uYW1lID09PSBhY2Nlc3Nvci5uYW1lO1xuICAgIH07XG4gICAgcmV0dXJuIFJhZGlvQ29udHJvbFJlZ2lzdHJ5O1xufSgpKTtcblJhZGlvQ29udHJvbFJlZ2lzdHJ5LmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBJbmplY3RhYmxlIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5SYWRpb0NvbnRyb2xSZWdpc3RyeS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuLyoqXG4gKiBcXEB3aGF0SXREb2VzIFdyaXRlcyByYWRpbyBjb250cm9sIHZhbHVlcyBhbmQgbGlzdGVucyB0byByYWRpbyBjb250cm9sIGNoYW5nZXMuXG4gKlxuICogVXNlZCBieSB7XFxAbGluayBOZ01vZGVsfSwge1xcQGxpbmsgRm9ybUNvbnRyb2xEaXJlY3RpdmV9LCBhbmQge1xcQGxpbmsgRm9ybUNvbnRyb2xOYW1lfVxuICogdG8ga2VlcCB0aGUgdmlldyBzeW5jZWQgd2l0aCB0aGUge1xcQGxpbmsgRm9ybUNvbnRyb2x9IG1vZGVsLlxuICpcbiAqIFxcQGhvd1RvVXNlXG4gKlxuICogSWYgeW91IGhhdmUgaW1wb3J0ZWQgdGhlIHtcXEBsaW5rIEZvcm1zTW9kdWxlfSBvciB0aGUge1xcQGxpbmsgUmVhY3RpdmVGb3Jtc01vZHVsZX0sIHRoaXNcbiAqIHZhbHVlIGFjY2Vzc29yIHdpbGwgYmUgYWN0aXZlIG9uIGFueSByYWRpbyBjb250cm9sIHRoYXQgaGFzIGEgZm9ybSBkaXJlY3RpdmUuIFlvdSBkb1xuICogKipub3QqKiBuZWVkIHRvIGFkZCBhIHNwZWNpYWwgc2VsZWN0b3IgdG8gYWN0aXZhdGUgaXQuXG4gKlxuICogIyMjIEhvdyB0byB1c2UgcmFkaW8gYnV0dG9ucyB3aXRoIGZvcm0gZGlyZWN0aXZlc1xuICpcbiAqIFRvIHVzZSByYWRpbyBidXR0b25zIGluIGEgdGVtcGxhdGUtZHJpdmVuIGZvcm0sIHlvdSdsbCB3YW50IHRvIGVuc3VyZSB0aGF0IHJhZGlvIGJ1dHRvbnNcbiAqIGluIHRoZSBzYW1lIGdyb3VwIGhhdmUgdGhlIHNhbWUgYG5hbWVgIGF0dHJpYnV0ZS4gIFJhZGlvIGJ1dHRvbnMgd2l0aCBkaWZmZXJlbnQgYG5hbWVgXG4gKiBhdHRyaWJ1dGVzIGRvIG5vdCBhZmZlY3QgZWFjaCBvdGhlci5cbiAqXG4gKiB7XFxAZXhhbXBsZSBmb3Jtcy90cy9yYWRpb0J1dHRvbnMvcmFkaW9fYnV0dG9uX2V4YW1wbGUudHMgcmVnaW9uPSdUZW1wbGF0ZURyaXZlbid9XG4gKlxuICogV2hlbiB1c2luZyByYWRpbyBidXR0b25zIGluIGEgcmVhY3RpdmUgZm9ybSwgcmFkaW8gYnV0dG9ucyBpbiB0aGUgc2FtZSBncm91cCBzaG91bGQgaGF2ZSB0aGVcbiAqIHNhbWUgYGZvcm1Db250cm9sTmFtZWAuIFlvdSBjYW4gYWxzbyBhZGQgYSBgbmFtZWAgYXR0cmlidXRlLCBidXQgaXQncyBvcHRpb25hbC5cbiAqXG4gKiB7XFxAZXhhbXBsZSBmb3Jtcy90cy9yZWFjdGl2ZVJhZGlvQnV0dG9ucy9yZWFjdGl2ZV9yYWRpb19idXR0b25fZXhhbXBsZS50cyByZWdpb249J1JlYWN0aXZlJ31cbiAqXG4gKiAgKiAqKm5wbSBwYWNrYWdlKio6IGBcXEBhbmd1bGFyL2Zvcm1zYFxuICpcbiAqICBcXEBzdGFibGVcbiAqL1xudmFyIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gX3JlbmRlcmVyXG4gICAgICogQHBhcmFtIHs/fSBfZWxlbWVudFJlZlxuICAgICAqIEBwYXJhbSB7P30gX3JlZ2lzdHJ5XG4gICAgICogQHBhcmFtIHs/fSBfaW5qZWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yKF9yZW5kZXJlciwgX2VsZW1lbnRSZWYsIF9yZWdpc3RyeSwgX2luamVjdG9yKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyID0gX3JlbmRlcmVyO1xuICAgICAgICB0aGlzLl9lbGVtZW50UmVmID0gX2VsZW1lbnRSZWY7XG4gICAgICAgIHRoaXMuX3JlZ2lzdHJ5ID0gX3JlZ2lzdHJ5O1xuICAgICAgICB0aGlzLl9pbmplY3RvciA9IF9pbmplY3RvcjtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2NvbnRyb2wgPSB0aGlzLl9pbmplY3Rvci5nZXQoTmdDb250cm9sKTtcbiAgICAgICAgdGhpcy5fY2hlY2tOYW1lKCk7XG4gICAgICAgIHRoaXMuX3JlZ2lzdHJ5LmFkZCh0aGlzLl9jb250cm9sLCB0aGlzKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7IHRoaXMuX3JlZ2lzdHJ5LnJlbW92ZSh0aGlzKTsgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS53cml0ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gdmFsdWUgPT09IHRoaXMudmFsdWU7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjaGVja2VkJywgdGhpcy5fc3RhdGUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBmblxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUucmVnaXN0ZXJPbkNoYW5nZSA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLl9mbiA9IGZuO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm4oX3RoaXMudmFsdWUpO1xuICAgICAgICAgICAgX3RoaXMuX3JlZ2lzdHJ5LnNlbGVjdChfdGhpcyk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5maXJlVW5jaGVjayA9IGZ1bmN0aW9uICh2YWx1ZSkgeyB0aGlzLndyaXRlVmFsdWUodmFsdWUpOyB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnJlZ2lzdGVyT25Ub3VjaGVkID0gZnVuY3Rpb24gKGZuKSB7IHRoaXMub25Ub3VjaGVkID0gZm47IH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBpc0Rpc2FibGVkXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5zZXREaXNhYmxlZFN0YXRlID0gZnVuY3Rpb24gKGlzRGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9jaGVja05hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm5hbWUgJiYgdGhpcy5mb3JtQ29udHJvbE5hbWUgJiYgdGhpcy5uYW1lICE9PSB0aGlzLmZvcm1Db250cm9sTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5fdGhyb3dOYW1lRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMubmFtZSAmJiB0aGlzLmZvcm1Db250cm9sTmFtZSlcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IHRoaXMuZm9ybUNvbnRyb2xOYW1lO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fdGhyb3dOYW1lRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlxcbiAgICAgIElmIHlvdSBkZWZpbmUgYm90aCBhIG5hbWUgYW5kIGEgZm9ybUNvbnRyb2xOYW1lIGF0dHJpYnV0ZSBvbiB5b3VyIHJhZGlvIGJ1dHRvbiwgdGhlaXIgdmFsdWVzXFxuICAgICAgbXVzdCBtYXRjaC4gRXg6IDxpbnB1dCB0eXBlPVxcXCJyYWRpb1xcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJmb29kXFxcIiBuYW1lPVxcXCJmb29kXFxcIj5cXG4gICAgXCIpO1xuICAgIH07XG4gICAgcmV0dXJuIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3I7XG59KCkpO1xuUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXRbdHlwZT1yYWRpb11bZm9ybUNvbnRyb2xOYW1lXSxpbnB1dFt0eXBlPXJhZGlvXVtmb3JtQ29udHJvbF0saW5wdXRbdHlwZT1yYWRpb11bbmdNb2RlbF0nLFxuICAgICAgICAgICAgICAgIGhvc3Q6IHsgJyhjaGFuZ2UpJzogJ29uQ2hhbmdlKCknLCAnKGJsdXIpJzogJ29uVG91Y2hlZCgpJyB9LFxuICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW1JBRElPX1ZBTFVFX0FDQ0VTU09SXVxuICAgICAgICAgICAgfSxdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5SYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgIHsgdHlwZTogUmVuZGVyZXIsIH0sXG4gICAgeyB0eXBlOiBFbGVtZW50UmVmLCB9LFxuICAgIHsgdHlwZTogUmFkaW9Db250cm9sUmVnaXN0cnksIH0sXG4gICAgeyB0eXBlOiBJbmplY3RvciwgfSxcbl07IH07XG5SYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICduYW1lJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdmb3JtQ29udHJvbE5hbWUnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ3ZhbHVlJzogW3sgdHlwZTogSW5wdXQgfSxdLFxufTtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbnZhciBSQU5HRV9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBSYW5nZVZhbHVlQWNjZXNzb3I7IH0pLFxuICAgIG11bHRpOiB0cnVlXG59O1xuLyoqXG4gKiBUaGUgYWNjZXNzb3IgZm9yIHdyaXRpbmcgYSByYW5nZSB2YWx1ZSBhbmQgbGlzdGVuaW5nIHRvIGNoYW5nZXMgdGhhdCBpcyB1c2VkIGJ5IHRoZVxuICoge1xcQGxpbmsgTmdNb2RlbH0sIHtcXEBsaW5rIEZvcm1Db250cm9sRGlyZWN0aXZlfSwgYW5kIHtcXEBsaW5rIEZvcm1Db250cm9sTmFtZX0gZGlyZWN0aXZlcy5cbiAqXG4gKiAgIyMjIEV4YW1wbGVcbiAqICBgYGBcbiAqICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgWyhuZ01vZGVsKV09XCJhZ2VcIiA+XG4gKiAgYGBgXG4gKi9cbnZhciBSYW5nZVZhbHVlQWNjZXNzb3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gX3JlbmRlcmVyXG4gICAgICogQHBhcmFtIHs/fSBfZWxlbWVudFJlZlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFJhbmdlVmFsdWVBY2Nlc3NvcihfcmVuZGVyZXIsIF9lbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyID0gX3JlbmRlcmVyO1xuICAgICAgICB0aGlzLl9lbGVtZW50UmVmID0gX2VsZW1lbnRSZWY7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAoXykgeyB9O1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgUmFuZ2VWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS53cml0ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIHBhcnNlRmxvYXQodmFsdWUpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFJhbmdlVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUucmVnaXN0ZXJPbkNoYW5nZSA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKHZhbHVlKSB7IGZuKHZhbHVlID09ICcnID8gbnVsbCA6IHBhcnNlRmxvYXQodmFsdWUpKTsgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFJhbmdlVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUucmVnaXN0ZXJPblRvdWNoZWQgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGlzRGlzYWJsZWRcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFJhbmdlVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuc2V0RGlzYWJsZWRTdGF0ZSA9IGZ1bmN0aW9uIChpc0Rpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xuICAgIH07XG4gICAgcmV0dXJuIFJhbmdlVmFsdWVBY2Nlc3Nvcjtcbn0oKSk7XG5SYW5nZVZhbHVlQWNjZXNzb3IuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0W3R5cGU9cmFuZ2VdW2Zvcm1Db250cm9sTmFtZV0saW5wdXRbdHlwZT1yYW5nZV1bZm9ybUNvbnRyb2xdLGlucHV0W3R5cGU9cmFuZ2VdW25nTW9kZWxdJyxcbiAgICAgICAgICAgICAgICBob3N0OiB7XG4gICAgICAgICAgICAgICAgICAgICcoY2hhbmdlKSc6ICdvbkNoYW5nZSgkZXZlbnQudGFyZ2V0LnZhbHVlKScsXG4gICAgICAgICAgICAgICAgICAgICcoaW5wdXQpJzogJ29uQ2hhbmdlKCRldmVudC50YXJnZXQudmFsdWUpJyxcbiAgICAgICAgICAgICAgICAgICAgJyhibHVyKSc6ICdvblRvdWNoZWQoKSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW1JBTkdFX1ZBTFVFX0FDQ0VTU09SXVxuICAgICAgICAgICAgfSxdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5SYW5nZVZhbHVlQWNjZXNzb3IuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgeyB0eXBlOiBSZW5kZXJlciwgfSxcbiAgICB7IHR5cGU6IEVsZW1lbnRSZWYsIH0sXG5dOyB9O1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xudmFyIFNFTEVDVF9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3NvcjsgfSksXG4gICAgbXVsdGk6IHRydWVcbn07XG4vKipcbiAqIEBwYXJhbSB7P30gaWRcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIF9idWlsZFZhbHVlU3RyaW5nKGlkLCB2YWx1ZSkge1xuICAgIGlmIChpZCA9PSBudWxsKVxuICAgICAgICByZXR1cm4gXCJcIiArIHZhbHVlO1xuICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKVxuICAgICAgICB2YWx1ZSA9ICdPYmplY3QnO1xuICAgIHJldHVybiAoaWQgKyBcIjogXCIgKyB2YWx1ZSkuc2xpY2UoMCwgNTApO1xufVxuLyoqXG4gKiBAcGFyYW0gez99IHZhbHVlU3RyaW5nXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBfZXh0cmFjdElkKHZhbHVlU3RyaW5nKSB7XG4gICAgcmV0dXJuIHZhbHVlU3RyaW5nLnNwbGl0KCc6JylbMF07XG59XG4vKipcbiAqIFxcQHdoYXRJdERvZXMgV3JpdGVzIHZhbHVlcyBhbmQgbGlzdGVucyB0byBjaGFuZ2VzIG9uIGEgc2VsZWN0IGVsZW1lbnQuXG4gKlxuICogVXNlZCBieSB7XFxAbGluayBOZ01vZGVsfSwge1xcQGxpbmsgRm9ybUNvbnRyb2xEaXJlY3RpdmV9LCBhbmQge1xcQGxpbmsgRm9ybUNvbnRyb2xOYW1lfVxuICogdG8ga2VlcCB0aGUgdmlldyBzeW5jZWQgd2l0aCB0aGUge1xcQGxpbmsgRm9ybUNvbnRyb2x9IG1vZGVsLlxuICpcbiAqIFxcQGhvd1RvVXNlXG4gKlxuICogSWYgeW91IGhhdmUgaW1wb3J0ZWQgdGhlIHtcXEBsaW5rIEZvcm1zTW9kdWxlfSBvciB0aGUge1xcQGxpbmsgUmVhY3RpdmVGb3Jtc01vZHVsZX0sIHRoaXNcbiAqIHZhbHVlIGFjY2Vzc29yIHdpbGwgYmUgYWN0aXZlIG9uIGFueSBzZWxlY3QgY29udHJvbCB0aGF0IGhhcyBhIGZvcm0gZGlyZWN0aXZlLiBZb3UgZG9cbiAqICoqbm90KiogbmVlZCB0byBhZGQgYSBzcGVjaWFsIHNlbGVjdG9yIHRvIGFjdGl2YXRlIGl0LlxuICpcbiAqICMjIyBIb3cgdG8gdXNlIHNlbGVjdCBjb250cm9scyB3aXRoIGZvcm0gZGlyZWN0aXZlc1xuICpcbiAqIFRvIHVzZSBhIHNlbGVjdCBpbiBhIHRlbXBsYXRlLWRyaXZlbiBmb3JtLCBzaW1wbHkgYWRkIGFuIGBuZ01vZGVsYCBhbmQgYSBgbmFtZWBcbiAqIGF0dHJpYnV0ZSB0byB0aGUgbWFpbiBgPHNlbGVjdD5gIHRhZy5cbiAqXG4gKiBJZiB5b3VyIG9wdGlvbiB2YWx1ZXMgYXJlIHNpbXBsZSBzdHJpbmdzLCB5b3UgY2FuIGJpbmQgdG8gdGhlIG5vcm1hbCBgdmFsdWVgIHByb3BlcnR5XG4gKiBvbiB0aGUgb3B0aW9uLiAgSWYgeW91ciBvcHRpb24gdmFsdWVzIGhhcHBlbiB0byBiZSBvYmplY3RzIChhbmQgeW91J2QgbGlrZSB0byBzYXZlIHRoZVxuICogc2VsZWN0aW9uIGluIHlvdXIgZm9ybSBhcyBhbiBvYmplY3QpLCB1c2UgYG5nVmFsdWVgIGluc3RlYWQ6XG4gKlxuICoge1xcQGV4YW1wbGUgZm9ybXMvdHMvc2VsZWN0Q29udHJvbC9zZWxlY3RfY29udHJvbF9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAqXG4gKiBJbiByZWFjdGl2ZSBmb3JtcywgeW91J2xsIGFsc28gd2FudCB0byBhZGQgeW91ciBmb3JtIGRpcmVjdGl2ZSAoYGZvcm1Db250cm9sTmFtZWAgb3JcbiAqIGBmb3JtQ29udHJvbGApIG9uIHRoZSBtYWluIGA8c2VsZWN0PmAgdGFnLiBMaWtlIGluIHRoZSBmb3JtZXIgZXhhbXBsZSwgeW91IGhhdmUgdGhlXG4gKiBjaG9pY2Ugb2YgYmluZGluZyB0byB0aGUgIGB2YWx1ZWAgb3IgYG5nVmFsdWVgIHByb3BlcnR5IG9uIHRoZSBzZWxlY3QncyBvcHRpb25zLlxuICpcbiAqIHtcXEBleGFtcGxlIGZvcm1zL3RzL3JlYWN0aXZlU2VsZWN0Q29udHJvbC9yZWFjdGl2ZV9zZWxlY3RfY29udHJvbF9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAqXG4gKiAjIyMgQ2F2ZWF0OiBPcHRpb24gc2VsZWN0aW9uXG4gKlxuICogQW5ndWxhciB1c2VzIG9iamVjdCBpZGVudGl0eSB0byBzZWxlY3Qgb3B0aW9uLiBJdCdzIHBvc3NpYmxlIGZvciB0aGUgaWRlbnRpdGllcyBvZiBpdGVtc1xuICogdG8gY2hhbmdlIHdoaWxlIHRoZSBkYXRhIGRvZXMgbm90LiBUaGlzIGNhbiBoYXBwZW4sIGZvciBleGFtcGxlLCBpZiB0aGUgaXRlbXMgYXJlIHByb2R1Y2VkXG4gKiBmcm9tIGFuIFJQQyB0byB0aGUgc2VydmVyLCBhbmQgdGhhdCBSUEMgaXMgcmUtcnVuLiBFdmVuIGlmIHRoZSBkYXRhIGhhc24ndCBjaGFuZ2VkLCB0aGVcbiAqIHNlY29uZCByZXNwb25zZSB3aWxsIHByb2R1Y2Ugb2JqZWN0cyB3aXRoIGRpZmZlcmVudCBpZGVudGl0aWVzLlxuICpcbiAqIFRvIGN1c3RvbWl6ZSB0aGUgZGVmYXVsdCBvcHRpb24gY29tcGFyaXNvbiBhbGdvcml0aG0sIGA8c2VsZWN0PmAgc3VwcG9ydHMgYGNvbXBhcmVXaXRoYCBpbnB1dC5cbiAqIGBjb21wYXJlV2l0aGAgdGFrZXMgYSAqKmZ1bmN0aW9uKiogd2hpY2ggaGFzIHR3byBhcmd1bWVudHM6IGBvcHRpb24xYCBhbmQgYG9wdGlvbjJgLlxuICogSWYgYGNvbXBhcmVXaXRoYCBpcyBnaXZlbiwgQW5ndWxhciBzZWxlY3RzIG9wdGlvbiBieSB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmdW5jdGlvbi5cbiAqXG4gKiAjIyMjIFN5bnRheFxuICpcbiAqIGBgYFxuICogPHNlbGVjdCBbY29tcGFyZVdpdGhdPVwiY29tcGFyZUZuXCIgIFsobmdNb2RlbCldPVwic2VsZWN0ZWRDb3VudHJpZXNcIj5cbiAqICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBjb3VudHJ5IG9mIGNvdW50cmllc1wiIFtuZ1ZhbHVlXT1cImNvdW50cnlcIj5cbiAqICAgICAgICAge3tjb3VudHJ5Lm5hbWV9fVxuICogICAgIDwvb3B0aW9uPlxuICogPC9zZWxlY3Q+XG4gKlxuICogY29tcGFyZUZuKGMxOiBDb3VudHJ5LCBjMjogQ291bnRyeSk6IGJvb2xlYW4ge1xuICogICAgIHJldHVybiBjMSAmJiBjMiA/IGMxLmlkID09PSBjMi5pZCA6IGMxID09PSBjMjtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIE5vdGU6IFdlIGxpc3RlbiB0byB0aGUgJ2NoYW5nZScgZXZlbnQgYmVjYXVzZSAnaW5wdXQnIGV2ZW50cyBhcmVuJ3QgZmlyZWRcbiAqIGZvciBzZWxlY3RzIGluIEZpcmVmb3ggYW5kIElFOlxuICogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTAyNDM1MFxuICogaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvNDY2MDA0NS9cbiAqXG4gKiAqICoqbnBtIHBhY2thZ2UqKjogYFxcQGFuZ3VsYXIvZm9ybXNgXG4gKlxuICogXFxAc3RhYmxlXG4gKi9cbnZhciBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3NvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBfcmVuZGVyZXJcbiAgICAgKiBAcGFyYW0gez99IF9lbGVtZW50UmVmXG4gICAgICovXG4gICAgZnVuY3Rpb24gU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IoX3JlbmRlcmVyLCBfZWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IF9yZW5kZXJlcjtcbiAgICAgICAgdGhpcy5fZWxlbWVudFJlZiA9IF9lbGVtZW50UmVmO1xuICAgICAgICAvKipcbiAgICAgICAgICogXFxAaW50ZXJuYWxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX29wdGlvbk1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9pZENvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKF8pIHsgfTtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgIHRoaXMuX2NvbXBhcmVXaXRoID0gybVsb29zZUlkZW50aWNhbDtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZSwgXCJjb21wYXJlV2l0aFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImNvbXBhcmVXaXRoIG11c3QgYmUgYSBmdW5jdGlvbiwgYnV0IHJlY2VpdmVkIFwiICsgSlNPTi5zdHJpbmdpZnkoZm4pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2NvbXBhcmVXaXRoID0gZm47XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS53cml0ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gaWQgPSB0aGlzLl9nZXRPcHRpb25JZCh2YWx1ZSk7XG4gICAgICAgIGlmIChpZCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnc2VsZWN0ZWRJbmRleCcsIC0xKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB2YWx1ZVN0cmluZyA9IF9idWlsZFZhbHVlU3RyaW5nKGlkLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIHZhbHVlU3RyaW5nKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5yZWdpc3Rlck9uQ2hhbmdlID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAodmFsdWVTdHJpbmcpIHtcbiAgICAgICAgICAgIF90aGlzLnZhbHVlID0gdmFsdWVTdHJpbmc7XG4gICAgICAgICAgICBmbihfdGhpcy5fZ2V0T3B0aW9uVmFsdWUodmFsdWVTdHJpbmcpKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5yZWdpc3Rlck9uVG91Y2hlZCA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gaXNEaXNhYmxlZFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnNldERpc2FibGVkU3RhdGUgPSBmdW5jdGlvbiAoaXNEaXNhYmxlZCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFxcQGludGVybmFsXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX3JlZ2lzdGVyT3B0aW9uID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHRoaXMuX2lkQ291bnRlcisrKS50b1N0cmluZygpOyB9O1xuICAgIC8qKlxuICAgICAqIFxcQGludGVybmFsXG4gICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9nZXRPcHRpb25JZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gQXJyYXkuZnJvbSh0aGlzLl9vcHRpb25NYXAua2V5cygpKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBpZCA9IF9hW19pXTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb21wYXJlV2l0aCh0aGlzLl9vcHRpb25NYXAuZ2V0KGlkKSwgdmFsdWUpKVxuICAgICAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFxcQGludGVybmFsXG4gICAgICogQHBhcmFtIHs/fSB2YWx1ZVN0cmluZ1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9nZXRPcHRpb25WYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZVN0cmluZykge1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBpZCA9IF9leHRyYWN0SWQodmFsdWVTdHJpbmcpO1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9uTWFwLmhhcyhpZCkgPyB0aGlzLl9vcHRpb25NYXAuZ2V0KGlkKSA6IHZhbHVlU3RyaW5nO1xuICAgIH07XG4gICAgcmV0dXJuIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yO1xufSgpKTtcblNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWxlY3Q6bm90KFttdWx0aXBsZV0pW2Zvcm1Db250cm9sTmFtZV0sc2VsZWN0Om5vdChbbXVsdGlwbGVdKVtmb3JtQ29udHJvbF0sc2VsZWN0Om5vdChbbXVsdGlwbGVdKVtuZ01vZGVsXScsXG4gICAgICAgICAgICAgICAgaG9zdDogeyAnKGNoYW5nZSknOiAnb25DaGFuZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSknLCAnKGJsdXIpJzogJ29uVG91Y2hlZCgpJyB9LFxuICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW1NFTEVDVF9WQUxVRV9BQ0NFU1NPUl1cbiAgICAgICAgICAgIH0sXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgeyB0eXBlOiBSZW5kZXJlciwgfSxcbiAgICB7IHR5cGU6IEVsZW1lbnRSZWYsIH0sXG5dOyB9O1xuU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvcERlY29yYXRvcnMgPSB7XG4gICAgJ2NvbXBhcmVXaXRoJzogW3sgdHlwZTogSW5wdXQgfSxdLFxufTtcbi8qKlxuICogXFxAd2hhdEl0RG9lcyBNYXJrcyBgPG9wdGlvbj5gIGFzIGR5bmFtaWMsIHNvIEFuZ3VsYXIgY2FuIGJlIG5vdGlmaWVkIHdoZW4gb3B0aW9ucyBjaGFuZ2UuXG4gKlxuICogXFxAaG93VG9Vc2VcbiAqXG4gKiBTZWUgZG9jcyBmb3Ige1xcQGxpbmsgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3J9IGZvciB1c2FnZSBleGFtcGxlcy5cbiAqXG4gKiBcXEBzdGFibGVcbiAqL1xudmFyIE5nU2VsZWN0T3B0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IF9lbGVtZW50XG4gICAgICogQHBhcmFtIHs/fSBfcmVuZGVyZXJcbiAgICAgKiBAcGFyYW0gez99IF9zZWxlY3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBOZ1NlbGVjdE9wdGlvbihfZWxlbWVudCwgX3JlbmRlcmVyLCBfc2VsZWN0KSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBfZWxlbWVudDtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSBfcmVuZGVyZXI7XG4gICAgICAgIHRoaXMuX3NlbGVjdCA9IF9zZWxlY3Q7XG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3QpXG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5fc2VsZWN0Ll9yZWdpc3Rlck9wdGlvbigpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTmdTZWxlY3RPcHRpb24ucHJvdG90eXBlLCBcIm5nVmFsdWVcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zZWxlY3QgPT0gbnVsbClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3QuX29wdGlvbk1hcC5zZXQodGhpcy5pZCwgdmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5fc2V0RWxlbWVudFZhbHVlKF9idWlsZFZhbHVlU3RyaW5nKHRoaXMuaWQsIHZhbHVlKSk7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Qud3JpdGVWYWx1ZSh0aGlzLl9zZWxlY3QudmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTmdTZWxlY3RPcHRpb24ucHJvdG90eXBlLCBcInZhbHVlXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRFbGVtZW50VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NlbGVjdClcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3Qud3JpdGVWYWx1ZSh0aGlzLl9zZWxlY3QudmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIE5nU2VsZWN0T3B0aW9uLnByb3RvdHlwZS5fc2V0RWxlbWVudFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIHZhbHVlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgTmdTZWxlY3RPcHRpb24ucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0KSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3QuX29wdGlvbk1hcC5kZWxldGUodGhpcy5pZCk7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Qud3JpdGVWYWx1ZSh0aGlzLl9zZWxlY3QudmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTmdTZWxlY3RPcHRpb247XG59KCkpO1xuTmdTZWxlY3RPcHRpb24uZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3sgc2VsZWN0b3I6ICdvcHRpb24nIH0sXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuTmdTZWxlY3RPcHRpb24uY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgeyB0eXBlOiBFbGVtZW50UmVmLCB9LFxuICAgIHsgdHlwZTogUmVuZGVyZXIsIH0sXG4gICAgeyB0eXBlOiBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3NvciwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBIb3N0IH0sXSB9LFxuXTsgfTtcbk5nU2VsZWN0T3B0aW9uLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICduZ1ZhbHVlJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsnbmdWYWx1ZScsXSB9LF0sXG4gICAgJ3ZhbHVlJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsndmFsdWUnLF0gfSxdLFxufTtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbnZhciBTRUxFQ1RfTVVMVElQTEVfVkFMVUVfQUNDRVNTT1IgPSB7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3NvcjsgfSksXG4gICAgbXVsdGk6IHRydWVcbn07XG4vKipcbiAqIEBwYXJhbSB7P30gaWRcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIF9idWlsZFZhbHVlU3RyaW5nJDEoaWQsIHZhbHVlKSB7XG4gICAgaWYgKGlkID09IG51bGwpXG4gICAgICAgIHJldHVybiBcIlwiICsgdmFsdWU7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpXG4gICAgICAgIHZhbHVlID0gXCInXCIgKyB2YWx1ZSArIFwiJ1wiO1xuICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKVxuICAgICAgICB2YWx1ZSA9ICdPYmplY3QnO1xuICAgIHJldHVybiAoaWQgKyBcIjogXCIgKyB2YWx1ZSkuc2xpY2UoMCwgNTApO1xufVxuLyoqXG4gKiBAcGFyYW0gez99IHZhbHVlU3RyaW5nXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBfZXh0cmFjdElkJDEodmFsdWVTdHJpbmcpIHtcbiAgICByZXR1cm4gdmFsdWVTdHJpbmcuc3BsaXQoJzonKVswXTtcbn1cbi8qKlxuICogVGhlIGFjY2Vzc29yIGZvciB3cml0aW5nIGEgdmFsdWUgYW5kIGxpc3RlbmluZyB0byBjaGFuZ2VzIG9uIGEgc2VsZWN0IGVsZW1lbnQuXG4gKlxuICogICMjIyBDYXZlYXQ6IE9wdGlvbnMgc2VsZWN0aW9uXG4gKlxuICogQW5ndWxhciB1c2VzIG9iamVjdCBpZGVudGl0eSB0byBzZWxlY3Qgb3B0aW9ucy4gSXQncyBwb3NzaWJsZSBmb3IgdGhlIGlkZW50aXRpZXMgb2YgaXRlbXNcbiAqIHRvIGNoYW5nZSB3aGlsZSB0aGUgZGF0YSBkb2VzIG5vdC4gVGhpcyBjYW4gaGFwcGVuLCBmb3IgZXhhbXBsZSwgaWYgdGhlIGl0ZW1zIGFyZSBwcm9kdWNlZFxuICogZnJvbSBhbiBSUEMgdG8gdGhlIHNlcnZlciwgYW5kIHRoYXQgUlBDIGlzIHJlLXJ1bi4gRXZlbiBpZiB0aGUgZGF0YSBoYXNuJ3QgY2hhbmdlZCwgdGhlXG4gKiBzZWNvbmQgcmVzcG9uc2Ugd2lsbCBwcm9kdWNlIG9iamVjdHMgd2l0aCBkaWZmZXJlbnQgaWRlbnRpdGllcy5cbiAqXG4gKiBUbyBjdXN0b21pemUgdGhlIGRlZmF1bHQgb3B0aW9uIGNvbXBhcmlzb24gYWxnb3JpdGhtLCBgPHNlbGVjdCBtdWx0aXBsZT5gIHN1cHBvcnRzIGBjb21wYXJlV2l0aGBcbiAqIGlucHV0LiBgY29tcGFyZVdpdGhgIHRha2VzIGEgKipmdW5jdGlvbioqIHdoaWNoIGhhcyB0d28gYXJndW1lbnRzOiBgb3B0aW9uMWAgYW5kIGBvcHRpb24yYC5cbiAqIElmIGBjb21wYXJlV2l0aGAgaXMgZ2l2ZW4sIEFuZ3VsYXIgc2VsZWN0cyBvcHRpb25zIGJ5IHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uLlxuICpcbiAqICMjIyMgU3ludGF4XG4gKlxuICogYGBgXG4gKiA8c2VsZWN0IG11bHRpcGxlIFtjb21wYXJlV2l0aF09XCJjb21wYXJlRm5cIiAgWyhuZ01vZGVsKV09XCJzZWxlY3RlZENvdW50cmllc1wiPlxuICogICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGNvdW50cnkgb2YgY291bnRyaWVzXCIgW25nVmFsdWVdPVwiY291bnRyeVwiPlxuICogICAgICAgICB7e2NvdW50cnkubmFtZX19XG4gKiAgICAgPC9vcHRpb24+XG4gKiA8L3NlbGVjdD5cbiAqXG4gKiBjb21wYXJlRm4oYzE6IENvdW50cnksIGMyOiBDb3VudHJ5KTogYm9vbGVhbiB7XG4gKiAgICAgcmV0dXJuIGMxICYmIGMyID8gYzEuaWQgPT09IGMyLmlkIDogYzEgPT09IGMyO1xuICogfVxuICogYGBgXG4gKlxuICogXFxAc3RhYmxlXG4gKi9cbnZhciBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IF9yZW5kZXJlclxuICAgICAqIEBwYXJhbSB7P30gX2VsZW1lbnRSZWZcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yKF9yZW5kZXJlciwgX2VsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSBfcmVuZGVyZXI7XG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYgPSBfZWxlbWVudFJlZjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9vcHRpb25NYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faWRDb3VudGVyID0gMDtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uIChfKSB7IH07XG4gICAgICAgIHRoaXMub25Ub3VjaGVkID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICB0aGlzLl9jb21wYXJlV2l0aCA9IMm1bG9vc2VJZGVudGljYWw7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZSwgXCJjb21wYXJlV2l0aFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImNvbXBhcmVXaXRoIG11c3QgYmUgYSBmdW5jdGlvbiwgYnV0IHJlY2VpdmVkIFwiICsgSlNPTi5zdHJpbmdpZnkoZm4pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2NvbXBhcmVXaXRoID0gZm47XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLndyaXRlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBvcHRpb25TZWxlY3RlZFN0YXRlU2V0dGVyO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIC8vIGNvbnZlcnQgdmFsdWVzIHRvIGlkc1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gaWRzXzEgPSB2YWx1ZS5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIF90aGlzLl9nZXRPcHRpb25JZCh2KTsgfSk7XG4gICAgICAgICAgICBvcHRpb25TZWxlY3RlZFN0YXRlU2V0dGVyID0gZnVuY3Rpb24gKG9wdCwgbykgeyBvcHQuX3NldFNlbGVjdGVkKGlkc18xLmluZGV4T2Yoby50b1N0cmluZygpKSA+IC0xKTsgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvblNlbGVjdGVkU3RhdGVTZXR0ZXIgPSBmdW5jdGlvbiAob3B0LCBvKSB7IG9wdC5fc2V0U2VsZWN0ZWQoZmFsc2UpOyB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29wdGlvbk1hcC5mb3JFYWNoKG9wdGlvblNlbGVjdGVkU3RhdGVTZXR0ZXIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBmblxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUucmVnaXN0ZXJPbkNoYW5nZSA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKF8pIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHNlbGVjdGVkID0gW107XG4gICAgICAgICAgICBpZiAoXy5oYXNPd25Qcm9wZXJ0eSgnc2VsZWN0ZWRPcHRpb25zJykpIHtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBvcHRpb25zID0gXy5zZWxlY3RlZE9wdGlvbnM7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgLyoqIEB0eXBlIHs/fSAqLyBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gb3B0ID0gb3B0aW9ucy5pdGVtKGkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB2YWwgPSBfdGhpcy5fZ2V0T3B0aW9uVmFsdWUob3B0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQucHVzaCh2YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG9wdGlvbnMgPSAoXy5vcHRpb25zKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciAvKiogQHR5cGUgez99ICovIGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBvcHQgPSBvcHRpb25zLml0ZW0oaSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHQuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHZhbCA9IF90aGlzLl9nZXRPcHRpb25WYWx1ZShvcHQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQucHVzaCh2YWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMudmFsdWUgPSBzZWxlY3RlZDtcbiAgICAgICAgICAgIGZuKHNlbGVjdGVkKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnJlZ2lzdGVyT25Ub3VjaGVkID0gZnVuY3Rpb24gKGZuKSB7IHRoaXMub25Ub3VjaGVkID0gZm47IH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBpc0Rpc2FibGVkXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5zZXREaXNhYmxlZFN0YXRlID0gZnVuY3Rpb24gKGlzRGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9yZWdpc3Rlck9wdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBpZCA9ICh0aGlzLl9pZENvdW50ZXIrKykudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5fb3B0aW9uTWFwLnNldChpZCwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9nZXRPcHRpb25JZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gQXJyYXkuZnJvbSh0aGlzLl9vcHRpb25NYXAua2V5cygpKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBpZCA9IF9hW19pXTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb21wYXJlV2l0aCgvKiogQHR5cGUgez99ICovICgodGhpcy5fb3B0aW9uTWFwLmdldChpZCkpKS5fdmFsdWUsIHZhbHVlKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVTdHJpbmdcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9nZXRPcHRpb25WYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZVN0cmluZykge1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBpZCA9IF9leHRyYWN0SWQkMSh2YWx1ZVN0cmluZyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25NYXAuaGFzKGlkKSA/ICgodGhpcy5fb3B0aW9uTWFwLmdldChpZCkpKS5fdmFsdWUgOiB2YWx1ZVN0cmluZztcbiAgICB9O1xuICAgIHJldHVybiBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yO1xufSgpKTtcblNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdFttdWx0aXBsZV1bZm9ybUNvbnRyb2xOYW1lXSxzZWxlY3RbbXVsdGlwbGVdW2Zvcm1Db250cm9sXSxzZWxlY3RbbXVsdGlwbGVdW25nTW9kZWxdJyxcbiAgICAgICAgICAgICAgICBob3N0OiB7ICcoY2hhbmdlKSc6ICdvbkNoYW5nZSgkZXZlbnQudGFyZ2V0KScsICcoYmx1ciknOiAnb25Ub3VjaGVkKCknIH0sXG4gICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbU0VMRUNUX01VTFRJUExFX1ZBTFVFX0FDQ0VTU09SXVxuICAgICAgICAgICAgfSxdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5TZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgIHsgdHlwZTogUmVuZGVyZXIsIH0sXG4gICAgeyB0eXBlOiBFbGVtZW50UmVmLCB9LFxuXTsgfTtcblNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvcERlY29yYXRvcnMgPSB7XG4gICAgJ2NvbXBhcmVXaXRoJzogW3sgdHlwZTogSW5wdXQgfSxdLFxufTtcbi8qKlxuICogTWFya3MgYDxvcHRpb24+YCBhcyBkeW5hbWljLCBzbyBBbmd1bGFyIGNhbiBiZSBub3RpZmllZCB3aGVuIG9wdGlvbnMgY2hhbmdlLlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogYGBgXG4gKiA8c2VsZWN0IG11bHRpcGxlIG5hbWU9XCJjaXR5XCIgbmdNb2RlbD5cbiAqICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgYyBvZiBjaXRpZXNcIiBbdmFsdWVdPVwiY1wiPjwvb3B0aW9uPlxuICogPC9zZWxlY3Q+XG4gKiBgYGBcbiAqL1xudmFyIE5nU2VsZWN0TXVsdGlwbGVPcHRpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gX2VsZW1lbnRcbiAgICAgKiBAcGFyYW0gez99IF9yZW5kZXJlclxuICAgICAqIEBwYXJhbSB7P30gX3NlbGVjdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIE5nU2VsZWN0TXVsdGlwbGVPcHRpb24oX2VsZW1lbnQsIF9yZW5kZXJlciwgX3NlbGVjdCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gX2VsZW1lbnQ7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyID0gX3JlbmRlcmVyO1xuICAgICAgICB0aGlzLl9zZWxlY3QgPSBfc2VsZWN0O1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0KSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5fc2VsZWN0Ll9yZWdpc3Rlck9wdGlvbih0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTmdTZWxlY3RNdWx0aXBsZU9wdGlvbi5wcm90b3R5cGUsIFwibmdWYWx1ZVwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NlbGVjdCA9PSBudWxsKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9zZXRFbGVtZW50VmFsdWUoX2J1aWxkVmFsdWVTdHJpbmckMSh0aGlzLmlkLCB2YWx1ZSkpO1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0LndyaXRlVmFsdWUodGhpcy5fc2VsZWN0LnZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5nU2VsZWN0TXVsdGlwbGVPcHRpb24ucHJvdG90eXBlLCBcInZhbHVlXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRFbGVtZW50VmFsdWUoX2J1aWxkVmFsdWVTdHJpbmckMSh0aGlzLmlkLCB2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdC53cml0ZVZhbHVlKHRoaXMuX3NlbGVjdC52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRFbGVtZW50VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIE5nU2VsZWN0TXVsdGlwbGVPcHRpb24ucHJvdG90eXBlLl9zZXRFbGVtZW50VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgdmFsdWUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogXFxAaW50ZXJuYWxcbiAgICAgKiBAcGFyYW0gez99IHNlbGVjdGVkXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBOZ1NlbGVjdE11bHRpcGxlT3B0aW9uLnByb3RvdHlwZS5fc2V0U2VsZWN0ZWQgPSBmdW5jdGlvbiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3NlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBOZ1NlbGVjdE11bHRpcGxlT3B0aW9uLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdCkge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0Ll9vcHRpb25NYXAuZGVsZXRlKHRoaXMuaWQpO1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0LndyaXRlVmFsdWUodGhpcy5fc2VsZWN0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE5nU2VsZWN0TXVsdGlwbGVPcHRpb247XG59KCkpO1xuTmdTZWxlY3RNdWx0aXBsZU9wdGlvbi5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbeyBzZWxlY3RvcjogJ29wdGlvbicgfSxdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5OZ1NlbGVjdE11bHRpcGxlT3B0aW9uLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgIHsgdHlwZTogRWxlbWVudFJlZiwgfSxcbiAgICB7IHR5cGU6IFJlbmRlcmVyLCB9LFxuICAgIHsgdHlwZTogU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3NvciwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBIb3N0IH0sXSB9LFxuXTsgfTtcbk5nU2VsZWN0TXVsdGlwbGVPcHRpb24ucHJvcERlY29yYXRvcnMgPSB7XG4gICAgJ25nVmFsdWUnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWyduZ1ZhbHVlJyxdIH0sXSxcbiAgICAndmFsdWUnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWyd2YWx1ZScsXSB9LF0sXG59O1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBAcGFyYW0gez99IG5hbWVcbiAqIEBwYXJhbSB7P30gcGFyZW50XG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBjb250cm9sUGF0aChuYW1lLCBwYXJlbnQpIHtcbiAgICByZXR1cm4gKChwYXJlbnQucGF0aCkpLmNvbmNhdChbbmFtZV0pO1xufVxuLyoqXG4gKiBAcGFyYW0gez99IGNvbnRyb2xcbiAqIEBwYXJhbSB7P30gZGlyXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBzZXRVcENvbnRyb2woY29udHJvbCwgZGlyKSB7XG4gICAgaWYgKCFjb250cm9sKVxuICAgICAgICBfdGhyb3dFcnJvcihkaXIsICdDYW5ub3QgZmluZCBjb250cm9sIHdpdGgnKTtcbiAgICBpZiAoIWRpci52YWx1ZUFjY2Vzc29yKVxuICAgICAgICBfdGhyb3dFcnJvcihkaXIsICdObyB2YWx1ZSBhY2Nlc3NvciBmb3IgZm9ybSBjb250cm9sIHdpdGgnKTtcbiAgICBjb250cm9sLnZhbGlkYXRvciA9IFZhbGlkYXRvcnMuY29tcG9zZShbLyoqIEB0eXBlIHs/fSAqLyAoKGNvbnRyb2wudmFsaWRhdG9yKSksIGRpci52YWxpZGF0b3JdKTtcbiAgICBjb250cm9sLmFzeW5jVmFsaWRhdG9yID0gVmFsaWRhdG9ycy5jb21wb3NlQXN5bmMoWy8qKiBAdHlwZSB7P30gKi8gKChjb250cm9sLmFzeW5jVmFsaWRhdG9yKSksIGRpci5hc3luY1ZhbGlkYXRvcl0pOyAvKiogQHR5cGUgez99ICovXG4gICAgKChkaXIudmFsdWVBY2Nlc3NvcikpLndyaXRlVmFsdWUoY29udHJvbC52YWx1ZSk7IC8qKiBAdHlwZSB7P30gKi9cbiAgICAoKFxuICAgIC8vIHZpZXcgLT4gbW9kZWxcbiAgICBkaXIudmFsdWVBY2Nlc3NvcikpLnJlZ2lzdGVyT25DaGFuZ2UoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgIGRpci52aWV3VG9Nb2RlbFVwZGF0ZShuZXdWYWx1ZSk7XG4gICAgICAgIGNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgICAgY29udHJvbC5zZXRWYWx1ZShuZXdWYWx1ZSwgeyBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2U6IGZhbHNlIH0pO1xuICAgIH0pOyAvKiogQHR5cGUgez99ICovXG4gICAgKChcbiAgICAvLyB0b3VjaGVkXG4gICAgZGlyLnZhbHVlQWNjZXNzb3IpKS5yZWdpc3Rlck9uVG91Y2hlZChmdW5jdGlvbiAoKSB7IHJldHVybiBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTsgfSk7XG4gICAgY29udHJvbC5yZWdpc3Rlck9uQ2hhbmdlKGZ1bmN0aW9uIChuZXdWYWx1ZSwgZW1pdE1vZGVsRXZlbnQpIHtcbiAgICAgICAgKChcbiAgICAgICAgLy8gY29udHJvbCAtPiB2aWV3XG4gICAgICAgIGRpci52YWx1ZUFjY2Vzc29yKSkud3JpdGVWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgIC8vIGNvbnRyb2wgLT4gbmdNb2RlbFxuICAgICAgICBpZiAoZW1pdE1vZGVsRXZlbnQpXG4gICAgICAgICAgICBkaXIudmlld1RvTW9kZWxVcGRhdGUobmV3VmFsdWUpO1xuICAgIH0pO1xuICAgIGlmICgoKGRpci52YWx1ZUFjY2Vzc29yKSkuc2V0RGlzYWJsZWRTdGF0ZSkge1xuICAgICAgICBjb250cm9sLnJlZ2lzdGVyT25EaXNhYmxlZENoYW5nZShmdW5jdGlvbiAoaXNEaXNhYmxlZCkgeyAvKiogQHR5cGUgez99ICovICgoKChkaXIudmFsdWVBY2Nlc3NvcikpLnNldERpc2FibGVkU3RhdGUpKShpc0Rpc2FibGVkKTsgfSk7XG4gICAgfVxuICAgIC8vIHJlLXJ1biB2YWxpZGF0aW9uIHdoZW4gdmFsaWRhdG9yIGJpbmRpbmcgY2hhbmdlcywgZS5nLiBtaW5sZW5ndGg9MyAtPiBtaW5sZW5ndGg9NFxuICAgIGRpci5fcmF3VmFsaWRhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWxpZGF0b3IpIHtcbiAgICAgICAgaWYgKCgodmFsaWRhdG9yKSkucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZSlcbiAgICAgICAgICAgICgoKCh2YWxpZGF0b3IpKS5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKSkoZnVuY3Rpb24gKCkgeyByZXR1cm4gY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7IH0pO1xuICAgIH0pO1xuICAgIGRpci5fcmF3QXN5bmNWYWxpZGF0b3JzLmZvckVhY2goZnVuY3Rpb24gKHZhbGlkYXRvcikge1xuICAgICAgICBpZiAoKCh2YWxpZGF0b3IpKS5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKVxuICAgICAgICAgICAgKCgoKHZhbGlkYXRvcikpLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UpKShmdW5jdGlvbiAoKSB7IHJldHVybiBjb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTsgfSk7XG4gICAgfSk7XG59XG4vKipcbiAqIEBwYXJhbSB7P30gY29udHJvbFxuICogQHBhcmFtIHs/fSBkaXJcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIGNsZWFuVXBDb250cm9sKGNvbnRyb2wsIGRpcikge1xuICAgICgoZGlyLnZhbHVlQWNjZXNzb3IpKS5yZWdpc3Rlck9uQ2hhbmdlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9ub0NvbnRyb2xFcnJvcihkaXIpOyB9KTsgLyoqIEB0eXBlIHs/fSAqL1xuICAgICgoZGlyLnZhbHVlQWNjZXNzb3IpKS5yZWdpc3Rlck9uVG91Y2hlZChmdW5jdGlvbiAoKSB7IHJldHVybiBfbm9Db250cm9sRXJyb3IoZGlyKTsgfSk7XG4gICAgZGlyLl9yYXdWYWxpZGF0b3JzLmZvckVhY2goZnVuY3Rpb24gKHZhbGlkYXRvcikge1xuICAgICAgICBpZiAodmFsaWRhdG9yLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKG51bGwpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgZGlyLl9yYXdBc3luY1ZhbGlkYXRvcnMuZm9yRWFjaChmdW5jdGlvbiAodmFsaWRhdG9yKSB7XG4gICAgICAgIGlmICh2YWxpZGF0b3IucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZSkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UobnVsbCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoY29udHJvbClcbiAgICAgICAgY29udHJvbC5fY2xlYXJDaGFuZ2VGbnMoKTtcbn1cbi8qKlxuICogQHBhcmFtIHs/fSBjb250cm9sXG4gKiBAcGFyYW0gez99IGRpclxuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gc2V0VXBGb3JtQ29udGFpbmVyKGNvbnRyb2wsIGRpcikge1xuICAgIGlmIChjb250cm9sID09IG51bGwpXG4gICAgICAgIF90aHJvd0Vycm9yKGRpciwgJ0Nhbm5vdCBmaW5kIGNvbnRyb2wgd2l0aCcpO1xuICAgIGNvbnRyb2wudmFsaWRhdG9yID0gVmFsaWRhdG9ycy5jb21wb3NlKFtjb250cm9sLnZhbGlkYXRvciwgZGlyLnZhbGlkYXRvcl0pO1xuICAgIGNvbnRyb2wuYXN5bmNWYWxpZGF0b3IgPSBWYWxpZGF0b3JzLmNvbXBvc2VBc3luYyhbY29udHJvbC5hc3luY1ZhbGlkYXRvciwgZGlyLmFzeW5jVmFsaWRhdG9yXSk7XG59XG4vKipcbiAqIEBwYXJhbSB7P30gZGlyXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBfbm9Db250cm9sRXJyb3IoZGlyKSB7XG4gICAgcmV0dXJuIF90aHJvd0Vycm9yKGRpciwgJ1RoZXJlIGlzIG5vIEZvcm1Db250cm9sIGluc3RhbmNlIGF0dGFjaGVkIHRvIGZvcm0gY29udHJvbCBlbGVtZW50IHdpdGgnKTtcbn1cbi8qKlxuICogQHBhcmFtIHs/fSBkaXJcbiAqIEBwYXJhbSB7P30gbWVzc2FnZVxuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gX3Rocm93RXJyb3IoZGlyLCBtZXNzYWdlKSB7XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbWVzc2FnZUVuZDtcbiAgICBpZiAoKChkaXIucGF0aCkpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgbWVzc2FnZUVuZCA9IFwicGF0aDogJ1wiICsgKChkaXIucGF0aCkpLmpvaW4oJyAtPiAnKSArIFwiJ1wiO1xuICAgIH1cbiAgICBlbHNlIGlmICgoKGRpci5wYXRoKSlbMF0pIHtcbiAgICAgICAgbWVzc2FnZUVuZCA9IFwibmFtZTogJ1wiICsgZGlyLnBhdGggKyBcIidcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG1lc3NhZ2VFbmQgPSAndW5zcGVjaWZpZWQgbmFtZSBhdHRyaWJ1dGUnO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSArIFwiIFwiICsgbWVzc2FnZUVuZCk7XG59XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gY29tcG9zZVZhbGlkYXRvcnModmFsaWRhdG9ycykge1xuICAgIHJldHVybiB2YWxpZGF0b3JzICE9IG51bGwgPyBWYWxpZGF0b3JzLmNvbXBvc2UodmFsaWRhdG9ycy5tYXAobm9ybWFsaXplVmFsaWRhdG9yKSkgOiBudWxsO1xufVxuLyoqXG4gKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2VBc3luY1ZhbGlkYXRvcnModmFsaWRhdG9ycykge1xuICAgIHJldHVybiB2YWxpZGF0b3JzICE9IG51bGwgPyBWYWxpZGF0b3JzLmNvbXBvc2VBc3luYyh2YWxpZGF0b3JzLm1hcChub3JtYWxpemVBc3luY1ZhbGlkYXRvcikpIDpcbiAgICAgICAgbnVsbDtcbn1cbi8qKlxuICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gKiBAcGFyYW0gez99IHZpZXdNb2RlbFxuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gaXNQcm9wZXJ0eVVwZGF0ZWQoY2hhbmdlcywgdmlld01vZGVsKSB7XG4gICAgaWYgKCFjaGFuZ2VzLmhhc093blByb3BlcnR5KCdtb2RlbCcpKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY2hhbmdlID0gY2hhbmdlc1snbW9kZWwnXTtcbiAgICBpZiAoY2hhbmdlLmlzRmlyc3RDaGFuZ2UoKSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuICHJtWxvb3NlSWRlbnRpY2FsKHZpZXdNb2RlbCwgY2hhbmdlLmN1cnJlbnRWYWx1ZSk7XG59XG52YXIgQlVJTFRJTl9BQ0NFU1NPUlMgPSBbXG4gICAgQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgICBSYW5nZVZhbHVlQWNjZXNzb3IsXG4gICAgTnVtYmVyVmFsdWVBY2Nlc3NvcixcbiAgICBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgICBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICAgIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IsXG5dO1xuLyoqXG4gKiBAcGFyYW0gez99IHZhbHVlQWNjZXNzb3JcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIGlzQnVpbHRJbkFjY2Vzc29yKHZhbHVlQWNjZXNzb3IpIHtcbiAgICByZXR1cm4gQlVJTFRJTl9BQ0NFU1NPUlMuc29tZShmdW5jdGlvbiAoYSkgeyByZXR1cm4gdmFsdWVBY2Nlc3Nvci5jb25zdHJ1Y3RvciA9PT0gYTsgfSk7XG59XG4vKipcbiAqIEBwYXJhbSB7P30gZGlyXG4gKiBAcGFyYW0gez99IHZhbHVlQWNjZXNzb3JzXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBzZWxlY3RWYWx1ZUFjY2Vzc29yKGRpciwgdmFsdWVBY2Nlc3NvcnMpIHtcbiAgICBpZiAoIXZhbHVlQWNjZXNzb3JzKVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBkZWZhdWx0QWNjZXNzb3IgPSB1bmRlZmluZWQ7XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gYnVpbHRpbkFjY2Vzc29yID0gdW5kZWZpbmVkO1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIGN1c3RvbUFjY2Vzc29yID0gdW5kZWZpbmVkO1xuICAgIHZhbHVlQWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgaWYgKHYuY29uc3RydWN0b3IgPT09IERlZmF1bHRWYWx1ZUFjY2Vzc29yKSB7XG4gICAgICAgICAgICBkZWZhdWx0QWNjZXNzb3IgPSB2O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQnVpbHRJbkFjY2Vzc29yKHYpKSB7XG4gICAgICAgICAgICBpZiAoYnVpbHRpbkFjY2Vzc29yKVxuICAgICAgICAgICAgICAgIF90aHJvd0Vycm9yKGRpciwgJ01vcmUgdGhhbiBvbmUgYnVpbHQtaW4gdmFsdWUgYWNjZXNzb3IgbWF0Y2hlcyBmb3JtIGNvbnRyb2wgd2l0aCcpO1xuICAgICAgICAgICAgYnVpbHRpbkFjY2Vzc29yID0gdjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjdXN0b21BY2Nlc3NvcilcbiAgICAgICAgICAgICAgICBfdGhyb3dFcnJvcihkaXIsICdNb3JlIHRoYW4gb25lIGN1c3RvbSB2YWx1ZSBhY2Nlc3NvciBtYXRjaGVzIGZvcm0gY29udHJvbCB3aXRoJyk7XG4gICAgICAgICAgICBjdXN0b21BY2Nlc3NvciA9IHY7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoY3VzdG9tQWNjZXNzb3IpXG4gICAgICAgIHJldHVybiBjdXN0b21BY2Nlc3NvcjtcbiAgICBpZiAoYnVpbHRpbkFjY2Vzc29yKVxuICAgICAgICByZXR1cm4gYnVpbHRpbkFjY2Vzc29yO1xuICAgIGlmIChkZWZhdWx0QWNjZXNzb3IpXG4gICAgICAgIHJldHVybiBkZWZhdWx0QWNjZXNzb3I7XG4gICAgX3Rocm93RXJyb3IoZGlyLCAnTm8gdmFsaWQgdmFsdWUgYWNjZXNzb3IgZm9yIGZvcm0gY29udHJvbCB3aXRoJyk7XG4gICAgcmV0dXJuIG51bGw7XG59XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKipcbiAqIFRoaXMgaXMgYSBiYXNlIGNsYXNzIGZvciBjb2RlIHNoYXJlZCBiZXR3ZWVuIHtcXEBsaW5rIE5nTW9kZWxHcm91cH0gYW5kIHtcXEBsaW5rIEZvcm1Hcm91cE5hbWV9LlxuICpcbiAqIFxcQHN0YWJsZVxuICovXG52YXIgQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9jaGVja1BhcmVudFR5cGUoKTsgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICAoKHRoaXMuZm9ybURpcmVjdGl2ZSkpLmFkZEZvcm1Hcm91cCh0aGlzKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5mb3JtRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVtb3ZlRm9ybUdyb3VwKHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLCBcImNvbnRyb2xcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSB7XFxAbGluayBGb3JtR3JvdXB9IGJhY2tpbmcgdGhpcyBiaW5kaW5nLlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAoKHRoaXMuZm9ybURpcmVjdGl2ZSkpLmdldEZvcm1Hcm91cCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJwYXRoXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgcGF0aCB0byB0aGlzIGNvbnRyb2wgZ3JvdXAuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbnRyb2xQYXRoKHRoaXMubmFtZSwgdGhpcy5fcGFyZW50KTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJmb3JtRGlyZWN0aXZlXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUge1xcQGxpbmsgRm9ybX0gdG8gd2hpY2ggdGhpcyBncm91cCBiZWxvbmdzLlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9wYXJlbnQgPyB0aGlzLl9wYXJlbnQuZm9ybURpcmVjdGl2ZSA6IG51bGw7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUsIFwidmFsaWRhdG9yXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbXBvc2VWYWxpZGF0b3JzKHRoaXMuX3ZhbGlkYXRvcnMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLCBcImFzeW5jVmFsaWRhdG9yXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wb3NlQXN5bmNWYWxpZGF0b3JzKHRoaXMuX2FzeW5jVmFsaWRhdG9ycyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIFxcQGludGVybmFsXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuX2NoZWNrUGFyZW50VHlwZSA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICByZXR1cm4gQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmU7XG59KENvbnRyb2xDb250YWluZXIpKTtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbnZhciBBYnN0cmFjdENvbnRyb2xTdGF0dXMgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gY2RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBBYnN0cmFjdENvbnRyb2xTdGF0dXMoY2QpIHtcbiAgICAgICAgdGhpcy5fY2QgPSBjZDtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbFN0YXR1cy5wcm90b3R5cGUsIFwibmdDbGFzc1VudG91Y2hlZFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9jZC5jb250cm9sID8gdGhpcy5fY2QuY29udHJvbC51bnRvdWNoZWQgOiBmYWxzZTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbFN0YXR1cy5wcm90b3R5cGUsIFwibmdDbGFzc1RvdWNoZWRcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fY2QuY29udHJvbCA/IHRoaXMuX2NkLmNvbnRyb2wudG91Y2hlZCA6IGZhbHNlOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sU3RhdHVzLnByb3RvdHlwZSwgXCJuZ0NsYXNzUHJpc3RpbmVcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fY2QuY29udHJvbCA/IHRoaXMuX2NkLmNvbnRyb2wucHJpc3RpbmUgOiBmYWxzZTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbFN0YXR1cy5wcm90b3R5cGUsIFwibmdDbGFzc0RpcnR5XCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2NkLmNvbnRyb2wgPyB0aGlzLl9jZC5jb250cm9sLmRpcnR5IDogZmFsc2U7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xTdGF0dXMucHJvdG90eXBlLCBcIm5nQ2xhc3NWYWxpZFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9jZC5jb250cm9sID8gdGhpcy5fY2QuY29udHJvbC52YWxpZCA6IGZhbHNlOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sU3RhdHVzLnByb3RvdHlwZSwgXCJuZ0NsYXNzSW52YWxpZFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9jZC5jb250cm9sID8gdGhpcy5fY2QuY29udHJvbC5pbnZhbGlkIDogZmFsc2U7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xTdGF0dXMucHJvdG90eXBlLCBcIm5nQ2xhc3NQZW5kaW5nXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2NkLmNvbnRyb2wgPyB0aGlzLl9jZC5jb250cm9sLnBlbmRpbmcgOiBmYWxzZTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIEFic3RyYWN0Q29udHJvbFN0YXR1cztcbn0oKSk7XG52YXIgbmdDb250cm9sU3RhdHVzSG9zdCA9IHtcbiAgICAnW2NsYXNzLm5nLXVudG91Y2hlZF0nOiAnbmdDbGFzc1VudG91Y2hlZCcsXG4gICAgJ1tjbGFzcy5uZy10b3VjaGVkXSc6ICduZ0NsYXNzVG91Y2hlZCcsXG4gICAgJ1tjbGFzcy5uZy1wcmlzdGluZV0nOiAnbmdDbGFzc1ByaXN0aW5lJyxcbiAgICAnW2NsYXNzLm5nLWRpcnR5XSc6ICduZ0NsYXNzRGlydHknLFxuICAgICdbY2xhc3MubmctdmFsaWRdJzogJ25nQ2xhc3NWYWxpZCcsXG4gICAgJ1tjbGFzcy5uZy1pbnZhbGlkXSc6ICduZ0NsYXNzSW52YWxpZCcsXG4gICAgJ1tjbGFzcy5uZy1wZW5kaW5nXSc6ICduZ0NsYXNzUGVuZGluZycsXG59O1xuLyoqXG4gKiBEaXJlY3RpdmUgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIEFuZ3VsYXIgZm9ybSBjb250cm9scyB0aGF0IHNldHMgQ1NTIGNsYXNzZXNcbiAqIGJhc2VkIG9uIGNvbnRyb2wgc3RhdHVzICh2YWxpZC9pbnZhbGlkL2RpcnR5L2V0YykuXG4gKlxuICogXFxAc3RhYmxlXG4gKi9cbnZhciBOZ0NvbnRyb2xTdGF0dXMgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE5nQ29udHJvbFN0YXR1cywgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGNkXG4gICAgICovXG4gICAgZnVuY3Rpb24gTmdDb250cm9sU3RhdHVzKGNkKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBjZCkgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIE5nQ29udHJvbFN0YXR1cztcbn0oQWJzdHJhY3RDb250cm9sU3RhdHVzKSk7XG5OZ0NvbnRyb2xTdGF0dXMuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3sgc2VsZWN0b3I6ICdbZm9ybUNvbnRyb2xOYW1lXSxbbmdNb2RlbF0sW2Zvcm1Db250cm9sXScsIGhvc3Q6IG5nQ29udHJvbFN0YXR1c0hvc3QgfSxdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5OZ0NvbnRyb2xTdGF0dXMuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgeyB0eXBlOiBOZ0NvbnRyb2wsIGRlY29yYXRvcnM6IFt7IHR5cGU6IFNlbGYgfSxdIH0sXG5dOyB9O1xuLyoqXG4gKiBEaXJlY3RpdmUgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIEFuZ3VsYXIgZm9ybSBncm91cHMgdGhhdCBzZXRzIENTUyBjbGFzc2VzXG4gKiBiYXNlZCBvbiBjb250cm9sIHN0YXR1cyAodmFsaWQvaW52YWxpZC9kaXJ0eS9ldGMpLlxuICpcbiAqIFxcQHN0YWJsZVxuICovXG52YXIgTmdDb250cm9sU3RhdHVzR3JvdXAgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE5nQ29udHJvbFN0YXR1c0dyb3VwLCBfc3VwZXIpO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gY2RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBOZ0NvbnRyb2xTdGF0dXNHcm91cChjZCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgY2QpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBOZ0NvbnRyb2xTdGF0dXNHcm91cDtcbn0oQWJzdHJhY3RDb250cm9sU3RhdHVzKSk7XG5OZ0NvbnRyb2xTdGF0dXNHcm91cC5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnW2Zvcm1Hcm91cE5hbWVdLFtmb3JtQXJyYXlOYW1lXSxbbmdNb2RlbEdyb3VwXSxbZm9ybUdyb3VwXSxmb3JtOm5vdChbbmdOb0Zvcm1dKSxbbmdGb3JtXScsXG4gICAgICAgICAgICAgICAgaG9zdDogbmdDb250cm9sU3RhdHVzSG9zdFxuICAgICAgICAgICAgfSxdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5OZ0NvbnRyb2xTdGF0dXNHcm91cC5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICB7IHR5cGU6IENvbnRyb2xDb250YWluZXIsIGRlY29yYXRvcnM6IFt7IHR5cGU6IFNlbGYgfSxdIH0sXG5dOyB9O1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBJbmRpY2F0ZXMgdGhhdCBhIEZvcm1Db250cm9sIGlzIHZhbGlkLCBpLmUuIHRoYXQgbm8gZXJyb3JzIGV4aXN0IGluIHRoZSBpbnB1dCB2YWx1ZS5cbiAqL1xudmFyIFZBTElEID0gJ1ZBTElEJztcbi8qKlxuICogSW5kaWNhdGVzIHRoYXQgYSBGb3JtQ29udHJvbCBpcyBpbnZhbGlkLCBpLmUuIHRoYXQgYW4gZXJyb3IgZXhpc3RzIGluIHRoZSBpbnB1dCB2YWx1ZS5cbiAqL1xudmFyIElOVkFMSUQgPSAnSU5WQUxJRCc7XG4vKipcbiAqIEluZGljYXRlcyB0aGF0IGEgRm9ybUNvbnRyb2wgaXMgcGVuZGluZywgaS5lLiB0aGF0IGFzeW5jIHZhbGlkYXRpb24gaXMgb2NjdXJyaW5nIGFuZFxuICogZXJyb3JzIGFyZSBub3QgeWV0IGF2YWlsYWJsZSBmb3IgdGhlIGlucHV0IHZhbHVlLlxuICovXG52YXIgUEVORElORyA9ICdQRU5ESU5HJztcbi8qKlxuICogSW5kaWNhdGVzIHRoYXQgYSBGb3JtQ29udHJvbCBpcyBkaXNhYmxlZCwgaS5lLiB0aGF0IHRoZSBjb250cm9sIGlzIGV4ZW1wdCBmcm9tIGFuY2VzdG9yXG4gKiBjYWxjdWxhdGlvbnMgb2YgdmFsaWRpdHkgb3IgdmFsdWUuXG4gKi9cbnZhciBESVNBQkxFRCA9ICdESVNBQkxFRCc7XG4vKipcbiAqIEBwYXJhbSB7P30gY29udHJvbFxuICogQHBhcmFtIHs/fSBwYXRoXG4gKiBAcGFyYW0gez99IGRlbGltaXRlclxuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gX2ZpbmQoY29udHJvbCwgcGF0aCwgZGVsaW1pdGVyKSB7XG4gICAgaWYgKHBhdGggPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgaWYgKCEocGF0aCBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgICBwYXRoID0gKChwYXRoKSkuc3BsaXQoZGVsaW1pdGVyKTtcbiAgICB9XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBBcnJheSAmJiAocGF0aC5sZW5ndGggPT09IDApKVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gKChwYXRoKSkucmVkdWNlKGZ1bmN0aW9uICh2LCBuYW1lKSB7XG4gICAgICAgIGlmICh2IGluc3RhbmNlb2YgRm9ybUdyb3VwKSB7XG4gICAgICAgICAgICByZXR1cm4gdi5jb250cm9sc1tuYW1lXSB8fCBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2IGluc3RhbmNlb2YgRm9ybUFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gdi5hdCgvKiogQHR5cGUgez99ICovIChuYW1lKSkgfHwgbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LCBjb250cm9sKTtcbn1cbi8qKlxuICogQHBhcmFtIHs/PX0gdmFsaWRhdG9yXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBjb2VyY2VUb1ZhbGlkYXRvcih2YWxpZGF0b3IpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWxpZGF0b3IpID8gY29tcG9zZVZhbGlkYXRvcnModmFsaWRhdG9yKSA6IHZhbGlkYXRvciB8fCBudWxsO1xufVxuLyoqXG4gKiBAcGFyYW0gez89fSBhc3luY1ZhbGlkYXRvclxuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gY29lcmNlVG9Bc3luY1ZhbGlkYXRvcihhc3luY1ZhbGlkYXRvcikge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGFzeW5jVmFsaWRhdG9yKSA/IGNvbXBvc2VBc3luY1ZhbGlkYXRvcnMoYXN5bmNWYWxpZGF0b3IpIDpcbiAgICAgICAgYXN5bmNWYWxpZGF0b3IgfHwgbnVsbDtcbn1cbi8qKlxuICogXFxAd2hhdEl0RG9lcyBUaGlzIGlzIHRoZSBiYXNlIGNsYXNzIGZvciB7XFxAbGluayBGb3JtQ29udHJvbH0sIHtcXEBsaW5rIEZvcm1Hcm91cH0sIGFuZFxuICoge1xcQGxpbmsgRm9ybUFycmF5fS5cbiAqXG4gKiBJdCBwcm92aWRlcyBzb21lIG9mIHRoZSBzaGFyZWQgYmVoYXZpb3IgdGhhdCBhbGwgY29udHJvbHMgYW5kIGdyb3VwcyBvZiBjb250cm9scyBoYXZlLCBsaWtlXG4gKiBydW5uaW5nIHZhbGlkYXRvcnMsIGNhbGN1bGF0aW5nIHN0YXR1cywgYW5kIHJlc2V0dGluZyBzdGF0ZS4gSXQgYWxzbyBkZWZpbmVzIHRoZSBwcm9wZXJ0aWVzXG4gKiB0aGF0IGFyZSBzaGFyZWQgYmV0d2VlbiBhbGwgc3ViLWNsYXNzZXMsIGxpa2UgYHZhbHVlYCwgYHZhbGlkYCwgYW5kIGBkaXJ0eWAuIEl0IHNob3VsZG4ndCBiZVxuICogaW5zdGFudGlhdGVkIGRpcmVjdGx5LlxuICpcbiAqIFxcQHN0YWJsZVxuICogQGFic3RyYWN0XG4gKi9cbnZhciBBYnN0cmFjdENvbnRyb2wgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIHs/fSBhc3luY1ZhbGlkYXRvclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEFic3RyYWN0Q29udHJvbCh2YWxpZGF0b3IsIGFzeW5jVmFsaWRhdG9yKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gdmFsaWRhdG9yO1xuICAgICAgICB0aGlzLmFzeW5jVmFsaWRhdG9yID0gYXN5bmNWYWxpZGF0b3I7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICB0aGlzLl9wcmlzdGluZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX3RvdWNoZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9vbkRpc2FibGVkQ2hhbmdlID0gW107XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcInZhbHVlXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbC5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fdmFsdWU7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcInBhcmVudFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcGFyZW50IGNvbnRyb2wuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3BhcmVudDsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwic3RhdHVzXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB2YWxpZGF0aW9uIHN0YXR1cyBvZiB0aGUgY29udHJvbC4gVGhlcmUgYXJlIGZvdXIgcG9zc2libGVcbiAgICAgICAgICogdmFsaWRhdGlvbiBzdGF0dXNlczpcbiAgICAgICAgICpcbiAgICAgICAgICogKiAqKlZBTElEKio6ICBjb250cm9sIGhhcyBwYXNzZWQgYWxsIHZhbGlkYXRpb24gY2hlY2tzXG4gICAgICAgICAqICogKipJTlZBTElEKio6IGNvbnRyb2wgaGFzIGZhaWxlZCBhdCBsZWFzdCBvbmUgdmFsaWRhdGlvbiBjaGVja1xuICAgICAgICAgKiAqICoqUEVORElORyoqOiBjb250cm9sIGlzIGluIHRoZSBtaWRzdCBvZiBjb25kdWN0aW5nIGEgdmFsaWRhdGlvbiBjaGVja1xuICAgICAgICAgKiAqICoqRElTQUJMRUQqKjogY29udHJvbCBpcyBleGVtcHQgZnJvbSB2YWxpZGF0aW9uIGNoZWNrc1xuICAgICAgICAgKlxuICAgICAgICAgKiBUaGVzZSBzdGF0dXNlcyBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlLCBzbyBhIGNvbnRyb2wgY2Fubm90IGJlXG4gICAgICAgICAqIGJvdGggdmFsaWQgQU5EIGludmFsaWQgb3IgaW52YWxpZCBBTkQgZGlzYWJsZWQuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3N0YXR1czsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwidmFsaWRcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBjb250cm9sIGlzIGB2YWxpZGAgd2hlbiBpdHMgYHN0YXR1cyA9PT0gVkFMSURgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJbiBvcmRlciB0byBoYXZlIHRoaXMgc3RhdHVzLCB0aGUgY29udHJvbCBtdXN0IGhhdmUgcGFzc2VkIGFsbCBpdHNcbiAgICAgICAgICogdmFsaWRhdGlvbiBjaGVja3MuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3N0YXR1cyA9PT0gVkFMSUQ7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcImludmFsaWRcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBjb250cm9sIGlzIGBpbnZhbGlkYCB3aGVuIGl0cyBgc3RhdHVzID09PSBJTlZBTElEYC5cbiAgICAgICAgICpcbiAgICAgICAgICogSW4gb3JkZXIgdG8gaGF2ZSB0aGlzIHN0YXR1cywgdGhlIGNvbnRyb2wgbXVzdCBoYXZlIGZhaWxlZFxuICAgICAgICAgKiBhdCBsZWFzdCBvbmUgb2YgaXRzIHZhbGlkYXRpb24gY2hlY2tzLlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9zdGF0dXMgPT09IElOVkFMSUQ7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcInBlbmRpbmdcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBjb250cm9sIGlzIGBwZW5kaW5nYCB3aGVuIGl0cyBgc3RhdHVzID09PSBQRU5ESU5HYC5cbiAgICAgICAgICpcbiAgICAgICAgICogSW4gb3JkZXIgdG8gaGF2ZSB0aGlzIHN0YXR1cywgdGhlIGNvbnRyb2wgbXVzdCBiZSBpbiB0aGVcbiAgICAgICAgICogbWlkZGxlIG9mIGNvbmR1Y3RpbmcgYSB2YWxpZGF0aW9uIGNoZWNrLlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9zdGF0dXMgPT0gUEVORElORzsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwiZGlzYWJsZWRcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBjb250cm9sIGlzIGBkaXNhYmxlZGAgd2hlbiBpdHMgYHN0YXR1cyA9PT0gRElTQUJMRURgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBEaXNhYmxlZCBjb250cm9scyBhcmUgZXhlbXB0IGZyb20gdmFsaWRhdGlvbiBjaGVja3MgYW5kXG4gICAgICAgICAqIGFyZSBub3QgaW5jbHVkZWQgaW4gdGhlIGFnZ3JlZ2F0ZSB2YWx1ZSBvZiB0aGVpciBhbmNlc3RvclxuICAgICAgICAgKiBjb250cm9scy5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fc3RhdHVzID09PSBESVNBQkxFRDsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwiZW5hYmxlZFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGNvbnRyb2wgaXMgYGVuYWJsZWRgIGFzIGxvbmcgYXMgaXRzIGBzdGF0dXMgIT09IERJU0FCTEVEYC5cbiAgICAgICAgICpcbiAgICAgICAgICogSW4gb3RoZXIgd29yZHMsIGl0IGhhcyBhIHN0YXR1cyBvZiBgVkFMSURgLCBgSU5WQUxJRGAsIG9yXG4gICAgICAgICAqIGBQRU5ESU5HYC5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fc3RhdHVzICE9PSBESVNBQkxFRDsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwiZXJyb3JzXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYW55IGVycm9ycyBnZW5lcmF0ZWQgYnkgZmFpbGluZyB2YWxpZGF0aW9uLiBJZiB0aGVyZVxuICAgICAgICAgKiBhcmUgbm8gZXJyb3JzLCBpdCB3aWxsIHJldHVybiBudWxsLlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9lcnJvcnM7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcInByaXN0aW5lXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgY29udHJvbCBpcyBgcHJpc3RpbmVgIGlmIHRoZSB1c2VyIGhhcyBub3QgeWV0IGNoYW5nZWRcbiAgICAgICAgICogdGhlIHZhbHVlIGluIHRoZSBVSS5cbiAgICAgICAgICpcbiAgICAgICAgICogTm90ZSB0aGF0IHByb2dyYW1tYXRpYyBjaGFuZ2VzIHRvIGEgY29udHJvbCdzIHZhbHVlIHdpbGxcbiAgICAgICAgICogKm5vdCogbWFyayBpdCBkaXJ0eS5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcHJpc3RpbmU7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcImRpcnR5XCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgY29udHJvbCBpcyBgZGlydHlgIGlmIHRoZSB1c2VyIGhhcyBjaGFuZ2VkIHRoZSB2YWx1ZVxuICAgICAgICAgKiBpbiB0aGUgVUkuXG4gICAgICAgICAqXG4gICAgICAgICAqIE5vdGUgdGhhdCBwcm9ncmFtbWF0aWMgY2hhbmdlcyB0byBhIGNvbnRyb2wncyB2YWx1ZSB3aWxsXG4gICAgICAgICAqICpub3QqIG1hcmsgaXQgZGlydHkuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICF0aGlzLnByaXN0aW5lOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZSwgXCJ0b3VjaGVkXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgY29udHJvbCBpcyBtYXJrZWQgYHRvdWNoZWRgIG9uY2UgdGhlIHVzZXIgaGFzIHRyaWdnZXJlZFxuICAgICAgICAgKiBhIGBibHVyYCBldmVudCBvbiBpdC5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fdG91Y2hlZDsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwidW50b3VjaGVkXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgY29udHJvbCBpcyBgdW50b3VjaGVkYCBpZiB0aGUgdXNlciBoYXMgbm90IHlldCB0cmlnZ2VyZWRcbiAgICAgICAgICogYSBgYmx1cmAgZXZlbnQgb24gaXQuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICF0aGlzLl90b3VjaGVkOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZSwgXCJ2YWx1ZUNoYW5nZXNcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogRW1pdHMgYW4gZXZlbnQgZXZlcnkgdGltZSB0aGUgdmFsdWUgb2YgdGhlIGNvbnRyb2wgY2hhbmdlcywgaW5cbiAgICAgICAgICogdGhlIFVJIG9yIHByb2dyYW1tYXRpY2FsbHkuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3ZhbHVlQ2hhbmdlczsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwic3RhdHVzQ2hhbmdlc1wiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbWl0cyBhbiBldmVudCBldmVyeSB0aW1lIHRoZSB2YWxpZGF0aW9uIHN0YXR1cyBvZiB0aGUgY29udHJvbFxuICAgICAgICAgKiBpcyByZS1jYWxjdWxhdGVkLlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9zdGF0dXNDaGFuZ2VzOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBzeW5jaHJvbm91cyB2YWxpZGF0b3JzIHRoYXQgYXJlIGFjdGl2ZSBvbiB0aGlzIGNvbnRyb2wuICBDYWxsaW5nXG4gICAgICogdGhpcyB3aWxsIG92ZXJ3cml0ZSBhbnkgZXhpc3Rpbmcgc3luYyB2YWxpZGF0b3JzLlxuICAgICAqIEBwYXJhbSB7P30gbmV3VmFsaWRhdG9yXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLnNldFZhbGlkYXRvcnMgPSBmdW5jdGlvbiAobmV3VmFsaWRhdG9yKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gY29lcmNlVG9WYWxpZGF0b3IobmV3VmFsaWRhdG9yKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGFzeW5jIHZhbGlkYXRvcnMgdGhhdCBhcmUgYWN0aXZlIG9uIHRoaXMgY29udHJvbC4gQ2FsbGluZyB0aGlzXG4gICAgICogd2lsbCBvdmVyd3JpdGUgYW55IGV4aXN0aW5nIGFzeW5jIHZhbGlkYXRvcnMuXG4gICAgICogQHBhcmFtIHs/fSBuZXdWYWxpZGF0b3JcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuc2V0QXN5bmNWYWxpZGF0b3JzID0gZnVuY3Rpb24gKG5ld1ZhbGlkYXRvcikge1xuICAgICAgICB0aGlzLmFzeW5jVmFsaWRhdG9yID0gY29lcmNlVG9Bc3luY1ZhbGlkYXRvcihuZXdWYWxpZGF0b3IpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRW1wdGllcyBvdXQgdGhlIHN5bmMgdmFsaWRhdG9yIGxpc3QuXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLmNsZWFyVmFsaWRhdG9ycyA9IGZ1bmN0aW9uICgpIHsgdGhpcy52YWxpZGF0b3IgPSBudWxsOyB9O1xuICAgIC8qKlxuICAgICAqIEVtcHRpZXMgb3V0IHRoZSBhc3luYyB2YWxpZGF0b3IgbGlzdC5cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuY2xlYXJBc3luY1ZhbGlkYXRvcnMgPSBmdW5jdGlvbiAoKSB7IHRoaXMuYXN5bmNWYWxpZGF0b3IgPSBudWxsOyB9O1xuICAgIC8qKlxuICAgICAqIE1hcmtzIHRoZSBjb250cm9sIGFzIGB0b3VjaGVkYC5cbiAgICAgKlxuICAgICAqIFRoaXMgd2lsbCBhbHNvIG1hcmsgYWxsIGRpcmVjdCBhbmNlc3RvcnMgYXMgYHRvdWNoZWRgIHRvIG1haW50YWluXG4gICAgICogdGhlIG1vZGVsLlxuICAgICAqIEBwYXJhbSB7Pz19IG9wdHNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUubWFya0FzVG91Y2hlZCA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsgb3B0cyA9IHt9OyB9XG4gICAgICAgIHRoaXMuX3RvdWNoZWQgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5fcGFyZW50ICYmICFvcHRzLm9ubHlTZWxmKSB7XG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQubWFya0FzVG91Y2hlZChvcHRzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogTWFya3MgdGhlIGNvbnRyb2wgYXMgYHVudG91Y2hlZGAuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgY29udHJvbCBoYXMgYW55IGNoaWxkcmVuLCBpdCB3aWxsIGFsc28gbWFyayBhbGwgY2hpbGRyZW4gYXMgYHVudG91Y2hlZGBcbiAgICAgKiB0byBtYWludGFpbiB0aGUgbW9kZWwsIGFuZCByZS1jYWxjdWxhdGUgdGhlIGB0b3VjaGVkYCBzdGF0dXMgb2YgYWxsIHBhcmVudFxuICAgICAqIGNvbnRyb2xzLlxuICAgICAqIEBwYXJhbSB7Pz19IG9wdHNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUubWFya0FzVW50b3VjaGVkID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0ge307IH1cbiAgICAgICAgdGhpcy5fdG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoZnVuY3Rpb24gKGNvbnRyb2wpIHsgY29udHJvbC5tYXJrQXNVbnRvdWNoZWQoeyBvbmx5U2VsZjogdHJ1ZSB9KTsgfSk7XG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQgJiYgIW9wdHMub25seVNlbGYpIHtcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudC5fdXBkYXRlVG91Y2hlZChvcHRzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogTWFya3MgdGhlIGNvbnRyb2wgYXMgYGRpcnR5YC5cbiAgICAgKlxuICAgICAqIFRoaXMgd2lsbCBhbHNvIG1hcmsgYWxsIGRpcmVjdCBhbmNlc3RvcnMgYXMgYGRpcnR5YCB0byBtYWludGFpblxuICAgICAqIHRoZSBtb2RlbC5cbiAgICAgKiBAcGFyYW0gez89fSBvcHRzXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLm1hcmtBc0RpcnR5ID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0ge307IH1cbiAgICAgICAgdGhpcy5fcHJpc3RpbmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudCAmJiAhb3B0cy5vbmx5U2VsZikge1xuICAgICAgICAgICAgdGhpcy5fcGFyZW50Lm1hcmtBc0RpcnR5KG9wdHMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNYXJrcyB0aGUgY29udHJvbCBhcyBgcHJpc3RpbmVgLlxuICAgICAqXG4gICAgICogSWYgdGhlIGNvbnRyb2wgaGFzIGFueSBjaGlsZHJlbiwgaXQgd2lsbCBhbHNvIG1hcmsgYWxsIGNoaWxkcmVuIGFzIGBwcmlzdGluZWBcbiAgICAgKiB0byBtYWludGFpbiB0aGUgbW9kZWwsIGFuZCByZS1jYWxjdWxhdGUgdGhlIGBwcmlzdGluZWAgc3RhdHVzIG9mIGFsbCBwYXJlbnRcbiAgICAgKiBjb250cm9scy5cbiAgICAgKiBAcGFyYW0gez89fSBvcHRzXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLm1hcmtBc1ByaXN0aW5lID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0ge307IH1cbiAgICAgICAgdGhpcy5fcHJpc3RpbmUgPSB0cnVlO1xuICAgICAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoZnVuY3Rpb24gKGNvbnRyb2wpIHsgY29udHJvbC5tYXJrQXNQcmlzdGluZSh7IG9ubHlTZWxmOiB0cnVlIH0pOyB9KTtcbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudCAmJiAhb3B0cy5vbmx5U2VsZikge1xuICAgICAgICAgICAgdGhpcy5fcGFyZW50Ll91cGRhdGVQcmlzdGluZShvcHRzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogTWFya3MgdGhlIGNvbnRyb2wgYXMgYHBlbmRpbmdgLlxuICAgICAqIEBwYXJhbSB7Pz19IG9wdHNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUubWFya0FzUGVuZGluZyA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsgb3B0cyA9IHt9OyB9XG4gICAgICAgIHRoaXMuX3N0YXR1cyA9IFBFTkRJTkc7XG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQgJiYgIW9wdHMub25seVNlbGYpIHtcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudC5tYXJrQXNQZW5kaW5nKG9wdHMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEaXNhYmxlcyB0aGUgY29udHJvbC4gVGhpcyBtZWFucyB0aGUgY29udHJvbCB3aWxsIGJlIGV4ZW1wdCBmcm9tIHZhbGlkYXRpb24gY2hlY2tzIGFuZFxuICAgICAqIGV4Y2x1ZGVkIGZyb20gdGhlIGFnZ3JlZ2F0ZSB2YWx1ZSBvZiBhbnkgcGFyZW50LiBJdHMgc3RhdHVzIGlzIGBESVNBQkxFRGAuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgY29udHJvbCBoYXMgY2hpbGRyZW4sIGFsbCBjaGlsZHJlbiB3aWxsIGJlIGRpc2FibGVkIHRvIG1haW50YWluIHRoZSBtb2RlbC5cbiAgICAgKiBAcGFyYW0gez89fSBvcHRzXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbiAob3B0cykge1xuICAgICAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7IG9wdHMgPSB7fTsgfVxuICAgICAgICB0aGlzLl9zdGF0dXMgPSBESVNBQkxFRDtcbiAgICAgICAgdGhpcy5fZXJyb3JzID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjb250cm9sKSB7IGNvbnRyb2wuZGlzYWJsZSh7IG9ubHlTZWxmOiB0cnVlIH0pOyB9KTtcbiAgICAgICAgdGhpcy5fdXBkYXRlVmFsdWUoKTtcbiAgICAgICAgaWYgKG9wdHMuZW1pdEV2ZW50ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5fdmFsdWVDaGFuZ2VzLmVtaXQodGhpcy5fdmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5fc3RhdHVzQ2hhbmdlcy5lbWl0KHRoaXMuX3N0YXR1cyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdXBkYXRlQW5jZXN0b3JzKCEhb3B0cy5vbmx5U2VsZik7XG4gICAgICAgIHRoaXMuX29uRGlzYWJsZWRDaGFuZ2UuZm9yRWFjaChmdW5jdGlvbiAoY2hhbmdlRm4pIHsgcmV0dXJuIGNoYW5nZUZuKHRydWUpOyB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEVuYWJsZXMgdGhlIGNvbnRyb2wuIFRoaXMgbWVhbnMgdGhlIGNvbnRyb2wgd2lsbCBiZSBpbmNsdWRlZCBpbiB2YWxpZGF0aW9uIGNoZWNrcyBhbmRcbiAgICAgKiB0aGUgYWdncmVnYXRlIHZhbHVlIG9mIGl0cyBwYXJlbnQuIEl0cyBzdGF0dXMgaXMgcmUtY2FsY3VsYXRlZCBiYXNlZCBvbiBpdHMgdmFsdWUgYW5kXG4gICAgICogaXRzIHZhbGlkYXRvcnMuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgY29udHJvbCBoYXMgY2hpbGRyZW4sIGFsbCBjaGlsZHJlbiB3aWxsIGJlIGVuYWJsZWQuXG4gICAgICogQHBhcmFtIHs/PX0gb3B0c1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAob3B0cykge1xuICAgICAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7IG9wdHMgPSB7fTsgfVxuICAgICAgICB0aGlzLl9zdGF0dXMgPSBWQUxJRDtcbiAgICAgICAgdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjb250cm9sKSB7IGNvbnRyb2wuZW5hYmxlKHsgb25seVNlbGY6IHRydWUgfSk7IH0pO1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBvcHRzLmVtaXRFdmVudCB9KTtcbiAgICAgICAgdGhpcy5fdXBkYXRlQW5jZXN0b3JzKCEhb3B0cy5vbmx5U2VsZik7XG4gICAgICAgIHRoaXMuX29uRGlzYWJsZWRDaGFuZ2UuZm9yRWFjaChmdW5jdGlvbiAoY2hhbmdlRm4pIHsgcmV0dXJuIGNoYW5nZUZuKGZhbHNlKTsgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IG9ubHlTZWxmXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl91cGRhdGVBbmNlc3RvcnMgPSBmdW5jdGlvbiAob25seVNlbGYpIHtcbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudCAmJiAhb25seVNlbGYpIHtcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQuX3VwZGF0ZVByaXN0aW5lKCk7XG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQuX3VwZGF0ZVRvdWNoZWQoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBwYXJlbnRcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuc2V0UGFyZW50ID0gZnVuY3Rpb24gKHBhcmVudCkgeyB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7IH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIGNvbnRyb2wuIEFic3RyYWN0IG1ldGhvZCAoaW1wbGVtZW50ZWQgaW4gc3ViLWNsYXNzZXMpLlxuICAgICAqIEBhYnN0cmFjdFxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcGFyYW0gez89fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zKSB7IH07XG4gICAgLyoqXG4gICAgICogUGF0Y2hlcyB0aGUgdmFsdWUgb2YgdGhlIGNvbnRyb2wuIEFic3RyYWN0IG1ldGhvZCAoaW1wbGVtZW50ZWQgaW4gc3ViLWNsYXNzZXMpLlxuICAgICAqIEBhYnN0cmFjdFxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcGFyYW0gez89fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLnBhdGNoVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIG9wdGlvbnMpIHsgfTtcbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIGNvbnRyb2wuIEFic3RyYWN0IG1ldGhvZCAoaW1wbGVtZW50ZWQgaW4gc3ViLWNsYXNzZXMpLlxuICAgICAqIEBhYnN0cmFjdFxuICAgICAqIEBwYXJhbSB7Pz19IHZhbHVlXG4gICAgICogQHBhcmFtIHs/PX0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICh2YWx1ZSwgb3B0aW9ucykgeyB9O1xuICAgIC8qKlxuICAgICAqIFJlLWNhbGN1bGF0ZXMgdGhlIHZhbHVlIGFuZCB2YWxpZGF0aW9uIHN0YXR1cyBvZiB0aGUgY29udHJvbC5cbiAgICAgKlxuICAgICAqIEJ5IGRlZmF1bHQsIGl0IHdpbGwgYWxzbyB1cGRhdGUgdGhlIHZhbHVlIGFuZCB2YWxpZGl0eSBvZiBpdHMgYW5jZXN0b3JzLlxuICAgICAqIEBwYXJhbSB7Pz19IG9wdHNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsgb3B0cyA9IHt9OyB9XG4gICAgICAgIHRoaXMuX3NldEluaXRpYWxTdGF0dXMoKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlVmFsdWUoKTtcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5fY2FuY2VsRXhpc3RpbmdTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuX2Vycm9ycyA9IHRoaXMuX3J1blZhbGlkYXRvcigpO1xuICAgICAgICAgICAgdGhpcy5fc3RhdHVzID0gdGhpcy5fY2FsY3VsYXRlU3RhdHVzKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fc3RhdHVzID09PSBWQUxJRCB8fCB0aGlzLl9zdGF0dXMgPT09IFBFTkRJTkcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ydW5Bc3luY1ZhbGlkYXRvcihvcHRzLmVtaXRFdmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdHMuZW1pdEV2ZW50ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5fdmFsdWVDaGFuZ2VzLmVtaXQodGhpcy5fdmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5fc3RhdHVzQ2hhbmdlcy5lbWl0KHRoaXMuX3N0YXR1cyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudCAmJiAhb3B0cy5vbmx5U2VsZikge1xuICAgICAgICAgICAgdGhpcy5fcGFyZW50LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob3B0cyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFxcQGludGVybmFsXG4gICAgICogQHBhcmFtIHs/PX0gb3B0c1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fdXBkYXRlVHJlZVZhbGlkaXR5ID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0geyBlbWl0RXZlbnQ6IHRydWUgfTsgfVxuICAgICAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoZnVuY3Rpb24gKGN0cmwpIHsgcmV0dXJuIGN0cmwuX3VwZGF0ZVRyZWVWYWxpZGl0eShvcHRzKTsgfSk7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IG9ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IG9wdHMuZW1pdEV2ZW50IH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl9zZXRJbml0aWFsU3RhdHVzID0gZnVuY3Rpb24gKCkgeyB0aGlzLl9zdGF0dXMgPSB0aGlzLl9hbGxDb250cm9sc0Rpc2FibGVkKCkgPyBESVNBQkxFRCA6IFZBTElEOyB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fcnVuVmFsaWRhdG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IgPyB0aGlzLnZhbGlkYXRvcih0aGlzKSA6IG51bGw7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez89fSBlbWl0RXZlbnRcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX3J1bkFzeW5jVmFsaWRhdG9yID0gZnVuY3Rpb24gKGVtaXRFdmVudCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5hc3luY1ZhbGlkYXRvcikge1xuICAgICAgICAgICAgdGhpcy5fc3RhdHVzID0gUEVORElORztcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG9icyA9IHRvT2JzZXJ2YWJsZSh0aGlzLmFzeW5jVmFsaWRhdG9yKHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMuX2FzeW5jVmFsaWRhdGlvblN1YnNjcmlwdGlvbiA9XG4gICAgICAgICAgICAgICAgb2JzLnN1YnNjcmliZShmdW5jdGlvbiAoZXJyb3JzKSB7IHJldHVybiBfdGhpcy5zZXRFcnJvcnMoZXJyb3JzLCB7IGVtaXRFdmVudDogZW1pdEV2ZW50IH0pOyB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl9jYW5jZWxFeGlzdGluZ1N1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FzeW5jVmFsaWRhdGlvblN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5fYXN5bmNWYWxpZGF0aW9uU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgZXJyb3JzIG9uIGEgZm9ybSBjb250cm9sLlxuICAgICAqXG4gICAgICogVGhpcyBpcyB1c2VkIHdoZW4gdmFsaWRhdGlvbnMgYXJlIHJ1biBtYW51YWxseSBieSB0aGUgdXNlciwgcmF0aGVyIHRoYW4gYXV0b21hdGljYWxseS5cbiAgICAgKlxuICAgICAqIENhbGxpbmcgYHNldEVycm9yc2Agd2lsbCBhbHNvIHVwZGF0ZSB0aGUgdmFsaWRpdHkgb2YgdGhlIHBhcmVudCBjb250cm9sLlxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVcbiAgICAgKlxuICAgICAqIGBgYFxuICAgICAqIGNvbnN0IGxvZ2luID0gbmV3IEZvcm1Db250cm9sKFwic29tZUxvZ2luXCIpO1xuICAgICAqIGxvZ2luLnNldEVycm9ycyh7XG4gICAgICogICBcIm5vdFVuaXF1ZVwiOiB0cnVlXG4gICAgICogfSk7XG4gICAgICpcbiAgICAgKiBleHBlY3QobG9naW4udmFsaWQpLnRvRXF1YWwoZmFsc2UpO1xuICAgICAqIGV4cGVjdChsb2dpbi5lcnJvcnMpLnRvRXF1YWwoe1wibm90VW5pcXVlXCI6IHRydWV9KTtcbiAgICAgKlxuICAgICAqIGxvZ2luLnNldFZhbHVlKFwic29tZU90aGVyTG9naW5cIik7XG4gICAgICpcbiAgICAgKiBleHBlY3QobG9naW4udmFsaWQpLnRvRXF1YWwodHJ1ZSk7XG4gICAgICogYGBgXG4gICAgICogQHBhcmFtIHs/fSBlcnJvcnNcbiAgICAgKiBAcGFyYW0gez89fSBvcHRzXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLnNldEVycm9ycyA9IGZ1bmN0aW9uIChlcnJvcnMsIG9wdHMpIHtcbiAgICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0ge307IH1cbiAgICAgICAgdGhpcy5fZXJyb3JzID0gZXJyb3JzO1xuICAgICAgICB0aGlzLl91cGRhdGVDb250cm9sc0Vycm9ycyhvcHRzLmVtaXRFdmVudCAhPT0gZmFsc2UpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGEgY2hpbGQgY29udHJvbCBnaXZlbiB0aGUgY29udHJvbCdzIG5hbWUgb3IgcGF0aC5cbiAgICAgKlxuICAgICAqIFBhdGhzIGNhbiBiZSBwYXNzZWQgaW4gYXMgYW4gYXJyYXkgb3IgYSBzdHJpbmcgZGVsaW1pdGVkIGJ5IGEgZG90LlxuICAgICAqXG4gICAgICogVG8gZ2V0IGEgY29udHJvbCBuZXN0ZWQgd2l0aGluIGEgYHBlcnNvbmAgc3ViLWdyb3VwOlxuICAgICAqXG4gICAgICogKiBgdGhpcy5mb3JtLmdldCgncGVyc29uLm5hbWUnKTtgXG4gICAgICpcbiAgICAgKiAtT1ItXG4gICAgICpcbiAgICAgKiAqIGB0aGlzLmZvcm0uZ2V0KFsncGVyc29uJywgJ25hbWUnXSk7YFxuICAgICAqIEBwYXJhbSB7P30gcGF0aFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gX2ZpbmQodGhpcywgcGF0aCwgJy4nKTsgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGNvbnRyb2wgd2l0aCB0aGUgZ2l2ZW4gcGF0aCBoYXMgdGhlIGVycm9yIHNwZWNpZmllZC4gT3RoZXJ3aXNlXG4gICAgICogcmV0dXJucyBudWxsIG9yIHVuZGVmaW5lZC5cbiAgICAgKlxuICAgICAqIElmIG5vIHBhdGggaXMgZ2l2ZW4sIGl0IGNoZWNrcyBmb3IgdGhlIGVycm9yIG9uIHRoZSBwcmVzZW50IGNvbnRyb2wuXG4gICAgICogQHBhcmFtIHs/fSBlcnJvckNvZGVcbiAgICAgKiBAcGFyYW0gez89fSBwYXRoXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLmdldEVycm9yID0gZnVuY3Rpb24gKGVycm9yQ29kZSwgcGF0aCkge1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBjb250cm9sID0gcGF0aCA/IHRoaXMuZ2V0KHBhdGgpIDogdGhpcztcbiAgICAgICAgcmV0dXJuIGNvbnRyb2wgJiYgY29udHJvbC5fZXJyb3JzID8gY29udHJvbC5fZXJyb3JzW2Vycm9yQ29kZV0gOiBudWxsO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBjb250cm9sIHdpdGggdGhlIGdpdmVuIHBhdGggaGFzIHRoZSBlcnJvciBzcGVjaWZpZWQuIE90aGVyd2lzZVxuICAgICAqIHJldHVybnMgZmFsc2UuXG4gICAgICpcbiAgICAgKiBJZiBubyBwYXRoIGlzIGdpdmVuLCBpdCBjaGVja3MgZm9yIHRoZSBlcnJvciBvbiB0aGUgcHJlc2VudCBjb250cm9sLlxuICAgICAqIEBwYXJhbSB7P30gZXJyb3JDb2RlXG4gICAgICogQHBhcmFtIHs/PX0gcGF0aFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5oYXNFcnJvciA9IGZ1bmN0aW9uIChlcnJvckNvZGUsIHBhdGgpIHsgcmV0dXJuICEhdGhpcy5nZXRFcnJvcihlcnJvckNvZGUsIHBhdGgpOyB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcInJvb3RcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogUmV0cmlldmVzIHRoZSB0b3AtbGV2ZWwgYW5jZXN0b3Igb2YgdGhpcyBjb250cm9sLlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB4ID0gdGhpcztcbiAgICAgICAgICAgIHdoaWxlICh4Ll9wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB4ID0geC5fcGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIFxcQGludGVybmFsXG4gICAgICogQHBhcmFtIHs/fSBlbWl0RXZlbnRcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX3VwZGF0ZUNvbnRyb2xzRXJyb3JzID0gZnVuY3Rpb24gKGVtaXRFdmVudCkge1xuICAgICAgICB0aGlzLl9zdGF0dXMgPSB0aGlzLl9jYWxjdWxhdGVTdGF0dXMoKTtcbiAgICAgICAgaWYgKGVtaXRFdmVudCkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdHVzQ2hhbmdlcy5lbWl0KHRoaXMuX3N0YXR1cyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudCkge1xuICAgICAgICAgICAgdGhpcy5fcGFyZW50Ll91cGRhdGVDb250cm9sc0Vycm9ycyhlbWl0RXZlbnQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5faW5pdE9ic2VydmFibGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl92YWx1ZUNoYW5nZXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMuX3N0YXR1c0NoYW5nZXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX2NhbGN1bGF0ZVN0YXR1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FsbENvbnRyb2xzRGlzYWJsZWQoKSlcbiAgICAgICAgICAgIHJldHVybiBESVNBQkxFRDtcbiAgICAgICAgaWYgKHRoaXMuX2Vycm9ycylcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICBpZiAodGhpcy5fYW55Q29udHJvbHNIYXZlU3RhdHVzKFBFTkRJTkcpKVxuICAgICAgICAgICAgcmV0dXJuIFBFTkRJTkc7XG4gICAgICAgIGlmICh0aGlzLl9hbnlDb250cm9sc0hhdmVTdGF0dXMoSU5WQUxJRCkpXG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgcmV0dXJuIFZBTElEO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogXFxAaW50ZXJuYWxcbiAgICAgKiBAYWJzdHJhY3RcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX3VwZGF0ZVZhbHVlID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgIC8qKlxuICAgICAqIFxcQGludGVybmFsXG4gICAgICogQGFic3RyYWN0XG4gICAgICogQHBhcmFtIHs/fSBjYlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fZm9yRWFjaENoaWxkID0gZnVuY3Rpb24gKGNiKSB7IH07XG4gICAgLyoqXG4gICAgICogXFxAaW50ZXJuYWxcbiAgICAgKiBAYWJzdHJhY3RcbiAgICAgKiBAcGFyYW0gez99IGNvbmRpdGlvblxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fYW55Q29udHJvbHMgPSBmdW5jdGlvbiAoY29uZGl0aW9uKSB7IH07XG4gICAgLyoqXG4gICAgICogXFxAaW50ZXJuYWxcbiAgICAgKiBAYWJzdHJhY3RcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX2FsbENvbnRyb2xzRGlzYWJsZWQgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgLyoqXG4gICAgICogXFxAaW50ZXJuYWxcbiAgICAgKiBAcGFyYW0gez99IHN0YXR1c1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fYW55Q29udHJvbHNIYXZlU3RhdHVzID0gZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgICByZXR1cm4gdGhpcy5fYW55Q29udHJvbHMoZnVuY3Rpb24gKGNvbnRyb2wpIHsgcmV0dXJuIGNvbnRyb2wuc3RhdHVzID09PSBzdGF0dXM7IH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogXFxAaW50ZXJuYWxcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX2FueUNvbnRyb2xzRGlydHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbnlDb250cm9scyhmdW5jdGlvbiAoY29udHJvbCkgeyByZXR1cm4gY29udHJvbC5kaXJ0eTsgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fYW55Q29udHJvbHNUb3VjaGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYW55Q29udHJvbHMoZnVuY3Rpb24gKGNvbnRyb2wpIHsgcmV0dXJuIGNvbnRyb2wudG91Y2hlZDsgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAqIEBwYXJhbSB7Pz19IG9wdHNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX3VwZGF0ZVByaXN0aW5lID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0ge307IH1cbiAgICAgICAgdGhpcy5fcHJpc3RpbmUgPSAhdGhpcy5fYW55Q29udHJvbHNEaXJ0eSgpO1xuICAgICAgICBpZiAodGhpcy5fcGFyZW50ICYmICFvcHRzLm9ubHlTZWxmKSB7XG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQuX3VwZGF0ZVByaXN0aW5lKG9wdHMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAqIEBwYXJhbSB7Pz19IG9wdHNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX3VwZGF0ZVRvdWNoZWQgPSBmdW5jdGlvbiAob3B0cykge1xuICAgICAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7IG9wdHMgPSB7fTsgfVxuICAgICAgICB0aGlzLl90b3VjaGVkID0gdGhpcy5fYW55Q29udHJvbHNUb3VjaGVkKCk7XG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQgJiYgIW9wdHMub25seVNlbGYpIHtcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudC5fdXBkYXRlVG91Y2hlZChvcHRzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogXFxAaW50ZXJuYWxcbiAgICAgKiBAcGFyYW0gez99IGZvcm1TdGF0ZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5faXNCb3hlZFZhbHVlID0gZnVuY3Rpb24gKGZvcm1TdGF0ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGZvcm1TdGF0ZSA9PT0gJ29iamVjdCcgJiYgZm9ybVN0YXRlICE9PSBudWxsICYmXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhmb3JtU3RhdGUpLmxlbmd0aCA9PT0gMiAmJiAndmFsdWUnIGluIGZvcm1TdGF0ZSAmJiAnZGlzYWJsZWQnIGluIGZvcm1TdGF0ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFxcQGludGVybmFsXG4gICAgICogQHBhcmFtIHs/fSBmblxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fcmVnaXN0ZXJPbkNvbGxlY3Rpb25DaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlID0gZm47IH07XG4gICAgcmV0dXJuIEFic3RyYWN0Q29udHJvbDtcbn0oKSk7XG4vKipcbiAqIFxcQHdoYXRJdERvZXMgVHJhY2tzIHRoZSB2YWx1ZSBhbmQgdmFsaWRhdGlvbiBzdGF0dXMgb2YgYW4gaW5kaXZpZHVhbCBmb3JtIGNvbnRyb2wuXG4gKlxuICogSXQgaXMgb25lIG9mIHRoZSB0aHJlZSBmdW5kYW1lbnRhbCBidWlsZGluZyBibG9ja3Mgb2YgQW5ndWxhciBmb3JtcywgYWxvbmcgd2l0aFxuICoge1xcQGxpbmsgRm9ybUdyb3VwfSBhbmQge1xcQGxpbmsgRm9ybUFycmF5fS5cbiAqXG4gKiBcXEBob3dUb1VzZVxuICpcbiAqIFdoZW4gaW5zdGFudGlhdGluZyBhIHtcXEBsaW5rIEZvcm1Db250cm9sfSwgeW91IGNhbiBwYXNzIGluIGFuIGluaXRpYWwgdmFsdWUgYXMgdGhlXG4gKiBmaXJzdCBhcmd1bWVudC4gRXhhbXBsZTpcbiAqXG4gKiBgYGB0c1xuICogY29uc3QgY3RybCA9IG5ldyBGb3JtQ29udHJvbCgnc29tZSB2YWx1ZScpO1xuICogY29uc29sZS5sb2coY3RybC52YWx1ZSk7ICAgICAvLyAnc29tZSB2YWx1ZSdcbiAqIGBgYFxuICpcbiAqIFlvdSBjYW4gYWxzbyBpbml0aWFsaXplIHRoZSBjb250cm9sIHdpdGggYSBmb3JtIHN0YXRlIG9iamVjdCBvbiBpbnN0YW50aWF0aW9uLFxuICogd2hpY2ggaW5jbHVkZXMgYm90aCB0aGUgdmFsdWUgYW5kIHdoZXRoZXIgb3Igbm90IHRoZSBjb250cm9sIGlzIGRpc2FibGVkLlxuICogWW91IGNhbid0IHVzZSB0aGUgdmFsdWUga2V5IHdpdGhvdXQgdGhlIGRpc2FibGVkIGtleTsgYm90aCBhcmUgcmVxdWlyZWRcbiAqIHRvIHVzZSB0aGlzIHdheSBvZiBpbml0aWFsaXphdGlvbi5cbiAqXG4gKiBgYGB0c1xuICogY29uc3QgY3RybCA9IG5ldyBGb3JtQ29udHJvbCh7dmFsdWU6ICduL2EnLCBkaXNhYmxlZDogdHJ1ZX0pO1xuICogY29uc29sZS5sb2coY3RybC52YWx1ZSk7ICAgICAvLyAnbi9hJ1xuICogY29uc29sZS5sb2coY3RybC5zdGF0dXMpOyAgIC8vICdESVNBQkxFRCdcbiAqIGBgYFxuICpcbiAqIFRvIGluY2x1ZGUgYSBzeW5jIHZhbGlkYXRvciAob3IgYW4gYXJyYXkgb2Ygc3luYyB2YWxpZGF0b3JzKSB3aXRoIHRoZSBjb250cm9sLFxuICogcGFzcyBpdCBpbiBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LiBBc3luYyB2YWxpZGF0b3JzIGFyZSBhbHNvIHN1cHBvcnRlZCwgYnV0XG4gKiBoYXZlIHRvIGJlIHBhc3NlZCBpbiBzZXBhcmF0ZWx5IGFzIHRoZSB0aGlyZCBhcmcuXG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IGN0cmwgPSBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICogY29uc29sZS5sb2coY3RybC52YWx1ZSk7ICAgICAvLyAnJ1xuICogY29uc29sZS5sb2coY3RybC5zdGF0dXMpOyAgIC8vICdJTlZBTElEJ1xuICogYGBgXG4gKlxuICogU2VlIGl0cyBzdXBlcmNsYXNzLCB7XFxAbGluayBBYnN0cmFjdENvbnRyb2x9LCBmb3IgbW9yZSBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzLlxuICpcbiAqICogKipucG0gcGFja2FnZSoqOiBgXFxAYW5ndWxhci9mb3Jtc2BcbiAqXG4gKiBcXEBzdGFibGVcbiAqL1xudmFyIEZvcm1Db250cm9sID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhGb3JtQ29udHJvbCwgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez89fSBmb3JtU3RhdGVcbiAgICAgKiBAcGFyYW0gez89fSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gez89fSBhc3luY1ZhbGlkYXRvclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEZvcm1Db250cm9sKGZvcm1TdGF0ZSwgdmFsaWRhdG9yLCBhc3luY1ZhbGlkYXRvcikge1xuICAgICAgICBpZiAoZm9ybVN0YXRlID09PSB2b2lkIDApIHsgZm9ybVN0YXRlID0gbnVsbDsgfVxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBjb2VyY2VUb1ZhbGlkYXRvcih2YWxpZGF0b3IpLCBjb2VyY2VUb0FzeW5jVmFsaWRhdG9yKGFzeW5jVmFsaWRhdG9yKSkgfHwgdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fb25DaGFuZ2UgPSBbXTtcbiAgICAgICAgX3RoaXMuX2FwcGx5Rm9ybVN0YXRlKGZvcm1TdGF0ZSk7XG4gICAgICAgIF90aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgX3RoaXMuX2luaXRPYnNlcnZhYmxlcygpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgdmFsdWUgb2YgdGhlIGZvcm0gY29udHJvbCB0byBgdmFsdWVgLlxuICAgICAqXG4gICAgICogSWYgYG9ubHlTZWxmYCBpcyBgdHJ1ZWAsIHRoaXMgY2hhbmdlIHdpbGwgb25seSBhZmZlY3QgdGhlIHZhbGlkYXRpb24gb2YgdGhpcyBgRm9ybUNvbnRyb2xgXG4gICAgICogYW5kIG5vdCBpdHMgcGFyZW50IGNvbXBvbmVudC4gVGhpcyBkZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgKlxuICAgICAqIElmIGBlbWl0RXZlbnRgIGlzIGB0cnVlYCwgdGhpc1xuICAgICAqIGNoYW5nZSB3aWxsIGNhdXNlIGEgYHZhbHVlQ2hhbmdlc2AgZXZlbnQgb24gdGhlIGBGb3JtQ29udHJvbGAgdG8gYmUgZW1pdHRlZC4gVGhpcyBkZWZhdWx0c1xuICAgICAqIHRvIHRydWUgKGFzIGl0IGZhbGxzIHRocm91Z2ggdG8gYHVwZGF0ZVZhbHVlQW5kVmFsaWRpdHlgKS5cbiAgICAgKlxuICAgICAqIElmIGBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2VgIGlzIGB0cnVlYCwgdGhlIHZpZXcgd2lsbCBiZSBub3RpZmllZCBhYm91dCB0aGUgbmV3IHZhbHVlXG4gICAgICogdmlhIGFuIGBvbkNoYW5nZWAgZXZlbnQuIFRoaXMgaXMgdGhlIGRlZmF1bHQgYmVoYXZpb3IgaWYgYGVtaXRNb2RlbFRvVmlld0NoYW5nZWAgaXMgbm90XG4gICAgICogc3BlY2lmaWVkLlxuICAgICAqXG4gICAgICogSWYgYGVtaXRWaWV3VG9Nb2RlbENoYW5nZWAgaXMgYHRydWVgLCBhbiBuZ01vZGVsQ2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgdG8gdXBkYXRlIHRoZVxuICAgICAqIG1vZGVsLiAgVGhpcyBpcyB0aGUgZGVmYXVsdCBiZWhhdmlvciBpZiBgZW1pdFZpZXdUb01vZGVsQ2hhbmdlYCBpcyBub3Qgc3BlY2lmaWVkLlxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcGFyYW0gez89fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtQ29udHJvbC5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuX29uQ2hhbmdlLmxlbmd0aCAmJiBvcHRpb25zLmVtaXRNb2RlbFRvVmlld0NoYW5nZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlLmZvckVhY2goZnVuY3Rpb24gKGNoYW5nZUZuKSB7IHJldHVybiBjaGFuZ2VGbihfdGhpcy5fdmFsdWUsIG9wdGlvbnMuZW1pdFZpZXdUb01vZGVsQ2hhbmdlICE9PSBmYWxzZSk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvcHRpb25zKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFBhdGNoZXMgdGhlIHZhbHVlIG9mIGEgY29udHJvbC5cbiAgICAgKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgZnVuY3Rpb25hbGx5IHRoZSBzYW1lIGFzIHtcXEBsaW5rIEZvcm1Db250cm9sI3NldFZhbHVlfSBhdCB0aGlzIGxldmVsLlxuICAgICAqIEl0IGV4aXN0cyBmb3Igc3ltbWV0cnkgd2l0aCB7XFxAbGluayBGb3JtR3JvdXAjcGF0Y2hWYWx1ZX0gb24gYEZvcm1Hcm91cHNgIGFuZCBgRm9ybUFycmF5c2AsXG4gICAgICogd2hlcmUgaXQgZG9lcyBiZWhhdmUgZGlmZmVyZW50bHkuXG4gICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Pz19IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1Db250cm9sLnByb3RvdHlwZS5wYXRjaFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHRoaXMuc2V0VmFsdWUodmFsdWUsIG9wdGlvbnMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVzZXRzIHRoZSBmb3JtIGNvbnRyb2wuIFRoaXMgbWVhbnMgYnkgZGVmYXVsdDpcbiAgICAgKlxuICAgICAqICogaXQgaXMgbWFya2VkIGFzIGBwcmlzdGluZWBcbiAgICAgKiAqIGl0IGlzIG1hcmtlZCBhcyBgdW50b3VjaGVkYFxuICAgICAqICogdmFsdWUgaXMgc2V0IHRvIG51bGxcbiAgICAgKlxuICAgICAqIFlvdSBjYW4gYWxzbyByZXNldCB0byBhIHNwZWNpZmljIGZvcm0gc3RhdGUgYnkgcGFzc2luZyB0aHJvdWdoIGEgc3RhbmRhbG9uZVxuICAgICAqIHZhbHVlIG9yIGEgZm9ybSBzdGF0ZSBvYmplY3QgdGhhdCBjb250YWlucyBib3RoIGEgdmFsdWUgYW5kIGEgZGlzYWJsZWQgc3RhdGVcbiAgICAgKiAodGhlc2UgYXJlIHRoZSBvbmx5IHR3byBwcm9wZXJ0aWVzIHRoYXQgY2Fubm90IGJlIGNhbGN1bGF0ZWQpLlxuICAgICAqXG4gICAgICogRXg6XG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIHRoaXMuY29udHJvbC5yZXNldCgnTmFuY3knKTtcbiAgICAgKlxuICAgICAqIGNvbnNvbGUubG9nKHRoaXMuY29udHJvbC52YWx1ZSk7ICAvLyAnTmFuY3knXG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBPUlxuICAgICAqXG4gICAgICogYGBgXG4gICAgICogdGhpcy5jb250cm9sLnJlc2V0KHt2YWx1ZTogJ05hbmN5JywgZGlzYWJsZWQ6IHRydWV9KTtcbiAgICAgKlxuICAgICAqIGNvbnNvbGUubG9nKHRoaXMuY29udHJvbC52YWx1ZSk7ICAvLyAnTmFuY3knXG4gICAgICogY29uc29sZS5sb2codGhpcy5jb250cm9sLnN0YXR1cyk7ICAvLyAnRElTQUJMRUQnXG4gICAgICogYGBgXG4gICAgICogQHBhcmFtIHs/PX0gZm9ybVN0YXRlXG4gICAgICogQHBhcmFtIHs/PX0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybUNvbnRyb2wucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKGZvcm1TdGF0ZSwgb3B0aW9ucykge1xuICAgICAgICBpZiAoZm9ybVN0YXRlID09PSB2b2lkIDApIHsgZm9ybVN0YXRlID0gbnVsbDsgfVxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICB0aGlzLl9hcHBseUZvcm1TdGF0ZShmb3JtU3RhdGUpO1xuICAgICAgICB0aGlzLm1hcmtBc1ByaXN0aW5lKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLm1hcmtBc1VudG91Y2hlZChvcHRpb25zKTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLl92YWx1ZSwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybUNvbnRyb2wucHJvdG90eXBlLl91cGRhdGVWYWx1ZSA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAvKipcbiAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAqIEBwYXJhbSB7P30gY29uZGl0aW9uXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtQ29udHJvbC5wcm90b3R5cGUuX2FueUNvbnRyb2xzID0gZnVuY3Rpb24gKGNvbmRpdGlvbikgeyByZXR1cm4gZmFsc2U7IH07XG4gICAgLyoqXG4gICAgICogXFxAaW50ZXJuYWxcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1Db250cm9sLnByb3RvdHlwZS5fYWxsQ29udHJvbHNEaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZGlzYWJsZWQ7IH07XG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgYSBsaXN0ZW5lciBmb3IgY2hhbmdlIGV2ZW50cy5cbiAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtQ29udHJvbC5wcm90b3R5cGUucmVnaXN0ZXJPbkNoYW5nZSA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLl9vbkNoYW5nZS5wdXNoKGZuKTsgfTtcbiAgICAvKipcbiAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybUNvbnRyb2wucHJvdG90eXBlLl9jbGVhckNoYW5nZUZucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2UgPSBbXTtcbiAgICAgICAgdGhpcy5fb25EaXNhYmxlZENoYW5nZSA9IFtdO1xuICAgICAgICB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBhIGxpc3RlbmVyIGZvciBkaXNhYmxlZCBldmVudHMuXG4gICAgICogQHBhcmFtIHs/fSBmblxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybUNvbnRyb2wucHJvdG90eXBlLnJlZ2lzdGVyT25EaXNhYmxlZENoYW5nZSA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICB0aGlzLl9vbkRpc2FibGVkQ2hhbmdlLnB1c2goZm4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogXFxAaW50ZXJuYWxcbiAgICAgKiBAcGFyYW0gez99IGNiXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtQ29udHJvbC5wcm90b3R5cGUuX2ZvckVhY2hDaGlsZCA9IGZ1bmN0aW9uIChjYikgeyB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZm9ybVN0YXRlXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtQ29udHJvbC5wcm90b3R5cGUuX2FwcGx5Rm9ybVN0YXRlID0gZnVuY3Rpb24gKGZvcm1TdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5faXNCb3hlZFZhbHVlKGZvcm1TdGF0ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gZm9ybVN0YXRlLnZhbHVlO1xuICAgICAgICAgICAgZm9ybVN0YXRlLmRpc2FibGVkID8gdGhpcy5kaXNhYmxlKHsgb25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZmFsc2UgfSkgOlxuICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlKHsgb25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IGZvcm1TdGF0ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEZvcm1Db250cm9sO1xufShBYnN0cmFjdENvbnRyb2wpKTtcbi8qKlxuICogXFxAd2hhdEl0RG9lcyBUcmFja3MgdGhlIHZhbHVlIGFuZCB2YWxpZGl0eSBzdGF0ZSBvZiBhIGdyb3VwIG9mIHtcXEBsaW5rIEZvcm1Db250cm9sfVxuICogaW5zdGFuY2VzLlxuICpcbiAqIEEgYEZvcm1Hcm91cGAgYWdncmVnYXRlcyB0aGUgdmFsdWVzIG9mIGVhY2ggY2hpbGQge1xcQGxpbmsgRm9ybUNvbnRyb2x9IGludG8gb25lIG9iamVjdCxcbiAqIHdpdGggZWFjaCBjb250cm9sIG5hbWUgYXMgdGhlIGtleS4gIEl0IGNhbGN1bGF0ZXMgaXRzIHN0YXR1cyBieSByZWR1Y2luZyB0aGUgc3RhdHVzZXNcbiAqIG9mIGl0cyBjaGlsZHJlbi4gRm9yIGV4YW1wbGUsIGlmIG9uZSBvZiB0aGUgY29udHJvbHMgaW4gYSBncm91cCBpcyBpbnZhbGlkLCB0aGUgZW50aXJlXG4gKiBncm91cCBiZWNvbWVzIGludmFsaWQuXG4gKlxuICogYEZvcm1Hcm91cGAgaXMgb25lIG9mIHRoZSB0aHJlZSBmdW5kYW1lbnRhbCBidWlsZGluZyBibG9ja3MgdXNlZCB0byBkZWZpbmUgZm9ybXMgaW4gQW5ndWxhcixcbiAqIGFsb25nIHdpdGgge1xcQGxpbmsgRm9ybUNvbnRyb2x9IGFuZCB7XFxAbGluayBGb3JtQXJyYXl9LlxuICpcbiAqIFxcQGhvd1RvVXNlXG4gKlxuICogV2hlbiBpbnN0YW50aWF0aW5nIGEge1xcQGxpbmsgRm9ybUdyb3VwfSwgcGFzcyBpbiBhIGNvbGxlY3Rpb24gb2YgY2hpbGQgY29udHJvbHMgYXMgdGhlIGZpcnN0XG4gKiBhcmd1bWVudC4gVGhlIGtleSBmb3IgZWFjaCBjaGlsZCB3aWxsIGJlIHRoZSBuYW1lIHVuZGVyIHdoaWNoIGl0IGlzIHJlZ2lzdGVyZWQuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBcbiAqIGNvbnN0IGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAqICAgZmlyc3Q6IG5ldyBGb3JtQ29udHJvbCgnTmFuY3knLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgyKSksXG4gKiAgIGxhc3Q6IG5ldyBGb3JtQ29udHJvbCgnRHJldycpLFxuICogfSk7XG4gKlxuICogY29uc29sZS5sb2coZm9ybS52YWx1ZSk7ICAgLy8ge2ZpcnN0OiAnTmFuY3knLCBsYXN0OyAnRHJldyd9XG4gKiBjb25zb2xlLmxvZyhmb3JtLnN0YXR1cyk7ICAvLyAnVkFMSUQnXG4gKiBgYGBcbiAqXG4gKiBZb3UgY2FuIGFsc28gaW5jbHVkZSBncm91cC1sZXZlbCB2YWxpZGF0b3JzIGFzIHRoZSBzZWNvbmQgYXJnLCBvciBncm91cC1sZXZlbCBhc3luY1xuICogdmFsaWRhdG9ycyBhcyB0aGUgdGhpcmQgYXJnLiBUaGVzZSBjb21lIGluIGhhbmR5IHdoZW4geW91IHdhbnQgdG8gcGVyZm9ybSB2YWxpZGF0aW9uXG4gKiB0aGF0IGNvbnNpZGVycyB0aGUgdmFsdWUgb2YgbW9yZSB0aGFuIG9uZSBjaGlsZCBjb250cm9sLlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogYGBgXG4gKiBjb25zdCBmb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gKiAgIHBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDIpKSxcbiAqICAgcGFzc3dvcmRDb25maXJtOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDIpKSxcbiAqIH0sIHBhc3N3b3JkTWF0Y2hWYWxpZGF0b3IpO1xuICpcbiAqXG4gKiBmdW5jdGlvbiBwYXNzd29yZE1hdGNoVmFsaWRhdG9yKGc6IEZvcm1Hcm91cCkge1xuICogICAgcmV0dXJuIGcuZ2V0KCdwYXNzd29yZCcpLnZhbHVlID09PSBnLmdldCgncGFzc3dvcmRDb25maXJtJykudmFsdWVcbiAqICAgICAgID8gbnVsbCA6IHsnbWlzbWF0Y2gnOiB0cnVlfTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqICogKipucG0gcGFja2FnZSoqOiBgXFxAYW5ndWxhci9mb3Jtc2BcbiAqXG4gKiBcXEBzdGFibGVcbiAqL1xudmFyIEZvcm1Hcm91cCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoRm9ybUdyb3VwLCBfc3VwZXIpO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gY29udHJvbHNcbiAgICAgKiBAcGFyYW0gez89fSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gez89fSBhc3luY1ZhbGlkYXRvclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEZvcm1Hcm91cChjb250cm9scywgdmFsaWRhdG9yLCBhc3luY1ZhbGlkYXRvcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB2YWxpZGF0b3IgfHwgbnVsbCwgYXN5bmNWYWxpZGF0b3IgfHwgbnVsbCkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuY29udHJvbHMgPSBjb250cm9scztcbiAgICAgICAgX3RoaXMuX2luaXRPYnNlcnZhYmxlcygpO1xuICAgICAgICBfdGhpcy5fc2V0VXBDb250cm9scygpO1xuICAgICAgICBfdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGEgY29udHJvbCB3aXRoIHRoZSBncm91cCdzIGxpc3Qgb2YgY29udHJvbHMuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBkb2VzIG5vdCB1cGRhdGUgdmFsdWUgb3IgdmFsaWRpdHkgb2YgdGhlIGNvbnRyb2wsIHNvIGZvclxuICAgICAqIG1vc3QgY2FzZXMgeW91J2xsIHdhbnQgdG8gdXNlIHtcXEBsaW5rIEZvcm1Hcm91cCNhZGRDb250cm9sfSBpbnN0ZWFkLlxuICAgICAqIEBwYXJhbSB7P30gbmFtZVxuICAgICAqIEBwYXJhbSB7P30gY29udHJvbFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybUdyb3VwLnByb3RvdHlwZS5yZWdpc3RlckNvbnRyb2wgPSBmdW5jdGlvbiAobmFtZSwgY29udHJvbCkge1xuICAgICAgICBpZiAodGhpcy5jb250cm9sc1tuYW1lXSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xzW25hbWVdO1xuICAgICAgICB0aGlzLmNvbnRyb2xzW25hbWVdID0gY29udHJvbDtcbiAgICAgICAgY29udHJvbC5zZXRQYXJlbnQodGhpcyk7XG4gICAgICAgIGNvbnRyb2wuX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlKHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSk7XG4gICAgICAgIHJldHVybiBjb250cm9sO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQWRkIGEgY29udHJvbCB0byB0aGlzIGdyb3VwLlxuICAgICAqIEBwYXJhbSB7P30gbmFtZVxuICAgICAqIEBwYXJhbSB7P30gY29udHJvbFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybUdyb3VwLnByb3RvdHlwZS5hZGRDb250cm9sID0gZnVuY3Rpb24gKG5hbWUsIGNvbnRyb2wpIHtcbiAgICAgICAgdGhpcy5yZWdpc3RlckNvbnRyb2wobmFtZSwgY29udHJvbCk7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIGNvbnRyb2wgZnJvbSB0aGlzIGdyb3VwLlxuICAgICAqIEBwYXJhbSB7P30gbmFtZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybUdyb3VwLnByb3RvdHlwZS5yZW1vdmVDb250cm9sID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udHJvbHNbbmFtZV0pXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xzW25hbWVdLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZShmdW5jdGlvbiAoKSB7IH0pO1xuICAgICAgICBkZWxldGUgKHRoaXMuY29udHJvbHNbbmFtZV0pO1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXBsYWNlIGFuIGV4aXN0aW5nIGNvbnRyb2wuXG4gICAgICogQHBhcmFtIHs/fSBuYW1lXG4gICAgICogQHBhcmFtIHs/fSBjb250cm9sXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtR3JvdXAucHJvdG90eXBlLnNldENvbnRyb2wgPSBmdW5jdGlvbiAobmFtZSwgY29udHJvbCkge1xuICAgICAgICBpZiAodGhpcy5jb250cm9sc1tuYW1lXSlcbiAgICAgICAgICAgIHRoaXMuY29udHJvbHNbbmFtZV0uX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlKGZ1bmN0aW9uICgpIHsgfSk7XG4gICAgICAgIGRlbGV0ZSAodGhpcy5jb250cm9sc1tuYW1lXSk7XG4gICAgICAgIGlmIChjb250cm9sKVxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckNvbnRyb2wobmFtZSwgY29udHJvbCk7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrIHdoZXRoZXIgdGhlcmUgaXMgYW4gZW5hYmxlZCBjb250cm9sIHdpdGggdGhlIGdpdmVuIG5hbWUgaW4gdGhlIGdyb3VwLlxuICAgICAqXG4gICAgICogSXQgd2lsbCByZXR1cm4gZmFsc2UgZm9yIGRpc2FibGVkIGNvbnRyb2xzLiBJZiB5b3UnZCBsaWtlIHRvIGNoZWNrIGZvclxuICAgICAqIGV4aXN0ZW5jZSBpbiB0aGUgZ3JvdXAgb25seSwgdXNlIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbCNnZXR9IGluc3RlYWQuXG4gICAgICogQHBhcmFtIHs/fSBjb250cm9sTmFtZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybUdyb3VwLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChjb250cm9sTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9scy5oYXNPd25Qcm9wZXJ0eShjb250cm9sTmFtZSkgJiYgdGhpcy5jb250cm9sc1tjb250cm9sTmFtZV0uZW5hYmxlZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqICBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUge1xcQGxpbmsgRm9ybUdyb3VwfS4gSXQgYWNjZXB0cyBhbiBvYmplY3QgdGhhdCBtYXRjaGVzXG4gICAgICogIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIGdyb3VwLCB3aXRoIGNvbnRyb2wgbmFtZXMgYXMga2V5cy5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIHBlcmZvcm1zIHN0cmljdCBjaGVja3MsIHNvIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgeW91IHRyeVxuICAgICAqIHRvIHNldCB0aGUgdmFsdWUgb2YgYSBjb250cm9sIHRoYXQgZG9lc24ndCBleGlzdCBvciBpZiB5b3UgZXhjbHVkZSB0aGVcbiAgICAgKiB2YWx1ZSBvZiBhIGNvbnRyb2wuXG4gICAgICpcbiAgICAgKiAgIyMjIEV4YW1wbGVcbiAgICAgKlxuICAgICAqICBgYGBcbiAgICAgKiAgY29uc3QgZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAqICAgICBmaXJzdDogbmV3IEZvcm1Db250cm9sKCksXG4gICAgICogICAgIGxhc3Q6IG5ldyBGb3JtQ29udHJvbCgpXG4gICAgICogIH0pO1xuICAgICAqICBjb25zb2xlLmxvZyhmb3JtLnZhbHVlKTsgICAvLyB7Zmlyc3Q6IG51bGwsIGxhc3Q6IG51bGx9XG4gICAgICpcbiAgICAgKiAgZm9ybS5zZXRWYWx1ZSh7Zmlyc3Q6ICdOYW5jeScsIGxhc3Q6ICdEcmV3J30pO1xuICAgICAqICBjb25zb2xlLmxvZyhmb3JtLnZhbHVlKTsgICAvLyB7Zmlyc3Q6ICdOYW5jeScsIGxhc3Q6ICdEcmV3J31cbiAgICAgKlxuICAgICAqICBgYGBcbiAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICogQHBhcmFtIHs/PX0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybUdyb3VwLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICB0aGlzLl9jaGVja0FsbFZhbHVlc1ByZXNlbnQodmFsdWUpO1xuICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgX3RoaXMuX3Rocm93SWZDb250cm9sTWlzc2luZyhuYW1lKTtcbiAgICAgICAgICAgIF90aGlzLmNvbnRyb2xzW25hbWVdLnNldFZhbHVlKHZhbHVlW25hbWVdLCB7IG9ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IG9wdGlvbnMuZW1pdEV2ZW50IH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9wdGlvbnMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogIFBhdGNoZXMgdGhlIHZhbHVlIG9mIHRoZSB7XFxAbGluayBGb3JtR3JvdXB9LiBJdCBhY2NlcHRzIGFuIG9iamVjdCB3aXRoIGNvbnRyb2xcbiAgICAgKiAgbmFtZXMgYXMga2V5cywgYW5kIHdpbGwgZG8gaXRzIGJlc3QgdG8gbWF0Y2ggdGhlIHZhbHVlcyB0byB0aGUgY29ycmVjdCBjb250cm9sc1xuICAgICAqICBpbiB0aGUgZ3JvdXAuXG4gICAgICpcbiAgICAgKiAgSXQgYWNjZXB0cyBib3RoIHN1cGVyLXNldHMgYW5kIHN1Yi1zZXRzIG9mIHRoZSBncm91cCB3aXRob3V0IHRocm93aW5nIGFuIGVycm9yLlxuICAgICAqXG4gICAgICogICMjIyBFeGFtcGxlXG4gICAgICpcbiAgICAgKiAgYGBgXG4gICAgICogIGNvbnN0IGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgKiAgICAgZmlyc3Q6IG5ldyBGb3JtQ29udHJvbCgpLFxuICAgICAqICAgICBsYXN0OiBuZXcgRm9ybUNvbnRyb2woKVxuICAgICAqICB9KTtcbiAgICAgKiAgY29uc29sZS5sb2coZm9ybS52YWx1ZSk7ICAgLy8ge2ZpcnN0OiBudWxsLCBsYXN0OiBudWxsfVxuICAgICAqXG4gICAgICogIGZvcm0ucGF0Y2hWYWx1ZSh7Zmlyc3Q6ICdOYW5jeSd9KTtcbiAgICAgKiAgY29uc29sZS5sb2coZm9ybS52YWx1ZSk7ICAgLy8ge2ZpcnN0OiAnTmFuY3knLCBsYXN0OiBudWxsfVxuICAgICAqXG4gICAgICogIGBgYFxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcGFyYW0gez89fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtR3JvdXAucHJvdG90eXBlLnBhdGNoVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5jb250cm9sc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmNvbnRyb2xzW25hbWVdLnBhdGNoVmFsdWUodmFsdWVbbmFtZV0sIHsgb25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogb3B0aW9ucy5lbWl0RXZlbnQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob3B0aW9ucyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIHtcXEBsaW5rIEZvcm1Hcm91cH0uIFRoaXMgbWVhbnMgYnkgZGVmYXVsdDpcbiAgICAgKlxuICAgICAqICogVGhlIGdyb3VwIGFuZCBhbGwgZGVzY2VuZGFudHMgYXJlIG1hcmtlZCBgcHJpc3RpbmVgXG4gICAgICogKiBUaGUgZ3JvdXAgYW5kIGFsbCBkZXNjZW5kYW50cyBhcmUgbWFya2VkIGB1bnRvdWNoZWRgXG4gICAgICogKiBUaGUgdmFsdWUgb2YgYWxsIGRlc2NlbmRhbnRzIHdpbGwgYmUgbnVsbCBvciBudWxsIG1hcHNcbiAgICAgKlxuICAgICAqIFlvdSBjYW4gYWxzbyByZXNldCB0byBhIHNwZWNpZmljIGZvcm0gc3RhdGUgYnkgcGFzc2luZyBpbiBhIG1hcCBvZiBzdGF0ZXNcbiAgICAgKiB0aGF0IG1hdGNoZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGZvcm0sIHdpdGggY29udHJvbCBuYW1lcyBhcyBrZXlzLiBUaGUgc3RhdGVcbiAgICAgKiBjYW4gYmUgYSBzdGFuZGFsb25lIHZhbHVlIG9yIGEgZm9ybSBzdGF0ZSBvYmplY3Qgd2l0aCBib3RoIGEgdmFsdWUgYW5kIGEgZGlzYWJsZWRcbiAgICAgKiBzdGF0dXMuXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiB0aGlzLmZvcm0ucmVzZXQoe2ZpcnN0OiAnbmFtZScsIGxhc3Q6ICdsYXN0IG5hbWUnfSk7XG4gICAgICpcbiAgICAgKiBjb25zb2xlLmxvZyh0aGlzLmZvcm0udmFsdWUpOyAgLy8ge2ZpcnN0OiAnbmFtZScsIGxhc3Q6ICdsYXN0IG5hbWUnfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogLSBPUiAtXG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiB0aGlzLmZvcm0ucmVzZXQoe1xuICAgICAqICAgZmlyc3Q6IHt2YWx1ZTogJ25hbWUnLCBkaXNhYmxlZDogdHJ1ZX0sXG4gICAgICogICBsYXN0OiAnbGFzdCdcbiAgICAgKiB9KTtcbiAgICAgKlxuICAgICAqIGNvbnNvbGUubG9nKHRoaXMuZm9ybS52YWx1ZSk7ICAvLyB7Zmlyc3Q6ICduYW1lJywgbGFzdDogJ2xhc3QgbmFtZSd9XG4gICAgICogY29uc29sZS5sb2codGhpcy5mb3JtLmdldCgnZmlyc3QnKS5zdGF0dXMpOyAgLy8gJ0RJU0FCTEVEJ1xuICAgICAqIGBgYFxuICAgICAqIEBwYXJhbSB7Pz19IHZhbHVlXG4gICAgICogQHBhcmFtIHs/PX0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybUdyb3VwLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICh2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkgeyB2YWx1ZSA9IHt9OyB9XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHRoaXMuX2ZvckVhY2hDaGlsZChmdW5jdGlvbiAoY29udHJvbCwgbmFtZSkge1xuICAgICAgICAgICAgY29udHJvbC5yZXNldCh2YWx1ZVtuYW1lXSwgeyBvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBvcHRpb25zLmVtaXRFdmVudCB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlUHJpc3RpbmUob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVRvdWNoZWQob3B0aW9ucyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaGUgYWdncmVnYXRlIHZhbHVlIG9mIHRoZSB7XFxAbGluayBGb3JtR3JvdXB9LCBpbmNsdWRpbmcgYW55IGRpc2FibGVkIGNvbnRyb2xzLlxuICAgICAqXG4gICAgICogSWYgeW91J2QgbGlrZSB0byBpbmNsdWRlIGFsbCB2YWx1ZXMgcmVnYXJkbGVzcyBvZiBkaXNhYmxlZCBzdGF0dXMsIHVzZSB0aGlzIG1ldGhvZC5cbiAgICAgKiBPdGhlcndpc2UsIHRoZSBgdmFsdWVgIHByb3BlcnR5IGlzIHRoZSBiZXN0IHdheSB0byBnZXQgdGhlIHZhbHVlIG9mIHRoZSBncm91cC5cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuZ2V0UmF3VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWR1Y2VDaGlsZHJlbih7fSwgZnVuY3Rpb24gKGFjYywgY29udHJvbCwgbmFtZSkge1xuICAgICAgICAgICAgYWNjW25hbWVdID0gY29udHJvbCBpbnN0YW5jZW9mIEZvcm1Db250cm9sID8gY29udHJvbC52YWx1ZSA6ICgoY29udHJvbCkpLmdldFJhd1ZhbHVlKCk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFxcQGludGVybmFsXG4gICAgICogQHBhcmFtIHs/fSBuYW1lXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtR3JvdXAucHJvdG90eXBlLl90aHJvd0lmQ29udHJvbE1pc3NpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBpZiAoIU9iamVjdC5rZXlzKHRoaXMuY29udHJvbHMpLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiXFxuICAgICAgICBUaGVyZSBhcmUgbm8gZm9ybSBjb250cm9scyByZWdpc3RlcmVkIHdpdGggdGhpcyBncm91cCB5ZXQuICBJZiB5b3UncmUgdXNpbmcgbmdNb2RlbCxcXG4gICAgICAgIHlvdSBtYXkgd2FudCB0byBjaGVjayBuZXh0IHRpY2sgKGUuZy4gdXNlIHNldFRpbWVvdXQpLlxcbiAgICAgIFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuY29udHJvbHNbbmFtZV0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIGZvcm0gY29udHJvbCB3aXRoIG5hbWU6IFwiICsgbmFtZSArIFwiLlwiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogXFxAaW50ZXJuYWxcbiAgICAgKiBAcGFyYW0gez99IGNiXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtR3JvdXAucHJvdG90eXBlLl9mb3JFYWNoQ2hpbGQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5jb250cm9scykuZm9yRWFjaChmdW5jdGlvbiAoaykgeyByZXR1cm4gY2IoX3RoaXMuY29udHJvbHNba10sIGspOyB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFxcQGludGVybmFsXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtR3JvdXAucHJvdG90eXBlLl9zZXRVcENvbnRyb2xzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoZnVuY3Rpb24gKGNvbnRyb2wpIHtcbiAgICAgICAgICAgIGNvbnRyb2wuc2V0UGFyZW50KF90aGlzKTtcbiAgICAgICAgICAgIGNvbnRyb2wuX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlKF90aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFxcQGludGVybmFsXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtR3JvdXAucHJvdG90eXBlLl91cGRhdGVWYWx1ZSA9IGZ1bmN0aW9uICgpIHsgdGhpcy5fdmFsdWUgPSB0aGlzLl9yZWR1Y2VWYWx1ZSgpOyB9O1xuICAgIC8qKlxuICAgICAqIFxcQGludGVybmFsXG4gICAgICogQHBhcmFtIHs/fSBjb25kaXRpb25cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuX2FueUNvbnRyb2xzID0gZnVuY3Rpb24gKGNvbmRpdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyByZXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjb250cm9sLCBuYW1lKSB7XG4gICAgICAgICAgICByZXMgPSByZXMgfHwgKF90aGlzLmNvbnRhaW5zKG5hbWUpICYmIGNvbmRpdGlvbihjb250cm9sKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogXFxAaW50ZXJuYWxcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuX3JlZHVjZVZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVkdWNlQ2hpbGRyZW4oe30sIGZ1bmN0aW9uIChhY2MsIGNvbnRyb2wsIG5hbWUpIHtcbiAgICAgICAgICAgIGlmIChjb250cm9sLmVuYWJsZWQgfHwgX3RoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBhY2NbbmFtZV0gPSBjb250cm9sLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAqIEBwYXJhbSB7P30gaW5pdFZhbHVlXG4gICAgICogQHBhcmFtIHs/fSBmblxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybUdyb3VwLnByb3RvdHlwZS5fcmVkdWNlQ2hpbGRyZW4gPSBmdW5jdGlvbiAoaW5pdFZhbHVlLCBmbikge1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyByZXMgPSBpbml0VmFsdWU7XG4gICAgICAgIHRoaXMuX2ZvckVhY2hDaGlsZChmdW5jdGlvbiAoY29udHJvbCwgbmFtZSkgeyByZXMgPSBmbihyZXMsIGNvbnRyb2wsIG5hbWUpOyB9KTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFxcQGludGVybmFsXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtR3JvdXAucHJvdG90eXBlLl9hbGxDb250cm9sc0Rpc2FibGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXModGhpcy5jb250cm9scyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgY29udHJvbE5hbWUgPSBfYVtfaV07XG4gICAgICAgICAgICBpZiAodGhpcy5jb250cm9sc1tjb250cm9sTmFtZV0uZW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5jb250cm9scykubGVuZ3RoID4gMCB8fCB0aGlzLmRpc2FibGVkO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogXFxAaW50ZXJuYWxcbiAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtR3JvdXAucHJvdG90eXBlLl9jaGVja0FsbFZhbHVlc1ByZXNlbnQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjb250cm9sLCBuYW1lKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk11c3Qgc3VwcGx5IGEgdmFsdWUgZm9yIGZvcm0gY29udHJvbCB3aXRoIG5hbWU6ICdcIiArIG5hbWUgKyBcIicuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBGb3JtR3JvdXA7XG59KEFic3RyYWN0Q29udHJvbCkpO1xuLyoqXG4gKiBcXEB3aGF0SXREb2VzIFRyYWNrcyB0aGUgdmFsdWUgYW5kIHZhbGlkaXR5IHN0YXRlIG9mIGFuIGFycmF5IG9mIHtcXEBsaW5rIEZvcm1Db250cm9sfSxcbiAqIHtcXEBsaW5rIEZvcm1Hcm91cH0gb3Ige1xcQGxpbmsgRm9ybUFycmF5fSBpbnN0YW5jZXMuXG4gKlxuICogQSBgRm9ybUFycmF5YCBhZ2dyZWdhdGVzIHRoZSB2YWx1ZXMgb2YgZWFjaCBjaGlsZCB7XFxAbGluayBGb3JtQ29udHJvbH0gaW50byBhbiBhcnJheS5cbiAqIEl0IGNhbGN1bGF0ZXMgaXRzIHN0YXR1cyBieSByZWR1Y2luZyB0aGUgc3RhdHVzZXMgb2YgaXRzIGNoaWxkcmVuLiBGb3IgZXhhbXBsZSwgaWYgb25lIG9mXG4gKiB0aGUgY29udHJvbHMgaW4gYSBgRm9ybUFycmF5YCBpcyBpbnZhbGlkLCB0aGUgZW50aXJlIGFycmF5IGJlY29tZXMgaW52YWxpZC5cbiAqXG4gKiBgRm9ybUFycmF5YCBpcyBvbmUgb2YgdGhlIHRocmVlIGZ1bmRhbWVudGFsIGJ1aWxkaW5nIGJsb2NrcyB1c2VkIHRvIGRlZmluZSBmb3JtcyBpbiBBbmd1bGFyLFxuICogYWxvbmcgd2l0aCB7XFxAbGluayBGb3JtQ29udHJvbH0gYW5kIHtcXEBsaW5rIEZvcm1Hcm91cH0uXG4gKlxuICogXFxAaG93VG9Vc2VcbiAqXG4gKiBXaGVuIGluc3RhbnRpYXRpbmcgYSB7XFxAbGluayBGb3JtQXJyYXl9LCBwYXNzIGluIGFuIGFycmF5IG9mIGNoaWxkIGNvbnRyb2xzIGFzIHRoZSBmaXJzdFxuICogYXJndW1lbnQuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBcbiAqIGNvbnN0IGFyciA9IG5ldyBGb3JtQXJyYXkoW1xuICogICBuZXcgRm9ybUNvbnRyb2woJ05hbmN5JywgVmFsaWRhdG9ycy5taW5MZW5ndGgoMikpLFxuICogICBuZXcgRm9ybUNvbnRyb2woJ0RyZXcnKSxcbiAqIF0pO1xuICpcbiAqIGNvbnNvbGUubG9nKGFyci52YWx1ZSk7ICAgLy8gWydOYW5jeScsICdEcmV3J11cbiAqIGNvbnNvbGUubG9nKGFyci5zdGF0dXMpOyAgLy8gJ1ZBTElEJ1xuICogYGBgXG4gKlxuICogWW91IGNhbiBhbHNvIGluY2x1ZGUgYXJyYXktbGV2ZWwgdmFsaWRhdG9ycyBhcyB0aGUgc2Vjb25kIGFyZywgb3IgYXJyYXktbGV2ZWwgYXN5bmNcbiAqIHZhbGlkYXRvcnMgYXMgdGhlIHRoaXJkIGFyZy4gVGhlc2UgY29tZSBpbiBoYW5keSB3aGVuIHlvdSB3YW50IHRvIHBlcmZvcm0gdmFsaWRhdGlvblxuICogdGhhdCBjb25zaWRlcnMgdGhlIHZhbHVlIG9mIG1vcmUgdGhhbiBvbmUgY2hpbGQgY29udHJvbC5cbiAqXG4gKiAjIyMgQWRkaW5nIG9yIHJlbW92aW5nIGNvbnRyb2xzXG4gKlxuICogVG8gY2hhbmdlIHRoZSBjb250cm9scyBpbiB0aGUgYXJyYXksIHVzZSB0aGUgYHB1c2hgLCBgaW5zZXJ0YCwgb3IgYHJlbW92ZUF0YCBtZXRob2RzXG4gKiBpbiBgRm9ybUFycmF5YCBpdHNlbGYuIFRoZXNlIG1ldGhvZHMgZW5zdXJlIHRoZSBjb250cm9scyBhcmUgcHJvcGVybHkgdHJhY2tlZCBpbiB0aGVcbiAqIGZvcm0ncyBoaWVyYXJjaHkuIERvIG5vdCBtb2RpZnkgdGhlIGFycmF5IG9mIGBBYnN0cmFjdENvbnRyb2xgcyB1c2VkIHRvIGluc3RhbnRpYXRlXG4gKiB0aGUgYEZvcm1BcnJheWAgZGlyZWN0bHksIGFzIHRoYXQgd2lsbCByZXN1bHQgaW4gc3RyYW5nZSBhbmQgdW5leHBlY3RlZCBiZWhhdmlvciBzdWNoXG4gKiBhcyBicm9rZW4gY2hhbmdlIGRldGVjdGlvbi5cbiAqXG4gKiAqICoqbnBtIHBhY2thZ2UqKjogYFxcQGFuZ3VsYXIvZm9ybXNgXG4gKlxuICogXFxAc3RhYmxlXG4gKi9cbnZhciBGb3JtQXJyYXkgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEZvcm1BcnJheSwgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xzXG4gICAgICogQHBhcmFtIHs/PX0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIHs/PX0gYXN5bmNWYWxpZGF0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBGb3JtQXJyYXkoY29udHJvbHMsIHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdmFsaWRhdG9yIHx8IG51bGwsIGFzeW5jVmFsaWRhdG9yIHx8IG51bGwpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmNvbnRyb2xzID0gY29udHJvbHM7XG4gICAgICAgIF90aGlzLl9pbml0T2JzZXJ2YWJsZXMoKTtcbiAgICAgICAgX3RoaXMuX3NldFVwQ29udHJvbHMoKTtcbiAgICAgICAgX3RoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IG9ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sfSBhdCB0aGUgZ2l2ZW4gYGluZGV4YCBpbiB0aGUgYXJyYXkuXG4gICAgICogQHBhcmFtIHs/fSBpbmRleFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybUFycmF5LnByb3RvdHlwZS5hdCA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gdGhpcy5jb250cm9sc1tpbmRleF07IH07XG4gICAgLyoqXG4gICAgICogSW5zZXJ0IGEgbmV3IHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbH0gYXQgdGhlIGVuZCBvZiB0aGUgYXJyYXkuXG4gICAgICogQHBhcmFtIHs/fSBjb250cm9sXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtQXJyYXkucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAoY29udHJvbCkge1xuICAgICAgICB0aGlzLmNvbnRyb2xzLnB1c2goY29udHJvbCk7XG4gICAgICAgIHRoaXMuX3JlZ2lzdGVyQ29udHJvbChjb250cm9sKTtcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgIHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSW5zZXJ0IGEgbmV3IHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbH0gYXQgdGhlIGdpdmVuIGBpbmRleGAgaW4gdGhlIGFycmF5LlxuICAgICAqIEBwYXJhbSB7P30gaW5kZXhcbiAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1BcnJheS5wcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24gKGluZGV4LCBjb250cm9sKSB7XG4gICAgICAgIHRoaXMuY29udHJvbHMuc3BsaWNlKGluZGV4LCAwLCBjb250cm9sKTtcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXJDb250cm9sKGNvbnRyb2wpO1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmUgdGhlIGNvbnRyb2wgYXQgdGhlIGdpdmVuIGBpbmRleGAgaW4gdGhlIGFycmF5LlxuICAgICAqIEBwYXJhbSB7P30gaW5kZXhcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1BcnJheS5wcm90b3R5cGUucmVtb3ZlQXQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udHJvbHNbaW5kZXhdKVxuICAgICAgICAgICAgdGhpcy5jb250cm9sc1tpbmRleF0uX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlKGZ1bmN0aW9uICgpIHsgfSk7XG4gICAgICAgIHRoaXMuY29udHJvbHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgIHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVwbGFjZSBhbiBleGlzdGluZyBjb250cm9sLlxuICAgICAqIEBwYXJhbSB7P30gaW5kZXhcbiAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1BcnJheS5wcm90b3R5cGUuc2V0Q29udHJvbCA9IGZ1bmN0aW9uIChpbmRleCwgY29udHJvbCkge1xuICAgICAgICBpZiAodGhpcy5jb250cm9sc1tpbmRleF0pXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xzW2luZGV4XS5fcmVnaXN0ZXJPbkNvbGxlY3Rpb25DaGFuZ2UoZnVuY3Rpb24gKCkgeyB9KTtcbiAgICAgICAgdGhpcy5jb250cm9scy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBpZiAoY29udHJvbCkge1xuICAgICAgICAgICAgdGhpcy5jb250cm9scy5zcGxpY2UoaW5kZXgsIDAsIGNvbnRyb2wpO1xuICAgICAgICAgICAgdGhpcy5fcmVnaXN0ZXJDb250cm9sKGNvbnRyb2wpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UoKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQXJyYXkucHJvdG90eXBlLCBcImxlbmd0aFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMZW5ndGggb2YgdGhlIGNvbnRyb2wgYXJyYXkuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuY29udHJvbHMubGVuZ3RoOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiAgU2V0cyB0aGUgdmFsdWUgb2YgdGhlIHtcXEBsaW5rIEZvcm1BcnJheX0uIEl0IGFjY2VwdHMgYW4gYXJyYXkgdGhhdCBtYXRjaGVzXG4gICAgICogIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIGNvbnRyb2wuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBwZXJmb3JtcyBzdHJpY3QgY2hlY2tzLCBzbyBpdCB3aWxsIHRocm93IGFuIGVycm9yIGlmIHlvdSB0cnlcbiAgICAgKiB0byBzZXQgdGhlIHZhbHVlIG9mIGEgY29udHJvbCB0aGF0IGRvZXNuJ3QgZXhpc3Qgb3IgaWYgeW91IGV4Y2x1ZGUgdGhlXG4gICAgICogdmFsdWUgb2YgYSBjb250cm9sLlxuICAgICAqXG4gICAgICogICMjIyBFeGFtcGxlXG4gICAgICpcbiAgICAgKiAgYGBgXG4gICAgICogIGNvbnN0IGFyciA9IG5ldyBGb3JtQXJyYXkoW1xuICAgICAqICAgICBuZXcgRm9ybUNvbnRyb2woKSxcbiAgICAgKiAgICAgbmV3IEZvcm1Db250cm9sKClcbiAgICAgKiAgXSk7XG4gICAgICogIGNvbnNvbGUubG9nKGFyci52YWx1ZSk7ICAgLy8gW251bGwsIG51bGxdXG4gICAgICpcbiAgICAgKiAgYXJyLnNldFZhbHVlKFsnTmFuY3knLCAnRHJldyddKTtcbiAgICAgKiAgY29uc29sZS5sb2coYXJyLnZhbHVlKTsgICAvLyBbJ05hbmN5JywgJ0RyZXcnXVxuICAgICAqICBgYGBcbiAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICogQHBhcmFtIHs/PX0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybUFycmF5LnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICB0aGlzLl9jaGVja0FsbFZhbHVlc1ByZXNlbnQodmFsdWUpO1xuICAgICAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uIChuZXdWYWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIF90aGlzLl90aHJvd0lmQ29udHJvbE1pc3NpbmcoaW5kZXgpO1xuICAgICAgICAgICAgX3RoaXMuYXQoaW5kZXgpLnNldFZhbHVlKG5ld1ZhbHVlLCB7IG9ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IG9wdGlvbnMuZW1pdEV2ZW50IH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9wdGlvbnMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogIFBhdGNoZXMgdGhlIHZhbHVlIG9mIHRoZSB7XFxAbGluayBGb3JtQXJyYXl9LiBJdCBhY2NlcHRzIGFuIGFycmF5IHRoYXQgbWF0Y2hlcyB0aGVcbiAgICAgKiAgc3RydWN0dXJlIG9mIHRoZSBjb250cm9sLCBhbmQgd2lsbCBkbyBpdHMgYmVzdCB0byBtYXRjaCB0aGUgdmFsdWVzIHRvIHRoZSBjb3JyZWN0XG4gICAgICogIGNvbnRyb2xzIGluIHRoZSBncm91cC5cbiAgICAgKlxuICAgICAqICBJdCBhY2NlcHRzIGJvdGggc3VwZXItc2V0cyBhbmQgc3ViLXNldHMgb2YgdGhlIGFycmF5IHdpdGhvdXQgdGhyb3dpbmcgYW4gZXJyb3IuXG4gICAgICpcbiAgICAgKiAgIyMjIEV4YW1wbGVcbiAgICAgKlxuICAgICAqICBgYGBcbiAgICAgKiAgY29uc3QgYXJyID0gbmV3IEZvcm1BcnJheShbXG4gICAgICogICAgIG5ldyBGb3JtQ29udHJvbCgpLFxuICAgICAqICAgICBuZXcgRm9ybUNvbnRyb2woKVxuICAgICAqICBdKTtcbiAgICAgKiAgY29uc29sZS5sb2coYXJyLnZhbHVlKTsgICAvLyBbbnVsbCwgbnVsbF1cbiAgICAgKlxuICAgICAqICBhcnIucGF0Y2hWYWx1ZShbJ05hbmN5J10pO1xuICAgICAqICBjb25zb2xlLmxvZyhhcnIudmFsdWUpOyAgIC8vIFsnTmFuY3knLCBudWxsXVxuICAgICAqICBgYGBcbiAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICogQHBhcmFtIHs/PX0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybUFycmF5LnByb3RvdHlwZS5wYXRjaFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24gKG5ld1ZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLmF0KGluZGV4KSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmF0KGluZGV4KS5wYXRjaFZhbHVlKG5ld1ZhbHVlLCB7IG9ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IG9wdGlvbnMuZW1pdEV2ZW50IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9wdGlvbnMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVzZXRzIHRoZSB7XFxAbGluayBGb3JtQXJyYXl9LiBUaGlzIG1lYW5zIGJ5IGRlZmF1bHQ6XG4gICAgICpcbiAgICAgKiAqIFRoZSBhcnJheSBhbmQgYWxsIGRlc2NlbmRhbnRzIGFyZSBtYXJrZWQgYHByaXN0aW5lYFxuICAgICAqICogVGhlIGFycmF5IGFuZCBhbGwgZGVzY2VuZGFudHMgYXJlIG1hcmtlZCBgdW50b3VjaGVkYFxuICAgICAqICogVGhlIHZhbHVlIG9mIGFsbCBkZXNjZW5kYW50cyB3aWxsIGJlIG51bGwgb3IgbnVsbCBtYXBzXG4gICAgICpcbiAgICAgKiBZb3UgY2FuIGFsc28gcmVzZXQgdG8gYSBzcGVjaWZpYyBmb3JtIHN0YXRlIGJ5IHBhc3NpbmcgaW4gYW4gYXJyYXkgb2Ygc3RhdGVzXG4gICAgICogdGhhdCBtYXRjaGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIGNvbnRyb2wuIFRoZSBzdGF0ZSBjYW4gYmUgYSBzdGFuZGFsb25lIHZhbHVlXG4gICAgICogb3IgYSBmb3JtIHN0YXRlIG9iamVjdCB3aXRoIGJvdGggYSB2YWx1ZSBhbmQgYSBkaXNhYmxlZCBzdGF0dXMuXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiB0aGlzLmFyci5yZXNldChbJ25hbWUnLCAnbGFzdCBuYW1lJ10pO1xuICAgICAqXG4gICAgICogY29uc29sZS5sb2codGhpcy5hcnIudmFsdWUpOyAgLy8gWyduYW1lJywgJ2xhc3QgbmFtZSddXG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiAtIE9SIC1cbiAgICAgKlxuICAgICAqIGBgYFxuICAgICAqIHRoaXMuYXJyLnJlc2V0KFtcbiAgICAgKiAgIHt2YWx1ZTogJ25hbWUnLCBkaXNhYmxlZDogdHJ1ZX0sXG4gICAgICogICAnbGFzdCdcbiAgICAgKiBdKTtcbiAgICAgKlxuICAgICAqIGNvbnNvbGUubG9nKHRoaXMuYXJyLnZhbHVlKTsgIC8vIFsnbmFtZScsICdsYXN0IG5hbWUnXVxuICAgICAqIGNvbnNvbGUubG9nKHRoaXMuYXJyLmdldCgwKS5zdGF0dXMpOyAgLy8gJ0RJU0FCTEVEJ1xuICAgICAqIGBgYFxuICAgICAqIEBwYXJhbSB7Pz19IHZhbHVlXG4gICAgICogQHBhcmFtIHs/PX0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybUFycmF5LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICh2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkgeyB2YWx1ZSA9IFtdOyB9XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHRoaXMuX2ZvckVhY2hDaGlsZChmdW5jdGlvbiAoY29udHJvbCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnRyb2wucmVzZXQodmFsdWVbaW5kZXhdLCB7IG9ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IG9wdGlvbnMuZW1pdEV2ZW50IH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl91cGRhdGVQcmlzdGluZShvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlVG91Y2hlZChvcHRpb25zKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRoZSBhZ2dyZWdhdGUgdmFsdWUgb2YgdGhlIGFycmF5LCBpbmNsdWRpbmcgYW55IGRpc2FibGVkIGNvbnRyb2xzLlxuICAgICAqXG4gICAgICogSWYgeW91J2QgbGlrZSB0byBpbmNsdWRlIGFsbCB2YWx1ZXMgcmVnYXJkbGVzcyBvZiBkaXNhYmxlZCBzdGF0dXMsIHVzZSB0aGlzIG1ldGhvZC5cbiAgICAgKiBPdGhlcndpc2UsIHRoZSBgdmFsdWVgIHByb3BlcnR5IGlzIHRoZSBiZXN0IHdheSB0byBnZXQgdGhlIHZhbHVlIG9mIHRoZSBhcnJheS5cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1BcnJheS5wcm90b3R5cGUuZ2V0UmF3VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xzLm1hcChmdW5jdGlvbiAoY29udHJvbCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCA/IGNvbnRyb2wudmFsdWUgOiAoKGNvbnRyb2wpKS5nZXRSYXdWYWx1ZSgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFxcQGludGVybmFsXG4gICAgICogQHBhcmFtIHs/fSBpbmRleFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybUFycmF5LnByb3RvdHlwZS5fdGhyb3dJZkNvbnRyb2xNaXNzaW5nID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIGlmICghdGhpcy5jb250cm9scy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlxcbiAgICAgICAgVGhlcmUgYXJlIG5vIGZvcm0gY29udHJvbHMgcmVnaXN0ZXJlZCB3aXRoIHRoaXMgYXJyYXkgeWV0LiAgSWYgeW91J3JlIHVzaW5nIG5nTW9kZWwsXFxuICAgICAgICB5b3UgbWF5IHdhbnQgdG8gY2hlY2sgbmV4dCB0aWNrIChlLmcuIHVzZSBzZXRUaW1lb3V0KS5cXG4gICAgICBcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmF0KGluZGV4KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgZm9ybSBjb250cm9sIGF0IGluZGV4IFwiICsgaW5kZXgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAqIEBwYXJhbSB7P30gY2JcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1BcnJheS5wcm90b3R5cGUuX2ZvckVhY2hDaGlsZCA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICB0aGlzLmNvbnRyb2xzLmZvckVhY2goZnVuY3Rpb24gKGNvbnRyb2wsIGluZGV4KSB7IGNiKGNvbnRyb2wsIGluZGV4KTsgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybUFycmF5LnByb3RvdHlwZS5fdXBkYXRlVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5jb250cm9scy5maWx0ZXIoZnVuY3Rpb24gKGNvbnRyb2wpIHsgcmV0dXJuIGNvbnRyb2wuZW5hYmxlZCB8fCBfdGhpcy5kaXNhYmxlZDsgfSlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGNvbnRyb2wpIHsgcmV0dXJuIGNvbnRyb2wudmFsdWU7IH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogXFxAaW50ZXJuYWxcbiAgICAgKiBAcGFyYW0gez99IGNvbmRpdGlvblxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybUFycmF5LnByb3RvdHlwZS5fYW55Q29udHJvbHMgPSBmdW5jdGlvbiAoY29uZGl0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xzLnNvbWUoZnVuY3Rpb24gKGNvbnRyb2wpIHsgcmV0dXJuIGNvbnRyb2wuZW5hYmxlZCAmJiBjb25kaXRpb24oY29udHJvbCk7IH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogXFxAaW50ZXJuYWxcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1BcnJheS5wcm90b3R5cGUuX3NldFVwQ29udHJvbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX2ZvckVhY2hDaGlsZChmdW5jdGlvbiAoY29udHJvbCkgeyByZXR1cm4gX3RoaXMuX3JlZ2lzdGVyQ29udHJvbChjb250cm9sKTsgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1BcnJheS5wcm90b3R5cGUuX2NoZWNrQWxsVmFsdWVzUHJlc2VudCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoZnVuY3Rpb24gKGNvbnRyb2wsIGkpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZVtpXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTXVzdCBzdXBwbHkgYSB2YWx1ZSBmb3IgZm9ybSBjb250cm9sIGF0IGluZGV4OiBcIiArIGkgKyBcIi5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogXFxAaW50ZXJuYWxcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1BcnJheS5wcm90b3R5cGUuX2FsbENvbnRyb2xzRGlzYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLmNvbnRyb2xzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGNvbnRyb2wgPSBfYVtfaV07XG4gICAgICAgICAgICBpZiAoY29udHJvbC5lbmFibGVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9scy5sZW5ndGggPiAwIHx8IHRoaXMuZGlzYWJsZWQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1BcnJheS5wcm90b3R5cGUuX3JlZ2lzdGVyQ29udHJvbCA9IGZ1bmN0aW9uIChjb250cm9sKSB7XG4gICAgICAgIGNvbnRyb2wuc2V0UGFyZW50KHRoaXMpO1xuICAgICAgICBjb250cm9sLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZSh0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UpO1xuICAgIH07XG4gICAgcmV0dXJuIEZvcm1BcnJheTtcbn0oQWJzdHJhY3RDb250cm9sKSk7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG52YXIgZm9ybURpcmVjdGl2ZVByb3ZpZGVyID0ge1xuICAgIHByb3ZpZGU6IENvbnRyb2xDb250YWluZXIsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gTmdGb3JtOyB9KVxufTtcbnZhciByZXNvbHZlZFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4vKipcbiAqIFxcQHdoYXRJdERvZXMgQ3JlYXRlcyBhIHRvcC1sZXZlbCB7XFxAbGluayBGb3JtR3JvdXB9IGluc3RhbmNlIGFuZCBiaW5kcyBpdCB0byBhIGZvcm1cbiAqIHRvIHRyYWNrIGFnZ3JlZ2F0ZSBmb3JtIHZhbHVlIGFuZCB2YWxpZGF0aW9uIHN0YXR1cy5cbiAqXG4gKiBcXEBob3dUb1VzZVxuICpcbiAqIEFzIHNvb24gYXMgeW91IGltcG9ydCB0aGUgYEZvcm1zTW9kdWxlYCwgdGhpcyBkaXJlY3RpdmUgYmVjb21lcyBhY3RpdmUgYnkgZGVmYXVsdCBvblxuICogYWxsIGA8Zm9ybT5gIHRhZ3MuICBZb3UgZG9uJ3QgbmVlZCB0byBhZGQgYSBzcGVjaWFsIHNlbGVjdG9yLlxuICpcbiAqIFlvdSBjYW4gZXhwb3J0IHRoZSBkaXJlY3RpdmUgaW50byBhIGxvY2FsIHRlbXBsYXRlIHZhcmlhYmxlIHVzaW5nIGBuZ0Zvcm1gIGFzIHRoZSBrZXlcbiAqIChleDogYCNteUZvcm09XCJuZ0Zvcm1cImApLiBUaGlzIGlzIG9wdGlvbmFsLCBidXQgdXNlZnVsLiAgTWFueSBwcm9wZXJ0aWVzIGZyb20gdGhlIHVuZGVybHlpbmdcbiAqIHtcXEBsaW5rIEZvcm1Hcm91cH0gaW5zdGFuY2UgYXJlIGR1cGxpY2F0ZWQgb24gdGhlIGRpcmVjdGl2ZSBpdHNlbGYsIHNvIGEgcmVmZXJlbmNlIHRvIGl0XG4gKiB3aWxsIGdpdmUgeW91IGFjY2VzcyB0byB0aGUgYWdncmVnYXRlIHZhbHVlIGFuZCB2YWxpZGl0eSBzdGF0dXMgb2YgdGhlIGZvcm0sIGFzIHdlbGwgYXNcbiAqIHVzZXIgaW50ZXJhY3Rpb24gcHJvcGVydGllcyBsaWtlIGBkaXJ0eWAgYW5kIGB0b3VjaGVkYC5cbiAqXG4gKiBUbyByZWdpc3RlciBjaGlsZCBjb250cm9scyB3aXRoIHRoZSBmb3JtLCB5b3UnbGwgd2FudCB0byB1c2Uge1xcQGxpbmsgTmdNb2RlbH0gd2l0aCBhXG4gKiBgbmFtZWAgYXR0cmlidXRlLiAgWW91IGNhbiBhbHNvIHVzZSB7XFxAbGluayBOZ01vZGVsR3JvdXB9IGlmIHlvdSdkIGxpa2UgdG8gY3JlYXRlXG4gKiBzdWItZ3JvdXBzIHdpdGhpbiB0aGUgZm9ybS5cbiAqXG4gKiBZb3UgY2FuIGxpc3RlbiB0byB0aGUgZGlyZWN0aXZlJ3MgYG5nU3VibWl0YCBldmVudCB0byBiZSBub3RpZmllZCB3aGVuIHRoZSB1c2VyIGhhc1xuICogdHJpZ2dlcmVkIGEgZm9ybSBzdWJtaXNzaW9uLiBUaGUgYG5nU3VibWl0YCBldmVudCB3aWxsIGJlIGVtaXR0ZWQgd2l0aCB0aGUgb3JpZ2luYWwgZm9ybVxuICogc3VibWlzc2lvbiBldmVudC5cbiAqXG4gKiB7XFxAZXhhbXBsZSBmb3Jtcy90cy9zaW1wbGVGb3JtL3NpbXBsZV9mb3JtX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICpcbiAqICogKipucG0gcGFja2FnZSoqOiBgXFxAYW5ndWxhci9mb3Jtc2BcbiAqXG4gKiAqICoqTmdNb2R1bGUqKjogYEZvcm1zTW9kdWxlYFxuICpcbiAqICBcXEBzdGFibGVcbiAqL1xudmFyIE5nRm9ybSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTmdGb3JtLCBfc3VwZXIpO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICAgICAqIEBwYXJhbSB7P30gYXN5bmNWYWxpZGF0b3JzXG4gICAgICovXG4gICAgZnVuY3Rpb24gTmdGb3JtKHZhbGlkYXRvcnMsIGFzeW5jVmFsaWRhdG9ycykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fc3VibWl0dGVkID0gZmFsc2U7XG4gICAgICAgIF90aGlzLm5nU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICBfdGhpcy5mb3JtID1cbiAgICAgICAgICAgIG5ldyBGb3JtR3JvdXAoe30sIGNvbXBvc2VWYWxpZGF0b3JzKHZhbGlkYXRvcnMpLCBjb21wb3NlQXN5bmNWYWxpZGF0b3JzKGFzeW5jVmFsaWRhdG9ycykpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ0Zvcm0ucHJvdG90eXBlLCBcInN1Ym1pdHRlZFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9zdWJtaXR0ZWQ7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ0Zvcm0ucHJvdG90eXBlLCBcImZvcm1EaXJlY3RpdmVcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5nRm9ybS5wcm90b3R5cGUsIFwiY29udHJvbFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmZvcm07IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ0Zvcm0ucHJvdG90eXBlLCBcInBhdGhcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ0Zvcm0ucHJvdG90eXBlLCBcImNvbnRyb2xzXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sczsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIE5nRm9ybS5wcm90b3R5cGUuYWRkQ29udHJvbCA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVzb2x2ZWRQcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY29udGFpbmVyID0gX3RoaXMuX2ZpbmRDb250YWluZXIoZGlyLnBhdGgpO1xuICAgICAgICAgICAgZGlyLl9jb250cm9sID0gKGNvbnRhaW5lci5yZWdpc3RlckNvbnRyb2woZGlyLm5hbWUsIGRpci5jb250cm9sKSk7XG4gICAgICAgICAgICBzZXRVcENvbnRyb2woZGlyLmNvbnRyb2wsIGRpcik7XG4gICAgICAgICAgICBkaXIuY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgTmdGb3JtLnByb3RvdHlwZS5nZXRDb250cm9sID0gZnVuY3Rpb24gKGRpcikgeyByZXR1cm4gKHRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpKTsgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgTmdGb3JtLnByb3RvdHlwZS5yZW1vdmVDb250cm9sID0gZnVuY3Rpb24gKGRpcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXNvbHZlZFByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBjb250YWluZXIgPSBfdGhpcy5fZmluZENvbnRhaW5lcihkaXIucGF0aCk7XG4gICAgICAgICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNvbnRyb2woZGlyLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBOZ0Zvcm0ucHJvdG90eXBlLmFkZEZvcm1Hcm91cCA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVzb2x2ZWRQcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY29udGFpbmVyID0gX3RoaXMuX2ZpbmRDb250YWluZXIoZGlyLnBhdGgpO1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gZ3JvdXAgPSBuZXcgRm9ybUdyb3VwKHt9KTtcbiAgICAgICAgICAgIHNldFVwRm9ybUNvbnRhaW5lcihncm91cCwgZGlyKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZWdpc3RlckNvbnRyb2woZGlyLm5hbWUsIGdyb3VwKTtcbiAgICAgICAgICAgIGdyb3VwLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBOZ0Zvcm0ucHJvdG90eXBlLnJlbW92ZUZvcm1Hcm91cCA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVzb2x2ZWRQcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY29udGFpbmVyID0gX3RoaXMuX2ZpbmRDb250YWluZXIoZGlyLnBhdGgpO1xuICAgICAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDb250cm9sKGRpci5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgTmdGb3JtLnByb3RvdHlwZS5nZXRGb3JtR3JvdXAgPSBmdW5jdGlvbiAoZGlyKSB7IHJldHVybiAodGhpcy5mb3JtLmdldChkaXIucGF0aCkpOyB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgTmdGb3JtLnByb3RvdHlwZS51cGRhdGVNb2RlbCA9IGZ1bmN0aW9uIChkaXIsIHZhbHVlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlc29sdmVkUHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGN0cmwgPSAoX3RoaXMuZm9ybS5nZXQoLyoqIEB0eXBlIHs/fSAqLyAoKGRpci5wYXRoKSkpKTtcbiAgICAgICAgICAgIGN0cmwuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIE5nRm9ybS5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHsgdGhpcy5jb250cm9sLnNldFZhbHVlKHZhbHVlKTsgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99ICRldmVudFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgTmdGb3JtLnByb3RvdHlwZS5vblN1Ym1pdCA9IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgdGhpcy5fc3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5uZ1N1Ym1pdC5lbWl0KCRldmVudCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgTmdGb3JtLnByb3RvdHlwZS5vblJlc2V0ID0gZnVuY3Rpb24gKCkgeyB0aGlzLnJlc2V0Rm9ybSgpOyB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Pz19IHZhbHVlXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBOZ0Zvcm0ucHJvdG90eXBlLnJlc2V0Rm9ybSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkgeyB2YWx1ZSA9IHVuZGVmaW5lZDsgfVxuICAgICAgICB0aGlzLmZvcm0ucmVzZXQodmFsdWUpO1xuICAgICAgICB0aGlzLl9zdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFxcQGludGVybmFsXG4gICAgICogQHBhcmFtIHs/fSBwYXRoXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBOZ0Zvcm0ucHJvdG90eXBlLl9maW5kQ29udGFpbmVyID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgICAgcGF0aC5wb3AoKTtcbiAgICAgICAgcmV0dXJuIHBhdGgubGVuZ3RoID8gKHRoaXMuZm9ybS5nZXQocGF0aCkpIDogdGhpcy5mb3JtO1xuICAgIH07XG4gICAgcmV0dXJuIE5nRm9ybTtcbn0oQ29udHJvbENvbnRhaW5lcikpO1xuTmdGb3JtLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtOm5vdChbbmdOb0Zvcm1dKTpub3QoW2Zvcm1Hcm91cF0pLG5nRm9ybSxbbmdGb3JtXScsXG4gICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbZm9ybURpcmVjdGl2ZVByb3ZpZGVyXSxcbiAgICAgICAgICAgICAgICBob3N0OiB7ICcoc3VibWl0KSc6ICdvblN1Ym1pdCgkZXZlbnQpJywgJyhyZXNldCknOiAnb25SZXNldCgpJyB9LFxuICAgICAgICAgICAgICAgIG91dHB1dHM6IFsnbmdTdWJtaXQnXSxcbiAgICAgICAgICAgICAgICBleHBvcnRBczogJ25nRm9ybSdcbiAgICAgICAgICAgIH0sXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuTmdGb3JtLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgIHsgdHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogU2VsZiB9LCB7IHR5cGU6IEluamVjdCwgYXJnczogW05HX1ZBTElEQVRPUlMsXSB9LF0gfSxcbiAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IFNlbGYgfSwgeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtOR19BU1lOQ19WQUxJREFUT1JTLF0gfSxdIH0sXG5dOyB9O1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xudmFyIEZvcm1FcnJvckV4YW1wbGVzID0ge1xuICAgIGZvcm1Db250cm9sTmFtZTogXCJcXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cXFwibXlHcm91cFxcXCI+XFxuICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cXFwiZmlyc3ROYW1lXFxcIj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIEluIHlvdXIgY2xhc3M6XFxuXFxuICAgIHRoaXMubXlHcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xcbiAgICAgICBmaXJzdE5hbWU6IG5ldyBGb3JtQ29udHJvbCgpXFxuICAgIH0pO1wiLFxuICAgIGZvcm1Hcm91cE5hbWU6IFwiXFxuICAgIDxkaXYgW2Zvcm1Hcm91cF09XFxcIm15R3JvdXBcXFwiPlxcbiAgICAgICA8ZGl2IGZvcm1Hcm91cE5hbWU9XFxcInBlcnNvblxcXCI+XFxuICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XFxcImZpcnN0TmFtZVxcXCI+XFxuICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgSW4geW91ciBjbGFzczpcXG5cXG4gICAgdGhpcy5teUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XFxuICAgICAgIHBlcnNvbjogbmV3IEZvcm1Hcm91cCh7IGZpcnN0TmFtZTogbmV3IEZvcm1Db250cm9sKCkgfSlcXG4gICAgfSk7XCIsXG4gICAgZm9ybUFycmF5TmFtZTogXCJcXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cXFwibXlHcm91cFxcXCI+XFxuICAgICAgPGRpdiBmb3JtQXJyYXlOYW1lPVxcXCJjaXRpZXNcXFwiPlxcbiAgICAgICAgPGRpdiAqbmdGb3I9XFxcImxldCBjaXR5IG9mIGNpdHlBcnJheS5jb250cm9sczsgaW5kZXggYXMgaVxcXCI+XFxuICAgICAgICAgIDxpbnB1dCBbZm9ybUNvbnRyb2xOYW1lXT1cXFwiaVxcXCI+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIEluIHlvdXIgY2xhc3M6XFxuXFxuICAgIHRoaXMuY2l0eUFycmF5ID0gbmV3IEZvcm1BcnJheShbbmV3IEZvcm1Db250cm9sKCdTRicpXSk7XFxuICAgIHRoaXMubXlHcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xcbiAgICAgIGNpdGllczogdGhpcy5jaXR5QXJyYXlcXG4gICAgfSk7XCIsXG4gICAgbmdNb2RlbEdyb3VwOiBcIlxcbiAgICA8Zm9ybT5cXG4gICAgICAgPGRpdiBuZ01vZGVsR3JvdXA9XFxcInBlcnNvblxcXCI+XFxuICAgICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cXFwicGVyc29uLm5hbWVcXFwiIG5hbWU9XFxcImZpcnN0TmFtZVxcXCI+XFxuICAgICAgIDwvZGl2PlxcbiAgICA8L2Zvcm0+XCIsXG4gICAgbmdNb2RlbFdpdGhGb3JtR3JvdXA6IFwiXFxuICAgIDxkaXYgW2Zvcm1Hcm91cF09XFxcIm15R3JvdXBcXFwiPlxcbiAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVxcXCJmaXJzdE5hbWVcXFwiPlxcbiAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XFxcInNob3dNb3JlQ29udHJvbHNcXFwiIFtuZ01vZGVsT3B0aW9uc109XFxcIntzdGFuZGFsb25lOiB0cnVlfVxcXCI+XFxuICAgIDwvZGl2PlxcbiAgXCJcbn07XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG52YXIgVGVtcGxhdGVEcml2ZW5FcnJvcnMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRlbXBsYXRlRHJpdmVuRXJyb3JzKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFRlbXBsYXRlRHJpdmVuRXJyb3JzLm1vZGVsUGFyZW50RXhjZXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcXG4gICAgICBuZ01vZGVsIGNhbm5vdCBiZSB1c2VkIHRvIHJlZ2lzdGVyIGZvcm0gY29udHJvbHMgd2l0aCBhIHBhcmVudCBmb3JtR3JvdXAgZGlyZWN0aXZlLiAgVHJ5IHVzaW5nXFxuICAgICAgZm9ybUdyb3VwJ3MgcGFydG5lciBkaXJlY3RpdmUgXFxcImZvcm1Db250cm9sTmFtZVxcXCIgaW5zdGVhZC4gIEV4YW1wbGU6XFxuXFxuICAgICAgXCIgKyBGb3JtRXJyb3JFeGFtcGxlcy5mb3JtQ29udHJvbE5hbWUgKyBcIlxcblxcbiAgICAgIE9yLCBpZiB5b3UnZCBsaWtlIHRvIGF2b2lkIHJlZ2lzdGVyaW5nIHRoaXMgZm9ybSBjb250cm9sLCBpbmRpY2F0ZSB0aGF0IGl0J3Mgc3RhbmRhbG9uZSBpbiBuZ01vZGVsT3B0aW9uczpcXG5cXG4gICAgICBFeGFtcGxlOlxcblxcbiAgICAgIFwiICsgRm9ybUVycm9yRXhhbXBsZXMubmdNb2RlbFdpdGhGb3JtR3JvdXApO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBUZW1wbGF0ZURyaXZlbkVycm9ycy5mb3JtR3JvdXBOYW1lRXhjZXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcXG4gICAgICBuZ01vZGVsIGNhbm5vdCBiZSB1c2VkIHRvIHJlZ2lzdGVyIGZvcm0gY29udHJvbHMgd2l0aCBhIHBhcmVudCBmb3JtR3JvdXBOYW1lIG9yIGZvcm1BcnJheU5hbWUgZGlyZWN0aXZlLlxcblxcbiAgICAgIE9wdGlvbiAxOiBVc2UgZm9ybUNvbnRyb2xOYW1lIGluc3RlYWQgb2YgbmdNb2RlbCAocmVhY3RpdmUgc3RyYXRlZ3kpOlxcblxcbiAgICAgIFwiICsgRm9ybUVycm9yRXhhbXBsZXMuZm9ybUdyb3VwTmFtZSArIFwiXFxuXFxuICAgICAgT3B0aW9uIDI6ICBVcGRhdGUgbmdNb2RlbCdzIHBhcmVudCBiZSBuZ01vZGVsR3JvdXAgKHRlbXBsYXRlLWRyaXZlbiBzdHJhdGVneSk6XFxuXFxuICAgICAgXCIgKyBGb3JtRXJyb3JFeGFtcGxlcy5uZ01vZGVsR3JvdXApO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBUZW1wbGF0ZURyaXZlbkVycm9ycy5taXNzaW5nTmFtZUV4Y2VwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSWYgbmdNb2RlbCBpcyB1c2VkIHdpdGhpbiBhIGZvcm0gdGFnLCBlaXRoZXIgdGhlIG5hbWUgYXR0cmlidXRlIG11c3QgYmUgc2V0IG9yIHRoZSBmb3JtXFxuICAgICAgY29udHJvbCBtdXN0IGJlIGRlZmluZWQgYXMgJ3N0YW5kYWxvbmUnIGluIG5nTW9kZWxPcHRpb25zLlxcblxcbiAgICAgIEV4YW1wbGUgMTogPGlucHV0IFsobmdNb2RlbCldPVxcXCJwZXJzb24uZmlyc3ROYW1lXFxcIiBuYW1lPVxcXCJmaXJzdFxcXCI+XFxuICAgICAgRXhhbXBsZSAyOiA8aW5wdXQgWyhuZ01vZGVsKV09XFxcInBlcnNvbi5maXJzdE5hbWVcXFwiIFtuZ01vZGVsT3B0aW9uc109XFxcIntzdGFuZGFsb25lOiB0cnVlfVxcXCI+XCIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBUZW1wbGF0ZURyaXZlbkVycm9ycy5tb2RlbEdyb3VwUGFyZW50RXhjZXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcXG4gICAgICBuZ01vZGVsR3JvdXAgY2Fubm90IGJlIHVzZWQgd2l0aCBhIHBhcmVudCBmb3JtR3JvdXAgZGlyZWN0aXZlLlxcblxcbiAgICAgIE9wdGlvbiAxOiBVc2UgZm9ybUdyb3VwTmFtZSBpbnN0ZWFkIG9mIG5nTW9kZWxHcm91cCAocmVhY3RpdmUgc3RyYXRlZ3kpOlxcblxcbiAgICAgIFwiICsgRm9ybUVycm9yRXhhbXBsZXMuZm9ybUdyb3VwTmFtZSArIFwiXFxuXFxuICAgICAgT3B0aW9uIDI6ICBVc2UgYSByZWd1bGFyIGZvcm0gdGFnIGluc3RlYWQgb2YgdGhlIGZvcm1Hcm91cCBkaXJlY3RpdmUgKHRlbXBsYXRlLWRyaXZlbiBzdHJhdGVneSk6XFxuXFxuICAgICAgXCIgKyBGb3JtRXJyb3JFeGFtcGxlcy5uZ01vZGVsR3JvdXApO1xuICAgIH07XG4gICAgcmV0dXJuIFRlbXBsYXRlRHJpdmVuRXJyb3JzO1xufSgpKTtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbnZhciBtb2RlbEdyb3VwUHJvdmlkZXIgPSB7XG4gICAgcHJvdmlkZTogQ29udHJvbENvbnRhaW5lcixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBOZ01vZGVsR3JvdXA7IH0pXG59O1xuLyoqXG4gKiBcXEB3aGF0SXREb2VzIENyZWF0ZXMgYW5kIGJpbmRzIGEge1xcQGxpbmsgRm9ybUdyb3VwfSBpbnN0YW5jZSB0byBhIERPTSBlbGVtZW50LlxuICpcbiAqIFxcQGhvd1RvVXNlXG4gKlxuICogVGhpcyBkaXJlY3RpdmUgY2FuIG9ubHkgYmUgdXNlZCBhcyBhIGNoaWxkIG9mIHtcXEBsaW5rIE5nRm9ybX0gKG9yIGluIG90aGVyIHdvcmRzLFxuICogd2l0aGluIGA8Zm9ybT5gIHRhZ3MpLlxuICpcbiAqIFVzZSB0aGlzIGRpcmVjdGl2ZSBpZiB5b3UnZCBsaWtlIHRvIGNyZWF0ZSBhIHN1Yi1ncm91cCB3aXRoaW4gYSBmb3JtLiBUaGlzIGNhblxuICogY29tZSBpbiBoYW5keSBpZiB5b3Ugd2FudCB0byB2YWxpZGF0ZSBhIHN1Yi1ncm91cCBvZiB5b3VyIGZvcm0gc2VwYXJhdGVseSBmcm9tXG4gKiB0aGUgcmVzdCBvZiB5b3VyIGZvcm0sIG9yIGlmIHNvbWUgdmFsdWVzIGluIHlvdXIgZG9tYWluIG1vZGVsIG1ha2UgbW9yZSBzZW5zZSB0b1xuICogY29uc3VtZSB0b2dldGhlciBpbiBhIG5lc3RlZCBvYmplY3QuXG4gKlxuICogUGFzcyBpbiB0aGUgbmFtZSB5b3UnZCBsaWtlIHRoaXMgc3ViLWdyb3VwIHRvIGhhdmUgYW5kIGl0IHdpbGwgYmVjb21lIHRoZSBrZXlcbiAqIGZvciB0aGUgc3ViLWdyb3VwIGluIHRoZSBmb3JtJ3MgZnVsbCB2YWx1ZS4gWW91IGNhbiBhbHNvIGV4cG9ydCB0aGUgZGlyZWN0aXZlIGludG9cbiAqIGEgbG9jYWwgdGVtcGxhdGUgdmFyaWFibGUgdXNpbmcgYG5nTW9kZWxHcm91cGAgKGV4OiBgI215R3JvdXA9XCJuZ01vZGVsR3JvdXBcImApLlxuICpcbiAqIHtcXEBleGFtcGxlIGZvcm1zL3RzL25nTW9kZWxHcm91cC9uZ19tb2RlbF9ncm91cF9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAqXG4gKiAqICoqbnBtIHBhY2thZ2UqKjogYFxcQGFuZ3VsYXIvZm9ybXNgXG4gKlxuICogKiAqKk5nTW9kdWxlKio6IGBGb3Jtc01vZHVsZWBcbiAqXG4gKiBcXEBzdGFibGVcbiAqL1xudmFyIE5nTW9kZWxHcm91cCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTmdNb2RlbEdyb3VwLCBfc3VwZXIpO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gcGFyZW50XG4gICAgICogQHBhcmFtIHs/fSB2YWxpZGF0b3JzXG4gICAgICogQHBhcmFtIHs/fSBhc3luY1ZhbGlkYXRvcnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBOZ01vZGVsR3JvdXAocGFyZW50LCB2YWxpZGF0b3JzLCBhc3luY1ZhbGlkYXRvcnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICAgICAgX3RoaXMuX3ZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzO1xuICAgICAgICBfdGhpcy5fYXN5bmNWYWxpZGF0b3JzID0gYXN5bmNWYWxpZGF0b3JzO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFxcQGludGVybmFsXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBOZ01vZGVsR3JvdXAucHJvdG90eXBlLl9jaGVja1BhcmVudFR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghKHRoaXMuX3BhcmVudCBpbnN0YW5jZW9mIE5nTW9kZWxHcm91cCkgJiYgISh0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBOZ0Zvcm0pKSB7XG4gICAgICAgICAgICBUZW1wbGF0ZURyaXZlbkVycm9ycy5tb2RlbEdyb3VwUGFyZW50RXhjZXB0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBOZ01vZGVsR3JvdXA7XG59KEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlKSk7XG5OZ01vZGVsR3JvdXAuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3sgc2VsZWN0b3I6ICdbbmdNb2RlbEdyb3VwXScsIHByb3ZpZGVyczogW21vZGVsR3JvdXBQcm92aWRlcl0sIGV4cG9ydEFzOiAnbmdNb2RlbEdyb3VwJyB9LF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbk5nTW9kZWxHcm91cC5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICB7IHR5cGU6IENvbnRyb2xDb250YWluZXIsIGRlY29yYXRvcnM6IFt7IHR5cGU6IEhvc3QgfSwgeyB0eXBlOiBTa2lwU2VsZiB9LF0gfSxcbiAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IFNlbGYgfSwgeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtOR19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBTZWxmIH0sIHsgdHlwZTogSW5qZWN0LCBhcmdzOiBbTkdfQVNZTkNfVkFMSURBVE9SUyxdIH0sXSB9LFxuXTsgfTtcbk5nTW9kZWxHcm91cC5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAnbmFtZSc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ25nTW9kZWxHcm91cCcsXSB9LF0sXG59O1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xudmFyIGZvcm1Db250cm9sQmluZGluZyA9IHtcbiAgICBwcm92aWRlOiBOZ0NvbnRyb2wsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gTmdNb2RlbDsgfSlcbn07XG4vKipcbiAqIGBuZ01vZGVsYCBmb3JjZXMgYW4gYWRkaXRpb25hbCBjaGFuZ2UgZGV0ZWN0aW9uIHJ1biB3aGVuIGl0cyBpbnB1dHMgY2hhbmdlOlxuICogRS5nLjpcbiAqIGBgYFxuICogPGRpdj57e215TW9kZWwudmFsaWR9fTwvZGl2PlxuICogPGlucHV0IFsobmdNb2RlbCldPVwibXlWYWx1ZVwiICNteU1vZGVsPVwibmdNb2RlbFwiPlxuICogYGBgXG4gKiBJLmUuIGBuZ01vZGVsYCBjYW4gZXhwb3J0IGl0c2VsZiBvbiB0aGUgZWxlbWVudCBhbmQgdGhlbiBiZSB1c2VkIGluIHRoZSB0ZW1wbGF0ZS5cbiAqIE5vcm1hbGx5LCB0aGlzIHdvdWxkIHJlc3VsdCBpbiBleHByZXNzaW9ucyBiZWZvcmUgdGhlIGBpbnB1dGAgdGhhdCB1c2UgdGhlIGV4cG9ydGVkIGRpcmVjdGl2ZVxuICogdG8gaGF2ZSBhbmQgb2xkIHZhbHVlIGFzIHRoZXkgaGF2ZSBiZWVuXG4gKiBkaXJ0eSBjaGVja2VkIGJlZm9yZS4gQXMgdGhpcyBpcyBhIHZlcnkgY29tbW9uIGNhc2UgZm9yIGBuZ01vZGVsYCwgd2UgYWRkZWQgdGhpcyBzZWNvbmQgY2hhbmdlXG4gKiBkZXRlY3Rpb24gcnVuLlxuICpcbiAqIE5vdGVzOlxuICogLSB0aGlzIGlzIGp1c3Qgb25lIGV4dHJhIHJ1biBubyBtYXR0ZXIgaG93IG1hbnkgYG5nTW9kZWxgIGhhdmUgYmVlbiBjaGFuZ2VkLlxuICogLSB0aGlzIGlzIGEgZ2VuZXJhbCBwcm9ibGVtIHdoZW4gdXNpbmcgYGV4cG9ydEFzYCBmb3IgZGlyZWN0aXZlcyFcbiAqL1xudmFyIHJlc29sdmVkUHJvbWlzZSQxID0gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuLyoqXG4gKiBcXEB3aGF0SXREb2VzIENyZWF0ZXMgYSB7XFxAbGluayBGb3JtQ29udHJvbH0gaW5zdGFuY2UgZnJvbSBhIGRvbWFpbiBtb2RlbCBhbmQgYmluZHMgaXRcbiAqIHRvIGEgZm9ybSBjb250cm9sIGVsZW1lbnQuXG4gKlxuICogVGhlIHtcXEBsaW5rIEZvcm1Db250cm9sfSBpbnN0YW5jZSB3aWxsIHRyYWNrIHRoZSB2YWx1ZSwgdXNlciBpbnRlcmFjdGlvbiwgYW5kXG4gKiB2YWxpZGF0aW9uIHN0YXR1cyBvZiB0aGUgY29udHJvbCBhbmQga2VlcCB0aGUgdmlldyBzeW5jZWQgd2l0aCB0aGUgbW9kZWwuIElmIHVzZWRcbiAqIHdpdGhpbiBhIHBhcmVudCBmb3JtLCB0aGUgZGlyZWN0aXZlIHdpbGwgYWxzbyByZWdpc3RlciBpdHNlbGYgd2l0aCB0aGUgZm9ybSBhcyBhIGNoaWxkXG4gKiBjb250cm9sLlxuICpcbiAqIFxcQGhvd1RvVXNlXG4gKlxuICogVGhpcyBkaXJlY3RpdmUgY2FuIGJlIHVzZWQgYnkgaXRzZWxmIG9yIGFzIHBhcnQgb2YgYSBsYXJnZXIgZm9ybS4gQWxsIHlvdSBuZWVkIGlzIHRoZVxuICogYG5nTW9kZWxgIHNlbGVjdG9yIHRvIGFjdGl2YXRlIGl0LlxuICpcbiAqIEl0IGFjY2VwdHMgYSBkb21haW4gbW9kZWwgYXMgYW4gb3B0aW9uYWwge1xcQGxpbmsgSW5wdXR9LiBJZiB5b3UgaGF2ZSBhIG9uZS13YXkgYmluZGluZ1xuICogdG8gYG5nTW9kZWxgIHdpdGggYFtdYCBzeW50YXgsIGNoYW5naW5nIHRoZSB2YWx1ZSBvZiB0aGUgZG9tYWluIG1vZGVsIGluIHRoZSBjb21wb25lbnRcbiAqIGNsYXNzIHdpbGwgc2V0IHRoZSB2YWx1ZSBpbiB0aGUgdmlldy4gSWYgeW91IGhhdmUgYSB0d28td2F5IGJpbmRpbmcgd2l0aCBgWygpXWAgc3ludGF4XG4gKiAoYWxzbyBrbm93biBhcyAnYmFuYW5hLWJveCBzeW50YXgnKSwgdGhlIHZhbHVlIGluIHRoZSBVSSB3aWxsIGFsd2F5cyBiZSBzeW5jZWQgYmFjayB0b1xuICogdGhlIGRvbWFpbiBtb2RlbCBpbiB5b3VyIGNsYXNzIGFzIHdlbGwuXG4gKlxuICogSWYgeW91IHdpc2ggdG8gaW5zcGVjdCB0aGUgcHJvcGVydGllcyBvZiB0aGUgYXNzb2NpYXRlZCB7XFxAbGluayBGb3JtQ29udHJvbH0gKGxpa2VcbiAqIHZhbGlkaXR5IHN0YXRlKSwgeW91IGNhbiBhbHNvIGV4cG9ydCB0aGUgZGlyZWN0aXZlIGludG8gYSBsb2NhbCB0ZW1wbGF0ZSB2YXJpYWJsZSB1c2luZ1xuICogYG5nTW9kZWxgIGFzIHRoZSBrZXkgKGV4OiBgI215VmFyPVwibmdNb2RlbFwiYCkuIFlvdSBjYW4gdGhlbiBhY2Nlc3MgdGhlIGNvbnRyb2wgdXNpbmcgdGhlXG4gKiBkaXJlY3RpdmUncyBgY29udHJvbGAgcHJvcGVydHksIGJ1dCBtb3N0IHByb3BlcnRpZXMgeW91J2xsIG5lZWQgKGxpa2UgYHZhbGlkYCBhbmQgYGRpcnR5YClcbiAqIHdpbGwgZmFsbCB0aHJvdWdoIHRvIHRoZSBjb250cm9sIGFueXdheSwgc28geW91IGNhbiBhY2Nlc3MgdGhlbSBkaXJlY3RseS4gWW91IGNhbiBzZWUgYVxuICogZnVsbCBsaXN0IG9mIHByb3BlcnRpZXMgZGlyZWN0bHkgYXZhaWxhYmxlIGluIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZX0uXG4gKlxuICogVGhlIGZvbGxvd2luZyBpcyBhbiBleGFtcGxlIG9mIGEgc2ltcGxlIHN0YW5kYWxvbmUgY29udHJvbCB1c2luZyBgbmdNb2RlbGA6XG4gKlxuICoge1xcQGV4YW1wbGUgZm9ybXMvdHMvc2ltcGxlTmdNb2RlbC9zaW1wbGVfbmdfbW9kZWxfZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gKlxuICogV2hlbiB1c2luZyB0aGUgYG5nTW9kZWxgIHdpdGhpbiBgPGZvcm0+YCB0YWdzLCB5b3UnbGwgYWxzbyBuZWVkIHRvIHN1cHBseSBhIGBuYW1lYCBhdHRyaWJ1dGVcbiAqIHNvIHRoYXQgdGhlIGNvbnRyb2wgY2FuIGJlIHJlZ2lzdGVyZWQgd2l0aCB0aGUgcGFyZW50IGZvcm0gdW5kZXIgdGhhdCBuYW1lLlxuICpcbiAqIEl0J3Mgd29ydGggbm90aW5nIHRoYXQgaW4gdGhlIGNvbnRleHQgb2YgYSBwYXJlbnQgZm9ybSwgeW91IG9mdGVuIGNhbiBza2lwIG9uZS13YXkgb3JcbiAqIHR3by13YXkgYmluZGluZyBiZWNhdXNlIHRoZSBwYXJlbnQgZm9ybSB3aWxsIHN5bmMgdGhlIHZhbHVlIGZvciB5b3UuIFlvdSBjYW4gYWNjZXNzXG4gKiBpdHMgcHJvcGVydGllcyBieSBleHBvcnRpbmcgaXQgaW50byBhIGxvY2FsIHRlbXBsYXRlIHZhcmlhYmxlIHVzaW5nIGBuZ0Zvcm1gIChleDpcbiAqIGAjZj1cIm5nRm9ybVwiYCkuIFRoZW4geW91IGNhbiBwYXNzIGl0IHdoZXJlIGl0IG5lZWRzIHRvIGdvIG9uIHN1Ym1pdC5cbiAqXG4gKiBJZiB5b3UgZG8gbmVlZCB0byBwb3B1bGF0ZSBpbml0aWFsIHZhbHVlcyBpbnRvIHlvdXIgZm9ybSwgdXNpbmcgYSBvbmUtd2F5IGJpbmRpbmcgZm9yXG4gKiBgbmdNb2RlbGAgdGVuZHMgdG8gYmUgc3VmZmljaWVudCBhcyBsb25nIGFzIHlvdSB1c2UgdGhlIGV4cG9ydGVkIGZvcm0ncyB2YWx1ZSByYXRoZXJcbiAqIHRoYW4gdGhlIGRvbWFpbiBtb2RlbCdzIHZhbHVlIG9uIHN1Ym1pdC5cbiAqXG4gKiBUYWtlIGEgbG9vayBhdCBhbiBleGFtcGxlIG9mIHVzaW5nIGBuZ01vZGVsYCB3aXRoaW4gYSBmb3JtOlxuICpcbiAqIHtcXEBleGFtcGxlIGZvcm1zL3RzL3NpbXBsZUZvcm0vc2ltcGxlX2Zvcm1fZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gKlxuICogVG8gc2VlIGBuZ01vZGVsYCBleGFtcGxlcyB3aXRoIGRpZmZlcmVudCBmb3JtIGNvbnRyb2wgdHlwZXMsIHNlZTpcbiAqXG4gKiAqIFJhZGlvIGJ1dHRvbnM6IHtcXEBsaW5rIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3J9XG4gKiAqIFNlbGVjdHM6IHtcXEBsaW5rIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yfVxuICpcbiAqICoqbnBtIHBhY2thZ2UqKjogYFxcQGFuZ3VsYXIvZm9ybXNgXG4gKlxuICogKipOZ01vZHVsZSoqOiBgRm9ybXNNb2R1bGVgXG4gKlxuICogIFxcQHN0YWJsZVxuICovXG52YXIgTmdNb2RlbCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTmdNb2RlbCwgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHBhcmVudFxuICAgICAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICAgICAqIEBwYXJhbSB7P30gYXN5bmNWYWxpZGF0b3JzXG4gICAgICogQHBhcmFtIHs/fSB2YWx1ZUFjY2Vzc29yc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIE5nTW9kZWwocGFyZW50LCB2YWxpZGF0b3JzLCBhc3luY1ZhbGlkYXRvcnMsIHZhbHVlQWNjZXNzb3JzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbFxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX2NvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fcmVnaXN0ZXJlZCA9IGZhbHNlO1xuICAgICAgICBfdGhpcy51cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIF90aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIF90aGlzLl9yYXdWYWxpZGF0b3JzID0gdmFsaWRhdG9ycyB8fCBbXTtcbiAgICAgICAgX3RoaXMuX3Jhd0FzeW5jVmFsaWRhdG9ycyA9IGFzeW5jVmFsaWRhdG9ycyB8fCBbXTtcbiAgICAgICAgX3RoaXMudmFsdWVBY2Nlc3NvciA9IHNlbGVjdFZhbHVlQWNjZXNzb3IoX3RoaXMsIHZhbHVlQWNjZXNzb3JzKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGNoYW5nZXNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIE5nTW9kZWwucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5fY2hlY2tGb3JFcnJvcnMoKTtcbiAgICAgICAgaWYgKCF0aGlzLl9yZWdpc3RlcmVkKVxuICAgICAgICAgICAgdGhpcy5fc2V0VXBDb250cm9sKCk7XG4gICAgICAgIGlmICgnaXNEaXNhYmxlZCcgaW4gY2hhbmdlcykge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRGlzYWJsZWQoY2hhbmdlcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUHJvcGVydHlVcGRhdGVkKGNoYW5nZXMsIHRoaXMudmlld01vZGVsKSkge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlVmFsdWUodGhpcy5tb2RlbCk7XG4gICAgICAgICAgICB0aGlzLnZpZXdNb2RlbCA9IHRoaXMubW9kZWw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgTmdNb2RlbC5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7IHRoaXMuZm9ybURpcmVjdGl2ZSAmJiB0aGlzLmZvcm1EaXJlY3RpdmUucmVtb3ZlQ29udHJvbCh0aGlzKTsgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTmdNb2RlbC5wcm90b3R5cGUsIFwiY29udHJvbFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9jb250cm9sOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTmdNb2RlbC5wcm90b3R5cGUsIFwicGF0aFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50ID8gY29udHJvbFBhdGgodGhpcy5uYW1lLCB0aGlzLl9wYXJlbnQpIDogW3RoaXMubmFtZV07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ01vZGVsLnByb3RvdHlwZSwgXCJmb3JtRGlyZWN0aXZlXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3BhcmVudCA/IHRoaXMuX3BhcmVudC5mb3JtRGlyZWN0aXZlIDogbnVsbDsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5nTW9kZWwucHJvdG90eXBlLCBcInZhbGlkYXRvclwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb21wb3NlVmFsaWRhdG9ycyh0aGlzLl9yYXdWYWxpZGF0b3JzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5nTW9kZWwucHJvdG90eXBlLCBcImFzeW5jVmFsaWRhdG9yXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wb3NlQXN5bmNWYWxpZGF0b3JzKHRoaXMuX3Jhd0FzeW5jVmFsaWRhdG9ycyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gbmV3VmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIE5nTW9kZWwucHJvdG90eXBlLnZpZXdUb01vZGVsVXBkYXRlID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgIHRoaXMudmlld01vZGVsID0gbmV3VmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlLmVtaXQobmV3VmFsdWUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBOZ01vZGVsLnByb3RvdHlwZS5fc2V0VXBDb250cm9sID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9pc1N0YW5kYWxvbmUoKSA/IHRoaXMuX3NldFVwU3RhbmRhbG9uZSgpIDpcbiAgICAgICAgICAgIHRoaXMuZm9ybURpcmVjdGl2ZS5hZGRDb250cm9sKHRoaXMpO1xuICAgICAgICB0aGlzLl9yZWdpc3RlcmVkID0gdHJ1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgTmdNb2RlbC5wcm90b3R5cGUuX2lzU3RhbmRhbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLl9wYXJlbnQgfHwgISEodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5zdGFuZGFsb25lKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgTmdNb2RlbC5wcm90b3R5cGUuX3NldFVwU3RhbmRhbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0VXBDb250cm9sKHRoaXMuX2NvbnRyb2wsIHRoaXMpO1xuICAgICAgICB0aGlzLl9jb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBOZ01vZGVsLnByb3RvdHlwZS5fY2hlY2tGb3JFcnJvcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5faXNTdGFuZGFsb25lKCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrUGFyZW50VHlwZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NoZWNrTmFtZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBOZ01vZGVsLnByb3RvdHlwZS5fY2hlY2tQYXJlbnRUeXBlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoISh0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBOZ01vZGVsR3JvdXApICYmXG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgVGVtcGxhdGVEcml2ZW5FcnJvcnMuZm9ybUdyb3VwTmFtZUV4Y2VwdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCEodGhpcy5fcGFyZW50IGluc3RhbmNlb2YgTmdNb2RlbEdyb3VwKSAmJiAhKHRoaXMuX3BhcmVudCBpbnN0YW5jZW9mIE5nRm9ybSkpIHtcbiAgICAgICAgICAgIFRlbXBsYXRlRHJpdmVuRXJyb3JzLm1vZGVsUGFyZW50RXhjZXB0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgTmdNb2RlbC5wcm90b3R5cGUuX2NoZWNrTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMubmFtZSlcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IHRoaXMub3B0aW9ucy5uYW1lO1xuICAgICAgICBpZiAoIXRoaXMuX2lzU3RhbmRhbG9uZSgpICYmICF0aGlzLm5hbWUpIHtcbiAgICAgICAgICAgIFRlbXBsYXRlRHJpdmVuRXJyb3JzLm1pc3NpbmdOYW1lRXhjZXB0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIE5nTW9kZWwucHJvdG90eXBlLl91cGRhdGVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXNvbHZlZFByb21pc2UkMS50aGVuKGZ1bmN0aW9uICgpIHsgX3RoaXMuY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSwgeyBlbWl0Vmlld1RvTW9kZWxDaGFuZ2U6IGZhbHNlIH0pOyB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gY2hhbmdlc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgTmdNb2RlbC5wcm90b3R5cGUuX3VwZGF0ZURpc2FibGVkID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gZGlzYWJsZWRWYWx1ZSA9IGNoYW5nZXNbJ2lzRGlzYWJsZWQnXS5jdXJyZW50VmFsdWU7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGlzRGlzYWJsZWQgPSBkaXNhYmxlZFZhbHVlID09PSAnJyB8fCAoZGlzYWJsZWRWYWx1ZSAmJiBkaXNhYmxlZFZhbHVlICE9PSAnZmFsc2UnKTtcbiAgICAgICAgcmVzb2x2ZWRQcm9taXNlJDEudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoaXNEaXNhYmxlZCAmJiAhX3RoaXMuY29udHJvbC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmNvbnRyb2wuZGlzYWJsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIWlzRGlzYWJsZWQgJiYgX3RoaXMuY29udHJvbC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmNvbnRyb2wuZW5hYmxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIE5nTW9kZWw7XG59KE5nQ29udHJvbCkpO1xuTmdNb2RlbC5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnW25nTW9kZWxdOm5vdChbZm9ybUNvbnRyb2xOYW1lXSk6bm90KFtmb3JtQ29udHJvbF0pJyxcbiAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtmb3JtQ29udHJvbEJpbmRpbmddLFxuICAgICAgICAgICAgICAgIGV4cG9ydEFzOiAnbmdNb2RlbCdcbiAgICAgICAgICAgIH0sXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuTmdNb2RlbC5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICB7IHR5cGU6IENvbnRyb2xDb250YWluZXIsIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogSG9zdCB9LF0gfSxcbiAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IFNlbGYgfSwgeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtOR19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBTZWxmIH0sIHsgdHlwZTogSW5qZWN0LCBhcmdzOiBbTkdfQVNZTkNfVkFMSURBVE9SUyxdIH0sXSB9LFxuICAgIHsgdHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogU2VsZiB9LCB7IHR5cGU6IEluamVjdCwgYXJnczogW05HX1ZBTFVFX0FDQ0VTU09SLF0gfSxdIH0sXG5dOyB9O1xuTmdNb2RlbC5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAnbmFtZSc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnaXNEaXNhYmxlZCc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ2Rpc2FibGVkJyxdIH0sXSxcbiAgICAnbW9kZWwnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWyduZ01vZGVsJyxdIH0sXSxcbiAgICAnb3B0aW9ucyc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ25nTW9kZWxPcHRpb25zJyxdIH0sXSxcbiAgICAndXBkYXRlJzogW3sgdHlwZTogT3V0cHV0LCBhcmdzOiBbJ25nTW9kZWxDaGFuZ2UnLF0gfSxdLFxufTtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbnZhciBSZWFjdGl2ZUVycm9ycyA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVhY3RpdmVFcnJvcnMoKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgUmVhY3RpdmVFcnJvcnMuY29udHJvbFBhcmVudEV4Y2VwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZm9ybUNvbnRyb2xOYW1lIG11c3QgYmUgdXNlZCB3aXRoIGEgcGFyZW50IGZvcm1Hcm91cCBkaXJlY3RpdmUuICBZb3UnbGwgd2FudCB0byBhZGQgYSBmb3JtR3JvdXBcXG4gICAgICAgZGlyZWN0aXZlIGFuZCBwYXNzIGl0IGFuIGV4aXN0aW5nIEZvcm1Hcm91cCBpbnN0YW5jZSAoeW91IGNhbiBjcmVhdGUgb25lIGluIHlvdXIgY2xhc3MpLlxcblxcbiAgICAgIEV4YW1wbGU6XFxuXFxuICAgICAgXCIgKyBGb3JtRXJyb3JFeGFtcGxlcy5mb3JtQ29udHJvbE5hbWUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBSZWFjdGl2ZUVycm9ycy5uZ01vZGVsR3JvdXBFeGNlcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImZvcm1Db250cm9sTmFtZSBjYW5ub3QgYmUgdXNlZCB3aXRoIGFuIG5nTW9kZWxHcm91cCBwYXJlbnQuIEl0IGlzIG9ubHkgY29tcGF0aWJsZSB3aXRoIHBhcmVudHNcXG4gICAgICAgdGhhdCBhbHNvIGhhdmUgYSBcXFwiZm9ybVxcXCIgcHJlZml4OiBmb3JtR3JvdXBOYW1lLCBmb3JtQXJyYXlOYW1lLCBvciBmb3JtR3JvdXAuXFxuXFxuICAgICAgIE9wdGlvbiAxOiAgVXBkYXRlIHRoZSBwYXJlbnQgdG8gYmUgZm9ybUdyb3VwTmFtZSAocmVhY3RpdmUgZm9ybSBzdHJhdGVneSlcXG5cXG4gICAgICAgIFwiICsgRm9ybUVycm9yRXhhbXBsZXMuZm9ybUdyb3VwTmFtZSArIFwiXFxuXFxuICAgICAgICBPcHRpb24gMjogVXNlIG5nTW9kZWwgaW5zdGVhZCBvZiBmb3JtQ29udHJvbE5hbWUgKHRlbXBsYXRlLWRyaXZlbiBzdHJhdGVneSlcXG5cXG4gICAgICAgIFwiICsgRm9ybUVycm9yRXhhbXBsZXMubmdNb2RlbEdyb3VwKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgUmVhY3RpdmVFcnJvcnMubWlzc2luZ0Zvcm1FeGNlcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImZvcm1Hcm91cCBleHBlY3RzIGEgRm9ybUdyb3VwIGluc3RhbmNlLiBQbGVhc2UgcGFzcyBvbmUgaW4uXFxuXFxuICAgICAgIEV4YW1wbGU6XFxuXFxuICAgICAgIFwiICsgRm9ybUVycm9yRXhhbXBsZXMuZm9ybUNvbnRyb2xOYW1lKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgUmVhY3RpdmVFcnJvcnMuZ3JvdXBQYXJlbnRFeGNlcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImZvcm1Hcm91cE5hbWUgbXVzdCBiZSB1c2VkIHdpdGggYSBwYXJlbnQgZm9ybUdyb3VwIGRpcmVjdGl2ZS4gIFlvdSdsbCB3YW50IHRvIGFkZCBhIGZvcm1Hcm91cFxcbiAgICAgIGRpcmVjdGl2ZSBhbmQgcGFzcyBpdCBhbiBleGlzdGluZyBGb3JtR3JvdXAgaW5zdGFuY2UgKHlvdSBjYW4gY3JlYXRlIG9uZSBpbiB5b3VyIGNsYXNzKS5cXG5cXG4gICAgICBFeGFtcGxlOlxcblxcbiAgICAgIFwiICsgRm9ybUVycm9yRXhhbXBsZXMuZm9ybUdyb3VwTmFtZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFJlYWN0aXZlRXJyb3JzLmFycmF5UGFyZW50RXhjZXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJmb3JtQXJyYXlOYW1lIG11c3QgYmUgdXNlZCB3aXRoIGEgcGFyZW50IGZvcm1Hcm91cCBkaXJlY3RpdmUuICBZb3UnbGwgd2FudCB0byBhZGQgYSBmb3JtR3JvdXBcXG4gICAgICAgZGlyZWN0aXZlIGFuZCBwYXNzIGl0IGFuIGV4aXN0aW5nIEZvcm1Hcm91cCBpbnN0YW5jZSAoeW91IGNhbiBjcmVhdGUgb25lIGluIHlvdXIgY2xhc3MpLlxcblxcbiAgICAgICAgRXhhbXBsZTpcXG5cXG4gICAgICAgIFwiICsgRm9ybUVycm9yRXhhbXBsZXMuZm9ybUFycmF5TmFtZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFJlYWN0aXZlRXJyb3JzLmRpc2FibGVkQXR0cldhcm5pbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIlxcbiAgICAgIEl0IGxvb2tzIGxpa2UgeW91J3JlIHVzaW5nIHRoZSBkaXNhYmxlZCBhdHRyaWJ1dGUgd2l0aCBhIHJlYWN0aXZlIGZvcm0gZGlyZWN0aXZlLiBJZiB5b3Ugc2V0IGRpc2FibGVkIHRvIHRydWVcXG4gICAgICB3aGVuIHlvdSBzZXQgdXAgdGhpcyBjb250cm9sIGluIHlvdXIgY29tcG9uZW50IGNsYXNzLCB0aGUgZGlzYWJsZWQgYXR0cmlidXRlIHdpbGwgYWN0dWFsbHkgYmUgc2V0IGluIHRoZSBET00gZm9yXFxuICAgICAgeW91LiBXZSByZWNvbW1lbmQgdXNpbmcgdGhpcyBhcHByb2FjaCB0byBhdm9pZCAnY2hhbmdlZCBhZnRlciBjaGVja2VkJyBlcnJvcnMuXFxuICAgICAgIFxcbiAgICAgIEV4YW1wbGU6IFxcbiAgICAgIGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcXG4gICAgICAgIGZpcnN0OiBuZXcgRm9ybUNvbnRyb2woe3ZhbHVlOiAnTmFuY3knLCBkaXNhYmxlZDogdHJ1ZX0sIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxcbiAgICAgICAgbGFzdDogbmV3IEZvcm1Db250cm9sKCdEcmV3JywgVmFsaWRhdG9ycy5yZXF1aXJlZClcXG4gICAgICB9KTtcXG4gICAgXCIpO1xuICAgIH07XG4gICAgcmV0dXJuIFJlYWN0aXZlRXJyb3JzO1xufSgpKTtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbnZhciBmb3JtQ29udHJvbEJpbmRpbmckMSA9IHtcbiAgICBwcm92aWRlOiBOZ0NvbnRyb2wsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gRm9ybUNvbnRyb2xEaXJlY3RpdmU7IH0pXG59O1xuLyoqXG4gKiBcXEB3aGF0SXREb2VzIFN5bmNzIGEgc3RhbmRhbG9uZSB7XFxAbGluayBGb3JtQ29udHJvbH0gaW5zdGFuY2UgdG8gYSBmb3JtIGNvbnRyb2wgZWxlbWVudC5cbiAqXG4gKiBJbiBvdGhlciB3b3JkcywgdGhpcyBkaXJlY3RpdmUgZW5zdXJlcyB0aGF0IGFueSB2YWx1ZXMgd3JpdHRlbiB0byB0aGUge1xcQGxpbmsgRm9ybUNvbnRyb2x9XG4gKiBpbnN0YW5jZSBwcm9ncmFtbWF0aWNhbGx5IHdpbGwgYmUgd3JpdHRlbiB0byB0aGUgRE9NIGVsZW1lbnQgKG1vZGVsIC0+IHZpZXcpLiBDb252ZXJzZWx5LFxuICogYW55IHZhbHVlcyB3cml0dGVuIHRvIHRoZSBET00gZWxlbWVudCB0aHJvdWdoIHVzZXIgaW5wdXQgd2lsbCBiZSByZWZsZWN0ZWQgaW4gdGhlXG4gKiB7XFxAbGluayBGb3JtQ29udHJvbH0gaW5zdGFuY2UgKHZpZXcgLT4gbW9kZWwpLlxuICpcbiAqIFxcQGhvd1RvVXNlXG4gKlxuICogVXNlIHRoaXMgZGlyZWN0aXZlIGlmIHlvdSdkIGxpa2UgdG8gY3JlYXRlIGFuZCBtYW5hZ2UgYSB7XFxAbGluayBGb3JtQ29udHJvbH0gaW5zdGFuY2UgZGlyZWN0bHkuXG4gKiBTaW1wbHkgY3JlYXRlIGEge1xcQGxpbmsgRm9ybUNvbnRyb2x9LCBzYXZlIGl0IHRvIHlvdXIgY29tcG9uZW50IGNsYXNzLCBhbmQgcGFzcyBpdCBpbnRvIHRoZVxuICoge1xcQGxpbmsgRm9ybUNvbnRyb2xEaXJlY3RpdmV9LlxuICpcbiAqIFRoaXMgZGlyZWN0aXZlIGlzIGRlc2lnbmVkIHRvIGJlIHVzZWQgYXMgYSBzdGFuZGFsb25lIGNvbnRyb2wuICBVbmxpa2Uge1xcQGxpbmsgRm9ybUNvbnRyb2xOYW1lfSxcbiAqIGl0IGRvZXMgbm90IHJlcXVpcmUgdGhhdCB5b3VyIHtcXEBsaW5rIEZvcm1Db250cm9sfSBpbnN0YW5jZSBiZSBwYXJ0IG9mIGFueSBwYXJlbnRcbiAqIHtcXEBsaW5rIEZvcm1Hcm91cH0sIGFuZCBpdCB3b24ndCBiZSByZWdpc3RlcmVkIHRvIGFueSB7XFxAbGluayBGb3JtR3JvdXBEaXJlY3RpdmV9IHRoYXRcbiAqIGV4aXN0cyBhYm92ZSBpdC5cbiAqXG4gKiAqKkdldCB0aGUgdmFsdWUqKjogdGhlIGB2YWx1ZWAgcHJvcGVydHkgaXMgYWx3YXlzIHN5bmNlZCBhbmQgYXZhaWxhYmxlIG9uIHRoZVxuICoge1xcQGxpbmsgRm9ybUNvbnRyb2x9IGluc3RhbmNlLiBTZWUgYSBmdWxsIGxpc3Qgb2YgYXZhaWxhYmxlIHByb3BlcnRpZXMgaW5cbiAqIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbH0uXG4gKlxuICogKipTZXQgdGhlIHZhbHVlKio6IFlvdSBjYW4gcGFzcyBpbiBhbiBpbml0aWFsIHZhbHVlIHdoZW4gaW5zdGFudGlhdGluZyB0aGUge1xcQGxpbmsgRm9ybUNvbnRyb2x9LFxuICogb3IgeW91IGNhbiBzZXQgaXQgcHJvZ3JhbW1hdGljYWxseSBsYXRlciB1c2luZyB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wjc2V0VmFsdWV9IG9yXG4gKiB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wjcGF0Y2hWYWx1ZX0uXG4gKlxuICogKipMaXN0ZW4gdG8gdmFsdWUqKjogSWYgeW91IHdhbnQgdG8gbGlzdGVuIHRvIGNoYW5nZXMgaW4gdGhlIHZhbHVlIG9mIHRoZSBjb250cm9sLCB5b3UgY2FuXG4gKiBzdWJzY3JpYmUgdG8gdGhlIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbCN2YWx1ZUNoYW5nZXN9IGV2ZW50LiAgWW91IGNhbiBhbHNvIGxpc3RlbiB0b1xuICoge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sI3N0YXR1c0NoYW5nZXN9IHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIHZhbGlkYXRpb24gc3RhdHVzIGlzXG4gKiByZS1jYWxjdWxhdGVkLlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICoge1xcQGV4YW1wbGUgZm9ybXMvdHMvc2ltcGxlRm9ybUNvbnRyb2wvc2ltcGxlX2Zvcm1fY29udHJvbF9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAqXG4gKiAqICoqbnBtIHBhY2thZ2UqKjogYFxcQGFuZ3VsYXIvZm9ybXNgXG4gKlxuICogKiAqKk5nTW9kdWxlKio6IGBSZWFjdGl2ZUZvcm1zTW9kdWxlYFxuICpcbiAqICBcXEBzdGFibGVcbiAqL1xudmFyIEZvcm1Db250cm9sRGlyZWN0aXZlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhGb3JtQ29udHJvbERpcmVjdGl2ZSwgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAgICAgKiBAcGFyYW0gez99IGFzeW5jVmFsaWRhdG9yc1xuICAgICAqIEBwYXJhbSB7P30gdmFsdWVBY2Nlc3NvcnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBGb3JtQ29udHJvbERpcmVjdGl2ZSh2YWxpZGF0b3JzLCBhc3luY1ZhbGlkYXRvcnMsIHZhbHVlQWNjZXNzb3JzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgX3RoaXMuX3Jhd1ZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzIHx8IFtdO1xuICAgICAgICBfdGhpcy5fcmF3QXN5bmNWYWxpZGF0b3JzID0gYXN5bmNWYWxpZGF0b3JzIHx8IFtdO1xuICAgICAgICBfdGhpcy52YWx1ZUFjY2Vzc29yID0gc2VsZWN0VmFsdWVBY2Nlc3NvcihfdGhpcywgdmFsdWVBY2Nlc3NvcnMpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQ29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwiaXNEaXNhYmxlZFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGlzRGlzYWJsZWRcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGlzRGlzYWJsZWQpIHsgUmVhY3RpdmVFcnJvcnMuZGlzYWJsZWRBdHRyV2FybmluZygpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGNoYW5nZXNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1Db250cm9sRGlyZWN0aXZlLnByb3RvdHlwZS5uZ09uQ2hhbmdlcyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0NvbnRyb2xDaGFuZ2VkKGNoYW5nZXMpKSB7XG4gICAgICAgICAgICBzZXRVcENvbnRyb2wodGhpcy5mb3JtLCB0aGlzKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRyb2wuZGlzYWJsZWQgJiYgKCh0aGlzLnZhbHVlQWNjZXNzb3IpKS5zZXREaXNhYmxlZFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgKCgoKHRoaXMudmFsdWVBY2Nlc3NvcikpLnNldERpc2FibGVkU3RhdGUpKSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZm9ybS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNQcm9wZXJ0eVVwZGF0ZWQoY2hhbmdlcywgdGhpcy52aWV3TW9kZWwpKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0uc2V0VmFsdWUodGhpcy5tb2RlbCk7XG4gICAgICAgICAgICB0aGlzLnZpZXdNb2RlbCA9IHRoaXMubW9kZWw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQ29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwicGF0aFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1Db250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJ2YWxpZGF0b3JcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29tcG9zZVZhbGlkYXRvcnModGhpcy5fcmF3VmFsaWRhdG9ycyk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQ29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwiYXN5bmNWYWxpZGF0b3JcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvc2VBc3luY1ZhbGlkYXRvcnModGhpcy5fcmF3QXN5bmNWYWxpZGF0b3JzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1Db250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJjb250cm9sXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZm9ybTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBuZXdWYWx1ZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybUNvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLnZpZXdUb01vZGVsVXBkYXRlID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgIHRoaXMudmlld01vZGVsID0gbmV3VmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlLmVtaXQobmV3VmFsdWUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtQ29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUuX2lzQ29udHJvbENoYW5nZWQgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICByZXR1cm4gY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnZm9ybScpO1xuICAgIH07XG4gICAgcmV0dXJuIEZvcm1Db250cm9sRGlyZWN0aXZlO1xufShOZ0NvbnRyb2wpKTtcbkZvcm1Db250cm9sRGlyZWN0aXZlLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7IHNlbGVjdG9yOiAnW2Zvcm1Db250cm9sXScsIHByb3ZpZGVyczogW2Zvcm1Db250cm9sQmluZGluZyQxXSwgZXhwb3J0QXM6ICduZ0Zvcm0nIH0sXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuRm9ybUNvbnRyb2xEaXJlY3RpdmUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBTZWxmIH0sIHsgdHlwZTogSW5qZWN0LCBhcmdzOiBbTkdfVkFMSURBVE9SUyxdIH0sXSB9LFxuICAgIHsgdHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogU2VsZiB9LCB7IHR5cGU6IEluamVjdCwgYXJnczogW05HX0FTWU5DX1ZBTElEQVRPUlMsXSB9LF0gfSxcbiAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IFNlbGYgfSwgeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtOR19WQUxVRV9BQ0NFU1NPUixdIH0sXSB9LFxuXTsgfTtcbkZvcm1Db250cm9sRGlyZWN0aXZlLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICdmb3JtJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsnZm9ybUNvbnRyb2wnLF0gfSxdLFxuICAgICdtb2RlbCc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ25nTW9kZWwnLF0gfSxdLFxuICAgICd1cGRhdGUnOiBbeyB0eXBlOiBPdXRwdXQsIGFyZ3M6IFsnbmdNb2RlbENoYW5nZScsXSB9LF0sXG4gICAgJ2lzRGlzYWJsZWQnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWydkaXNhYmxlZCcsXSB9LF0sXG59O1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xudmFyIGZvcm1EaXJlY3RpdmVQcm92aWRlciQxID0ge1xuICAgIHByb3ZpZGU6IENvbnRyb2xDb250YWluZXIsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gRm9ybUdyb3VwRGlyZWN0aXZlOyB9KVxufTtcbi8qKlxuICogXFxAd2hhdEl0RG9lcyBCaW5kcyBhbiBleGlzdGluZyB7XFxAbGluayBGb3JtR3JvdXB9IHRvIGEgRE9NIGVsZW1lbnQuXG4gKlxuICogXFxAaG93VG9Vc2VcbiAqXG4gKiBUaGlzIGRpcmVjdGl2ZSBhY2NlcHRzIGFuIGV4aXN0aW5nIHtcXEBsaW5rIEZvcm1Hcm91cH0gaW5zdGFuY2UuIEl0IHdpbGwgdGhlbiB1c2UgdGhpc1xuICoge1xcQGxpbmsgRm9ybUdyb3VwfSBpbnN0YW5jZSB0byBtYXRjaCBhbnkgY2hpbGQge1xcQGxpbmsgRm9ybUNvbnRyb2x9LCB7XFxAbGluayBGb3JtR3JvdXB9LFxuICogYW5kIHtcXEBsaW5rIEZvcm1BcnJheX0gaW5zdGFuY2VzIHRvIGNoaWxkIHtcXEBsaW5rIEZvcm1Db250cm9sTmFtZX0sIHtcXEBsaW5rIEZvcm1Hcm91cE5hbWV9LFxuICogYW5kIHtcXEBsaW5rIEZvcm1BcnJheU5hbWV9IGRpcmVjdGl2ZXMuXG4gKlxuICogKipTZXQgdmFsdWUqKjogWW91IGNhbiBzZXQgdGhlIGZvcm0ncyBpbml0aWFsIHZhbHVlIHdoZW4gaW5zdGFudGlhdGluZyB0aGVcbiAqIHtcXEBsaW5rIEZvcm1Hcm91cH0sIG9yIHlvdSBjYW4gc2V0IGl0IHByb2dyYW1tYXRpY2FsbHkgbGF0ZXIgdXNpbmcgdGhlIHtcXEBsaW5rIEZvcm1Hcm91cH0nc1xuICoge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sI3NldFZhbHVlfSBvciB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wjcGF0Y2hWYWx1ZX0gbWV0aG9kcy5cbiAqXG4gKiAqKkxpc3RlbiB0byB2YWx1ZSoqOiBJZiB5b3Ugd2FudCB0byBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgdmFsdWUgb2YgdGhlIGZvcm0sIHlvdSBjYW4gc3Vic2NyaWJlXG4gKiB0byB0aGUge1xcQGxpbmsgRm9ybUdyb3VwfSdzIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbCN2YWx1ZUNoYW5nZXN9IGV2ZW50LiAgWW91IGNhbiBhbHNvIGxpc3RlbiB0b1xuICogaXRzIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbCNzdGF0dXNDaGFuZ2VzfSBldmVudCB0byBiZSBub3RpZmllZCB3aGVuIHRoZSB2YWxpZGF0aW9uIHN0YXR1cyBpc1xuICogcmUtY2FsY3VsYXRlZC5cbiAqXG4gKiBGdXJ0aGVybW9yZSwgeW91IGNhbiBsaXN0ZW4gdG8gdGhlIGRpcmVjdGl2ZSdzIGBuZ1N1Ym1pdGAgZXZlbnQgdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgdXNlciBoYXNcbiAqIHRyaWdnZXJlZCBhIGZvcm0gc3VibWlzc2lvbi4gVGhlIGBuZ1N1Ym1pdGAgZXZlbnQgd2lsbCBiZSBlbWl0dGVkIHdpdGggdGhlIG9yaWdpbmFsIGZvcm1cbiAqIHN1Ym1pc3Npb24gZXZlbnQuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBJbiB0aGlzIGV4YW1wbGUsIHdlIGNyZWF0ZSBmb3JtIGNvbnRyb2xzIGZvciBmaXJzdCBuYW1lIGFuZCBsYXN0IG5hbWUuXG4gKlxuICoge1xcQGV4YW1wbGUgZm9ybXMvdHMvc2ltcGxlRm9ybUdyb3VwL3NpbXBsZV9mb3JtX2dyb3VwX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICpcbiAqICoqbnBtIHBhY2thZ2UqKjogYFxcQGFuZ3VsYXIvZm9ybXNgXG4gKlxuICogKipOZ01vZHVsZSoqOiB7XFxAbGluayBSZWFjdGl2ZUZvcm1zTW9kdWxlfVxuICpcbiAqICBcXEBzdGFibGVcbiAqL1xudmFyIEZvcm1Hcm91cERpcmVjdGl2ZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoRm9ybUdyb3VwRGlyZWN0aXZlLCBfc3VwZXIpO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gX3ZhbGlkYXRvcnNcbiAgICAgKiBAcGFyYW0gez99IF9hc3luY1ZhbGlkYXRvcnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBGb3JtR3JvdXBEaXJlY3RpdmUoX3ZhbGlkYXRvcnMsIF9hc3luY1ZhbGlkYXRvcnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX3ZhbGlkYXRvcnMgPSBfdmFsaWRhdG9ycztcbiAgICAgICAgX3RoaXMuX2FzeW5jVmFsaWRhdG9ycyA9IF9hc3luY1ZhbGlkYXRvcnM7XG4gICAgICAgIF90aGlzLl9zdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuZGlyZWN0aXZlcyA9IFtdO1xuICAgICAgICBfdGhpcy5mb3JtID0gKChudWxsKSk7XG4gICAgICAgIF90aGlzLm5nU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gY2hhbmdlc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5uZ09uQ2hhbmdlcyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuX2NoZWNrRm9ybVByZXNlbnQoKTtcbiAgICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2Zvcm0nKSkge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlVmFsaWRhdG9ycygpO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRG9tVmFsdWUoKTtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVJlZ2lzdHJhdGlvbnMoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUsIFwic3VibWl0dGVkXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3N1Ym1pdHRlZDsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUsIFwiZm9ybURpcmVjdGl2ZVwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJjb250cm9sXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZm9ybTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUsIFwicGF0aFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuYWRkQ29udHJvbCA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY3RybCA9IHRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpO1xuICAgICAgICBzZXRVcENvbnRyb2woY3RybCwgZGlyKTtcbiAgICAgICAgY3RybC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVzLnB1c2goZGlyKTtcbiAgICAgICAgcmV0dXJuIGN0cmw7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5nZXRDb250cm9sID0gZnVuY3Rpb24gKGRpcikgeyByZXR1cm4gKHRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpKTsgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5yZW1vdmVDb250cm9sID0gZnVuY3Rpb24gKGRpcikgeyByZW1vdmUodGhpcy5kaXJlY3RpdmVzLCBkaXIpOyB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLmFkZEZvcm1Hcm91cCA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY3RybCA9IHRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpO1xuICAgICAgICBzZXRVcEZvcm1Db250YWluZXIoY3RybCwgZGlyKTtcbiAgICAgICAgY3RybC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLnJlbW92ZUZvcm1Hcm91cCA9IGZ1bmN0aW9uIChkaXIpIHsgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5nZXRGb3JtR3JvdXAgPSBmdW5jdGlvbiAoZGlyKSB7IHJldHVybiAodGhpcy5mb3JtLmdldChkaXIucGF0aCkpOyB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLmFkZEZvcm1BcnJheSA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY3RybCA9IHRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpO1xuICAgICAgICBzZXRVcEZvcm1Db250YWluZXIoY3RybCwgZGlyKTtcbiAgICAgICAgY3RybC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLnJlbW92ZUZvcm1BcnJheSA9IGZ1bmN0aW9uIChkaXIpIHsgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5nZXRGb3JtQXJyYXkgPSBmdW5jdGlvbiAoZGlyKSB7IHJldHVybiAodGhpcy5mb3JtLmdldChkaXIucGF0aCkpOyB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS51cGRhdGVNb2RlbCA9IGZ1bmN0aW9uIChkaXIsIHZhbHVlKSB7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGN0cmwgPSAodGhpcy5mb3JtLmdldChkaXIucGF0aCkpO1xuICAgICAgICBjdHJsLnNldFZhbHVlKHZhbHVlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gJGV2ZW50XG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLm9uU3VibWl0ID0gZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICB0aGlzLl9zdWJtaXR0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm5nU3VibWl0LmVtaXQoJGV2ZW50KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLm9uUmVzZXQgPSBmdW5jdGlvbiAoKSB7IHRoaXMucmVzZXRGb3JtKCk7IH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/PX0gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUucmVzZXRGb3JtID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7IHZhbHVlID0gdW5kZWZpbmVkOyB9XG4gICAgICAgIHRoaXMuZm9ybS5yZXNldCh2YWx1ZSk7XG4gICAgICAgIHRoaXMuX3N1Ym1pdHRlZCA9IGZhbHNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogXFxAaW50ZXJuYWxcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuX3VwZGF0ZURvbVZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmRpcmVjdGl2ZXMuZm9yRWFjaChmdW5jdGlvbiAoZGlyKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBuZXdDdHJsID0gX3RoaXMuZm9ybS5nZXQoZGlyLnBhdGgpO1xuICAgICAgICAgICAgaWYgKGRpci5fY29udHJvbCAhPT0gbmV3Q3RybCkge1xuICAgICAgICAgICAgICAgIGNsZWFuVXBDb250cm9sKGRpci5fY29udHJvbCwgZGlyKTtcbiAgICAgICAgICAgICAgICBpZiAobmV3Q3RybClcbiAgICAgICAgICAgICAgICAgICAgc2V0VXBDb250cm9sKG5ld0N0cmwsIGRpcik7XG4gICAgICAgICAgICAgICAgZGlyLl9jb250cm9sID0gbmV3Q3RybDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZm9ybS5fdXBkYXRlVHJlZVZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5fdXBkYXRlUmVnaXN0cmF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5mb3JtLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fdXBkYXRlRG9tVmFsdWUoKTsgfSk7XG4gICAgICAgIGlmICh0aGlzLl9vbGRGb3JtKVxuICAgICAgICAgICAgdGhpcy5fb2xkRm9ybS5fcmVnaXN0ZXJPbkNvbGxlY3Rpb25DaGFuZ2UoZnVuY3Rpb24gKCkgeyB9KTtcbiAgICAgICAgdGhpcy5fb2xkRm9ybSA9IHRoaXMuZm9ybTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5fdXBkYXRlVmFsaWRhdG9ycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gc3luYyA9IGNvbXBvc2VWYWxpZGF0b3JzKHRoaXMuX3ZhbGlkYXRvcnMpO1xuICAgICAgICB0aGlzLmZvcm0udmFsaWRhdG9yID0gVmFsaWRhdG9ycy5jb21wb3NlKFsvKiogQHR5cGUgez99ICovICgodGhpcy5mb3JtLnZhbGlkYXRvcikpLCAvKiogQHR5cGUgez99ICovICgoc3luYykpXSk7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGFzeW5jID0gY29tcG9zZUFzeW5jVmFsaWRhdG9ycyh0aGlzLl9hc3luY1ZhbGlkYXRvcnMpO1xuICAgICAgICB0aGlzLmZvcm0uYXN5bmNWYWxpZGF0b3IgPSBWYWxpZGF0b3JzLmNvbXBvc2VBc3luYyhbLyoqIEB0eXBlIHs/fSAqLyAoKHRoaXMuZm9ybS5hc3luY1ZhbGlkYXRvcikpLCAvKiogQHR5cGUgez99ICovICgoYXN5bmMpKV0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLl9jaGVja0Zvcm1QcmVzZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuZm9ybSkge1xuICAgICAgICAgICAgUmVhY3RpdmVFcnJvcnMubWlzc2luZ0Zvcm1FeGNlcHRpb24oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEZvcm1Hcm91cERpcmVjdGl2ZTtcbn0oQ29udHJvbENvbnRhaW5lcikpO1xuRm9ybUdyb3VwRGlyZWN0aXZlLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdbZm9ybUdyb3VwXScsXG4gICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbZm9ybURpcmVjdGl2ZVByb3ZpZGVyJDFdLFxuICAgICAgICAgICAgICAgIGhvc3Q6IHsgJyhzdWJtaXQpJzogJ29uU3VibWl0KCRldmVudCknLCAnKHJlc2V0KSc6ICdvblJlc2V0KCknIH0sXG4gICAgICAgICAgICAgICAgZXhwb3J0QXM6ICduZ0Zvcm0nXG4gICAgICAgICAgICB9LF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbkZvcm1Hcm91cERpcmVjdGl2ZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IFNlbGYgfSwgeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtOR19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBTZWxmIH0sIHsgdHlwZTogSW5qZWN0LCBhcmdzOiBbTkdfQVNZTkNfVkFMSURBVE9SUyxdIH0sXSB9LFxuXTsgfTtcbkZvcm1Hcm91cERpcmVjdGl2ZS5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAnZm9ybSc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ2Zvcm1Hcm91cCcsXSB9LF0sXG4gICAgJ25nU3VibWl0JzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbn07XG4vKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0gez99IGxpc3RcbiAqIEBwYXJhbSB7P30gZWxcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIHJlbW92ZShsaXN0LCBlbCkge1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIGluZGV4ID0gbGlzdC5pbmRleE9mKGVsKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxufVxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xudmFyIGZvcm1Hcm91cE5hbWVQcm92aWRlciA9IHtcbiAgICBwcm92aWRlOiBDb250cm9sQ29udGFpbmVyLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIEZvcm1Hcm91cE5hbWU7IH0pXG59O1xuLyoqXG4gKiBcXEB3aGF0SXREb2VzIFN5bmNzIGEgbmVzdGVkIHtcXEBsaW5rIEZvcm1Hcm91cH0gdG8gYSBET00gZWxlbWVudC5cbiAqXG4gKiBcXEBob3dUb1VzZVxuICpcbiAqIFRoaXMgZGlyZWN0aXZlIGNhbiBvbmx5IGJlIHVzZWQgd2l0aCBhIHBhcmVudCB7XFxAbGluayBGb3JtR3JvdXBEaXJlY3RpdmV9IChzZWxlY3RvcjpcbiAqIGBbZm9ybUdyb3VwXWApLlxuICpcbiAqIEl0IGFjY2VwdHMgdGhlIHN0cmluZyBuYW1lIG9mIHRoZSBuZXN0ZWQge1xcQGxpbmsgRm9ybUdyb3VwfSB5b3Ugd2FudCB0byBsaW5rLCBhbmRcbiAqIHdpbGwgbG9vayBmb3IgYSB7XFxAbGluayBGb3JtR3JvdXB9IHJlZ2lzdGVyZWQgd2l0aCB0aGF0IG5hbWUgaW4gdGhlIHBhcmVudFxuICoge1xcQGxpbmsgRm9ybUdyb3VwfSBpbnN0YW5jZSB5b3UgcGFzc2VkIGludG8ge1xcQGxpbmsgRm9ybUdyb3VwRGlyZWN0aXZlfS5cbiAqXG4gKiBOZXN0ZWQgZm9ybSBncm91cHMgY2FuIGNvbWUgaW4gaGFuZHkgd2hlbiB5b3Ugd2FudCB0byB2YWxpZGF0ZSBhIHN1Yi1ncm91cCBvZiBhXG4gKiBmb3JtIHNlcGFyYXRlbHkgZnJvbSB0aGUgcmVzdCBvciB3aGVuIHlvdSdkIGxpa2UgdG8gZ3JvdXAgdGhlIHZhbHVlcyBvZiBjZXJ0YWluXG4gKiBjb250cm9scyBpbnRvIHRoZWlyIG93biBuZXN0ZWQgb2JqZWN0LlxuICpcbiAqICoqQWNjZXNzIHRoZSBncm91cCoqOiBZb3UgY2FuIGFjY2VzcyB0aGUgYXNzb2NpYXRlZCB7XFxAbGluayBGb3JtR3JvdXB9IHVzaW5nIHRoZVxuICoge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sI2dldH0gbWV0aG9kLiBFeDogYHRoaXMuZm9ybS5nZXQoJ25hbWUnKWAuXG4gKlxuICogWW91IGNhbiBhbHNvIGFjY2VzcyBpbmRpdmlkdWFsIGNvbnRyb2xzIHdpdGhpbiB0aGUgZ3JvdXAgdXNpbmcgZG90IHN5bnRheC5cbiAqIEV4OiBgdGhpcy5mb3JtLmdldCgnbmFtZS5maXJzdCcpYFxuICpcbiAqICoqR2V0IHRoZSB2YWx1ZSoqOiB0aGUgYHZhbHVlYCBwcm9wZXJ0eSBpcyBhbHdheXMgc3luY2VkIGFuZCBhdmFpbGFibGUgb24gdGhlXG4gKiB7XFxAbGluayBGb3JtR3JvdXB9LiBTZWUgYSBmdWxsIGxpc3Qgb2YgYXZhaWxhYmxlIHByb3BlcnRpZXMgaW4ge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sfS5cbiAqXG4gKiAqKlNldCB0aGUgdmFsdWUqKjogWW91IGNhbiBzZXQgYW4gaW5pdGlhbCB2YWx1ZSBmb3IgZWFjaCBjaGlsZCBjb250cm9sIHdoZW4gaW5zdGFudGlhdGluZ1xuICogdGhlIHtcXEBsaW5rIEZvcm1Hcm91cH0sIG9yIHlvdSBjYW4gc2V0IGl0IHByb2dyYW1tYXRpY2FsbHkgbGF0ZXIgdXNpbmdcbiAqIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbCNzZXRWYWx1ZX0gb3Ige1xcQGxpbmsgQWJzdHJhY3RDb250cm9sI3BhdGNoVmFsdWV9LlxuICpcbiAqICoqTGlzdGVuIHRvIHZhbHVlKio6IElmIHlvdSB3YW50IHRvIGxpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSB2YWx1ZSBvZiB0aGUgZ3JvdXAsIHlvdSBjYW5cbiAqIHN1YnNjcmliZSB0byB0aGUge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sI3ZhbHVlQ2hhbmdlc30gZXZlbnQuICBZb3UgY2FuIGFsc28gbGlzdGVuIHRvXG4gKiB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wjc3RhdHVzQ2hhbmdlc30gdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgdmFsaWRhdGlvbiBzdGF0dXMgaXNcbiAqIHJlLWNhbGN1bGF0ZWQuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiB7XFxAZXhhbXBsZSBmb3Jtcy90cy9uZXN0ZWRGb3JtR3JvdXAvbmVzdGVkX2Zvcm1fZ3JvdXBfZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gKlxuICogKiAqKm5wbSBwYWNrYWdlKio6IGBcXEBhbmd1bGFyL2Zvcm1zYFxuICpcbiAqICogKipOZ01vZHVsZSoqOiBgUmVhY3RpdmVGb3Jtc01vZHVsZWBcbiAqXG4gKiBcXEBzdGFibGVcbiAqL1xudmFyIEZvcm1Hcm91cE5hbWUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEZvcm1Hcm91cE5hbWUsIF9zdXBlcik7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBwYXJlbnRcbiAgICAgKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAgICAgKiBAcGFyYW0gez99IGFzeW5jVmFsaWRhdG9yc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIEZvcm1Hcm91cE5hbWUocGFyZW50LCB2YWxpZGF0b3JzLCBhc3luY1ZhbGlkYXRvcnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICAgICAgX3RoaXMuX3ZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzO1xuICAgICAgICBfdGhpcy5fYXN5bmNWYWxpZGF0b3JzID0gYXN5bmNWYWxpZGF0b3JzO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFxcQGludGVybmFsXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtR3JvdXBOYW1lLnByb3RvdHlwZS5fY2hlY2tQYXJlbnRUeXBlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX2hhc0ludmFsaWRQYXJlbnQodGhpcy5fcGFyZW50KSkge1xuICAgICAgICAgICAgUmVhY3RpdmVFcnJvcnMuZ3JvdXBQYXJlbnRFeGNlcHRpb24oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEZvcm1Hcm91cE5hbWU7XG59KEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlKSk7XG5Gb3JtR3JvdXBOYW1lLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7IHNlbGVjdG9yOiAnW2Zvcm1Hcm91cE5hbWVdJywgcHJvdmlkZXJzOiBbZm9ybUdyb3VwTmFtZVByb3ZpZGVyXSB9LF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbkZvcm1Hcm91cE5hbWUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgeyB0eXBlOiBDb250cm9sQ29udGFpbmVyLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IEhvc3QgfSwgeyB0eXBlOiBTa2lwU2VsZiB9LF0gfSxcbiAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IFNlbGYgfSwgeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtOR19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBTZWxmIH0sIHsgdHlwZTogSW5qZWN0LCBhcmdzOiBbTkdfQVNZTkNfVkFMSURBVE9SUyxdIH0sXSB9LFxuXTsgfTtcbkZvcm1Hcm91cE5hbWUucHJvcERlY29yYXRvcnMgPSB7XG4gICAgJ25hbWUnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWydmb3JtR3JvdXBOYW1lJyxdIH0sXSxcbn07XG52YXIgZm9ybUFycmF5TmFtZVByb3ZpZGVyID0ge1xuICAgIHByb3ZpZGU6IENvbnRyb2xDb250YWluZXIsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gRm9ybUFycmF5TmFtZTsgfSlcbn07XG4vKipcbiAqIFxcQHdoYXRJdERvZXMgU3luY3MgYSBuZXN0ZWQge1xcQGxpbmsgRm9ybUFycmF5fSB0byBhIERPTSBlbGVtZW50LlxuICpcbiAqIFxcQGhvd1RvVXNlXG4gKlxuICogVGhpcyBkaXJlY3RpdmUgaXMgZGVzaWduZWQgdG8gYmUgdXNlZCB3aXRoIGEgcGFyZW50IHtcXEBsaW5rIEZvcm1Hcm91cERpcmVjdGl2ZX0gKHNlbGVjdG9yOlxuICogYFtmb3JtR3JvdXBdYCkuXG4gKlxuICogSXQgYWNjZXB0cyB0aGUgc3RyaW5nIG5hbWUgb2YgdGhlIG5lc3RlZCB7XFxAbGluayBGb3JtQXJyYXl9IHlvdSB3YW50IHRvIGxpbmssIGFuZFxuICogd2lsbCBsb29rIGZvciBhIHtcXEBsaW5rIEZvcm1BcnJheX0gcmVnaXN0ZXJlZCB3aXRoIHRoYXQgbmFtZSBpbiB0aGUgcGFyZW50XG4gKiB7XFxAbGluayBGb3JtR3JvdXB9IGluc3RhbmNlIHlvdSBwYXNzZWQgaW50byB7XFxAbGluayBGb3JtR3JvdXBEaXJlY3RpdmV9LlxuICpcbiAqIE5lc3RlZCBmb3JtIGFycmF5cyBjYW4gY29tZSBpbiBoYW5keSB3aGVuIHlvdSBoYXZlIGEgZ3JvdXAgb2YgZm9ybSBjb250cm9scyBidXRcbiAqIHlvdSdyZSBub3Qgc3VyZSBob3cgbWFueSB0aGVyZSB3aWxsIGJlLiBGb3JtIGFycmF5cyBhbGxvdyB5b3UgdG8gY3JlYXRlIG5ld1xuICogZm9ybSBjb250cm9scyBkeW5hbWljYWxseS5cbiAqXG4gKiAqKkFjY2VzcyB0aGUgYXJyYXkqKjogWW91IGNhbiBhY2Nlc3MgdGhlIGFzc29jaWF0ZWQge1xcQGxpbmsgRm9ybUFycmF5fSB1c2luZyB0aGVcbiAqIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbCNnZXR9IG1ldGhvZCBvbiB0aGUgcGFyZW50IHtcXEBsaW5rIEZvcm1Hcm91cH0uXG4gKiBFeDogYHRoaXMuZm9ybS5nZXQoJ2NpdGllcycpYC5cbiAqXG4gKiAqKkdldCB0aGUgdmFsdWUqKjogdGhlIGB2YWx1ZWAgcHJvcGVydHkgaXMgYWx3YXlzIHN5bmNlZCBhbmQgYXZhaWxhYmxlIG9uIHRoZVxuICoge1xcQGxpbmsgRm9ybUFycmF5fS4gU2VlIGEgZnVsbCBsaXN0IG9mIGF2YWlsYWJsZSBwcm9wZXJ0aWVzIGluIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbH0uXG4gKlxuICogKipTZXQgdGhlIHZhbHVlKio6IFlvdSBjYW4gc2V0IGFuIGluaXRpYWwgdmFsdWUgZm9yIGVhY2ggY2hpbGQgY29udHJvbCB3aGVuIGluc3RhbnRpYXRpbmdcbiAqIHRoZSB7XFxAbGluayBGb3JtQXJyYXl9LCBvciB5b3UgY2FuIHNldCB0aGUgdmFsdWUgcHJvZ3JhbW1hdGljYWxseSBsYXRlciB1c2luZyB0aGVcbiAqIHtcXEBsaW5rIEZvcm1BcnJheX0ncyB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wjc2V0VmFsdWV9IG9yIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbCNwYXRjaFZhbHVlfVxuICogbWV0aG9kcy5cbiAqXG4gKiAqKkxpc3RlbiB0byB2YWx1ZSoqOiBJZiB5b3Ugd2FudCB0byBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgdmFsdWUgb2YgdGhlIGFycmF5LCB5b3UgY2FuXG4gKiBzdWJzY3JpYmUgdG8gdGhlIHtcXEBsaW5rIEZvcm1BcnJheX0ncyB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wjdmFsdWVDaGFuZ2VzfSBldmVudC4gIFlvdSBjYW4gYWxzb1xuICogbGlzdGVuIHRvIGl0cyB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wjc3RhdHVzQ2hhbmdlc30gZXZlbnQgdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgdmFsaWRhdGlvblxuICogc3RhdHVzIGlzIHJlLWNhbGN1bGF0ZWQuXG4gKlxuICogKipBZGQgbmV3IGNvbnRyb2xzKio6IFlvdSBjYW4gYWRkIG5ldyBjb250cm9scyB0byB0aGUge1xcQGxpbmsgRm9ybUFycmF5fSBkeW5hbWljYWxseSBieVxuICogY2FsbGluZyBpdHMge1xcQGxpbmsgRm9ybUFycmF5I3B1c2h9IG1ldGhvZC5cbiAqICBFeDogYHRoaXMuZm9ybS5nZXQoJ2NpdGllcycpLnB1c2gobmV3IEZvcm1Db250cm9sKCkpO2BcbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIHtcXEBleGFtcGxlIGZvcm1zL3RzL25lc3RlZEZvcm1BcnJheS9uZXN0ZWRfZm9ybV9hcnJheV9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAqXG4gKiAqICoqbnBtIHBhY2thZ2UqKjogYFxcQGFuZ3VsYXIvZm9ybXNgXG4gKlxuICogKiAqKk5nTW9kdWxlKio6IGBSZWFjdGl2ZUZvcm1zTW9kdWxlYFxuICpcbiAqIFxcQHN0YWJsZVxuICovXG52YXIgRm9ybUFycmF5TmFtZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoRm9ybUFycmF5TmFtZSwgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHBhcmVudFxuICAgICAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICAgICAqIEBwYXJhbSB7P30gYXN5bmNWYWxpZGF0b3JzXG4gICAgICovXG4gICAgZnVuY3Rpb24gRm9ybUFycmF5TmFtZShwYXJlbnQsIHZhbGlkYXRvcnMsIGFzeW5jVmFsaWRhdG9ycykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgICAgICBfdGhpcy5fdmFsaWRhdG9ycyA9IHZhbGlkYXRvcnM7XG4gICAgICAgIF90aGlzLl9hc3luY1ZhbGlkYXRvcnMgPSBhc3luY1ZhbGlkYXRvcnM7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtQXJyYXlOYW1lLnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fY2hlY2tQYXJlbnRUeXBlKCk7IC8qKiBAdHlwZSB7P30gKi9cbiAgICAgICAgKCh0aGlzLmZvcm1EaXJlY3RpdmUpKS5hZGRGb3JtQXJyYXkodGhpcyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1BcnJheU5hbWUucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5mb3JtRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVtb3ZlRm9ybUFycmF5KHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUFycmF5TmFtZS5wcm90b3R5cGUsIFwiY29udHJvbFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAoKHRoaXMuZm9ybURpcmVjdGl2ZSkpLmdldEZvcm1BcnJheSh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1BcnJheU5hbWUucHJvdG90eXBlLCBcImZvcm1EaXJlY3RpdmVcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudCA/ICh0aGlzLl9wYXJlbnQuZm9ybURpcmVjdGl2ZSkgOiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUFycmF5TmFtZS5wcm90b3R5cGUsIFwicGF0aFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb250cm9sUGF0aCh0aGlzLm5hbWUsIHRoaXMuX3BhcmVudCk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQXJyYXlOYW1lLnByb3RvdHlwZSwgXCJ2YWxpZGF0b3JcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29tcG9zZVZhbGlkYXRvcnModGhpcy5fdmFsaWRhdG9ycyk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQXJyYXlOYW1lLnByb3RvdHlwZSwgXCJhc3luY1ZhbGlkYXRvclwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9zZUFzeW5jVmFsaWRhdG9ycyh0aGlzLl9hc3luY1ZhbGlkYXRvcnMpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1BcnJheU5hbWUucHJvdG90eXBlLl9jaGVja1BhcmVudFR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfaGFzSW52YWxpZFBhcmVudCh0aGlzLl9wYXJlbnQpKSB7XG4gICAgICAgICAgICBSZWFjdGl2ZUVycm9ycy5hcnJheVBhcmVudEV4Y2VwdGlvbigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gRm9ybUFycmF5TmFtZTtcbn0oQ29udHJvbENvbnRhaW5lcikpO1xuRm9ybUFycmF5TmFtZS5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbeyBzZWxlY3RvcjogJ1tmb3JtQXJyYXlOYW1lXScsIHByb3ZpZGVyczogW2Zvcm1BcnJheU5hbWVQcm92aWRlcl0gfSxdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5Gb3JtQXJyYXlOYW1lLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgIHsgdHlwZTogQ29udHJvbENvbnRhaW5lciwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBIb3N0IH0sIHsgdHlwZTogU2tpcFNlbGYgfSxdIH0sXG4gICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBTZWxmIH0sIHsgdHlwZTogSW5qZWN0LCBhcmdzOiBbTkdfVkFMSURBVE9SUyxdIH0sXSB9LFxuICAgIHsgdHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogU2VsZiB9LCB7IHR5cGU6IEluamVjdCwgYXJnczogW05HX0FTWU5DX1ZBTElEQVRPUlMsXSB9LF0gfSxcbl07IH07XG5Gb3JtQXJyYXlOYW1lLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICduYW1lJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsnZm9ybUFycmF5TmFtZScsXSB9LF0sXG59O1xuLyoqXG4gKiBAcGFyYW0gez99IHBhcmVudFxuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gX2hhc0ludmFsaWRQYXJlbnQocGFyZW50KSB7XG4gICAgcmV0dXJuICEocGFyZW50IGluc3RhbmNlb2YgRm9ybUdyb3VwTmFtZSkgJiYgIShwYXJlbnQgaW5zdGFuY2VvZiBGb3JtR3JvdXBEaXJlY3RpdmUpICYmXG4gICAgICAgICEocGFyZW50IGluc3RhbmNlb2YgRm9ybUFycmF5TmFtZSk7XG59XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG52YXIgY29udHJvbE5hbWVCaW5kaW5nID0ge1xuICAgIHByb3ZpZGU6IE5nQ29udHJvbCxcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBGb3JtQ29udHJvbE5hbWU7IH0pXG59O1xuLyoqXG4gKiBcXEB3aGF0SXREb2VzIFN5bmNzIGEge1xcQGxpbmsgRm9ybUNvbnRyb2x9IGluIGFuIGV4aXN0aW5nIHtcXEBsaW5rIEZvcm1Hcm91cH0gdG8gYSBmb3JtIGNvbnRyb2xcbiAqIGVsZW1lbnQgYnkgbmFtZS5cbiAqXG4gKiBJbiBvdGhlciB3b3JkcywgdGhpcyBkaXJlY3RpdmUgZW5zdXJlcyB0aGF0IGFueSB2YWx1ZXMgd3JpdHRlbiB0byB0aGUge1xcQGxpbmsgRm9ybUNvbnRyb2x9XG4gKiBpbnN0YW5jZSBwcm9ncmFtbWF0aWNhbGx5IHdpbGwgYmUgd3JpdHRlbiB0byB0aGUgRE9NIGVsZW1lbnQgKG1vZGVsIC0+IHZpZXcpLiBDb252ZXJzZWx5LFxuICogYW55IHZhbHVlcyB3cml0dGVuIHRvIHRoZSBET00gZWxlbWVudCB0aHJvdWdoIHVzZXIgaW5wdXQgd2lsbCBiZSByZWZsZWN0ZWQgaW4gdGhlXG4gKiB7XFxAbGluayBGb3JtQ29udHJvbH0gaW5zdGFuY2UgKHZpZXcgLT4gbW9kZWwpLlxuICpcbiAqIFxcQGhvd1RvVXNlXG4gKlxuICogVGhpcyBkaXJlY3RpdmUgaXMgZGVzaWduZWQgdG8gYmUgdXNlZCB3aXRoIGEgcGFyZW50IHtcXEBsaW5rIEZvcm1Hcm91cERpcmVjdGl2ZX0gKHNlbGVjdG9yOlxuICogYFtmb3JtR3JvdXBdYCkuXG4gKlxuICogSXQgYWNjZXB0cyB0aGUgc3RyaW5nIG5hbWUgb2YgdGhlIHtcXEBsaW5rIEZvcm1Db250cm9sfSBpbnN0YW5jZSB5b3Ugd2FudCB0b1xuICogbGluaywgYW5kIHdpbGwgbG9vayBmb3IgYSB7XFxAbGluayBGb3JtQ29udHJvbH0gcmVnaXN0ZXJlZCB3aXRoIHRoYXQgbmFtZSBpbiB0aGVcbiAqIGNsb3Nlc3Qge1xcQGxpbmsgRm9ybUdyb3VwfSBvciB7XFxAbGluayBGb3JtQXJyYXl9IGFib3ZlIGl0LlxuICpcbiAqICoqQWNjZXNzIHRoZSBjb250cm9sKio6IFlvdSBjYW4gYWNjZXNzIHRoZSB7XFxAbGluayBGb3JtQ29udHJvbH0gYXNzb2NpYXRlZCB3aXRoXG4gKiB0aGlzIGRpcmVjdGl2ZSBieSB1c2luZyB0aGUge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sI2dldH0gbWV0aG9kLlxuICogRXg6IGB0aGlzLmZvcm0uZ2V0KCdmaXJzdCcpO2BcbiAqXG4gKiAqKkdldCB2YWx1ZSoqOiB0aGUgYHZhbHVlYCBwcm9wZXJ0eSBpcyBhbHdheXMgc3luY2VkIGFuZCBhdmFpbGFibGUgb24gdGhlIHtcXEBsaW5rIEZvcm1Db250cm9sfS5cbiAqIFNlZSBhIGZ1bGwgbGlzdCBvZiBhdmFpbGFibGUgcHJvcGVydGllcyBpbiB7XFxAbGluayBBYnN0cmFjdENvbnRyb2x9LlxuICpcbiAqICAqKlNldCB2YWx1ZSoqOiBZb3UgY2FuIHNldCBhbiBpbml0aWFsIHZhbHVlIGZvciB0aGUgY29udHJvbCB3aGVuIGluc3RhbnRpYXRpbmcgdGhlXG4gKiAge1xcQGxpbmsgRm9ybUNvbnRyb2x9LCBvciB5b3UgY2FuIHNldCBpdCBwcm9ncmFtbWF0aWNhbGx5IGxhdGVyIHVzaW5nXG4gKiAge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sI3NldFZhbHVlfSBvciB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wjcGF0Y2hWYWx1ZX0uXG4gKlxuICogKipMaXN0ZW4gdG8gdmFsdWUqKjogSWYgeW91IHdhbnQgdG8gbGlzdGVuIHRvIGNoYW5nZXMgaW4gdGhlIHZhbHVlIG9mIHRoZSBjb250cm9sLCB5b3UgY2FuXG4gKiBzdWJzY3JpYmUgdG8gdGhlIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbCN2YWx1ZUNoYW5nZXN9IGV2ZW50LiAgWW91IGNhbiBhbHNvIGxpc3RlbiB0b1xuICoge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sI3N0YXR1c0NoYW5nZXN9IHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIHZhbGlkYXRpb24gc3RhdHVzIGlzXG4gKiByZS1jYWxjdWxhdGVkLlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogSW4gdGhpcyBleGFtcGxlLCB3ZSBjcmVhdGUgZm9ybSBjb250cm9scyBmb3IgZmlyc3QgbmFtZSBhbmQgbGFzdCBuYW1lLlxuICpcbiAqIHtcXEBleGFtcGxlIGZvcm1zL3RzL3NpbXBsZUZvcm1Hcm91cC9zaW1wbGVfZm9ybV9ncm91cF9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAqXG4gKiBUbyBzZWUgYGZvcm1Db250cm9sTmFtZWAgZXhhbXBsZXMgd2l0aCBkaWZmZXJlbnQgZm9ybSBjb250cm9sIHR5cGVzLCBzZWU6XG4gKlxuICogKiBSYWRpbyBidXR0b25zOiB7XFxAbGluayBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yfVxuICogKiBTZWxlY3RzOiB7XFxAbGluayBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvcn1cbiAqXG4gKiAqKm5wbSBwYWNrYWdlKio6IGBcXEBhbmd1bGFyL2Zvcm1zYFxuICpcbiAqICoqTmdNb2R1bGUqKjoge1xcQGxpbmsgUmVhY3RpdmVGb3Jtc01vZHVsZX1cbiAqXG4gKiAgXFxAc3RhYmxlXG4gKi9cbnZhciBGb3JtQ29udHJvbE5hbWUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEZvcm1Db250cm9sTmFtZSwgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHBhcmVudFxuICAgICAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICAgICAqIEBwYXJhbSB7P30gYXN5bmNWYWxpZGF0b3JzXG4gICAgICogQHBhcmFtIHs/fSB2YWx1ZUFjY2Vzc29yc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIEZvcm1Db250cm9sTmFtZShwYXJlbnQsIHZhbGlkYXRvcnMsIGFzeW5jVmFsaWRhdG9ycywgdmFsdWVBY2Nlc3NvcnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX2FkZGVkID0gZmFsc2U7XG4gICAgICAgIF90aGlzLnVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgX3RoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICAgICAgX3RoaXMuX3Jhd1ZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzIHx8IFtdO1xuICAgICAgICBfdGhpcy5fcmF3QXN5bmNWYWxpZGF0b3JzID0gYXN5bmNWYWxpZGF0b3JzIHx8IFtdO1xuICAgICAgICBfdGhpcy52YWx1ZUFjY2Vzc29yID0gc2VsZWN0VmFsdWVBY2Nlc3NvcihfdGhpcywgdmFsdWVBY2Nlc3NvcnMpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQ29udHJvbE5hbWUucHJvdG90eXBlLCBcImlzRGlzYWJsZWRcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBpc0Rpc2FibGVkXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChpc0Rpc2FibGVkKSB7IFJlYWN0aXZlRXJyb3JzLmRpc2FibGVkQXR0cldhcm5pbmcoKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtQ29udHJvbE5hbWUucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9hZGRlZClcbiAgICAgICAgICAgIHRoaXMuX3NldFVwQ29udHJvbCgpO1xuICAgICAgICBpZiAoaXNQcm9wZXJ0eVVwZGF0ZWQoY2hhbmdlcywgdGhpcy52aWV3TW9kZWwpKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdNb2RlbCA9IHRoaXMubW9kZWw7XG4gICAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUudXBkYXRlTW9kZWwodGhpcywgdGhpcy5tb2RlbCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybUNvbnRyb2xOYW1lLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9ybURpcmVjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLnJlbW92ZUNvbnRyb2wodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gbmV3VmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1Db250cm9sTmFtZS5wcm90b3R5cGUudmlld1RvTW9kZWxVcGRhdGUgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgdGhpcy52aWV3TW9kZWwgPSBuZXdWYWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGUuZW1pdChuZXdWYWx1ZSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUNvbnRyb2xOYW1lLnByb3RvdHlwZSwgXCJwYXRoXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbnRyb2xQYXRoKHRoaXMubmFtZSwgLyoqIEB0eXBlIHs/fSAqLyAoKHRoaXMuX3BhcmVudCkpKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1Db250cm9sTmFtZS5wcm90b3R5cGUsIFwiZm9ybURpcmVjdGl2ZVwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9wYXJlbnQgPyB0aGlzLl9wYXJlbnQuZm9ybURpcmVjdGl2ZSA6IG51bGw7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQ29udHJvbE5hbWUucHJvdG90eXBlLCBcInZhbGlkYXRvclwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb21wb3NlVmFsaWRhdG9ycyh0aGlzLl9yYXdWYWxpZGF0b3JzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1Db250cm9sTmFtZS5wcm90b3R5cGUsIFwiYXN5bmNWYWxpZGF0b3JcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICgoY29tcG9zZUFzeW5jVmFsaWRhdG9ycyh0aGlzLl9yYXdBc3luY1ZhbGlkYXRvcnMpKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQ29udHJvbE5hbWUucHJvdG90eXBlLCBcImNvbnRyb2xcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fY29udHJvbDsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtQ29udHJvbE5hbWUucHJvdG90eXBlLl9jaGVja1BhcmVudFR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghKHRoaXMuX3BhcmVudCBpbnN0YW5jZW9mIEZvcm1Hcm91cE5hbWUpICYmXG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgUmVhY3RpdmVFcnJvcnMubmdNb2RlbEdyb3VwRXhjZXB0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoISh0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBGb3JtR3JvdXBOYW1lKSAmJiAhKHRoaXMuX3BhcmVudCBpbnN0YW5jZW9mIEZvcm1Hcm91cERpcmVjdGl2ZSkgJiZcbiAgICAgICAgICAgICEodGhpcy5fcGFyZW50IGluc3RhbmNlb2YgRm9ybUFycmF5TmFtZSkpIHtcbiAgICAgICAgICAgIFJlYWN0aXZlRXJyb3JzLmNvbnRyb2xQYXJlbnRFeGNlcHRpb24oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtQ29udHJvbE5hbWUucHJvdG90eXBlLl9zZXRVcENvbnRyb2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2NoZWNrUGFyZW50VHlwZSgpO1xuICAgICAgICB0aGlzLl9jb250cm9sID0gdGhpcy5mb3JtRGlyZWN0aXZlLmFkZENvbnRyb2wodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLmNvbnRyb2wuZGlzYWJsZWQgJiYgKCh0aGlzLnZhbHVlQWNjZXNzb3IpKS5zZXREaXNhYmxlZFN0YXRlKSB7XG4gICAgICAgICAgICAoKCgodGhpcy52YWx1ZUFjY2Vzc29yKSkuc2V0RGlzYWJsZWRTdGF0ZSkpKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2FkZGVkID0gdHJ1ZTtcbiAgICB9O1xuICAgIHJldHVybiBGb3JtQ29udHJvbE5hbWU7XG59KE5nQ29udHJvbCkpO1xuRm9ybUNvbnRyb2xOYW1lLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7IHNlbGVjdG9yOiAnW2Zvcm1Db250cm9sTmFtZV0nLCBwcm92aWRlcnM6IFtjb250cm9sTmFtZUJpbmRpbmddIH0sXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuRm9ybUNvbnRyb2xOYW1lLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgIHsgdHlwZTogQ29udHJvbENvbnRhaW5lciwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBIb3N0IH0sIHsgdHlwZTogU2tpcFNlbGYgfSxdIH0sXG4gICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBTZWxmIH0sIHsgdHlwZTogSW5qZWN0LCBhcmdzOiBbTkdfVkFMSURBVE9SUyxdIH0sXSB9LFxuICAgIHsgdHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogU2VsZiB9LCB7IHR5cGU6IEluamVjdCwgYXJnczogW05HX0FTWU5DX1ZBTElEQVRPUlMsXSB9LF0gfSxcbiAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IFNlbGYgfSwgeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtOR19WQUxVRV9BQ0NFU1NPUixdIH0sXSB9LFxuXTsgfTtcbkZvcm1Db250cm9sTmFtZS5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAnbmFtZSc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ2Zvcm1Db250cm9sTmFtZScsXSB9LF0sXG4gICAgJ21vZGVsJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsnbmdNb2RlbCcsXSB9LF0sXG4gICAgJ3VwZGF0ZSc6IFt7IHR5cGU6IE91dHB1dCwgYXJnczogWyduZ01vZGVsQ2hhbmdlJyxdIH0sXSxcbiAgICAnaXNEaXNhYmxlZCc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ2Rpc2FibGVkJyxdIH0sXSxcbn07XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG52YXIgUkVRVUlSRURfVkFMSURBVE9SID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gUmVxdWlyZWRWYWxpZGF0b3I7IH0pLFxuICAgIG11bHRpOiB0cnVlXG59O1xudmFyIENIRUNLQk9YX1JFUVVJUkVEX1ZBTElEQVRPUiA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIENoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3I7IH0pLFxuICAgIG11bHRpOiB0cnVlXG59O1xuLyoqXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGFkZHMgdGhlIGByZXF1aXJlZGAgdmFsaWRhdG9yIHRvIGFueSBjb250cm9scyBtYXJrZWQgd2l0aCB0aGVcbiAqIGByZXF1aXJlZGAgYXR0cmlidXRlLCB2aWEgdGhlIHtcXEBsaW5rIE5HX1ZBTElEQVRPUlN9IGJpbmRpbmcuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBcbiAqIDxpbnB1dCBuYW1lPVwiZnVsbE5hbWVcIiBuZ01vZGVsIHJlcXVpcmVkPlxuICogYGBgXG4gKlxuICogXFxAc3RhYmxlXG4gKi9cbnZhciBSZXF1aXJlZFZhbGlkYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVxdWlyZWRWYWxpZGF0b3IoKSB7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZXF1aXJlZFZhbGlkYXRvci5wcm90b3R5cGUsIFwicmVxdWlyZWRcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7IH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZWQgPSB2YWx1ZSAhPSBudWxsICYmIHZhbHVlICE9PSBmYWxzZSAmJiBcIlwiICsgdmFsdWUgIT09ICdmYWxzZSc7XG4gICAgICAgICAgICBpZiAodGhpcy5fb25DaGFuZ2UpXG4gICAgICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2UoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBjXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBSZXF1aXJlZFZhbGlkYXRvci5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1aXJlZCA/IFZhbGlkYXRvcnMucmVxdWlyZWQoYykgOiBudWxsO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBmblxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgUmVxdWlyZWRWYWxpZGF0b3IucHJvdG90eXBlLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5fb25DaGFuZ2UgPSBmbjsgfTtcbiAgICByZXR1cm4gUmVxdWlyZWRWYWxpZGF0b3I7XG59KCkpO1xuUmVxdWlyZWRWYWxpZGF0b3IuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJzpub3QoW3R5cGU9Y2hlY2tib3hdKVtyZXF1aXJlZF1bZm9ybUNvbnRyb2xOYW1lXSw6bm90KFt0eXBlPWNoZWNrYm94XSlbcmVxdWlyZWRdW2Zvcm1Db250cm9sXSw6bm90KFt0eXBlPWNoZWNrYm94XSlbcmVxdWlyZWRdW25nTW9kZWxdJyxcbiAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtSRVFVSVJFRF9WQUxJREFUT1JdLFxuICAgICAgICAgICAgICAgIGhvc3Q6IHsgJ1thdHRyLnJlcXVpcmVkXSc6ICdyZXF1aXJlZCA/IFwiXCIgOiBudWxsJyB9XG4gICAgICAgICAgICB9LF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cblJlcXVpcmVkVmFsaWRhdG9yLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG5SZXF1aXJlZFZhbGlkYXRvci5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAncmVxdWlyZWQnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG59O1xuLyoqXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGFkZHMgdGhlIGByZXF1aXJlZGAgdmFsaWRhdG9yIHRvIGNoZWNrYm94IGNvbnRyb2xzIG1hcmtlZCB3aXRoIHRoZVxuICogYHJlcXVpcmVkYCBhdHRyaWJ1dGUsIHZpYSB0aGUge1xcQGxpbmsgTkdfVkFMSURBVE9SU30gYmluZGluZy5cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIGBgYFxuICogPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJhY3RpdmVcIiBuZ01vZGVsIHJlcXVpcmVkPlxuICogYGBgXG4gKlxuICogXFxAZXhwZXJpbWVudGFsXG4gKi9cbnZhciBDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3IoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBjXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVpcmVkID8gVmFsaWRhdG9ycy5yZXF1aXJlZFRydWUoYykgOiBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIENoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3I7XG59KFJlcXVpcmVkVmFsaWRhdG9yKSk7XG5DaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dFt0eXBlPWNoZWNrYm94XVtyZXF1aXJlZF1bZm9ybUNvbnRyb2xOYW1lXSxpbnB1dFt0eXBlPWNoZWNrYm94XVtyZXF1aXJlZF1bZm9ybUNvbnRyb2xdLGlucHV0W3R5cGU9Y2hlY2tib3hdW3JlcXVpcmVkXVtuZ01vZGVsXScsXG4gICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbQ0hFQ0tCT1hfUkVRVUlSRURfVkFMSURBVE9SXSxcbiAgICAgICAgICAgICAgICBob3N0OiB7ICdbYXR0ci5yZXF1aXJlZF0nOiAncmVxdWlyZWQgPyBcIlwiIDogbnVsbCcgfVxuICAgICAgICAgICAgfSxdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5DaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG4vKipcbiAqIFByb3ZpZGVyIHdoaWNoIGFkZHMge1xcQGxpbmsgRW1haWxWYWxpZGF0b3J9IHRvIHtcXEBsaW5rIE5HX1ZBTElEQVRPUlN9LlxuICovXG52YXIgRU1BSUxfVkFMSURBVE9SID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gRW1haWxWYWxpZGF0b3I7IH0pLFxuICAgIG11bHRpOiB0cnVlXG59O1xuLyoqXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGFkZHMgdGhlIGBlbWFpbGAgdmFsaWRhdG9yIHRvIGNvbnRyb2xzIG1hcmtlZCB3aXRoIHRoZVxuICogYGVtYWlsYCBhdHRyaWJ1dGUsIHZpYSB0aGUge1xcQGxpbmsgTkdfVkFMSURBVE9SU30gYmluZGluZy5cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIGBgYFxuICogPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIG5nTW9kZWwgZW1haWw+XG4gKiA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgbmdNb2RlbCBlbWFpbD1cInRydWVcIj5cbiAqIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBuZ01vZGVsIFtlbWFpbF09XCJ0cnVlXCI+XG4gKiBgYGBcbiAqXG4gKiBcXEBleHBlcmltZW50YWxcbiAqL1xudmFyIEVtYWlsVmFsaWRhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFbWFpbFZhbGlkYXRvcigpIHtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVtYWlsVmFsaWRhdG9yLnByb3RvdHlwZSwgXCJlbWFpbFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xuICAgICAgICAgICAgaWYgKHRoaXMuX29uQ2hhbmdlKVxuICAgICAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gY1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRW1haWxWYWxpZGF0b3IucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VuYWJsZWQgPyBWYWxpZGF0b3JzLmVtYWlsKGMpIDogbnVsbDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEVtYWlsVmFsaWRhdG9yLnByb3RvdHlwZS5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlID0gZnVuY3Rpb24gKGZuKSB7IHRoaXMuX29uQ2hhbmdlID0gZm47IH07XG4gICAgcmV0dXJuIEVtYWlsVmFsaWRhdG9yO1xufSgpKTtcbkVtYWlsVmFsaWRhdG9yLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdbZW1haWxdW2Zvcm1Db250cm9sTmFtZV0sW2VtYWlsXVtmb3JtQ29udHJvbF0sW2VtYWlsXVtuZ01vZGVsXScsXG4gICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbRU1BSUxfVkFMSURBVE9SXVxuICAgICAgICAgICAgfSxdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5FbWFpbFZhbGlkYXRvci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuRW1haWxWYWxpZGF0b3IucHJvcERlY29yYXRvcnMgPSB7XG4gICAgJ2VtYWlsJzogW3sgdHlwZTogSW5wdXQgfSxdLFxufTtcbi8qKlxuICogUHJvdmlkZXIgd2hpY2ggYWRkcyB7XFxAbGluayBNaW5MZW5ndGhWYWxpZGF0b3J9IHRvIHtcXEBsaW5rIE5HX1ZBTElEQVRPUlN9LlxuICpcbiAqICMjIEV4YW1wbGU6XG4gKlxuICoge1xcQGV4YW1wbGUgY29tbW9uL2Zvcm1zL3RzL3ZhbGlkYXRvcnMvdmFsaWRhdG9ycy50cyByZWdpb249J21pbid9XG4gKi9cbnZhciBNSU5fTEVOR1RIX1ZBTElEQVRPUiA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1pbkxlbmd0aFZhbGlkYXRvcjsgfSksXG4gICAgbXVsdGk6IHRydWVcbn07XG4vKipcbiAqIEEgZGlyZWN0aXZlIHdoaWNoIGluc3RhbGxzIHRoZSB7XFxAbGluayBNaW5MZW5ndGhWYWxpZGF0b3J9IGZvciBhbnkgYGZvcm1Db250cm9sTmFtZWAsXG4gKiBgZm9ybUNvbnRyb2xgLCBvciBjb250cm9sIHdpdGggYG5nTW9kZWxgIHRoYXQgYWxzbyBoYXMgYSBgbWlubGVuZ3RoYCBhdHRyaWJ1dGUuXG4gKlxuICogXFxAc3RhYmxlXG4gKi9cbnZhciBNaW5MZW5ndGhWYWxpZGF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1pbkxlbmd0aFZhbGlkYXRvcigpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBNaW5MZW5ndGhWYWxpZGF0b3IucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgICAgaWYgKCdtaW5sZW5ndGgnIGluIGNoYW5nZXMpIHtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVZhbGlkYXRvcigpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX29uQ2hhbmdlKVxuICAgICAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gY1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgTWluTGVuZ3RoVmFsaWRhdG9yLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbmxlbmd0aCA9PSBudWxsID8gbnVsbCA6IHRoaXMuX3ZhbGlkYXRvcihjKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIE1pbkxlbmd0aFZhbGlkYXRvci5wcm90b3R5cGUucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZSA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLl9vbkNoYW5nZSA9IGZuOyB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgTWluTGVuZ3RoVmFsaWRhdG9yLnByb3RvdHlwZS5fY3JlYXRlVmFsaWRhdG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl92YWxpZGF0b3IgPSBWYWxpZGF0b3JzLm1pbkxlbmd0aChwYXJzZUludCh0aGlzLm1pbmxlbmd0aCwgMTApKTtcbiAgICB9O1xuICAgIHJldHVybiBNaW5MZW5ndGhWYWxpZGF0b3I7XG59KCkpO1xuTWluTGVuZ3RoVmFsaWRhdG9yLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdbbWlubGVuZ3RoXVtmb3JtQ29udHJvbE5hbWVdLFttaW5sZW5ndGhdW2Zvcm1Db250cm9sXSxbbWlubGVuZ3RoXVtuZ01vZGVsXScsXG4gICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbTUlOX0xFTkdUSF9WQUxJREFUT1JdLFxuICAgICAgICAgICAgICAgIGhvc3Q6IHsgJ1thdHRyLm1pbmxlbmd0aF0nOiAnbWlubGVuZ3RoID8gbWlubGVuZ3RoIDogbnVsbCcgfVxuICAgICAgICAgICAgfSxdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5NaW5MZW5ndGhWYWxpZGF0b3IuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcbk1pbkxlbmd0aFZhbGlkYXRvci5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAnbWlubGVuZ3RoJzogW3sgdHlwZTogSW5wdXQgfSxdLFxufTtcbi8qKlxuICogUHJvdmlkZXIgd2hpY2ggYWRkcyB7XFxAbGluayBNYXhMZW5ndGhWYWxpZGF0b3J9IHRvIHtcXEBsaW5rIE5HX1ZBTElEQVRPUlN9LlxuICpcbiAqICMjIEV4YW1wbGU6XG4gKlxuICoge1xcQGV4YW1wbGUgY29tbW9uL2Zvcm1zL3RzL3ZhbGlkYXRvcnMvdmFsaWRhdG9ycy50cyByZWdpb249J21heCd9XG4gKi9cbnZhciBNQVhfTEVOR1RIX1ZBTElEQVRPUiA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1heExlbmd0aFZhbGlkYXRvcjsgfSksXG4gICAgbXVsdGk6IHRydWVcbn07XG4vKipcbiAqIEEgZGlyZWN0aXZlIHdoaWNoIGluc3RhbGxzIHRoZSB7XFxAbGluayBNYXhMZW5ndGhWYWxpZGF0b3J9IGZvciBhbnkgYGZvcm1Db250cm9sTmFtZSxcbiAqIGBmb3JtQ29udHJvbGAsXG4gKiBvciBjb250cm9sIHdpdGggYG5nTW9kZWxgIHRoYXQgYWxzbyBoYXMgYSBgbWF4bGVuZ3RoYCBhdHRyaWJ1dGUuXG4gKlxuICogXFxAc3RhYmxlXG4gKi9cbnZhciBNYXhMZW5ndGhWYWxpZGF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1heExlbmd0aFZhbGlkYXRvcigpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBNYXhMZW5ndGhWYWxpZGF0b3IucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgICAgaWYgKCdtYXhsZW5ndGgnIGluIGNoYW5nZXMpIHtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVZhbGlkYXRvcigpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX29uQ2hhbmdlKVxuICAgICAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gY1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgTWF4TGVuZ3RoVmFsaWRhdG9yLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1heGxlbmd0aCAhPSBudWxsID8gdGhpcy5fdmFsaWRhdG9yKGMpIDogbnVsbDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIE1heExlbmd0aFZhbGlkYXRvci5wcm90b3R5cGUucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZSA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLl9vbkNoYW5nZSA9IGZuOyB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgTWF4TGVuZ3RoVmFsaWRhdG9yLnByb3RvdHlwZS5fY3JlYXRlVmFsaWRhdG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl92YWxpZGF0b3IgPSBWYWxpZGF0b3JzLm1heExlbmd0aChwYXJzZUludCh0aGlzLm1heGxlbmd0aCwgMTApKTtcbiAgICB9O1xuICAgIHJldHVybiBNYXhMZW5ndGhWYWxpZGF0b3I7XG59KCkpO1xuTWF4TGVuZ3RoVmFsaWRhdG9yLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdbbWF4bGVuZ3RoXVtmb3JtQ29udHJvbE5hbWVdLFttYXhsZW5ndGhdW2Zvcm1Db250cm9sXSxbbWF4bGVuZ3RoXVtuZ01vZGVsXScsXG4gICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbTUFYX0xFTkdUSF9WQUxJREFUT1JdLFxuICAgICAgICAgICAgICAgIGhvc3Q6IHsgJ1thdHRyLm1heGxlbmd0aF0nOiAnbWF4bGVuZ3RoID8gbWF4bGVuZ3RoIDogbnVsbCcgfVxuICAgICAgICAgICAgfSxdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5NYXhMZW5ndGhWYWxpZGF0b3IuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcbk1heExlbmd0aFZhbGlkYXRvci5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAnbWF4bGVuZ3RoJzogW3sgdHlwZTogSW5wdXQgfSxdLFxufTtcbnZhciBQQVRURVJOX1ZBTElEQVRPUiA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFBhdHRlcm5WYWxpZGF0b3I7IH0pLFxuICAgIG11bHRpOiB0cnVlXG59O1xuLyoqXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGFkZHMgdGhlIGBwYXR0ZXJuYCB2YWxpZGF0b3IgdG8gYW55IGNvbnRyb2xzIG1hcmtlZCB3aXRoIHRoZVxuICogYHBhdHRlcm5gIGF0dHJpYnV0ZSwgdmlhIHRoZSB7XFxAbGluayBOR19WQUxJREFUT1JTfSBiaW5kaW5nLiBVc2VzIGF0dHJpYnV0ZSB2YWx1ZVxuICogYXMgdGhlIHJlZ2V4IHRvIHZhbGlkYXRlIENvbnRyb2wgdmFsdWUgYWdhaW5zdC4gIEZvbGxvd3MgcGF0dGVybiBhdHRyaWJ1dGVcbiAqIHNlbWFudGljczsgaS5lLiByZWdleCBtdXN0IG1hdGNoIGVudGlyZSBDb250cm9sIHZhbHVlLlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogYGBgXG4gKiA8aW5wdXQgW25hbWVdPVwiZnVsbE5hbWVcIiBwYXR0ZXJuPVwiW2EtekEtWiBdKlwiIG5nTW9kZWw+XG4gKiBgYGBcbiAqIFxcQHN0YWJsZVxuICovXG52YXIgUGF0dGVyblZhbGlkYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUGF0dGVyblZhbGlkYXRvcigpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBQYXR0ZXJuVmFsaWRhdG9yLnByb3RvdHlwZS5uZ09uQ2hhbmdlcyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgIGlmICgncGF0dGVybicgaW4gY2hhbmdlcykge1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRlVmFsaWRhdG9yKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fb25DaGFuZ2UpXG4gICAgICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBjXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBQYXR0ZXJuVmFsaWRhdG9yLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uIChjKSB7IHJldHVybiB0aGlzLl92YWxpZGF0b3IoYyk7IH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBmblxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgUGF0dGVyblZhbGlkYXRvci5wcm90b3R5cGUucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZSA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLl9vbkNoYW5nZSA9IGZuOyB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgUGF0dGVyblZhbGlkYXRvci5wcm90b3R5cGUuX2NyZWF0ZVZhbGlkYXRvciA9IGZ1bmN0aW9uICgpIHsgdGhpcy5fdmFsaWRhdG9yID0gVmFsaWRhdG9ycy5wYXR0ZXJuKHRoaXMucGF0dGVybik7IH07XG4gICAgcmV0dXJuIFBhdHRlcm5WYWxpZGF0b3I7XG59KCkpO1xuUGF0dGVyblZhbGlkYXRvci5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnW3BhdHRlcm5dW2Zvcm1Db250cm9sTmFtZV0sW3BhdHRlcm5dW2Zvcm1Db250cm9sXSxbcGF0dGVybl1bbmdNb2RlbF0nLFxuICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW1BBVFRFUk5fVkFMSURBVE9SXSxcbiAgICAgICAgICAgICAgICBob3N0OiB7ICdbYXR0ci5wYXR0ZXJuXSc6ICdwYXR0ZXJuID8gcGF0dGVybiA6IG51bGwnIH1cbiAgICAgICAgICAgIH0sXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuUGF0dGVyblZhbGlkYXRvci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuUGF0dGVyblZhbGlkYXRvci5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAncGF0dGVybic6IFt7IHR5cGU6IElucHV0IH0sXSxcbn07XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKipcbiAqIFxcQHdoYXRJdERvZXMgQ3JlYXRlcyBhbiB7XFxAbGluayBBYnN0cmFjdENvbnRyb2x9IGZyb20gYSB1c2VyLXNwZWNpZmllZCBjb25maWd1cmF0aW9uLlxuICpcbiAqIEl0IGlzIGVzc2VudGlhbGx5IHN5bnRhY3RpYyBzdWdhciB0aGF0IHNob3J0ZW5zIHRoZSBgbmV3IEZvcm1Hcm91cCgpYCxcbiAqIGBuZXcgRm9ybUNvbnRyb2woKWAsIGFuZCBgbmV3IEZvcm1BcnJheSgpYCBib2lsZXJwbGF0ZSB0aGF0IGNhbiBidWlsZCB1cCBpbiBsYXJnZXJcbiAqIGZvcm1zLlxuICpcbiAqIFxcQGhvd1RvVXNlXG4gKlxuICogVG8gdXNlLCBpbmplY3QgYEZvcm1CdWlsZGVyYCBpbnRvIHlvdXIgY29tcG9uZW50IGNsYXNzLiBZb3UgY2FuIHRoZW4gY2FsbCBpdHMgbWV0aG9kc1xuICogZGlyZWN0bHkuXG4gKlxuICoge1xcQGV4YW1wbGUgZm9ybXMvdHMvZm9ybUJ1aWxkZXIvZm9ybV9idWlsZGVyX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICpcbiAqICAqICoqbnBtIHBhY2thZ2UqKjogYFxcQGFuZ3VsYXIvZm9ybXNgXG4gKlxuICogICogKipOZ01vZHVsZSoqOiB7XFxAbGluayBSZWFjdGl2ZUZvcm1zTW9kdWxlfVxuICpcbiAqIFxcQHN0YWJsZVxuICovXG52YXIgRm9ybUJ1aWxkZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZvcm1CdWlsZGVyKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgYSBuZXcge1xcQGxpbmsgRm9ybUdyb3VwfSB3aXRoIHRoZSBnaXZlbiBtYXAgb2YgY29uZmlndXJhdGlvbi5cbiAgICAgKiBWYWxpZCBrZXlzIGZvciB0aGUgYGV4dHJhYCBwYXJhbWV0ZXIgbWFwIGFyZSBgdmFsaWRhdG9yYCBhbmQgYGFzeW5jVmFsaWRhdG9yYC5cbiAgICAgKlxuICAgICAqIFNlZSB0aGUge1xcQGxpbmsgRm9ybUdyb3VwfSBjb25zdHJ1Y3RvciBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAqIEBwYXJhbSB7P30gY29udHJvbHNDb25maWdcbiAgICAgKiBAcGFyYW0gez89fSBleHRyYVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybUJ1aWxkZXIucHJvdG90eXBlLmdyb3VwID0gZnVuY3Rpb24gKGNvbnRyb2xzQ29uZmlnLCBleHRyYSkge1xuICAgICAgICBpZiAoZXh0cmEgPT09IHZvaWQgMCkgeyBleHRyYSA9IG51bGw7IH1cbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY29udHJvbHMgPSB0aGlzLl9yZWR1Y2VDb250cm9scyhjb250cm9sc0NvbmZpZyk7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHZhbGlkYXRvciA9IGV4dHJhICE9IG51bGwgPyBleHRyYVsndmFsaWRhdG9yJ10gOiBudWxsO1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBhc3luY1ZhbGlkYXRvciA9IGV4dHJhICE9IG51bGwgPyBleHRyYVsnYXN5bmNWYWxpZGF0b3InXSA6IG51bGw7XG4gICAgICAgIHJldHVybiBuZXcgRm9ybUdyb3VwKGNvbnRyb2xzLCB2YWxpZGF0b3IsIGFzeW5jVmFsaWRhdG9yKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBhIG5ldyB7XFxAbGluayBGb3JtQ29udHJvbH0gd2l0aCB0aGUgZ2l2ZW4gYGZvcm1TdGF0ZWAsYHZhbGlkYXRvcmAsIGFuZFxuICAgICAqIGBhc3luY1ZhbGlkYXRvcmAuXG4gICAgICpcbiAgICAgKiBgZm9ybVN0YXRlYCBjYW4gZWl0aGVyIGJlIGEgc3RhbmRhbG9uZSB2YWx1ZSBmb3IgdGhlIGZvcm0gY29udHJvbCBvciBhbiBvYmplY3RcbiAgICAgKiB0aGF0IGNvbnRhaW5zIGJvdGggYSB2YWx1ZSBhbmQgYSBkaXNhYmxlZCBzdGF0dXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gez99IGZvcm1TdGF0ZVxuICAgICAqIEBwYXJhbSB7Pz19IHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSB7Pz19IGFzeW5jVmFsaWRhdG9yXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtQnVpbGRlci5wcm90b3R5cGUuY29udHJvbCA9IGZ1bmN0aW9uIChmb3JtU3RhdGUsIHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBGb3JtQ29udHJvbChmb3JtU3RhdGUsIHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IGEge1xcQGxpbmsgRm9ybUFycmF5fSBmcm9tIHRoZSBnaXZlbiBgY29udHJvbHNDb25maWdgIGFycmF5IG9mXG4gICAgICogY29uZmlndXJhdGlvbiwgd2l0aCB0aGUgZ2l2ZW4gb3B0aW9uYWwgYHZhbGlkYXRvcmAgYW5kIGBhc3luY1ZhbGlkYXRvcmAuXG4gICAgICogQHBhcmFtIHs/fSBjb250cm9sc0NvbmZpZ1xuICAgICAqIEBwYXJhbSB7Pz19IHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSB7Pz19IGFzeW5jVmFsaWRhdG9yXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtQnVpbGRlci5wcm90b3R5cGUuYXJyYXkgPSBmdW5jdGlvbiAoY29udHJvbHNDb25maWcsIHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY29udHJvbHMgPSBjb250cm9sc0NvbmZpZy5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIF90aGlzLl9jcmVhdGVDb250cm9sKGMpOyB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBGb3JtQXJyYXkoY29udHJvbHMsIHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogXFxAaW50ZXJuYWxcbiAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xzQ29uZmlnXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtQnVpbGRlci5wcm90b3R5cGUuX3JlZHVjZUNvbnRyb2xzID0gZnVuY3Rpb24gKGNvbnRyb2xzQ29uZmlnKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGNvbnRyb2xzID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGNvbnRyb2xzQ29uZmlnKS5mb3JFYWNoKGZ1bmN0aW9uIChjb250cm9sTmFtZSkge1xuICAgICAgICAgICAgY29udHJvbHNbY29udHJvbE5hbWVdID0gX3RoaXMuX2NyZWF0ZUNvbnRyb2woY29udHJvbHNDb25maWdbY29udHJvbE5hbWVdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb250cm9scztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFxcQGludGVybmFsXG4gICAgICogQHBhcmFtIHs/fSBjb250cm9sQ29uZmlnXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtQnVpbGRlci5wcm90b3R5cGUuX2NyZWF0ZUNvbnRyb2wgPSBmdW5jdGlvbiAoY29udHJvbENvbmZpZykge1xuICAgICAgICBpZiAoY29udHJvbENvbmZpZyBpbnN0YW5jZW9mIEZvcm1Db250cm9sIHx8IGNvbnRyb2xDb25maWcgaW5zdGFuY2VvZiBGb3JtR3JvdXAgfHxcbiAgICAgICAgICAgIGNvbnRyb2xDb25maWcgaW5zdGFuY2VvZiBGb3JtQXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250cm9sQ29uZmlnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY29udHJvbENvbmZpZykpIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHZhbHVlID0gY29udHJvbENvbmZpZ1swXTtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHZhbGlkYXRvciA9IGNvbnRyb2xDb25maWcubGVuZ3RoID4gMSA/IGNvbnRyb2xDb25maWdbMV0gOiBudWxsO1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gYXN5bmNWYWxpZGF0b3IgPSBjb250cm9sQ29uZmlnLmxlbmd0aCA+IDIgPyBjb250cm9sQ29uZmlnWzJdIDogbnVsbDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2wodmFsdWUsIHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEZvcm1CdWlsZGVyO1xufSgpKTtcbkZvcm1CdWlsZGVyLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBJbmplY3RhYmxlIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5Gb3JtQnVpbGRlci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBAbW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqIEVudHJ5IHBvaW50IGZvciBhbGwgcHVibGljIEFQSXMgb2YgdGhlIGNvbW1vbiBwYWNrYWdlLlxuICovXG4vKipcbiAqIFxcQHN0YWJsZVxuICovXG52YXIgVkVSU0lPTiA9IG5ldyBWZXJzaW9uKCc0LjIuNicpO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBcXEB3aGF0SXREb2VzIEFkZHMgYG5vdmFsaWRhdGVgIGF0dHJpYnV0ZSB0byBhbGwgZm9ybXMgYnkgZGVmYXVsdC5cbiAqXG4gKiBgbm92YWxpZGF0ZWAgaXMgdXNlZCB0byBkaXNhYmxlIGJyb3dzZXIncyBuYXRpdmUgZm9ybSB2YWxpZGF0aW9uLlxuICpcbiAqIElmIHlvdSB3YW50IHRvIHVzZSBuYXRpdmUgdmFsaWRhdGlvbiB3aXRoIEFuZ3VsYXIgZm9ybXMsIGp1c3QgYWRkIGBuZ05hdGl2ZVZhbGlkYXRlYCBhdHRyaWJ1dGU6XG4gKlxuICogYGBgXG4gKiA8Zm9ybSBuZ05hdGl2ZVZhbGlkYXRlPjwvZm9ybT5cbiAqIGBgYFxuICpcbiAqIFxcQGV4cGVyaW1lbnRhbFxuICovXG52YXIgTmdOb1ZhbGlkYXRlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOZ05vVmFsaWRhdGUoKSB7XG4gICAgfVxuICAgIHJldHVybiBOZ05vVmFsaWRhdGU7XG59KCkpO1xuTmdOb1ZhbGlkYXRlLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtOm5vdChbbmdOb0Zvcm1dKTpub3QoW25nTmF0aXZlVmFsaWRhdGVdKScsXG4gICAgICAgICAgICAgICAgaG9zdDogeyAnbm92YWxpZGF0ZSc6ICcnIH0sXG4gICAgICAgICAgICB9LF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbk5nTm9WYWxpZGF0ZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xudmFyIFNIQVJFRF9GT1JNX0RJUkVDVElWRVMgPSBbXG4gICAgTmdOb1ZhbGlkYXRlLFxuICAgIE5nU2VsZWN0T3B0aW9uLFxuICAgIE5nU2VsZWN0TXVsdGlwbGVPcHRpb24sXG4gICAgRGVmYXVsdFZhbHVlQWNjZXNzb3IsXG4gICAgTnVtYmVyVmFsdWVBY2Nlc3NvcixcbiAgICBSYW5nZVZhbHVlQWNjZXNzb3IsXG4gICAgQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgICBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgICBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICAgIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gICAgTmdDb250cm9sU3RhdHVzLFxuICAgIE5nQ29udHJvbFN0YXR1c0dyb3VwLFxuICAgIFJlcXVpcmVkVmFsaWRhdG9yLFxuICAgIE1pbkxlbmd0aFZhbGlkYXRvcixcbiAgICBNYXhMZW5ndGhWYWxpZGF0b3IsXG4gICAgUGF0dGVyblZhbGlkYXRvcixcbiAgICBDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yLFxuICAgIEVtYWlsVmFsaWRhdG9yLFxuXTtcbnZhciBURU1QTEFURV9EUklWRU5fRElSRUNUSVZFUyA9IFtOZ01vZGVsLCBOZ01vZGVsR3JvdXAsIE5nRm9ybV07XG52YXIgUkVBQ1RJVkVfRFJJVkVOX0RJUkVDVElWRVMgPSBbRm9ybUNvbnRyb2xEaXJlY3RpdmUsIEZvcm1Hcm91cERpcmVjdGl2ZSwgRm9ybUNvbnRyb2xOYW1lLCBGb3JtR3JvdXBOYW1lLCBGb3JtQXJyYXlOYW1lXTtcbi8qKlxuICogSW50ZXJuYWwgbW9kdWxlIHVzZWQgZm9yIHNoYXJpbmcgZGlyZWN0aXZlcyBiZXR3ZWVuIEZvcm1zTW9kdWxlIGFuZCBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gKi9cbnZhciBJbnRlcm5hbEZvcm1zU2hhcmVkTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBJbnRlcm5hbEZvcm1zU2hhcmVkTW9kdWxlKCkge1xuICAgIH1cbiAgICByZXR1cm4gSW50ZXJuYWxGb3Jtc1NoYXJlZE1vZHVsZTtcbn0oKSk7XG5JbnRlcm5hbEZvcm1zU2hhcmVkTW9kdWxlLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBOZ01vZHVsZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFNIQVJFRF9GT1JNX0RJUkVDVElWRVMsXG4gICAgICAgICAgICAgICAgZXhwb3J0czogU0hBUkVEX0ZPUk1fRElSRUNUSVZFUyxcbiAgICAgICAgICAgIH0sXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuSW50ZXJuYWxGb3Jtc1NoYXJlZE1vZHVsZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBUaGUgbmcgbW9kdWxlIGZvciBmb3Jtcy5cbiAqIFxcQHN0YWJsZVxuICovXG52YXIgRm9ybXNNb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZvcm1zTW9kdWxlKCkge1xuICAgIH1cbiAgICByZXR1cm4gRm9ybXNNb2R1bGU7XG59KCkpO1xuRm9ybXNNb2R1bGUuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IE5nTW9kdWxlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uczogVEVNUExBVEVfRFJJVkVOX0RJUkVDVElWRVMsXG4gICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbUmFkaW9Db250cm9sUmVnaXN0cnldLFxuICAgICAgICAgICAgICAgIGV4cG9ydHM6IFtJbnRlcm5hbEZvcm1zU2hhcmVkTW9kdWxlLCBURU1QTEFURV9EUklWRU5fRElSRUNUSVZFU11cbiAgICAgICAgICAgIH0sXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuRm9ybXNNb2R1bGUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcbi8qKlxuICogVGhlIG5nIG1vZHVsZSBmb3IgcmVhY3RpdmUgZm9ybXMuXG4gKiBcXEBzdGFibGVcbiAqL1xudmFyIFJlYWN0aXZlRm9ybXNNb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlYWN0aXZlRm9ybXNNb2R1bGUoKSB7XG4gICAgfVxuICAgIHJldHVybiBSZWFjdGl2ZUZvcm1zTW9kdWxlO1xufSgpKTtcblJlYWN0aXZlRm9ybXNNb2R1bGUuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IE5nTW9kdWxlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uczogW1JFQUNUSVZFX0RSSVZFTl9ESVJFQ1RJVkVTXSxcbiAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtGb3JtQnVpbGRlciwgUmFkaW9Db250cm9sUmVnaXN0cnldLFxuICAgICAgICAgICAgICAgIGV4cG9ydHM6IFtJbnRlcm5hbEZvcm1zU2hhcmVkTW9kdWxlLCBSRUFDVElWRV9EUklWRU5fRElSRUNUSVZFU11cbiAgICAgICAgICAgIH0sXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuUmVhY3RpdmVGb3Jtc01vZHVsZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBAbW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgbW9kdWxlIGlzIHVzZWQgZm9yIGhhbmRsaW5nIHVzZXIgaW5wdXQsIGJ5IGRlZmluaW5nIGFuZCBidWlsZGluZyBhIHtAbGluayBGb3JtR3JvdXB9IHRoYXRcbiAqIGNvbnNpc3RzIG9mIHtAbGluayBGb3JtQ29udHJvbH0gb2JqZWN0cywgYW5kIG1hcHBpbmcgdGhlbSBvbnRvIHRoZSBET00uIHtAbGluayBGb3JtQ29udHJvbH1cbiAqIG9iamVjdHMgY2FuIHRoZW4gYmUgdXNlZCB0byByZWFkIGluZm9ybWF0aW9uIGZyb20gdGhlIGZvcm0gRE9NIGVsZW1lbnRzLlxuICpcbiAqIEZvcm1zIHByb3ZpZGVycyBhcmUgbm90IGluY2x1ZGVkIGluIGRlZmF1bHQgcHJvdmlkZXJzOyB5b3UgbXVzdCBpbXBvcnQgdGhlc2UgcHJvdmlkZXJzXG4gKiBleHBsaWNpdGx5LlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKipcbiAqIEBtb2R1bGVcbiAqIEBkZXNjcmlwdGlvblxuICogRW50cnkgcG9pbnQgZm9yIGFsbCBwdWJsaWMgQVBJcyBvZiB0aGUgZm9ybXMgcGFja2FnZS5cbiAqL1xuLy8gVGhpcyBmaWxlIG9ubHkgcmVleHBvcnRzIGNvbnRlbnQgb2YgdGhlIGBzcmNgIGZvbGRlci4gS2VlcCBpdCB0aGF0IHdheS5cbi8qKlxuICogR2VuZXJhdGVkIGJ1bmRsZSBpbmRleC4gRG8gbm90IGVkaXQuXG4gKi9cbmV4cG9ydCB7IEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZSwgQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUsIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IsIENvbnRyb2xDb250YWluZXIsIE5HX1ZBTFVFX0FDQ0VTU09SLCBDT01QT1NJVElPTl9CVUZGRVJfTU9ERSwgRGVmYXVsdFZhbHVlQWNjZXNzb3IsIE5nQ29udHJvbCwgTmdDb250cm9sU3RhdHVzLCBOZ0NvbnRyb2xTdGF0dXNHcm91cCwgTmdGb3JtLCBOZ01vZGVsLCBOZ01vZGVsR3JvdXAsIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sRGlyZWN0aXZlLCBGb3JtQ29udHJvbE5hbWUsIEZvcm1Hcm91cERpcmVjdGl2ZSwgRm9ybUFycmF5TmFtZSwgRm9ybUdyb3VwTmFtZSwgTmdTZWxlY3RPcHRpb24sIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yLCBFbWFpbFZhbGlkYXRvciwgTWF4TGVuZ3RoVmFsaWRhdG9yLCBNaW5MZW5ndGhWYWxpZGF0b3IsIFBhdHRlcm5WYWxpZGF0b3IsIFJlcXVpcmVkVmFsaWRhdG9yLCBGb3JtQnVpbGRlciwgQWJzdHJhY3RDb250cm9sLCBGb3JtQXJyYXksIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIE5HX0FTWU5DX1ZBTElEQVRPUlMsIE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvcnMsIFZFUlNJT04sIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBJbnRlcm5hbEZvcm1zU2hhcmVkTW9kdWxlIGFzIMm1YmEsIFJFQUNUSVZFX0RSSVZFTl9ESVJFQ1RJVkVTIGFzIMm1eiwgU0hBUkVEX0ZPUk1fRElSRUNUSVZFUyBhcyDJtXgsIFRFTVBMQVRFX0RSSVZFTl9ESVJFQ1RJVkVTIGFzIMm1eSwgQ0hFQ0tCT1hfVkFMVUVfQUNDRVNTT1IgYXMgybVhLCBERUZBVUxUX1ZBTFVFX0FDQ0VTU09SIGFzIMm1YiwgQWJzdHJhY3RDb250cm9sU3RhdHVzIGFzIMm1YywgbmdDb250cm9sU3RhdHVzSG9zdCBhcyDJtWQsIGZvcm1EaXJlY3RpdmVQcm92aWRlciBhcyDJtWUsIGZvcm1Db250cm9sQmluZGluZyBhcyDJtWYsIG1vZGVsR3JvdXBQcm92aWRlciBhcyDJtWcsIE5nTm9WYWxpZGF0ZSBhcyDJtWJmLCBOVU1CRVJfVkFMVUVfQUNDRVNTT1IgYXMgybViYiwgTnVtYmVyVmFsdWVBY2Nlc3NvciBhcyDJtWJjLCBSQURJT19WQUxVRV9BQ0NFU1NPUiBhcyDJtWgsIFJhZGlvQ29udHJvbFJlZ2lzdHJ5IGFzIMm1aSwgUkFOR0VfVkFMVUVfQUNDRVNTT1IgYXMgybViZCwgUmFuZ2VWYWx1ZUFjY2Vzc29yIGFzIMm1YmUsIGZvcm1Db250cm9sQmluZGluZyQxIGFzIMm1aiwgY29udHJvbE5hbWVCaW5kaW5nIGFzIMm1aywgZm9ybURpcmVjdGl2ZVByb3ZpZGVyJDEgYXMgybVsLCBmb3JtQXJyYXlOYW1lUHJvdmlkZXIgYXMgybVuLCBmb3JtR3JvdXBOYW1lUHJvdmlkZXIgYXMgybVtLCBTRUxFQ1RfVkFMVUVfQUNDRVNTT1IgYXMgybVvLCBOZ1NlbGVjdE11bHRpcGxlT3B0aW9uIGFzIMm1cSwgU0VMRUNUX01VTFRJUExFX1ZBTFVFX0FDQ0VTU09SIGFzIMm1cCwgQ0hFQ0tCT1hfUkVRVUlSRURfVkFMSURBVE9SIGFzIMm1cywgRU1BSUxfVkFMSURBVE9SIGFzIMm1dCwgTUFYX0xFTkdUSF9WQUxJREFUT1IgYXMgybV2LCBNSU5fTEVOR1RIX1ZBTElEQVRPUiBhcyDJtXUsIFBBVFRFUk5fVkFMSURBVE9SIGFzIMm1dywgUkVRVUlSRURfVkFMSURBVE9SIGFzIMm1ciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybXMuZXM1LmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L0Bhbmd1bGFyL2Zvcm1zL0Bhbmd1bGFyL2Zvcm1zLmVzNS5qc1xuLy8gbW9kdWxlIGlkID0gNjI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIE1lbnVDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTWVudUNvbXBvbmVudCgpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBNZW51Q29tcG9uZW50O1xyXG59KCkpO1xyXG5NZW51Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICBzZWxlY3RvcjogJ2FwcC1tZW51JyxcclxuICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9tZW51LmNvbXBvbmVudC5odG1sJylcclxuICAgIH0pXHJcbl0sIE1lbnVDb21wb25lbnQpO1xyXG5leHBvcnRzLk1lbnVDb21wb25lbnQgPSBNZW51Q29tcG9uZW50O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Rpc3QvanMvbWVudS9tZW51LmNvbXBvbmVudC50c1xuLy8gbW9kdWxlIGlkID0gNjI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gXCI8bmF2PlxcclxcblxcdDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuXFx0XFx0TWVudVxcclxcblxcdDwvZGl2PlxcclxcbjwvbmF2PlxcclxcbjxociAvPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZGlzdC9qcy9tZW51L21lbnUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDYyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBDdXN0b21Db21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ3VzdG9tQ29tcG9uZW50KCkge1xyXG4gICAgICAgIHRoaXMuc2VydmVyTmFtZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuaXNPdXRwdXROYW1lID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pZFNlcnZlciA9IDEyMztcclxuICAgIH1cclxuICAgIEN1c3RvbUNvbXBvbmVudC5wcm90b3R5cGUub25DaGFuZ2VTZXJ2ZXJOYW1lID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB0aGlzLnNlcnZlck5hbWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIH07XHJcbiAgICBDdXN0b21Db21wb25lbnQucHJvdG90eXBlLm91dHB1dFNlcnZlck5hbWUgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHRoaXMuaXNPdXRwdXROYW1lID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBDdXN0b21Db21wb25lbnQucHJvdG90eXBlLmdldFNlcnZlck5hbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNPdXRwdXROYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNPdXRwdXROYW1lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiAnU2VydmVyIG5hbWUgaXMgJyArIHRoaXMuc2VydmVyTmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQ3VzdG9tQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBZb3VyIHNjcmlwdCBoZXJlXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEN1c3RvbUNvbXBvbmVudDtcclxufSgpKTtcclxuQ3VzdG9tQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICBzZWxlY3RvcjogJ2FwcC1jdXN0b20nLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2N1c3RvbS5jb21wb25lbnQuaHRtbCcpXHJcbiAgICB9KVxyXG5dLCBDdXN0b21Db21wb25lbnQpO1xyXG5leHBvcnRzLkN1c3RvbUNvbXBvbmVudCA9IEN1c3RvbUNvbXBvbmVudDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9kaXN0L2pzL2N1c3RvbS9jdXN0b20uY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSA2Mjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzZWN0aW9uIGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcblxcdDxoMz5DdXN0b20gQ29tcG9uZW50PC9oMz5cXHJcXG5cXHQ8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwic2VydmVyTmFtZVxcXCIgKGlucHV0KT1cXFwib25DaGFuZ2VTZXJ2ZXJOYW1lKCRldmVudClcXFwiPlxcclxcblxcdDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwib3V0cHV0U2VydmVyTmFtZSgkZXZlbnQpXFxcIj5TZXQgU2VydmVyIE5hbWU8L2J1dHRvbj5cXHJcXG5cXHQ8cCBbYXR0ci5kYXRhLWlkLXNlcnZlcl09XFxcImlkU2VydmVyXFxcIj57eyBnZXRTZXJ2ZXJOYW1lKCkgfX08L3A+XFxyXFxuPC9zZWN0aW9uPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZGlzdC9qcy9jdXN0b20vY3VzdG9tLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA2Mjlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN0QkE7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNoOUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwQkE7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3RDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=