import {
  Card,
  CardBody,
  Button,
} from "@material-tailwind/react";

interface Feature {
  title: string,
  img: string,
  link?: string
}

interface CardDefaultProps {
  feature: Feature,
}

export function HorizontalCard({ feature }: CardDefaultProps) {
  const servicios = [
    {
      titulo: "Servicios de calibración",
      texto: "Cumpliendo los estándares establecidos en la Norma ISO/IEC 17025:2017.",
      color: "#7fb0d0",
    },
    {
      titulo: "Consultoría",
      texto: "En diseño, desarrollo e implementación de Sistemas de gestión ISO/IEC 17025:2017.",
      color: "#337599",
    },
    {
      titulo: "Auditorías",
      texto: "De Sistemas de gestión basados en la Norma ISO/IEC 17025:2017.",
      color: "#244f66",
    },
    {
      titulo: "Servicios de Aseguramiento",
      texto: "De la validez de los resultados emitidos.",
      color: "#a3a3a3",
    },
    {
      titulo: "Formación y capacitación",
      texto: "En áreas de metrología y calidad.",
      color: "#726c6c",
    },
    {
      titulo: "Desarrollo y validación de software",
      texto: "Para laboratorios de ensayo y calibración.",
      color: "#535252",
    },
  ];
  return (
    <Card
      className="w-full flex-row border-l-8 border-[#337599] rounded-lg shadow-lg bg-white max-w-4xl mx-auto"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <CardBody
        className="p-8 text-gray-700 space-y-6 mt-[-20px] "
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <p>
          <strong>RCJ SERVICES</strong> es una empresa de Servicios Globales de Metrología y Calidad cuyo campo de actividades se circunscribe a seis (6) grandes áreas de servicios de metrología y calidad que abarcan las siguientes actividades especializadas:
        </p>

        <div className="w-full flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {servicios.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center rounded-full 
                   w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 p-4 bg-white overflow-hidden
                   shadow-xl shadow-gray-300"
                style={{ border: `8px solid ${item.color}` }}
              >
                <h3
                  className="font-semibold text-xs md:text-sm text-gray-900 mb-1 leading-tight px-1"
                  style={{ color: item.color }}
                >
                  {item.titulo}
                </h3>
                <p className="text-[10px] md:text-xs text-gray-700 leading-tight px-2 break-words">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </div>


        <p>
          RCJ SERVICES incorpora la más moderna tecnología para la asistencia adecuada y oportuna a todos sus clientes en las distintas áreas de servicios especializados que ofrece. Con una amplia experiencia respaldada por más de 25 años de operación continua.
        </p>

        <p>
          En RCJ SERVICES estamos comprometidos en la construcción de un mundo mejor, con mediciones más confiables y exactas.
        </p>

        <p>
          Es por eso que es muy fácil para nosotros responder la pregunta: <em>¿Quiénes Somos?</em>
        </p>

        <div className="bg-[#337599] text-white p-6 rounded-xl shadow-xl max-w-xl mx-auto text-center">
  <p className="italic font-semibold text-lg">
    “Somos RCJ SERVICES, Metrología y Calidad para la Vida”
  </p>
</div>


        {feature.link && (
          <div className="flex justify-end">
            <a href={feature.link} className="inline-block">
              <Button
                variant="gradient"
                color="blue"
                className="flex items-center gap-2"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </div>
        )}
      </CardBody>
    </Card>
  );
}
