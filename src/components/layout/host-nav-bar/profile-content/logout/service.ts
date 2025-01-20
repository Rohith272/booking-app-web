export const logout = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/v1/hosts/logout`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    },
  );
  console.log(response);
  if (!response.ok) {
    const errorData = await response.json();
    throw errorData;
  }
  return response.json();
};
