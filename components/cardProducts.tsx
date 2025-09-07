import { Button, Card, CardBody, CardFooter, CardHeader, IconButton, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { DrawerDefault } from "./drawer";
import WhatsAppButton from "./whatsappButton";

export interface Product {
    title: string;
    image: string;
}

interface CardDefaultProps {
    product: Product,
}

export function CardProducts({ product }: CardDefaultProps) {
    const [open, setOpen] = useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);
    const phoneNumber = '584249698556';
    const message = 'Hola!, Estoy interesado en este producto: ' + product?.title;

    return (
        <>
            <Card
                className="mt-6 w-96 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
                placeholder=""
                onPointerEnterCapture={() => { }}
                onPointerLeaveCapture={() => { }}
            >
                <CardHeader
                    color="blue-gray"
                    className="relative h-56"
                    placeholder=""
                    onPointerEnterCapture={() => { }}
                    onPointerLeaveCapture={() => { }}
                >
                    <img
                        src={product.image}
                        alt={product.title}
                        className="h-full w-full object-cover rounded-t-xl"
                    />
                </CardHeader>
                <CardBody
                    placeholder=""
                    onPointerEnterCapture={() => { }}
                    onPointerLeaveCapture={() => { }}
                >
                    <Typography
                        variant="h5"
                        className="mb-2 text-center text-blue-900 font-semibold"
                        placeholder=""
                        onPointerEnterCapture={() => { }}
                        onPointerLeaveCapture={() => { }}
                    >
                        {product?.title}
                    </Typography>
                </CardBody>
                <CardFooter
                    className="pt-0 flex justify-center gap-2"
                    placeholder=""
                    onPointerEnterCapture={() => { }}
                    onPointerLeaveCapture={() => { }}
                >
                    <Button
                        onClick={openDrawer}
                        placeholder=""
                        onPointerEnterCapture={() => { }}
                        onPointerLeaveCapture={() => { }}
                    >
                        Obtener más información
                    </Button>
                    <WhatsAppButton number={phoneNumber} msg={message} />
                </CardFooter>
            </Card>

            <DrawerDefault
                open={open}
                closeDrawer={closeDrawer}
                product={product}
                number={phoneNumber}
                msg={message}
            />
        </>
    );
}
