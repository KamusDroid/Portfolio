"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/desk1.png" alt="" width={700} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Soy un apasionado Data Scientist en proceso de formación en Ingeniería en Computación y Licenciatura en Ingeniería de Software, lo que me ha proporcionado una base sólida para adaptarme de manera efectiva a la dinámica de trabajo en equipos de desarrollo y cumplir con sus diversos requerimientos. Mi experiencia incluye el desarrollo y manejo de bases de datos, la creación de logins de usuario, aspectos de seguridad web, así como la gestión integral de peticiones y la mejora de la experiencia del usuario.
Mis conocimientos abarcan desde metodologías ágiles, flujos de trabajo y estructura de datos hasta evaluación de modelos, Machine Learning, Deep Learning y Data Engineering, con experiencia en el manejo eficiente de datos en la nube. He trabajado en la arquitectura de datos, la generación de informes y la creación de modelos de Machine Learning, llevando a cabo ETL con Python, Dashboards y diferentes forma de presentaciones en Power BI y Streamlit.
Con habilidades destacadas en comunicación interpersonal, búsqueda de soluciones y capacidad para liderar equipos, así como organizar y priorizar tareas incluso en situaciones de alta presión, demuestro un manejo efectivo del estrés. Estoy entusiasmado por aportar mis habilidades técnicas y soft skills a un equipo innovador, contribuyendo al éxito conjunto mientras busco avanzar y especializarme aún más en el emocionante mundo del Machine Learning.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;