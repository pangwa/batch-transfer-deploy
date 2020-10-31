(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pangwa/chain/walle-eth/src/main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1Qqu":
/*!*****************************************!*\
  !*** ./src/app/meta/loading.service.ts ***!
  \*****************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let LoadingService = class LoadingService {
    constructor() {
        this.loaders = 0;
        this.tx = '';
    }
    addLoading() {
        setTimeout(() => this.loaders++);
    }
    removeLoading() {
        setTimeout(() => {
            if (this.loaders <= 0) {
                return;
            }
            this.loaders--;
        });
    }
    stopLoading() {
        setTimeout(() => this.loaders = 0);
    }
    isLoading() {
        return this.loaders > 0 || this.tx;
    }
    setTx(tx) {
        setTimeout(() => this.tx = tx);
    }
    getTx() {
        return this.tx;
    }
};
LoadingService.ctorParameters = () => [];
LoadingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], LoadingService);



/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "3UJ4":
/*!****************************************!*\
  !*** ./build/contracts/TokenImpl.json ***!
  \****************************************/
/*! exports provided: contractName, abi, metadata, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, devdoc, userdoc, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"contractName\":\"TokenImpl\",\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.5.16+commit.9c3226ce\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":true,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"owner\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":true,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"spender\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"value\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"Approval\\\",\\\"type\\\":\\\"event\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":true,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"from\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":true,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"to\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"value\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"Transfer\\\",\\\"type\\\":\\\"event\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"owner\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"spender\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"allowance\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"spender\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"amount\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"approve\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"account\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"balanceOf\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"decimals\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint8\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint8\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"name\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"symbol\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"totalSupply\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"recipient\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"amount\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"transfer\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"sender\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"recipient\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"amount\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"transferFrom\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"}],\\\"devdoc\\\":{\\\"methods\\\":{\\\"allowance(address,address)\\\":{\\\"details\\\":\\\"Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default.     * This value changes when {approve} or {transferFrom} are called.\\\"},\\\"approve(address,uint256)\\\":{\\\"details\\\":\\\"Sets `amount` as the allowance of `spender` over the caller's tokens.     * Returns a boolean value indicating whether the operation succeeded.     * IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729     * Emits an {Approval} event.\\\"},\\\"balanceOf(address)\\\":{\\\"details\\\":\\\"Returns the amount of tokens owned by `account`.\\\"},\\\"decimals()\\\":{\\\"details\\\":\\\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`).     * Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei.     * NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\\\"},\\\"name()\\\":{\\\"details\\\":\\\"Returns the name of the token.\\\"},\\\"symbol()\\\":{\\\"details\\\":\\\"Returns the symbol of the token, usually a shorter version of the name.\\\"},\\\"totalSupply()\\\":{\\\"details\\\":\\\"Returns the amount of tokens in existence.\\\"},\\\"transfer(address,uint256)\\\":{\\\"details\\\":\\\"Moves `amount` tokens from the caller's account to `recipient`.     * Returns a boolean value indicating whether the operation succeeded.     * Emits a {Transfer} event.\\\"},\\\"transferFrom(address,address,uint256)\\\":{\\\"details\\\":\\\"Moves `amount` tokens from `sender` to `recipient` using the allowance mechanism. `amount` is then deducted from the caller's allowance.     * Returns a boolean value indicating whether the operation succeeded.     * Emits a {Transfer} event.\\\"}}},\\\"userdoc\\\":{\\\"methods\\\":{}}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"/Users/pangwa/chain/walle-eth/contracts/Test.sol\\\":\\\"TokenImpl\\\"},\\\"evmVersion\\\":\\\"istanbul\\\",\\\"libraries\\\":{},\\\"optimizer\\\":{\\\"enabled\\\":false,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"/Users/pangwa/chain/walle-eth/contracts/Test.sol\\\":{\\\"keccak256\\\":\\\"0x165042784b51e87cea2c9141990092fe9113b7acc55efe900da3452d08a40e0e\\\",\\\"urls\\\":[\\\"bzz-raw://47c43af78afe6132213b40f7a6bd29cad1a79d1ac8092d1e420dcadecc9df683\\\",\\\"dweb:/ipfs/QmX9LW5QYbGnFVvhAW3K7sPi9Gm7EzGBkZk32xzSGRum1p\\\"]},\\\"@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol\\\":{\\\"keccak256\\\":\\\"0x4a3a810b7ebe742e897e1fd428b3eeed2196d3acea58eaf9c566ed10d545d2ed\\\",\\\"urls\\\":[\\\"bzz-raw://28d03f328e19e4099d5013de0649afaeaabac1a614e130767ab1cb4aca9775b6\\\",\\\"dweb:/ipfs/Qmb9iW7yNuYehB2NfhRMs9TakqbLVQhBhmGMkaDZ5g1Eb4\\\"]},\\\"@openzeppelin/contracts/token/ERC20/IERC20.sol\\\":{\\\"keccak256\\\":\\\"0xe5bb0f57cff3e299f360052ba50f1ea0fff046df2be070b6943e0e3c3fdad8a9\\\",\\\"urls\\\":[\\\"bzz-raw://59fd025151435da35faa8093a5c7a17de02de9d08ad27275c5cdf05050820d91\\\",\\\"dweb:/ipfs/QmQMvwEcPhoRXzbXyrdoeRtvLoifUW9Qh7Luho7bmUPRkc\\\"]}},\\\"version\\\":1}\",\"bytecode\":\"0x\",\"deployedBytecode\":\"0x\",\"sourceMap\":\"\",\"deployedSourceMap\":\"\",\"source\":\"import \\\"@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol\\\";\\n\\ncontract TokenImpl is ERC20Detailed {\\n}\\n\",\"sourcePath\":\"/Users/pangwa/chain/walle-eth/contracts/Test.sol\",\"ast\":{\"absolutePath\":\"/Users/pangwa/chain/walle-eth/contracts/Test.sol\",\"exportedSymbols\":{\"TokenImpl\":[61]},\"id\":62,\"nodeType\":\"SourceUnit\",\"nodes\":[{\"absolutePath\":\"@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol\",\"file\":\"@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol\",\"id\":58,\"nodeType\":\"ImportDirective\",\"scope\":62,\"sourceUnit\":377,\"src\":\"0:63:1\",\"symbolAliases\":[],\"unitAlias\":\"\"},{\"baseContracts\":[{\"arguments\":null,\"baseName\":{\"contractScope\":null,\"id\":59,\"name\":\"ERC20Detailed\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":376,\"src\":\"87:13:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_ERC20Detailed_$376\",\"typeString\":\"contract ERC20Detailed\"}},\"id\":60,\"nodeType\":\"InheritanceSpecifier\",\"src\":\"87:13:1\"}],\"contractDependencies\":[376,445],\"contractKind\":\"contract\",\"documentation\":null,\"fullyImplemented\":false,\"id\":61,\"linearizedBaseContracts\":[61,376,445],\"name\":\"TokenImpl\",\"nodeType\":\"ContractDefinition\",\"nodes\":[],\"scope\":62,\"src\":\"65:39:1\"}],\"src\":\"0:105:1\"},\"legacyAST\":{\"absolutePath\":\"/Users/pangwa/chain/walle-eth/contracts/Test.sol\",\"exportedSymbols\":{\"TokenImpl\":[61]},\"id\":62,\"nodeType\":\"SourceUnit\",\"nodes\":[{\"absolutePath\":\"@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol\",\"file\":\"@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol\",\"id\":58,\"nodeType\":\"ImportDirective\",\"scope\":62,\"sourceUnit\":377,\"src\":\"0:63:1\",\"symbolAliases\":[],\"unitAlias\":\"\"},{\"baseContracts\":[{\"arguments\":null,\"baseName\":{\"contractScope\":null,\"id\":59,\"name\":\"ERC20Detailed\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":376,\"src\":\"87:13:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_ERC20Detailed_$376\",\"typeString\":\"contract ERC20Detailed\"}},\"id\":60,\"nodeType\":\"InheritanceSpecifier\",\"src\":\"87:13:1\"}],\"contractDependencies\":[376,445],\"contractKind\":\"contract\",\"documentation\":null,\"fullyImplemented\":false,\"id\":61,\"linearizedBaseContracts\":[61,376,445],\"name\":\"TokenImpl\",\"nodeType\":\"ContractDefinition\",\"nodes\":[],\"scope\":62,\"src\":\"65:39:1\"}],\"src\":\"0:105:1\"},\"compiler\":{\"name\":\"solc\",\"version\":\"0.5.16+commit.9c3226ce.Emscripten.clang\"},\"networks\":{},\"schemaVersion\":\"3.2.3\",\"updatedAt\":\"2020-10-31T00:17:34.985Z\",\"devdoc\":{\"methods\":{\"allowance(address,address)\":{\"details\":\"Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default.     * This value changes when {approve} or {transferFrom} are called.\"},\"approve(address,uint256)\":{\"details\":\"Sets `amount` as the allowance of `spender` over the caller's tokens.     * Returns a boolean value indicating whether the operation succeeded.     * IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729     * Emits an {Approval} event.\"},\"balanceOf(address)\":{\"details\":\"Returns the amount of tokens owned by `account`.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`).     * Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei.     * NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"Returns the amount of tokens in existence.\"},\"transfer(address,uint256)\":{\"details\":\"Moves `amount` tokens from the caller's account to `recipient`.     * Returns a boolean value indicating whether the operation succeeded.     * Emits a {Transfer} event.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Moves `amount` tokens from `sender` to `recipient` using the allowance mechanism. `amount` is then deducted from the caller's allowance.     * Returns a boolean value indicating whether the operation succeeded.     * Emits a {Transfer} event.\"}}},\"userdoc\":{\"methods\":{}}}");

/***/ }),

/***/ "3jEb":
/*!***************************************!*\
  !*** ./build/contracts/WalleBot.json ***!
  \***************************************/
/*! exports provided: contractName, abi, metadata, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, devdoc, userdoc, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"contractName\":\"WalleBot\",\"abi\":[{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"contract IERC20\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"TransferSuccess\",\"type\":\"event\"},{\"constant\":true,\"inputs\":[],\"name\":\"isOwner\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"address[]\",\"name\":\"receiver\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"amounts\",\"type\":\"uint256[]\"}],\"name\":\"batchSend\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"sufficient\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"getBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.5.16+commit.9c3226ce\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"inputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"constructor\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":true,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"previousOwner\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":true,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"newOwner\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"OwnershipTransferred\\\",\\\"type\\\":\\\"event\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":false,\\\"internalType\\\":\\\"contract IERC20\\\",\\\"name\\\":\\\"token\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"TransferSuccess\\\",\\\"type\\\":\\\"event\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"internalType\\\":\\\"contract IERC20\\\",\\\"name\\\":\\\"token\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"address[]\\\",\\\"name\\\":\\\"receiver\\\",\\\"type\\\":\\\"address[]\\\"},{\\\"internalType\\\":\\\"uint256[]\\\",\\\"name\\\":\\\"amounts\\\",\\\"type\\\":\\\"uint256[]\\\"}],\\\"name\\\":\\\"batchSend\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"sufficient\\\",\\\"type\\\":\\\"bool\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"internalType\\\":\\\"contract IERC20\\\",\\\"name\\\":\\\"token\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"getBalance\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"isOwner\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"owner\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[],\\\"name\\\":\\\"renounceOwnership\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"newOwner\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"transferOwnership\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"internalType\\\":\\\"contract IERC20\\\",\\\"name\\\":\\\"token\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"withdraw\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"}],\\\"devdoc\\\":{\\\"methods\\\":{\\\"isOwner()\\\":{\\\"details\\\":\\\"Returns true if the caller is the current owner.\\\"},\\\"owner()\\\":{\\\"details\\\":\\\"Returns the address of the current owner.\\\"},\\\"renounceOwnership()\\\":{\\\"details\\\":\\\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\\\"},\\\"transferOwnership(address)\\\":{\\\"details\\\":\\\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\\\"}}},\\\"userdoc\\\":{\\\"methods\\\":{}}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"/Users/pangwa/chain/walle-eth/contracts/WalleBot.sol\\\":\\\"WalleBot\\\"},\\\"evmVersion\\\":\\\"istanbul\\\",\\\"libraries\\\":{},\\\"optimizer\\\":{\\\"enabled\\\":false,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"/Users/pangwa/chain/walle-eth/contracts/WalleBot.sol\\\":{\\\"keccak256\\\":\\\"0x01b27dc2dfe70fd82409017c8d65123b60c8cb58b9f0101db2808fa7fa116db9\\\",\\\"urls\\\":[\\\"bzz-raw://1de5514e8f33904029dbe3fa975ab5f96720feae1793837998b5e299f076199b\\\",\\\"dweb:/ipfs/QmX7ZbCXrCCREJwJGMNqhJtc2Yser9hDYMC2yo2qLvsMvp\\\"]},\\\"@openzeppelin/contracts/GSN/Context.sol\\\":{\\\"keccak256\\\":\\\"0x90a3995645af7562d84b9d69363ffa5ae7217714ab61e951bf7bc450f40e4061\\\",\\\"urls\\\":[\\\"bzz-raw://216ef9d6b614db4eb46970b4e84903f2534a45572dd30a79f0041f1a5830f436\\\",\\\"dweb:/ipfs/QmNPrJ4MWKUAWzKXpUqeyKRUfosaoANZAqXgvepdrCwZAG\\\"]},\\\"@openzeppelin/contracts/ownership/Ownable.sol\\\":{\\\"keccak256\\\":\\\"0x6fb9d7889769d7cc161225f9ef7a90e468ba9788b253816f8d8b6894d3472c24\\\",\\\"urls\\\":[\\\"bzz-raw://cf4c00fc3c37cc5acf0c82ec6fd97bab67d72c2567fdc0ebf023d9c09b30a08e\\\",\\\"dweb:/ipfs/Qmb7TChG6DsEDX7LooJ4vmxot19f7VXX8S1zUGPeJTWbwZ\\\"]},\\\"@openzeppelin/contracts/token/ERC20/IERC20.sol\\\":{\\\"keccak256\\\":\\\"0xe5bb0f57cff3e299f360052ba50f1ea0fff046df2be070b6943e0e3c3fdad8a9\\\",\\\"urls\\\":[\\\"bzz-raw://59fd025151435da35faa8093a5c7a17de02de9d08ad27275c5cdf05050820d91\\\",\\\"dweb:/ipfs/QmQMvwEcPhoRXzbXyrdoeRtvLoifUW9Qh7Luho7bmUPRkc\\\"]}},\\\"version\\\":1}\",\"bytecode\":\"0x608060405234801561001057600080fd5b5060006100216100c460201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3506100cc565b600033905090565b610d09806100db6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638da5cb5b1161005b5780638da5cb5b1461026c5780638f32d59b146102b6578063f2fde38b146102d8578063f8b2cb4f1461031c5761007d565b806319648bed1461008257806351cff8d914610206578063715018a614610262575b600080fd5b6101ec6004803603606081101561009857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156100d557600080fd5b8201836020820111156100e757600080fd5b8035906020019184602083028401116401000000008311171561010957600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561016957600080fd5b82018360208201111561017b57600080fd5b8035906020019184602083028401116401000000008311171561019d57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290505050610374565b604051808215151515815260200191505060405180910390f35b6102486004803603602081101561021c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061062f565b604051808215151515815260200191505060405180910390f35b61026a610835565b005b61027461096e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102be610997565b604051808215151515815260200191505060405180910390f35b61031a600480360360208110156102ee57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109f5565b005b61035e6004803603602081101561033257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a7b565b6040518082815260200191505060405180910390f35b600061037e610997565b6103f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b815183511461044a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180610caf6026913960400191505060405180910390fd5b60008090505b83518110156105c0578473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb85838151811061048157fe5b602002602001015185848151811061049557fe5b60200260200101516040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561050657600080fd5b505af115801561051a573d6000803e3d6000fd5b505050506040513d602081101561053057600080fd5b81019080805190602001909291905050506105b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f57616c6c65426f743a207472616e73666572206661696c65640000000000000081525060200191505060405180910390fd5b8080600101915050610450565b507f3e0a5cf99e7e9bd41080cfe3c715754fbc66f0c0ebee390ee8c3f48824377eae84604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1600190509392505050565b6000610639610997565b6106ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6106cf61096e565b8473ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561074c57600080fd5b505afa158015610760573d6000803e3d6000fd5b505050506040513d602081101561077657600080fd5b81019080805190602001909291905050506040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156107f057600080fd5b505af1158015610804573d6000803e3d6000fd5b505050506040513d602081101561081a57600080fd5b81019080805190602001909291905050505060019050919050565b61083d610997565b6108af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166109d9610b3c565b73ffffffffffffffffffffffffffffffffffffffff1614905090565b6109fd610997565b610a6f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b610a7881610b44565b50565b60008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610afa57600080fd5b505afa158015610b0e573d6000803e3d6000fd5b505050506040513d6020811015610b2457600080fd5b81019080805190602001909291905050509050919050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610bca576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180610c896026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737357616c6c65426f743a20616464726573732073686f756c64206d6174636820616d6f756e7473a265627a7a72315820b42906aea28a0e123ec339ad7d80a301bfbf5c76d3977904d2324ac47e9dc01c64736f6c63430005100032\",\"deployedBytecode\":\"0x608060405234801561001057600080fd5b506004361061007d5760003560e01c80638da5cb5b1161005b5780638da5cb5b1461026c5780638f32d59b146102b6578063f2fde38b146102d8578063f8b2cb4f1461031c5761007d565b806319648bed1461008257806351cff8d914610206578063715018a614610262575b600080fd5b6101ec6004803603606081101561009857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156100d557600080fd5b8201836020820111156100e757600080fd5b8035906020019184602083028401116401000000008311171561010957600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561016957600080fd5b82018360208201111561017b57600080fd5b8035906020019184602083028401116401000000008311171561019d57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290505050610374565b604051808215151515815260200191505060405180910390f35b6102486004803603602081101561021c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061062f565b604051808215151515815260200191505060405180910390f35b61026a610835565b005b61027461096e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102be610997565b604051808215151515815260200191505060405180910390f35b61031a600480360360208110156102ee57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109f5565b005b61035e6004803603602081101561033257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a7b565b6040518082815260200191505060405180910390f35b600061037e610997565b6103f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b815183511461044a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180610caf6026913960400191505060405180910390fd5b60008090505b83518110156105c0578473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb85838151811061048157fe5b602002602001015185848151811061049557fe5b60200260200101516040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561050657600080fd5b505af115801561051a573d6000803e3d6000fd5b505050506040513d602081101561053057600080fd5b81019080805190602001909291905050506105b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f57616c6c65426f743a207472616e73666572206661696c65640000000000000081525060200191505060405180910390fd5b8080600101915050610450565b507f3e0a5cf99e7e9bd41080cfe3c715754fbc66f0c0ebee390ee8c3f48824377eae84604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1600190509392505050565b6000610639610997565b6106ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6106cf61096e565b8473ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561074c57600080fd5b505afa158015610760573d6000803e3d6000fd5b505050506040513d602081101561077657600080fd5b81019080805190602001909291905050506040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156107f057600080fd5b505af1158015610804573d6000803e3d6000fd5b505050506040513d602081101561081a57600080fd5b81019080805190602001909291905050505060019050919050565b61083d610997565b6108af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166109d9610b3c565b73ffffffffffffffffffffffffffffffffffffffff1614905090565b6109fd610997565b610a6f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b610a7881610b44565b50565b60008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610afa57600080fd5b505afa158015610b0e573d6000803e3d6000fd5b505050506040513d6020811015610b2457600080fd5b81019080805190602001909291905050509050919050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610bca576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180610c896026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737357616c6c65426f743a20616464726573732073686f756c64206d6174636820616d6f756e7473a265627a7a72315820b42906aea28a0e123ec339ad7d80a301bfbf5c76d3977904d2324ac47e9dc01c64736f6c63430005100032\",\"sourceMap\":\"139:768:2:-;;;211:25;8:9:-1;5:2;;;30:1;27;20:12;5:2;211:25:2;698:17:4;718:12;:10;;;:12;;:::i;:::-;698:32;;749:9;740:6;;:18;;;;;;;;;;;;;;;;;;806:9;773:43;;802:1;773:43;;;;;;;;;;;;664:159;139:768:2;;788:96:3;833:15;867:10;860:17;;788:96;:::o;139:768:2:-;;;;;;;\",\"deployedSourceMap\":\"139:768:2:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;139:768:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;239:407;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;239:407:2;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;239:407:2;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;239:407:2;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;39:11;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;239:407:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;239:407:2;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;239:407:2;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;239:407:2;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;39:11;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;239:407:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;239:407:2;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;758:147;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;758:147:2;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1684:137:4;;;:::i;:::-;;899:77;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1250:92;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1970:107;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1970:107:4;;;;;;;;;;;;;;;;;;;:::i;:::-;;649:105:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;649:105:2;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;239:407;347:15;1103:9:4;:7;:9::i;:::-;1095:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;397:7:2;:14;378:8;:15;:33;370:84;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;465:6;474:1;465:10;;460:135;481:8;:15;477:1;:19;460:135;;;519:5;:14;;;534:8;543:1;534:11;;;;;;;;;;;;;;547:7;555:1;547:10;;;;;;;;;;;;;;519:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;519:39:2;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;519:39:2;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;519:39:2;;;;;;;;;;;;;;;;511:77;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;498:3;;;;;;;460:135;;;;605:22;621:5;605:22;;;;;;;;;;;;;;;;;;;;;;638:4;631:11;;239:407;;;;;:::o;758:147::-;816:4;1103:9:4;:7;:9::i;:::-;1095:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;828:5:2;:14;;;843:7;:5;:7::i;:::-;852:5;:15;;;876:4;852:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;852:30:2;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;852:30:2;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;852:30:2;;;;;;;;;;;;;;;;828:55;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;828:55:2;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;828:55:2;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;828:55:2;;;;;;;;;;;;;;;;;896:4;889:11;;758:147;;;:::o;1684:137:4:-;1103:9;:7;:9::i;:::-;1095:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1782:1;1745:40;;1766:6;;;;;;;;;;;1745:40;;;;;;;;;;;;1812:1;1795:6;;:19;;;;;;;;;;;;;;;;;;1684:137::o;899:77::-;937:7;963:6;;;;;;;;;;;956:13;;899:77;:::o;1250:92::-;1290:4;1329:6;;;;;;;;;;;1313:22;;:12;:10;:12::i;:::-;:22;;;1306:29;;1250:92;:::o;1970:107::-;1103:9;:7;:9::i;:::-;1095:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2042:28;2061:8;2042:18;:28::i;:::-;1970:107;:::o;649:105:2:-;703:4;720:5;:15;;;744:4;720:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;720:30:2;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;720:30:2;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;720:30:2;;;;;;;;;;;;;;;;713:37;;649:105;;;:::o;788:96:3:-;833:15;867:10;860:17;;788:96;:::o;2178:225:4:-;2271:1;2251:22;;:8;:22;;;;2243:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2360:8;2331:38;;2352:6;;;;;;;;;;;2331:38;;;;;;;;;;;;2388:8;2379:6;;:17;;;;;;;;;;;;;;;;;;2178:225;:::o\",\"source\":\"pragma solidity ^0.5.0;\\n\\nimport \\\"@openzeppelin/contracts/token/ERC20/IERC20.sol\\\";\\nimport \\\"@openzeppelin/contracts/ownership/Ownable.sol\\\";\\n\\ncontract WalleBot is Ownable {\\n  event TransferSuccess(IERC20 token);\\n\\n\\tconstructor() public {\\n\\t}\\n\\n\\tfunction batchSend(IERC20 token, address[] memory receiver, uint[] memory amounts) public onlyOwner returns(bool sufficient) {\\n    require(receiver.length == amounts.length, \\\"WalleBot: address should match amounts\\\");\\n    for (uint i = 0; i < receiver.length; i++) {\\n      require(token.transfer(receiver[i], amounts[i]), \\\"WalleBot: transfer failed\\\");\\n    }\\n    emit TransferSuccess(token);\\n\\t\\treturn true;\\n\\t}\\n\\n\\tfunction getBalance(IERC20 token) public view returns(uint) {\\n\\t\\treturn token.balanceOf(address(this));\\n\\t}\\n\\n  function withdraw(IERC20 token) public onlyOwner returns (bool) {\\n    token.transfer(owner(), token.balanceOf(address(this)));\\n    return true;\\n  }\\n}\\n\",\"sourcePath\":\"/Users/pangwa/chain/walle-eth/contracts/WalleBot.sol\",\"ast\":{\"absolutePath\":\"/Users/pangwa/chain/walle-eth/contracts/WalleBot.sol\",\"exportedSymbols\":{\"WalleBot\":[173]},\"id\":174,\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":63,\"literals\":[\"solidity\",\"^\",\"0.5\",\".0\"],\"nodeType\":\"PragmaDirective\",\"src\":\"0:23:2\"},{\"absolutePath\":\"@openzeppelin/contracts/token/ERC20/IERC20.sol\",\"file\":\"@openzeppelin/contracts/token/ERC20/IERC20.sol\",\"id\":64,\"nodeType\":\"ImportDirective\",\"scope\":174,\"sourceUnit\":446,\"src\":\"25:56:2\",\"symbolAliases\":[],\"unitAlias\":\"\"},{\"absolutePath\":\"@openzeppelin/contracts/ownership/Ownable.sol\",\"file\":\"@openzeppelin/contracts/ownership/Ownable.sol\",\"id\":65,\"nodeType\":\"ImportDirective\",\"scope\":174,\"sourceUnit\":319,\"src\":\"82:55:2\",\"symbolAliases\":[],\"unitAlias\":\"\"},{\"baseContracts\":[{\"arguments\":null,\"baseName\":{\"contractScope\":null,\"id\":66,\"name\":\"Ownable\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":318,\"src\":\"160:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_Ownable_$318\",\"typeString\":\"contract Ownable\"}},\"id\":67,\"nodeType\":\"InheritanceSpecifier\",\"src\":\"160:7:2\"}],\"contractDependencies\":[200,318],\"contractKind\":\"contract\",\"documentation\":null,\"fullyImplemented\":true,\"id\":173,\"linearizedBaseContracts\":[173,318,200],\"name\":\"WalleBot\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"anonymous\":false,\"documentation\":null,\"id\":71,\"name\":\"TransferSuccess\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":70,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":69,\"indexed\":false,\"name\":\"token\",\"nodeType\":\"VariableDeclaration\",\"scope\":71,\"src\":\"194:12:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$445\",\"typeString\":\"contract IERC20\"},\"typeName\":{\"contractScope\":null,\"id\":68,\"name\":\"IERC20\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":445,\"src\":\"194:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$445\",\"typeString\":\"contract IERC20\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"193:14:2\"},\"src\":\"172:36:2\"},{\"body\":{\"id\":74,\"nodeType\":\"Block\",\"src\":\"232:4:2\",\"statements\":[]},\"documentation\":null,\"id\":75,\"implemented\":true,\"kind\":\"constructor\",\"modifiers\":[],\"name\":\"\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":72,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"222:2:2\"},\"returnParameters\":{\"id\":73,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"232:0:2\"},\"scope\":173,\"src\":\"211:25:2\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":131,\"nodeType\":\"Block\",\"src\":\"364:282:2\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":95,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":91,\"name\":\"receiver\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":80,\"src\":\"378:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[] memory\"}},\"id\":92,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"378:15:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":93,\"name\":\"amounts\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":83,\"src\":\"397:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint256_$dyn_memory_ptr\",\"typeString\":\"uint256[] memory\"}},\"id\":94,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"397:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"378:33:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},{\"argumentTypes\":null,\"hexValue\":\"57616c6c65426f743a20616464726573732073686f756c64206d6174636820616d6f756e7473\",\"id\":96,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"413:40:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_8fe3218e3b005acf2b20ec5a03fdeff9a043fbc8bb9db0e084368890706118b4\",\"typeString\":\"literal_string \\\"WalleBot: address should match amounts\\\"\"},\"value\":\"WalleBot: address should match amounts\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},{\"typeIdentifier\":\"t_stringliteral_8fe3218e3b005acf2b20ec5a03fdeff9a043fbc8bb9db0e084368890706118b4\",\"typeString\":\"literal_string \\\"WalleBot: address should match amounts\\\"\"}],\"id\":90,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[463,464],\"referencedDeclaration\":464,\"src\":\"370:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$\",\"typeString\":\"function (bool,string memory) pure\"}},\"id\":97,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"370:84:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":98,\"nodeType\":\"ExpressionStatement\",\"src\":\"370:84:2\"},{\"body\":{\"id\":123,\"nodeType\":\"Block\",\"src\":\"503:92:2\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":113,\"name\":\"receiver\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":80,\"src\":\"534:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[] memory\"}},\"id\":115,\"indexExpression\":{\"argumentTypes\":null,\"id\":114,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":100,\"src\":\"543:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"534:11:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":116,\"name\":\"amounts\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":83,\"src\":\"547:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint256_$dyn_memory_ptr\",\"typeString\":\"uint256[] memory\"}},\"id\":118,\"indexExpression\":{\"argumentTypes\":null,\"id\":117,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":100,\"src\":\"555:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"547:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"expression\":{\"argumentTypes\":null,\"id\":111,\"name\":\"token\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":77,\"src\":\"519:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$445\",\"typeString\":\"contract IERC20\"}},\"id\":112,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"transfer\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":399,\"src\":\"519:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$\",\"typeString\":\"function (address,uint256) external returns (bool)\"}},\"id\":119,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"519:39:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},{\"argumentTypes\":null,\"hexValue\":\"57616c6c65426f743a207472616e73666572206661696c6564\",\"id\":120,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"560:27:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_10c5f4931e420a2b3b8341c9b2d6ba892ba5612386b63e5e2793d4fccccd6716\",\"typeString\":\"literal_string \\\"WalleBot: transfer failed\\\"\"},\"value\":\"WalleBot: transfer failed\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},{\"typeIdentifier\":\"t_stringliteral_10c5f4931e420a2b3b8341c9b2d6ba892ba5612386b63e5e2793d4fccccd6716\",\"typeString\":\"literal_string \\\"WalleBot: transfer failed\\\"\"}],\"id\":110,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[463,464],\"referencedDeclaration\":464,\"src\":\"511:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$\",\"typeString\":\"function (bool,string memory) pure\"}},\"id\":121,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"511:77:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":122,\"nodeType\":\"ExpressionStatement\",\"src\":\"511:77:2\"}]},\"condition\":{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":106,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"id\":103,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":100,\"src\":\"477:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"<\",\"rightExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":104,\"name\":\"receiver\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":80,\"src\":\"481:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[] memory\"}},\"id\":105,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"481:15:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"477:19:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":124,\"initializationExpression\":{\"assignments\":[100],\"declarations\":[{\"constant\":false,\"id\":100,\"name\":\"i\",\"nodeType\":\"VariableDeclaration\",\"scope\":124,\"src\":\"465:6:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":99,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"465:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"id\":102,\"initialValue\":{\"argumentTypes\":null,\"hexValue\":\"30\",\"id\":101,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"474:1:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"465:10:2\"},\"loopExpression\":{\"expression\":{\"argumentTypes\":null,\"id\":108,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"498:3:2\",\"subExpression\":{\"argumentTypes\":null,\"id\":107,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":100,\"src\":\"498:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":109,\"nodeType\":\"ExpressionStatement\",\"src\":\"498:3:2\"},\"nodeType\":\"ForStatement\",\"src\":\"460:135:2\"},{\"eventCall\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":126,\"name\":\"token\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":77,\"src\":\"621:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$445\",\"typeString\":\"contract IERC20\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_contract$_IERC20_$445\",\"typeString\":\"contract IERC20\"}],\"id\":125,\"name\":\"TransferSuccess\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":71,\"src\":\"605:15:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_contract$_IERC20_$445_$returns$__$\",\"typeString\":\"function (contract IERC20)\"}},\"id\":127,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"605:22:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":128,\"nodeType\":\"EmitStatement\",\"src\":\"600:27:2\"},{\"expression\":{\"argumentTypes\":null,\"hexValue\":\"74727565\",\"id\":129,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"638:4:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"functionReturnParameters\":89,\"id\":130,\"nodeType\":\"Return\",\"src\":\"631:11:2\"}]},\"documentation\":null,\"id\":132,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"arguments\":null,\"id\":86,\"modifierName\":{\"argumentTypes\":null,\"id\":85,\"name\":\"onlyOwner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":251,\"src\":\"329:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"329:9:2\"}],\"name\":\"batchSend\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":84,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":77,\"name\":\"token\",\"nodeType\":\"VariableDeclaration\",\"scope\":132,\"src\":\"258:12:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$445\",\"typeString\":\"contract IERC20\"},\"typeName\":{\"contractScope\":null,\"id\":76,\"name\":\"IERC20\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":445,\"src\":\"258:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$445\",\"typeString\":\"contract IERC20\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":80,\"name\":\"receiver\",\"nodeType\":\"VariableDeclaration\",\"scope\":132,\"src\":\"272:25:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":78,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"272:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":79,\"length\":null,\"nodeType\":\"ArrayTypeName\",\"src\":\"272:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":83,\"name\":\"amounts\",\"nodeType\":\"VariableDeclaration\",\"scope\":132,\"src\":\"299:21:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint256_$dyn_memory_ptr\",\"typeString\":\"uint256[]\"},\"typeName\":{\"baseType\":{\"id\":81,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"299:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":82,\"length\":null,\"nodeType\":\"ArrayTypeName\",\"src\":\"299:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint256_$dyn_storage_ptr\",\"typeString\":\"uint256[]\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"257:64:2\"},\"returnParameters\":{\"id\":89,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":88,\"name\":\"sufficient\",\"nodeType\":\"VariableDeclaration\",\"scope\":132,\"src\":\"347:15:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":87,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"347:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"346:17:2\"},\"scope\":173,\"src\":\"239:407:2\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":146,\"nodeType\":\"Block\",\"src\":\"709:45:2\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":142,\"name\":\"this\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":484,\"src\":\"744:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_WalleBot_$173\",\"typeString\":\"contract WalleBot\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_contract$_WalleBot_$173\",\"typeString\":\"contract WalleBot\"}],\"id\":141,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"nodeType\":\"ElementaryTypeNameExpression\",\"src\":\"736:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_type$_t_address_$\",\"typeString\":\"type(address)\"},\"typeName\":\"address\"},\"id\":143,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"typeConversion\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"736:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"expression\":{\"argumentTypes\":null,\"id\":139,\"name\":\"token\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":134,\"src\":\"720:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$445\",\"typeString\":\"contract IERC20\"}},\"id\":140,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"balanceOf\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":390,\"src\":\"720:15:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_external_view$_t_address_$returns$_t_uint256_$\",\"typeString\":\"function (address) view external returns (uint256)\"}},\"id\":144,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"720:30:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"functionReturnParameters\":138,\"id\":145,\"nodeType\":\"Return\",\"src\":\"713:37:2\"}]},\"documentation\":null,\"id\":147,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getBalance\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":135,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":134,\"name\":\"token\",\"nodeType\":\"VariableDeclaration\",\"scope\":147,\"src\":\"669:12:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$445\",\"typeString\":\"contract IERC20\"},\"typeName\":{\"contractScope\":null,\"id\":133,\"name\":\"IERC20\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":445,\"src\":\"669:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$445\",\"typeString\":\"contract IERC20\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"668:14:2\"},\"returnParameters\":{\"id\":138,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":137,\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":147,\"src\":\"703:4:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":136,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"703:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"702:6:2\"},\"scope\":173,\"src\":\"649:105:2\",\"stateMutability\":\"view\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":171,\"nodeType\":\"Block\",\"src\":\"822:83:2\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"arguments\":[],\"expression\":{\"argumentTypes\":[],\"id\":159,\"name\":\"owner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":241,\"src\":\"843:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_view$__$returns$_t_address_$\",\"typeString\":\"function () view returns (address)\"}},\"id\":160,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"843:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":164,\"name\":\"this\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":484,\"src\":\"876:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_WalleBot_$173\",\"typeString\":\"contract WalleBot\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_contract$_WalleBot_$173\",\"typeString\":\"contract WalleBot\"}],\"id\":163,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"nodeType\":\"ElementaryTypeNameExpression\",\"src\":\"868:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_type$_t_address_$\",\"typeString\":\"type(address)\"},\"typeName\":\"address\"},\"id\":165,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"typeConversion\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"868:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"expression\":{\"argumentTypes\":null,\"id\":161,\"name\":\"token\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":149,\"src\":\"852:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$445\",\"typeString\":\"contract IERC20\"}},\"id\":162,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"balanceOf\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":390,\"src\":\"852:15:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_external_view$_t_address_$returns$_t_uint256_$\",\"typeString\":\"function (address) view external returns (uint256)\"}},\"id\":166,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"852:30:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"expression\":{\"argumentTypes\":null,\"id\":156,\"name\":\"token\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":149,\"src\":\"828:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$445\",\"typeString\":\"contract IERC20\"}},\"id\":158,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"transfer\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":399,\"src\":\"828:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$\",\"typeString\":\"function (address,uint256) external returns (bool)\"}},\"id\":167,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"828:55:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":168,\"nodeType\":\"ExpressionStatement\",\"src\":\"828:55:2\"},{\"expression\":{\"argumentTypes\":null,\"hexValue\":\"74727565\",\"id\":169,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"896:4:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"functionReturnParameters\":155,\"id\":170,\"nodeType\":\"Return\",\"src\":\"889:11:2\"}]},\"documentation\":null,\"id\":172,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"arguments\":null,\"id\":152,\"modifierName\":{\"argumentTypes\":null,\"id\":151,\"name\":\"onlyOwner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":251,\"src\":\"797:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"797:9:2\"}],\"name\":\"withdraw\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":150,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":149,\"name\":\"token\",\"nodeType\":\"VariableDeclaration\",\"scope\":172,\"src\":\"776:12:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$445\",\"typeString\":\"contract IERC20\"},\"typeName\":{\"contractScope\":null,\"id\":148,\"name\":\"IERC20\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":445,\"src\":\"776:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$445\",\"typeString\":\"contract IERC20\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"775:14:2\"},\"returnParameters\":{\"id\":155,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":154,\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":172,\"src\":\"816:4:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":153,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"816:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"815:6:2\"},\"scope\":173,\"src\":\"758:147:2\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"}],\"scope\":174,\"src\":\"139:768:2\"}],\"src\":\"0:908:2\"},\"legacyAST\":{\"absolutePath\":\"/Users/pangwa/chain/walle-eth/contracts/WalleBot.sol\",\"exportedSymbols\":{\"WalleBot\":[173]},\"id\":174,\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":63,\"literals\":[\"solidity\",\"^\",\"0.5\",\".0\"],\"nodeType\":\"PragmaDirective\",\"src\":\"0:23:2\"},{\"absolutePath\":\"@openzeppelin/contracts/token/ERC20/IERC20.sol\",\"file\":\"@openzeppelin/contracts/token/ERC20/IERC20.sol\",\"id\":64,\"nodeType\":\"ImportDirective\",\"scope\":174,\"sourceUnit\":446,\"src\":\"25:56:2\",\"symbolAliases\":[],\"unitAlias\":\"\"},{\"absolutePath\":\"@openzeppelin/contracts/ownership/Ownable.sol\",\"file\":\"@openzeppelin/contracts/ownership/Ownable.sol\",\"id\":65,\"nodeType\":\"ImportDirective\",\"scope\":174,\"sourceUnit\":319,\"src\":\"82:55:2\",\"symbolAliases\":[],\"unitAlias\":\"\"},{\"baseContracts\":[{\"arguments\":null,\"baseName\":{\"contractScope\":null,\"id\":66,\"name\":\"Ownable\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":318,\"src\":\"160:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_Ownable_$318\",\"typeString\":\"contract Ownable\"}},\"id\":67,\"nodeType\":\"InheritanceSpecifier\",\"src\":\"160:7:2\"}],\"contractDependencies\":[200,318],\"contractKind\":\"contract\",\"documentation\":null,\"fullyImplemented\":true,\"id\":173,\"linearizedBaseContracts\":[173,318,200],\"name\":\"WalleBot\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"anonymous\":false,\"documentation\":null,\"id\":71,\"name\":\"TransferSuccess\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":70,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":69,\"indexed\":false,\"name\":\"token\",\"nodeType\":\"VariableDeclaration\",\"scope\":71,\"src\":\"194:12:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$445\",\"typeString\":\"contract IERC20\"},\"typeName\":{\"contractScope\":null,\"id\":68,\"name\":\"IERC20\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":445,\"src\":\"194:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$445\",\"typeString\":\"contract IERC20\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"193:14:2\"},\"src\":\"172:36:2\"},{\"body\":{\"id\":74,\"nodeType\":\"Block\",\"src\":\"232:4:2\",\"statements\":[]},\"documentation\":null,\"id\":75,\"implemented\":true,\"kind\":\"constructor\",\"modifiers\":[],\"name\":\"\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":72,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"222:2:2\"},\"returnParameters\":{\"id\":73,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"232:0:2\"},\"scope\":173,\"src\":\"211:25:2\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":131,\"nodeType\":\"Block\",\"src\":\"364:282:2\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":95,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":91,\"name\":\"receiver\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":80,\"src\":\"378:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[] memory\"}},\"id\":92,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"378:15:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":93,\"name\":\"amounts\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":83,\"src\":\"397:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint256_$dyn_memory_ptr\",\"typeString\":\"uint256[] memory\"}},\"id\":94,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"397:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"378:33:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},{\"argumentTypes\":null,\"hexValue\":\"57616c6c65426f743a20616464726573732073686f756c64206d6174636820616d6f756e7473\",\"id\":96,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"413:40:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_8fe3218e3b005acf2b20ec5a03fdeff9a043fbc8bb9db0e084368890706118b4\",\"typeString\":\"literal_string \\\"WalleBot: address should match amounts\\\"\"},\"value\":\"WalleBot: address should match amounts\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},{\"typeIdentifier\":\"t_stringliteral_8fe3218e3b005acf2b20ec5a03fdeff9a043fbc8bb9db0e084368890706118b4\",\"typeString\":\"literal_string \\\"WalleBot: address should match amounts\\\"\"}],\"id\":90,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[463,464],\"referencedDeclaration\":464,\"src\":\"370:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$\",\"typeString\":\"function (bool,string memory) pure\"}},\"id\":97,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"370:84:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":98,\"nodeType\":\"ExpressionStatement\",\"src\":\"370:84:2\"},{\"body\":{\"id\":123,\"nodeType\":\"Block\",\"src\":\"503:92:2\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":113,\"name\":\"receiver\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":80,\"src\":\"534:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[] memory\"}},\"id\":115,\"indexExpression\":{\"argumentTypes\":null,\"id\":114,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":100,\"src\":\"543:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"534:11:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":116,\"name\":\"amounts\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":83,\"src\":\"547:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint256_$dyn_memory_ptr\",\"typeString\":\"uint256[] memory\"}},\"id\":118,\"indexExpression\":{\"argumentTypes\":null,\"id\":117,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":100,\"src\":\"555:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"547:10:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"expression\":{\"argumentTypes\":null,\"id\":111,\"name\":\"token\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":77,\"src\":\"519:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$445\",\"typeString\":\"contract IERC20\"}},\"id\":112,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"transfer\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":399,\"src\":\"519:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$\",\"typeString\":\"function (address,uint256) external returns (bool)\"}},\"id\":119,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"519:39:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},{\"argumentTypes\":null,\"hexValue\":\"57616c6c65426f743a207472616e73666572206661696c6564\",\"id\":120,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"560:27:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_10c5f4931e420a2b3b8341c9b2d6ba892ba5612386b63e5e2793d4fccccd6716\",\"typeString\":\"literal_string \\\"WalleBot: transfer failed\\\"\"},\"value\":\"WalleBot: transfer failed\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},{\"typeIdentifier\":\"t_stringliteral_10c5f4931e420a2b3b8341c9b2d6ba892ba5612386b63e5e2793d4fccccd6716\",\"typeString\":\"literal_string \\\"WalleBot: transfer failed\\\"\"}],\"id\":110,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[463,464],\"referencedDeclaration\":464,\"src\":\"511:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$\",\"typeString\":\"function (bool,string memory) pure\"}},\"id\":121,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"511:77:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":122,\"nodeType\":\"ExpressionStatement\",\"src\":\"511:77:2\"}]},\"condition\":{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":106,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"id\":103,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":100,\"src\":\"477:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"<\",\"rightExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":104,\"name\":\"receiver\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":80,\"src\":\"481:8:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[] memory\"}},\"id\":105,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"length\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"481:15:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"477:19:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":124,\"initializationExpression\":{\"assignments\":[100],\"declarations\":[{\"constant\":false,\"id\":100,\"name\":\"i\",\"nodeType\":\"VariableDeclaration\",\"scope\":124,\"src\":\"465:6:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":99,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"465:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"id\":102,\"initialValue\":{\"argumentTypes\":null,\"hexValue\":\"30\",\"id\":101,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"474:1:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"465:10:2\"},\"loopExpression\":{\"expression\":{\"argumentTypes\":null,\"id\":108,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"498:3:2\",\"subExpression\":{\"argumentTypes\":null,\"id\":107,\"name\":\"i\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":100,\"src\":\"498:1:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":109,\"nodeType\":\"ExpressionStatement\",\"src\":\"498:3:2\"},\"nodeType\":\"ForStatement\",\"src\":\"460:135:2\"},{\"eventCall\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":126,\"name\":\"token\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":77,\"src\":\"621:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$445\",\"typeString\":\"contract IERC20\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_contract$_IERC20_$445\",\"typeString\":\"contract IERC20\"}],\"id\":125,\"name\":\"TransferSuccess\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":71,\"src\":\"605:15:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_contract$_IERC20_$445_$returns$__$\",\"typeString\":\"function (contract IERC20)\"}},\"id\":127,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"605:22:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":128,\"nodeType\":\"EmitStatement\",\"src\":\"600:27:2\"},{\"expression\":{\"argumentTypes\":null,\"hexValue\":\"74727565\",\"id\":129,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"638:4:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"functionReturnParameters\":89,\"id\":130,\"nodeType\":\"Return\",\"src\":\"631:11:2\"}]},\"documentation\":null,\"id\":132,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"arguments\":null,\"id\":86,\"modifierName\":{\"argumentTypes\":null,\"id\":85,\"name\":\"onlyOwner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":251,\"src\":\"329:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"329:9:2\"}],\"name\":\"batchSend\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":84,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":77,\"name\":\"token\",\"nodeType\":\"VariableDeclaration\",\"scope\":132,\"src\":\"258:12:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$445\",\"typeString\":\"contract IERC20\"},\"typeName\":{\"contractScope\":null,\"id\":76,\"name\":\"IERC20\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":445,\"src\":\"258:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$445\",\"typeString\":\"contract IERC20\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":80,\"name\":\"receiver\",\"nodeType\":\"VariableDeclaration\",\"scope\":132,\"src\":\"272:25:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":78,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"272:7:2\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":79,\"length\":null,\"nodeType\":\"ArrayTypeName\",\"src\":\"272:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":83,\"name\":\"amounts\",\"nodeType\":\"VariableDeclaration\",\"scope\":132,\"src\":\"299:21:2\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint256_$dyn_memory_ptr\",\"typeString\":\"uint256[]\"},\"typeName\":{\"baseType\":{\"id\":81,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"299:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":82,\"length\":null,\"nodeType\":\"ArrayTypeName\",\"src\":\"299:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_uint256_$dyn_storage_ptr\",\"typeString\":\"uint256[]\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"257:64:2\"},\"returnParameters\":{\"id\":89,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":88,\"name\":\"sufficient\",\"nodeType\":\"VariableDeclaration\",\"scope\":132,\"src\":\"347:15:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":87,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"347:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"346:17:2\"},\"scope\":173,\"src\":\"239:407:2\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":146,\"nodeType\":\"Block\",\"src\":\"709:45:2\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":142,\"name\":\"this\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":484,\"src\":\"744:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_WalleBot_$173\",\"typeString\":\"contract WalleBot\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_contract$_WalleBot_$173\",\"typeString\":\"contract WalleBot\"}],\"id\":141,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"nodeType\":\"ElementaryTypeNameExpression\",\"src\":\"736:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_type$_t_address_$\",\"typeString\":\"type(address)\"},\"typeName\":\"address\"},\"id\":143,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"typeConversion\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"736:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"expression\":{\"argumentTypes\":null,\"id\":139,\"name\":\"token\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":134,\"src\":\"720:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$445\",\"typeString\":\"contract IERC20\"}},\"id\":140,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"balanceOf\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":390,\"src\":\"720:15:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_external_view$_t_address_$returns$_t_uint256_$\",\"typeString\":\"function (address) view external returns (uint256)\"}},\"id\":144,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"720:30:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"functionReturnParameters\":138,\"id\":145,\"nodeType\":\"Return\",\"src\":\"713:37:2\"}]},\"documentation\":null,\"id\":147,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getBalance\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":135,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":134,\"name\":\"token\",\"nodeType\":\"VariableDeclaration\",\"scope\":147,\"src\":\"669:12:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$445\",\"typeString\":\"contract IERC20\"},\"typeName\":{\"contractScope\":null,\"id\":133,\"name\":\"IERC20\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":445,\"src\":\"669:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$445\",\"typeString\":\"contract IERC20\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"668:14:2\"},\"returnParameters\":{\"id\":138,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":137,\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":147,\"src\":\"703:4:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":136,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"703:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"702:6:2\"},\"scope\":173,\"src\":\"649:105:2\",\"stateMutability\":\"view\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":171,\"nodeType\":\"Block\",\"src\":\"822:83:2\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"arguments\":[],\"expression\":{\"argumentTypes\":[],\"id\":159,\"name\":\"owner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":241,\"src\":\"843:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_view$__$returns$_t_address_$\",\"typeString\":\"function () view returns (address)\"}},\"id\":160,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"843:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":164,\"name\":\"this\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":484,\"src\":\"876:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_WalleBot_$173\",\"typeString\":\"contract WalleBot\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_contract$_WalleBot_$173\",\"typeString\":\"contract WalleBot\"}],\"id\":163,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"nodeType\":\"ElementaryTypeNameExpression\",\"src\":\"868:7:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_type$_t_address_$\",\"typeString\":\"type(address)\"},\"typeName\":\"address\"},\"id\":165,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"typeConversion\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"868:13:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"expression\":{\"argumentTypes\":null,\"id\":161,\"name\":\"token\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":149,\"src\":\"852:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$445\",\"typeString\":\"contract IERC20\"}},\"id\":162,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"balanceOf\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":390,\"src\":\"852:15:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_external_view$_t_address_$returns$_t_uint256_$\",\"typeString\":\"function (address) view external returns (uint256)\"}},\"id\":166,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"852:30:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"expression\":{\"argumentTypes\":null,\"id\":156,\"name\":\"token\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":149,\"src\":\"828:5:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$445\",\"typeString\":\"contract IERC20\"}},\"id\":158,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"transfer\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":399,\"src\":\"828:14:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$\",\"typeString\":\"function (address,uint256) external returns (bool)\"}},\"id\":167,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"828:55:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":168,\"nodeType\":\"ExpressionStatement\",\"src\":\"828:55:2\"},{\"expression\":{\"argumentTypes\":null,\"hexValue\":\"74727565\",\"id\":169,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"896:4:2\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"functionReturnParameters\":155,\"id\":170,\"nodeType\":\"Return\",\"src\":\"889:11:2\"}]},\"documentation\":null,\"id\":172,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"arguments\":null,\"id\":152,\"modifierName\":{\"argumentTypes\":null,\"id\":151,\"name\":\"onlyOwner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":251,\"src\":\"797:9:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"797:9:2\"}],\"name\":\"withdraw\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":150,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":149,\"name\":\"token\",\"nodeType\":\"VariableDeclaration\",\"scope\":172,\"src\":\"776:12:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$445\",\"typeString\":\"contract IERC20\"},\"typeName\":{\"contractScope\":null,\"id\":148,\"name\":\"IERC20\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":445,\"src\":\"776:6:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_IERC20_$445\",\"typeString\":\"contract IERC20\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"775:14:2\"},\"returnParameters\":{\"id\":155,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":154,\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":172,\"src\":\"816:4:2\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":153,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"816:4:2\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"815:6:2\"},\"scope\":173,\"src\":\"758:147:2\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"}],\"scope\":174,\"src\":\"139:768:2\"}],\"src\":\"0:908:2\"},\"compiler\":{\"name\":\"solc\",\"version\":\"0.5.16+commit.9c3226ce.Emscripten.clang\"},\"networks\":{\"4\":{\"events\":{\"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0\":{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},\"0x3e0a5cf99e7e9bd41080cfe3c715754fbc66f0c0ebee390ee8c3f48824377eae\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"contract IERC20\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"TransferSuccess\",\"type\":\"event\"}},\"links\":{},\"address\":\"0xc80bdfA5ff763Cb94A6F5773a04c6896F7a419d9\",\"transactionHash\":\"0x3ec2e5e2c7dd342f7016c647a3aeb60311ad84e7a71899fc842e88b3ab2290d4\"}},\"schemaVersion\":\"3.2.3\",\"updatedAt\":\"2020-10-31T00:16:54.888Z\",\"devdoc\":{\"methods\":{\"isOwner()\":{\"details\":\"Returns true if the caller is the current owner.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}}},\"userdoc\":{\"methods\":{}}}");

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "5M1D":
/*!*************************************!*\
  !*** ./src/app/util/util.module.ts ***!
  \*************************************/
/*! exports provided: UtilModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilModule", function() { return UtilModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _web3_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web3.service */ "BA8M");




let UtilModule = class UtilModule {
};
UtilModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        providers: [
            _web3_service__WEBPACK_IMPORTED_MODULE_3__["Web3Service"]
        ],
        declarations: []
    })
], UtilModule);



/***/ }),

/***/ 6:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 9:
/*!*********************************!*\
  !*** readable-stream (ignored) ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.example-spacer {\n  flex: 1 1 auto;\n}\n\n.spinner {\n  margin-left: 1em;\n}\n\n.tx-details {\n  display: flex;\n  flex-direction: row;\n  line-height: 1em;\n}\n\n.tx-details-wrapper {\n  line-height: 1em;\n}\n\n.pending-tx {\n  display: inline-block;\n  width: 120px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLnNwaW5uZXIge1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuXG4udHgtZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG59XG5cbi50eC1kZXRhaWxzLXdyYXBwZXIge1xuICBsaW5lLWhlaWdodDogMWVtO1xufVxuXG4ucGVuZGluZy10eCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEyMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbiJdfQ== */");

/***/ }),

/***/ "AluN":
/*!**************************************!*\
  !*** ./src/app/meta/balance.pipe.ts ***!
  \**************************************/
/*! exports provided: BalancePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalancePipe", function() { return BalancePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


const BN = __webpack_require__(/*! bignumber.js */ "kB5k");
let BalancePipe = class BalancePipe {
    transform(v, ...args) {
        let [decimals] = args;
        decimals = decimals || 18;
        const value = new BN(v);
        decimals = decimals || 18;
        return value.div(new BN(10).pow(decimals)).toString();
    }
};
BalancePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'balance'
    })
], BalancePipe);



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};


/***/ }),

/***/ "BA8M":
/*!**************************************!*\
  !*** ./src/app/util/web3.service.ts ***!
  \**************************************/
/*! exports provided: Web3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Web3Service", function() { return Web3Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




const Web3 = __webpack_require__(/*! web3 */ "meUc");
const contract = __webpack_require__(/*! @truffle/contract */ "sjkk");
let Web3Service = class Web3Service {
    constructor() {
        this.ready = false;
        this.accountsObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        window.addEventListener('load', (event) => {
            this.bootstrapWeb3();
        });
    }
    bootstrapWeb3() {
        // Checking if Web3 has been injected by the browser (Mist/MetaMask)
        if (typeof window.ethereum !== 'undefined') {
            // Use Mist/MetaMask's provider
            window.ethereum.enable().then(() => {
                this.web3 = new Web3(window.ethereum);
            });
        }
        else {
            console.log('No web3? You should consider trying MetaMask!');
            // Hack to provide backwards compatibility for Truffle, which uses web3js 0.20.x
            Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
            // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
            this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
        }
        setInterval(() => this.refreshAccounts(), 1000);
    }
    artifactsToContract(artifacts) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.web3) {
                const delay = new Promise(resolve => setTimeout(resolve, 100));
                yield delay;
                return yield this.artifactsToContract(artifacts);
            }
            const contractAbstraction = contract(artifacts);
            contractAbstraction.setProvider(this.web3.currentProvider);
            return contractAbstraction;
        });
    }
    refreshAccounts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const accs = yield this.web3.eth.getAccounts();
            // Get the initial account balance so it can be displayed.
            if (accs.length === 0) {
                console.warn('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
                return;
            }
            if (!this.accounts || this.accounts.length !== accs.length || this.accounts[0] !== accs[0]) {
                console.log('Observed new accounts');
                this.accountsObservable.next(accs);
                this.accounts = accs;
            }
            this.ready = true;
        });
    }
    chainId() {
        return lodash__WEBPACK_IMPORTED_MODULE_3__["chain"](this.web3)
            .get('currentProvider.chainId', '0')
            .parseInt().value();
    }
    tokenContract(abi, address) {
        return new this.web3.eth.Contract(abi, address);
    }
    isAddress(addr) {
        return this.web3.utils.isAddress(addr);
    }
};
Web3Service.ctorParameters = () => [];
Web3Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], Web3Service);



/***/ }),

/***/ "G2lx":
/*!*************************************!*\
  !*** ./src/app/meta/meta.module.ts ***!
  \*************************************/
/*! exports provided: MetaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaModule", function() { return MetaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _meta_sender_meta_sender_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meta-sender/meta-sender.component */ "l+Sr");
/* harmony import */ var _util_util_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/util.module */ "5M1D");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-file-drop */ "ZRew");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _balance_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./balance.pipe */ "AluN");








// material.module.ts
















let MetaModule = class MetaModule {
};
MetaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"],
            ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__["NgxFileDropModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            _util_util_module__WEBPACK_IMPORTED_MODULE_5__["UtilModule"]
        ],
        declarations: [_meta_sender_meta_sender_component__WEBPACK_IMPORTED_MODULE_4__["MetaSenderComponent"], _balance_pipe__WEBPACK_IMPORTED_MODULE_23__["BalancePipe"]],
        exports: [_meta_sender_meta_sender_component__WEBPACK_IMPORTED_MODULE_4__["MetaSenderComponent"]]
    })
], MetaModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_meta_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/meta/loading.service */ "1Qqu");





let AppComponent = class AppComponent {
    constructor(loadingService) {
        this.loadingService = loadingService;
        this.title = 'app works!';
    }
    isLoading() {
        return this.loadingService.isLoading();
    }
    pendingTx() {
        return this.loadingService.getTx();
    }
};
AppComponent.ctorParameters = () => [
    { type: app_meta_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [app_meta_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]])
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" class=\"toolbar\">\n  <button mat-button class=\"example-icon\">\n    批量转账工具\n  </button>\n  <span class=\"example-spacer\"></span>\n  <div class=\"tx-details\">\n    <div class=\"tx-details-wrapper\" *ngIf=\"pendingTx()\">\n      <mat-icon aria-hidden=\"false\" aria-label=\"Pending Transaction\">loop</mat-icon>\n      <span class=\"pending-tx\" [matTooltip]=\"pendingTx()\">{{pendingTx()}}</span>\n    </div>\n    <mat-progress-spinner\n      *ngIf=\"isLoading()\"\n      class=\"spinner\"\n      color=\"warn\"\n      diameter=\"20\"\n      mode=\"indeterminate\" >\n    </mat-progress-spinner>\n\n  </div>\n</mat-toolbar>\n<app-meta-sender></app-meta-sender>\n");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _meta_meta_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./meta/meta.module */ "G2lx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");









// material.module.ts








let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _meta_meta_module__WEBPACK_IMPORTED_MODULE_6__["MetaModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "gz4i":
/*!*************************************************************!*\
  !*** ./src/app/meta/meta-sender/meta-sender.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n\n.settings {\n  max-width: 420px;\n  flex: 1;\n}\n\n.details {\n  flex: 3;\n}\n\n.address-field {\n  width: 400px;\n}\n\n.token-field {\n  width: 400px;\n}\n\n.send-form {\n  min-width: 600px;\n}\n\n.account-table {\n  width: 100%;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n\n.hidden {\n  display: none;\n}\n\n.invalid-address {\n  color: red;\n}\n\n.placeholder {\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 300px;\n  flex: 3;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWV0YS9tZXRhLXNlbmRlci9tZXRhLXNlbmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztBQUFiOztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLE9BQU87QUFBVDs7QUFHQTtFQUNFLE9BQU87QUFBVDs7QUFHQTtFQUNFLFlBQVk7QUFBZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFNQTtFQUNFLGdCQUFnQjtBQUhsQjs7QUFNQTtFQUNFLFdBQVc7QUFIYjs7QUFNQTtFQUNFLGNBQWM7QUFIaEI7O0FBTUE7RUFDRSxhQUFhO0FBSGY7O0FBTUE7RUFDRSxVQUFVO0FBSFo7O0FBTUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLFNBQVM7RUFDVCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsT0FBTztBQUhUIiwiZmlsZSI6InNyYy9hcHAvbWV0YS9tZXRhLXNlbmRlci9tZXRhLXNlbmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2V0dGluZ3Mge1xuICBtYXgtd2lkdGg6IDQyMHB4O1xuICBmbGV4OiAxO1xufVxuXG4uZGV0YWlscyB7XG4gIGZsZXg6IDM7XG59XG5cbi5hZGRyZXNzLWZpZWxkIHtcbiAgd2lkdGg6IDQwMHB4O1xufVxuLnRva2VuLWZpZWxkIHtcbiAgd2lkdGg6IDQwMHB4O1xufVxuXG5cbi50ZXN0bmV0LWxhYmVsIHtcbn1cblxuLnNlbmQtZm9ybSB7XG4gIG1pbi13aWR0aDogNjAwcHg7XG59XG5cbi5hY2NvdW50LXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmludmFsaWQtYWRkcmVzcyB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5wbGFjZWhvbGRlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIGZsZXg6IDM7XG59XG4iXX0= */");

/***/ }),

/***/ "l+Sr":
/*!***********************************************************!*\
  !*** ./src/app/meta/meta-sender/meta-sender.component.ts ***!
  \***********************************************************/
/*! exports provided: MetaSenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaSenderComponent", function() { return MetaSenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_meta_sender_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./meta-sender.component.html */ "vYhm");
/* harmony import */ var _meta_sender_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meta-sender.component.scss */ "gz4i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var csv_parse_lib_sync__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! csv-parse/lib/sync */ "huxh");
/* harmony import */ var csv_parse_lib_sync__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(csv_parse_lib_sync__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _util_web3_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util/web3.service */ "BA8M");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var app_meta_loading_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/meta/loading.service */ "1Qqu");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







const BN = __webpack_require__(/*! bignumber.js */ "kB5k");







const wallebot_artifacts = __webpack_require__(/*! ../../../../build/contracts/WalleBot.json */ "3jEb");
const erc20_artifacts = __webpack_require__(/*! ../../../../build/contracts/TokenImpl.json */ "3UJ4");
const predefinedTokens = {
    4: [{
            name: 'CRU',
            address: '0x002f24009df0c1e9215c98cec76f18d8eaf3db0f',
        }, {
            name: 'USDT',
            address: '0xd9ba894e0097f8cc2bbc9d24d308b98e36dc6d02',
        }],
};
const maxSize = 100 * 1024; // 100kb
let MetaSenderComponent = class MetaSenderComponent {
    constructor(web3Service, matSnackBar, loadingService) {
        this.web3Service = web3Service;
        this.matSnackBar = matSnackBar;
        this.loadingService = loadingService;
        this.tokenControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.transAddress = '';
        this.addresses = [];
        this.displayedColumns = ['name', 'address', 'amount', 'operations'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](this.addresses);
        this.tokens = [{
                name: 'CRU',
                address: '0x002f24009df0c1e9215c98cec76f18d8eaf3db0f',
            }, {
                name: 'USDT',
                address: '0xd9ba894e0097f8cc2bbc9d24d308b98e36dc6d02',
            }];
        this.dataObservable = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        this.tokenObservable = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        this.model = {
            amount: 5,
            receiver: '',
            balance: 0,
            account: '',
            tokenAddress: '',
        };
        this.status = '';
        console.log('Constructor: ' + web3Service);
    }
    ngOnInit() {
        console.log('OnInit: ' + this.web3Service);
        this.watchAccount();
        const obContract = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["from"])(this.loadTransContract());
        const sub = obContract.subscribe((data) => {
            this.ownerAccount = data.owner;
            this.transAddress = data.instance.address;
            sub.unsubscribe();
        }, () => { });
        this.filteredTokens = this.tokenControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(value => {
            this.tokenObservable.next({
                name: 'input',
                address: value,
            });
            const v = lodash__WEBPACK_IMPORTED_MODULE_5__["lowerCase"](value);
            return lodash__WEBPACK_IMPORTED_MODULE_5__["chain"](this.tokens)
                .filter((token) => lodash__WEBPACK_IMPORTED_MODULE_5__["includes"](lodash__WEBPACK_IMPORTED_MODULE_5__["lowerCase"](token.name), v)
                || lodash__WEBPACK_IMPORTED_MODULE_5__["includes"](lodash__WEBPACK_IMPORTED_MODULE_5__["lowerCase"](token.address), v))
                .value();
        }));
        const obToken = this.tokenObservable
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["throttleTime"])(500));
        this.$subToken = obContract.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["combineLatest"])(obToken), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(([transferData, token]) => {
            this.loadingService.addLoading();
            return this.loadTokenContractData(transferData, token.address)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => this.loadingService.removeLoading()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["catchError"])(ex => {
                console.error('error ', ex);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])({
                    status: '加载信息失败',
                });
            }));
        })).subscribe((info) => {
            console.log('got ', info);
            if (!info) {
                return;
            }
            if (info.status) {
                this.setStatus(info.status);
                return;
            }
            const transferData = info.transferData;
            console.log('trans contract', transferData.instance.address);
            this.ownerAccount = transferData.owner;
            if (this.$messageSub && this.$messageSub !== transferData.sub) {
                this.$messageSub.unsubscribe();
            }
            this.$messageSub = transferData.sub;
            this.batchContract = transferData.instance;
            this.tokenInfo = info.info;
        }, err => {
            this.setStatus('加载代币信息失败');
            console.log('error', err);
        });
    }
    ngOnDestroy() {
        const unsub = (s) => {
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
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    watchAccount() {
        this.$subAccount = this.web3Service.accountsObservable.subscribe((accounts) => {
            this.accounts = accounts;
            this.model.account = accounts[0];
            this.refreshBalance();
        });
    }
    setStatus(status) {
        this.matSnackBar.open(status, null, { duration: 3000 });
    }
    sendCoin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.WalleBot) {
                this.setStatus('WalleBot is not loaded, unable to send transaction');
                return;
            }
            const amount = this.model.amount;
            const receiver = this.model.receiver;
            console.log('Sending coins' + amount + ' to ' + receiver);
            this.setStatus('Initiating transaction... (please wait)');
            try {
                const deployedWalleBot = yield this.WalleBot.deployed();
                const transaction = yield deployedWalleBot.sendCoin.sendTransaction(receiver, amount, { from: this.model.account });
                if (!transaction) {
                    this.setStatus('Transaction failed!');
                }
                else {
                    this.setStatus('Transaction complete!');
                }
            }
            catch (e) {
                console.log(e);
                this.setStatus('Error sending coin; see log.');
            }
        });
    }
    refreshBalance() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.tokenInfo) {
                return;
            }
            console.log('Refreshing balance');
            this.tokenObservable.next({
                name: this.tokenInfo.name,
                address: this.tokenInfo.tokenAddress,
            });
        });
    }
    setAmount(e) {
        console.log('Setting amount: ' + e.target.value);
        this.model.amount = e.target.value;
    }
    setReceiver(e) {
        console.log('Setting receiver: ' + e.target.value);
        this.model.receiver = e.target.value;
    }
    isMainnet() {
        return this.web3Service.chainId() === 1;
    }
    chainId() {
        return this.web3Service.chainId();
    }
    isOwner() {
        return this.model.account === this.ownerAccount;
    }
    refreshToken() {
    }
    displayTokenFn(token) {
        if (!token) {
            return null;
        }
        return token.name + ` (${token.address})`;
    }
    selectedToken(event) {
        this.tokenObservable.next(event.option.value);
    }
    loadTokenInfo(token) {
    }
    loadTokenContractData(transferData, tokenAddress) {
        if (!tokenAddress) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])();
        }
        try {
            const contract = this.web3Service.tokenContract(erc20_artifacts.abi, tokenAddress);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["from"])(contract.methods.balanceOf(transferData.instance.address).call())
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["zip"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["from"])(contract.methods.name().call()), Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["from"])(contract.methods.symbol().call()), Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["from"])(contract.methods.decimals().call())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(([balance, name, symbol, decimals]) => {
                console.log('info: ', balance, name, symbol, decimals);
                return {
                    status: null,
                    transferData,
                    info: {
                        tokenAddress,
                        balance,
                        contract,
                        decimals,
                        name,
                        symbol,
                    }
                };
            }));
        }
        catch (e) {
            console.log('caught', e);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])({
                status: 'invalid contract address',
            });
        }
    }
    loadTransContract() {
        return this.web3Service.artifactsToContract(wallebot_artifacts)
            .then((WalleBotAbstraction) => {
            const walleBot = WalleBotAbstraction;
            return walleBot.deployed().then((deployed) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const owner = yield deployed.owner.call();
                //            const sub = await deployed.TransferSuccess({
                //              fromBlock: 'latest',
                //            }, (err, ev) => {
                //              console.log('Batch transfer event came in, refreshing balance', ev);
                //              if (ev.transactionHash === this.loadingService.getTx()) {
                //                this.loadingService.setTx('');
                //              }
                //              this.refreshBalance();
                //            });
                return {
                    instance: deployed,
                    owner,
                    sub: null,
                };
            }));
        });
    }
    dropped(files) {
        if (!files || files.length === 0 || files.length > 1) {
            this.setStatus('请选择一个CSV文件, 不支持多选');
            return;
        }
        const droppedFile = files[0];
        if (droppedFile.fileEntry.isFile) {
            const fileEntry = droppedFile.fileEntry;
            fileEntry.file((file) => {
                if (file.size > maxSize) {
                    this.setStatus('文件过大');
                    return;
                }
                console.log(droppedFile.relativePath, file);
                this.loadFileContent(file);
            });
        }
        else {
            this.setStatus('请选择一个CSV文件');
        }
    }
    loadFileContent(file) {
        if (this.$subFile) {
            this.$subFile.unsubscribe();
        }
        this.$subFile = this.readFile(file)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(content => {
            return csv_parse_lib_sync__WEBPACK_IMPORTED_MODULE_6__(content, {
                columns: ['name', 'address', 'amount'],
                skip_empty_lines: true
            });
        })).subscribe(rows => {
            console.log('got rows', rows);
            this.fileName = file.name;
            const addresses = lodash__WEBPACK_IMPORTED_MODULE_5__["map"](rows, (row) => {
                return Object.assign(Object.assign({}, row), { amount: Number(row.amount) });
            });
            this.setAddressess(addresses);
        }, err => {
            this.setStatus('读取文件失败');
            console.log('error', err);
        });
    }
    readFile(file) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_12__["Observable"](obs => {
            const reader = new FileReader();
            reader.onerror = err => obs.error(err);
            reader.onabort = err => obs.error(err);
            reader.onload = () => obs.next(reader.result);
            reader.onloadend = () => obs.complete();
            return reader.readAsText(file, 'utf8');
        });
    }
    doTransfer() {
        const invalidAccount = this.firstInvalidAccount();
        if (invalidAccount) {
            this.setStatus(`${invalidAccount.name} 的地址错误, 请检查!`);
            return;
        }
        const totalAmount = this.getTotalAmount();
        const amount = this.convertAmountToRaw(totalAmount);
        const balance = new BN(this.tokenInfo.balance);
        if (amount.isGreaterThan(balance)) {
            this.setStatus('合约中余额不足以转账, 请检查!');
            return;
        }
        const addresses = lodash__WEBPACK_IMPORTED_MODULE_5__["map"](this.addresses, 'address');
        const amounts = lodash__WEBPACK_IMPORTED_MODULE_5__["map"](this.addresses, (addr) => this.convertAmountToRaw(addr.amount));
        this.loadingService.addLoading();
        const ret = this.batchContract
            .batchSend(this.tokenInfo.tokenAddress, addresses, amounts, {
            from: this.model.account,
        });
        ret.on('transactionHash', (tx) => this.loadingService.setTx(tx));
        ret.then((tx) => {
            console.log('updating transaction', tx.tx);
            this.loadingService.setTx('');
            this.loadingService.removeLoading();
            this.setStatus('发送交易成功');
            this.setAddressess([]);
            this.fileName = null;
        }).catch(ex => {
            this.loadingService.setTx('');
            this.loadingService.removeLoading();
            this.setStatus('发送交易失败');
            console.error('faield', ex);
        });
        console.log('transfer');
    }
    deleteItem(item) {
        const addresses = lodash__WEBPACK_IMPORTED_MODULE_5__["filter"](this.addresses, (v) => v !== item);
        this.setAddressess(addresses);
        console.log('delete item', item);
    }
    selectFile() {
        this.fileName = '';
        this.setAddressess([]);
    }
    getTotalAmount() {
        return lodash__WEBPACK_IMPORTED_MODULE_5__["reduce"](this.addresses, (total, row) => total + row.amount, 0);
    }
    setAddressess(addresses) {
        this.addresses = addresses;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](this.addresses);
        this.dataSource.paginator = this.paginator;
    }
    isAddressValid(address) {
        return this.web3Service.isAddress(address);
    }
    firstInvalidAccount() {
        return lodash__WEBPACK_IMPORTED_MODULE_5__["find"](this.addresses, (account) => !this.isAddressValid(account.address));
    }
    convertAmountToRaw(amount) {
        return new BN(amount)
            .multipliedBy(new BN(10).pow(this.tokenInfo.decimals));
    }
};
MetaSenderComponent.ctorParameters = () => [
    { type: _util_web3_service__WEBPACK_IMPORTED_MODULE_7__["Web3Service"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] },
    { type: app_meta_loading_service__WEBPACK_IMPORTED_MODULE_11__["LoadingService"] }
];
MetaSenderComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"],] }]
};
MetaSenderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-meta-sender',
        template: _raw_loader_meta_sender_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_meta_sender_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_util_web3_service__WEBPACK_IMPORTED_MODULE_7__["Web3Service"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"],
        app_meta_loading_service__WEBPACK_IMPORTED_MODULE_11__["LoadingService"]])
], MetaSenderComponent);



/***/ }),

/***/ "vYhm":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/meta/meta-sender/meta-sender.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <mat-card class=\"settings\">\n    <mat-card-title>\n      转账设置\n      <button *ngIf=\"isMainnet(); else testNet\" mat-button color=\"warn\">主网</button>\n      <ng-template #testNet>\n        <button mat-button color=\"primary\">测试网</button>\n      </ng-template>\n    </mat-card-title>\n    <mat-card-content>\n      <mat-form-field appearance=\"fill\" class=\"address-field\">\n        <mat-label>批量转账合约地址</mat-label>\n        <input matInput [value]=\"transAddress\">\n      </mat-form-field>\n      <mat-form-field id=\"address-selector\" class=\"address-field\">\n        <mat-select name=\"account\" (selectionChange)=\"refreshBalance()\" [(value)]=\"model.account\" placeholder=\"账号\">\n          <mat-option *ngFor=\"let account of accounts\" [value]=\"account\">{{account}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <button mat-button color=\"primary\" *ngIf=\"!isOwner() && model.account\">注意: 当前账号非管理账号</button>\n      <br>\n      <mat-form-field class=\"token-field\">\n        <input type=\"text\"\n          placeholder=\"选择ERC20代币\"\n          aria-label=\"Token\"\n          matInput\n          [formControl]=\"tokenControl\"\n          [matAutocomplete]=\"auto\">\n        <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\"\n          [displayWith]=\"displayTokenFn\"\n          (optionSelected)=\"selectedToken($event)\"\n        >\n          <mat-option *ngFor=\"let token of filteredTokens | async\" [value]=\"token\">\n            {{displayTokenFn(token)}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button color=\"accent\" *ngIf=\"tokenInfo\">\n        {{tokenInfo.name}}\n      </button>\n      <button mat-button color=\"primary\" *ngIf=\"tokenInfo\">\n        合约余额:\n        {{tokenInfo?.balance | balance: tokenInfo?.decimals }} {{tokenInfo?.symbol}}\n      </button>\n    </mat-card-actions>\n  </mat-card>\n  <mat-card *ngIf=\"!tokenInfo\" class=\"placeholder\">\n    请在左侧设置代币信息\n  </mat-card>\n  <mat-card *ngIf=\"tokenInfo\" class=\"details\">\n    <mat-card-content class=\"send-form\">\n      <ngx-file-drop dropZoneLabel=\"拖动地址列表文件到这里\"\n        *ngIf=\"!fileName\"\n        accept=\".csv\"\n        (onFileDrop)=\"dropped($event)\" [multiple]=\"false\">\n        <ng-template ngx-file-drop-content-tmp let-openFileSelector=\"openFileSelector\">\n          拖动地址列表文件(CSV格式)到这里\n          <button type=\"button\" (click)=\"openFileSelector()\">选择文件</button>\n        </ng-template>\n      </ngx-file-drop>\n      <mat-toolbar *ngIf=\"fileName\">\n        <mat-toolbar-row>\n          <span>发送代币({{fileName}})  共{{this.addresses.length}}条, 合计{{getTotalAmount()}} {{tokenInfo?.symbol}}</span>\n          <span class=\"example-spacer\"></span>\n          <button mat-icon-button class=\"example-icon select-icon\" aria-label=\"select\" (click)=\"selectFile()\">\n            <mat-icon>refresh</mat-icon>\n          </button>\n          <button mat-icon-button class=\"example-icon send-icon\" color=\"accent\" aria-label=\"发送\" (click)=\"doTransfer()\">\n            <mat-icon>send</mat-icon>\n          </button>\n        </mat-toolbar-row>\n      </mat-toolbar>\n      <table *ngIf=\"fileName\" mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 account-table\">\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef> 姓名 </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"address\">\n          <th mat-header-cell *matHeaderCellDef> 地址</th>\n          <td mat-cell *matCellDef=\"let element\" [class.invalid-address]=\"!isAddressValid(element.address)\"> {{element.address}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"operations\">\n          <th mat-header-cell *matHeaderCellDef> 操作</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <button mat-icon-button class=\"delete-button\" (click)=\"deleteItem(element)\">\n              <mat-icon>delete</mat-icon>\n            </button>\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"amount\">\n          <th mat-header-cell *matHeaderCellDef> 数额 </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.amount}} </td>\n        </ng-container>\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n      <mat-paginator\n        [class.hidden]=\"addresses.length === 0\"\n        [pageSize]=\"10\"\n        [pageSizeOptions]=\"[5, 10, 20]\"\n        showFirstLastButtons></mat-paginator>\n    </mat-card-content>\n  </mat-card>\n</div>\n");

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
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2016.js.map