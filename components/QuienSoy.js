export default function QuienSoy() {
  return (
    <div className="relative">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
          <div>
            <div className="mt-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                Quien es Roberto Rodriguez?
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                El es un autodidacta en la ingenieria del software, ex Penn
                State, ex Salesforce, ex Sillicon Valley que se independizó
                financieramente a los 30 años y ahora es asesor de startups en
                Boulder y Seattle mientras vive 100% off-grid en una sencilla
                cabina en el bosque de Corcovado, Peninsula de Osa.
              </p>

              <p className="mt-4 text-lg text-gray-500">
                Su vocación esta en la exploración de la mente humana, y para
                esto se prepara como aprendiz de maestros en ramas Shaolin,
                Shaman e Hindu. Aprendiz del Taita Lucho Flores, Estudiante de
                la Montaña Azul y miembro del Self-Realization Fellowship de
                Parahamsa Yogananda.
              </p>

              <p className="mt-4 text-lg text-gray-500">
                Dicidió crear un ``Master Class`` colaborar con el progreso de
                su comunidad. Inventó y regalo al mundo esta plataforma donde el
                y otros maestros pueden ejercer independientemente de gobiernos
                y centros de enseñanza obsoletos.
              </p>

              <div className="mt-6">
                <a
                  href="#"
                  className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                >
                  Si, quiero trabajar con Roberto
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0">
          <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <img
              className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
              alt="Inbox user interface"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
