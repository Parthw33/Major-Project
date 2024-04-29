"use client";

import UploadIcon from "./UploadIcon";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function UploadForm() {
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  async function upload(ev) {
    ev.preventDefault();
    const files = ev.target.files;
    if (files.length > 0) {
      const file = files[0];
      setIsUploading(true);
      const res = await axios.postForm("/api/upload", {
        file,
      });
      setIsUploading(false);
      // console.log(res.data);
      const newName = res.data.newName;
      router.push("/" + newName);
    }
  }

  const notify = () => toast("File uploaded!");

  return (
    <>
      {isUploading && (
        <div className="flex bg-black/80 text-white fixed inset-0 items-center">
          <div className="w-full text-center">
            <h2 className="text-4xl mb-4">Uploading</h2>
            <h3 className="text-xl">Please while uploading .....</h3>
          </div>
        </div>
      )}
      <label
        className="bg-green-600 py-2 px-6 rounded-full inline-flex gap-2 border-2 border-purple-700/80"
        onClick={notify}
      >
        <UploadIcon />
        <span>Choose file</span>
        <input onChange={upload} type="file" className="hidden" />
      </label>
    </>
  );
}
