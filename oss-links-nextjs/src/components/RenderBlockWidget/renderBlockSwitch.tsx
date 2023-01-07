import RenderLinkBlock from 'src/components/RenderLinkBlock';
import { IEditAvatarBlock, IEditBlockTypes, IEditLinkBlock } from 'src/types';
import RenderAvatarBlock from '../RenderAvatarBlock';

export default function renderBlockSwitch(block: IEditBlockTypes) {
    switch (block.type) {
        case "link":
            return (<RenderLinkBlock key={block.id} data={block as IEditLinkBlock} />);
        case "avatar":
            return (<RenderAvatarBlock key={block.id} data={block as IEditAvatarBlock} />);
    }
}