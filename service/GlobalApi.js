import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

const createNewResume = async (data) => {
  try {
    const resumeData = {
      title: data.data.title,
      resume_id: data.data.resumeId,
      user_email: data.data.userEmail,
      user_name: data.data.userName,
      theme_color: data.data.themeColor,
    };

    const { data: result, error } = await supabase
      .from("user_resumes")
      .insert([resumeData])
      .select("*")
      .single();

    if (error) throw error;

    return {
      data: {
        data: {
          documentId: result.resume_id,
          ...result,
        },
      },
    };
  } catch (error) {
    console.error("Error creating resume:", error);
    throw error;
  }
};

const getUserResumes = async (userEmail) => {
  try {
    const { data, error } = await supabase
      .from("user_resumes")
      .select("*")
      .eq("user_email", userEmail)
      .order("created_at", { ascending: false });

    if (error) throw error;

    // Transform data to match your existing structure
    const transformedData = data.map((resume) => ({
      ...resume,
      documentId: resume.resume_id,
      firstName: resume.first_name,
      lastName: resume.last_name,
      jobTitle: resume.job_title,
      userEmail: resume.user_email,
      userName: resume.user_name,
      themeColor: resume.theme_color,
    }));

    return {
      data: {
        data: transformedData,
      },
    };
  } catch (error) {
    console.error("Error fetching resumes:", error);
    throw error;
  }
};

const UpdateResumeDetails = async (resumeId, data) => {
  try {
    // Transform camelCase to snake_case for database
    const updateData = {};

    if (data.data.firstName) updateData.first_name = data.data.firstName;
    if (data.data.lastName) updateData.last_name = data.data.lastName;
    if (data.data.jobTitle) updateData.job_title = data.data.jobTitle;
    if (data.data.address) updateData.address = data.data.address;
    if (data.data.phone) updateData.phone = data.data.phone;
    if (data.data.email) updateData.email = data.data.email;
    if (data.data.summary) updateData.summary = data.data.summary;
    if (data.data.themeColor) updateData.theme_color = data.data.themeColor;
    if (data.data.experience) updateData.experience = data.data.experience;
    if (data.data.education) updateData.education = data.data.education;
    if (data.data.skills) updateData.skills = data.data.skills;

    const { data: result, error } = await supabase
      .from("user_resumes")
      .update(updateData)
      .eq("resume_id", resumeId)
      .select("*")
      .single();

    if (error) throw error;

    return {
      data: {
        data: result,
      },
    };
  } catch (error) {
    console.error("Error updating resume:", error);
    throw error;
  }
};

const getResumeById = async (resumeId) => {
  try {
    const { data, error } = await supabase
      .from("user_resumes")
      .select("*")
      .eq("resume_id", resumeId)
      .single();

    if (error) throw error;

    // Transform snake_case to camelCase for frontend compatibility
    const transformedData = {
      ...data,
      documentId: data.resume_id,
      firstName: data.first_name,
      lastName: data.last_name,
      jobTitle: data.job_title,
      userEmail: data.user_email,
      userName: data.user_name,
      themeColor: data.theme_color,
      resumeId: data.resume_id,
    };

    return {
      data: {
        data: transformedData,
      },
    };
  } catch (error) {
    console.error("Error fetching resume by ID:", error);
    throw error;
  }
};

const deleteResume = async (resumeId) => {
  try {
    const { error } = await supabase
      .from("user_resumes")
      .delete()
      .eq("resume_id", resumeId);

    if (error) throw error;

    return { success: true };
  } catch (error) {
    console.error("Error deleting resume:", error);
    throw error;
  }
};

export default {
  createNewResume,
  getUserResumes,
  UpdateResumeDetails,
  getResumeById,
  deleteResume,
};
