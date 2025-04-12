// @generated by protoc-gen-es v1.3.1 with parameter "target=js"
// @generated from file bilibili/app/interfaces/v1/history.proto (package bilibili.app.interface.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { PlayerArgs } from "../../archive/middleware/v1/preload_pb.js";

/**
 * 设备标识代码
 *
 * @generated from enum bilibili.app.interface.v1.DT
 */
export const DT = proto3.makeEnum(
  "bilibili.app.interface.v1.DT",
  [
    {no: 0, name: "Unknown"},
    {no: 1, name: "Phone"},
    {no: 2, name: "Pad"},
    {no: 3, name: "PC"},
    {no: 4, name: "TV"},
    {no: 5, name: "Car"},
    {no: 6, name: "Iot"},
    {no: 7, name: "AndPad"},
  ],
);

/**
 * 搜索历史记录来源
 *
 * @generated from enum bilibili.app.interface.v1.HistorySource
 */
export const HistorySource = proto3.makeEnum(
  "bilibili.app.interface.v1.HistorySource",
  [
    {no: 0, name: "history_VALUE"},
    {no: 1, name: "shopping_VALUE"},
  ],
);

/**
 * 专栏卡片
 *
 * @generated from message bilibili.app.interface.v1.CardArticle
 */
export const CardArticle = proto3.makeMessageType(
  "bilibili.app.interface.v1.CardArticle",
  () => [
    { no: 1, name: "covers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "mid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "displayAttention", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "badge", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "relation", kind: "message", T: Relation },
  ],
);

/**
 * 课程卡片
 *
 * @generated from message bilibili.app.interface.v1.CardCheese
 */
export const CardCheese = proto3.makeMessageType(
  "bilibili.app.interface.v1.CardCheese",
  () => [
    { no: 1, name: "cover", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "progress", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "duration", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "subtitle", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "state", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * 直播卡片
 *
 * @generated from message bilibili.app.interface.v1.CardLive
 */
export const CardLive = proto3.makeMessageType(
  "bilibili.app.interface.v1.CardLive",
  () => [
    { no: 1, name: "cover", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "mid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "tag", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "ststus", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "display_attention", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "relation", kind: "message", T: Relation },
  ],
);

/**
 * pgc稿件卡片
 *
 * @generated from message bilibili.app.interface.v1.CardOGV
 */
export const CardOGV = proto3.makeMessageType(
  "bilibili.app.interface.v1.CardOGV",
  () => [
    { no: 1, name: "cover", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "progress", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "duration", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "subtitle", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "badge", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "state", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * ugc稿件卡片
 *
 * @generated from message bilibili.app.interface.v1.CardUGC
 */
export const CardUGC = proto3.makeMessageType(
  "bilibili.app.interface.v1.CardUGC",
  () => [
    { no: 1, name: "cover", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "progress", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "duration", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "mid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "display_attention", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "cid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 8, name: "page", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 9, name: "subtitle", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "relation", kind: "message", T: Relation },
    { no: 11, name: "bvid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "videos", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 13, name: "short_link", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "share_subtitle", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "view", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 16, name: "state", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * 清空历史记录-请求
 *
 * @generated from message bilibili.app.interface.v1.ClearReq
 */
export const ClearReq = proto3.makeMessageType(
  "bilibili.app.interface.v1.ClearReq",
  () => [
    { no: 1, name: "business", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * 游标信息
 *
 * @generated from message bilibili.app.interface.v1.Cursor
 */
export const Cursor = proto3.makeMessageType(
  "bilibili.app.interface.v1.Cursor",
  () => [
    { no: 1, name: "max", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "maxTp", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * 历史记录卡片信息
 *
 * @generated from message bilibili.app.interface.v1.CursorItem
 */
export const CursorItem = proto3.makeMessageType(
  "bilibili.app.interface.v1.CursorItem",
  () => [
    { no: 1, name: "card_ugc", kind: "message", T: CardUGC, oneof: "card_item" },
    { no: 2, name: "card_ogv", kind: "message", T: CardOGV, oneof: "card_item" },
    { no: 3, name: "card_article", kind: "message", T: CardArticle, oneof: "card_item" },
    { no: 4, name: "card_live", kind: "message", T: CardLive, oneof: "card_item" },
    { no: 5, name: "card_cheese", kind: "message", T: CardCheese, oneof: "card_item" },
    { no: 6, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "viewAt", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 9, name: "kid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "oid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 11, name: "business", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "tp", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 13, name: "dt", kind: "message", T: DeviceType },
    { no: 14, name: "has_share", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * 获取历史记录列表(旧版)-响应
 *
 * @generated from message bilibili.app.interface.v1.CursorReply
 */
export const CursorReply = proto3.makeMessageType(
  "bilibili.app.interface.v1.CursorReply",
  () => [
    { no: 1, name: "items", kind: "message", T: CursorItem, repeated: true },
    { no: 2, name: "tab", kind: "message", T: CursorTab, repeated: true },
    { no: 3, name: "cursor", kind: "message", T: Cursor },
    { no: 4, name: "hasMore", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * 获取历史记录列表(旧版)-请求
 *
 * @generated from message bilibili.app.interface.v1.CursorReq
 */
export const CursorReq = proto3.makeMessageType(
  "bilibili.app.interface.v1.CursorReq",
  () => [
    { no: 1, name: "cursor", kind: "message", T: Cursor },
    { no: 2, name: "business", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "player_preload", kind: "message", T: PlayerPreloadParams },
    { no: 4, name: "player_args", kind: "message", T: PlayerArgs },
  ],
);

/**
 * 业务分类表
 *
 * @generated from message bilibili.app.interface.v1.CursorTab
 */
export const CursorTab = proto3.makeMessageType(
  "bilibili.app.interface.v1.CursorTab",
  () => [
    { no: 1, name: "business", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "router", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "focus", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * 获取历史记录列表-响应
 *
 * @generated from message bilibili.app.interface.v1.CursorV2Reply
 */
export const CursorV2Reply = proto3.makeMessageType(
  "bilibili.app.interface.v1.CursorV2Reply",
  () => [
    { no: 1, name: "items", kind: "message", T: CursorItem, repeated: true },
    { no: 2, name: "cursor", kind: "message", T: Cursor },
    { no: 3, name: "hasMore", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "empty_link", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * 获取历史记录列表-请求
 *
 * @generated from message bilibili.app.interface.v1.CursorV2Req
 */
export const CursorV2Req = proto3.makeMessageType(
  "bilibili.app.interface.v1.CursorV2Req",
  () => [
    { no: 1, name: "cursor", kind: "message", T: Cursor },
    { no: 2, name: "business", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "player_preload", kind: "message", T: PlayerPreloadParams },
    { no: 4, name: "player_args", kind: "message", T: PlayerArgs },
    { no: 5, name: "is_local", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * 删除历史记录-请求
 *
 * @generated from message bilibili.app.interface.v1.DeleteReq
 */
export const DeleteReq = proto3.makeMessageType(
  "bilibili.app.interface.v1.DeleteReq",
  () => [
    { no: 1, name: "his_info", kind: "message", T: HisInfo },
  ],
);

/**
 * 设备类型
 *
 * @generated from message bilibili.app.interface.v1.DeviceType
 */
export const DeviceType = proto3.makeMessageType(
  "bilibili.app.interface.v1.DeviceType",
  () => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(DT) },
    { no: 2, name: "icon", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * 历史记录信息
 *
 * @generated from message bilibili.app.interface.v1.HisInfo
 */
export const HisInfo = proto3.makeMessageType(
  "bilibili.app.interface.v1.HisInfo",
  () => [
    { no: 1, name: "business", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "kid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * 获取历史记录tab-响应
 *
 * @generated from message bilibili.app.interface.v1.HistoryTabReply
 */
export const HistoryTabReply = proto3.makeMessageType(
  "bilibili.app.interface.v1.HistoryTabReply",
  () => [
    { no: 1, name: "tab", kind: "message", T: CursorTab, repeated: true },
  ],
);

/**
 * 获取历史记录tab-请求
 *
 * @generated from message bilibili.app.interface.v1.HistoryTabReq
 */
export const HistoryTabReq = proto3.makeMessageType(
  "bilibili.app.interface.v1.HistoryTabReq",
  () => [
    { no: 1, name: "business", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "source", kind: "enum", T: proto3.getEnumType(HistorySource) },
    { no: 3, name: "keyword", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * 获取最新的历史记录-响应
 *
 * @generated from message bilibili.app.interface.v1.LatestHistoryReply
 */
export const LatestHistoryReply = proto3.makeMessageType(
  "bilibili.app.interface.v1.LatestHistoryReply",
  () => [
    { no: 1, name: "items", kind: "message", T: CursorItem },
    { no: 2, name: "scene", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "rtime", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "flag", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * 获取最新的历史记录-请求
 *
 * @generated from message bilibili.app.interface.v1.LatestHistoryReq
 */
export const LatestHistoryReq = proto3.makeMessageType(
  "bilibili.app.interface.v1.LatestHistoryReq",
  () => [
    { no: 1, name: "business", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "player_preload", kind: "message", T: PlayerPreloadParams },
  ],
);

/**
 * 空响应
 *
 * @generated from message bilibili.app.interface.v1.NoReply
 */
export const NoReply = proto3.makeMessageType(
  "bilibili.app.interface.v1.NoReply",
  [],
);

/**
 * 页面信息
 *
 * @generated from message bilibili.app.interface.v1.Page
 */
export const Page = proto3.makeMessageType(
  "bilibili.app.interface.v1.Page",
  () => [
    { no: 1, name: "pn", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "total", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * 秒开参数
 *
 * @generated from message bilibili.app.interface.v1.PlayerPreloadParams
 */
export const PlayerPreloadParams = proto3.makeMessageType(
  "bilibili.app.interface.v1.PlayerPreloadParams",
  () => [
    { no: 1, name: "qn", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "fnver", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "fnval", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "forceHost", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "fourk", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * 关系信息
 *
 * @generated from message bilibili.app.interface.v1.Relation
 */
export const Relation = proto3.makeMessageType(
  "bilibili.app.interface.v1.Relation",
  () => [
    { no: 1, name: "status", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "is_follow", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "is_followed", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * 搜索历史记录-响应
 *
 * @generated from message bilibili.app.interface.v1.SearchReply
 */
export const SearchReply = proto3.makeMessageType(
  "bilibili.app.interface.v1.SearchReply",
  () => [
    { no: 1, name: "items", kind: "message", T: CursorItem, repeated: true },
    { no: 2, name: "hasMore", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "page", kind: "message", T: Page },
  ],
);

/**
 * 搜索历史记录-请求
 *
 * @generated from message bilibili.app.interface.v1.SearchReq
 */
export const SearchReq = proto3.makeMessageType(
  "bilibili.app.interface.v1.SearchReq",
  () => [
    { no: 1, name: "keyword", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pn", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "business", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

