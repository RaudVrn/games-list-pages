(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/zaytsevsergey/Documents/zaytsev/my/Egamings/test-app/src/main.ts */"zUnb");


/***/ }),

/***/ "4Uzv":
/*!**********************************!*\
  !*** ./src/app/router/states.ts ***!
  \**********************************/
/*! exports provided: STATES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATES", function() { return STATES; });
/* harmony import */ var _games_list_games_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../games-list/games-list.component */ "CTdV");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/game.component */ "jBAD");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../about/about.component */ "84zG");
/* harmony import */ var _services_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/game */ "TB41");
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uirouter/core */ "iB+3");





const aboutState = { name: 'about', url: '/about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] };
const gamesListState = {
    name: 'gamesList',
    url: '/games',
    component: _games_list_games_list_component__WEBPACK_IMPORTED_MODULE_0__["GamesListComponent"],
    resolve: [
        {
            token: 'gamesList',
            deps: [_services_game__WEBPACK_IMPORTED_MODULE_3__["GameService"]],
            resolveFn: (gameService) => gameService.getAllGames()
        },
        {
            token: 'gamesFilters',
            deps: [_services_game__WEBPACK_IMPORTED_MODULE_3__["GameService"]],
            resolveFn: (gameService) => gameService.getFilters()
        },
    ]
};
const gameState = {
    name: 'game',
    url: '/games/:id',
    component: _game_game_component__WEBPACK_IMPORTED_MODULE_1__["GameComponent"],
    resolve: [
        {
            token: 'game',
            deps: [_uirouter_core__WEBPACK_IMPORTED_MODULE_4__["Transition"], _services_game__WEBPACK_IMPORTED_MODULE_3__["GameService"]],
            resolveFn: (trans, gameService) => gameService.getGame(trans.params().id)
        }
    ]
};
const STATES = [
    gamesListState,
    gameState,
    aboutState,
];


/***/ }),

/***/ "7tHx":
/*!**********************************!*\
  !*** ./src/app/router/config.ts ***!
  \**********************************/
/*! exports provided: uiRouterConfigFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiRouterConfigFn", function() { return uiRouterConfigFn; });
/* harmony import */ var _services_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/game */ "TB41");

/** UIRouter Config  */
function uiRouterConfigFn(router, injector) {
    const gameService = injector.get(_services_game__WEBPACK_IMPORTED_MODULE_0__["GameService"]);
    // If the browser URL doesn't matches any state when the router starts,
    // go to the `hello` state by default
    router.urlService.rules.initial({ state: 'hello' });
}


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 2, vars: 0, template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CTdV":
/*!****************************************************!*\
  !*** ./src/app/games-list/games-list.component.ts ***!
  \****************************************************/
/*! exports provided: GamesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesListComponent", function() { return GamesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _games_filter_games_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../games-filter/games-filter.component */ "agYa");
/* harmony import */ var _game_search_game_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game-search/game-search.component */ "XjGy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uirouter/angular */ "0loS");






const _c0 = function (a0) { return { "games-list__item--active": a0 }; };
const _c1 = function (a0) { return { id: a0 }; };
function GamesListComponent_div_28_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GamesListComponent_div_28_li_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const game_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.toggleFavorites(game_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "use", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r2.inFavorites(game_r4.ID)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", game_r4.ImageFullPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", game_r4.Name.en + " photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("uiParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, game_r4.ID));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", game_r4.Name.en, " ");
} }
function GamesListComponent_div_28_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GamesListComponent_div_28_li_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const index_r8 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.handleChangePage(index_r8 + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](index_r8 + 1);
} }
const _c2 = function () { return []; };
function GamesListComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GamesListComponent_div_28_li_2_Template, 7, 9, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GamesListComponent_div_28_li_4_Template, 3, 1, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.paginateGames());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c2).constructor(ctx_r0.pages()));
} }
const _c3 = function (a0) { return { "games-list__favorites-btn--active": a0 }; };
function GamesListComponent_div_29_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GamesListComponent_div_29_li_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const game_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.toggleFavorites(game_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "use", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r12 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", game_r12.ImageFullPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", game_r12.Name.en + " photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("uiParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, game_r12.ID));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", game_r12.Name.en, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c3, ctx_r11.inFavorites(game_r12.ID)));
} }
function GamesListComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GamesListComponent_div_29_li_2_Template, 7, 9, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.searchResult);
} }
class GamesListComponent {
    constructor() {
        this.sortABC = true;
        this.perPage = 50;
        this.page = 1;
        this.filters = [];
        this.favoritesList = [];
        this.searchResult = [];
    }
    static localFavorites() {
        return localStorage.getItem('favorites');
    }
    favorites() {
        this.favoritesList = JSON.parse(GamesListComponent.localFavorites());
        return this.favoritesList;
    }
    inFavorites(gameID) {
        return this.favoritesList.map((game) => game.ID).includes(gameID);
    }
    games() {
        return this.filteredList(this.sortedList());
    }
    paginateGames() {
        return this.games()
            .filter((item, index) => {
            return this.page > 1
                ? index > this.perPage * (this.page - 1) && index < this.perPage * this.page
                : index < this.perPage * this.page;
        });
    }
    filteredList(games) {
        return this.filters.length
            ? games.filter(({ MerchantID }) => this.filters.includes(MerchantID))
            : games;
    }
    sortedList() {
        return [
            ...this.favorites(),
            ...this.gamesList.sort(({ Name: { en: nameA }, idA }, { Name: { en: nameB } }) => {
                return this.sortABC
                    ? nameA.localeCompare(nameB, 'en')
                    : nameB.localeCompare(nameA, 'en');
            })
        ];
    }
    pages() {
        return Math.round(this.games().length / this.perPage);
    }
    toggleSort() {
        this.page = 1;
        this.sortABC = !this.sortABC;
    }
    handleChangePerPage(value) {
        this.perPage = value === 'all' ? this.gamesList.length : Number(value);
        this.page = 1;
    }
    handleChangePage(page) {
        this.page = page;
    }
    toggleFavorites(game) {
        let localFav;
        let localFavGameIndex;
        if (!GamesListComponent.localFavorites()) {
            localStorage.setItem('favorites', '[]');
        }
        localFav = this.favorites();
        localFavGameIndex = localFav
            .filter(i => i)
            .findIndex((fav) => fav.ID === game.ID);
        if (localFavGameIndex !== -1) {
            localFav.splice(localFavGameIndex, 1);
        }
        else {
            localFav.push(game);
        }
        localStorage.setItem('favorites', JSON.stringify(localFav));
    }
    handleChangeFilters(filters) {
        this.filters = filters;
        this.page = 1;
    }
    mappedFilters() {
        return this.filters.map(filterID => this.gamesFilters[filterID].Name);
    }
    handleSearch(term) {
        if (term) {
            this.searchResult = this.gamesList
                .filter((game) => game.Name.en.toLowerCase().includes(term.toLowerCase()));
        }
        else if (this.searchResult.length) {
            this.searchResult = [];
        }
    }
    ngOnInit() {
        const localFav = localStorage.getItem('favorites');
        if (!localFav) {
            localStorage.setItem('favorites', '[]');
        }
    }
}
GamesListComponent.ɵfac = function GamesListComponent_Factory(t) { return new (t || GamesListComponent)(); };
GamesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GamesListComponent, selectors: [["app-games-list"]], inputs: { gamesList: "gamesList", gamesFilters: "gamesFilters" }, decls: 30, vars: 6, consts: [[1, "games-list"], [1, "games-list__filter"], [3, "gamesFilters", "filterChanged"], [1, "games-list__container"], ["hidden", ""], [1, "games-list__search-wrap"], [3, "search"], [3, "click"], ["id", "perPage", 3, "change"], ["value", "20"], ["value", "50", "selected", ""], ["value", "100"], [4, "ngIf"], [1, "games-list__list"], ["class", "games-list__item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "paginate"], [4, "ngFor", "ngForOf"], [1, "games-list__item", 3, "ngClass"], ["width", "280", "height", "280", 1, "games-list__img", 3, "src", "alt"], ["uiSref", "game", 1, "games-list__link", 3, "uiParams"], [1, "games-list__favorites-btn", 3, "click"], ["width", "21", "height", "21", 1, "games-list__favorites-icon"], [0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xlink", "href", "assets/img/svg/sprite.svg#star"], [1, "paginate__btn", 3, "click"], ["class", "games-list__item", 4, "ngFor", "ngForOf"], [1, "games-list__item"], [1, "games-list__favorites-btn", 3, "ngClass", "click"]], template: function GamesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-games-filter", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filterChanged", function GamesListComponent_Template_app_games_filter_filterChanged_2_listener($event) { return ctx.handleChangeFilters($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Games list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Filtered games: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Filtered by: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-game-search", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("search", function GamesListComponent_Template_app_game_search_search_15_listener($event) { return ctx.handleSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GamesListComponent_Template_button_click_17_listener() { return ctx.toggleSort(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Toggle sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Games per page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function GamesListComponent_Template_select_change_21_listener($event) { return ctx.handleChangePerPage($event.currentTarget.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, GamesListComponent_div_28_Template, 5, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, GamesListComponent_div_29_Template, 3, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gamesFilters", ctx.gamesFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.games().length - ctx.favoritesList.length, "/", ctx.gamesList.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.mappedFilters());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.searchResult.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchResult.length);
    } }, directives: [_games_filter_games_filter_component__WEBPACK_IMPORTED_MODULE_1__["GamesFilterComponent"], _game_search_game_search_component__WEBPACK_IMPORTED_MODULE_2__["GameSearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _uirouter_angular__WEBPACK_IMPORTED_MODULE_4__["AnchorUISref"], _uirouter_angular__WEBPACK_IMPORTED_MODULE_4__["UISref"]], styles: [".games-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  grid-gap: 20px;\n}\n.games-list__filter[_ngcontent-%COMP%], .games-list__container[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid white;\n  border-radius: 20px;\n}\n.games-list__list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 10px;\n  padding: 0 0 0 20px;\n  list-style: none;\n}\n.games-list__item[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 280px;\n  height: 280px;\n  margin-right: 20px;\n  margin-bottom: 20px;\n  border: 1px solid white;\n  border-radius: 20px;\n}\n.games-list__item[_ngcontent-%COMP%]:hover   .games-list__img[_ngcontent-%COMP%], .games-list__item[_ngcontent-%COMP%]:focus   .games-list__img[_ngcontent-%COMP%] {\n  opacity: 0.4;\n  z-index: -1;\n}\n.games-list__item--active[_ngcontent-%COMP%] {\n  border: 3px solid orange;\n}\n.games-list__item--active[_ngcontent-%COMP%]   .games-list__favorites-icon[_ngcontent-%COMP%] {\n  fill: orange;\n}\n.games-list__img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 20px;\n  transition: opacity ease 0.3s;\n}\n.games-list__link[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.games-list__favorites-btn[_ngcontent-%COMP%] {\n  padding: 0;\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n.games-list__favorites-btn[_ngcontent-%COMP%]:hover, .games-list__favorites-btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.games-list__favorites-btn[_ngcontent-%COMP%]:hover   .games-list__favorites-icon[_ngcontent-%COMP%], .games-list__favorites-btn[_ngcontent-%COMP%]:focus   .games-list__favorites-icon[_ngcontent-%COMP%] {\n  fill: orange;\n}\n.games-list__favorites-icon[_ngcontent-%COMP%] {\n  width: 21px;\n  height: 21px;\n  fill: gray;\n}\n.games-list__search-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.games-list[_ngcontent-%COMP%]   .paginate[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n}\n.games-list[_ngcontent-%COMP%]   .paginate__btn[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 35px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMtbGlzdC9nYW1lcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQ0U7RUFFRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFKO0FBR0U7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQURKO0FBSUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRko7QUFNTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBSlI7QUFRSTtFQUNFLHdCQUFBO0FBTk47QUFRTTtFQUNFLFlBQUE7QUFOUjtBQVdFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFUSjtBQVlFO0VBQ0UsbUJBQUE7QUFWSjtBQWFFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFYSjtBQWFJO0VBRUUsYUFBQTtBQVpOO0FBY007RUFDRSxZQUFBO0FBWlI7QUFpQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFmSjtBQWtCRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQWhCSjtBQW1CRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFqQko7QUFtQkk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFqQk4iLCJmaWxlIjoic3JjL2FwcC9nYW1lcy1saXN0L2dhbWVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FtZXMtbGlzdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xuICBncmlkLWdhcDogMjBweDtcblxuICAmX19maWx0ZXIsXG4gICZfX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB9XG5cbiAgJl9fbGlzdCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgIHBhZGRpbmc6IDAgMCAwIDIwcHg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuXG4gICZfX2l0ZW0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMjgwcHg7XG4gICAgaGVpZ2h0OiAyODBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIC5nYW1lcy1saXN0X19pbWcge1xuICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgfVxuICAgIH1cblxuICAgICYtLWFjdGl2ZSB7XG4gICAgICBib3JkZXI6IDNweCBzb2xpZCBvcmFuZ2U7XG5cbiAgICAgIC5nYW1lcy1saXN0X19mYXZvcml0ZXMtaWNvbiB7XG4gICAgICAgIGZpbGw6IG9yYW5nZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmX19pbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZSAwLjNzO1xuICB9XG5cbiAgJl9fbGluayB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gICZfX2Zhdm9yaXRlcy1idG4ge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG5cbiAgICAgIC5nYW1lcy1saXN0X19mYXZvcml0ZXMtaWNvbiB7XG4gICAgICAgIGZpbGw6IG9yYW5nZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmX19mYXZvcml0ZXMtaWNvbiB7XG4gICAgd2lkdGg6IDIxcHg7XG4gICAgaGVpZ2h0OiAyMXB4O1xuICAgIGZpbGw6IGdyYXk7XG4gIH1cblxuICAmX19zZWFyY2gtd3JhcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAucGFnaW5hdGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgICAmX19idG4ge1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgfVxufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-games-list',
                templateUrl: './games-list.component.html',
                styleUrls: ['./games-list.component.scss']
            }]
    }], null, { gamesList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gamesFilters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/angular */ "0loS");



class AppComponent {
    constructor() {
        this.title = 'test-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], inputs: { gamesList: "gamesList" }, decls: 7, vars: 0, consts: [[1, "main"], ["uiSref", "gamesList", "uiSrefActive", "active"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Games list test-app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Games List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ui-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_uirouter_angular__WEBPACK_IMPORTED_MODULE_1__["AnchorUISref"], _uirouter_angular__WEBPACK_IMPORTED_MODULE_1__["UISref"], _uirouter_angular__WEBPACK_IMPORTED_MODULE_1__["UISrefActive"], _uirouter_angular__WEBPACK_IMPORTED_MODULE_1__["UISrefStatus"], _uirouter_angular__WEBPACK_IMPORTED_MODULE_1__["UIView"]], styles: [".main[_ngcontent-%COMP%] {\n  max-width: 1170px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gIG1heC13aWR0aDogMTE3MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, { gamesList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "TB41":
/*!**********************************!*\
  !*** ./src/app/services/game.ts ***!
  \**********************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class GameService {
    constructor(http) {
        this.http = http;
        console.log('PeopleService constructor');
    }
    getAllGames() {
        return this.http.get('../../assets/mocks/games.json').toPromise()
            .then((data) => data.games);
    }
    getFilters() {
        return this.http.get('../../assets/mocks/games.json').toPromise()
            .then((data) => data.merchants);
    }
    getGame(id) {
        const findGame = ({ ID }) => ID === id;
        return this.getAllGames().then(games => games.find(findGame));
    }
}
GameService.ɵfac = function GameService_Factory(t) { return new (t || GameService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GameService, factory: GameService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
            }] }]; }, null); })();


/***/ }),

/***/ "XjGy":
/*!******************************************************!*\
  !*** ./src/app/game-search/game-search.component.ts ***!
  \******************************************************/
/*! exports provided: GameSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameSearchComponent", function() { return GameSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GameSearchComponent {
    constructor() {
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    handleChange(term) {
        this.search.emit(term.trim());
    }
    ngOnInit() {
    }
}
GameSearchComponent.ɵfac = function GameSearchComponent_Factory(t) { return new (t || GameSearchComponent)(); };
GameSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameSearchComponent, selectors: [["app-game-search"]], outputs: { search: "search" }, decls: 4, vars: 0, consts: [[1, "games-search"], ["type", "text", "placeholder", "Enter search phrase", 1, "games-search__input", 3, "change"], [1, "games-search__search-btn", 3, "click"]], template: function GameSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function GameSearchComponent_Template_input_change_1_listener($event) { return ctx.handleChange($event.currentTarget.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameSearchComponent_Template_button_click_2_listener($event) { return ctx.handleChange($event.target.previousElementSibling.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".games-search[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n.games-search__input[_ngcontent-%COMP%] {\n  flex-grow: 2;\n}\n.games-search__search-btn[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1zZWFyY2gvZ2FtZS1zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0FBQ0o7QUFFRTtFQUNFLFlBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2dhbWUtc2VhcmNoL2dhbWUtc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbWVzLXNlYXJjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuXG4gICZfX2lucHV0IHtcbiAgICBmbGV4LWdyb3c6IDI7XG4gIH1cblxuICAmX19zZWFyY2gtYnRuIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-search',
                templateUrl: './game-search.component.html',
                styleUrls: ['./game-search.component.scss']
            }]
    }], null, { search: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uirouter/angular */ "0loS");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _games_list_games_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./games-list/games-list.component */ "CTdV");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game/game.component */ "jBAD");
/* harmony import */ var _games_filter_games_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./games-filter/games-filter.component */ "agYa");
/* harmony import */ var _router_states__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./router/states */ "4Uzv");
/* harmony import */ var _router_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./router/config */ "7tHx");
/* harmony import */ var _services_game__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/game */ "TB41");
/* harmony import */ var _game_search_game_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./game-search/game-search.component */ "XjGy");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.module */ "ZAI4");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _services_game__WEBPACK_IMPORTED_MODULE_11__["GameService"], useClass: _services_game__WEBPACK_IMPORTED_MODULE_11__["GameService"] },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _uirouter_angular__WEBPACK_IMPORTED_MODULE_2__["UIRouterModule"].forRoot({ states: _router_states__WEBPACK_IMPORTED_MODULE_9__["STATES"], useHash: true, config: _router_config__WEBPACK_IMPORTED_MODULE_10__["uiRouterConfigFn"], })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _games_list_games_list_component__WEBPACK_IMPORTED_MODULE_6__["GamesListComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
        _game_game_component__WEBPACK_IMPORTED_MODULE_7__["GameComponent"],
        _games_filter_games_filter_component__WEBPACK_IMPORTED_MODULE_8__["GamesFilterComponent"],
        _game_search_game_search_component__WEBPACK_IMPORTED_MODULE_12__["GameSearchComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _uirouter_angular__WEBPACK_IMPORTED_MODULE_2__["UIRouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _games_list_games_list_component__WEBPACK_IMPORTED_MODULE_6__["GamesListComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                    _game_game_component__WEBPACK_IMPORTED_MODULE_7__["GameComponent"],
                    _games_filter_games_filter_component__WEBPACK_IMPORTED_MODULE_8__["GamesFilterComponent"],
                    _game_search_game_search_component__WEBPACK_IMPORTED_MODULE_12__["GameSearchComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _uirouter_angular__WEBPACK_IMPORTED_MODULE_2__["UIRouterModule"].forRoot({ states: _router_states__WEBPACK_IMPORTED_MODULE_9__["STATES"], useHash: true, config: _router_config__WEBPACK_IMPORTED_MODULE_10__["uiRouterConfigFn"], })
                ],
                providers: [
                    { provide: _services_game__WEBPACK_IMPORTED_MODULE_11__["GameService"], useClass: _services_game__WEBPACK_IMPORTED_MODULE_11__["GameService"] },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_module__WEBPACK_IMPORTED_MODULE_13__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "agYa":
/*!********************************************************!*\
  !*** ./src/app/games-filter/games-filter.component.ts ***!
  \********************************************************/
/*! exports provided: GamesFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesFilterComponent", function() { return GamesFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { "active": a0 }; };
function GamesFilterComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function GamesFilterComponent_li_1_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const filter_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.handleChangeFilter(filter_r1.ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filter_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r0.active(filter_r1.ID)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", filter_r1.Name, " ");
} }
class GamesFilterComponent {
    constructor() {
        this.filterChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filters = {};
        this.activeFilters = [];
    }
    handleChangeFilter(id) {
        const index = this.activeFilters.findIndex(filterId => filterId === id);
        if (index !== -1) {
            this.activeFilters.splice(index, 1);
        }
        else {
            this.activeFilters.push(id);
        }
        this.filterChanged.emit(this.activeFilters);
    }
    active(id) {
        return this.activeFilters.includes(id);
    }
    ngOnInit() {
        this.filters = Object.values(this.gamesFilters);
    }
}
GamesFilterComponent.ɵfac = function GamesFilterComponent_Factory(t) { return new (t || GamesFilterComponent)(); };
GamesFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GamesFilterComponent, selectors: [["app-games-filter"]], inputs: { gamesFilters: "gamesFilters" }, outputs: { filterChanged: "filterChanged" }, decls: 2, vars: 1, consts: [[1, "games-filter__list"], ["class", "games-filter__item", 4, "ngFor", "ngForOf"], [1, "games-filter__item"], [1, "games-filter__label", 3, "ngClass"], ["type", "checkbox", 1, "games-filter__input", 3, "change"]], template: function GamesFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GamesFilterComponent_li_1_Template, 4, 4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filters);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".games-filters__list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  padding-left: 0;\n}\n.games-filters__item[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n.games-filters__label[_ngcontent-%COMP%] {\n  display: block;\n  padding: 10px;\n  border: 1px solid #000;\n  border-radius: 15px;\n  cursor: pointer;\n}\n.games-filters__label[_ngcontent-%COMP%]:hover, .games-filters__label[_ngcontent-%COMP%]:focus {\n  background-color: deepskyblue;\n}\n.games-filters__label.active[_ngcontent-%COMP%] {\n  background-color: lightskyblue;\n}\n.games-filters__input[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  border: 0;\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMtZmlsdGVyL2dhbWVzLWZpbHRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRko7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFISjtBQU1FO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUpKO0FBTUk7RUFFRSw2QkFBQTtBQUxOO0FBUUk7RUFDRSw4QkFBQTtBQU5OO0FBVUU7RUMvQkEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUR3QkYiLCJmaWxlIjoic3JjL2FwcC9nYW1lcy1maWx0ZXIvZ2FtZXMtZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9zY3NzL21peGluc1wiO1xuXG4uZ2FtZXMtZmlsdGVycyB7XG4gICZfX2xpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG5cbiAgJl9faXRlbSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICAmX19sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRlZXBza3libHVlO1xuICAgIH1cblxuICAgICYuYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcbiAgICB9XG4gIH1cblxuICAmX19pbnB1dCB7XG4gICAgQGluY2x1ZGUgdmlzdWFsbHktaGlkZGVuKCk7XG4gIH1cbn1cbiIsIkBtaXhpbiB2aXN1YWxseS1oaWRkZW4oKSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogLTFweDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamesFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-games-filter',
                templateUrl: './games-filter.component.html',
                styleUrls: ['./games-filter.component.scss']
            }]
    }], null, { gamesFilters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], filterChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "jBAD":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/angular */ "0loS");



class GameComponent {
    constructor() { }
    ngOnInit() {
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(); };
GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["app-game"]], inputs: { game: "game" }, decls: 10, vars: 4, consts: [["uiSref", "gamesList"], ["width", "300", "height", "300", 1, "game__img", 3, "src", "alt"], ["target", "_blank", 3, "href"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back to games list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "game works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Play Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.game.Name.en);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.game.ImageFullPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.game.Name.en + " photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://www.rost.bet/en/games/play/" + ctx.game.Url + "?demo=true", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_uirouter_angular__WEBPACK_IMPORTED_MODULE_1__["AnchorUISref"], _uirouter_angular__WEBPACK_IMPORTED_MODULE_1__["UISref"]], styles: [".game__img[_ngcontent-%COMP%] {\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbWVfX2ltZyB7XG4gIHdpZHRoOiAzMDBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game',
                templateUrl: './game.component.html',
                styleUrls: ['./game.component.scss']
            }]
    }], function () { return []; }, { game: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map