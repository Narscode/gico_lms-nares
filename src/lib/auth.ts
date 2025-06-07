export interface UserCredentials {
  email: string;
  password: string;
}

export interface UserProfile {
  id: number;
  full_name: string;
  username: string;
  email: string;
  email_verified: boolean;
  google_id: string | null;
  created_at: string;
  updated_at: string;
  role: string;
}

const AUTH_KEY = "gico_auth";

export const setAuthCredentials = (credentials: UserCredentials) => {
  // Encrypt the credentials before storing
  const encryptedCredentials = btoa(JSON.stringify(credentials));
  localStorage.setItem(AUTH_KEY, encryptedCredentials);
};

export const getAuthCredentials = (): UserCredentials | null => {
  const encryptedCredentials = localStorage.getItem(AUTH_KEY);
  if (!encryptedCredentials) return null;

  try {
    // Decrypt the credentials
    const credentials = JSON.parse(atob(encryptedCredentials));
    return credentials;
  } catch (error) {
    console.error("Error decrypting credentials:", error);
    return null;
  }
};

export const clearAuthCredentials = () => {
  localStorage.removeItem(AUTH_KEY);
};

export const fetchUserProfile = async (): Promise<UserProfile | null> => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/profile`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user profile");
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
}; 