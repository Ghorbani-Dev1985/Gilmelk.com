import localFont from "next/font/local";

export const EstedadFont = localFont({
    src: [
        {
            path: "../../public/font/estedad/woff2/Estedad-FD-Black.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../public/font/estedad/woff2/Estedad-FD-ExtraBold.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../public/font/estedad/woff2/Estedad-FD-Bold.woff2",
            weight: "bold",
            style: "normal",
        },
        {
            path: "../../public/font/estedad/woff2/Estedad-FD-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/font/estedad/woff2/Estedad-FD-ExtraLight.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/font/estedad/woff2/Estedad-FD-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../public/font/estedad/woff2/Estedad-FD-Thin.woff2",
            weight: "100",
            style: "normal",
        },
        {
            path: "../../public/font/estedad/woff2/Estedad-FD-Regular.woff2",
            weight: "normal",
            style: "normal",
        },
    ],
    variable: "--font-estedad-FD"
})