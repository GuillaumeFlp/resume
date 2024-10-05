import Navbar from "@/components/navbar";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import BlurFade from "@/components/ui/blur-fade";
import BlurFadeText from "@/components/ui/blur-fade-text";

const BLUR_FADE_DELAY = 0.04;

function HomePage() {
  return (
    <div
      id="home-page"
      className="min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6"
    >
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8">
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
            className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert"
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
                title="BAM Karaoke Box"
                subtitle="Senior Software Engineer"
                period="Mai 2023 - Mai 2023"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <ResumeCard
                logoUrl="/resume/images/popchef.png"
                altText="Popchef"
                title="Popchef"
                subtitle="Software Engineer"
                period="Novembre 2022 - Mai 2023"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 8}>
              <ResumeCard
                logoUrl="/resume/images/thales.png"
                altText="Thales"
                title="Thales"
                subtitle="Software Engineer"
                period="Novembre 2022 - Mai 2023"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <ResumeCard
                logoUrl="/resume/images/thales.png"
                altText="Thales"
                title="Thales"
                subtitle="Alternance"
                period="Novembre 2022 - Mai 2023"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <ResumeCard
                logoUrl="/resume/images/weiss.jpg"
                altText="Weiss Technik France"
                title="Weiss Technik France"
                subtitle="Stage"
                period="Novembre 2022 - Mai 2023"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
            </BlurFade>
          </div>
        </section>

        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <h2 className="text-xl font-bold">Formations</h2>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <ResumeCard
                logoUrl="/resume/images/esiee.jpg"
                altText="ESIEE Paris"
                title="ESIEE Paris"
                subtitle="Formation ingénieur informatique"
                period="Mai 2023 - Mai 2023"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
            </BlurFade>
          </div>
        </section>
      </main>
      <Navbar />
    </div>
  );
}

export default HomePage;
