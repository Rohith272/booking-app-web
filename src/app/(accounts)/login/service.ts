import { LoginSchema } from "./schema";

export const login = async (values: LoginSchema) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/v1/hosts/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(values),
      
    },
  );
  // const data = await response.json();
  // console.log(data);
  if (!response.ok) {
    const errorData = await response.json();
    throw errorData;
  }
  return response.json();
};
