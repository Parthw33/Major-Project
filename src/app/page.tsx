import Image from "next/image";
import SparklesIcon from "@/components/SparklesIcon";
import UploadIcon from "@/components/UploadIcon";
import DemoSection from "@/components/DemoSection";
import PageHeaders from "@/components/PageHeaders";
import {UploadForm} from "@/components/UploadForm";

export default function Home() {
  return (
    <>
        <PageHeaders 
            h1Text="Add epic caption to our videos" 
            h2Text="Just upload a video and see the magic"
        />
        <div className="text-center ">
          <UploadForm/>
        </div>
        <DemoSection/>
      </>
  );
}
