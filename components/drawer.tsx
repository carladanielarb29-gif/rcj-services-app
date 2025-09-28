import React from "react";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
    Input,
    Textarea,
    Spinner,
} from "@material-tailwind/react";
import { DialogDefault } from "./modal";

interface DrawerDefaultProps {
    open: boolean,
    closeDrawer: () => void,
    product: any,
    number: string,
    msg: string,
    isReclamo?: boolean; // Nueva prop para diferenciar entre Queja y cotización
}

export function DrawerDefault({ open, closeDrawer, product, number, msg, isReclamo }: DrawerDefaultProps) {

    const [openModal, setOpenModal] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleOpenModal = () => setOpenModal(!openModal);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget as HTMLFormElement);
        const data = {
            fullName: form.get("fullName"),
            email: form.get("email"),
            phone: form.get("phone"),
            company: form.get("company"),
            taxId: form.get("taxId"),
            message: form.get("message"),
            product: product?.title || "No especificado"
        };

        try {
            setLoading(true);
            if (isReclamo) {
                const res = await fetch("/api/send-reclamos", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                });

                if (res.ok) {
                    console.log("Correo enviado ✅");
                    setOpenModal(true);
                } else {
                    console.error("Error al enviar correo ❌");
                    alert("Hubo un error al enviar tu solicitud, inténtalo de nuevo.");
                }
            } else {
                const res = await fetch("/api/send", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                });


                if (res.ok) {
                    console.log("Correo enviado ✅");
                    setOpenModal(true);
                } else {
                    console.error("Error al enviar correo ❌");
                    alert("Hubo un error al enviar tu solicitud, inténtalo de nuevo.");
                }
            }

        } catch (error) {
            console.error(error);
            alert("Error de conexión con el servidor.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <Drawer
                open={open}
                onClose={closeDrawer}
                overlay={false}
                className="p-4 border-solid border-gray border-2 max-w-full sm:max-w-lg"
                size={700}
                placeholder=""
                {...({} as any)}
            >
                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                    <Typography
                        variant="h5"
                        color="blue-gray"
                        placeholder=""
                        {...({} as any)}
                    >
                        {!isReclamo && "Solicitar cotización para:"} {product?.title}
                    </Typography>
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        onClick={closeDrawer}
                        placeholder=""
                        {...({} as any)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </IconButton>
                </div>

                {/* Formulario */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <Input
                        name="fullName"
                        type="text"
                        label="Nombre completo"
                        required onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                    <Input
                        name="email"
                        type="email"
                        label="Correo electrónico"
                        required onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                    <Input
                        name="phone"
                        type="tel"
                        label="Teléfono de contacto"
                        required onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                    <Input
                        name="company"
                        type="text"
                        label="Nombre de la empresa"
                        required onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                    <Input
                        name="taxId"
                        type="text"
                        label="ID fiscal de la empresa (RIF, NIT, etc.)"
                        required onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                    <Textarea
                        name="message"
                        label={!isReclamo ? "Descripción general de la solicitud" : "Descripción de la Queja"}
                        required onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                    <Button
                        disabled={loading}
                        type="submit" variant="filled" color="blue" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                        className="flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <>
                                <Spinner className="h-4 w-4" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} /> Procesando...
                            </>
                        ) : (
                            "Enviar"
                        )}
                    </Button>
                </form>

            </Drawer>

            <DialogDefault open={openModal} handler={handleOpenModal} isReclamo={isReclamo} />

        </>

    );
}
