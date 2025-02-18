import { db } from '../firebase'; // Firebase connection
import { collection, addDoc } from 'firebase/firestore';

// Email type ko explicitly define karein
export async function saveEmail(email: string) {
  try {
    const docRef = await addDoc(collection(db, "subscribers"), {
      email: email,
      timestamp: new Date(),
    });
    console.log("Email saved with ID: ", docRef.id);
    return { success: true, message: "Email saved successfully!" };
  } catch (error: any) {
    // Error ko properly handle karein
    console.error("Error saving email:", error.message);
    return { success: false, message: `Error: ${error.message}` };
  }
}
