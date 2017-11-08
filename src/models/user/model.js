const mongoose = require('mongoose');
const schema = require('./schema');
const contentType = require('../../constants/contentType').USER;

const model = mongoose.model(contentType, schema);

mongoose.Schemas[contentType] = schema;

module.exports = model;
