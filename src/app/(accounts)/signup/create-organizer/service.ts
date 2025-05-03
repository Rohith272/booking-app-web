import { CreateOrganizerSchema } from "./schema";
import Cookies from "js-cookie";

export const createOrganizer = async (
  values: CreateOrganizerSchema & { logoFile?: string }
) => {

  let logoUrl = "";
  const token = Cookies.get("accessToken");
  console.log(token)

  // 1. Upload logo file if present
  if (values.logo[0]) {
    const formData = new FormData();
    formData.append("file", values.logo[0]); // ✅ FIXED

    const uploadResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/v1/s3/upload`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    );

    if (!uploadResponse.ok) {
      const error = await uploadResponse.json();
      throw { message: "Image upload failed", ...error };
    }

    const uploadData = await uploadResponse.json();

    console.log("uploadData",uploadResponse);
    logoUrl = uploadData.url;
  }

  // 2. Call API to register organizer
  if(logoUrl!=""){

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/v1/org/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ ...values, logo: logoUrl }),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw errorData;
  }

  return response.json();
}
};
