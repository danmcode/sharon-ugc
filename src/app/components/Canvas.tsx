import { ReactNode } from "react"

interface CanvasProps {
    children: ReactNode
}

const BASE_WIDTH = 1200;
const BASE_HEIGHT = 800;

export const Canvas = ({
    children
}: CanvasProps) => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-[#f4ebe1] overflow-hidden">
            <div
                className="relative"
                style={{
                    width: "100%",
                    maxWidth: BASE_WIDTH,
                    aspectRatio: `${BASE_WIDTH} / ${BASE_HEIGHT}`,
                }}
            >
                {children}
            </div>
        </div>
    )
}

export const pxToPercent = (px: number, base: number) => `${(px / base) * 100}%`;
