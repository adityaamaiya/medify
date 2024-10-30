# Medify - Medical Center Slot Booking Platform

## Project Overview

Medify is a React-based web application designed to help users find medical centers in various states and cities across the USA and book appointments conveniently. The platform allows users to choose available time slots and centers, and view their bookings.

## Key Features

- **Landing Page:**
  - Top navigation with sections like Find Doctors, Hospitals, Medicines, etc.
  - Dropdowns for users to select state and city (fetched from an API).
  - Displays a list of available medical centers.
- **Search Results Page:**

  - Lists all available medical centers in the selected state and city.
  - Users can book appointments at listed centers.

- **Booking Interface:**

  - Calendar-like interface to select appointment dates.
  - Ability to book appointments within a week from today.
  - Displays available time slots for the selected day.

- **My Bookings Page:**

  - Personalized page displaying all user bookings.
  - Shows details like medical center name, appointment date, and time.

- **Responsive Design:**
  - Fully responsive interface that adapts to all screen sizes.
  - Carousels implemented using the Swiper library.

## Technologies Used

- **Frontend:** React.js, JavaScript, HTML, CSS
- **UI Libraries:** Material UI, Swiper for carousels
- **State Management:** React Hooks
- **API Integration:** Axios (or Fetch API) for fetching dropdown options (state, city)

## Installation

1. Clone the repository:
   ```bash
   https://github.com/adityaamaiya/medify.git
   ```
2. Navigate into the project directory:
   ```bash
   cd MEDIFY
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the application:
   ```bash
   npm start
   ```

## Usage

- **Landing Page:** Select a state and city from the dropdown to find medical centers.
- **Search Results:** Browse through the list of available medical centers.
- **Booking:** Select a date and time slot from the booking interface to schedule an appointment.
- **My Bookings:** View all booked appointments in one place.

## API Integration

The state and city dropdowns are populated by calling an API. Ensure the API endpoint is functional and returns the correct data. Example:
```javascript
const fetchStates = async () => {
const response = await fetch("API_ENDPOINT_FOR_STATES");
const data = await response.json();
setStates(data);
};

const fetchCities = async (stateId) => {
const response = await fetch(\`API_ENDPOINT_FOR_CITIES/\${stateId}\`);
const data = await response.json();
setCities(data);
};
```

## Future Enhancements

- Adding user authentication for personalized experiences.
- Integration with real medical center databases.
- Push notifications for appointment reminders.
- Option to cancel or reschedule appointments.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

