import SparklesIcon from "./SparklesIcon";

export default function DemoSection() {
    return (
      <section className="flex justify-around mt-8 sm:mt-12 items-center">
      <div className="hidden sm:block bg-gray-800/50 w-[240px] rounded-xl overflow-hidden">
        <video controls src="https://parth-caption-generation.s3.eu-north-1.amazonaws.com/i7olucinekh.mp4" preload muted autoPlay loop></video>
      </div>
      <div className="hidden sm:block">
        <SparklesIcon />
      </div>
      <div className="bg-gray-800/50 w-[240px] rounded-xl overflow-hidden">
        <video controls src="https://parth-caption-generation.s3.eu-north-1.amazonaws.com/be0luef8di6.mp4" preload muted autoPlay loop></video>
      </div>
    </section>
    );
}

