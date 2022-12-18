import React from "react";
import Button from "@mui/material/Button";
import AppBar from "src/components/AppBar";
import AddIcon from '@mui/icons-material/Add';

export default function AdminPanel(props: { children?: React.ReactNode }) {
    return (
        <>
                <AppBar />

            <main className="main-size flex items-center justify-center">

                {props.children}
                
            </main>
        </>
    );
}