# E-commerce Backend (Node.js & Express)

This is the backend API for the e-commerce mobile application, built with Node.js, Express, and MongoDB.

## Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Create `.env` file:**
    Copy the `.env.example` file and rename it to `.env`. Update the `MONGO_URI` with your MongoDB connection string.
    ```
    PORT=5000
    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/ecommerce?retryWrites=true&w=majority
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The server will run on `http://localhost:5000` (or your specified PORT).

## API Endpoints

*   `GET /api/products`: Get all products
*   `GET /api/products/:id`: Get a single product by ID
*   `POST /api/products`: Create a new product (requires JSON body)

## Technologies Used

*   Node.js
*   Express.js
*   MongoDB (Mongoose ODM)
*   Dotenv for environment variables
*   CORS for cross-origin requests
