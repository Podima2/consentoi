/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/next@15.3.3_react-dom@19.1.0_react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fmaharajababu%2FDesktop%2Fconsentir%2Fmy-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmaharajababu%2FDesktop%2Fconsentir%2Fmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.3.3_react-dom@19.1.0_react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fmaharajababu%2FDesktop%2Fconsentir%2Fmy-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmaharajababu%2FDesktop%2Fconsentir%2Fmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@15.3.3_react-dom@19.1.0_react@19.1.0/node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/.pnpm/next@15.3.3_react-dom@19.1.0_react@19.1.0/node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@15.3.3_react-dom@19.1.0_react@19.1.0/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_maharajababu_Desktop_consentir_my_app_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Users/maharajababu/Desktop/consentir/my-app/src/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _Users_maharajababu_Desktop_consentir_my_app_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNS4zLjNfcmVhY3QtZG9tQDE5LjEuMF9yZWFjdEAxOS4xLjAvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1hcHAtbG9hZGVyL2luZGV4LmpzP25hbWU9YXBwJTJGYXBpJTJGYXV0aCUyRiU1Qi4uLm5leHRhdXRoJTVEJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZS50cyZhcHBEaXI9JTJGVXNlcnMlMkZtYWhhcmFqYWJhYnUlMkZEZXNrdG9wJTJGY29uc2VudGlyJTJGbXktYXBwJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRm1haGFyYWphYmFidSUyRkRlc2t0b3AlMkZjb25zZW50aXIlMkZteS1hcHAmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ29DO0FBQ2pIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvbWFoYXJhamFiYWJ1L0Rlc2t0b3AvY29uc2VudGlyL215LWFwcC9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL21haGFyYWphYmFidS9EZXNrdG9wL2NvbnNlbnRpci9teS1hcHAvc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@15.3.3_react-dom@19.1.0_react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fmaharajababu%2FDesktop%2Fconsentir%2Fmy-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmaharajababu%2FDesktop%2Fconsentir%2Fmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.3.3_react-dom@19.1.0_react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.3.3_react-dom@19.1.0_react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \*******************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/.pnpm/next-auth@4.24.11_next@15.3.3_react-dom@19.1.0_react@19.1.0__react@19.1.0__react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth */ \"(rsc)/./src/app/api/auth/auth.ts\");\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUM7QUFDSztBQUV0QyxNQUFNRSxVQUFVRixnREFBUUEsQ0FBQ0MsOENBQVdBO0FBRU8iLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWhhcmFqYWJhYnUvRGVza3RvcC9jb25zZW50aXIvbXktYXBwL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiLi4vYXV0aFwiO1xuXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJhdXRoT3B0aW9ucyIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/auth.ts":
/*!**********************************!*\
  !*** ./src/app/api/auth/auth.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _worldcoin_minikit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @worldcoin/minikit-js */ \"(rsc)/./node_modules/.pnpm/@worldcoin+minikit-js@1.9.4_@types+react@19.1.6_immer@10.0.2_react@19.1.0_typescript@5.8.3_viem@2.30.5_typescript@5.8.3_/node_modules/@worldcoin/minikit-js/build/index.js\");\n\nconst authOptions = {\n    providers: [\n        {\n            id: \"worldcoin-wallet\",\n            name: \"Worldcoin Wallet\",\n            type: \"credentials\",\n            credentials: {\n                message: {\n                    type: \"text\"\n                },\n                signature: {\n                    type: \"text\"\n                },\n                address: {\n                    type: \"text\"\n                },\n                nonce: {\n                    type: \"text\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.signature || !credentials?.message || !credentials?.address || !credentials?.nonce) {\n                    return null;\n                }\n                try {\n                    const validMessage = await (0,_worldcoin_minikit_js__WEBPACK_IMPORTED_MODULE_0__.verifySiweMessage)({\n                        status: \"success\",\n                        message: credentials.message,\n                        signature: credentials.signature,\n                        address: credentials.address,\n                        version: 1\n                    }, credentials.nonce);\n                    if (!validMessage.isValid || !validMessage.siweMessageData.address) {\n                        return null;\n                    }\n                    const userProfile = await _worldcoin_minikit_js__WEBPACK_IMPORTED_MODULE_0__.MiniKit.getUserByAddress(validMessage.siweMessageData.address);\n                    console.log({\n                        id: validMessage.siweMessageData.address.toLowerCase(),\n                        address: validMessage.siweMessageData.address.toLowerCase(),\n                        name: userProfile.username,\n                        image: userProfile.profilePictureUrl\n                    });\n                    return {\n                        id: validMessage.siweMessageData.address.toLowerCase(),\n                        address: validMessage.siweMessageData.address.toLowerCase(),\n                        name: userProfile.username,\n                        image: userProfile.profilePictureUrl\n                    };\n                } catch (e) {\n                    console.error(\"Error verifying message:\", e);\n                    return null;\n                }\n            }\n        }\n    ],\n    callbacks: {\n        redirect () {\n            return process.env.NEXT_PUBLIC_APP_URL;\n        },\n        async session ({ session, token }) {\n            if (token && session.user) {\n                session.user.address = token.sub;\n            }\n            return session;\n        },\n        async jwt ({ token }) {\n            return token;\n        }\n    },\n    pages: {\n        signIn: \"/\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBbUU7QUFHNUQsTUFBTUUsY0FBK0I7SUFDMUNDLFdBQVc7UUFDVDtZQUNFQyxJQUFJO1lBQ0pDLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxhQUFhO2dCQUNYQyxTQUFTO29CQUFFRixNQUFNO2dCQUFPO2dCQUN4QkcsV0FBVztvQkFBRUgsTUFBTTtnQkFBTztnQkFDMUJJLFNBQVM7b0JBQUVKLE1BQU07Z0JBQU87Z0JBQ3hCSyxPQUFPO29CQUFFTCxNQUFNO2dCQUFPO1lBQ3hCO1lBQ0EsTUFBTU0sV0FBVUwsV0FBVztnQkFDekIsSUFDRSxDQUFDQSxhQUFhRSxhQUNkLENBQUNGLGFBQWFDLFdBQ2QsQ0FBQ0QsYUFBYUcsV0FDZCxDQUFDSCxhQUFhSSxPQUNkO29CQUNBLE9BQU87Z0JBQ1Q7Z0JBQ0EsSUFBSTtvQkFDRixNQUFNRSxlQUFlLE1BQU1aLHdFQUFpQkEsQ0FDMUM7d0JBQ0VhLFFBQVE7d0JBQ1JOLFNBQVNELFlBQVlDLE9BQU87d0JBQzVCQyxXQUFXRixZQUFZRSxTQUFTO3dCQUNoQ0MsU0FBU0gsWUFBWUcsT0FBTzt3QkFDNUJLLFNBQVM7b0JBQ1gsR0FDQVIsWUFBWUksS0FBSztvQkFHbkIsSUFBSSxDQUFDRSxhQUFhRyxPQUFPLElBQUksQ0FBQ0gsYUFBYUksZUFBZSxDQUFDUCxPQUFPLEVBQUU7d0JBQ2xFLE9BQU87b0JBQ1Q7b0JBRUEsTUFBTVEsY0FBYyxNQUFNbEIsMERBQU9BLENBQUNtQixnQkFBZ0IsQ0FDaEROLGFBQWFJLGVBQWUsQ0FBQ1AsT0FBTztvQkFFdENVLFFBQVFDLEdBQUcsQ0FBQzt3QkFDVmpCLElBQUlTLGFBQWFJLGVBQWUsQ0FBQ1AsT0FBTyxDQUFDWSxXQUFXO3dCQUNwRFosU0FBU0csYUFBYUksZUFBZSxDQUFDUCxPQUFPLENBQUNZLFdBQVc7d0JBQ3pEakIsTUFBTWEsWUFBWUssUUFBUTt3QkFDMUJDLE9BQU9OLFlBQVlPLGlCQUFpQjtvQkFDdEM7b0JBQ0EsT0FBTzt3QkFDTHJCLElBQUlTLGFBQWFJLGVBQWUsQ0FBQ1AsT0FBTyxDQUFDWSxXQUFXO3dCQUNwRFosU0FBU0csYUFBYUksZUFBZSxDQUFDUCxPQUFPLENBQUNZLFdBQVc7d0JBQ3pEakIsTUFBTWEsWUFBWUssUUFBUTt3QkFDMUJDLE9BQU9OLFlBQVlPLGlCQUFpQjtvQkFDdEM7Z0JBQ0YsRUFBRSxPQUFPQyxHQUFHO29CQUNWTixRQUFRTyxLQUFLLENBQUMsNEJBQTRCRDtvQkFDMUMsT0FBTztnQkFDVDtZQUNGO1FBQ0Y7S0FDRDtJQUNERSxXQUFXO1FBQ1RDO1lBQ0UsT0FBT0MsUUFBUUMsR0FBRyxDQUFDQyxtQkFBbUI7UUFDeEM7UUFDQSxNQUFNQyxTQUFRLEVBQUVBLE9BQU8sRUFBRUMsS0FBSyxFQUFFO1lBQzlCLElBQUlBLFNBQVNELFFBQVFFLElBQUksRUFBRTtnQkFDekJGLFFBQVFFLElBQUksQ0FBQ3pCLE9BQU8sR0FBR3dCLE1BQU1FLEdBQUc7WUFDbEM7WUFDQSxPQUFPSDtRQUNUO1FBQ0EsTUFBTUksS0FBSSxFQUFFSCxLQUFLLEVBQUU7WUFDakIsT0FBT0E7UUFDVDtJQUNGO0lBQ0FJLE9BQU87UUFDTEMsUUFBUTtJQUNWO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsiL1VzZXJzL21haGFyYWphYmFidS9EZXNrdG9wL2NvbnNlbnRpci9teS1hcHAvc3JjL2FwcC9hcGkvYXV0aC9hdXRoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1pbmlLaXQsIHZlcmlmeVNpd2VNZXNzYWdlIH0gZnJvbSBcIkB3b3JsZGNvaW4vbWluaWtpdC1qc1wiO1xuaW1wb3J0IHR5cGUgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBpZDogXCJ3b3JsZGNvaW4td2FsbGV0XCIsXG4gICAgICBuYW1lOiBcIldvcmxkY29pbiBXYWxsZXRcIixcbiAgICAgIHR5cGU6IFwiY3JlZGVudGlhbHNcIixcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIG1lc3NhZ2U6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgc2lnbmF0dXJlOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgIGFkZHJlc3M6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgbm9uY2U6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgIH0sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICFjcmVkZW50aWFscz8uc2lnbmF0dXJlIHx8XG4gICAgICAgICAgIWNyZWRlbnRpYWxzPy5tZXNzYWdlIHx8XG4gICAgICAgICAgIWNyZWRlbnRpYWxzPy5hZGRyZXNzIHx8XG4gICAgICAgICAgIWNyZWRlbnRpYWxzPy5ub25jZVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHZhbGlkTWVzc2FnZSA9IGF3YWl0IHZlcmlmeVNpd2VNZXNzYWdlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0dXM6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICBtZXNzYWdlOiBjcmVkZW50aWFscy5tZXNzYWdlLFxuICAgICAgICAgICAgICBzaWduYXR1cmU6IGNyZWRlbnRpYWxzLnNpZ25hdHVyZSxcbiAgICAgICAgICAgICAgYWRkcmVzczogY3JlZGVudGlhbHMuYWRkcmVzcyxcbiAgICAgICAgICAgICAgdmVyc2lvbjogMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVkZW50aWFscy5ub25jZVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAoIXZhbGlkTWVzc2FnZS5pc1ZhbGlkIHx8ICF2YWxpZE1lc3NhZ2Uuc2l3ZU1lc3NhZ2VEYXRhLmFkZHJlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHVzZXJQcm9maWxlID0gYXdhaXQgTWluaUtpdC5nZXRVc2VyQnlBZGRyZXNzKFxuICAgICAgICAgICAgdmFsaWRNZXNzYWdlLnNpd2VNZXNzYWdlRGF0YS5hZGRyZXNzXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh7XG4gICAgICAgICAgICBpZDogdmFsaWRNZXNzYWdlLnNpd2VNZXNzYWdlRGF0YS5hZGRyZXNzLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICBhZGRyZXNzOiB2YWxpZE1lc3NhZ2Uuc2l3ZU1lc3NhZ2VEYXRhLmFkZHJlc3MudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgIG5hbWU6IHVzZXJQcm9maWxlLnVzZXJuYW1lLFxuICAgICAgICAgICAgaW1hZ2U6IHVzZXJQcm9maWxlLnByb2ZpbGVQaWN0dXJlVXJsLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdmFsaWRNZXNzYWdlLnNpd2VNZXNzYWdlRGF0YS5hZGRyZXNzLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICBhZGRyZXNzOiB2YWxpZE1lc3NhZ2Uuc2l3ZU1lc3NhZ2VEYXRhLmFkZHJlc3MudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgIG5hbWU6IHVzZXJQcm9maWxlLnVzZXJuYW1lLFxuICAgICAgICAgICAgaW1hZ2U6IHVzZXJQcm9maWxlLnByb2ZpbGVQaWN0dXJlVXJsLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdmVyaWZ5aW5nIG1lc3NhZ2U6XCIsIGUpO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIHJlZGlyZWN0KCkge1xuICAgICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQUF9VUkwgYXMgc3RyaW5nO1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIGlmICh0b2tlbiAmJiBzZXNzaW9uLnVzZXIpIHtcbiAgICAgICAgc2Vzc2lvbi51c2VyLmFkZHJlc3MgPSB0b2tlbi5zdWI7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9LFxuICAgIGFzeW5jIGp3dCh7IHRva2VuIH0pIHtcbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICB9LFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogXCIvXCIsXG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbIk1pbmlLaXQiLCJ2ZXJpZnlTaXdlTWVzc2FnZSIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwiaWQiLCJuYW1lIiwidHlwZSIsImNyZWRlbnRpYWxzIiwibWVzc2FnZSIsInNpZ25hdHVyZSIsImFkZHJlc3MiLCJub25jZSIsImF1dGhvcml6ZSIsInZhbGlkTWVzc2FnZSIsInN0YXR1cyIsInZlcnNpb24iLCJpc1ZhbGlkIiwic2l3ZU1lc3NhZ2VEYXRhIiwidXNlclByb2ZpbGUiLCJnZXRVc2VyQnlBZGRyZXNzIiwiY29uc29sZSIsImxvZyIsInRvTG93ZXJDYXNlIiwidXNlcm5hbWUiLCJpbWFnZSIsInByb2ZpbGVQaWN0dXJlVXJsIiwiZSIsImVycm9yIiwiY2FsbGJhY2tzIiwicmVkaXJlY3QiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBQX1VSTCIsInNlc3Npb24iLCJ0b2tlbiIsInVzZXIiLCJzdWIiLCJqd3QiLCJwYWdlcyIsInNpZ25JbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/auth.ts\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/next@15.3.3_react-dom@19.1.0_react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.3.3_react-dom@19.1.0_react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \*******************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/viem@2.30.5_typescript@5.8.3","vendor-chunks/next@15.3.3_react-dom@19.1.0_react@19.1.0","vendor-chunks/ox@0.7.1_typescript@5.8.3","vendor-chunks/ox@0.1.8_typescript@5.8.3","vendor-chunks/@noble+curves@1.9.1","vendor-chunks/@noble+hashes@1.8.0","vendor-chunks/buffer@6.0.3","vendor-chunks/abitype@1.0.8_typescript@5.8.3","vendor-chunks/@babel+runtime@7.27.4","vendor-chunks/use-sync-external-store@1.5.0_react@19.1.0","vendor-chunks/base64-js@1.5.1","vendor-chunks/ieee754@1.2.1","vendor-chunks/browser-or-node@3.0.0-pre.0","vendor-chunks/@worldcoin+minikit-js@1.9.4_@types+react@19.1.6_immer@10.0.2_react@19.1.0_typescript@5.8.3_viem@2.30.5_typescript@5.8.3_","vendor-chunks/@worldcoin+idkit-core@2.1.0_@types+react@19.1.6_immer@10.0.2_react@19.1.0_typescript@5.8.3","vendor-chunks/zustand@4.5.7_@types+react@19.1.6_immer@10.0.2_react@19.1.0","vendor-chunks/jose@4.15.9","vendor-chunks/next-auth@4.24.11_next@15.3.3_react-dom@19.1.0_react@19.1.0__react@19.1.0__react-dom@19.1.0_react@19.1.0__react@19.1.0","vendor-chunks/openid-client@5.7.1","vendor-chunks/uuid@8.3.2","vendor-chunks/oauth@0.9.15","vendor-chunks/@panva+hkdf@1.2.1","vendor-chunks/yallist@4.0.0","vendor-chunks/preact-render-to-string@5.2.6_preact@10.26.8","vendor-chunks/oidc-token-hash@5.1.0","vendor-chunks/preact@10.26.8","vendor-chunks/object-hash@2.2.0","vendor-chunks/lru-cache@6.0.0","vendor-chunks/cookie@0.7.2"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@15.3.3_react-dom@19.1.0_react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fmaharajababu%2FDesktop%2Fconsentir%2Fmy-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmaharajababu%2FDesktop%2Fconsentir%2Fmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();