import admin from "firebase-admin";
import serviceAccount from "../config/serviceAccount.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

const Firebase = {
  admin,
  auth: admin.auth(),
  firestore: admin.firestore(),
  fieldValue: admin.firestore.FieldValue,
  fieldPath: admin.firestore.FieldPath.documentId(),
};

export default Firebase;
