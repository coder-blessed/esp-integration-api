


# ESP Integration API (Mailchimp + GetResponse)

This is a **Node.js + Express REST API** that allows users to connect to and retrieve data from their **Mailchimp** and **GetResponse** accounts.
It also integrates **MongoDB** for storing user ESP API keys.

---

## 🚀 Features

* Save & validate ESP API keys (Mailchimp / GetResponse)
* Verify connection to ESPs
* Fetch lists / audiences from ESPs
* Error handling for invalid credentials, network issues, and rate limits
* MongoDB integration for persistence

---

## 📂 Project Structure

```
esp-integration-api/
│── src/
│   ├── app.js          # Main entry point
│   ├── routes/         # API routes
│   ├── controllers/    # Business logic
│   ├── services/       # Mailchimp / GetResponse API handling
│   └── models/         # MongoDB schemas
│── .env                # Environment variables
│── package.json
│── README.md
```

---

## ⚙️ Setup & Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/<your-username>/esp-integration-api.git
   cd esp-integration-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:

   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/
   ```

4. Start the server:

   ```bash
   npm start
   ```

   The API will be running at:
   👉 `http://localhost:5000`

---

## 🛠️ API Endpoints

### **1. Save ESP API Key**

**POST** `/api/integrations/esp`
Request body:

```json
{
  "userId": "12345",
  "esp": "mailchimp",
  "apiKey": "your-mailchimp-api-key"
}
```

### **2. Fetch Lists**

**GET** `/api/integrations/esp/lists?userId=12345&esp=mailchimp`

Response:

```json
{
  "lists": [
    {
      "id": "34ab60ee42",
      "name": "techsolve",
      "member_count": 1
    }
  ]
}
```

---

## 📦 Tech Stack

* **Node.js + Express**
* **MongoDB (Mongoose)**
* **Mailchimp API**
* **GetResponse API**
* **dotenv** for env configs
