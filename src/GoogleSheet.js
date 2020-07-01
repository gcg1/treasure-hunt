import { GoogleSpreadsheet } from "google-spreadsheet";
require("dotenv").config();

export const addEmailToGoogleSheet = async (email) => {
  const doc = new GoogleSpreadsheet(
    "1N1nYm0xqF4WGtDow1-6qy6N79EF2fHb4R-YjBJNdj-c"
  );

  await doc.useServiceAccountAuth({
    client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY,
  });

  await doc.loadInfo(); // loads document
  const sheet = doc.sheetsByIndex[0];

  await sheet.addRow({
    timestamp: Date(),
    email: email,
  });
};

export const addCompletionToGoogleSheet = async () => {
  const doc = new GoogleSpreadsheet(
    "1CvvmYqtGRS6L8N1GI3YQ2vHi7x2_5s90Nk_9nJwCCF8"
  );

  await doc.useServiceAccountAuth({
    client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY,
  });

  await doc.loadInfo(); // loads document
  const sheet = doc.sheetsByIndex[0];

  await sheet.addRow({
    timestamp: Date(),
  });
};
