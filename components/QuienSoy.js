import Image from "next/image";

export default function QuienSoy() {
  return (
    <div className="relative mt-12">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:pt-16 lg:max-w-none lg:mx-0 lg:px-0">
          <div>
            <div className="mt-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                Quien es Roberto Rodriguez?
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                El es un autodidacta en la ingenieria del software que empezó su
                aprendisaje a las 9 años. ex Penn State, ex Salesforce, ex
                Sillicon Valley. Ahora es CTO de los startups de unos amigos en
                Boulder y Seattle mientras vive 100% off-grid en una sencilla
                cabina en el bosque de Corcovado, Peninsula de Osa.
              </p>

              <p className="mt-4 text-lg text-gray-500">
                Dicidió crear un ``Master Class`` para lideres por que ve un
                gran potencial en el uso de tecnología para resolver problemas
                sociales y comerciales en Latinoamerica - que se puede
                aprovechar mejor actualizando a los tomadores de decisiones
                publicos y privados.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0">
          <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <Image
              width="500"
              height="600"
              className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              src="/IMG_4547.jpg"
              alt="Inbox user interface"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
