import mongoose, { Schema } from "mongoose";


export type Project = {
  title: string;
  slug: string;        
  description: string; 
  content: string;     
  image: string;       
  imageAlt: string;    
  date: Date;        
};


const projectSchema = new Schema<Project>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
});


const ProjectModel =
  mongoose.models.Project || mongoose.model<Project>("Project", projectSchema);

export default ProjectModel;