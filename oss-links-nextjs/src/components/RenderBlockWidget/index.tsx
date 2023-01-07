import React from "react";
import { PageBlocksContext } from "src/contexts/PageBlocksProvider";
import renderBlockSwitch from "./renderBlockSwitch";

export default function RenderBlockWidget() {

    const { blocks } = React.useContext(PageBlocksContext);
    const blockElList: Array<React.ReactNode> = blocks.map(item => renderBlockSwitch(item));

    return (
        <div className="flex flex-col justify-start items-center
                        w-full h-full overflow-y-auto my-4
                        space-y-4 md:w-[768px]"
        >
            {blockElList}
        </div>
    )
}