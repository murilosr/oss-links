import Button from "@mui/material/Button";
import React from "react";
import EditBlock from "src/components/EditBlock";

export default function BlockManagerWidget() {
    return (
        <>
            <div className="flex flex-col
                            w-full
                            h-full
                            md:border md:w-[450px]">
                <div className="flex justify-center my-2 shrink-0">
                    <Button className="px-16" variant="contained">Add block</Button>
                </div>
                <div className="flex flex-col space-y-4 pb-4 md:px-6 overflow-y-auto">
                    <EditBlock />
                    <EditBlock />
                    <EditBlock />
                    <EditBlock />
                    <EditBlock />
                    <EditBlock />
                    <EditBlock />
                    <EditBlock />
                </div>
            </div>
        </>
    )
}