/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.game = (function() {

    /**
     * Namespace game.
     * @exports game
     * @namespace
     */
    var game = {};

    game.HeadReq = (function() {

        /**
         * Properties of a HeadReq.
         * @memberof game
         * @interface IHeadReq
         * @property {number|Long|null} [uid] HeadReq uid
         * @property {string|null} [cmd] HeadReq cmd
         * @property {number|null} [type] HeadReq type
         * @property {string|null} [sId] HeadReq sId
         * @property {string|null} [iId] HeadReq iId
         * @property {string|null} [seq] HeadReq seq
         */

        /**
         * Constructs a new HeadReq.
         * @memberof game
         * @classdesc Represents a HeadReq.
         * @implements IHeadReq
         * @constructor
         * @param {game.IHeadReq=} [properties] Properties to set
         */
        function HeadReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeadReq uid.
         * @member {number|Long} uid
         * @memberof game.HeadReq
         * @instance
         */
        HeadReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * HeadReq cmd.
         * @member {string} cmd
         * @memberof game.HeadReq
         * @instance
         */
        HeadReq.prototype.cmd = "";

        /**
         * HeadReq type.
         * @member {number} type
         * @memberof game.HeadReq
         * @instance
         */
        HeadReq.prototype.type = 0;

        /**
         * HeadReq sId.
         * @member {string} sId
         * @memberof game.HeadReq
         * @instance
         */
        HeadReq.prototype.sId = "";

        /**
         * HeadReq iId.
         * @member {string} iId
         * @memberof game.HeadReq
         * @instance
         */
        HeadReq.prototype.iId = "";

        /**
         * HeadReq seq.
         * @member {string} seq
         * @memberof game.HeadReq
         * @instance
         */
        HeadReq.prototype.seq = "";

        /**
         * Creates a new HeadReq instance using the specified properties.
         * @function create
         * @memberof game.HeadReq
         * @static
         * @param {game.IHeadReq=} [properties] Properties to set
         * @returns {game.HeadReq} HeadReq instance
         */
        HeadReq.create = function create(properties) {
            return new HeadReq(properties);
        };

        /**
         * Encodes the specified HeadReq message. Does not implicitly {@link game.HeadReq.verify|verify} messages.
         * @function encode
         * @memberof game.HeadReq
         * @static
         * @param {game.IHeadReq} message HeadReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeadReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.uid);
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.cmd);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            if (message.sId != null && Object.hasOwnProperty.call(message, "sId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.sId);
            if (message.iId != null && Object.hasOwnProperty.call(message, "iId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.iId);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.seq);
            return writer;
        };

        /**
         * Encodes the specified HeadReq message, length delimited. Does not implicitly {@link game.HeadReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.HeadReq
         * @static
         * @param {game.IHeadReq} message HeadReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeadReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeadReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.HeadReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.HeadReq} HeadReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeadReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.HeadReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint64();
                    break;
                case 2:
                    message.cmd = reader.string();
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                case 4:
                    message.sId = reader.string();
                    break;
                case 5:
                    message.iId = reader.string();
                    break;
                case 6:
                    message.seq = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeadReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.HeadReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.HeadReq} HeadReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeadReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeadReq message.
         * @function verify
         * @memberof game.HeadReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeadReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                if (!$util.isString(message.cmd))
                    return "cmd: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.sId != null && message.hasOwnProperty("sId"))
                if (!$util.isString(message.sId))
                    return "sId: string expected";
            if (message.iId != null && message.hasOwnProperty("iId"))
                if (!$util.isString(message.iId))
                    return "iId: string expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isString(message.seq))
                    return "seq: string expected";
            return null;
        };

        /**
         * Creates a HeadReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.HeadReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.HeadReq} HeadReq
         */
        HeadReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.HeadReq)
                return object;
            var message = new $root.game.HeadReq();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = true;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber(true);
            if (object.cmd != null)
                message.cmd = String(object.cmd);
            if (object.type != null)
                message.type = object.type | 0;
            if (object.sId != null)
                message.sId = String(object.sId);
            if (object.iId != null)
                message.iId = String(object.iId);
            if (object.seq != null)
                message.seq = String(object.seq);
            return message;
        };

        /**
         * Creates a plain object from a HeadReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.HeadReq
         * @static
         * @param {game.HeadReq} message HeadReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeadReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.cmd = "";
                object.type = 0;
                object.sId = "";
                object.iId = "";
                object.seq = "";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber(true) : message.uid;
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                object.cmd = message.cmd;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.sId != null && message.hasOwnProperty("sId"))
                object.sId = message.sId;
            if (message.iId != null && message.hasOwnProperty("iId"))
                object.iId = message.iId;
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            return object;
        };

        /**
         * Converts this HeadReq to JSON.
         * @function toJSON
         * @memberof game.HeadReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeadReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeadReq;
    })();

    game.MsgReq = (function() {

        /**
         * Properties of a MsgReq.
         * @memberof game
         * @interface IMsgReq
         * @property {game.IHeadReq|null} [head] MsgReq head
         * @property {Uint8Array|null} [data] MsgReq data
         */

        /**
         * Constructs a new MsgReq.
         * @memberof game
         * @classdesc Represents a MsgReq.
         * @implements IMsgReq
         * @constructor
         * @param {game.IMsgReq=} [properties] Properties to set
         */
        function MsgReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgReq head.
         * @member {game.IHeadReq|null|undefined} head
         * @memberof game.MsgReq
         * @instance
         */
        MsgReq.prototype.head = null;

        /**
         * MsgReq data.
         * @member {Uint8Array} data
         * @memberof game.MsgReq
         * @instance
         */
        MsgReq.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new MsgReq instance using the specified properties.
         * @function create
         * @memberof game.MsgReq
         * @static
         * @param {game.IMsgReq=} [properties] Properties to set
         * @returns {game.MsgReq} MsgReq instance
         */
        MsgReq.create = function create(properties) {
            return new MsgReq(properties);
        };

        /**
         * Encodes the specified MsgReq message. Does not implicitly {@link game.MsgReq.verify|verify} messages.
         * @function encode
         * @memberof game.MsgReq
         * @static
         * @param {game.IMsgReq} message MsgReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.head != null && Object.hasOwnProperty.call(message, "head"))
                $root.game.HeadReq.encode(message.head, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified MsgReq message, length delimited. Does not implicitly {@link game.MsgReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.MsgReq
         * @static
         * @param {game.IMsgReq} message MsgReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.MsgReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.MsgReq} MsgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.MsgReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.head = $root.game.HeadReq.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.MsgReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.MsgReq} MsgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgReq message.
         * @function verify
         * @memberof game.MsgReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.head != null && message.hasOwnProperty("head")) {
                var error = $root.game.HeadReq.verify(message.head);
                if (error)
                    return "head." + error;
            }
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };

        /**
         * Creates a MsgReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.MsgReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.MsgReq} MsgReq
         */
        MsgReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.MsgReq)
                return object;
            var message = new $root.game.MsgReq();
            if (object.head != null) {
                if (typeof object.head !== "object")
                    throw TypeError(".game.MsgReq.head: object expected");
                message.head = $root.game.HeadReq.fromObject(object.head);
            }
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from a MsgReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.MsgReq
         * @static
         * @param {game.MsgReq} message MsgReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.head = null;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.head != null && message.hasOwnProperty("head"))
                object.head = $root.game.HeadReq.toObject(message.head, options);
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this MsgReq to JSON.
         * @function toJSON
         * @memberof game.MsgReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgReq;
    })();

    game.HeadRsp = (function() {

        /**
         * Properties of a HeadRsp.
         * @memberof game
         * @interface IHeadRsp
         * @property {number|Long|null} [uid] HeadRsp uid
         * @property {number|Long|null} [cmd] HeadRsp cmd
         * @property {number|Long|null} [code] HeadRsp code
         * @property {string|null} [seq] HeadRsp seq
         */

        /**
         * Constructs a new HeadRsp.
         * @memberof game
         * @classdesc Represents a HeadRsp.
         * @implements IHeadRsp
         * @constructor
         * @param {game.IHeadRsp=} [properties] Properties to set
         */
        function HeadRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeadRsp uid.
         * @member {number|Long} uid
         * @memberof game.HeadRsp
         * @instance
         */
        HeadRsp.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * HeadRsp cmd.
         * @member {number|Long} cmd
         * @memberof game.HeadRsp
         * @instance
         */
        HeadRsp.prototype.cmd = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * HeadRsp code.
         * @member {number|Long} code
         * @memberof game.HeadRsp
         * @instance
         */
        HeadRsp.prototype.code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * HeadRsp seq.
         * @member {string} seq
         * @memberof game.HeadRsp
         * @instance
         */
        HeadRsp.prototype.seq = "";

        /**
         * Creates a new HeadRsp instance using the specified properties.
         * @function create
         * @memberof game.HeadRsp
         * @static
         * @param {game.IHeadRsp=} [properties] Properties to set
         * @returns {game.HeadRsp} HeadRsp instance
         */
        HeadRsp.create = function create(properties) {
            return new HeadRsp(properties);
        };

        /**
         * Encodes the specified HeadRsp message. Does not implicitly {@link game.HeadRsp.verify|verify} messages.
         * @function encode
         * @memberof game.HeadRsp
         * @static
         * @param {game.IHeadRsp} message HeadRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeadRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.uid);
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.cmd);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.code);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.seq);
            return writer;
        };

        /**
         * Encodes the specified HeadRsp message, length delimited. Does not implicitly {@link game.HeadRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.HeadRsp
         * @static
         * @param {game.IHeadRsp} message HeadRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeadRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeadRsp message from the specified reader or buffer.
         * @function decode
         * @memberof game.HeadRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.HeadRsp} HeadRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeadRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.HeadRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint64();
                    break;
                case 2:
                    message.cmd = reader.int64();
                    break;
                case 3:
                    message.code = reader.int64();
                    break;
                case 4:
                    message.seq = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeadRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.HeadRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.HeadRsp} HeadRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeadRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeadRsp message.
         * @function verify
         * @memberof game.HeadRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeadRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                if (!$util.isInteger(message.cmd) && !(message.cmd && $util.isInteger(message.cmd.low) && $util.isInteger(message.cmd.high)))
                    return "cmd: integer|Long expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code) && !(message.code && $util.isInteger(message.code.low) && $util.isInteger(message.code.high)))
                    return "code: integer|Long expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isString(message.seq))
                    return "seq: string expected";
            return null;
        };

        /**
         * Creates a HeadRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.HeadRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.HeadRsp} HeadRsp
         */
        HeadRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.game.HeadRsp)
                return object;
            var message = new $root.game.HeadRsp();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = true;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber(true);
            if (object.cmd != null)
                if ($util.Long)
                    (message.cmd = $util.Long.fromValue(object.cmd)).unsigned = false;
                else if (typeof object.cmd === "string")
                    message.cmd = parseInt(object.cmd, 10);
                else if (typeof object.cmd === "number")
                    message.cmd = object.cmd;
                else if (typeof object.cmd === "object")
                    message.cmd = new $util.LongBits(object.cmd.low >>> 0, object.cmd.high >>> 0).toNumber();
            if (object.code != null)
                if ($util.Long)
                    (message.code = $util.Long.fromValue(object.code)).unsigned = false;
                else if (typeof object.code === "string")
                    message.code = parseInt(object.code, 10);
                else if (typeof object.code === "number")
                    message.code = object.code;
                else if (typeof object.code === "object")
                    message.code = new $util.LongBits(object.code.low >>> 0, object.code.high >>> 0).toNumber();
            if (object.seq != null)
                message.seq = String(object.seq);
            return message;
        };

        /**
         * Creates a plain object from a HeadRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.HeadRsp
         * @static
         * @param {game.HeadRsp} message HeadRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeadRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.cmd = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.cmd = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.code = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.code = options.longs === String ? "0" : 0;
                object.seq = "";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber(true) : message.uid;
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                if (typeof message.cmd === "number")
                    object.cmd = options.longs === String ? String(message.cmd) : message.cmd;
                else
                    object.cmd = options.longs === String ? $util.Long.prototype.toString.call(message.cmd) : options.longs === Number ? new $util.LongBits(message.cmd.low >>> 0, message.cmd.high >>> 0).toNumber() : message.cmd;
            if (message.code != null && message.hasOwnProperty("code"))
                if (typeof message.code === "number")
                    object.code = options.longs === String ? String(message.code) : message.code;
                else
                    object.code = options.longs === String ? $util.Long.prototype.toString.call(message.code) : options.longs === Number ? new $util.LongBits(message.code.low >>> 0, message.code.high >>> 0).toNumber() : message.code;
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            return object;
        };

        /**
         * Converts this HeadRsp to JSON.
         * @function toJSON
         * @memberof game.HeadRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeadRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeadRsp;
    })();

    game.MsgRsp = (function() {

        /**
         * Properties of a MsgRsp.
         * @memberof game
         * @interface IMsgRsp
         * @property {game.IHeadRsp|null} [head] MsgRsp head
         * @property {Uint8Array|null} [data] MsgRsp data
         */

        /**
         * Constructs a new MsgRsp.
         * @memberof game
         * @classdesc Represents a MsgRsp.
         * @implements IMsgRsp
         * @constructor
         * @param {game.IMsgRsp=} [properties] Properties to set
         */
        function MsgRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgRsp head.
         * @member {game.IHeadRsp|null|undefined} head
         * @memberof game.MsgRsp
         * @instance
         */
        MsgRsp.prototype.head = null;

        /**
         * MsgRsp data.
         * @member {Uint8Array} data
         * @memberof game.MsgRsp
         * @instance
         */
        MsgRsp.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new MsgRsp instance using the specified properties.
         * @function create
         * @memberof game.MsgRsp
         * @static
         * @param {game.IMsgRsp=} [properties] Properties to set
         * @returns {game.MsgRsp} MsgRsp instance
         */
        MsgRsp.create = function create(properties) {
            return new MsgRsp(properties);
        };

        /**
         * Encodes the specified MsgRsp message. Does not implicitly {@link game.MsgRsp.verify|verify} messages.
         * @function encode
         * @memberof game.MsgRsp
         * @static
         * @param {game.IMsgRsp} message MsgRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.head != null && Object.hasOwnProperty.call(message, "head"))
                $root.game.HeadRsp.encode(message.head, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified MsgRsp message, length delimited. Does not implicitly {@link game.MsgRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.MsgRsp
         * @static
         * @param {game.IMsgRsp} message MsgRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgRsp message from the specified reader or buffer.
         * @function decode
         * @memberof game.MsgRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.MsgRsp} MsgRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.MsgRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.head = $root.game.HeadRsp.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.MsgRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.MsgRsp} MsgRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgRsp message.
         * @function verify
         * @memberof game.MsgRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.head != null && message.hasOwnProperty("head")) {
                var error = $root.game.HeadRsp.verify(message.head);
                if (error)
                    return "head." + error;
            }
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };

        /**
         * Creates a MsgRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.MsgRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.MsgRsp} MsgRsp
         */
        MsgRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.game.MsgRsp)
                return object;
            var message = new $root.game.MsgRsp();
            if (object.head != null) {
                if (typeof object.head !== "object")
                    throw TypeError(".game.MsgRsp.head: object expected");
                message.head = $root.game.HeadRsp.fromObject(object.head);
            }
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from a MsgRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.MsgRsp
         * @static
         * @param {game.MsgRsp} message MsgRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.head = null;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.head != null && message.hasOwnProperty("head"))
                object.head = $root.game.HeadRsp.toObject(message.head, options);
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this MsgRsp to JSON.
         * @function toJSON
         * @memberof game.MsgRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgRsp;
    })();

    return game;
})();

module.exports = $root;
