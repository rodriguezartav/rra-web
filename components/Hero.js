import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

export default function Hero(props) {
  const t = useTranslations("index.hero");

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="relative sm:overflow-hidden">
          <div className="relative px-4 pb-16 sm:px-6 sm:pb-24 lg:pb-32 lg:px-8">
            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className=" text-gray-800">
                {t("title")}
                <br />
                {t("titleColored")}
              </span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-gray-800 sm:max-w-3xl">
              <span className="block">{t("tagLine_1")}</span>
              {t("tagLine_2")}
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
                <a
                  href="#"
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-800 hover:bg-indigo-50 sm:px-8"
                >
                  Si, aviseme cuando hay charla!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
