"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createImage = void 0;
exports.cropImage = cropImage;
exports.rotateSize = exports.getRadianAngle = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/asyncToGenerator"));
var createImage = exports.createImage = function createImage(url) {
  return new Promise(function (resolve, reject) {
    var image = new Image();
    image.addEventListener('load', function () {
      return resolve(image);
    });
    image.addEventListener('error', function (error) {
      return reject(error);
    });
    image.setAttribute('crossOrigin', 'anonymous'); // needed to avoid cross-origin issues on CodeSandbox
    image.src = url;
  });
};
var getRadianAngle = exports.getRadianAngle = function getRadianAngle(degreeValue) {
  return degreeValue * Math.PI / 180;
};

/**
 * Returns the new bounding area of a rotated rectangle.
 */
var rotateSize = exports.rotateSize = function rotateSize(width, height, rotation) {
  var rotRad = getRadianAngle(rotation);
  return {
    width: Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
    height: Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height)
  };
};

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 */
function cropImage(_x, _x2) {
  return _cropImage.apply(this, arguments);
}
function _cropImage() {
  _cropImage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(imageSrc, pixelCrop) {
    var rotation,
      flip,
      image,
      canvas,
      ctx,
      rotRad,
      _rotateSize,
      bBoxWidth,
      bBoxHeight,
      data,
      arrayBuffer,
      _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          rotation = _args.length > 2 && _args[2] !== undefined ? _args[2] : 0;
          flip = _args.length > 3 && _args[3] !== undefined ? _args[3] : {
            horizontal: false,
            vertical: false
          };
          _context.next = 4;
          return createImage(imageSrc);
        case 4:
          image = _context.sent;
          canvas = document.createElement('canvas');
          ctx = canvas.getContext('2d');
          if (ctx) {
            _context.next = 9;
            break;
          }
          return _context.abrupt("return", null);
        case 9:
          rotRad = getRadianAngle(rotation); // calculate bounding box of the rotated image
          _rotateSize = rotateSize(image.width, image.height, rotation), bBoxWidth = _rotateSize.width, bBoxHeight = _rotateSize.height; // set canvas size to match the bounding box
          canvas.width = bBoxWidth;
          canvas.height = bBoxHeight;

          // translate canvas context to a central location to allow rotating and flipping around the center
          ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
          ctx.rotate(rotRad);
          ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
          ctx.translate(-image.width / 2, -image.height / 2);

          // draw rotated image
          ctx.drawImage(image, 0, 0);

          // croppedAreaPixels values are bounding box relative
          // extract the cropped image using these values
          data = ctx.getImageData(pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height); // set canvas width to final desired crop size - this will clear existing context
          canvas.width = pixelCrop.width;
          canvas.height = pixelCrop.height;

          // paste generated rotate image at the top left corner
          ctx.putImageData(data, 0, 0);
          _context.next = 24;
          return new Promise(function (resolve) {
            canvas.toBlob(function (file) {
              var fileReader = new FileReader();
              fileReader.onload = function () {
                resolve(fileReader.result);
              };
              fileReader.readAsArrayBuffer(file);
            });
          });
        case 24:
          arrayBuffer = _context.sent;
          return _context.abrupt("return", {
            base64: canvas.toDataURL('image/jpeg'),
            arrayBuffer: arrayBuffer
          });
        case 26:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _cropImage.apply(this, arguments);
}