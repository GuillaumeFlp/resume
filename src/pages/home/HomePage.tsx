import Navbar from "@/components/navbar";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import BlurFade from "@/components/ui/blur-fade";
import BlurFadeText from "@/components/ui/blur-fade-text";
import { GlobeIcon } from "@radix-ui/react-icons";

const BLUR_FADE_DELAY = 0.04;

function HomePage() {
  return (
    <div
      id="home-page"
      className="min-h-screen bg-background font-sans antialiased max-w-3xl mx-auto py-12 sm:py-24 px-6"
    >
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <section id="hero">
          <div className="mx-auto w-full max-w-3xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text="Guillaume Filipe 🚀"
                />
                <BlurFadeText
                  className="max-w-[600px] md:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text="Ingénieur logiciel fullstack spécialisé dans le développement web."
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-28 border">
                  <AvatarImage
                    alt="Guillaume Filipe"
                    src="/resume/images/profil.jpeg"
                  />
                  <AvatarFallback>GF</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>

        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">A propos</h2>
          </BlurFade>
          <BlurFadeText
            className="prose max-w-full text-pretty font-sans text-md text-muted-foreground dark:prose-invert"
            delay={BLUR_FADE_DELAY * 4}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </section>

        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {[
                "React",
                "Typescript",
                "Node.js",
                "Postgres",
                "Docker",
                "TODO",
              ].map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 5 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">
                Expériences professionnelles
              </h2>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <ResumeCard
                logoUrl="/resume/images/bam_karaoke_box.png"
                altText="BAM Karaoke Box"
                title="Senior Software Engineer Full Stack"
                subtitle="BAM Karaoke Box - Paris"
                period="Mai 2023 - Aujourd'hui"
                description="TODO"
              />
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <ResumeCard
                logoUrl="/resume/images/popchef.png"
                altText="Popchef"
                title="Software Engineer Full Stack"
                subtitle="Popchef - Paris"
                period="Novembre 2022 - Mai 2023"
                description={`
- • Développement du back-office:
    - • Création et gestion des menus afin de prévoir l'approvisionnement des frigos
    - • Gestion de l'affichage (affichage promotionnel, menus, informations...) sur les écrans des frigos
        - • Stack: React, Typescript, Node.js, GraphQL, PostgreSQL, MongoDB
• Mise en place et écriture des tests unitaires et d'intégration avec Jest et Cypress
• Support et résolution de bugs
    - • Application client, back-office...
                `}
              />
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 8}>
              <ResumeCard
                logoUrl="/resume/images/thales.png"
                altText="Thales"
                title="Software Engineer Full Stack"
                subtitle="Thales SIX GTS France - Gennevilliers"
                period="Septembre 2020 - Novembre 2022"
                description={`
- • Développement d'une application hybride (Web/Android) offrant des services avancés : Chat, Téléphonie, Cartographie
    - • Stack: JavaScript, Node.js, Sqlite3

- • Développement d'une application de monitoring pour la gestion et la supervision des différents services
    - • Stack: React, Node.js, Typescript, PostgreSQL

- • Cadrage technique et fonctionnel des développements
- • Écriture de de tests unitaires et d'intégration avec Jest et Robot Framework
- • Mise en place d'une plateforme d'une plateforme d'intégration et déploiement continu
    - • Jenkins, SonarQube, Docker
- • Méthode agile Scrum et Kanban
                `}
              />
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <ResumeCard
                logoUrl="/resume/images/thales.png"
                altText="Thales"
                title="Software Engineer Full Stack - Alternance"
                subtitle="Thales SIX GTS France - Gennevilliers"
                period="Septembre 2017 - Septembre 2020"
                description={`
- • Développement d'une application hybride (Web/Android) offrant des services avancés : Chat, Téléphonie, Cartographie
    - • Stack: JavaScript, Node.js, Sqlite3

- • Développement d'une application de monitoring pour la gestion et la supervision des différents services
    - • Stack: React, Node.js, Typescript, PostgreSQL

- • Cadrage technique et fonctionnel des développements
- • Écriture de de tests unitaires et d'intégration avec Jest et Robot Framework
- • Mise en place d'une plateforme d'une plateforme d'intégration et déploiement continu
    - • Jenkins, SonarQube, Docker
- • Méthode agile Scrum et Kanban
               `}
              />
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <ResumeCard
                logoUrl="/resume/images/weiss.jpg"
                altText="Weiss Technik France"
                title="Stage"
                subtitle="Weiss Technik France - Eragny"
                period="Avril 2017 – Juin 2017"
                description={`
- • Automatisation et programmation d'enceintes climatiques.
- • Mise en service d'enceintes climatiques.
                `}
              />
            </BlurFade>
          </div>
        </section>

        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <h2 className="text-xl font-bold">Diplômes et formations</h2>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <ResumeCard
                logoUrl="/resume/images/esiee.jpg"
                altText="ESIEE Paris"
                title="Ingénieur informatique et applications"
                subtitle="Formation ingénieur informatique"
                period="Septembre 2017 – Septembre 2020"
                description={`
- • Enseignements:
    - • Informatique : POO, BDD, IHM, Réseau, Développement
    - • Sciences de l'ingénieur : Algorithmique, IA
    - • Sciences humaines : Management, Gestion, Finance

- • Rôle de producteur et de développeur dans la création d'un jeu vidéo 3D en coopération avec utilisation du 3dRudder (Unity)

- • Projets:
    - • Reconnaissance de véhicule (Python, openCV)
    - • Gestion et prise de rendez-vous (Android)
    - • Gestion d'une pizzeria. Prise de commande, gestion des stocks... (Java)
              `}
              />
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <ResumeCard
                logoUrl="/resume/images/cergy.png"
                altText="IUT Cergy-Pontoise"
                title="DUT Génie Electrique et Informatique Industrielle"
                subtitle="IUT Cergy-Pontoise - Neuville"
                period="Septembre 2015 – Septembre 2017"
                description={`
* • Conception, fabrication et maintenance des systèmes électriques, énergétiques et automatisés
* • Option : Automatismes industriels, Réseaux et Supervision
                `}
              />
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <ResumeCard
                logoUrl="/resume/images/lycee_cdg.jpg"
                altText="Lycée Charles de Gaulle"
                title="Baccalauréat STI2D"
                subtitle="Lycée Charles de Gaulle - Poissy"
                period="Septembre 2014 – Septembre 2015"
                description={`
* • Option: Énergie et Environnement
* • Mention: Bien
                `}
              />
            </BlurFade>
          </div>
        </section>

        <section id="projects">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 15}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Mes projets
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    J'aime construire des choses
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    J'ai construit ou contribué à une variété de projets. Voici
                    quelques-uns de mes projets préférés.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-1 max-w-[800px] mx-auto ">
              <BlurFade delay={BLUR_FADE_DELAY * 16}>
                <ProjectCard
                  href="https://www.runnify.app"
                  key="Runnify"
                  title="Runnify - Connecting Runners Together"
                  description="Runnnify est une plateforme qui a pour but de rassembler les coureurs afin de partager leurs sorties."
                  dates="Septembre 2024 - Aujourd'hui"
                  tags={[
                    "React",
                    "Redux",
                    "Shadcn/ui",
                    "Nest.js",
                    "Typescript",
                    "Node.js",
                    "Postgres",
                    "Redis",
                    "Docker",
                    "Stripe",
                  ]}
                  image="https://placehold.co/1920x1080/black/white"
                  links={[
                    {
                      type: "Accès au site",
                      href: "https://www.runnify.app",
                      icon: <GlobeIcon className="size-3" />,
                    },
                  ]}
                />
              </BlurFade>
            </div>
          </div>
        </section>
      </main>
      <Navbar />
    </div>
  );
}

export default HomePage;
