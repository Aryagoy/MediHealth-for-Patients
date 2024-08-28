# MediHealth for Patients #

Implementing a Nextjs application

## BluePrint ##

* User Authentication: Secure login and registration with options like email, phone, or social media accounts.
* Profile Setup: Personal details, medical history, allergies, ongoing treatments, etc.
* Profile Management: Update the informations
* Upload Medical Documents: Upload prescriptions, lab reports, imaging results, etc. (effortless import and export)
* View Medical History: Access a history of all uploaded documents and previous consultations.
* Categorization: Organize records by type, date, or healthcare provider.
* Doctor Directory: Find doctors nearby based on the gps location
* Appointment Booking: Schedule appointments with doctors, view availability, and book time slots. (optional)
* Educational Content: Articles, videos, and FAQs about various health conditions, treatments, and wellness tips.
* Health Tips and Alerts: Regular updates on healthy living, disease outbreaks, seasonal health advice.
* Medication Tracker: List of current medications, dosage, and frequency. (optional)
* Reminders: Notifications for taking medications, refills, and follow-ups. (optional)
* Drug Information: Access to detailed information about prescribed medications. (optional)
* Data Analytics: Visualize health data trends and patterns.
* Chatbot: if stuck anywhere



Tools to use:
* ShadcUI - to create the elements of the frontend like form, button, label, etc
* Tailwind CSS
* Appwrite - for databases, authentication, messaging etc
* Reacr-dropzone - for file uploads in the form


Flow
* The user puts in his details in the loginForm.tsx
* On clicking the submit button, using appwrite API, the details are stored in the DB using createUser.
* If the user already exists, the same user would be extracted from the database