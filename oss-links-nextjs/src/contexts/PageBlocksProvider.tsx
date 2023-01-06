import React from "react";
import { IEditBlockTypes } from "src/types";

type PageBlocksContextData = {
    blocks: Array<IEditBlockTypes>
    clearBlocks : () => void
    addBlock : (block: IEditBlockTypes) => void
    removeBlock : (id : string) => void
    updateBlock : (newBlock : IEditBlockTypes) => void
};

export const PageBlocksContext = React.createContext({} as PageBlocksContextData);

export const PageBlocksProvider = ({ children }: React.PropsWithChildren) => {

    const [blocks, setBlocks] = React.useState<Array<IEditBlockTypes>>([]);
    
    const clearBlocks = () => {
        setBlocks([]);
    }

    const addBlock = (block: IEditBlockTypes) => {
        setBlocks([...blocks, block]);
    }

    const removeBlock = (id : string) => {
        const tmpList = [...blocks];
        const index = tmpList.findIndex(obj => obj.id == id);

        tmpList.splice(index, 1);
        setBlocks(tmpList);
    }

    const updateBlock = (newBlock : IEditBlockTypes) => {
        const tmpList = [...blocks];
        const index = tmpList.findIndex(obj => obj.id == newBlock.id);

        tmpList.splice(index,1,newBlock);
        setBlocks(tmpList);
    }

    return (
        <PageBlocksContext.Provider
            value={{
                blocks,
                clearBlocks,
                addBlock,
                removeBlock,
                updateBlock
            }}
        >
            {children}
        </PageBlocksContext.Provider>
    );
};
