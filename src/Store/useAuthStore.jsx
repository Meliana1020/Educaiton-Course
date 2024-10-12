import { create } from "zustand";
import { useEffect } from "react";

const useAuthStore = create((set) => ({
  users: [], 
  currentUser: null,
  
  register: (newUser) =>
    set((state) => {
      const isEmailRegistered = state.users.some(
        (user) => user.email === newUser.email
      );
      if (isEmailRegistered) {
        alert("Email sudah terdaftar. Gunakan email lain.");
        console.log("Email sudah terdaftar:", newUser.email);
        return state;
      }

      const updatedUsers = [...state.users, newUser];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return { users: updatedUsers };
    }),
  
  login: (email, password) =>
    set((state) => {
      console.log("Attempting to login with:", email, password);
      if (!state.users || state.users.length === 0) {
        alert("Belum ada pengguna yang terdaftar, silakan registrasi terlebih dahulu.");
        return {};
      }

      const user = state.users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        console.log("Login successful:", user);
        return { currentUser: user };
      } else {
        alert("Email atau password salah");
        console.log("Login failed for:", email);
        return {};
      }
    }),

  logout: () => {
    localStorage.removeItem("currentUser");
    set({ currentUser: null });
  },

  initializeUsers: (users) => {
    console.log("Inisialisasi pengguna dari localStorage:", users);
    set({ users });
  },
}));

export const useAuthSync = () => {
  const initializeUsers = useAuthStore((state) => state.initializeUsers);
  const currentUser = useAuthStore((state) => state.currentUser);
  
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    initializeUsers(storedUsers);

    const storedCurrentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedCurrentUser) {
      useAuthStore.setState({ currentUser: storedCurrentUser });
    }
  }, [initializeUsers]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }
  }, [currentUser]);
};

export default useAuthStore;
