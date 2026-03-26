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
									text="Développeur Full Stack Sénior spécialisé en React / Node.js / TypeScript."
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
						text="Développeur Full Stack Sénior avec 7 ans d'expérience, spécialisé en React / Node.js / TypeScript. J'ai contribué à des projets complexes dans des environnements variés (grand groupe, startup, scale-up), en prenant en charge aussi bien le développement que le cadrage technique. À l'aise sur tout le cycle produit, du back-office à l'expérience utilisateur finale."
					/>
				</section>

				<section id="skills">
					<div className="flex min-h-0 flex-col gap-y-3">
						<BlurFade delay={BLUR_FADE_DELAY * 4}>
							<h2 className="text-xl font-bold">Skills</h2>
						</BlurFade>
						<div className="flex flex-wrap gap-1">
							{[
								"TypeScript",
								"React",
								"Node.js",
								"NestJS",
								"Python",
								"Vite",
								"Redux",
								"TanStack",
								"React Hook Form",
								"Tailwind",
								"ChakraUI",
								"Shadcn",
								"REST",
								"WebSocket",
								"GraphQL",
								"PostgreSQL",
								"Prisma",
								"Kysely",
								"Drizzle",
								"Redis",
								"Jest",
								"Cypress",
								"Docker",
								"AWS",
								"Terraform",
								"Stripe",
								"Sentry",
								"Mixpanel",
								"GrowthBook",
								"Git",
								"Jenkins",
								"Github Actions",
								"Jira",
								"Notion",
								"Figma",
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
								title="Développeur Full Stack Sénior"
								subtitle="BAM Karaoké Box - Paris"
								period="Mai 2023 - Aujourd'hui"
								description={`
Au sein d'une équipe tech de 3 développeurs, participation à la refonte complète de l'écosystème applicatif, de l'architecture à la mise en production.
#### Back-office :
* Refonte complète de la gestion des réservations, commandes, remboursements et avoirs client
* Développement du moteur de pricing : tarifs, codes promos et règles tarifaires complexes
* Gestion des produits, catalogues, salles, clients B2B & B2C et parc informatique
#### Site de réservation :
* Conception d'un algorithme de recherche de disponibilité avec pricing et capacités dynamiques
* Développement du tunnel de paiement Stripe (Klarna, Apple Pay...) avec pages d'upsell et e-shop
* Espace client : réservations, playlists (manuellement ou via IA), photos/vidéos, programme de fidélité
#### Logiciel de karaoké et commande en salle :
* Refonte complète du logiciel de karaoké et de commande en salle
* Connexion temps réel avec le système de caisse et le back-office via WebSocket
* Gestion dynamique des lumières, effets de voix et système de scoring
* Développement d'un « Spotify Wrapped » en fin de session
#### Back-office B2B :
* Création d'un SaaS B2B en marque blanche pour la gestion du logiciel karaoké
#### Data :
* Développement d'un scraper d'analyse concurrentielle (CA estimé, taux de remplissage, stratégie tarifaire)
* Création de dashboards Metabase pour le pilotage de l'activité
#### Performance et infrastructure :
* Mise en place et maintenance de l'infrastructure AWS avec Terraform
* Optimisation des performances : cache Redis, optimisation des requêtes PostgreSQL
* Intégration de Sentry, Mixpanel et A/B Test via GrowthBook
                `}
							/>
						</BlurFade>

						<BlurFade delay={BLUR_FADE_DELAY * 7}>
							<ResumeCard
								logoUrl="/resume/images/popchef.png"
								altText="Popchef"
								title="Développeur Full Stack"
								subtitle="Popchef - Paris"
								period="Novembre 2022 - Mai 2023"
								description={`
Au sein d'une équipe de 8 développeurs, contribution au développement et à la stabilisation du back-office ainsi qu'au développement du futur frigo automatisé de Popchef.
* Développement de l'interface de création et planification des menus hebdomadaires pour l'approvisionnement des frigos connectés
* Développement du système de pilotage des écrans intégrés aux frigos (menus du jour, promotions, informations) en temps réel
* Mise en place de tests unitaires et d'intégration, contribuant à la réduction des bugs en production
                `}
							/>
						</BlurFade>

						<BlurFade delay={BLUR_FADE_DELAY * 8}>
							<ResumeCard
								logoUrl="/resume/images/thales.png"
								altText="Thales"
								title="Développeur Full Stack"
								subtitle="Thales SIX GTS France - Gennevilliers"
								period="Septembre 2017 - Novembre 2022 (CDI + Alternance)"
								description={`
Dans le cadre d'un projet critique en secteur défense, participation pendant 5 ans au développement d'une application hybride Web/Android destinée à des opérateurs terrain, intégrant des services de communication avancés.
* Conception et développement d'une application hybride de chat sécurisé, téléphonie et cartographie temps réel via WebSocket
* Développement d'un tableau de bord de supervision pour la gestion des différents services en temps réel
* Participation aux décisions techniques (stack, structure des services) pour garantir la scalabilité et la maintenabilité
* Mise en place d'une pipeline CI/CD sous Jenkins et Docker et rédaction de tests unitaires et d'intégration
                `}
							/>
						</BlurFade>

						<BlurFade delay={BLUR_FADE_DELAY * 9}>
							<ResumeCard
								logoUrl="/resume/images/weiss.jpg"
								altText="Weiss Technik France"
								title="Stage"
								subtitle="Weiss Technik France - Eragny"
								period="Avril 2017 – Juin 2017"
								description={`
#### Automatisation et programmation d'enceintes climatiques
#### Mise en service d'enceintes climatiques
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
								title="Ingénieur informatique"
								subtitle="ESIEE Paris"
								period="Septembre 2017 – Septembre 2020"
								description={`
Formation d'ingénieur en 3 ans réalisée en alternance chez Thales.
#### Enseignements :
* POO, BDD, IHM, Réseau, Développement, Algorithmique, Management, Finance
#### Projets :
* Développement d'un jeu vidéo multijoueur 3D coopératif intégrant le 3dRudder (contrôle par les pieds)
* Implémentation d'un algorithme de détection et classification de véhicules à partir d'images
* Conception et implémentation d'une solution de prise de rendez-vous avec interface utilisateur
* Application full stack de prise de commande et gestion des stocks en temps réel pour une pizzeria
              `}
							/>
						</BlurFade>

						<BlurFade delay={BLUR_FADE_DELAY * 13}>
							<ResumeCard
								logoUrl="/resume/images/cergy.png"
								altText="IUT Cergy-Pontoise"
								title="DUT Génie Électrique et Informatique Industrielle"
								subtitle="IUT Cergy-Pontoise"
								period="Septembre 2015 – Septembre 2017"
								description={`
#### Conception, fabrication et maintenance des systèmes électriques, énergétiques et automatisés
#### Option : Automatismes industriels, Réseaux et Supervision
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
#### Option: Énergie et Environnement
#### Mention: Bien
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
									href="https://riftvault.io"
									key="RiftVault"
									title="RiftVault.io - Gestion de collection Riftbound"
									description="Plateforme de gestion de collection pour le jeu de cartes Riftbound. Suivi et inventaire des cartes, monitoring des prix du marché avec analytics avancées, reconnaissance de carte via OCR. 150 utilisateurs inscrits uniquement via SEO."
									dates="2024 - Aujourd'hui"
									tags={["React", "TypeScript", "Node.js", "OCR", "SEO"]}
									image="/resume/images/riftvault.png"
									links={[
										{
											type: "Accès au site",
											href: "https://riftvault.io",
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
