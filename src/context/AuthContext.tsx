// ใช้ "use client" เพราะเราต้องใช้ State และ Lifecycle (useEffect) ในการจัดการการล็อคอิน
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { 
  onAuthStateChanged, 
  signInWithPopup, 
  signOut, 
  User 
} from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";

// สร้าง Blueprint สำหรับข้อมูลที่จะส่งไปให้หน้าอื่นๆ
interface AuthContextType {
  user: User | null;         // เก็บข้อมูลคนล็อคอิน (ชื่อ, รูป, เมล)
  loading: boolean;          // บอกว่ากำลังโหลดข้อมูลอยู่หรือไม่
  signInWithGoogle: () => Promise<void>; // ฟังก์ชันล็อคอิน
  logout: () => Promise<void>;           // ฟังก์ชันล็อคเอาท์
}

// สร้างกล่องเก็บข้อมูลส่วนกลาง (Context)
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ส่วนของ Provider ที่จะครอบทั้งแอป เพื่อให้ทุกหน้าเข้าถึงข้อมูลคนล็อคอินได้
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // ใช้ useEffect เพื่อคอยเช็คว่าผู้ใช้ "ยังคงล็อคอินอยู่ไหม" ทันทีที่เปิดเว็บขึ้นมา
  useEffect(() => {
    // onAuthStateChanged คือตัวเฝ้าดูการเปลี่ยนสถานะ (ล็อคอิน/ล็อคเอาท์) จาก Firebase
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);    // อัปเดตข้อมูลผู้ใช้ใน State
      setLoading(false); // ปิดสถานะโหลด
    });

    return () => unsubscribe(); // ลบตัวเฝ้าดูเมื่อเลิกใช้งาน
  }, []);

  // ฟังก์ชันเรียกหน้าต่าง Pop-up ของ Google ขึ้นมาล็อคอิน
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  // ฟังก์ชันสั่งออกจากระบบผ่าน Firebase
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    // ส่งข้อมูลทั้งหมดออกไปเพื่อให้ Component อื่นๆ เรียกใช้ได้ผ่าน useAuth()
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// สร้าง Hook ชื่อ useAuth เพื่อให้การดึงข้อมูลจาก Context ทำได้ง่ายขึ้นในหน้าอื่นๆ
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
