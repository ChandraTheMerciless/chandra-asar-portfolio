import PortfolioImage from "@/components/portfolio-image";

export default function AboutPage() {
  return (
    <div className="lg:w-3/4 gap-5 py-4 lg:py-12 mx-4 lg:mx-auto">
      <div className="flex flex-col items-center md:flex-row gap-10">
          <PortfolioImage />
          <div>
              <h1 className="text-4xl pb-2">About me</h1>
              <p className="text-xl">Experienced frontend developer skilled at crafting reusable React and TypeScript components, with over a decade of proficiency across diverse technology stacks and UI frameworks. Committed to championing accessibility from project inception. Demonstrates capability in fostering cross-team and cross-discipline collaboration through Agile methodology.</p>
          </div>
      </div>
    </div>
  );
}