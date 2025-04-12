// @generated by protoc-gen-es v1.3.1 with parameter "target=js"
// @generated from file bilibili/pangu/gallery/v1/gallery.proto (package bilibili.pangu.gallery.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum bilibili.pangu.gallery.v1.GT14Status
 */
export const GT14Status = proto3.makeEnum(
  "bilibili.pangu.gallery.v1.GT14Status",
  [
    {no: 0, name: "LT14"},
    {no: 1, name: "GE14"},
    {no: 2, name: "UNKNOWN_GT14"},
  ],
);

/**
 * @generated from enum bilibili.pangu.gallery.v1.NFTStatus
 */
export const NFTStatus = proto3.makeEnum(
  "bilibili.pangu.gallery.v1.NFTStatus",
  [
    {no: 0, name: "UNDEFINED"},
    {no: 1, name: "NORMAL"},
    {no: 2, name: "DOING"},
  ],
);

/**
 * @generated from enum bilibili.pangu.gallery.v1.PolicyAgreeStatus
 */
export const PolicyAgreeStatus = proto3.makeEnum(
  "bilibili.pangu.gallery.v1.PolicyAgreeStatus",
  [
    {no: 0, name: "UNSIGNED"},
    {no: 1, name: "ACCEPTED"},
    {no: 2, name: "EXPIRED"},
  ],
);

/**
 * @generated from enum bilibili.pangu.gallery.v1.PolicyType
 */
export const PolicyType = proto3.makeEnum(
  "bilibili.pangu.gallery.v1.PolicyType",
  [
    {no: 0, name: "UNKNOWN_POLICY"},
    {no: 1, name: "WALLET"},
    {no: 2, name: "SALE"},
  ],
);

/**
 * @generated from message bilibili.pangu.gallery.v1.AgreePolicyReply
 */
export const AgreePolicyReply = proto3.makeMessageType(
  "bilibili.pangu.gallery.v1.AgreePolicyReply",
  [],
);

/**
 * @generated from message bilibili.pangu.gallery.v1.AgreePolicyReq
 */
export const AgreePolicyReq = proto3.makeMessageType(
  "bilibili.pangu.gallery.v1.AgreePolicyReq",
  () => [
    { no: 1, name: "policy_type", kind: "enum", T: proto3.getEnumType(PolicyType) },
    { no: 2, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message bilibili.pangu.gallery.v1.BasicInfoReply
 */
export const BasicInfoReply = proto3.makeMessageType(
  "bilibili.pangu.gallery.v1.BasicInfoReply",
  () => [
    { no: 1, name: "customer_service_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "agreement_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "privacy_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "links", kind: "message", T: Link, repeated: true },
  ],
);

/**
 * @generated from message bilibili.pangu.gallery.v1.BasicInfoReq
 */
export const BasicInfoReq = proto3.makeMessageType(
  "bilibili.pangu.gallery.v1.BasicInfoReq",
  () => [
    { no: 1, name: "mid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message bilibili.pangu.gallery.v1.Display
 */
export const Display = proto3.makeMessageType(
  "bilibili.pangu.gallery.v1.Display",
  () => [
    { no: 1, name: "bg_theme_light", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "bg_theme_night", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "nft_poster", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "nft_raw", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message bilibili.pangu.gallery.v1.GetLastPolicyReply
 */
export const GetLastPolicyReply = proto3.makeMessageType(
  "bilibili.pangu.gallery.v1.GetLastPolicyReply",
  () => [
    { no: 1, name: "short_desc", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "detail_jump", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message bilibili.pangu.gallery.v1.GetLastPolicyReq
 */
export const GetLastPolicyReq = proto3.makeMessageType(
  "bilibili.pangu.gallery.v1.GetLastPolicyReq",
  () => [
    { no: 1, name: "policy_type", kind: "enum", T: proto3.getEnumType(PolicyType) },
  ],
);

/**
 * @generated from message bilibili.pangu.gallery.v1.GetUserInfoReply
 */
export const GetUserInfoReply = proto3.makeMessageType(
  "bilibili.pangu.gallery.v1.GetUserInfoReply",
  () => [
    { no: 1, name: "mid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "avatar_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "help_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message bilibili.pangu.gallery.v1.GetUserInfoReq
 */
export const GetUserInfoReq = proto3.makeMessageType(
  "bilibili.pangu.gallery.v1.GetUserInfoReq",
  () => [
    { no: 1, name: "mid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message bilibili.pangu.gallery.v1.Link
 */
export const Link = proto3.makeMessageType(
  "bilibili.pangu.gallery.v1.Link",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "link_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "track_event_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message bilibili.pangu.gallery.v1.ListNFTByMidReply
 */
export const ListNFTByMidReply = proto3.makeMessageType(
  "bilibili.pangu.gallery.v1.ListNFTByMidReply",
  () => [
    { no: 1, name: "nfts", kind: "message", T: NFT, repeated: true },
    { no: 2, name: "anchor_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "end", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message bilibili.pangu.gallery.v1.ListNFTByMidReq
 */
export const ListNFTByMidReq = proto3.makeMessageType(
  "bilibili.pangu.gallery.v1.ListNFTByMidReq",
  () => [
    { no: 1, name: "mid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "category", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "biz_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "anchor_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "page_size", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message bilibili.pangu.gallery.v1.ListOrderByMidReply
 */
export const ListOrderByMidReply = proto3.makeMessageType(
  "bilibili.pangu.gallery.v1.ListOrderByMidReply",
  () => [
    { no: 1, name: "orders", kind: "message", T: Order, repeated: true },
    { no: 2, name: "anchor_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "end", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message bilibili.pangu.gallery.v1.ListOrderByMidReq
 */
export const ListOrderByMidReq = proto3.makeMessageType(
  "bilibili.pangu.gallery.v1.ListOrderByMidReq",
  () => [
    { no: 1, name: "mid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "anchor_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "page_size", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message bilibili.pangu.gallery.v1.NFT
 */
export const NFT = proto3.makeMessageType(
  "bilibili.pangu.gallery.v1.NFT",
  () => [
    { no: 1, name: "nft_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "item_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "serial_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "issuer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "display", kind: "message", T: Display },
    { no: 6, name: "detail_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "nft_status", kind: "enum", T: proto3.getEnumType(NFTStatus) },
    { no: 8, name: "item_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message bilibili.pangu.gallery.v1.Order
 */
export const Order = proto3.makeMessageType(
  "bilibili.pangu.gallery.v1.Order",
  () => [
    { no: 1, name: "item_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "serial_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "tx_hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "tx_time", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "issuer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "issue_time", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "token_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "display", kind: "message", T: Display },
    { no: 9, name: "contract_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "hash_jump", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "contract_jump", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "disable_browser_jump", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message bilibili.pangu.gallery.v1.UserCheckReply
 */
export const UserCheckReply = proto3.makeMessageType(
  "bilibili.pangu.gallery.v1.UserCheckReply",
  () => [
    { no: 1, name: "policy_status", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "gt14", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message bilibili.pangu.gallery.v1.UserCheckReq
 */
export const UserCheckReq = proto3.makeMessageType(
  "bilibili.pangu.gallery.v1.UserCheckReq",
  () => [
    { no: 1, name: "mid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "policy_type", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

