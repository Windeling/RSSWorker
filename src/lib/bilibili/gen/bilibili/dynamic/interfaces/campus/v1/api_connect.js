// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=js"
// @generated from file bilibili/dynamic/interfaces/campus/v1/api.proto (package bilibili.dynamic.interfaces.campus.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ActionReportReply, ActionReportReq } from "./api_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 *
 *
 * @generated from service bilibili.dynamic.interfaces.campus.v1.Campus
 */
export const Campus = {
  typeName: "bilibili.dynamic.interfaces.campus.v1.Campus",
  methods: {
    /**
     *
     *
     * @generated from rpc bilibili.dynamic.interfaces.campus.v1.Campus.ActionReport
     */
    actionReport: {
      name: "ActionReport",
      I: ActionReportReq,
      O: ActionReportReply,
      kind: MethodKind.Unary,
    },
  }
};

