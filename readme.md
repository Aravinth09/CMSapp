Summary of Code Snippets:
Add Component (Add.js):
Enables users to add new customer entries.
Performs input validation and displays error messages using SweetAlert2.
Edit Component (Edit.js):
Provides functionality to edit existing customer details.
Validates input fields and updates customer information upon submission.
Dashboard Component (Dashboard.js):
Main component rendering the application dashboard.
Manages state for customer data, including adding, editing, and deleting functionality.
Integrates Header, Table, Add, and Edit components.
Header Component (Header.js):
Displays the application header with options to add customers and log out.
Table Component (Table.js):
Renders a table to display customer data.
Supports editing and deletion of customer records.
Login Component (Login.js):
Provides a login form for user authentication.
Validates user credentials and manages login/logout status.
Map Component (Map.js):
Utilizes the Google Maps API to display a location map based on provided coordinates.
Dependencies Used:
The project relies on several dependencies managed through npm:

React: A popular JavaScript library for building user interfaces.
Primitive UI: A minimal React component library used for designing simple and clean interfaces.
SweetAlert2: A responsive alert library used to display customized pop-up messages for user feedback.
@react-google-maps/api: A library for integrating Google Maps into React applications.
Swal: A shorthand for SweetAlert2 used for displaying alerts in a visually appealing manner.
