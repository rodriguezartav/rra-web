import Head from "next/head";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  AnnotationIcon,
  ChatAlt2Icon,
  ChatAltIcon,
  DocumentReportIcon,
  HeartIcon,
  InboxIcon,
  MenuIcon,
  PencilAltIcon,
  QuestionMarkCircleIcon,
  ReplyIcon,
  SparklesIcon,
  TrashIcon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Header from "../components/Header";
import Hero from "../components/Hero";
import QuienSoy from "../components/QuienSoy";
import About from "../components/About";

import Process from "../components/Process";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Index(props) {
  return (
    <div className="bg-white">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Hero />

        <QuienSoy />
        <About />

        {/* Gradient Feature Section */}
        <Process />

        {/* CTA Section */}
        <NewsLetter />
      </main>

      <Footer />
    </div>
  );
}

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: {
        ...require(`../messages/${locale}.json`),
      },
    },
  };
}
