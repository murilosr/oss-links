import { StringLiteral } from "typescript"

export interface IBaseEditBlock {
    id : string
    type : "link" | "avatar"
}

export interface ILinkBlock {
    label : string
    url : string
}

export interface IAvatarBlock {
    src : string
}

export type IBlockTypes = ILinkBlock | IAvatarBlock;

export type IEditLinkBlock = ILinkBlock & IBaseEditBlock;
export type IEditAvatarBlock = IAvatarBlock & IBaseEditBlock;

export type IEditBlockTypes = IBlockTypes & IBaseEditBlock;