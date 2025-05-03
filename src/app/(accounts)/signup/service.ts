import { SignupSchema } from "./schema";

export const signup = async (values: SignupSchema) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/v1/hosts/register`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    },
  );
  if (!response.ok) {
    const errorData = await response.json();
    throw errorData;
  }
  return response.json();
};

