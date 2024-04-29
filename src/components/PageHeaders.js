import SparklesIcon from "./SparklesIcon";

export default function PageHeaders({ 
    h1Text='Hello',
    h2Text='SubHeader',
}) {
    return (
        <section className="text-center mt-12 sm:mt-24 mb-4 sm:mb-8">
          <h1 className="text-3xl sm:text-3xl" style={{textShadow:'1px 1px 0 rgba(0,0,0,.2)'}}>
            {h1Text}
          </h1>
          <h2 className="text-white/80 text-sm sm:text-base">
            {h2Text}
          </h2>
        </section>
    );
}