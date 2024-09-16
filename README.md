# MediHealth for Patients

<img width="1511" alt="Screenshot 2024-09-16 at 12 23 36 AM" src="https://github.com/user-attachments/assets/7849e4d7-6271-408d-b519-0863a6062b59">


MediHealth for Patients is a comprehensive healthcare application designed to manage and organize medical records, facilitate secure communication with healthcare providers, and deliver personalized health insights. Built using **Next.js**, this project integrates advanced features such as authentication, document upload, appointment booking, and a doctor directory.

## Table of Contents

- [MediHealth for Patients](#medihealth-for-patients)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Blueprint](#blueprint)
  - [Flow](#flow)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)

## Features

- **User Authentication**: Secure login and registration with multiple options including email, phone, and social media accounts.
- **Profile Setup**: Easily set up personal profiles with medical history, allergies, and ongoing treatments.
- **Profile Management**: Update profile information effortlessly.
- **Upload Medical Documents**: Upload prescriptions, lab reports, imaging results, and other medical documents with import/export functionality.
- **View Medical History**: Access a comprehensive history of all uploaded documents and previous consultations.
- **Categorization**: Organize records by type, date, or healthcare provider.
- **Doctor Directory**: Find nearby doctors using GPS location.
- **Appointment Booking** (Optional): Schedule appointments, check doctor availability, and book time slots.
- **Educational Content**: Access articles, videos, and FAQs on health conditions, treatments, and wellness tips.
- **Health Tips and Alerts**: Receive regular updates on healthy living, disease outbreaks, and seasonal health advice.
- **Medication Tracker** (Optional): Keep track of current medications, dosage, and frequency.
- **Reminders** (Optional): Set notifications for medication intake, refills, and follow-up appointments.
- **Drug Information** (Optional): Access detailed information on prescribed medications.
- **Data Analytics**: Visualize trends and patterns in health data.
- **Chatbot**: Assistance for users when navigating the application.

## Technologies Used

- **Next.js**: Framework for server-side rendering and React-based web applications.
- **ShadcUI**: UI components for building the front-end (forms, buttons, labels, etc.).
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Appwrite**: Backend as a service for authentication, databases, and messaging.
- **React Dropzone**: File upload functionality for documents.

## Blueprint

1. **User Authentication**: Secure login and registration with email, phone, or social media accounts.
2. **Profile Setup**: Collect personal details, medical history, allergies, ongoing treatments, etc.
3. **Profile Management**: Users can update their profile information anytime.
4. **Upload Medical Documents**: Users can upload documents like prescriptions, lab reports, and imaging results, with easy import/export options.
5. **View Medical History**: Users can view a chronological history of all their uploaded documents and past consultations.
6. **Categorization**: The app categorizes medical records by type, date, and healthcare provider, making navigation easy.
7. **Doctor Directory**: Locate nearby doctors using GPS-based location services.
8. **Appointment Booking**: (Optional) Schedule appointments with doctors, check availability, and book time slots.
9. **Educational Content**: Users can access articles, videos, and FAQs related to various health conditions, treatments, and wellness tips.
10. **Health Tips and Alerts**: The app sends regular updates on healthy living, disease outbreaks, and seasonal health tips.
11. **Medication Tracker**: (Optional) Users can track their medication intake, including dosage and frequency.
12. **Reminders**: (Optional) Set reminders for medications, refills, and doctor follow-ups.
13. **Drug Information**: (Optional) Users can access detailed information on medications prescribed to them.
14. **Data Analytics**: The app visualizes trends and patterns in the user's health data, offering insights over time.
15. **Chatbot**: Offers assistance when users encounter challenges or need help.

## Flow

1. **Login/Sign-up**:
   - The user inputs their details in the `loginForm.tsx`.
   - Upon clicking the submit button, the Appwrite API is used to create a new user via the `createUser` function.
   - If the user already exists, the app will retrieve their profile information from the database.

2. **Document Upload**:
   - Users can upload medical documents like prescriptions and reports using **React Dropzone** for easy drag-and-drop file uploads.
   - Uploaded documents are categorized and stored for future access.

3. **Profile Management**:
   - The user can update their profile with personal medical history, allergies, medications, and ongoing treatments. This data is securely stored using **Appwrite**.

4. **Doctor Directory and Appointment Booking**:
   - The app integrates GPS-based location services to help users find doctors nearby.
   - (Optional) Users can check doctor availability and book appointments directly within the app.

## Getting Started

To get a local copy of the application up and running, follow these simple steps:

### Prerequisites

- **Node.js**: v14+ recommended
- **npm** or **yarn**
- **Appwrite**: Backend service for authentication, database, and storage (ensure it is set up locally or via a cloud instance)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/medihealth-for-patients.git
   cd medihealth-for-patients

2. **Install dependencies**:
    ```bash
    npm install


3. ***Configure Environment Variables***: 
Create a .env.local file in the root directory and add your environment variables for MongoDB, Appwrite, and other services.

4. **Run the application**:

    ```bash 
    npm run dev
The app will run in development mode and can be accessed at http://localhost:3000.


