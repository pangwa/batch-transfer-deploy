(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/pangwa/chain/walle-eth/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    1:
    /*!**********************!*\
      !*** util (ignored) ***!
      \**********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "1Qqu":
    /*!*****************************************!*\
      !*** ./src/app/meta/loading.service.ts ***!
      \*****************************************/

    /*! exports provided: LoadingService */

    /***/
    function Qqu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingService", function () {
        return LoadingService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LoadingService = /*#__PURE__*/function () {
        function LoadingService() {
          _classCallCheck(this, LoadingService);

          this.loaders = 0;
          this.tx = '';
        }

        _createClass(LoadingService, [{
          key: "addLoading",
          value: function addLoading() {
            var _this = this;

            setTimeout(function () {
              return _this.loaders++;
            });
          }
        }, {
          key: "removeLoading",
          value: function removeLoading() {
            var _this2 = this;

            setTimeout(function () {
              if (_this2.loaders <= 0) {
                return;
              }

              _this2.loaders--;
            });
          }
        }, {
          key: "stopLoading",
          value: function stopLoading() {
            var _this3 = this;

            setTimeout(function () {
              return _this3.loaders = 0;
            });
          }
        }, {
          key: "isLoading",
          value: function isLoading() {
            return this.loaders > 0 || this.tx;
          }
        }, {
          key: "setTx",
          value: function setTx(tx) {
            var _this4 = this;

            setTimeout(function () {
              return _this4.tx = tx;
            });
          }
        }, {
          key: "getTx",
          value: function getTx() {
            return this.tx;
          }
        }]);

        return LoadingService;
      }();

      LoadingService.ctorParameters = function () {
        return [];
      };

      LoadingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LoadingService);
      /***/
    },

    /***/
    2:
    /*!**********************!*\
      !*** util (ignored) ***!
      \**********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    3:
    /*!************************!*\
      !*** buffer (ignored) ***!
      \************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "3UJ4":
    /*!****************************************!*\
      !*** ./build/contracts/TokenImpl.json ***!
      \****************************************/

    /*! exports provided: contractName, abi, metadata, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, devdoc, userdoc, default */

    /***/
    function UJ4(module) {
      module.exports = JSON.parse("{\"contractName\":\"TokenImpl\",\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.5.16+commit.9c3226ce\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":true,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"owner\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":true,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"spender\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"value\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"Approval\\\",\\\"type\\\":\\\"event\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":true,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"from\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":true,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"to\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"value\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"Transfer\\\",\\\"type\\\":\\\"event\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"owner\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"spender\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"allowance\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"spender\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"amount\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"approve\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"account\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"balanceOf\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"decimals\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint8\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint8\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"name\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"symbol\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"totalSupply\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"recipient\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"amount\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"transfer\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"sender\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"recipient\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"amount\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"transferFrom\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"}],\\\"devdoc\\\":{\\\"methods\\\":{\\\"allowance(address,address)\\\":{\\\"details\\\":\\\"Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default.     * This value changes when {approve} or {transferFrom} are called.\\\"},\\\"approve(address,uint256)\\\":{\\\"details\\\":\\\"Sets `amount` as the allowance of `spender` over the caller's tokens.     * Returns a boolean value indicating whether the operation succeeded.     * IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729     * Emits an {Approval} event.\\\"},\\\"balanceOf(address)\\\":{\\\"details\\\":\\\"Returns the amount of tokens owned by `account`.\\\"},\\\"decimals()\\\":{\\\"details\\\":\\\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`).     * Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei.     * NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\\\"},\\\"name()\\\":{\\\"details\\\":\\\"Returns the name of the token.\\\"},\\\"symbol()\\\":{\\\"details\\\":\\\"Returns the symbol of the token, usually a shorter version of the name.\\\"},\\\"totalSupply()\\\":{\\\"details\\\":\\\"Returns the amount of tokens in existence.\\\"},\\\"transfer(address,uint256)\\\":{\\\"details\\\":\\\"Moves `amount` tokens from the caller's account to `recipient`.     * Returns a boolean value indicating whether the operation succeeded.     * Emits a {Transfer} event.\\\"},\\\"transferFrom(address,address,uint256)\\\":{\\\"details\\\":\\\"Moves `amount` tokens from `sender` to `recipient` using the allowance mechanism. `amount` is then deducted from the caller's allowance.     * Returns a boolean value indicating whether the operation succeeded.     * Emits a {Transfer} event.\\\"}}},\\\"userdoc\\\":{\\\"methods\\\":{}}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"/home/pangwa/walle-eth/contracts/Test.sol\\\":\\\"TokenImpl\\\"},\\\"evmVersion\\\":\\\"istanbul\\\",\\\"libraries\\\":{},\\\"optimizer\\\":{\\\"enabled\\\":false,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"/home/pangwa/walle-eth/contracts/Test.sol\\\":{\\\"keccak256\\\":\\\"0x2c3feee26e51ac623bfc1ce07704fb2c0929505adef2d3b4c4746175653fbcdc\\\",\\\"urls\\\":[\\\"bzz-raw://43940cfd7377cff0aa8c35d9b9d3ac9bd2d9d7d1a1815d094b4af2e38fb79893\\\",\\\"dweb:/ipfs/QmbJ9bTgrWxAvR4nPPLWozhXduf3y4WHhtvDwYHnB9qBbe\\\"]},\\\"@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol\\\":{\\\"keccak256\\\":\\\"0x4a3a810b7ebe742e897e1fd428b3eeed2196d3acea58eaf9c566ed10d545d2ed\\\",\\\"urls\\\":[\\\"bzz-raw://28d03f328e19e4099d5013de0649afaeaabac1a614e130767ab1cb4aca9775b6\\\",\\\"dweb:/ipfs/Qmb9iW7yNuYehB2NfhRMs9TakqbLVQhBhmGMkaDZ5g1Eb4\\\"]},\\\"@openzeppelin/contracts/token/ERC20/IERC20.sol\\\":{\\\"keccak256\\\":\\\"0xe5bb0f57cff3e299f360052ba50f1ea0fff046df2be070b6943e0e3c3fdad8a9\\\",\\\"urls\\\":[\\\"bzz-raw://59fd025151435da35faa8093a5c7a17de02de9d08ad27275c5cdf05050820d91\\\",\\\"dweb:/ipfs/QmQMvwEcPhoRXzbXyrdoeRtvLoifUW9Qh7Luho7bmUPRkc\\\"]}},\\\"version\\\":1}\",\"bytecode\":\"0x\",\"deployedBytecode\":\"0x\",\"sourceMap\":\"\",\"deployedSourceMap\":\"\",\"source\":\"pragma solidity ^0.5.0;\\n\\nimport \\\"@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol\\\";\\n\\ncontract TokenImpl is ERC20Detailed {\\n}\\n\",\"sourcePath\":\"/home/pangwa/walle-eth/contracts/Test.sol\",\"ast\":{\"absolutePath\":\"/home/pangwa/walle-eth/contracts/Test.sol\",\"exportedSymbols\":{\"TokenImpl\":[62]},\"id\":63,\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":58,\"literals\":[\"solidity\",\"^\",\"0.5\",\".0\"],\"nodeType\":\"PragmaDirective\",\"src\":\"0:23:1\"},{\"absolutePath\":\"@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol\",\"file\":\"@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol\",\"id\":59,\"nodeType\":\"ImportDirective\",\"scope\":63,\"sourceUnit\":398,\"src\":\"25:63:1\",\"symbolAliases\":[],\"unitAlias\":\"\"},{\"baseContracts\":[{\"arguments\":null,\"baseName\":{\"contractScope\":null,\"id\":60,\"name\":\"ERC20Detailed\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":397,\"src\":\"112:13:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_ERC20Detailed_$397\",\"typeString\":\"contract ERC20Detailed\"}},\"id\":61,\"nodeType\":\"InheritanceSpecifier\",\"src\":\"112:13:1\"}],\"contractDependencies\":[397,466],\"contractKind\":\"contract\",\"documentation\":null,\"fullyImplemented\":false,\"id\":62,\"linearizedBaseContracts\":[62,397,466],\"name\":\"TokenImpl\",\"nodeType\":\"ContractDefinition\",\"nodes\":[],\"scope\":63,\"src\":\"90:39:1\"}],\"src\":\"0:130:1\"},\"legacyAST\":{\"absolutePath\":\"/home/pangwa/walle-eth/contracts/Test.sol\",\"exportedSymbols\":{\"TokenImpl\":[62]},\"id\":63,\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":58,\"literals\":[\"solidity\",\"^\",\"0.5\",\".0\"],\"nodeType\":\"PragmaDirective\",\"src\":\"0:23:1\"},{\"absolutePath\":\"@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol\",\"file\":\"@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol\",\"id\":59,\"nodeType\":\"ImportDirective\",\"scope\":63,\"sourceUnit\":398,\"src\":\"25:63:1\",\"symbolAliases\":[],\"unitAlias\":\"\"},{\"baseContracts\":[{\"arguments\":null,\"baseName\":{\"contractScope\":null,\"id\":60,\"name\":\"ERC20Detailed\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":397,\"src\":\"112:13:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_ERC20Detailed_$397\",\"typeString\":\"contract ERC20Detailed\"}},\"id\":61,\"nodeType\":\"InheritanceSpecifier\",\"src\":\"112:13:1\"}],\"contractDependencies\":[397,466],\"contractKind\":\"contract\",\"documentation\":null,\"fullyImplemented\":false,\"id\":62,\"linearizedBaseContracts\":[62,397,466],\"name\":\"TokenImpl\",\"nodeType\":\"ContractDefinition\",\"nodes\":[],\"scope\":63,\"src\":\"90:39:1\"}],\"src\":\"0:130:1\"},\"compiler\":{\"name\":\"solc\",\"version\":\"0.5.16+commit.9c3226ce.Emscripten.clang\"},\"networks\":{},\"schemaVersion\":\"3.2.4\",\"updatedAt\":\"2020-11-25T08:12:02.091Z\",\"devdoc\":{\"methods\":{\"allowance(address,address)\":{\"details\":\"Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default.     * This value changes when {approve} or {transferFrom} are called.\"},\"approve(address,uint256)\":{\"details\":\"Sets `amount` as the allowance of `spender` over the caller's tokens.     * Returns a boolean value indicating whether the operation succeeded.     * IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729     * Emits an {Approval} event.\"},\"balanceOf(address)\":{\"details\":\"Returns the amount of tokens owned by `account`.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`).     * Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei.     * NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"Returns the amount of tokens in existence.\"},\"transfer(address,uint256)\":{\"details\":\"Moves `amount` tokens from the caller's account to `recipient`.     * Returns a boolean value indicating whether the operation succeeded.     * Emits a {Transfer} event.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Moves `amount` tokens from `sender` to `recipient` using the allowance mechanism. `amount` is then deducted from the caller's allowance.     * Returns a boolean value indicating whether the operation succeeded.     * Emits a {Transfer} event.\"}}},\"userdoc\":{\"methods\":{}}}");
      /***/
    },

    /***/
    "3jEb":
    /*!***************************************!*\
      !*** ./build/contracts/WalleBot.json ***!
      \***************************************/

    /*! exports provided: contractName, abi, metadata, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, networkType, devdoc, userdoc, default */

    /***/
    function jEb(module) {
      module.exports = JSON.parse("{\"contractName\":\"WalleBot\",\"abi\":[{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnerAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnerRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"contract IERC20\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"TransferSuccess\",\"type\":\"event\"},{\"constant\":true,\"inputs\":[],\"name\":\"isOwner\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"isOwnerForAddress\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owners\",\"outputs\":[{\"internalType\":\"address[4]\",\"name\":\"\",\"type\":\"address[4]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"setOwner\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"removeOwner\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"address[]\",\"name\":\"receiver\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"amounts\",\"type\":\"uint256[]\"}],\"name\":\"batchSend\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"sufficient\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"getBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.5.16+commit.9c3226ce\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"inputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"constructor\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":false,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"owner\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"OwnerAdded\\\",\\\"type\\\":\\\"event\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":false,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"owner\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"OwnerRemoved\\\",\\\"type\\\":\\\"event\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":false,\\\"internalType\\\":\\\"contract IERC20\\\",\\\"name\\\":\\\"token\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"TransferSuccess\\\",\\\"type\\\":\\\"event\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"internalType\\\":\\\"contract IERC20\\\",\\\"name\\\":\\\"token\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"address[]\\\",\\\"name\\\":\\\"receiver\\\",\\\"type\\\":\\\"address[]\\\"},{\\\"internalType\\\":\\\"uint256[]\\\",\\\"name\\\":\\\"amounts\\\",\\\"type\\\":\\\"uint256[]\\\"}],\\\"name\\\":\\\"batchSend\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"sufficient\\\",\\\"type\\\":\\\"bool\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"internalType\\\":\\\"contract IERC20\\\",\\\"name\\\":\\\"token\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"getBalance\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"isOwner\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"addr\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"isOwnerForAddress\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"owners\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address[4]\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address[4]\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"index\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"removeOwner\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"index\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"addr\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"setOwner\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"internalType\\\":\\\"contract IERC20\\\",\\\"name\\\":\\\"token\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"withdraw\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"}],\\\"devdoc\\\":{\\\"methods\\\":{}},\\\"userdoc\\\":{\\\"methods\\\":{}}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"/home/pangwa/walle-eth/contracts/WalleBot.sol\\\":\\\"WalleBot\\\"},\\\"evmVersion\\\":\\\"istanbul\\\",\\\"libraries\\\":{},\\\"optimizer\\\":{\\\"enabled\\\":false,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"/home/pangwa/walle-eth/contracts/WalleBot.sol\\\":{\\\"keccak256\\\":\\\"0x3faf0e28021c08cc95d11309f5ff4adb5ecb278e08c18cbfaf5c928badb917e6\\\",\\\"urls\\\":[\\\"bzz-raw://be373096cac942610d47f82fa87c6f0fa3b4c768119c104d5be7a4eb62e9bd33\\\",\\\"dweb:/ipfs/QmTjejbw7JXeDW2zHRJ4Rh8ky65XBdLPspeyHWWTPxCCkR\\\"]},\\\"@openzeppelin/contracts/token/ERC20/IERC20.sol\\\":{\\\"keccak256\\\":\\\"0xe5bb0f57cff3e299f360052ba50f1ea0fff046df2be070b6943e0e3c3fdad8a9\\\",\\\"urls\\\":[\\\"bzz-raw://59fd025151435da35faa8093a5c7a17de02de9d08ad27275c5cdf05050820d91\\\",\\\"dweb:/ipfs/QmQMvwEcPhoRXzbXyrdoeRtvLoifUW9Qh7Luho7bmUPRkc\\\"]}},\\\"version\\\":1}\",\"bytecode\":\"0x608060405234801561001057600080fd5b50336000806004811061001f57fe5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610fa58061006d6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80637fd392471161005b5780637fd39247146102f75780638f32d59b14610345578063affe39c114610367578063f8b2cb4f146103ad57610088565b806319648bed1461008d57806351cff8d9146102115780636b9194881461026d57806371a1e2741461029b575b600080fd5b6101f7600480360360608110156100a357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156100e057600080fd5b8201836020820111156100f257600080fd5b8035906020019184602083028401116401000000008311171561011457600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561017457600080fd5b82018360208201111561018657600080fd5b803590602001918460208302840111640100000000831117156101a857600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290505050610405565b604051808215151515815260200191505060405180910390f35b6102536004803603602081101561022757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506106c0565b604051808215151515815260200191505060405180910390f35b6102996004803603602081101561028357600080fd5b81019080803590602001909291905050506108bf565b005b6102dd600480360360208110156102b157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a95565b604051808215151515815260200191505060405180910390f35b6103436004803603604081101561030d57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b67565b005b61034d610dd6565b604051808215151515815260200191505060405180910390f35b61036f610de6565b6040518082600460200280838360005b8381101561039a57808201518184015260208101905061037f565b5050505090500191505060405180910390f35b6103ef600480360360208110156103c357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e67565b6040518082815260200191505060405180910390f35b600061040f610dd6565b610481576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b81518351146104db576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180610f4b6026913960400191505060405180910390fd5b60008090505b8351811015610651578473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb85838151811061051257fe5b602002602001015185848151811061052657fe5b60200260200101516040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561059757600080fd5b505af11580156105ab573d6000803e3d6000fd5b505050506040513d60208110156105c157600080fd5b8101908080519060200190929190505050610644576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f57616c6c65426f743a207472616e73666572206661696c65640000000000000081525060200191505060405180910390fd5b80806001019150506104e1565b507f3e0a5cf99e7e9bd41080cfe3c715754fbc66f0c0ebee390ee8c3f48824377eae84604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1600190509392505050565b60006106ca610dd6565b61073c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb338473ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156107d657600080fd5b505afa1580156107ea573d6000803e3d6000fd5b505050506040513d602081101561080057600080fd5b81019080805190602001909291905050506040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561087a57600080fd5b505af115801561088e573d6000803e3d6000fd5b505050506040513d60208110156108a457600080fd5b81019080805190602001909291905050505060019050919050565b6108c7610dd6565b610939576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600481106109af576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f696e76616c696420696e6465782100000000000000000000000000000000000081525060200191505060405180910390fd5b60008082600481106109bd57fe5b0160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008083600481106109ef57fe5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da81604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ad45760009050610b62565b60008090505b6004811015610b5c5760008160048110610af057fe5b0160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b4f576001915050610b62565b8080600101915050610ada565b50600090505b919050565b610b6f610dd6565b610be1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b60048210610c57576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f696e76616c696420696e6465782100000000000000000000000000000000000081525060200191505060405180910390fd5b6000808360048110610c6557fe5b0160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160008460048110610c9757fe5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610d6e577f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da81604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b7f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c382604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1505050565b6000610de133610a95565b905090565b610dee610f28565b6000600480602002604051908101604052809291908260048015610e5d576020028201915b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610e13575b5050505050905090565b60008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610ee657600080fd5b505afa158015610efa573d6000803e3d6000fd5b505050506040513d6020811015610f1057600080fd5b81019080805190602001909291905050509050919050565b604051806080016040528060049060208202803883398082019150509050509056fe57616c6c65426f743a20616464726573732073686f756c64206d6174636820616d6f756e7473a265627a7a723158208bb5aac6f59019cda3ae1e246bf93ca785291bcb7685f17b0795b4872a6d6a5364736f6c63430005100032\",\"deployedBytecode\":\"0x608060405234801561001057600080fd5b50600436106100885760003560e01c80637fd392471161005b5780637fd39247146102f75780638f32d59b14610345578063affe39c114610367578063f8b2cb4f146103ad57610088565b806319648bed1461008d57806351cff8d9146102115780636b9194881461026d57806371a1e2741461029b575b600080fd5b6101f7600480360360608110156100a357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156100e057600080fd5b8201836020820111156100f257600080fd5b8035906020019184602083028401116401000000008311171561011457600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561017457600080fd5b82018360208201111561018657600080fd5b803590602001918460208302840111640100000000831117156101a857600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290505050610405565b604051808215151515815260200191505060405180910390f35b6102536004803603602081101561022757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506106c0565b604051808215151515815260200191505060405180910390f35b6102996004803603602081101561028357600080fd5b81019080803590602001909291905050506108bf565b005b6102dd600480360360208110156102b157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a95565b604051808215151515815260200191505060405180910390f35b6103436004803603604081101561030d57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b67565b005b61034d610dd6565b604051808215151515815260200191505060405180910390f35b61036f610de6565b6040518082600460200280838360005b8381101561039a57808201518184015260208101905061037f565b5050505090500191505060405180910390f35b6103ef600480360360208110156103c357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e67565b6040518082815260200191505060405180910390f35b600061040f610dd6565b610481576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b81518351146104db576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180610f4b6026913960400191505060405180910390fd5b60008090505b8351811015610651578473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb85838151811061051257fe5b602002602001015185848151811061052657fe5b60200260200101516040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561059757600080fd5b505af11580156105ab573d6000803e3d6000fd5b505050506040513d60208110156105c157600080fd5b8101908080519060200190929190505050610644576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f57616c6c65426f743a207472616e73666572206661696c65640000000000000081525060200191505060405180910390fd5b80806001019150506104e1565b507f3e0a5cf99e7e9bd41080cfe3c715754fbc66f0c0ebee390ee8c3f48824377eae84604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1600190509392505050565b60006106ca610dd6565b61073c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb338473ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156107d657600080fd5b505afa1580156107ea573d6000803e3d6000fd5b505050506040513d602081101561080057600080fd5b81019080805190602001909291905050506040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561087a57600080fd5b505af115801561088e573d6000803e3d6000fd5b505050506040513d60208110156108a457600080fd5b81019080805190602001909291905050505060019050919050565b6108c7610dd6565b610939576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600481106109af576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f696e76616c696420696e6465782100000000000000000000000000000000000081525060200191505060405180910390fd5b60008082600481106109bd57fe5b0160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008083600481106109ef57fe5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da81604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ad45760009050610b62565b60008090505b6004811015610b5c5760008160048110610af057fe5b0160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b4f576001915050610b62565b8080600101915050610ada565b50600090505b919050565b610b6f610dd6565b610be1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b60048210610c57576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f696e76616c696420696e6465782100000000000000000000000000000000000081525060200191505060405180910390fd5b6000808360048110610c6557fe5b0160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160008460048110610c9757fe5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610d6e577f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da81604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b7f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c382604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1505050565b6000610de133610a95565b905090565b610dee610f28565b6000600480602002604051908101604052809291908260048015610e5d576020028201915b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610e13575b5050505050905090565b60008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610ee657600080fd5b505afa158015610efa573d6000803e3d6000fd5b505050506040513d6020811015610f1057600080fd5b81019080805190602001909291905050509050919050565b604051806080016040528060049060208202803883398082019150509050509056fe57616c6c65426f743a20616464726573732073686f756c64206d6174636820616d6f756e7473a265627a7a723158208bb5aac6f59019cda3ae1e246bf93ca785291bcb7685f17b0795b4872a6d6a5364736f6c63430005100032\",\"sourceMap\":\"83:1931:2:-;;;239:54;8:9:-1;5:2;;;30:1;27;20:12;5:2;239:54:2;279:10;266:7;274:1;266:10;;;;;;;;;:23;;;;;;;;;;;;;;;;;;83:1931;;;;;;\",\"deployedSourceMap\":\"83:1931:2:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;83:1931:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1343:407;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1343:407:2;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;1343:407:2;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;1343:407:2;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;39:11;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;1343:407:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;1343:407:2;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;1343:407:2;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;1343:407:2;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;39:11;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;1343:407:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;1343:407:2;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1862:150;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1862:150:2;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1146:194;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1146:194:2;;;;;;;;;;;;;;;;;:::i;:::-;;497:280;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;497:280:2;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;868:273;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;868:273:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;398:95;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;781:83;;;:::i;:::-;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;781:83:2;;;;;;;;;;;;;;;;1753:105;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1753:105:2;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1343:407;1451:15;334:9;:7;:9::i;:::-;326:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1501:7;:14;1482:8;:15;:33;1474:84;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1569:6;1578:1;1569:10;;1564:135;1585:8;:15;1581:1;:19;1564:135;;;1623:5;:14;;;1638:8;1647:1;1638:11;;;;;;;;;;;;;;1651:7;1659:1;1651:10;;;;;;;;;;;;;;1623:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1623:39:2;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1623:39:2;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1623:39:2;;;;;;;;;;;;;;;;1615:77;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1602:3;;;;;;;1564:135;;;;1709:22;1725:5;1709:22;;;;;;;;;;;;;;;;;;;;;;1742:4;1735:11;;1343:407;;;;;:::o;1862:150::-;1920:4;334:9;:7;:9::i;:::-;326:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1932:5;:14;;;1947:10;1959:5;:15;;;1983:4;1959:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1959:30:2;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1959:30:2;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1959:30:2;;;;;;;;;;;;;;;;1932:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1932:58:2;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1932:58:2;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1932:58:2;;;;;;;;;;;;;;;;;2003:4;1996:11;;1862:150;;;:::o;1146:194::-;334:9;:7;:9::i;:::-;326:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1218:1;1210:5;:9;1202:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1244:12;1259:7;1267:5;1259:14;;;;;;;;;;;;;;;;;;1244:29;;1304:1;1279:7;1287:5;1279:14;;;;;;;;;:27;;;;;;;;;;;;;;;;;;1317:18;1330:4;1317:18;;;;;;;;;;;;;;;;;;;;;;388:1;1146:194;:::o;497:280::-;559:4;593:1;577:18;;:4;:18;;;573:55;;;614:5;607:12;;;;573:55;640:6;649:1;640:10;;635:118;656:14;652:1;:18;635:118;;;699:7;707:1;699:10;;;;;;;;;;;;;;;;;;691:18;;:4;:18;;;687:58;;;730:4;723:11;;;;;687:58;672:3;;;;;;;635:118;;;;767:5;760:12;;497:280;;;;:::o;868:273::-;334:9;:7;:9::i;:::-;326:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;951:1;943:5;:9;935:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;977:15;995:7;1003:5;995:14;;;;;;;;;;;;;;;;;;977:32;;1032:4;1015:7;1023:5;1015:14;;;;;;;;;:21;;;;;;;;;;;;;;;;;;1065:1;1046:21;;:7;:21;;;1042:68;;1082:21;1095:7;1082:21;;;;;;;;;;;;;;;;;;;;;;1042:68;1120:16;1131:4;1120:16;;;;;;;;;;;;;;;;;;;;;;388:1;868:273;;:::o;398:95::-;438:4;459:29;477:10;459:17;:29::i;:::-;452:36;;398:95;:::o;781:83::-;820:17;;:::i;:::-;852:7;845:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;781:83;:::o;1753:105::-;1807:4;1824:5;:15;;;1848:4;1824:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1824:30:2;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1824:30:2;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1824:30:2;;;;;;;;;;;;;;;;1817:37;;1753:105;;;:::o;83:1931::-;;;;;;;;;;;29:2:-1;21:6;17:15;117:4;105:10;97:6;88:34;148:4;140:6;136:17;126:27;;0:157;83:1931:2;;;;:::o\",\"source\":\"pragma solidity ^0.5.0;\\n\\nimport \\\"@openzeppelin/contracts/token/ERC20/IERC20.sol\\\";\\n\\ncontract WalleBot {\\n  event TransferSuccess(IERC20 token);\\n  event OwnerAdded(address owner);\\n  event OwnerRemoved(address owner);\\n\\n  address[4] _owners;\\n\\n\\tconstructor() public {\\n    _owners[0] = msg.sender;\\n\\t}\\n\\n  modifier onlyOwner() {\\n      require(isOwner(), \\\"Ownable: caller is not the owner\\\");\\n      _;\\n  }\\n\\n  function isOwner() public view returns (bool) {\\n      return isOwnerForAddress(msg.sender);\\n  }\\n\\n  function isOwnerForAddress(address addr) public view returns (bool) {\\n      if (addr == address(0)) {\\n        return false;\\n      }\\n      for (uint i = 0; i < _owners.length; i++) {\\n        if (addr == _owners[i]) {\\n          return true;\\n        }\\n      }\\n      return false;\\n  }\\n\\n  function owners() public view returns (address[4] memory) {\\n    return _owners;\\n  }\\n\\n  function setOwner(uint index, address addr) public onlyOwner {\\n    require(index < 4, \\\"invalid index!\\\");\\n    address oldAddr = _owners[index];\\n    _owners[index] = addr;\\n    if (oldAddr != address(0)) {\\n      emit OwnerRemoved(oldAddr);\\n    }\\n    emit OwnerAdded(addr);\\n  }\\n\\n\\n  function removeOwner(uint index) public onlyOwner {\\n    require(index < 4, \\\"invalid index!\\\");\\n    address addr = _owners[index];\\n    _owners[index] = address(0);\\n    emit OwnerRemoved(addr);\\n  }\\n\\n\\tfunction batchSend(IERC20 token, address[] memory receiver, uint[] memory amounts) public onlyOwner returns(bool sufficient) {\\n    require(receiver.length == amounts.length, \\\"WalleBot: address should match amounts\\\");\\n    for (uint i = 0; i < receiver.length; i++) {\\n      require(token.transfer(receiver[i], amounts[i]), \\\"WalleBot: transfer failed\\\");\\n    }\\n    emit TransferSuccess(token);\\n\\t\\treturn true;\\n\\t}\\n\\n\\tfunction getBalance(IERC20 token) public view returns(uint) {\\n\\t\\treturn token.balanceOf(address(this));\\n\\t}\\n\\n  function withdraw(IERC20 token) public onlyOwner returns (bool) {\\n    token.transfer(msg.sender, token.balanceOf(address(this)));\\n    return true;\\n  }\\n}\\n\",\"sourcePath\":\"/home/pangwa/walle-eth/contracts/WalleBot.sol\",\"ast\":{\"absolutePath\":\"/home/pangwa/walle-eth/contracts/WalleBot.sol\",\"exportedSymbols\":{\"WalleBot\":[339]},\"id\":340,\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":64,\"literals\":[\"solidity\",\"^\",\"0.5\",\".0\"],\"nodeType\":\"PragmaDirective\",\"src\":\"0:23:2\"},{\"absolutePath\":\"@openzeppelin/contracts/token/ERC20/IERC20.sol\",\"file\":\"@openzeppelin/contracts/token/ERC20/IERC20.sol\",\"id\":65,\"nodeType\":\"ImportDirective\",\"scope\":340,\"sourceUnit\":467,\"src\":\"25:56:2\",\"symbolAliases\":[],\"unitAlias\":\"\"},{\"baseContracts\":[],\"contractDependencies\":[],\"contractKind\":\"contract\",\"documentation\":null,\"fullyImplemented\":true,\"id\":339,\"linearizedBaseContracts\":[339],\"name\":\"WalleBot\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"anonymous\":false,\"documentation\":null,\"id\":69,\"name\":\"TransferSuccess\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":68,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":67,\"indexed\":false,\"name\":\"token\",\"nodeType\":\"VariableDeclaration\",\"scope\":69,\"src\":\"127:12:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$466\",\"typeString\":\"contract IERC20\"},\"typeName\":{\"contractScope\":null,\"id\":66,\"name\":\"IERC20\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":466,\"src\":\"127:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$466\",\"typeString\":\"contract IERC20\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"126:14:2\"},\"src\":\"105:36:2\"},{\"anonymous\":false,\"documentation\":null,\"id\":73,\"name\":\"OwnerAdded\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":72,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":71,\"indexed\":false,\"name\":\"owner\",\"nodeType\":\"VariableDeclaration\",\"scope\":73,\"src\":\"161:13:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":70,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"161:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"160:15:2\"},\"src\":\"144:32:2\"},{\"anonymous\":false,\"documentation\":null,\"id\":77,\"name\":\"OwnerRemoved\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":76,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":75,\"indexed\":false,\"name\":\"owner\",\"nodeType\":\"VariableDeclaration\",\"scope\":77,\"src\":\"198:13:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":74,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"198:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"197:15:2\"},\"src\":\"179:34:2\"},{\"constant\":false,\"id\":81,\"name\":\"_owners\",\"nodeType\":\"VariableDeclaration\",\"scope\":339,\"src\":\"217:18:2\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$4_storage\",\"typeString\":\"address[4]\"},\"typeName\":{\"baseType\":{\"id\":78,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"217:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":80,\"length\":{\"argumentTypes\":null,\"hexValue\":\"34\",\"id\":79,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"225:1:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_4_by_1\",\"typeString\":\"int_const 4\"},\"value\":\"4\"},\"nodeType\":\"ArrayTypeName\",\"src\":\"217:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$4_storage_ptr\",\"typeString\":\"address[4]\"}},\"value\":null,\"visibility\":\"internal\"},{\"body\":{\"id\":91,\"nodeType\":\"Block\",\"src\":\"260:33:2\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"id\":89,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":84,\"name\":\"_owners\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":81,\"src\":\"266:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$4_storage\",\"typeString\":\"address[4] storage ref\"}},\"id\":86,\"indexExpression\":{\"argumentTypes\":null,\"hexValue\":\"30\",\"id\":85,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"274:1:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"266:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":87,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":481,\"src\":\"279:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":88,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"279:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"src\":\"266:23:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":90,\"nodeType\":\"ExpressionStatement\",\"src\":\"266:23:2\"}]},\"documentation\":null,\"id\":92,\"implemented\":true,\"kind\":\"constructor\",\"modifiers\":[],\"name\":\"\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":82,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"250:2:2\"},\"returnParameters\":{\"id\":83,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"260:0:2\"},\"scope\":339,\"src\":\"239:54:2\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":101,\"nodeType\":\"Block\",\"src\":\"318:76:2\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"arguments\":[],\"expression\":{\"argumentTypes\":[],\"id\":95,\"name\":\"isOwner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":113,\"src\":\"334:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_view$__$returns$_t_bool_$\",\"typeString\":\"function () view returns (bool)\"}},\"id\":96,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"334:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},{\"argumentTypes\":null,\"hexValue\":\"4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572\",\"id\":97,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"345:34:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe\",\"typeString\":\"literal_string \\\"Ownable: caller is not the owner\\\"\"},\"value\":\"Ownable: caller is not the owner\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},{\"typeIdentifier\":\"t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe\",\"typeString\":\"literal_string \\\"Ownable: caller is not the owner\\\"\"}],\"id\":94,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[484,485],\"referencedDeclaration\":485,\"src\":\"326:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$\",\"typeString\":\"function (bool,string memory) pure\"}},\"id\":98,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"326:54:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":99,\"nodeType\":\"ExpressionStatement\",\"src\":\"326:54:2\"},{\"id\":100,\"nodeType\":\"PlaceholderStatement\",\"src\":\"388:1:2\"}]},\"documentation\":null,\"id\":102,\"name\":\"onlyOwner\",\"nodeType\":\"ModifierDefinition\",\"parameters\":{\"id\":93,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"315:2:2\"},\"src\":\"297:97:2\",\"visibility\":\"internal\"},{\"body\":{\"id\":112,\"nodeType\":\"Block\",\"src\":\"444:49:2\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":108,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":481,\"src\":\"477:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":109,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"477:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}],\"id\":107,\"name\":\"isOwnerForAddress\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":154,\"src\":\"459:17:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_view$_t_address_$returns$_t_bool_$\",\"typeString\":\"function (address) view returns (bool)\"}},\"id\":110,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"459:29:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"functionReturnParameters\":106,\"id\":111,\"nodeType\":\"Return\",\"src\":\"452:36:2\"}]},\"documentation\":null,\"id\":113,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"isOwner\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":103,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"414:2:2\"},\"returnParameters\":{\"id\":106,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":105,\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":113,\"src\":\"438:4:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":104,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"438:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"437:6:2\"},\"scope\":339,\"src\":\"398:95:2\",\"stateMutability\":\"view\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":153,\"nodeType\":\"Block\",\"src\":\"565:212:2\",\"statements\":[{\"condition\":{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"id\":124,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"id\":120,\"name\":\"addr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"577:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"hexValue\":\"30\",\"id\":122,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"593:1:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"}],\"id\":121,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"nodeType\":\"ElementaryTypeNameExpression\",\"src\":\"585:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_type$_t_address_$\",\"typeString\":\"type(address)\"},\"typeName\":\"address\"},\"id\":123,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"typeConversion\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"585:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"src\":\"577:18:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"falseBody\":null,\"id\":128,\"nodeType\":\"IfStatement\",\"src\":\"573:55:2\",\"trueBody\":{\"id\":127,\"nodeType\":\"Block\",\"src\":\"597:31:2\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"hexValue\":\"66616c7365\",\"id\":125,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"614:5:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"false\"},\"functionReturnParameters\":119,\"id\":126,\"nodeType\":\"Return\",\"src\":\"607:12:2\"}]}},{\"body\":{\"id\":149,\"nodeType\":\"Block\",\"src\":\"677:76:2\",\"statements\":[{\"condition\":{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"id\":144,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"id\":140,\"name\":\"addr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"691:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":141,\"name\":\"_owners\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":81,\"src\":\"699:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$4_storage\",\"typeString\":\"address[4] storage ref\"}},\"id\":143,\"indexExpression\":{\"argumentTypes\":null,\"id\":142,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":130,\"src\":\"707:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"699:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"src\":\"691:18:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"falseBody\":null,\"id\":148,\"nodeType\":\"IfStatement\",\"src\":\"687:58:2\",\"trueBody\":{\"id\":147,\"nodeType\":\"Block\",\"src\":\"711:34:2\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"hexValue\":\"74727565\",\"id\":145,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"730:4:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"functionReturnParameters\":119,\"id\":146,\"nodeType\":\"Return\",\"src\":\"723:11:2\"}]}}]},\"condition\":{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":136,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"id\":133,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":130,\"src\":\"652:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"<\",\"rightExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":134,\"name\":\"_owners\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":81,\"src\":\"656:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$4_storage\",\"typeString\":\"address[4] storage ref\"}},\"id\":135,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"656:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"652:18:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":150,\"initializationExpression\":{\"assignments\":[130],\"declarations\":[{\"constant\":false,\"id\":130,\"name\":\"i\",\"nodeType\":\"VariableDeclaration\",\"scope\":150,\"src\":\"640:6:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":129,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"640:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"id\":132,\"initialValue\":{\"argumentTypes\":null,\"hexValue\":\"30\",\"id\":131,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"649:1:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"640:10:2\"},\"loopExpression\":{\"expression\":{\"argumentTypes\":null,\"id\":138,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"672:3:2\",\"subExpression\":{\"argumentTypes\":null,\"id\":137,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":130,\"src\":\"672:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":139,\"nodeType\":\"ExpressionStatement\",\"src\":\"672:3:2\"},\"nodeType\":\"ForStatement\",\"src\":\"635:118:2\"},{\"expression\":{\"argumentTypes\":null,\"hexValue\":\"66616c7365\",\"id\":151,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"767:5:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"false\"},\"functionReturnParameters\":119,\"id\":152,\"nodeType\":\"Return\",\"src\":\"760:12:2\"}]},\"documentation\":null,\"id\":154,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"isOwnerForAddress\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":116,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":115,\"name\":\"addr\",\"nodeType\":\"VariableDeclaration\",\"scope\":154,\"src\":\"524:12:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":114,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"524:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"523:14:2\"},\"returnParameters\":{\"id\":119,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":118,\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":154,\"src\":\"559:4:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":117,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"559:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"558:6:2\"},\"scope\":339,\"src\":\"497:280:2\",\"stateMutability\":\"view\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":163,\"nodeType\":\"Block\",\"src\":\"839:25:2\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"id\":161,\"name\":\"_owners\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":81,\"src\":\"852:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$4_storage\",\"typeString\":\"address[4] storage ref\"}},\"functionReturnParameters\":160,\"id\":162,\"nodeType\":\"Return\",\"src\":\"845:14:2\"}]},\"documentation\":null,\"id\":164,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"owners\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":155,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"796:2:2\"},\"returnParameters\":{\"id\":160,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":159,\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":164,\"src\":\"820:17:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$4_memory_ptr\",\"typeString\":\"address[4]\"},\"typeName\":{\"baseType\":{\"id\":156,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"820:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":158,\"length\":{\"argumentTypes\":null,\"hexValue\":\"34\",\"id\":157,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"828:1:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_4_by_1\",\"typeString\":\"int_const 4\"},\"value\":\"4\"},\"nodeType\":\"ArrayTypeName\",\"src\":\"820:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$4_storage_ptr\",\"typeString\":\"address[4]\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"819:19:2\"},\"scope\":339,\"src\":\"781:83:2\",\"stateMutability\":\"view\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":207,\"nodeType\":\"Block\",\"src\":\"929:212:2\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":176,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"id\":174,\"name\":\"index\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":166,\"src\":\"943:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"<\",\"rightExpression\":{\"argumentTypes\":null,\"hexValue\":\"34\",\"id\":175,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"951:1:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_4_by_1\",\"typeString\":\"int_const 4\"},\"value\":\"4\"},\"src\":\"943:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},{\"argumentTypes\":null,\"hexValue\":\"696e76616c696420696e64657821\",\"id\":177,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"954:16:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_c48487ef0ba77ac501272aa9d8209e581d887fafb7c21a277e6583893ca42690\",\"typeString\":\"literal_string \\\"invalid index!\\\"\"},\"value\":\"invalid index!\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},{\"typeIdentifier\":\"t_stringliteral_c48487ef0ba77ac501272aa9d8209e581d887fafb7c21a277e6583893ca42690\",\"typeString\":\"literal_string \\\"invalid index!\\\"\"}],\"id\":173,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[484,485],\"referencedDeclaration\":485,\"src\":\"935:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$\",\"typeString\":\"function (bool,string memory) pure\"}},\"id\":178,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"935:36:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":179,\"nodeType\":\"ExpressionStatement\",\"src\":\"935:36:2\"},{\"assignments\":[181],\"declarations\":[{\"constant\":false,\"id\":181,\"name\":\"oldAddr\",\"nodeType\":\"VariableDeclaration\",\"scope\":207,\"src\":\"977:15:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":180,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"977:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"id\":185,\"initialValue\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":182,\"name\":\"_owners\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":81,\"src\":\"995:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$4_storage\",\"typeString\":\"address[4] storage ref\"}},\"id\":184,\"indexExpression\":{\"argumentTypes\":null,\"id\":183,\"name\":\"index\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":166,\"src\":\"1003:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"995:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"977:32:2\"},{\"expression\":{\"argumentTypes\":null,\"id\":190,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":186,\"name\":\"_owners\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":81,\"src\":\"1015:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$4_storage\",\"typeString\":\"address[4] storage ref\"}},\"id\":188,\"indexExpression\":{\"argumentTypes\":null,\"id\":187,\"name\":\"index\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":166,\"src\":\"1023:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"1015:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"id\":189,\"name\":\"addr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":168,\"src\":\"1032:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"src\":\"1015:21:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":191,\"nodeType\":\"ExpressionStatement\",\"src\":\"1015:21:2\"},{\"condition\":{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"id\":196,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"id\":192,\"name\":\"oldAddr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":181,\"src\":\"1046:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"!=\",\"rightExpression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"hexValue\":\"30\",\"id\":194,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1065:1:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"}],\"id\":193,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"nodeType\":\"ElementaryTypeNameExpression\",\"src\":\"1057:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_type$_t_address_$\",\"typeString\":\"type(address)\"},\"typeName\":\"address\"},\"id\":195,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"typeConversion\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1057:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"src\":\"1046:21:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"falseBody\":null,\"id\":202,\"nodeType\":\"IfStatement\",\"src\":\"1042:68:2\",\"trueBody\":{\"id\":201,\"nodeType\":\"Block\",\"src\":\"1069:41:2\",\"statements\":[{\"eventCall\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":198,\"name\":\"oldAddr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":181,\"src\":\"1095:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"id\":197,\"name\":\"OwnerRemoved\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":77,\"src\":\"1082:12:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_address_$returns$__$\",\"typeString\":\"function (address)\"}},\"id\":199,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1082:21:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":200,\"nodeType\":\"EmitStatement\",\"src\":\"1077:26:2\"}]}},{\"eventCall\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":204,\"name\":\"addr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":168,\"src\":\"1131:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"id\":203,\"name\":\"OwnerAdded\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":73,\"src\":\"1120:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_address_$returns$__$\",\"typeString\":\"function (address)\"}},\"id\":205,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1120:16:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":206,\"nodeType\":\"EmitStatement\",\"src\":\"1115:21:2\"}]},\"documentation\":null,\"id\":208,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"arguments\":null,\"id\":171,\"modifierName\":{\"argumentTypes\":null,\"id\":170,\"name\":\"onlyOwner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":102,\"src\":\"919:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"919:9:2\"}],\"name\":\"setOwner\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":169,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":166,\"name\":\"index\",\"nodeType\":\"VariableDeclaration\",\"scope\":208,\"src\":\"886:10:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":165,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"886:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":168,\"name\":\"addr\",\"nodeType\":\"VariableDeclaration\",\"scope\":208,\"src\":\"898:12:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":167,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"898:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"885:26:2\"},\"returnParameters\":{\"id\":172,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"929:0:2\"},\"scope\":339,\"src\":\"868:273:2\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":240,\"nodeType\":\"Block\",\"src\":\"1196:144:2\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":218,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"id\":216,\"name\":\"index\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":210,\"src\":\"1210:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"<\",\"rightExpression\":{\"argumentTypes\":null,\"hexValue\":\"34\",\"id\":217,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1218:1:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_4_by_1\",\"typeString\":\"int_const 4\"},\"value\":\"4\"},\"src\":\"1210:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},{\"argumentTypes\":null,\"hexValue\":\"696e76616c696420696e64657821\",\"id\":219,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1221:16:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_c48487ef0ba77ac501272aa9d8209e581d887fafb7c21a277e6583893ca42690\",\"typeString\":\"literal_string \\\"invalid index!\\\"\"},\"value\":\"invalid index!\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},{\"typeIdentifier\":\"t_stringliteral_c48487ef0ba77ac501272aa9d8209e581d887fafb7c21a277e6583893ca42690\",\"typeString\":\"literal_string \\\"invalid index!\\\"\"}],\"id\":215,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[484,485],\"referencedDeclaration\":485,\"src\":\"1202:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$\",\"typeString\":\"function (bool,string memory) pure\"}},\"id\":220,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1202:36:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":221,\"nodeType\":\"ExpressionStatement\",\"src\":\"1202:36:2\"},{\"assignments\":[223],\"declarations\":[{\"constant\":false,\"id\":223,\"name\":\"addr\",\"nodeType\":\"VariableDeclaration\",\"scope\":240,\"src\":\"1244:12:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":222,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1244:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"id\":227,\"initialValue\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":224,\"name\":\"_owners\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":81,\"src\":\"1259:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$4_storage\",\"typeString\":\"address[4] storage ref\"}},\"id\":226,\"indexExpression\":{\"argumentTypes\":null,\"id\":225,\"name\":\"index\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":210,\"src\":\"1267:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1259:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"1244:29:2\"},{\"expression\":{\"argumentTypes\":null,\"id\":234,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":228,\"name\":\"_owners\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":81,\"src\":\"1279:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$4_storage\",\"typeString\":\"address[4] storage ref\"}},\"id\":230,\"indexExpression\":{\"argumentTypes\":null,\"id\":229,\"name\":\"index\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":210,\"src\":\"1287:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"1279:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"hexValue\":\"30\",\"id\":232,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1304:1:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"}],\"id\":231,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"nodeType\":\"ElementaryTypeNameExpression\",\"src\":\"1296:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_type$_t_address_$\",\"typeString\":\"type(address)\"},\"typeName\":\"address\"},\"id\":233,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"typeConversion\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1296:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"src\":\"1279:27:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":235,\"nodeType\":\"ExpressionStatement\",\"src\":\"1279:27:2\"},{\"eventCall\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":237,\"name\":\"addr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":223,\"src\":\"1330:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"id\":236,\"name\":\"OwnerRemoved\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":77,\"src\":\"1317:12:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_address_$returns$__$\",\"typeString\":\"function (address)\"}},\"id\":238,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1317:18:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":239,\"nodeType\":\"EmitStatement\",\"src\":\"1312:23:2\"}]},\"documentation\":null,\"id\":241,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"arguments\":null,\"id\":213,\"modifierName\":{\"argumentTypes\":null,\"id\":212,\"name\":\"onlyOwner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":102,\"src\":\"1186:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"1186:9:2\"}],\"name\":\"removeOwner\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":211,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":210,\"name\":\"index\",\"nodeType\":\"VariableDeclaration\",\"scope\":241,\"src\":\"1167:10:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":209,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1167:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1166:12:2\"},\"returnParameters\":{\"id\":214,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1196:0:2\"},\"scope\":339,\"src\":\"1146:194:2\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":297,\"nodeType\":\"Block\",\"src\":\"1468:282:2\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":261,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":257,\"name\":\"receiver\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":246,\"src\":\"1482:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[] memory\"}},\"id\":258,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1482:15:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":259,\"name\":\"amounts\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":249,\"src\":\"1501:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint256_$dyn_memory_ptr\",\"typeString\":\"uint256[] memory\"}},\"id\":260,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1501:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"1482:33:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},{\"argumentTypes\":null,\"hexValue\":\"57616c6c65426f743a20616464726573732073686f756c64206d6174636820616d6f756e7473\",\"id\":262,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1517:40:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_8fe3218e3b005acf2b20ec5a03fdeff9a043fbc8bb9db0e084368890706118b4\",\"typeString\":\"literal_string \\\"WalleBot: address should match amounts\\\"\"},\"value\":\"WalleBot: address should match amounts\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},{\"typeIdentifier\":\"t_stringliteral_8fe3218e3b005acf2b20ec5a03fdeff9a043fbc8bb9db0e084368890706118b4\",\"typeString\":\"literal_string \\\"WalleBot: address should match amounts\\\"\"}],\"id\":256,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[484,485],\"referencedDeclaration\":485,\"src\":\"1474:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$\",\"typeString\":\"function (bool,string memory) pure\"}},\"id\":263,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1474:84:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":264,\"nodeType\":\"ExpressionStatement\",\"src\":\"1474:84:2\"},{\"body\":{\"id\":289,\"nodeType\":\"Block\",\"src\":\"1607:92:2\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":279,\"name\":\"receiver\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":246,\"src\":\"1638:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[] memory\"}},\"id\":281,\"indexExpression\":{\"argumentTypes\":null,\"id\":280,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":266,\"src\":\"1647:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1638:11:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":282,\"name\":\"amounts\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":249,\"src\":\"1651:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint256_$dyn_memory_ptr\",\"typeString\":\"uint256[] memory\"}},\"id\":284,\"indexExpression\":{\"argumentTypes\":null,\"id\":283,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":266,\"src\":\"1659:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1651:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"expression\":{\"argumentTypes\":null,\"id\":277,\"name\":\"token\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":243,\"src\":\"1623:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$466\",\"typeString\":\"contract IERC20\"}},\"id\":278,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"transfer\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":420,\"src\":\"1623:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$\",\"typeString\":\"function (address,uint256) external returns (bool)\"}},\"id\":285,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1623:39:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},{\"argumentTypes\":null,\"hexValue\":\"57616c6c65426f743a207472616e73666572206661696c6564\",\"id\":286,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1664:27:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_10c5f4931e420a2b3b8341c9b2d6ba892ba5612386b63e5e2793d4fccccd6716\",\"typeString\":\"literal_string \\\"WalleBot: transfer failed\\\"\"},\"value\":\"WalleBot: transfer failed\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},{\"typeIdentifier\":\"t_stringliteral_10c5f4931e420a2b3b8341c9b2d6ba892ba5612386b63e5e2793d4fccccd6716\",\"typeString\":\"literal_string \\\"WalleBot: transfer failed\\\"\"}],\"id\":276,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[484,485],\"referencedDeclaration\":485,\"src\":\"1615:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$\",\"typeString\":\"function (bool,string memory) pure\"}},\"id\":287,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1615:77:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":288,\"nodeType\":\"ExpressionStatement\",\"src\":\"1615:77:2\"}]},\"condition\":{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":272,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"id\":269,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":266,\"src\":\"1581:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"<\",\"rightExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":270,\"name\":\"receiver\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":246,\"src\":\"1585:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[] memory\"}},\"id\":271,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1585:15:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"1581:19:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":290,\"initializationExpression\":{\"assignments\":[266],\"declarations\":[{\"constant\":false,\"id\":266,\"name\":\"i\",\"nodeType\":\"VariableDeclaration\",\"scope\":290,\"src\":\"1569:6:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":265,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1569:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"id\":268,\"initialValue\":{\"argumentTypes\":null,\"hexValue\":\"30\",\"id\":267,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1578:1:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"1569:10:2\"},\"loopExpression\":{\"expression\":{\"argumentTypes\":null,\"id\":274,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"1602:3:2\",\"subExpression\":{\"argumentTypes\":null,\"id\":273,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":266,\"src\":\"1602:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":275,\"nodeType\":\"ExpressionStatement\",\"src\":\"1602:3:2\"},\"nodeType\":\"ForStatement\",\"src\":\"1564:135:2\"},{\"eventCall\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":292,\"name\":\"token\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":243,\"src\":\"1725:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$466\",\"typeString\":\"contract IERC20\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_contract$_IERC20_$466\",\"typeString\":\"contract IERC20\"}],\"id\":291,\"name\":\"TransferSuccess\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":69,\"src\":\"1709:15:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_contract$_IERC20_$466_$returns$__$\",\"typeString\":\"function (contract IERC20)\"}},\"id\":293,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1709:22:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":294,\"nodeType\":\"EmitStatement\",\"src\":\"1704:27:2\"},{\"expression\":{\"argumentTypes\":null,\"hexValue\":\"74727565\",\"id\":295,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1742:4:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"functionReturnParameters\":255,\"id\":296,\"nodeType\":\"Return\",\"src\":\"1735:11:2\"}]},\"documentation\":null,\"id\":298,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"arguments\":null,\"id\":252,\"modifierName\":{\"argumentTypes\":null,\"id\":251,\"name\":\"onlyOwner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":102,\"src\":\"1433:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"1433:9:2\"}],\"name\":\"batchSend\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":250,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":243,\"name\":\"token\",\"nodeType\":\"VariableDeclaration\",\"scope\":298,\"src\":\"1362:12:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$466\",\"typeString\":\"contract IERC20\"},\"typeName\":{\"contractScope\":null,\"id\":242,\"name\":\"IERC20\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":466,\"src\":\"1362:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$466\",\"typeString\":\"contract IERC20\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":246,\"name\":\"receiver\",\"nodeType\":\"VariableDeclaration\",\"scope\":298,\"src\":\"1376:25:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":244,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1376:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":245,\"length\":null,\"nodeType\":\"ArrayTypeName\",\"src\":\"1376:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":249,\"name\":\"amounts\",\"nodeType\":\"VariableDeclaration\",\"scope\":298,\"src\":\"1403:21:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint256_$dyn_memory_ptr\",\"typeString\":\"uint256[]\"},\"typeName\":{\"baseType\":{\"id\":247,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1403:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":248,\"length\":null,\"nodeType\":\"ArrayTypeName\",\"src\":\"1403:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint256_$dyn_storage_ptr\",\"typeString\":\"uint256[]\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1361:64:2\"},\"returnParameters\":{\"id\":255,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":254,\"name\":\"sufficient\",\"nodeType\":\"VariableDeclaration\",\"scope\":298,\"src\":\"1451:15:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":253,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1451:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1450:17:2\"},\"scope\":339,\"src\":\"1343:407:2\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":312,\"nodeType\":\"Block\",\"src\":\"1813:45:2\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":308,\"name\":\"this\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":503,\"src\":\"1848:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_WalleBot_$339\",\"typeString\":\"contract WalleBot\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_contract$_WalleBot_$339\",\"typeString\":\"contract WalleBot\"}],\"id\":307,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"nodeType\":\"ElementaryTypeNameExpression\",\"src\":\"1840:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_type$_t_address_$\",\"typeString\":\"type(address)\"},\"typeName\":\"address\"},\"id\":309,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"typeConversion\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1840:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"expression\":{\"argumentTypes\":null,\"id\":305,\"name\":\"token\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":300,\"src\":\"1824:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$466\",\"typeString\":\"contract IERC20\"}},\"id\":306,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"balanceOf\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":411,\"src\":\"1824:15:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_external_view$_t_address_$returns$_t_uint256_$\",\"typeString\":\"function (address) view external returns (uint256)\"}},\"id\":310,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1824:30:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"functionReturnParameters\":304,\"id\":311,\"nodeType\":\"Return\",\"src\":\"1817:37:2\"}]},\"documentation\":null,\"id\":313,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getBalance\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":301,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":300,\"name\":\"token\",\"nodeType\":\"VariableDeclaration\",\"scope\":313,\"src\":\"1773:12:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$466\",\"typeString\":\"contract IERC20\"},\"typeName\":{\"contractScope\":null,\"id\":299,\"name\":\"IERC20\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":466,\"src\":\"1773:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$466\",\"typeString\":\"contract IERC20\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1772:14:2\"},\"returnParameters\":{\"id\":304,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":303,\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":313,\"src\":\"1807:4:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":302,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1807:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1806:6:2\"},\"scope\":339,\"src\":\"1753:105:2\",\"stateMutability\":\"view\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":337,\"nodeType\":\"Block\",\"src\":\"1926:86:2\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":325,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":481,\"src\":\"1947:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":326,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1947:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":330,\"name\":\"this\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":503,\"src\":\"1983:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_WalleBot_$339\",\"typeString\":\"contract WalleBot\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_contract$_WalleBot_$339\",\"typeString\":\"contract WalleBot\"}],\"id\":329,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"nodeType\":\"ElementaryTypeNameExpression\",\"src\":\"1975:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_type$_t_address_$\",\"typeString\":\"type(address)\"},\"typeName\":\"address\"},\"id\":331,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"typeConversion\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1975:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"expression\":{\"argumentTypes\":null,\"id\":327,\"name\":\"token\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":315,\"src\":\"1959:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$466\",\"typeString\":\"contract IERC20\"}},\"id\":328,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"balanceOf\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":411,\"src\":\"1959:15:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_external_view$_t_address_$returns$_t_uint256_$\",\"typeString\":\"function (address) view external returns (uint256)\"}},\"id\":332,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1959:30:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"expression\":{\"argumentTypes\":null,\"id\":322,\"name\":\"token\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":315,\"src\":\"1932:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$466\",\"typeString\":\"contract IERC20\"}},\"id\":324,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"transfer\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":420,\"src\":\"1932:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$\",\"typeString\":\"function (address,uint256) external returns (bool)\"}},\"id\":333,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1932:58:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":334,\"nodeType\":\"ExpressionStatement\",\"src\":\"1932:58:2\"},{\"expression\":{\"argumentTypes\":null,\"hexValue\":\"74727565\",\"id\":335,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2003:4:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"functionReturnParameters\":321,\"id\":336,\"nodeType\":\"Return\",\"src\":\"1996:11:2\"}]},\"documentation\":null,\"id\":338,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"arguments\":null,\"id\":318,\"modifierName\":{\"argumentTypes\":null,\"id\":317,\"name\":\"onlyOwner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":102,\"src\":\"1901:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"1901:9:2\"}],\"name\":\"withdraw\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":316,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":315,\"name\":\"token\",\"nodeType\":\"VariableDeclaration\",\"scope\":338,\"src\":\"1880:12:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$466\",\"typeString\":\"contract IERC20\"},\"typeName\":{\"contractScope\":null,\"id\":314,\"name\":\"IERC20\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":466,\"src\":\"1880:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$466\",\"typeString\":\"contract IERC20\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1879:14:2\"},\"returnParameters\":{\"id\":321,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":320,\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":338,\"src\":\"1920:4:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":319,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1920:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1919:6:2\"},\"scope\":339,\"src\":\"1862:150:2\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"}],\"scope\":340,\"src\":\"83:1931:2\"}],\"src\":\"0:2015:2\"},\"legacyAST\":{\"absolutePath\":\"/home/pangwa/walle-eth/contracts/WalleBot.sol\",\"exportedSymbols\":{\"WalleBot\":[339]},\"id\":340,\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":64,\"literals\":[\"solidity\",\"^\",\"0.5\",\".0\"],\"nodeType\":\"PragmaDirective\",\"src\":\"0:23:2\"},{\"absolutePath\":\"@openzeppelin/contracts/token/ERC20/IERC20.sol\",\"file\":\"@openzeppelin/contracts/token/ERC20/IERC20.sol\",\"id\":65,\"nodeType\":\"ImportDirective\",\"scope\":340,\"sourceUnit\":467,\"src\":\"25:56:2\",\"symbolAliases\":[],\"unitAlias\":\"\"},{\"baseContracts\":[],\"contractDependencies\":[],\"contractKind\":\"contract\",\"documentation\":null,\"fullyImplemented\":true,\"id\":339,\"linearizedBaseContracts\":[339],\"name\":\"WalleBot\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"anonymous\":false,\"documentation\":null,\"id\":69,\"name\":\"TransferSuccess\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":68,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":67,\"indexed\":false,\"name\":\"token\",\"nodeType\":\"VariableDeclaration\",\"scope\":69,\"src\":\"127:12:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$466\",\"typeString\":\"contract IERC20\"},\"typeName\":{\"contractScope\":null,\"id\":66,\"name\":\"IERC20\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":466,\"src\":\"127:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$466\",\"typeString\":\"contract IERC20\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"126:14:2\"},\"src\":\"105:36:2\"},{\"anonymous\":false,\"documentation\":null,\"id\":73,\"name\":\"OwnerAdded\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":72,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":71,\"indexed\":false,\"name\":\"owner\",\"nodeType\":\"VariableDeclaration\",\"scope\":73,\"src\":\"161:13:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":70,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"161:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"160:15:2\"},\"src\":\"144:32:2\"},{\"anonymous\":false,\"documentation\":null,\"id\":77,\"name\":\"OwnerRemoved\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":76,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":75,\"indexed\":false,\"name\":\"owner\",\"nodeType\":\"VariableDeclaration\",\"scope\":77,\"src\":\"198:13:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":74,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"198:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"197:15:2\"},\"src\":\"179:34:2\"},{\"constant\":false,\"id\":81,\"name\":\"_owners\",\"nodeType\":\"VariableDeclaration\",\"scope\":339,\"src\":\"217:18:2\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$4_storage\",\"typeString\":\"address[4]\"},\"typeName\":{\"baseType\":{\"id\":78,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"217:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":80,\"length\":{\"argumentTypes\":null,\"hexValue\":\"34\",\"id\":79,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"225:1:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_4_by_1\",\"typeString\":\"int_const 4\"},\"value\":\"4\"},\"nodeType\":\"ArrayTypeName\",\"src\":\"217:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$4_storage_ptr\",\"typeString\":\"address[4]\"}},\"value\":null,\"visibility\":\"internal\"},{\"body\":{\"id\":91,\"nodeType\":\"Block\",\"src\":\"260:33:2\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"id\":89,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":84,\"name\":\"_owners\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":81,\"src\":\"266:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$4_storage\",\"typeString\":\"address[4] storage ref\"}},\"id\":86,\"indexExpression\":{\"argumentTypes\":null,\"hexValue\":\"30\",\"id\":85,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"274:1:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"266:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":87,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":481,\"src\":\"279:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":88,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"279:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"src\":\"266:23:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":90,\"nodeType\":\"ExpressionStatement\",\"src\":\"266:23:2\"}]},\"documentation\":null,\"id\":92,\"implemented\":true,\"kind\":\"constructor\",\"modifiers\":[],\"name\":\"\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":82,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"250:2:2\"},\"returnParameters\":{\"id\":83,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"260:0:2\"},\"scope\":339,\"src\":\"239:54:2\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":101,\"nodeType\":\"Block\",\"src\":\"318:76:2\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"arguments\":[],\"expression\":{\"argumentTypes\":[],\"id\":95,\"name\":\"isOwner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":113,\"src\":\"334:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_view$__$returns$_t_bool_$\",\"typeString\":\"function () view returns (bool)\"}},\"id\":96,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"334:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},{\"argumentTypes\":null,\"hexValue\":\"4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572\",\"id\":97,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"345:34:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe\",\"typeString\":\"literal_string \\\"Ownable: caller is not the owner\\\"\"},\"value\":\"Ownable: caller is not the owner\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},{\"typeIdentifier\":\"t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe\",\"typeString\":\"literal_string \\\"Ownable: caller is not the owner\\\"\"}],\"id\":94,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[484,485],\"referencedDeclaration\":485,\"src\":\"326:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$\",\"typeString\":\"function (bool,string memory) pure\"}},\"id\":98,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"326:54:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":99,\"nodeType\":\"ExpressionStatement\",\"src\":\"326:54:2\"},{\"id\":100,\"nodeType\":\"PlaceholderStatement\",\"src\":\"388:1:2\"}]},\"documentation\":null,\"id\":102,\"name\":\"onlyOwner\",\"nodeType\":\"ModifierDefinition\",\"parameters\":{\"id\":93,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"315:2:2\"},\"src\":\"297:97:2\",\"visibility\":\"internal\"},{\"body\":{\"id\":112,\"nodeType\":\"Block\",\"src\":\"444:49:2\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":108,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":481,\"src\":\"477:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":109,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"477:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}],\"id\":107,\"name\":\"isOwnerForAddress\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":154,\"src\":\"459:17:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_view$_t_address_$returns$_t_bool_$\",\"typeString\":\"function (address) view returns (bool)\"}},\"id\":110,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"459:29:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"functionReturnParameters\":106,\"id\":111,\"nodeType\":\"Return\",\"src\":\"452:36:2\"}]},\"documentation\":null,\"id\":113,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"isOwner\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":103,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"414:2:2\"},\"returnParameters\":{\"id\":106,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":105,\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":113,\"src\":\"438:4:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":104,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"438:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"437:6:2\"},\"scope\":339,\"src\":\"398:95:2\",\"stateMutability\":\"view\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":153,\"nodeType\":\"Block\",\"src\":\"565:212:2\",\"statements\":[{\"condition\":{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"id\":124,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"id\":120,\"name\":\"addr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"577:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"hexValue\":\"30\",\"id\":122,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"593:1:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"}],\"id\":121,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"nodeType\":\"ElementaryTypeNameExpression\",\"src\":\"585:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_type$_t_address_$\",\"typeString\":\"type(address)\"},\"typeName\":\"address\"},\"id\":123,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"typeConversion\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"585:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"src\":\"577:18:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"falseBody\":null,\"id\":128,\"nodeType\":\"IfStatement\",\"src\":\"573:55:2\",\"trueBody\":{\"id\":127,\"nodeType\":\"Block\",\"src\":\"597:31:2\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"hexValue\":\"66616c7365\",\"id\":125,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"614:5:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"false\"},\"functionReturnParameters\":119,\"id\":126,\"nodeType\":\"Return\",\"src\":\"607:12:2\"}]}},{\"body\":{\"id\":149,\"nodeType\":\"Block\",\"src\":\"677:76:2\",\"statements\":[{\"condition\":{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"id\":144,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"id\":140,\"name\":\"addr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":115,\"src\":\"691:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":141,\"name\":\"_owners\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":81,\"src\":\"699:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$4_storage\",\"typeString\":\"address[4] storage ref\"}},\"id\":143,\"indexExpression\":{\"argumentTypes\":null,\"id\":142,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":130,\"src\":\"707:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"699:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"src\":\"691:18:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"falseBody\":null,\"id\":148,\"nodeType\":\"IfStatement\",\"src\":\"687:58:2\",\"trueBody\":{\"id\":147,\"nodeType\":\"Block\",\"src\":\"711:34:2\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"hexValue\":\"74727565\",\"id\":145,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"730:4:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"functionReturnParameters\":119,\"id\":146,\"nodeType\":\"Return\",\"src\":\"723:11:2\"}]}}]},\"condition\":{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":136,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"id\":133,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":130,\"src\":\"652:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"<\",\"rightExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":134,\"name\":\"_owners\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":81,\"src\":\"656:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$4_storage\",\"typeString\":\"address[4] storage ref\"}},\"id\":135,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"656:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"652:18:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":150,\"initializationExpression\":{\"assignments\":[130],\"declarations\":[{\"constant\":false,\"id\":130,\"name\":\"i\",\"nodeType\":\"VariableDeclaration\",\"scope\":150,\"src\":\"640:6:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":129,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"640:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"id\":132,\"initialValue\":{\"argumentTypes\":null,\"hexValue\":\"30\",\"id\":131,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"649:1:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"640:10:2\"},\"loopExpression\":{\"expression\":{\"argumentTypes\":null,\"id\":138,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"672:3:2\",\"subExpression\":{\"argumentTypes\":null,\"id\":137,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":130,\"src\":\"672:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":139,\"nodeType\":\"ExpressionStatement\",\"src\":\"672:3:2\"},\"nodeType\":\"ForStatement\",\"src\":\"635:118:2\"},{\"expression\":{\"argumentTypes\":null,\"hexValue\":\"66616c7365\",\"id\":151,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"767:5:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"false\"},\"functionReturnParameters\":119,\"id\":152,\"nodeType\":\"Return\",\"src\":\"760:12:2\"}]},\"documentation\":null,\"id\":154,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"isOwnerForAddress\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":116,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":115,\"name\":\"addr\",\"nodeType\":\"VariableDeclaration\",\"scope\":154,\"src\":\"524:12:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":114,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"524:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"523:14:2\"},\"returnParameters\":{\"id\":119,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":118,\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":154,\"src\":\"559:4:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":117,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"559:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"558:6:2\"},\"scope\":339,\"src\":\"497:280:2\",\"stateMutability\":\"view\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":163,\"nodeType\":\"Block\",\"src\":\"839:25:2\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"id\":161,\"name\":\"_owners\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":81,\"src\":\"852:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$4_storage\",\"typeString\":\"address[4] storage ref\"}},\"functionReturnParameters\":160,\"id\":162,\"nodeType\":\"Return\",\"src\":\"845:14:2\"}]},\"documentation\":null,\"id\":164,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"owners\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":155,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"796:2:2\"},\"returnParameters\":{\"id\":160,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":159,\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":164,\"src\":\"820:17:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$4_memory_ptr\",\"typeString\":\"address[4]\"},\"typeName\":{\"baseType\":{\"id\":156,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"820:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":158,\"length\":{\"argumentTypes\":null,\"hexValue\":\"34\",\"id\":157,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"828:1:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_4_by_1\",\"typeString\":\"int_const 4\"},\"value\":\"4\"},\"nodeType\":\"ArrayTypeName\",\"src\":\"820:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$4_storage_ptr\",\"typeString\":\"address[4]\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"819:19:2\"},\"scope\":339,\"src\":\"781:83:2\",\"stateMutability\":\"view\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":207,\"nodeType\":\"Block\",\"src\":\"929:212:2\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":176,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"id\":174,\"name\":\"index\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":166,\"src\":\"943:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"<\",\"rightExpression\":{\"argumentTypes\":null,\"hexValue\":\"34\",\"id\":175,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"951:1:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_4_by_1\",\"typeString\":\"int_const 4\"},\"value\":\"4\"},\"src\":\"943:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},{\"argumentTypes\":null,\"hexValue\":\"696e76616c696420696e64657821\",\"id\":177,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"954:16:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_c48487ef0ba77ac501272aa9d8209e581d887fafb7c21a277e6583893ca42690\",\"typeString\":\"literal_string \\\"invalid index!\\\"\"},\"value\":\"invalid index!\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},{\"typeIdentifier\":\"t_stringliteral_c48487ef0ba77ac501272aa9d8209e581d887fafb7c21a277e6583893ca42690\",\"typeString\":\"literal_string \\\"invalid index!\\\"\"}],\"id\":173,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[484,485],\"referencedDeclaration\":485,\"src\":\"935:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$\",\"typeString\":\"function (bool,string memory) pure\"}},\"id\":178,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"935:36:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":179,\"nodeType\":\"ExpressionStatement\",\"src\":\"935:36:2\"},{\"assignments\":[181],\"declarations\":[{\"constant\":false,\"id\":181,\"name\":\"oldAddr\",\"nodeType\":\"VariableDeclaration\",\"scope\":207,\"src\":\"977:15:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":180,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"977:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"id\":185,\"initialValue\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":182,\"name\":\"_owners\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":81,\"src\":\"995:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$4_storage\",\"typeString\":\"address[4] storage ref\"}},\"id\":184,\"indexExpression\":{\"argumentTypes\":null,\"id\":183,\"name\":\"index\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":166,\"src\":\"1003:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"995:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"977:32:2\"},{\"expression\":{\"argumentTypes\":null,\"id\":190,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":186,\"name\":\"_owners\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":81,\"src\":\"1015:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$4_storage\",\"typeString\":\"address[4] storage ref\"}},\"id\":188,\"indexExpression\":{\"argumentTypes\":null,\"id\":187,\"name\":\"index\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":166,\"src\":\"1023:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"1015:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"id\":189,\"name\":\"addr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":168,\"src\":\"1032:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"src\":\"1015:21:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":191,\"nodeType\":\"ExpressionStatement\",\"src\":\"1015:21:2\"},{\"condition\":{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"id\":196,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"id\":192,\"name\":\"oldAddr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":181,\"src\":\"1046:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"!=\",\"rightExpression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"hexValue\":\"30\",\"id\":194,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1065:1:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"}],\"id\":193,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"nodeType\":\"ElementaryTypeNameExpression\",\"src\":\"1057:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_type$_t_address_$\",\"typeString\":\"type(address)\"},\"typeName\":\"address\"},\"id\":195,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"typeConversion\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1057:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"src\":\"1046:21:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"falseBody\":null,\"id\":202,\"nodeType\":\"IfStatement\",\"src\":\"1042:68:2\",\"trueBody\":{\"id\":201,\"nodeType\":\"Block\",\"src\":\"1069:41:2\",\"statements\":[{\"eventCall\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":198,\"name\":\"oldAddr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":181,\"src\":\"1095:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"id\":197,\"name\":\"OwnerRemoved\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":77,\"src\":\"1082:12:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_address_$returns$__$\",\"typeString\":\"function (address)\"}},\"id\":199,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1082:21:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":200,\"nodeType\":\"EmitStatement\",\"src\":\"1077:26:2\"}]}},{\"eventCall\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":204,\"name\":\"addr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":168,\"src\":\"1131:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"id\":203,\"name\":\"OwnerAdded\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":73,\"src\":\"1120:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_address_$returns$__$\",\"typeString\":\"function (address)\"}},\"id\":205,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1120:16:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":206,\"nodeType\":\"EmitStatement\",\"src\":\"1115:21:2\"}]},\"documentation\":null,\"id\":208,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"arguments\":null,\"id\":171,\"modifierName\":{\"argumentTypes\":null,\"id\":170,\"name\":\"onlyOwner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":102,\"src\":\"919:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"919:9:2\"}],\"name\":\"setOwner\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":169,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":166,\"name\":\"index\",\"nodeType\":\"VariableDeclaration\",\"scope\":208,\"src\":\"886:10:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":165,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"886:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":168,\"name\":\"addr\",\"nodeType\":\"VariableDeclaration\",\"scope\":208,\"src\":\"898:12:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":167,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"898:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"885:26:2\"},\"returnParameters\":{\"id\":172,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"929:0:2\"},\"scope\":339,\"src\":\"868:273:2\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":240,\"nodeType\":\"Block\",\"src\":\"1196:144:2\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":218,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"id\":216,\"name\":\"index\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":210,\"src\":\"1210:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"<\",\"rightExpression\":{\"argumentTypes\":null,\"hexValue\":\"34\",\"id\":217,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1218:1:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_4_by_1\",\"typeString\":\"int_const 4\"},\"value\":\"4\"},\"src\":\"1210:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},{\"argumentTypes\":null,\"hexValue\":\"696e76616c696420696e64657821\",\"id\":219,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1221:16:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_c48487ef0ba77ac501272aa9d8209e581d887fafb7c21a277e6583893ca42690\",\"typeString\":\"literal_string \\\"invalid index!\\\"\"},\"value\":\"invalid index!\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},{\"typeIdentifier\":\"t_stringliteral_c48487ef0ba77ac501272aa9d8209e581d887fafb7c21a277e6583893ca42690\",\"typeString\":\"literal_string \\\"invalid index!\\\"\"}],\"id\":215,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[484,485],\"referencedDeclaration\":485,\"src\":\"1202:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$\",\"typeString\":\"function (bool,string memory) pure\"}},\"id\":220,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1202:36:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":221,\"nodeType\":\"ExpressionStatement\",\"src\":\"1202:36:2\"},{\"assignments\":[223],\"declarations\":[{\"constant\":false,\"id\":223,\"name\":\"addr\",\"nodeType\":\"VariableDeclaration\",\"scope\":240,\"src\":\"1244:12:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":222,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1244:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"id\":227,\"initialValue\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":224,\"name\":\"_owners\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":81,\"src\":\"1259:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$4_storage\",\"typeString\":\"address[4] storage ref\"}},\"id\":226,\"indexExpression\":{\"argumentTypes\":null,\"id\":225,\"name\":\"index\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":210,\"src\":\"1267:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1259:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"1244:29:2\"},{\"expression\":{\"argumentTypes\":null,\"id\":234,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":228,\"name\":\"_owners\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":81,\"src\":\"1279:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$4_storage\",\"typeString\":\"address[4] storage ref\"}},\"id\":230,\"indexExpression\":{\"argumentTypes\":null,\"id\":229,\"name\":\"index\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":210,\"src\":\"1287:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"1279:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"hexValue\":\"30\",\"id\":232,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1304:1:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"}],\"id\":231,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"nodeType\":\"ElementaryTypeNameExpression\",\"src\":\"1296:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_type$_t_address_$\",\"typeString\":\"type(address)\"},\"typeName\":\"address\"},\"id\":233,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"typeConversion\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1296:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"src\":\"1279:27:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":235,\"nodeType\":\"ExpressionStatement\",\"src\":\"1279:27:2\"},{\"eventCall\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":237,\"name\":\"addr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":223,\"src\":\"1330:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"id\":236,\"name\":\"OwnerRemoved\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":77,\"src\":\"1317:12:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_address_$returns$__$\",\"typeString\":\"function (address)\"}},\"id\":238,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1317:18:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":239,\"nodeType\":\"EmitStatement\",\"src\":\"1312:23:2\"}]},\"documentation\":null,\"id\":241,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"arguments\":null,\"id\":213,\"modifierName\":{\"argumentTypes\":null,\"id\":212,\"name\":\"onlyOwner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":102,\"src\":\"1186:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"1186:9:2\"}],\"name\":\"removeOwner\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":211,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":210,\"name\":\"index\",\"nodeType\":\"VariableDeclaration\",\"scope\":241,\"src\":\"1167:10:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":209,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1167:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1166:12:2\"},\"returnParameters\":{\"id\":214,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1196:0:2\"},\"scope\":339,\"src\":\"1146:194:2\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":297,\"nodeType\":\"Block\",\"src\":\"1468:282:2\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":261,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":257,\"name\":\"receiver\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":246,\"src\":\"1482:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[] memory\"}},\"id\":258,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1482:15:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":259,\"name\":\"amounts\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":249,\"src\":\"1501:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint256_$dyn_memory_ptr\",\"typeString\":\"uint256[] memory\"}},\"id\":260,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1501:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"1482:33:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},{\"argumentTypes\":null,\"hexValue\":\"57616c6c65426f743a20616464726573732073686f756c64206d6174636820616d6f756e7473\",\"id\":262,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1517:40:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_8fe3218e3b005acf2b20ec5a03fdeff9a043fbc8bb9db0e084368890706118b4\",\"typeString\":\"literal_string \\\"WalleBot: address should match amounts\\\"\"},\"value\":\"WalleBot: address should match amounts\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},{\"typeIdentifier\":\"t_stringliteral_8fe3218e3b005acf2b20ec5a03fdeff9a043fbc8bb9db0e084368890706118b4\",\"typeString\":\"literal_string \\\"WalleBot: address should match amounts\\\"\"}],\"id\":256,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[484,485],\"referencedDeclaration\":485,\"src\":\"1474:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$\",\"typeString\":\"function (bool,string memory) pure\"}},\"id\":263,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1474:84:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":264,\"nodeType\":\"ExpressionStatement\",\"src\":\"1474:84:2\"},{\"body\":{\"id\":289,\"nodeType\":\"Block\",\"src\":\"1607:92:2\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":279,\"name\":\"receiver\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":246,\"src\":\"1638:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[] memory\"}},\"id\":281,\"indexExpression\":{\"argumentTypes\":null,\"id\":280,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":266,\"src\":\"1647:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1638:11:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":282,\"name\":\"amounts\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":249,\"src\":\"1651:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint256_$dyn_memory_ptr\",\"typeString\":\"uint256[] memory\"}},\"id\":284,\"indexExpression\":{\"argumentTypes\":null,\"id\":283,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":266,\"src\":\"1659:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1651:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"expression\":{\"argumentTypes\":null,\"id\":277,\"name\":\"token\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":243,\"src\":\"1623:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$466\",\"typeString\":\"contract IERC20\"}},\"id\":278,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"transfer\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":420,\"src\":\"1623:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$\",\"typeString\":\"function (address,uint256) external returns (bool)\"}},\"id\":285,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1623:39:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},{\"argumentTypes\":null,\"hexValue\":\"57616c6c65426f743a207472616e73666572206661696c6564\",\"id\":286,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1664:27:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_10c5f4931e420a2b3b8341c9b2d6ba892ba5612386b63e5e2793d4fccccd6716\",\"typeString\":\"literal_string \\\"WalleBot: transfer failed\\\"\"},\"value\":\"WalleBot: transfer failed\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},{\"typeIdentifier\":\"t_stringliteral_10c5f4931e420a2b3b8341c9b2d6ba892ba5612386b63e5e2793d4fccccd6716\",\"typeString\":\"literal_string \\\"WalleBot: transfer failed\\\"\"}],\"id\":276,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[484,485],\"referencedDeclaration\":485,\"src\":\"1615:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$\",\"typeString\":\"function (bool,string memory) pure\"}},\"id\":287,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1615:77:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":288,\"nodeType\":\"ExpressionStatement\",\"src\":\"1615:77:2\"}]},\"condition\":{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":272,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"id\":269,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":266,\"src\":\"1581:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"<\",\"rightExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":270,\"name\":\"receiver\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":246,\"src\":\"1585:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[] memory\"}},\"id\":271,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1585:15:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"1581:19:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":290,\"initializationExpression\":{\"assignments\":[266],\"declarations\":[{\"constant\":false,\"id\":266,\"name\":\"i\",\"nodeType\":\"VariableDeclaration\",\"scope\":290,\"src\":\"1569:6:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":265,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1569:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"id\":268,\"initialValue\":{\"argumentTypes\":null,\"hexValue\":\"30\",\"id\":267,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1578:1:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"1569:10:2\"},\"loopExpression\":{\"expression\":{\"argumentTypes\":null,\"id\":274,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"1602:3:2\",\"subExpression\":{\"argumentTypes\":null,\"id\":273,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":266,\"src\":\"1602:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":275,\"nodeType\":\"ExpressionStatement\",\"src\":\"1602:3:2\"},\"nodeType\":\"ForStatement\",\"src\":\"1564:135:2\"},{\"eventCall\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":292,\"name\":\"token\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":243,\"src\":\"1725:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$466\",\"typeString\":\"contract IERC20\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_contract$_IERC20_$466\",\"typeString\":\"contract IERC20\"}],\"id\":291,\"name\":\"TransferSuccess\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":69,\"src\":\"1709:15:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_contract$_IERC20_$466_$returns$__$\",\"typeString\":\"function (contract IERC20)\"}},\"id\":293,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1709:22:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":294,\"nodeType\":\"EmitStatement\",\"src\":\"1704:27:2\"},{\"expression\":{\"argumentTypes\":null,\"hexValue\":\"74727565\",\"id\":295,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1742:4:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"functionReturnParameters\":255,\"id\":296,\"nodeType\":\"Return\",\"src\":\"1735:11:2\"}]},\"documentation\":null,\"id\":298,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"arguments\":null,\"id\":252,\"modifierName\":{\"argumentTypes\":null,\"id\":251,\"name\":\"onlyOwner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":102,\"src\":\"1433:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"1433:9:2\"}],\"name\":\"batchSend\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":250,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":243,\"name\":\"token\",\"nodeType\":\"VariableDeclaration\",\"scope\":298,\"src\":\"1362:12:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$466\",\"typeString\":\"contract IERC20\"},\"typeName\":{\"contractScope\":null,\"id\":242,\"name\":\"IERC20\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":466,\"src\":\"1362:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$466\",\"typeString\":\"contract IERC20\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":246,\"name\":\"receiver\",\"nodeType\":\"VariableDeclaration\",\"scope\":298,\"src\":\"1376:25:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":244,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1376:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":245,\"length\":null,\"nodeType\":\"ArrayTypeName\",\"src\":\"1376:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":249,\"name\":\"amounts\",\"nodeType\":\"VariableDeclaration\",\"scope\":298,\"src\":\"1403:21:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint256_$dyn_memory_ptr\",\"typeString\":\"uint256[]\"},\"typeName\":{\"baseType\":{\"id\":247,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1403:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":248,\"length\":null,\"nodeType\":\"ArrayTypeName\",\"src\":\"1403:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint256_$dyn_storage_ptr\",\"typeString\":\"uint256[]\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1361:64:2\"},\"returnParameters\":{\"id\":255,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":254,\"name\":\"sufficient\",\"nodeType\":\"VariableDeclaration\",\"scope\":298,\"src\":\"1451:15:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":253,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1451:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1450:17:2\"},\"scope\":339,\"src\":\"1343:407:2\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":312,\"nodeType\":\"Block\",\"src\":\"1813:45:2\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":308,\"name\":\"this\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":503,\"src\":\"1848:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_WalleBot_$339\",\"typeString\":\"contract WalleBot\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_contract$_WalleBot_$339\",\"typeString\":\"contract WalleBot\"}],\"id\":307,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"nodeType\":\"ElementaryTypeNameExpression\",\"src\":\"1840:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_type$_t_address_$\",\"typeString\":\"type(address)\"},\"typeName\":\"address\"},\"id\":309,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"typeConversion\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1840:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"expression\":{\"argumentTypes\":null,\"id\":305,\"name\":\"token\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":300,\"src\":\"1824:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$466\",\"typeString\":\"contract IERC20\"}},\"id\":306,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"balanceOf\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":411,\"src\":\"1824:15:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_external_view$_t_address_$returns$_t_uint256_$\",\"typeString\":\"function (address) view external returns (uint256)\"}},\"id\":310,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1824:30:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"functionReturnParameters\":304,\"id\":311,\"nodeType\":\"Return\",\"src\":\"1817:37:2\"}]},\"documentation\":null,\"id\":313,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getBalance\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":301,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":300,\"name\":\"token\",\"nodeType\":\"VariableDeclaration\",\"scope\":313,\"src\":\"1773:12:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$466\",\"typeString\":\"contract IERC20\"},\"typeName\":{\"contractScope\":null,\"id\":299,\"name\":\"IERC20\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":466,\"src\":\"1773:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$466\",\"typeString\":\"contract IERC20\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1772:14:2\"},\"returnParameters\":{\"id\":304,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":303,\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":313,\"src\":\"1807:4:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":302,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1807:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1806:6:2\"},\"scope\":339,\"src\":\"1753:105:2\",\"stateMutability\":\"view\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":337,\"nodeType\":\"Block\",\"src\":\"1926:86:2\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":325,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":481,\"src\":\"1947:3:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":326,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1947:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":330,\"name\":\"this\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":503,\"src\":\"1983:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_WalleBot_$339\",\"typeString\":\"contract WalleBot\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_contract$_WalleBot_$339\",\"typeString\":\"contract WalleBot\"}],\"id\":329,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"nodeType\":\"ElementaryTypeNameExpression\",\"src\":\"1975:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_type$_t_address_$\",\"typeString\":\"type(address)\"},\"typeName\":\"address\"},\"id\":331,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"typeConversion\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1975:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"expression\":{\"argumentTypes\":null,\"id\":327,\"name\":\"token\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":315,\"src\":\"1959:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$466\",\"typeString\":\"contract IERC20\"}},\"id\":328,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"balanceOf\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":411,\"src\":\"1959:15:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_external_view$_t_address_$returns$_t_uint256_$\",\"typeString\":\"function (address) view external returns (uint256)\"}},\"id\":332,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1959:30:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"expression\":{\"argumentTypes\":null,\"id\":322,\"name\":\"token\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":315,\"src\":\"1932:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$466\",\"typeString\":\"contract IERC20\"}},\"id\":324,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"transfer\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":420,\"src\":\"1932:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$\",\"typeString\":\"function (address,uint256) external returns (bool)\"}},\"id\":333,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1932:58:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":334,\"nodeType\":\"ExpressionStatement\",\"src\":\"1932:58:2\"},{\"expression\":{\"argumentTypes\":null,\"hexValue\":\"74727565\",\"id\":335,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2003:4:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"functionReturnParameters\":321,\"id\":336,\"nodeType\":\"Return\",\"src\":\"1996:11:2\"}]},\"documentation\":null,\"id\":338,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"arguments\":null,\"id\":318,\"modifierName\":{\"argumentTypes\":null,\"id\":317,\"name\":\"onlyOwner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":102,\"src\":\"1901:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"1901:9:2\"}],\"name\":\"withdraw\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":316,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":315,\"name\":\"token\",\"nodeType\":\"VariableDeclaration\",\"scope\":338,\"src\":\"1880:12:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$466\",\"typeString\":\"contract IERC20\"},\"typeName\":{\"contractScope\":null,\"id\":314,\"name\":\"IERC20\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":466,\"src\":\"1880:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$466\",\"typeString\":\"contract IERC20\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1879:14:2\"},\"returnParameters\":{\"id\":321,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":320,\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":338,\"src\":\"1920:4:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":319,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1920:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1919:6:2\"},\"scope\":339,\"src\":\"1862:150:2\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"}],\"scope\":340,\"src\":\"83:1931:2\"}],\"src\":\"0:2015:2\"},\"compiler\":{\"name\":\"solc\",\"version\":\"0.5.16+commit.9c3226ce.Emscripten.clang\"},\"networks\":{\"1\":{\"events\":{\"0x994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c3\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnerAdded\",\"type\":\"event\"},\"0x58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnerRemoved\",\"type\":\"event\"},\"0x3e0a5cf99e7e9bd41080cfe3c715754fbc66f0c0ebee390ee8c3f48824377eae\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"contract IERC20\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"TransferSuccess\",\"type\":\"event\"}},\"links\":{},\"address\":\"0xb964bDcf25dEA43b9Fd0550D4f8b55585A539764\",\"transactionHash\":\"0x6b845fbd4186839de3366d380a2a5908ecbbbe5aa7323cc8f113eda93e76dbdb\"},\"4\":{\"events\":{\"0x994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c3\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnerAdded\",\"type\":\"event\"},\"0x58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnerRemoved\",\"type\":\"event\"},\"0x3e0a5cf99e7e9bd41080cfe3c715754fbc66f0c0ebee390ee8c3f48824377eae\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"contract IERC20\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"TransferSuccess\",\"type\":\"event\"}},\"links\":{},\"address\":\"0xa271626eb4b8c7EeFE594476576424F6224f37a9\",\"transactionHash\":\"0x778620dcf9a491f908a350eac38fce0dd94f8f4a1cc0d7544d0de2299dfbf0a9\"}},\"schemaVersion\":\"3.2.4\",\"updatedAt\":\"2020-11-27T08:43:38.107Z\",\"networkType\":\"ethereum\",\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}}");
      /***/
    },

    /***/
    4:
    /*!************************!*\
      !*** buffer (ignored) ***!
      \************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "4O/x":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/meta/meta-sender/meta-sender.component.html ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n  <mat-card class=\"settings\">\n    <mat-card-title>\n      转账设置\n      <button *ngIf=\"isMainnet(); else testNet\" mat-button color=\"warn\">主网</button>\n      <ng-template #testNet>\n        <button mat-button color=\"primary\">测试网</button>\n      </ng-template>\n    </mat-card-title>\n    <mat-card-content>\n      <mat-form-field appearance=\"fill\" class=\"address-field\">\n        <mat-label>批量转账合约地址</mat-label>\n        <input matInput [value]=\"transAddress\">\n      </mat-form-field>\n      <mat-form-field id=\"address-selector\" class=\"address-field\">\n        <mat-select name=\"account\" (selectionChange)=\"refreshBalance()\" [(value)]=\"model.account\" placeholder=\"账号\">\n          <mat-option *ngFor=\"let account of accounts\" [value]=\"account\">{{account}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <button mat-button color=\"primary\" *ngIf=\"!isOwner() && model.account\">注意: 当前账号非管理账号</button>\n      <br>\n      <mat-form-field class=\"token-field\">\n        <input type=\"text\"\n          placeholder=\"选择ERC20代币\"\n          aria-label=\"Token\"\n          matInput\n          [formControl]=\"tokenControl\"\n          [matAutocomplete]=\"auto\">\n        <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\"\n          [displayWith]=\"displayTokenFn\"\n          (optionSelected)=\"selectedToken($event)\"\n        >\n          <mat-option *ngFor=\"let token of filteredTokens | async\" [value]=\"token\">\n            {{displayTokenFn(token)}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button color=\"accent\" *ngIf=\"tokenInfo\">\n        {{tokenInfo.name}}\n      </button>\n      <button mat-button color=\"primary\" *ngIf=\"tokenInfo\">\n        合约余额:\n        {{tokenInfo?.balance | balance: tokenInfo?.decimals }} {{tokenInfo?.symbol}}\n      </button>\n    </mat-card-actions>\n  </mat-card>\n  <mat-card *ngIf=\"!tokenInfo\" class=\"placeholder\">\n    请在左侧设置代币信息\n  </mat-card>\n  <mat-card *ngIf=\"tokenInfo\" class=\"details\">\n    <mat-card-content class=\"send-form\">\n      <ngx-file-drop dropZoneLabel=\"拖动地址列表文件到这里\"\n        *ngIf=\"!fileName\"\n        accept=\".csv\"\n        (onFileDrop)=\"dropped($event)\" [multiple]=\"false\">\n        <ng-template ngx-file-drop-content-tmp let-openFileSelector=\"openFileSelector\">\n          拖动地址列表文件(CSV格式)到这里\n          <button type=\"button\" (click)=\"openFileSelector()\">选择文件</button>\n        </ng-template>\n      </ngx-file-drop>\n      <mat-toolbar *ngIf=\"fileName\">\n        <mat-toolbar-row>\n          <span>发送代币({{fileName}})  共{{this.addresses.length}}条, 合计{{getTotalAmount()}} {{tokenInfo?.symbol}}</span>\n          <span class=\"example-spacer\"></span>\n          <button mat-icon-button class=\"example-icon select-icon\" aria-label=\"select\" (click)=\"selectFile()\">\n            <mat-icon>refresh</mat-icon>\n          </button>\n          <button mat-icon-button class=\"example-icon send-icon\" color=\"accent\" aria-label=\"发送\" (click)=\"doTransfer()\">\n            <mat-icon>send</mat-icon>\n          </button>\n        </mat-toolbar-row>\n      </mat-toolbar>\n      <table *ngIf=\"fileName\" mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 account-table\">\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef> 姓名 </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"address\">\n          <th mat-header-cell *matHeaderCellDef> 地址</th>\n          <td mat-cell *matCellDef=\"let element\" [class.invalid-address]=\"!isAddressValid(element.address)\"> {{element.address}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"operations\">\n          <th mat-header-cell *matHeaderCellDef> 操作</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <button mat-icon-button class=\"delete-button\" (click)=\"deleteItem(element)\">\n              <mat-icon>delete</mat-icon>\n            </button>\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"amount\">\n          <th mat-header-cell *matHeaderCellDef> 数额 </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.amount}} </td>\n        </ng-container>\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n      <mat-paginator\n        [class.hidden]=\"addresses.length === 0\"\n        [pageSize]=\"10\"\n        [pageSizeOptions]=\"[5, 10, 20]\"\n        showFirstLastButtons></mat-paginator>\n    </mat-card-content>\n  </mat-card>\n</div>\n";
      /***/
    },

    /***/
    5:
    /*!**********************!*\
      !*** util (ignored) ***!
      \**********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "5M1D":
    /*!*************************************!*\
      !*** ./src/app/util/util.module.ts ***!
      \*************************************/

    /*! exports provided: UtilModule */

    /***/
    function M1D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilModule", function () {
        return UtilModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _web3_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./web3.service */
      "BA8M");

      var UtilModule = function UtilModule() {
        _classCallCheck(this, UtilModule);
      };

      UtilModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        providers: [_web3_service__WEBPACK_IMPORTED_MODULE_3__["Web3Service"]],
        declarations: []
      })], UtilModule);
      /***/
    },

    /***/
    6:
    /*!**********************!*\
      !*** util (ignored) ***!
      \**********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    7:
    /*!************************!*\
      !*** crypto (ignored) ***!
      \************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    8:
    /*!************************!*\
      !*** buffer (ignored) ***!
      \************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    9:
    /*!*********************************!*\
      !*** readable-stream (ignored) ***!
      \*********************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n.example-spacer {\n  flex: 1 1 auto;\n}\n\n.spinner {\n  margin-left: 1em;\n}\n\n.tx-details {\n  display: flex;\n  flex-direction: row;\n  line-height: 1em;\n}\n\n.tx-details-wrapper {\n  line-height: 1em;\n}\n\n.pending-tx {\n  display: inline-block;\n  width: 120px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLnNwaW5uZXIge1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuXG4udHgtZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG59XG5cbi50eC1kZXRhaWxzLXdyYXBwZXIge1xuICBsaW5lLWhlaWdodDogMWVtO1xufVxuXG4ucGVuZGluZy10eCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEyMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "AluN":
    /*!**************************************!*\
      !*** ./src/app/meta/balance.pipe.ts ***!
      \**************************************/

    /*! exports provided: BalancePipe */

    /***/
    function AluN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BalancePipe", function () {
        return BalancePipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BN = __webpack_require__(
      /*! bignumber.js */
      "kB5k");

      var BalancePipe = /*#__PURE__*/function () {
        function BalancePipe() {
          _classCallCheck(this, BalancePipe);
        }

        _createClass(BalancePipe, [{
          key: "transform",
          value: function transform(v) {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }

            var decimals = args[0];
            decimals = decimals || 18;
            var value = new BN(v);
            decimals = decimals || 18;
            return value.div(new BN(10).pow(decimals)).toString();
          }
        }]);

        return BalancePipe;
      }();

      BalancePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'balance'
      })], BalancePipe);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var environment = {
        production: false
      };
      /***/
    },

    /***/
    "BA8M":
    /*!**************************************!*\
      !*** ./src/app/util/web3.service.ts ***!
      \**************************************/

    /*! exports provided: Web3Service */

    /***/
    function BA8M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Web3Service", function () {
        return Web3Service;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var Web3 = __webpack_require__(
      /*! web3 */
      "meUc");

      var contract = __webpack_require__(
      /*! @truffle/contract */
      "sjkk");

      var Web3Service = /*#__PURE__*/function () {
        function Web3Service() {
          var _this5 = this;

          _classCallCheck(this, Web3Service);

          this.ready = false;
          this.accountsObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          window.addEventListener('load', function (event) {
            _this5.bootstrapWeb3();
          });
          this.chainIdObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(500, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            return _this5.chainId();
          }, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"]));
        }

        _createClass(Web3Service, [{
          key: "bootstrapWeb3",
          value: function bootstrapWeb3() {
            var _this6 = this;

            // Checking if Web3 has been injected by the browser (Mist/MetaMask)
            if (typeof window.ethereum !== 'undefined') {
              // Use Mist/MetaMask's provider
              window.ethereum.enable().then(function () {
                _this6.web3 = new Web3(window.ethereum);
              });
            } else {
              console.log('No web3? You should consider trying MetaMask!'); // Hack to provide backwards compatibility for Truffle, which uses web3js 0.20.x

              Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send; // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)

              this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
            }

            setInterval(function () {
              return _this6.refreshAccounts();
            }, 1000);
          }
        }, {
          key: "artifactsToContract",
          value: function artifactsToContract(artifacts) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var delay, contractAbstraction;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (this.web3) {
                        _context.next = 7;
                        break;
                      }

                      delay = new Promise(function (resolve) {
                        return setTimeout(resolve, 100);
                      });
                      _context.next = 4;
                      return delay;

                    case 4:
                      _context.next = 6;
                      return this.artifactsToContract(artifacts);

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                      contractAbstraction = contract(artifacts);
                      contractAbstraction.setProvider(this.web3.currentProvider);
                      return _context.abrupt("return", contractAbstraction);

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "refreshAccounts",
          value: function refreshAccounts() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var accs;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.web3.eth.getAccounts();

                    case 2:
                      accs = _context2.sent;

                      if (!(accs.length === 0)) {
                        _context2.next = 6;
                        break;
                      }

                      console.warn('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
                      return _context2.abrupt("return");

                    case 6:
                      if (!this.accounts || this.accounts.length !== accs.length || this.accounts[0] !== accs[0]) {
                        console.log('Observed new accounts');
                        this.accountsObservable.next(accs);
                        this.accounts = accs;
                      }

                      this.ready = true;

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "chainId",
          value: function chainId() {
            return lodash__WEBPACK_IMPORTED_MODULE_3__["chain"](this.web3).get('currentProvider.chainId', '0').parseInt().value();
          }
        }, {
          key: "getChainIdObs",
          value: function getChainIdObs() {
            return this.chainIdObs;
          }
        }, {
          key: "tokenContract",
          value: function tokenContract(abi, address) {
            return new this.web3.eth.Contract(abi, address);
          }
        }, {
          key: "isAddress",
          value: function isAddress(addr) {
            return this.web3.utils.isAddress(addr);
          }
        }]);

        return Web3Service;
      }();

      Web3Service.ctorParameters = function () {
        return [];
      };

      Web3Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], Web3Service);
      /***/
    },

    /***/
    "G2lx":
    /*!*************************************!*\
      !*** ./src/app/meta/meta.module.ts ***!
      \*************************************/

    /*! exports provided: MetaModule */

    /***/
    function G2lx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MetaModule", function () {
        return MetaModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _meta_sender_meta_sender_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./meta-sender/meta-sender.component */
      "l+Sr");
      /* harmony import */


      var _util_util_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../util/util.module */
      "5M1D");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-file-drop */
      "gfTr");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/badge */
      "TU8p");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _balance_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./balance.pipe */
      "AluN"); // material.module.ts


      var MetaModule = function MetaModule() {
        _classCallCheck(this, MetaModule);
      };

      MetaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__["NgxFileDropModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _util_util_module__WEBPACK_IMPORTED_MODULE_5__["UtilModule"]],
        declarations: [_meta_sender_meta_sender_component__WEBPACK_IMPORTED_MODULE_4__["MetaSenderComponent"], _balance_pipe__WEBPACK_IMPORTED_MODULE_23__["BalancePipe"]],
        exports: [_meta_sender_meta_sender_component__WEBPACK_IMPORTED_MODULE_4__["MetaSenderComponent"]]
      })], MetaModule);
      /***/
    },

    /***/
    "MhnT":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MhnT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-toolbar color=\"primary\" class=\"toolbar\">\n  <button mat-button class=\"example-icon\">\n    批量转账工具\n  </button>\n  <span class=\"example-spacer\"></span>\n  <div class=\"tx-details\">\n    <div class=\"tx-details-wrapper\" *ngIf=\"pendingTx()\">\n      <mat-icon aria-hidden=\"false\" aria-label=\"Pending Transaction\">loop</mat-icon>\n      <span class=\"pending-tx\" [matTooltip]=\"pendingTx()\">{{pendingTx()}}</span>\n    </div>\n    <mat-progress-spinner\n      *ngIf=\"isLoading()\"\n      class=\"spinner\"\n      color=\"warn\"\n      diameter=\"20\"\n      mode=\"indeterminate\" >\n    </mat-progress-spinner>\n\n  </div>\n</mat-toolbar>\n<app-meta-sender></app-meta-sender>\n";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "MhnT");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var app_meta_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/meta/loading.service */
      "1Qqu");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(loadingService) {
          _classCallCheck(this, AppComponent);

          this.loadingService = loadingService;
          this.title = 'app works!';
        }

        _createClass(AppComponent, [{
          key: "isLoading",
          value: function isLoading() {
            return this.loadingService.isLoading();
          }
        }, {
          key: "pendingTx",
          value: function pendingTx() {
            return this.loadingService.getTx();
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: app_meta_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [app_meta_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]])], AppComponent);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _meta_meta_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./meta/meta.module */
      "G2lx");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c"); // material.module.ts


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _meta_meta_module__WEBPACK_IMPORTED_MODULE_6__["MetaModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "gz4i":
    /*!*************************************************************!*\
      !*** ./src/app/meta/meta-sender/meta-sender.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function gz4i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n\n.settings {\n  max-width: 420px;\n  flex: 1;\n}\n\n.details {\n  flex: 3;\n}\n\n.address-field {\n  width: 400px;\n}\n\n.token-field {\n  width: 400px;\n}\n\n.send-form {\n  min-width: 600px;\n}\n\n.account-table {\n  width: 100%;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n\n.hidden {\n  display: none;\n}\n\n.invalid-address {\n  color: red;\n}\n\n.placeholder {\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 300px;\n  flex: 3;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWV0YS9tZXRhLXNlbmRlci9tZXRhLXNlbmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztBQUFiOztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLE9BQU87QUFBVDs7QUFHQTtFQUNFLE9BQU87QUFBVDs7QUFHQTtFQUNFLFlBQVk7QUFBZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFNQTtFQUNFLGdCQUFnQjtBQUhsQjs7QUFNQTtFQUNFLFdBQVc7QUFIYjs7QUFNQTtFQUNFLGNBQWM7QUFIaEI7O0FBTUE7RUFDRSxhQUFhO0FBSGY7O0FBTUE7RUFDRSxVQUFVO0FBSFo7O0FBTUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLFNBQVM7RUFDVCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsT0FBTztBQUhUIiwiZmlsZSI6InNyYy9hcHAvbWV0YS9tZXRhLXNlbmRlci9tZXRhLXNlbmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2V0dGluZ3Mge1xuICBtYXgtd2lkdGg6IDQyMHB4O1xuICBmbGV4OiAxO1xufVxuXG4uZGV0YWlscyB7XG4gIGZsZXg6IDM7XG59XG5cbi5hZGRyZXNzLWZpZWxkIHtcbiAgd2lkdGg6IDQwMHB4O1xufVxuLnRva2VuLWZpZWxkIHtcbiAgd2lkdGg6IDQwMHB4O1xufVxuXG5cbi50ZXN0bmV0LWxhYmVsIHtcbn1cblxuLnNlbmQtZm9ybSB7XG4gIG1pbi13aWR0aDogNjAwcHg7XG59XG5cbi5hY2NvdW50LXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmludmFsaWQtYWRkcmVzcyB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5wbGFjZWhvbGRlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIGZsZXg6IDM7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "l+Sr":
    /*!***********************************************************!*\
      !*** ./src/app/meta/meta-sender/meta-sender.component.ts ***!
      \***********************************************************/

    /*! exports provided: MetaSenderComponent */

    /***/
    function lSr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MetaSenderComponent", function () {
        return MetaSenderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_meta_sender_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./meta-sender.component.html */
      "4O/x");
      /* harmony import */


      var _meta_sender_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./meta-sender.component.scss */
      "gz4i");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var csv_parse_lib_sync__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! csv-parse/lib/sync */
      "huxh");
      /* harmony import */


      var csv_parse_lib_sync__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(csv_parse_lib_sync__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _util_web3_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../util/web3.service */
      "BA8M");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var app_meta_loading_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! app/meta/loading.service */
      "1Qqu");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var BN = __webpack_require__(
      /*! bignumber.js */
      "kB5k");

      var wallebot_artifacts = __webpack_require__(
      /*! ../../../../build/contracts/WalleBot.json */
      "3jEb");

      var erc20_artifacts = __webpack_require__(
      /*! ../../../../build/contracts/TokenImpl.json */
      "3UJ4");

      var predefinedTokens = {
        4: [{
          name: 'CRU',
          address: '0x002f24009df0c1e9215c98cec76f18d8eaf3db0f'
        }, {
          name: 'USDT',
          address: '0xd9ba894e0097f8cc2bbc9d24d308b98e36dc6d02'
        }],
        1: [{
          name: 'CRU',
          address: '0x32a7c02e79c4ea1008dd6564b35f131428673c41'
        }, {
          name: 'CSM',
          address: '0x2620638EDA99F9e7E902Ea24a285456EE9438861'
        }, {
          name: 'CRU18',
          address: '0x655ad6CC3Cf6BDCCaB3fa286CB328F3bce9a3E38'
        }, {
          name: 'USDT',
          address: '0xdac17f958d2ee523a2206206994597c13d831ec7'
        }, {
          name: "USDC",
          address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
        }]
      };
      var emptyTokenArray = [];
      var maxSize = 100 * 1024; // 100kb

      var MetaSenderComponent = /*#__PURE__*/function () {
        function MetaSenderComponent(web3Service, matSnackBar, loadingService) {
          _classCallCheck(this, MetaSenderComponent);

          this.web3Service = web3Service;
          this.matSnackBar = matSnackBar;
          this.loadingService = loadingService;
          this.tokenControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
          this.transAddress = '';
          this.addresses = [];
          this.displayedColumns = ['name', 'address', 'amount', 'operations'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](this.addresses);
          this.dataObservable = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
          this.tokenObservable = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
          this.model = {
            amount: 5,
            receiver: '',
            balance: 0,
            account: '',
            tokenAddress: ''
          };
          this.status = '';
          console.log('Constructor: ' + web3Service);
        }

        _createClass(MetaSenderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            console.log('OnInit: ' + this.web3Service);
            this.watchAccount();
            var obContract = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["from"])(this.loadTransContract());
            var sub = obContract.subscribe(function (data) {
              _this7.ownerAccount = data.owners;
              _this7.transAddress = data.instance.address;
              sub.unsubscribe();
            }, function () {});
            this.filteredTokens = this.tokenControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["combineLatest"])(this.web3Service.getChainIdObs()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["distinctUntilChanged"])(function (_ref, _ref2) {
              var _ref3 = _slicedToArray(_ref, 2),
                  v = _ref3[0],
                  c = _ref3[1];

              var _ref4 = _slicedToArray(_ref2, 2),
                  v2 = _ref4[0],
                  c2 = _ref4[1];

              return v == v2 && c == c2;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function (_ref5) {
              var _ref6 = _slicedToArray(_ref5, 2),
                  value = _ref6[0],
                  chainId = _ref6[1];

              console.log('chainId', chainId);

              _this7.tokenObservable.next({
                name: 'input',
                address: value
              });

              var v = lodash__WEBPACK_IMPORTED_MODULE_5__["lowerCase"](value);
              return lodash__WEBPACK_IMPORTED_MODULE_5__["chain"](_this7.getTokens()).filter(function (token) {
                return lodash__WEBPACK_IMPORTED_MODULE_5__["includes"](lodash__WEBPACK_IMPORTED_MODULE_5__["lowerCase"](token.name), v) || lodash__WEBPACK_IMPORTED_MODULE_5__["includes"](lodash__WEBPACK_IMPORTED_MODULE_5__["lowerCase"](token.address), v);
              }).value();
            }));
            var obToken = this.tokenObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["throttleTime"])(500));
            this.$subToken = obContract.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["combineLatest"])(obToken), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(function (_ref7) {
              var _ref8 = _slicedToArray(_ref7, 2),
                  transferData = _ref8[0],
                  token = _ref8[1];

              _this7.loadingService.addLoading();

              return _this7.loadTokenContractData(transferData, token.address).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
                return _this7.loadingService.removeLoading();
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["catchError"])(function (ex) {
                console.error('error ', ex);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])({
                  status: '加载信息失败'
                });
              }));
            })).subscribe(function (info) {
              console.log('got ', info);

              if (!info) {
                return;
              }

              if (info.status) {
                _this7.setStatus(info.status);

                return;
              }

              var transferData = info.transferData;
              console.log('trans contract', transferData.instance.address);

              if (_this7.$messageSub && _this7.$messageSub !== transferData.sub) {
                _this7.$messageSub.unsubscribe();
              }

              _this7.$messageSub = transferData.sub;
              _this7.batchContract = transferData.instance;
              _this7.tokenInfo = info.info;
            }, function (err) {
              _this7.setStatus('加载代币信息失败');

              console.log('error', err);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var unsub = function unsub(s) {
              if (s) {
                s.unsubscribe();
              }
            };

            unsub(this.$subAccount);
            unsub(this.$subLoadBalance);
            unsub(this.$messageSub);
            unsub(this.$subToken);
            unsub(this.$subFile);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.dataSource.paginator = this.paginator;
          }
        }, {
          key: "watchAccount",
          value: function watchAccount() {
            var _this8 = this;

            this.$subAccount = this.web3Service.accountsObservable.subscribe(function (accounts) {
              _this8.accounts = accounts;
              _this8.model.account = accounts[0];

              _this8.refreshBalance();
            });
          }
        }, {
          key: "setStatus",
          value: function setStatus(status) {
            this.matSnackBar.open(status, null, {
              duration: 3000
            });
          }
        }, {
          key: "sendCoin",
          value: function sendCoin() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var amount, receiver, deployedWalleBot, transaction;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (this.WalleBot) {
                        _context3.next = 3;
                        break;
                      }

                      this.setStatus('WalleBot is not loaded, unable to send transaction');
                      return _context3.abrupt("return");

                    case 3:
                      amount = this.model.amount;
                      receiver = this.model.receiver;
                      console.log('Sending coins' + amount + ' to ' + receiver);
                      this.setStatus('Initiating transaction... (please wait)');
                      _context3.prev = 7;
                      _context3.next = 10;
                      return this.WalleBot.deployed();

                    case 10:
                      deployedWalleBot = _context3.sent;
                      _context3.next = 13;
                      return deployedWalleBot.sendCoin.sendTransaction(receiver, amount, {
                        from: this.model.account
                      });

                    case 13:
                      transaction = _context3.sent;

                      if (!transaction) {
                        this.setStatus('Transaction failed!');
                      } else {
                        this.setStatus('Transaction complete!');
                      }

                      _context3.next = 21;
                      break;

                    case 17:
                      _context3.prev = 17;
                      _context3.t0 = _context3["catch"](7);
                      console.log(_context3.t0);
                      this.setStatus('Error sending coin; see log.');

                    case 21:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[7, 17]]);
            }));
          }
        }, {
          key: "refreshBalance",
          value: function refreshBalance() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (this.tokenInfo) {
                        _context4.next = 2;
                        break;
                      }

                      return _context4.abrupt("return");

                    case 2:
                      console.log('Refreshing balance');
                      this.tokenObservable.next({
                        name: this.tokenInfo.name,
                        address: this.tokenInfo.tokenAddress
                      });

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "setAmount",
          value: function setAmount(e) {
            console.log('Setting amount: ' + e.target.value);
            this.model.amount = e.target.value;
          }
        }, {
          key: "setReceiver",
          value: function setReceiver(e) {
            console.log('Setting receiver: ' + e.target.value);
            this.model.receiver = e.target.value;
          }
        }, {
          key: "isMainnet",
          value: function isMainnet() {
            return this.web3Service.chainId() === 1;
          }
        }, {
          key: "chainId",
          value: function chainId() {
            return this.web3Service.chainId();
          }
        }, {
          key: "isOwner",
          value: function isOwner() {
            var _this9 = this;

            return lodash__WEBPACK_IMPORTED_MODULE_5__["some"](this.ownerAccount, function (acct) {
              return acct === _this9.model.account;
            });
          }
        }, {
          key: "refreshToken",
          value: function refreshToken() {}
        }, {
          key: "displayTokenFn",
          value: function displayTokenFn(token) {
            if (!token) {
              return null;
            }

            return token.name + " (".concat(token.address, ")");
          }
        }, {
          key: "selectedToken",
          value: function selectedToken(event) {
            this.tokenObservable.next(event.option.value);
          }
        }, {
          key: "loadTokenInfo",
          value: function loadTokenInfo(token) {}
        }, {
          key: "loadTokenContractData",
          value: function loadTokenContractData(transferData, tokenAddress) {
            if (!tokenAddress) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])();
            }

            try {
              var contract = this.web3Service.tokenContract(erc20_artifacts.abi, tokenAddress);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["from"])(contract.methods.balanceOf(transferData.instance.address).call()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["zip"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["from"])(contract.methods.name().call()), Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["from"])(contract.methods.symbol().call()), Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["from"])(contract.methods.decimals().call())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function (_ref9) {
                var _ref10 = _slicedToArray(_ref9, 4),
                    balance = _ref10[0],
                    name = _ref10[1],
                    symbol = _ref10[2],
                    decimals = _ref10[3];

                console.log('info: ', balance, name, symbol, decimals);
                return {
                  status: null,
                  transferData: transferData,
                  info: {
                    tokenAddress: tokenAddress,
                    balance: balance,
                    contract: contract,
                    decimals: decimals,
                    name: name,
                    symbol: symbol
                  }
                };
              }));
            } catch (e) {
              console.log('caught', e);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])({
                status: 'invalid contract address'
              });
            }
          }
        }, {
          key: "loadTransContract",
          value: function loadTransContract() {
            var _this10 = this;

            return this.web3Service.artifactsToContract(wallebot_artifacts).then(function (WalleBotAbstraction) {
              var walleBot = WalleBotAbstraction;
              return walleBot.deployed().then(function (deployed) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                  var owners;
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return deployed.owners.call();

                        case 2:
                          owners = _context5.sent;
                          return _context5.abrupt("return", {
                            instance: deployed,
                            owners: owners,
                            sub: null
                          });

                        case 4:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));
              });
            });
          }
        }, {
          key: "dropped",
          value: function dropped(files) {
            var _this11 = this;

            if (!files || files.length === 0 || files.length > 1) {
              this.setStatus('请选择一个CSV文件, 不支持多选');
              return;
            }

            var droppedFile = files[0];

            if (droppedFile.fileEntry.isFile) {
              var fileEntry = droppedFile.fileEntry;
              fileEntry.file(function (file) {
                if (file.size > maxSize) {
                  _this11.setStatus('文件过大');

                  return;
                }

                console.log(droppedFile.relativePath, file);

                _this11.loadFileContent(file);
              });
            } else {
              this.setStatus('请选择一个CSV文件');
            }
          }
        }, {
          key: "loadFileContent",
          value: function loadFileContent(file) {
            var _this12 = this;

            if (this.$subFile) {
              this.$subFile.unsubscribe();
            }

            this.$subFile = this.readFile(file).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function (content) {
              return csv_parse_lib_sync__WEBPACK_IMPORTED_MODULE_6__(content, {
                columns: ['name', 'address', 'amount'],
                skip_empty_lines: true
              });
            })).subscribe(function (rows) {
              console.log('got rows', rows);
              _this12.fileName = file.name;
              var addresses = lodash__WEBPACK_IMPORTED_MODULE_5__["map"](rows, function (row) {
                return Object.assign(Object.assign({}, row), {
                  amount: Number(row.amount)
                });
              });

              _this12.setAddressess(addresses);
            }, function (err) {
              _this12.setStatus('读取文件失败');

              console.log('error', err);
            });
          }
        }, {
          key: "readFile",
          value: function readFile(file) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_12__["Observable"](function (obs) {
              var reader = new FileReader();

              reader.onerror = function (err) {
                return obs.error(err);
              };

              reader.onabort = function (err) {
                return obs.error(err);
              };

              reader.onload = function () {
                return obs.next(reader.result);
              };

              reader.onloadend = function () {
                return obs.complete();
              };

              return reader.readAsText(file, 'utf8');
            });
          }
        }, {
          key: "doTransfer",
          value: function doTransfer() {
            var _this13 = this;

            var invalidAccount = this.firstInvalidAccount();

            if (invalidAccount) {
              this.setStatus("".concat(invalidAccount.name, " \u7684\u5730\u5740\u9519\u8BEF, \u8BF7\u68C0\u67E5!"));
              return;
            }

            var totalAmount = this.getTotalAmount();
            var amount = this.convertAmountToRaw(totalAmount);
            var balance = new BN(this.tokenInfo.balance);

            if (amount.isGreaterThan(balance)) {
              this.setStatus('合约中余额不足以转账, 请检查!');
              return;
            }

            var addresses = lodash__WEBPACK_IMPORTED_MODULE_5__["map"](this.addresses, 'address');
            var amounts = lodash__WEBPACK_IMPORTED_MODULE_5__["map"](this.addresses, function (addr) {
              return _this13.convertAmountToRaw(addr.amount);
            });
            this.loadingService.addLoading();
            var ret = this.batchContract.batchSend(this.tokenInfo.tokenAddress, addresses, amounts, {
              from: this.model.account
            });
            ret.on('transactionHash', function (tx) {
              return _this13.loadingService.setTx(tx);
            });
            ret.then(function (tx) {
              console.log('updating transaction', tx.tx);

              _this13.loadingService.setTx('');

              _this13.loadingService.removeLoading();

              _this13.setStatus('发送交易成功');

              _this13.setAddressess([]);

              _this13.fileName = null;
            })["catch"](function (ex) {
              _this13.loadingService.setTx('');

              _this13.loadingService.removeLoading();

              _this13.setStatus('发送交易失败');

              console.error('faield', ex);
            });
            console.log('transfer');
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(item) {
            var addresses = lodash__WEBPACK_IMPORTED_MODULE_5__["filter"](this.addresses, function (v) {
              return v !== item;
            });
            this.setAddressess(addresses);
            console.log('delete item', item);
          }
        }, {
          key: "selectFile",
          value: function selectFile() {
            this.fileName = '';
            this.setAddressess([]);
          }
        }, {
          key: "getTotalAmount",
          value: function getTotalAmount() {
            return lodash__WEBPACK_IMPORTED_MODULE_5__["reduce"](this.addresses, function (total, row) {
              return total + row.amount;
            }, 0);
          }
        }, {
          key: "setAddressess",
          value: function setAddressess(addresses) {
            this.addresses = addresses;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](this.addresses);
            this.dataSource.paginator = this.paginator;
          }
        }, {
          key: "isAddressValid",
          value: function isAddressValid(address) {
            return this.web3Service.isAddress(address);
          }
        }, {
          key: "firstInvalidAccount",
          value: function firstInvalidAccount() {
            var _this14 = this;

            return lodash__WEBPACK_IMPORTED_MODULE_5__["find"](this.addresses, function (account) {
              return !_this14.isAddressValid(account.address);
            });
          }
        }, {
          key: "convertAmountToRaw",
          value: function convertAmountToRaw(amount) {
            return new BN(amount).multipliedBy(new BN(10).pow(this.tokenInfo.decimals));
          }
        }, {
          key: "getTokens",
          value: function getTokens() {
            if (!lodash__WEBPACK_IMPORTED_MODULE_5__["has"](predefinedTokens, this.web3Service.chainId())) {
              return emptyTokenArray;
            }

            return predefinedTokens[this.web3Service.chainId()];
          }
        }]);

        return MetaSenderComponent;
      }();

      MetaSenderComponent.ctorParameters = function () {
        return [{
          type: _util_web3_service__WEBPACK_IMPORTED_MODULE_7__["Web3Service"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]
        }, {
          type: app_meta_loading_service__WEBPACK_IMPORTED_MODULE_11__["LoadingService"]
        }];
      };

      MetaSenderComponent.propDecorators = {
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"]]
        }]
      };
      MetaSenderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-meta-sender',
        template: _raw_loader_meta_sender_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_meta_sender_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_util_web3_service__WEBPACK_IMPORTED_MODULE_7__["Web3Service"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"], app_meta_loading_service__WEBPACK_IMPORTED_MODULE_11__["LoadingService"]])], MetaSenderComponent);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map