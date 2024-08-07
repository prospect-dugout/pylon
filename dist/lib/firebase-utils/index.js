"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _createFetcher = require("./create-fetcher");
Object.keys(_createFetcher).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _createFetcher[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _createFetcher[key];
    }
  });
});
var _createUseFirestoreMutation = require("./create-use-firestore-mutation");
Object.keys(_createUseFirestoreMutation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _createUseFirestoreMutation[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _createUseFirestoreMutation[key];
    }
  });
});
var _createUseFirestoreQuery = require("./create-use-firestore-query");
Object.keys(_createUseFirestoreQuery).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _createUseFirestoreQuery[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _createUseFirestoreQuery[key];
    }
  });
});
var _createUseMutation = require("./create-use-mutation");
Object.keys(_createUseMutation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _createUseMutation[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _createUseMutation[key];
    }
  });
});
var _createUseQuery = require("./create-use-query");
Object.keys(_createUseQuery).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _createUseQuery[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _createUseQuery[key];
    }
  });
});