# 🤖 AI Resume Builder - React Frontend
A sleek and intelligent resume builder with **AI-powered** content generation. Built with **React** + **Vite**, **TailwindCSS**, and **Clerk Authentication**.
<br/>

A comprehensive resume builder application that allows users to **create, edit, and manage** professional resumes with ease. Users can **register/login** via Clerk authentication, build resumes with personal details, job summary, experience, education, and skills sections. The app features **multiple themes**, **PDF download/sharing** capabilities, and complete **CRUD operations** for resume management. Built with **React Router** for seamless navigation, authentication flow management, and proper 404 handling.
<br/>

## 🌟 Features
- 🤖 **AI-Powered** content generation and suggestions
- 📝 **Interactive Resume Builder** with real-time preview
- 🔐 **Secure Authentication** with Clerk
- 🎨 **Professional Templates** - ATS-friendly designs
- 📱 **Fully Responsive** design
- 📄 **PDF Export** functionality
- ⚡ **Lightning Fast** performance with Vite
- 🗄️ **Supabase Database** for reliable data storage

## 🚀 Live Demo
Check out the live application:
👉 [Visit AI Resume Builder Here](https://tg-react-supabase-ai-resume-builder.netlify.app/) 
<br/>

## 📱 Web Preview
[https://github.com/user-attachments/assets/59365e9e-fa2f-417e-a3aa-30152bad2af8
<br/>](https://github.com/user-attachments/assets/9bff0916-4bbe-48c6-ae7e-c1bb9eb07c35)

## 📦 Tech Stack
- React + Vite Build Tools
- TailwindCSS
- Clerk (Authentication)
- Strapi CMS (Backend on Render)
- Google Gemini AI API

## 🛠️ Setup Instructions

1. **Clone this repository:**
   ```bash
   git clone https://github.com/ToastguyzWeb/react-js-supabase-ai-resume-builder-app.git
   cd react-js-supabase-ai-resume-builder-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   
   Create a **.env.local** file in the root directory and add environment variables as following:
   ```bash
   # Clerk Authentication
   VITE_CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
   
   # Supabase Configuration
   VITE_SUPABASE_URL=<your_supabase_project_url>
   VITE_SUPABASE_ANON_KEY=<your_supabase_anon_key>
   
   # AI Service
   VITE_GOOGLE_AI_API_KEY=<your_google_gemini_api_key>
   ```

4. **Configure Clerk Authentication**
   
   👉 Sign up for a free account at [Clerk.dev](https://clerk.dev). Create a new application and copy your publishable key to the **.env.local** file.

5. **Start the Development Server**
   ```bash
   npm run dev
   ```

## 🗄️ Database Setup
This application uses Supabase as the backend database. After creating your Supabase project, follow these steps:

### Step 1: Create Database Tables
Based on your application requirements, create these tables in Supabase SQL Editor:

```sql
-- Create user_resumes table
CREATE TABLE user_resumes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  resume_id UUID NOT NULL UNIQUE,
  user_email VARCHAR(255) NOT NULL,
  user_name VARCHAR(255),
  theme_color VARCHAR(7) DEFAULT '#FF5733',
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  job_title VARCHAR(255),
  address TEXT,
  phone VARCHAR(20),
  email VARCHAR(255),
  summary TEXT,
  experience JSONB DEFAULT '[]'::jsonb,
  education JSONB DEFAULT '[]'::jsonb,
  skills JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create RLS (Row Level Security) policies
ALTER TABLE user_resumes ENABLE ROW LEVEL SECURITY;

-- Policy to allow users to see only their own resumes
CREATE POLICY "Users can view own resumes" ON user_resumes
  FOR SELECT USING (auth.jwt() ->> 'email' = user_email);

-- Policy to allow users to insert their own resumes
CREATE POLICY "Users can insert own resumes" ON user_resumes
  FOR INSERT WITH CHECK (auth.jwt() ->> 'email' = user_email);

-- Policy to allow users to update their own resumes
CREATE POLICY "Users can update own resumes" ON user_resumes
  FOR UPDATE USING (auth.jwt() ->> 'email' = user_email);

-- Policy to allow users to delete their own resumes
CREATE POLICY "Users can delete own resumes" ON user_resumes
  FOR DELETE USING (auth.jwt() ->> 'email' = user_email);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$ language 'plpgsql';

CREATE TRIGGER update_user_resumes_updated_at 
  BEFORE UPDATE ON user_resumes 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

### Step 2: Handle RLS (Row Level Security)
Since you're using Clerk for authentication and not Supabase Auth, you can **disable RLS security** in **Supabase project SQL Editor**.

**Disable RLS (Simpler, Less Secure)**
Run this in your Supabase SQL Editor:
```sql
ALTER TABLE user_resumes DISABLE ROW LEVEL SECURITY;
```
