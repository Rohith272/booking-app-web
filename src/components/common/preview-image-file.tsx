"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type PreviewImageFileProps = {
  imageFile: File | undefined;
  altText?: string;
  className?: string;
};

const PreviewImageFile = ({
  imageFile,
  altText,
  className,
}: PreviewImageFileProps) => {
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  useEffect(() => {
    let objectURL: string | undefined;
    if (imageFile) {
      objectURL = URL.createObjectURL(imageFile);
      setImageUrl(objectURL);
    }
    return () => {
      if (objectURL) {
        URL.revokeObjectURL(objectURL);
      }
    };
  }, [imageFile]);

  return <img src={imageUrl} alt={altText || ""} className={cn(className)} />;
};

export default PreviewImageFile;
