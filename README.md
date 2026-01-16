## Mental Health Doctor Booking Platform (Frontend)

**A modern, responsive mental health appointment booking platform built using React + Tailwind CSS.**

This project simulates a real-world healthcare booking system with expert listings, profiles, patient booking flow, and an admin management panel, **all powered by mock data (no backend)**.

<!-- <div align="center">
  <img src=""C:\Users\ASUS\OneDrive\画像\Screenshots 1\Screenshot 2026-01-16 160636.png"" alt="Project Preview" />
</div> -->

---

## 🚀 **Project Overview**

This application allows users to:

- Browse mental health experts (psychologists, therapists, psychiatrists)
- View detailed expert profiles  
- Book appointments through a **guided multi-step flow**
- Manage doctors through a **protected admin panel**

**The project focuses on clean UI, component separation, and real-world usability**, making it suitable for healthcare-based applications.

---

## 🛠 **Tech Stack**

| Category | Technology |
|----------|------------|
| **Frontend** | React (Vite) |
| **Styling** | Tailwind CSS |
| **Routing** | React Router DOM |
| **State** | Context API |
| **Data** | Mock Data (JS files) |

---

## ✨ **Features**

### 👨‍⚕️ **Public Website**

#### 1. **Home Page**
- Clean healthcare-friendly UI
- Entry point to explore experts

#### 2. **Expert Listing Page** 
- Displays all available experts
- Each expert card shows:
  - **Name**
  - **Specialty**
  - **Years of experience**
  - **Availability status**
- **🔍 Search** experts by name
- **🧠 Filter** experts by specialty
- **📱 Fully responsive** grid layout

#### 3. **Expert Profile Page**
Detailed information about a selected expert:
- Name & designation
- **Bio / description**
- **Expertise areas**
- **Languages spoken**
- **Consultation modes** (Online / Call)
- **"Book Appointment"** button

---

### 📅 **Patient Booking Flow**
**A multi-step booking interface:**

1. **Select Consultation Type**
   - Online or In-Person
2. **Select Date & Time Slot**
   - Uses predefined dummy slots
3. **Patient Details Form**
   - Name, Email / Phone
   - **Basic validation**
4. **Confirmation Screen**
   - Summary of booking details

**Additional features:**
- **Stepper / progress indicator**
- **Loading states**
- **Error handling**
- **Mobile-responsive design**
- **No payment integration** (as per requirement)

---

### 🔐 **Admin Panel (Separate Section)**

#### **Admin Authentication**
- Mock login system (no backend)
- Access controlled using **localStorage**
- **Protected routes**

#### **Doctor Management**
- **View doctors** in table format
- **Sort doctors** by:
  - Name
  - Specialty
  - Availability
- **Toggle doctor availability** (Active / Inactive)

#### **Responsive design:**
- **Table view** on desktop
- **Card view** on mobile

> **⚠️ Inactive doctors automatically appear as "Not Available"** on the public expert listing.

#### **Admin Features**
- **Logout functionality**
- Admin routes **hidden** from public navbar
- **Clear separation** from public website

---
