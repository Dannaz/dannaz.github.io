webpackJsonp([1,4],{

/***/ 135:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 135;


/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(148);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(208),
        styles: [__webpack_require__(202)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__currency_currency_component__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_currency_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__currency_input_currency_input_component__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__currency_dropdown_currency_dropdown_component__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__currency_info_currency_info_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_directives_centred_flex_directive__ = __webpack_require__(147);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__currency_currency_component__["a" /* CurrencyComponent */],
            __WEBPACK_IMPORTED_MODULE_7__currency_input_currency_input_component__["a" /* CurrencyInputComponent */],
            __WEBPACK_IMPORTED_MODULE_8__currency_dropdown_currency_dropdown_component__["a" /* CurrencyDropdownComponent */],
            __WEBPACK_IMPORTED_MODULE_9__currency_info_currency_info_component__["a" /* CurrencyInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_10__shared_directives_centred_flex_directive__["a" /* CentredFlexDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__shared_services_currency_service__["a" /* CurrencyService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyDropdownComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CurrencyDropdownComponent = (function () {
    function CurrencyDropdownComponent() {
        this.currencyChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
    }
    CurrencyDropdownComponent.prototype.ngOnInit = function () {
    };
    CurrencyDropdownComponent.prototype.onItemClick = function (target) {
        if (target.classList.contains('dropdown-content__item')) {
            if (target.dataset.wallet !== this.currentCurrency.walletName) {
                Object.assign(this.currentCurrency, { walletName: target.dataset.wallet });
                this.currencyChange.emit(this.currentCurrency.walletName);
            }
        }
    };
    return CurrencyDropdownComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], CurrencyDropdownComponent.prototype, "currentCurrency", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Array)
], CurrencyDropdownComponent.prototype, "currency", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(),
    __metadata("design:type", Object)
], CurrencyDropdownComponent.prototype, "currencyChange", void 0);
CurrencyDropdownComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-currency-dropdown',
        template: __webpack_require__(209),
        styles: [__webpack_require__(203)]
    }),
    __metadata("design:paramtypes", [])
], CurrencyDropdownComponent);

//# sourceMappingURL=currency-dropdown.component.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CurrencyInfoComponent = (function () {
    function CurrencyInfoComponent() {
        this.currencySellStatus = true;
        this.walletChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.currentCurrency = { walletName: 'RUB' };
    }
    CurrencyInfoComponent.prototype.ngOnInit = function () {
    };
    CurrencyInfoComponent.prototype.isSell = function () {
        return this.currencySellStatus;
    };
    CurrencyInfoComponent.prototype.onChange = function (event) {
        this.currencySellStatus = event.target.checked;
    };
    CurrencyInfoComponent.prototype.onCurrencyChange = function (value) {
        this.walletChange.emit(value);
    };
    return CurrencyInfoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], CurrencyInfoComponent.prototype, "currency", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], CurrencyInfoComponent.prototype, "popularRates", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(),
    __metadata("design:type", Object)
], CurrencyInfoComponent.prototype, "walletChange", void 0);
CurrencyInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-currency-info',
        template: __webpack_require__(210),
        styles: [__webpack_require__(204)]
    }),
    __metadata("design:paramtypes", [])
], CurrencyInfoComponent);

//# sourceMappingURL=currency-info.component.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CurrencyInputComponent = (function () {
    function CurrencyInputComponent() {
        this.REGEXP_PATTERN = '^[0-9]+\.?[0-9]+$';
        this.SEPARATOR = ' ';
        this.currencyInputChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.converterDelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.inputValueControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.regExp = new RegExp(this.REGEXP_PATTERN);
    }
    CurrencyInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inputValueControl.valueChanges.subscribe(function (inputValue) {
            _this.currentConverter.walletValue = _this.parse(inputValue, _this.SEPARATOR);
            _this.currencyInputChange.emit(_this.currentConverter);
        });
    };
    CurrencyInputComponent.prototype.format = function (number, separator) {
        if (isNaN(number)) {
            return '0';
        }
        return number.toString().split(/(?=(?:\d{3})+(?!\d))/).join(separator);
    };
    CurrencyInputComponent.prototype.parse = function (number, separator) {
        return number.toString().split(separator).join('');
    };
    CurrencyInputComponent.prototype.onWalletChange = function (walletName) {
        this.currentConverter.walletName = walletName;
        this.currencyInputChange.emit(this.currentConverter);
    };
    CurrencyInputComponent.prototype.deleteInput = function () {
        this.converterDelete.emit(this.currentConverter);
    };
    return CurrencyInputComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], CurrencyInputComponent.prototype, "currentConverter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Array)
], CurrencyInputComponent.prototype, "currency", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Boolean)
], CurrencyInputComponent.prototype, "canDelete", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(),
    __metadata("design:type", Object)
], CurrencyInputComponent.prototype, "currencyInputChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(),
    __metadata("design:type", Object)
], CurrencyInputComponent.prototype, "converterDelete", void 0);
CurrencyInputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-currency-input',
        template: __webpack_require__(211),
        styles: [__webpack_require__(205)]
    }),
    __metadata("design:paramtypes", [])
], CurrencyInputComponent);

//# sourceMappingURL=currency-input.component.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_currency_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_util__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CurrencyComponent = (function () {
    function CurrencyComponent(currencyService) {
        this.currencyService = currencyService;
        this.DEFAULT_VALUE = 100;
        this.DEFAULT_WALLET = 'RUB';
        this.DEFAULT_UPDATE_INTERVAL = 60000;
    }
    CurrencyComponent.prototype.ngOnInit = function () {
        var _this = this;
        var rates$ = this.currencyService.loadActualRates(this.DEFAULT_UPDATE_INTERVAL);
        var popular$ = this.currencyService.loadPopularWallets();
        var locale$ = this.currencyService.loadWalletsLocalization();
        rates$.subscribe(function () {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_util__["isUndefined"])(_this.converters)) {
                _this.converters = _this.currencyService.updateConverters(_this.DEFAULT_VALUE, _this.DEFAULT_WALLET);
            }
        }, function (err) {
            console.log('something gone wrong on rates loading:', err);
        });
        locale$.subscribe(function (walletsLocale) {
            _this.currency = walletsLocale;
        }, function (err) {
            console.log('something gone wrong on wallets locale loading:', err);
        });
        popular$.subscribe(function () {
            _this.updatePopularRates(_this.DEFAULT_WALLET);
        }, function (err) {
            console.log('something gone wrong on popular rates load:', err);
        });
    };
    CurrencyComponent.prototype.onCurrencyInputChange = function (converter) {
        this.converters = this.currencyService.updateConverters(converter.walletValue, converter.walletName);
    };
    CurrencyComponent.prototype.addConverter = function () {
        this.currencyService.addConverter();
        this.currencyService.updateConverters(100, 'RUB');
    };
    CurrencyComponent.prototype.updatePopularRates = function (walletName) {
        var _this = this;
        var result = this.currencyService.getCurrencyRates(walletName);
        if (result instanceof __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"]) {
            result.subscribe(function (data) {
                _this.popularRates = data;
            });
        }
        else {
            this.popularRates = result;
        }
    };
    CurrencyComponent.prototype.onConverterDelete = function (converter) {
        this.currencyService.deleteConverter(converter);
        this.converters = this.currencyService.updateConverters(converter.walletValue, converter.walletName);
    };
    return CurrencyComponent;
}());
CurrencyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-currency',
        template: __webpack_require__(212),
        styles: [__webpack_require__(206)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_currency_service__["a" /* CurrencyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_currency_service__["a" /* CurrencyService */]) === "function" && _a || Object])
], CurrencyComponent);

var _a;
//# sourceMappingURL=currency.component.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CentredFlexDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CentredFlexDirective = (function () {
    function CentredFlexDirective(el) {
        el.nativeElement.style.width = '300px';
        //el.nativeElement.style.height = '300px';
        el.nativeElement.style.display = 'flex';
        el.nativeElement.style.justifyContent = 'center';
        el.nativeElement.style.alignItems = 'center';
        el.nativeElement.style.flexWrap = 'wrap';
    }
    return CentredFlexDirective;
}());
CentredFlexDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Directive */])({
        selector: '[appCentredFlex]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */]) === "function" && _a || Object])
], CentredFlexDirective);

var _a;
//# sourceMappingURL=centred-flex.directive.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, "app-currency {\n  width: 100%;\n  /*background-color: yellow;*/\n  //border: 1px solid black;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.container {\n  width: 320px;\n  margin-right: auto;\n  margin-left: auto;\n  text-align: center;\n  border: 1px solid #dddddd;\n  box-shadow: 0px 0px 10px 6px rgba(170,224,220,1);\n  /*background-color: yellow;*/\n}\nh2 {\n  color: #3cb0fd;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, ".dropdown {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n}\n.dropdown-btn {\n  background: #34d955;\n  background-image: linear-gradient(to bottom, #34d955, #7bb82b);\n  border-radius: 20px;\n  font-family: Arial;\n  color: #ffffff;\n  font-size: 20px;\n  padding: 10px 15px 10px 15px;\n  text-decoration: none;\n}\n\n.dropdown-btn:hover {\n  background: #3cb0fd;\n  background-image: linear-gradient(to bottom, #3cb0fd, #3498db);\n  text-decoration: none;\n}\n.dropdown-btn:after {\n  content: \"\\25BC\";\n  font-size: 15px;\n}\n\n\n.dropdown-content {\n  display: none;\n  padding: 0;\n  margin: 0;\n  right: 0;\n  position: absolute;\n  background-color: #f9f9f9;\n  width: 250px;\n  max-height: 200px;\n  overflow-y: scroll;\n  box-shadow: 5px 5px 12px 1px rgba(60,176,253,1);\n  border-radius: 20px;\n  z-index: 1;\n\n  background:\n    /* Shadow covers */\n    linear-gradient(white 30%, rgba(255,255,255,0)),\n    linear-gradient(rgba(255,255,255,0), white 70%) 0 100%,\n\n      /* Shadows */\n    radial-gradient(farthest-side at 50% 0, rgba(0,0,0,.2), rgba(0,0,0,0)),\n    radial-gradient(farthest-side at 50% 100%, rgba(0,0,0,.2), rgba(0,0,0,0)) 0 100%;\n  background-repeat: no-repeat;\n  background-color: white;\n  background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;\n\n  /* Opera doesn't support this in the shorthand */\n  background-attachment: local, local, scroll, scroll;\n}\n.dropdown-content__item {\n  color: #3cb0fd;\n  list-style-type: none;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  border-bottom: 1px solid #dddddd;\n}\n.dropdown-content__item:hover {\n  background-color: #dddddd;\n}\n.dropdown:hover .dropdown-content{\n  display: block;\n}\n.dropdown:hover .dropdown-btn:after {\n  content: \"\\25B2\";\n  font-size: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, "p {\n  display: block;\n  color: #3cb0fd;\n}\n.currency-list {\n  list-style-type: none;\n  list-style-position: outside;\n  -webkit-padding-start: 0;\n  width: 300px;\n}\n.currency-list__item {\n  padding: 10px;\n  border-bottom: 2px solid #dddddd;\n  text-align: center;\n}\n\n.currency-info__header,\n.currency-info__list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.currency-list__item {\n  color: #3cb0fd;\n}\napp-currency-dropdown {\n  width: 50%;\n}\n.currency-wallet {\n  float: left;\n  text-align: left;\n}\n.currency-type-toggler {\n  margin-top: 10px;\n  color: #3cb0fd;\n  font-size: 25px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n  padding-bottom: 0;\n  margin: 0 10px;\n}\n.switch input {display:none;}\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #34d955;\n  transition: .4s;\n}\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: .4s;\n}\ninput:checked + .slider {\n  background-color: #3cb0fd;\n}\ninput:focus + .slider {\n  box-shadow: 0 0 1px #3cb0fd;\n}\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  transform: translateX(26px);\n}\n.slider.round {\n  border-radius: 34px;\n}\n.slider.round:before {\n  border-radius: 50%;\n}\n.currency {\n  opacity: 0.5;\n}\n.targeted-currency {\n  opacity: 1.0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, ".currency-input {\n  width: 100%;\n  height: 100%;\n  //border: 1px solid #0a0ed6;\n  background-image: linear-gradient(to bottom, #8efff9, #7fe2dd);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.currency-input__input {\n  width: 60%;\n  /*background-color: red;*/\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n\n\n}\n.currency-input__input input {\n  width: 90%;\n  height: 40px;\n  border: transparent;\n  border: 2px solid #34d955;\n  border-radius: 20px;\n  font-size: 25px;\n  color: #3cb0fd;\n  text-align: center;\n}\n.currency-input__input input::-moz-selection {\n  background-color: #ffdd2d;\n}\n.currency-input__input input::selection {\n  background-color: #ffdd2d;\n}\ninput:focus {\n  outline: none;\n}\n.currency-input__dropdown {\n  width: 30%;\n  height: 100%;\n  min-width: 96px;\n  /*background-color: blue;*/\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.currency-input__delete-btn {\n  width: 10%;\n  min-width: 32px;\n  //background-color: blue;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  opacity: 0.2;\n}\n.currency-input__delete-btn:hover {\n  opacity: 1;\n}\n.delete-btn-hidden {\n  display: none !important;\n}\napp-currency-dropdown {\n  width: 90%;\n  /*background-color: purple;*/\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, "app-currency-input {\n  width: 100%;\n  height: 60px;\n  /*background-color: yellow;*/\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.currency-btn {\n  background: #34d955;\n  background-image: linear-gradient(to bottom, #34d955, #7bb82b);\n  border-radius: 20px;\n  font-family: Arial;\n  color: #ffffff;\n  font-size: 20px;\n  margin: 20px auto;\n  outline: none;\n  padding: 10px 15px 10px 15px;\n  text-decoration: none;\n  border-color: transparent;\n}\n.spinner {\n  width: 100px;\n  margin-left: auto;\n  margin-right: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Конвертер валют</h2>\n  <app-currency></app-currency>\n</div>\n\n"

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\" (click)=\"onItemClick($event.target)\">\n  <div class=\"dropdown-btn\">{{currentCurrency?.walletName || \"...\"}}</div>\n  <ul class=\"dropdown-content\">\n    <li\n    *ngFor=\"let wallet of currency\"\n    class=\"dropdown-content__item\"\n    [attr.data-wallet]=\"wallet.walletName\"\n    >{{wallet?.walletLocaleName}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 210:
/***/ (function(module, exports) {

module.exports = "<div class=\"currency-info\">\n  <div class=\"currency-info__header\">\n    <p>\n      Курсы валют по отношению к\n    </p>\n      <app-currency-dropdown\n        [currency]=\"currency\"\n        [currentCurrency]=\"currentCurrency\"\n        (currencyChange)=\"onCurrencyChange($event)\"\n      ></app-currency-dropdown>\n  </div>\n  <div class=\"currency-info__list\">\n    <div class=\"currency-type-toggler\">\n      Покупка\n      <label class=\"switch\">\n        <input type=\"checkbox\" checked (change)=\"onChange($event)\">\n        <div class=\"slider round\"></div>\n      </label>\n      Продажа\n    </div>\n    <ul class=\"currency-list\">\n      <li\n        class=\"currency-list__item\"\n        *ngFor=\"let rate of popularRates\"\n      >\n        <span class=\"currency-wallet\">{{rate?.base}}</span>\n        <span\n          class=\"currency\"\n          [class.targeted-currency]=\"!isSell()\"\n        >{{(rate?.rates * 0.99).toFixed(2)}}\n        </span>\n        /\n        <span\n          class=\"currency\"\n          [class.targeted-currency]=\"isSell()\"\n        >{{(rate.rates * 1.01 ).toFixed(2)}}\n        </span>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ 211:
/***/ (function(module, exports) {

module.exports = "<div class=\"currency-input\">\n  <div class=\"currency-input__input\">\n    <input\n      type=\"text\"\n      [value]=\"format(currentConverter?.walletValue, SEPARATOR)\"\n      [formControl]=\"inputValueControl\"\n    >\n  </div>\n  <div class=\"currency-input__dropdown\">\n    <app-currency-dropdown\n      [currentCurrency]=\"currentConverter\"\n      [currency]=\"currency\"\n      (currencyChange)=\"onWalletChange($event)\"\n    ></app-currency-dropdown>\n  </div>\n  <div\n    class=\"currency-input__delete-btn\"\n       [class.delete-btn-hidden]=\"!canDelete\"\n    (click)=\"deleteInput($event)\"\n  >❌</div>\n</div>\n"

/***/ }),

/***/ 212:
/***/ (function(module, exports) {

module.exports = "<app-currency-input\n  *ngFor=\"let converter of converters\"\n  [currentConverter]=\"converter\"\n  [currency]=\"currency\"\n  [canDelete]=\"converters.length > 2\"\n  (currencyInputChange)=\"onCurrencyInputChange($event)\"\n  (converterDelete)=\"onConverterDelete($event)\"\n></app-currency-input>\n<button class=\"currency-btn\" (click)=\"addConverter()\">Добавить конвертер</button>\n\n<app-currency-info\n  [currency]=\"currency\"\n  [popularRates]=\"popularRates\"\n  (walletChange)=\"updatePopularRates($event)\"\n></app-currency-info>\n"

/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(136);


/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_combineLatest__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_startWith__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_util__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_util__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BASE_URL = 'https://api.fixer.io';
var WALLETS_URL = 'https://currencywidget.firebaseio.com/';
var baseWallet = 'RUB';








var CurrencyService = (function () {
    function CurrencyService(http) {
        this.http = http;
        this.cachedRates = [];
        this.converters = [{
                id: 1,
                walletName: 'RUB',
                walletValue: 0
            }, {
                id: 2,
                walletName: 'USD',
                walletValue: 0
            }];
    }
    CurrencyService.prototype.getConverters = function () {
        return this.converters;
    };
    CurrencyService.prototype.loadActualRates = function (updateInterval) {
        var _this = this;
        var actualRates$ = this.http.get(BASE_URL + "/latest?base=" + baseWallet)
            .map(function (res) {
            return res.json();
        })
            .map(function (data) {
            return _this.convertToRatesObject(data);
        })
            .do(function (rates) {
            _this.rates = rates;
        })
            .catch(function (err) {
            console.warn('--- failed loading rates', err);
            return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].empty();
        });
        return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].interval(updateInterval).startWith(0).switchMap(function () {
            return actualRates$;
        });
    };
    CurrencyService.prototype.loadPopularWallets = function () {
        var _this = this;
        return this.http.get(WALLETS_URL + "popular.json")
            .map(function (res) {
            return res.json();
        })
            .map(function (data) {
            return Object.keys(data)
                .map(function (key) {
                return Object.assign({}, { key: key }, data[key]);
            });
        })
            .do(function (popularWallets) {
            _this.popularWallets = popularWallets;
        })
            .catch(function (err) {
            console.warn('--- failed loading popular wallets', err);
            return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].empty();
        });
    };
    CurrencyService.prototype.loadWalletsLocalization = function () {
        var _this = this;
        return this.http.get(WALLETS_URL + "currency.json")
            .map(function (res) {
            return res.json();
        })
            .map(function (data) {
            return Object.keys(data)
                .map(function (key) {
                return Object.assign({}, { walletName: key }, { walletLocaleName: data[key] });
            });
        })
            .map(function (wallets) {
            return wallets.sort(_this.compareWalletNames);
        })
            .catch(function (err) {
            console.warn('--- failed loading localization', err);
            return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].empty();
        });
    };
    CurrencyService.prototype.compareWalletNames = function (name1, name2) {
        if (name1.walletLocaleName < name2.walletLocaleName) {
            return -1;
        }
        if (name1.walletLocaleName > name2.walletLocaleName) {
            return 1;
        }
        return 0;
    };
    CurrencyService.prototype.getCurrencyRates = function (myWallet) {
        var _this = this;
        if (this.cachedRates) {
            var currency = this.cachedRates.find(function (item) {
                return item.base === myWallet;
            });
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_util__["isUndefined"])(currency)) {
                console.log('used cached values');
                return currency.rates;
            }
        }
        var CurrencyRatesRequest$ = __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].of(this.popularWallets)
            .switchMap(function (wallets) {
            var urls = wallets
                .filter(function (wallet) {
                return wallet.walletName !== myWallet;
            })
                .map(function (wallet) {
                return BASE_URL + "/latest?base=" + wallet.walletName + "&symbols=" + myWallet;
            });
            var requests = urls.map(function (url) {
                return _this.http.get(url)
                    .map(function (res) {
                    return res.json();
                });
            });
            return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].combineLatest(requests);
        })
            .do(function (rates) {
            var muteRates = Object.keys(rates)
                .map(function (key) {
                return Object.assign(rates[key], { rates: rates[key].rates[myWallet] });
            });
            _this.cachedRates.push(Object.assign({}, { base: myWallet }, { rates: rates }));
        });
        return CurrencyRatesRequest$;
    };
    CurrencyService.prototype.updateConverters = function (value, wallet) {
        var _this = this;
        if (!this.converters) {
            this.converters = this.getConverters();
        }
        this.converters
            .map(function (converter) {
            converter.walletValue = _this.convertValue(value, wallet, converter.walletName);
        });
        this.saveConverters();
        return this.converters;
    };
    CurrencyService.prototype.addConverter = function () {
        var converter = {
            id: Math.random() * 1000,
            walletName: undefined,
            walletValue: 0
        };
        this.converters.push(converter);
    };
    CurrencyService.prototype.saveConverters = function () {
        var convertersWallets = [];
        this.converters.forEach(function (converter) {
            convertersWallets.push(converter.walletName);
        });
    };
    CurrencyService.prototype.convertValue = function (value, fromWallet, toWallet) {
        return parseFloat(((value / this.rates[fromWallet]) * this.rates[toWallet]).toFixed(2));
    };
    CurrencyService.prototype.convertToRatesObject = function (data) {
        var ratesObject = {};
        Object.assign(ratesObject, (_a = {}, _a[data.base] = 1, _a));
        for (var key in data.rates) {
            Object.assign(ratesObject, (_b = {}, _b[key] = data.rates[key], _b));
        }
        return ratesObject;
        var _a, _b;
    };
    CurrencyService.prototype.convertToCurrencyArray = function (rates) {
        return Object.keys(rates).map(function (key) {
            return { walletName: key };
        });
    };
    CurrencyService.prototype.getCurrentCurrency = function () {
        var _this = this;
        return this.http.get(BASE_URL + "/latest?base=" + baseWallet)
            .map(function (res) {
            return res.json();
        })
            .map(function (data) {
            _this.rates = _this.convertToRatesObject(data);
            return _this.rates;
        })
            .map(function (rates) {
            _this.currency = _this.convertToCurrencyArray(rates);
            console.log(_this.currency);
            return _this.currency;
        });
    };
    CurrencyService.prototype.getCurrencyRatesPromise = function (myWallet) {
        return fetch(WALLETS_URL + "popular.json")
            .then(function (res) {
            return res.json();
        })
            .then(function (data) {
            return Object.keys(data)
                .map(function (key) { return Object.assign({}, { key: key }, data[key]); });
        })
            .then(function (wallets) {
            console.log(wallets);
            return wallets
                .filter(function (wallet) {
                return wallet.walletName !== myWallet;
            })
                .map(function (wallet) {
                return BASE_URL + "/latest?base=" + wallet.walletName + "&symbols=" + myWallet;
            });
        })
            .then(function (urls) {
            return urls.map(function (url) {
                return fetch(url)
                    .then(function (res) { return res.json(); });
            });
        })
            .then(function (promises) {
            return Promise.all(promises);
        })
            .then(function (data) {
            return Object.keys(data)
                .map(function (key) {
                return Object.assign(data[key], { rates: data[key].rates[myWallet] });
            });
        })
            .catch(function (err) {
            console.log('--- oops', err.message);
            throw err;
        });
    };
    CurrencyService.prototype.deleteConverter = function (converterToDelete) {
        this.converters = this.converters
            .filter(function (converter) {
            return converter.id !== converterToDelete.id;
        });
    };
    CurrencyService.prototype.randomInteger = function (min, max) {
        return Math.round(min - 0.5 + Math.random() * (max - min + 1));
    };
    return CurrencyService;
}());
CurrencyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CurrencyService);

var _a;
//# sourceMappingURL=currency.service.js.map

/***/ })

},[480]);
//# sourceMappingURL=main.bundle.js.map