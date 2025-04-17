import { Paper } from "@mui/material";
import { ReactElement } from "react";

function IanPaper({children, className}: {children: ReactElement, className?: string}) {
    return (
        <div className={className}>
            <Paper className="flex justify-center align-center w-full h-full">
                {children}
            </Paper>
        </div>
    )
} 

export default IanPaper