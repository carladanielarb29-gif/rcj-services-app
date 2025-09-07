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
  return (
    <Card 
      className="w-full flex-row border-l-8 border-blue-800 rounded-lg shadow-lg bg-white"
      placeholder={undefined} 
      onPointerEnterCapture={undefined} 
      onPointerLeaveCapture={undefined}
    >
      <CardBody 
        className="p-8 text-gray-700 space-y-6 mt-[-20px]"
        placeholder={undefined} 
        onPointerEnterCapture={undefined} 
        onPointerLeaveCapture={undefined}
      >
        <p>
          <strong>RCJ SERVICES</strong> es una empresa de Servicios Globales de Metrología y Calidad cuyo campo de actividades se circunscribe a seis (6) grandes áreas de servicios de metrología y calidad que abarcan las siguientes actividades especializadas:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Servicios de calibración</strong> cumpliendo los estándares establecidos en la Norma ISO/IEC 17025:2017.</li>
          <li><strong>Consultoría</strong> en diseño, desarrollo e implementación de Sistemas de gestión ISO/IEC 17025:2017.</li>
          <li><strong>Auditorías</strong> de Sistemas de gestión basados en la Norma ISO/IEC 17025:2017.</li>
          <li><strong>Servicios de Aseguramiento</strong> de la validez de los resultados emitidos.</li>
          <li><strong>Formación y capacitación</strong> en áreas de metrología y calidad.</li>
          <li><strong>Desarrollo y validación de software</strong> para laboratorios de ensayo y calibración.</li>
        </ul>

        <p>
          RCJ SERVICES incorpora la más moderna tecnología para la asistencia adecuada y oportuna a todos sus clientes en las distintas áreas de servicios especializados que ofrece. Con una amplia experiencia respaldada por más de 25 años de operación continua.
        </p>

        <p>
          En RCJ SERVICES estamos comprometidos en la construcción de un mundo mejor, con mediciones más confiables y exactas.
        </p>

        <p>
          Es por eso que es muy fácil para nosotros responder la pregunta: <em>¿Quiénes Somos?</em>
        </p>

        <p className="italic font-semibold text-blue-gray-800 text-center text-lg">
          “Somos RCJ SERVICES, Metrología y Calidad para la Vida”
        </p>

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
