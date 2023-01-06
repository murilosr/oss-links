import React from 'react';
import { IAvatarBlock, IEditAvatarBlock, IEditBlockTypes, IEditLinkBlock } from 'src/types';
import EditAvatarBlock from 'src/components/EditAvatarBlock';
import EditLinkBlock from 'src/components/EditLinkBlock';

export default function editBlockSwitch(block: IEditBlockTypes, updateBlockHandler: (block: IEditBlockTypes) => void) {
    switch (block.type) {
        case "link":
            return (<EditLinkBlock data={block as IEditLinkBlock} updateBlock={updateBlockHandler} />);
        case "avatar":
            return (<EditAvatarBlock data={block as IEditAvatarBlock} updateBlock={updateBlockHandler} />);

    }
}