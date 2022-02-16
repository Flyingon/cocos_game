/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

// import {protobuf} from "./protobuf_all"
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

    /**
     * MsgType enum.
     * @name game.MsgType
     * @enum {number}
     * @property {number} MSG_TYPE_UNSPECIFIED=0 MSG_TYPE_UNSPECIFIED value
     * @property {number} MSG_TYPE_CLIENT=1 MSG_TYPE_CLIENT value
     * @property {number} MSG_TYPE_SVR=2 MSG_TYPE_SVR value
     */
    game.MsgType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MSG_TYPE_UNSPECIFIED"] = 0;
        values[valuesById[1] = "MSG_TYPE_CLIENT"] = 1;
        values[valuesById[2] = "MSG_TYPE_SVR"] = 2;
        return values;
    })();

    game.MsgHead = (function() {

        /**
         * Properties of a MsgHead.
         * @memberof game
         * @interface IMsgHead
         * @property {string|null} [uid] MsgHead uid
         * @property {string|null} [cmd] MsgHead cmd
         * @property {string|null} [seq] MsgHead seq
         * @property {number|null} [code] MsgHead code
         * @property {string|null} [msg] MsgHead msg
         * @property {game.MsgType|null} [type] MsgHead type
         * @property {string|null} [sId] MsgHead sId
         * @property {string|null} [iId] MsgHead iId
         * @property {string|null} [cId] MsgHead cId
         */

        /**
         * Constructs a new MsgHead.
         * @memberof game
         * @classdesc Represents a MsgHead.
         * @implements IMsgHead
         * @constructor
         * @param {game.IMsgHead=} [properties] Properties to set
         */
        function MsgHead(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgHead uid.
         * @member {string} uid
         * @memberof game.MsgHead
         * @instance
         */
        MsgHead.prototype.uid = "";

        /**
         * MsgHead cmd.
         * @member {string} cmd
         * @memberof game.MsgHead
         * @instance
         */
        MsgHead.prototype.cmd = "";

        /**
         * MsgHead seq.
         * @member {string} seq
         * @memberof game.MsgHead
         * @instance
         */
        MsgHead.prototype.seq = "";

        /**
         * MsgHead code.
         * @member {number} code
         * @memberof game.MsgHead
         * @instance
         */
        MsgHead.prototype.code = 0;

        /**
         * MsgHead msg.
         * @member {string} msg
         * @memberof game.MsgHead
         * @instance
         */
        MsgHead.prototype.msg = "";

        /**
         * MsgHead type.
         * @member {game.MsgType} type
         * @memberof game.MsgHead
         * @instance
         */
        MsgHead.prototype.type = 0;

        /**
         * MsgHead sId.
         * @member {string} sId
         * @memberof game.MsgHead
         * @instance
         */
        MsgHead.prototype.sId = "";

        /**
         * MsgHead iId.
         * @member {string} iId
         * @memberof game.MsgHead
         * @instance
         */
        MsgHead.prototype.iId = "";

        /**
         * MsgHead cId.
         * @member {string} cId
         * @memberof game.MsgHead
         * @instance
         */
        MsgHead.prototype.cId = "";

        /**
         * Creates a new MsgHead instance using the specified properties.
         * @function create
         * @memberof game.MsgHead
         * @static
         * @param {game.IMsgHead=} [properties] Properties to set
         * @returns {game.MsgHead} MsgHead instance
         */
        MsgHead.create = function create(properties) {
            return new MsgHead(properties);
        };

        /**
         * Encodes the specified MsgHead message. Does not implicitly {@link game.MsgHead.verify|verify} messages.
         * @function encode
         * @memberof game.MsgHead
         * @static
         * @param {game.IMsgHead} message MsgHead message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgHead.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.cmd);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.seq);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.msg);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.type);
            if (message.sId != null && Object.hasOwnProperty.call(message, "sId"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.sId);
            if (message.iId != null && Object.hasOwnProperty.call(message, "iId"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.iId);
            if (message.cId != null && Object.hasOwnProperty.call(message, "cId"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.cId);
            return writer;
        };

        /**
         * Encodes the specified MsgHead message, length delimited. Does not implicitly {@link game.MsgHead.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.MsgHead
         * @static
         * @param {game.IMsgHead} message MsgHead message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgHead.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgHead message from the specified reader or buffer.
         * @function decode
         * @memberof game.MsgHead
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.MsgHead} MsgHead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgHead.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.MsgHead();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.string();
                    break;
                case 2:
                    message.cmd = reader.string();
                    break;
                case 3:
                    message.seq = reader.string();
                    break;
                case 4:
                    message.code = reader.int32();
                    break;
                case 5:
                    message.msg = reader.string();
                    break;
                case 6:
                    message.type = reader.int32();
                    break;
                case 7:
                    message.sId = reader.string();
                    break;
                case 8:
                    message.iId = reader.string();
                    break;
                case 9:
                    message.cId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgHead message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.MsgHead
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.MsgHead} MsgHead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgHead.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgHead message.
         * @function verify
         * @memberof game.MsgHead
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgHead.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                if (!$util.isString(message.cmd))
                    return "cmd: string expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isString(message.seq))
                    return "seq: string expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.sId != null && message.hasOwnProperty("sId"))
                if (!$util.isString(message.sId))
                    return "sId: string expected";
            if (message.iId != null && message.hasOwnProperty("iId"))
                if (!$util.isString(message.iId))
                    return "iId: string expected";
            if (message.cId != null && message.hasOwnProperty("cId"))
                if (!$util.isString(message.cId))
                    return "cId: string expected";
            return null;
        };

        /**
         * Creates a MsgHead message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.MsgHead
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.MsgHead} MsgHead
         */
        MsgHead.fromObject = function fromObject(object) {
            if (object instanceof $root.game.MsgHead)
                return object;
            var message = new $root.game.MsgHead();
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.cmd != null)
                message.cmd = String(object.cmd);
            if (object.seq != null)
                message.seq = String(object.seq);
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            switch (object.type) {
            case "MSG_TYPE_UNSPECIFIED":
            case 0:
                message.type = 0;
                break;
            case "MSG_TYPE_CLIENT":
            case 1:
                message.type = 1;
                break;
            case "MSG_TYPE_SVR":
            case 2:
                message.type = 2;
                break;
            }
            if (object.sId != null)
                message.sId = String(object.sId);
            if (object.iId != null)
                message.iId = String(object.iId);
            if (object.cId != null)
                message.cId = String(object.cId);
            return message;
        };

        /**
         * Creates a plain object from a MsgHead message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.MsgHead
         * @static
         * @param {game.MsgHead} message MsgHead
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgHead.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = "";
                object.cmd = "";
                object.seq = "";
                object.code = 0;
                object.msg = "";
                object.type = options.enums === String ? "MSG_TYPE_UNSPECIFIED" : 0;
                object.sId = "";
                object.iId = "";
                object.cId = "";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                object.cmd = message.cmd;
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.game.MsgType[message.type] : message.type;
            if (message.sId != null && message.hasOwnProperty("sId"))
                object.sId = message.sId;
            if (message.iId != null && message.hasOwnProperty("iId"))
                object.iId = message.iId;
            if (message.cId != null && message.hasOwnProperty("cId"))
                object.cId = message.cId;
            return object;
        };

        /**
         * Converts this MsgHead to JSON.
         * @function toJSON
         * @memberof game.MsgHead
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgHead.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgHead;
    })();

    game.Msg = (function() {

        /**
         * Properties of a Msg.
         * @memberof game
         * @interface IMsg
         * @property {game.IMsgHead|null} [head] Msg head
         * @property {Uint8Array|null} [data] Msg data
         */

        /**
         * Constructs a new Msg.
         * @memberof game
         * @classdesc Represents a Msg.
         * @implements IMsg
         * @constructor
         * @param {game.IMsg=} [properties] Properties to set
         */
        function Msg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Msg head.
         * @member {game.IMsgHead|null|undefined} head
         * @memberof game.Msg
         * @instance
         */
        Msg.prototype.head = null;

        /**
         * Msg data.
         * @member {Uint8Array} data
         * @memberof game.Msg
         * @instance
         */
        Msg.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new Msg instance using the specified properties.
         * @function create
         * @memberof game.Msg
         * @static
         * @param {game.IMsg=} [properties] Properties to set
         * @returns {game.Msg} Msg instance
         */
        Msg.create = function create(properties) {
            return new Msg(properties);
        };

        /**
         * Encodes the specified Msg message. Does not implicitly {@link game.Msg.verify|verify} messages.
         * @function encode
         * @memberof game.Msg
         * @static
         * @param {game.IMsg} message Msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.head != null && Object.hasOwnProperty.call(message, "head"))
                $root.game.MsgHead.encode(message.head, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified Msg message, length delimited. Does not implicitly {@link game.Msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.Msg
         * @static
         * @param {game.IMsg} message Msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Msg message from the specified reader or buffer.
         * @function decode
         * @memberof game.Msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.Msg} Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.Msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.head = $root.game.MsgHead.decode(reader, reader.uint32());
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
         * Decodes a Msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.Msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.Msg} Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Msg message.
         * @function verify
         * @memberof game.Msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.head != null && message.hasOwnProperty("head")) {
                var error = $root.game.MsgHead.verify(message.head);
                if (error)
                    return "head." + error;
            }
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };

        /**
         * Creates a Msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.Msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.Msg} Msg
         */
        Msg.fromObject = function fromObject(object) {
            if (object instanceof $root.game.Msg)
                return object;
            var message = new $root.game.Msg();
            if (object.head != null) {
                if (typeof object.head !== "object")
                    throw TypeError(".game.Msg.head: object expected");
                message.head = $root.game.MsgHead.fromObject(object.head);
            }
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from a Msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.Msg
         * @static
         * @param {game.Msg} message Msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Msg.toObject = function toObject(message, options) {
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
                object.head = $root.game.MsgHead.toObject(message.head, options);
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this Msg to JSON.
         * @function toJSON
         * @memberof game.Msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Msg;
    })();

    return game;
})();

module.exports = $root;
