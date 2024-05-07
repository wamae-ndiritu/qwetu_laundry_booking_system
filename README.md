# Qwetu Laundry Booking System
A laundry booking management system for Qwetu students hostels.

## Technologies
- Python (Backend Programming Language)
- Django (Backend Web Framework)
- SQLITE3 - Database 
- React.js - JavaScript Library for building modern and dynamic user interfaces
- Tailwind CSS

## Installation
1. Clone the repository 
```
git clone https://github.com/wamae-ndiritu/qwetu_laundry_booking_system.git
```

2. Navigate to the project directory
```
cd qwetu_laundry_booking_system
```

## Frontend Setup
### Requirements
- Node.js - JavaScript runtime environment

1. Navigate to the frontend directory
```
cd frontend
```

2. Install dependencies
```
npm install
```

3. Start the application
```
npm run dev
```
To see the app on the browser, click on the link generated.

## Backend Setsup
### Requirements
- Python (Version 3.7+)
- Virtualenv

1. Navigate to the backend directory
```
cd backend
```
2. Create a virtual environment
*On Linux/Mac*
```
python3 -m venv venv
```
*On Windows*
```
python -m venv venv
```
3. Activate the virtual environment
*On Linux/Mac*
```
source venv/bin/activate
```
*On Windows*
```
venv\Scripts\activate
```
4. Install dependencies
```
pip install -r requirements.txt
```
5. Start the development server
```
python manage.py runserver
```

The backend app should always be running while using the frontend application, as it serves all the requests made by the frontend.