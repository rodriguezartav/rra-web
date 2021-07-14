import { CheckIcon, XIcon } from "@heroicons/react/solid";

const people = [
  {
    name: "Presentaciones en Vivo",
    role: "Siempre Gratis",
    bio: "Todas las semanas segun calendario de horario previo se habilta la videoconferencia durante 45 minutos.",
  },

  {
    name: "Presentaciones Grabadas",
    role: "c/ 2500",

    bio: "Todas las presentaciones quedan grabadas y pueden ser accesadas 'on-demand' utilizando auto-pago de Sinpe",
  },
  {
    name: "Conversatorio",
    role: "c/ 25,000",

    bio: "Posterior a la presentación, quienes lo desean pueden unirse al conversatorio que estara habilitado durante 45 minutos posterior a la presentación.",
  },
  {
    name: "Presentaciones Privadas",
    role: "c/ 100,000",

    bio: "Los participantes regulares del conversatorio pueden calendarizar clases privadas en franjas de tiempo limitadas.",
  },
];

function Process() {
  return (
    <div className="max-w-5xl mx-auto p-10 mt-10 pt-4 bg-gray-200">
      <p className="mt-2 mb-8 text-xl font-extrabold text-gray-900 tracking-tight sm:text-2xl">
        Estrenando una nueva forma de compartir conocimiento
      </p>

      <ul className="space-y-12  lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
        {people.map((person) => (
          <li
            className="b-1  border-1 border-white border-2 p-3"
            key={person.name}
          >
            <div className=" sm:grid sm:grid-cols-2  sm:gap-6 sm:space-y-0 lg:gap-8">
              <div className="sm:col-span-2">
                <div className="space-y-4">
                  <div className="text-lg leading-6 text-center font-medium space-y-1">
                    <h3>{person.name}</h3>
                    <p className="text-indigo-600">{person.role}</p>
                  </div>
                  <div className="text-lg text-center">
                    <p className="text-gray-500">{person.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p className=" text-sm text-center max-w-md text-gray-800 mx-auto my-4">
        En este app es en sí un demo de soluciones para Videoconferencia,
        "Auto-Sinpe", Call Center Whatsapp, mercadeo, ecommerce, analytics que
        son mencionadas en las charlas y compartidas mediante open source.
      </p>
    </div>
  );
}

/* This example requires Tailwind CSS v2.0+ */

const plans = [
  {
    title: "Videos On Demand",
    featured: false,
    description: "Vea o repase dsds",
    priceMonthly: 2500,
    cta: "Pronto: Compre sus videos en linea",
    priceYearly: 56,
    mainFeatures: [
      { id: 1, value: "Vea los videos en cualquier momento" },
      { id: 2, value: "Pruebe el pago Pura Vida de Sinpe Movil" },
    ],
  },
  {
    title: "Streaming En Vivo",
    featured: true,
    description: "The best financial services for your thriving business.",
    priceMonthly: 0,
    cta: "Ingrese con su cuenta de LinkedIn",
    priceYearly: 220,
    mainFeatures: [
      { id: 1, value: "Presentación cada semána" },
      { id: 2, value: "Consisa, practica y clara" },
      { id: 3, value: "30 minutos puntiales " },
      { id: 4, value: "Privado y en la Web. Sin instalar Apps" },
      { id: 5, value: "Gratis para siempre" },
    ],
  },
  {
    title: "Conversatorio en Vivo",
    featured: false,
    description: "",
    priceMonthly: 10000,
    priceYearly: 140,
    cta: "Compre aquí durante cada presentación",
    mainFeatures: [
      { id: 1, value: "Q&A abierto al final de las presentaciones" },
      { id: 2, value: "Conversación informal sin formatos ni reglas" },
      { id: 3, value: "Pruebe el pago Pura Vida de SinpeMovil" },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="bg-gray-50">
      <div className="relative bg-indigo-600">
        {/* Overlapping background */}

        <div className="relative max-w-2xl mx-auto pt-16 px-4 text-center sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            <span className="block lg:inline">Masterclass 2021</span>
          </h1>
          <p className="mt-4 text-xl max-w-2xl mx-auto text-indigo-100">
            Presentaciones "en vivo" basadas en experiencias de primera mano
            sobre empresas que compiten en los mercados mas demandantes del
            mundo.
          </p>
        </div>

        {/* Cards */}
        <div className="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-indigo-700 rounded-tl-lg rounded-tr-lg lg:block"
          />

          <div className="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3">
            <Videos />
            <Streaming />
            <QA />
          </div>
        </div>
      </div>
      <div className="bg-indigo-600">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Abierto al publico</span>
            <span className="block text-sm ">por tiempo limitado</span>
          </h2>

          <a
            href="#"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Registrese gratis con LinkedIn
          </a>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Aproveche esta oportunidad HOY, no hay garantia de que este mañana.
          </p>
        </div>
      </div>
    </div>
  );
}

function Videos(props) {
  const plan = plans[0];

  return (
    <div
      key={plan.title}
      className={classNames(
        plan.featured
          ? "bg-white ring-2 ring-indigo-700 shadow-md"
          : "bg-indigo-700 lg:bg-transparent",
        "pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12"
      )}
    >
      <div>
        <h3
          className={classNames(
            plan.featured ? "text-indigo-600" : "text-white",
            "text-sm font-semibold uppercase tracking-wide"
          )}
        >
          {plan.title}
        </h3>
        <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
          <div className="mt-3 flex items-center">
            <p
              className={classNames(
                plan.featured ? "text-indigo-600" : "text-white",
                "text-4xl font-extrabold tracking-tight"
              )}
            >
              ₡2500
            </p>
            <div className="ml-4">
              <p
                className={classNames(
                  plan.featured ? "text-gray-700" : "text-white",
                  "text-sm"
                )}
              >
                CRC / VIDEO
              </p>
            </div>
          </div>
          <a
            href="#"
            disabled
            className={classNames(
              plan.featured
                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                : "bg-white text-indigo-600 hover:bg-indigo-50",
              "mt-6  w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full"
            )}
          >
            Ingrese el catalogo de videos
          </a>
        </div>
      </div>
      <h4 className="sr-only">Features</h4>
      <ul
        className={classNames(
          plan.featured
            ? "border-gray-200 divide-gray-200"
            : "border-indigo-500 divide-indigo-500 divide-opacity-75",
          "mt-7 border-t divide-y lg:border-t-0"
        )}
      >
        {plan.mainFeatures.map((mainFeature) => (
          <li key={mainFeature.id} className="py-3 flex items-center">
            <CheckIcon
              className={classNames(
                plan.featured ? "text-indigo-500" : "text-indigo-200",
                "w-5 h-5 flex-shrink-0"
              )}
              aria-hidden="true"
            />
            <span
              className={classNames(
                plan.featured ? "text-gray-600" : "text-white",
                "ml-3 text-sm font-medium"
              )}
            >
              {mainFeature.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Streaming(props) {
  const plan = plans[1];

  return (
    <div
      key={plan.title}
      className={classNames(
        plan.featured
          ? "bg-white ring-2 ring-indigo-700 shadow-md"
          : "bg-indigo-700 lg:bg-transparent",
        "pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12"
      )}
    >
      <div>
        <h3
          className={classNames(
            plan.featured ? "text-indigo-600" : "text-white",
            "text-sm font-semibold uppercase tracking-wide"
          )}
        >
          {plan.title}
        </h3>
        <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
          <div className="mt-3 flex items-center">
            <p
              className={classNames(
                plan.featured ? "text-indigo-600" : "text-white",
                "text-4xl font-extrabold tracking-tight"
              )}
            >
              Siempre Gratis
            </p>
            <div className="ml-4">
              <p
                className={classNames(
                  plan.featured ? "text-gray-700" : "text-white",
                  "text-sm"
                )}
              >
                0.00 CRC
              </p>
            </div>
          </div>
          <a
            href="#"
            className={classNames(
              plan.featured
                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                : "bg-white text-indigo-600 hover:bg-indigo-50",
              "mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full"
            )}
          >
            {plan.cta}
          </a>
          <small className="text-indigo-500 mt-3 text-center">
            Proxima clase empieza en 4 dias
          </small>
        </div>
      </div>
      <h4 className="sr-only">Features</h4>
      <ul
        className={classNames(
          plan.featured
            ? "border-gray-200 divide-gray-200"
            : "border-indigo-500 divide-indigo-500 divide-opacity-75",
          "mt-7 border-t divide-y lg:border-t-0"
        )}
      >
        {plan.mainFeatures.map((mainFeature) => (
          <li key={mainFeature.id} className="py-3 flex items-center">
            <CheckIcon
              className={classNames(
                plan.featured ? "text-indigo-500" : "text-indigo-200",
                "w-5 h-5 flex-shrink-0"
              )}
              aria-hidden="true"
            />
            <span
              className={classNames(
                plan.featured ? "text-gray-600" : "text-white",
                "ml-3 text-sm font-medium"
              )}
            >
              {mainFeature.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function QA(props) {
  const plan = plans[2];

  return (
    <div
      key={plan.title}
      className={classNames(
        plan.featured
          ? "bg-white ring-2 ring-indigo-700 shadow-md"
          : "bg-indigo-700 lg:bg-transparent",
        "pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12"
      )}
    >
      <div>
        <h3
          className={classNames(
            plan.featured ? "text-indigo-600" : "text-white",
            "text-sm font-semibold uppercase tracking-wide"
          )}
        >
          {plan.title}
        </h3>
        <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
          <div className="mt-3 flex items-center">
            <p
              className={classNames(
                plan.featured ? "text-indigo-600" : "text-white",
                "text-4xl font-extrabold tracking-tight"
              )}
            >
              ₡10,000
            </p>
            <div className="ml-4">
              <p
                className={classNames(
                  plan.featured ? "text-gray-700" : "text-white",
                  "text-sm"
                )}
              >
                CRC
              </p>
            </div>
          </div>
          <a
            href="#"
            disabled
            className={classNames(
              plan.featured
                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                : "bg-gray-400 text-indigo-600 hover:bg-indigo-50",
              "mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full"
            )}
          >
            {plan.cta}
          </a>
          <small className="text-white mt-3">
            Este link se habilita cuando el conversatorio esta abierto
          </small>
        </div>
      </div>
      <h4 className="sr-only">Features</h4>
      <ul
        className={classNames(
          plan.featured
            ? "border-gray-200 divide-gray-200"
            : "border-indigo-500 divide-indigo-500 divide-opacity-75",
          "mt-7 border-t divide-y lg:border-t-0"
        )}
      >
        {plan.mainFeatures.map((mainFeature) => (
          <li key={mainFeature.id} className="py-3 flex items-center">
            <CheckIcon
              className={classNames(
                plan.featured ? "text-indigo-500" : "text-indigo-200",
                "w-5 h-5 flex-shrink-0"
              )}
              aria-hidden="true"
            />
            <span
              className={classNames(
                plan.featured ? "text-gray-600" : "text-white",
                "ml-3 text-sm font-medium"
              )}
            >
              {mainFeature.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
