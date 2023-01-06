import Button from "@mui/material/Button";
import React from "react";
import { PageBlocksContext } from "src/contexts/PageBlocksProvider";
import uuid4 from "src/libs/uuid";
import { IEditLinkBlock } from "src/types";
import EditLinkBlock from "../EditLinkBlock";

export default function BlockManagerWidget() {

    const { blocks, addBlock, updateBlock } = React.useContext(PageBlocksContext);


    const blockElList: Array<React.ReactNode> = blocks.map(item => (
        <EditLinkBlock
            data={item}
            key={item.id}
            updateBlock={updateBlock}
        />));

    return (
        <>
            <div className="flex flex-col
                            w-full
                            h-full
                            md:border md:w-[450px]">
                <div className="flex justify-center my-2 shrink-0">
                    <Button
                        className="px-16" variant="contained"
                        onClick={() => addBlock({ id: uuid4(), type: "link", label: "", url: "" } as IEditLinkBlock)}
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