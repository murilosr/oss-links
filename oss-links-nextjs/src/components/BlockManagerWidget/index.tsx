import Button from "@mui/material/Button";
import React from "react";
import { PageBlocksContext } from "src/contexts/PageBlocksProvider";
import uuid4 from "src/libs/uuid";
import { IEditAvatarBlock, IEditLinkBlock } from "src/types";
import editBlockSwitch from "./editBlockSwitch";

export default function BlockManagerWidget() {

    const { blocks, addBlock, updateBlock } = React.useContext(PageBlocksContext);

    const blockElList: Array<React.ReactNode> = blocks.map(item => editBlockSwitch(item, updateBlock));

    const addBlockHandler = () => {
        // For test purpose only.
        // In the future, the Add Block button will transform in a card to select the block type
        if(Math.random() <= 0.5){
            addBlock({ id: uuid4(), type: "link", label: "", url: "" } as IEditLinkBlock);
        }
        else{
            addBlock({ id: uuid4(), type: "avatar", src: "https://kingstonplaza.com/wp-content/uploads/2015/07/generic-avatar.png" } as IEditAvatarBlock);
        }
    }

    return (
        <>
            <div className="flex flex-col
                            w-full
                            h-full
                            md:border md:w-[450px]">
                <div className="flex justify-center my-2 shrink-0">
                    <Button
                        className="px-16" variant="contained"
                        onClick={addBlockHandler}
                    >
                        Add block
                    </Button>
                </div>
                <div className="flex flex-col space-y-4 pb-4 md:px-6 overflow-y-auto">
                    {blockElList}
                </div>
            </div>
        </>
    )
}