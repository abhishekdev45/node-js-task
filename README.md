# selection-task

## Major Libraries/Frameworks Used

- **Node.js**: Used for the server-side runtime environment.
- **Express.js**: A web application framework for Node.js, used for building RESTful APIs.
- **MySQL2**: A MySQL client for Node.js, used for connecting to and interacting with the MySQL database.
- **Sequelize**: An ORM (Object-Relational Mapping) library for Node.js, used for database abstraction and interaction.

### Reasons for Using These Libraries

- **Node.js**: Its event-driven, non-blocking I/O model makes it lightweight and efficient, perfect for building fast and scalable network applications.
- **Express.js**: Provides a robust set of features for web and mobile applications, allowing for easy API creation.
- **MySQL2**: Offers improved performance and support for modern MySQL features.
- **Sequelize**: Simplifies database interactions by allowing you to work with JavaScript objects instead of writing raw SQL queries.



## Postman collection

view the postman collection [here](<https://www.postman.com/restless-flare-610948/workspace/lattice-innovations/collection/28289887-0cd1fce2-0f2f-44fe-bd3b-8c4437368547>).



## API Endpoints

### Fetch Psychiatrists for a Hospital

**Endpoint**: `http://localhost:3000/api/hospitals/getPsychiatristsForHospital`

**Method**: POST

**Description**: Fetch all the psychiatrists, their count along with IDs and patient details for a hospital. The frontend will pass the `HospitalId` in the request body.

**Request Body Example**:
```json
{
  "HospitalId": 1
}
```

### Register a New Patient

**Endpoint**: `http://localhost:3000/api/patients/register`

**Method**: POST

**Description**: Register a new patient.

**Request Body Example**:
```json
{
  "name": "John Doe",
  "address": "123 Main Street, Cityville, State, 12345",
  "email": "johndoe@example.com",
  "phoneNumber": "1234567890",
  "password": "Password123",
  "photo": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dhuman%2Bface&psig=AOvVaw1hu7I20-6o3qNIntTN-rhS&ust=1716312050011000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKij7eLenIYDFQAAAAAdAAAAABAE",
  "PsychiatristId": 1
}
```
### Add a New Hospital

**Endpoint**: `http://localhost:3000/api/hospitals/addHospital`

**Method**: POST

**Description**: Add a new hospital to the database.

**Request Body Example**:
```json
{
  "name": "General Hospital"
}
```

### Add a New Psychiatrist

**Endpoint**: `http://localhost:3000/api/psychiatrist/addPsychiatrist`

**Method**: POST

**Description**: Add a new psychiatrist to the database.

**Request Body Example**:
```json
{
  "name": "Dr. John Doe",
  "HospitalId": 1
}
```



