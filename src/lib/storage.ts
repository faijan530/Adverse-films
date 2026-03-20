import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

export const uploadFile = async (file: File, path: string = `uploads/${file.name}`): Promise<string> => {
  try {
    const storageRef = ref(storage, path);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};

export const uploadProjectThumbnail = async (file: File, projectId: string): Promise<string> => {
  return uploadFile(file, `projects/${projectId}/thumbnail/${file.name}`);
};

export const uploadProjectVideo = async (file: File, projectId: string): Promise<string> => {
  return uploadFile(file, `projects/${projectId}/video/${file.name}`);
};
