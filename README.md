# NaviAir

An Airbnb-like web application for listing and discovering properties around the world.

## 🏠 Features

- **Browse Listings**: View all available property listings
- **Create Listings**: Add new property listings with title, description, price, location, and country
- **View Details**: See detailed information about each property
- **Edit Listings**: Update existing property information
- **Delete Listings**: Remove listings from the database
- **Responsive Design**: Clean UI with custom CSS styling

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Templating**: EJS, ejs-mate
- **Styling**: Custom CSS

## 📁 Project Structure

```
NaviAir/
├── app.js                 # Main application entry point
├── models/
│   └── listings.js        # Mongoose schema for listings
├── views/
│   ├── layouts/           # EJS layout templates
│   ├── listings/          # Listing-related views
│   └── includes/          # Reusable partials (navbar, footer)
├── public/
│   └── css/
│       └── style.css      # Custom stylesheets
├── init/
│   ├── index.js           # Database initialization script
│   └── data.js            # Sample data for seeding
└── package.json           # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally on port 27017)

### Installation

1. Clone the repository or navigate to the project folder:
   ```bash
   cd NaviAir
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start MongoDB (if not already running):
   ```bash
   mongod
   ```

4. (Optional) Initialize the database with sample data:
   ```bash
   node init/index.js
   ```

5. Start the server:
   ```bash
   node app.js
   ```

6. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## 📝 API Routes

| Method | Route              | Description           |
|--------|--------------------|-----------------------|
| GET    | `/`                | Home page             |
| GET    | `/listings`        | View all listings     |
| GET    | `/listings/new`    | Create new listing form |
| POST   | `/listings`        | Submit new listing    |
| GET    | `/listings/:id`    | View listing details  |
| GET    | `/listings/:id/edit` | Edit listing form   |
| PUT    | `/listings/:id`    | Update listing        |
| DELETE | `/listings/:id`    | Delete listing        |

## 🗄️ Database Schema

**Listing Model:**
- `title` (String, required) - Title of the property
- `description` (String, required) - Description of the property
- `image` (String) - URL to property image (default image provided)
- `price` (Number, required) - Price per night
- `location` (String) - Property location
- `country` (String) - Country name

## 🤝 Contributing

Contributions are welcome! Feel free to fork this project and submit pull requests.

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ using Node.js, Express, and MongoDB
