import React from "react";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import WhatsAppButton from "./whatsappButton";

interface DrawerDefaultProps {
    open: boolean,
    closeDrawer: () => void,
    product: any,
    number: string,
    msg: string
}

export function DrawerDefault({ open, closeDrawer, product, number, msg }: DrawerDefaultProps) {

    return (
        <Drawer open={open} onClose={closeDrawer} overlay={false} className="p-4 border-solid border-gray border-2" size={700} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <div className="mb-6 flex items-center justify-between">
                <Typography variant="h5" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    {product?.title}
                </Typography>
                <IconButton variant="text" color="blue-gray" onClick={closeDrawer} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </IconButton>
            </div>

            <div className="w-full">
                <img src={product?.img} width={300} className="m-auto" />
            </div>

            <Typography color="gray" className="mb-8 mt-4 pr-4 font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                {product?.desc}
            </Typography>

            <Typography color="gray" className="mb-4 pr-4 font-bold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Caracteristicas Generales:
            </Typography>

            <ul className="list-disc pl-4">
                {product?.info.map((desc: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, index: React.Key | null | undefined) => (
                    <li key={index}>
                        <Typography color="gray" className="pr-4 font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            {desc}
                        </Typography>
                    </li>
                ))}
            </ul>

            <div className="flex flex-row gap-2 mt-2">

                <a href={product?.pdf} target="_blank">
                    <Button variant="filled" className="h-full" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        Documentación en PDF
                    </Button>
                </a>

                <WhatsAppButton number={number} msg={msg}/>

            </div>
        </Drawer>

    );
}