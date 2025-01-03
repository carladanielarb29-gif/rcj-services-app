import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { DrawerDefault } from "./drawer";
import WhatsAppButton from "./whatsappButton";

    interface Product {
        title: string,
        img: string,
        descSmal: string,
        desc: string,
        info: Array<string>


    }

   interface CardDefaultProps {
    product: Product,
   }


  export function CardProducts({product}:CardDefaultProps ) {
    const [open, setOpen] = useState(false);
 
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);
    const phoneNumber = '584249698556'; // Replace with the actual phone number in international format
    const message = 'Hola!, Estoy interesado en este producto: ' + product?.title;

    return (
        <>
            <Card className="mt-6 w-96" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <CardHeader color="blue-gray" className="relative h-56 flex" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <img
                    src={product?.img}
                    alt="card-image"
                />
                </CardHeader>
                <CardBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <Typography variant="h5" color="blue-gray" className="mb-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    {product?.title}
                </Typography>
                <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    {product?.descSmal}
                </Typography>
                </CardBody>
                <CardFooter className="pt-0" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <div className="flex flex-row gap-2">
                    <Button onClick={openDrawer} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Obtener más información</Button>
                    <WhatsAppButton number={phoneNumber} msg={message}/>
                </div>
                </CardFooter>
            </Card>
            <DrawerDefault open={open} closeDrawer={closeDrawer} product={product} number={phoneNumber} msg={message}/>
        </>

    );
  }