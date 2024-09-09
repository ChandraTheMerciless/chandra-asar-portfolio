import PortfolioImage from "@/components/portfolio-image";

export default function AboutPage() {
  return (
    <div>
        <PortfolioImage />
        <div className="relative z-10">
            <h1>About</h1>
            <p>This is the about page</p>
        </div>
    </div>
  );
}