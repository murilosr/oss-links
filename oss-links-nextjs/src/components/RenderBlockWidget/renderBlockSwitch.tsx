import React from 'react';
import { IAvatarBlock, IEditAvatarBlock, IEditBlockTypes, IEditLinkBlock } from 'src/types';
import RenderLinkBlock from 'src/components/RenderLinkBlock';
import RenderAvatarBlock from '../RenderAvatarBlock';

export default function renderBlockSwitch(block: IEditBlockTypes) {
    switch (block.type) {
        case "link":
            return (<RenderLinkBlock data={block as IEditLinkBlock} />);
        case "avatar":
            return (<RenderAvatarBlock data={block as IEditAvatarBlock} />);
    }
}