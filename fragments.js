"use strict";

exports.__esModule = true;
exports.GatsbyImageColors = void 0;

var _gatsby = require("gatsby");

const GatsbyImageColors = (0, _gatsby.graphql)`
  fragment GatsbyImageColors on FileFields {
    colors {
      vibrant
      darkVibrant
      lightVibrant
      muted
      darkMuted
      lightMuted
    }
  }
`;
exports.GatsbyImageColors = GatsbyImageColors;