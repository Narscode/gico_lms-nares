export const registerUser = async (values: {
  full_name: string;
  username: string;
  email: string;
  password: string;
}) => {
  // Force using the production API URL
  const API_URL = "http://82.112.238.225:9812";

  const response = await fetch(`${API_URL}/api/v1/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Registration failed");
  }

  return response.json();
};

export const loginUser = async (values: {
  email: string;
  password: string;
}) => {
  const API_URL = "http://82.112.238.225:9812";

  const response = await fetch(`${API_URL}/api/v1/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Login failed");
  }

  return response.json();
};
