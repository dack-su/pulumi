/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.exportSymbol('proto.lumirpc.GetResourceRequest', null, global);
goog.exportSymbol('proto.lumirpc.GetResourceResponse', null, global);
goog.exportSymbol('proto.lumirpc.LogRequest', null, global);
goog.exportSymbol('proto.lumirpc.LogSeverity', null, global);
goog.exportSymbol('proto.lumirpc.QueryResourcesRequest', null, global);
goog.exportSymbol('proto.lumirpc.QueryResourcesResponse', null, global);
goog.exportSymbol('proto.lumirpc.ReadLocationRequest', null, global);
goog.exportSymbol('proto.lumirpc.ReadLocationsRequest', null, global);
goog.exportSymbol('proto.lumirpc.ReadLocationsResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lumirpc.GetResourceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lumirpc.GetResourceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lumirpc.GetResourceRequest.displayName = 'proto.lumirpc.GetResourceRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lumirpc.GetResourceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lumirpc.GetResourceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lumirpc.GetResourceRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lumirpc.GetResourceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lumirpc.GetResourceRequest}
 */
proto.lumirpc.GetResourceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lumirpc.GetResourceRequest;
  return proto.lumirpc.GetResourceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lumirpc.GetResourceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lumirpc.GetResourceRequest}
 */
proto.lumirpc.GetResourceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lumirpc.GetResourceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lumirpc.GetResourceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lumirpc.GetResourceRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lumirpc.GetResourceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.lumirpc.GetResourceRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.lumirpc.GetResourceRequest.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.lumirpc.GetResourceRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.lumirpc.GetResourceRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lumirpc.GetResourceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lumirpc.GetResourceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lumirpc.GetResourceResponse.displayName = 'proto.lumirpc.GetResourceResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lumirpc.GetResourceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lumirpc.GetResourceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lumirpc.GetResourceResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lumirpc.GetResourceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    obj: (f = msg.getObj()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lumirpc.GetResourceResponse}
 */
proto.lumirpc.GetResourceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lumirpc.GetResourceResponse;
  return proto.lumirpc.GetResourceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lumirpc.GetResourceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lumirpc.GetResourceResponse}
 */
proto.lumirpc.GetResourceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setObj(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lumirpc.GetResourceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lumirpc.GetResourceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lumirpc.GetResourceResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lumirpc.GetResourceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObj();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Struct obj = 1;
 * @return {?proto.google.protobuf.Struct}
 */
proto.lumirpc.GetResourceResponse.prototype.getObj = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 1));
};


/** @param {?proto.google.protobuf.Struct|undefined} value */
proto.lumirpc.GetResourceResponse.prototype.setObj = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.lumirpc.GetResourceResponse.prototype.clearObj = function() {
  this.setObj(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.lumirpc.GetResourceResponse.prototype.hasObj = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lumirpc.QueryResourcesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lumirpc.QueryResourcesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lumirpc.QueryResourcesRequest.displayName = 'proto.lumirpc.QueryResourcesRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lumirpc.QueryResourcesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lumirpc.QueryResourcesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lumirpc.QueryResourcesRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lumirpc.QueryResourcesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filter: (f = msg.getFilter()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lumirpc.QueryResourcesRequest}
 */
proto.lumirpc.QueryResourcesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lumirpc.QueryResourcesRequest;
  return proto.lumirpc.QueryResourcesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lumirpc.QueryResourcesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lumirpc.QueryResourcesRequest}
 */
proto.lumirpc.QueryResourcesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lumirpc.QueryResourcesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lumirpc.QueryResourcesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lumirpc.QueryResourcesRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lumirpc.QueryResourcesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.lumirpc.QueryResourcesRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.lumirpc.QueryResourcesRequest.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional google.protobuf.Struct filter = 2;
 * @return {?proto.google.protobuf.Struct}
 */
proto.lumirpc.QueryResourcesRequest.prototype.getFilter = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 2));
};


/** @param {?proto.google.protobuf.Struct|undefined} value */
proto.lumirpc.QueryResourcesRequest.prototype.setFilter = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.lumirpc.QueryResourcesRequest.prototype.clearFilter = function() {
  this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.lumirpc.QueryResourcesRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lumirpc.QueryResourcesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lumirpc.QueryResourcesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lumirpc.QueryResourcesResponse.displayName = 'proto.lumirpc.QueryResourcesResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lumirpc.QueryResourcesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lumirpc.QueryResourcesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lumirpc.QueryResourcesResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lumirpc.QueryResourcesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    obj: (f = msg.getObj()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lumirpc.QueryResourcesResponse}
 */
proto.lumirpc.QueryResourcesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lumirpc.QueryResourcesResponse;
  return proto.lumirpc.QueryResourcesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lumirpc.QueryResourcesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lumirpc.QueryResourcesResponse}
 */
proto.lumirpc.QueryResourcesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setObj(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lumirpc.QueryResourcesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lumirpc.QueryResourcesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lumirpc.QueryResourcesResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lumirpc.QueryResourcesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObj();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Struct obj = 1;
 * @return {?proto.google.protobuf.Struct}
 */
proto.lumirpc.QueryResourcesResponse.prototype.getObj = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 1));
};


/** @param {?proto.google.protobuf.Struct|undefined} value */
proto.lumirpc.QueryResourcesResponse.prototype.setObj = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.lumirpc.QueryResourcesResponse.prototype.clearObj = function() {
  this.setObj(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.lumirpc.QueryResourcesResponse.prototype.hasObj = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lumirpc.LogRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lumirpc.LogRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lumirpc.LogRequest.displayName = 'proto.lumirpc.LogRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lumirpc.LogRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lumirpc.LogRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lumirpc.LogRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lumirpc.LogRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    severity: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lumirpc.LogRequest}
 */
proto.lumirpc.LogRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lumirpc.LogRequest;
  return proto.lumirpc.LogRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lumirpc.LogRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lumirpc.LogRequest}
 */
proto.lumirpc.LogRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.lumirpc.LogSeverity} */ (reader.readEnum());
      msg.setSeverity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lumirpc.LogRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lumirpc.LogRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lumirpc.LogRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lumirpc.LogRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeverity();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional LogSeverity severity = 1;
 * @return {!proto.lumirpc.LogSeverity}
 */
proto.lumirpc.LogRequest.prototype.getSeverity = function() {
  return /** @type {!proto.lumirpc.LogSeverity} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.lumirpc.LogSeverity} value */
proto.lumirpc.LogRequest.prototype.setSeverity = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.lumirpc.LogRequest.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.lumirpc.LogRequest.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lumirpc.ReadLocationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lumirpc.ReadLocationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lumirpc.ReadLocationRequest.displayName = 'proto.lumirpc.ReadLocationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lumirpc.ReadLocationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lumirpc.ReadLocationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lumirpc.ReadLocationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lumirpc.ReadLocationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lumirpc.ReadLocationRequest}
 */
proto.lumirpc.ReadLocationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lumirpc.ReadLocationRequest;
  return proto.lumirpc.ReadLocationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lumirpc.ReadLocationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lumirpc.ReadLocationRequest}
 */
proto.lumirpc.ReadLocationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lumirpc.ReadLocationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lumirpc.ReadLocationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lumirpc.ReadLocationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lumirpc.ReadLocationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.lumirpc.ReadLocationRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.lumirpc.ReadLocationRequest.prototype.setToken = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lumirpc.ReadLocationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lumirpc.ReadLocationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lumirpc.ReadLocationsRequest.displayName = 'proto.lumirpc.ReadLocationsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lumirpc.ReadLocationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lumirpc.ReadLocationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lumirpc.ReadLocationsRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lumirpc.ReadLocationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lumirpc.ReadLocationsRequest}
 */
proto.lumirpc.ReadLocationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lumirpc.ReadLocationsRequest;
  return proto.lumirpc.ReadLocationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lumirpc.ReadLocationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lumirpc.ReadLocationsRequest}
 */
proto.lumirpc.ReadLocationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lumirpc.ReadLocationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lumirpc.ReadLocationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lumirpc.ReadLocationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lumirpc.ReadLocationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.lumirpc.ReadLocationsRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.lumirpc.ReadLocationsRequest.prototype.setToken = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lumirpc.ReadLocationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lumirpc.ReadLocationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lumirpc.ReadLocationsResponse.displayName = 'proto.lumirpc.ReadLocationsResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lumirpc.ReadLocationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lumirpc.ReadLocationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lumirpc.ReadLocationsResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lumirpc.ReadLocationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    properties: (f = msg.getProperties()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lumirpc.ReadLocationsResponse}
 */
proto.lumirpc.ReadLocationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lumirpc.ReadLocationsResponse;
  return proto.lumirpc.ReadLocationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lumirpc.ReadLocationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lumirpc.ReadLocationsResponse}
 */
proto.lumirpc.ReadLocationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setProperties(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lumirpc.ReadLocationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lumirpc.ReadLocationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lumirpc.ReadLocationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lumirpc.ReadLocationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProperties();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Struct properties = 1;
 * @return {?proto.google.protobuf.Struct}
 */
proto.lumirpc.ReadLocationsResponse.prototype.getProperties = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 1));
};


/** @param {?proto.google.protobuf.Struct|undefined} value */
proto.lumirpc.ReadLocationsResponse.prototype.setProperties = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.lumirpc.ReadLocationsResponse.prototype.clearProperties = function() {
  this.setProperties(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.lumirpc.ReadLocationsResponse.prototype.hasProperties = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * @enum {number}
 */
proto.lumirpc.LogSeverity = {
  DEBUG: 0,
  INFO: 1,
  WARNING: 2,
  ERROR: 3
};

goog.object.extend(exports, proto.lumirpc);
