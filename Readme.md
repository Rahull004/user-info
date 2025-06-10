# 🌐 User Directory

A modern React application that displays an interactive user directory with profile management. Features a vibrant gradient background, paginated user grid, and detailed profile views with smooth animations and responsive design.

## ✨ Features

* **50+ User Profiles** - Fetches and displays user data from DummyJSON API
* **Interactive Grid Layout** - Clean, responsive card-based user interface
* **Detailed Profile Views** - Click any user to see comprehensive profile information
* **Smooth Animations** - Hover effects, transitions, and interactive elements
* **Pagination System** - Navigate through multiple pages of users
* **Gradient Background** - Dynamic blue-to-green gradient for modern aesthetics
* **Fully Responsive** - Adapts seamlessly to desktop, tablet, and mobile devices
* **Corporate Theme** - Professional design suitable for business applications

## 🖼 Preview

![image](https://github.com/user-attachments/assets/dd3e6dda-1d36-4a32-b168-554126a3dcb9)
![image](https://github.com/user-attachments/assets/e5149677-a2fc-4234-9cfd-d6a97c50886e)


## 🔧 Technologies Used

* **React** - Component-based UI framework
* **CSS3** - Custom styling with modern features
* **DummyJSON API** - Mock user data provider
* **React Hooks** - State management with useState and useEffect
* **CSS Grid & Flexbox** - Responsive layout system

## 🎨 Design Features

### User Grid
- Colorful icon-based user avatars
- 5-column responsive grid layout
- Smooth hover scale effects
- Clean typography with user names

### Profile Pages
- Comprehensive user information display
- Two-column layout for personal and contact details
- Back navigation to directory
- Consistent header/footer design

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/user-directory.git
cd user-directory
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
user-directory/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── components/
│   │   ├── UserDirectory.js    # Main directory component
│   │   ├── UserProfile.js      # Individual profile view
│   │   ├── UserCard.js         # User card component
│   │   └── Pagination.js       # Pagination controls
│   ├── App.js                  # Root component with routing
│   ├── index.css               # Global styles and theme
│   └── index.js                # Application entry point
├── package.json
└── README.md
```

## 📦 API Integration

### Endpoint Used
```
https://dummyjson.com/users?limit=50&skip=0
```

### Response Structure
```json
{
  "users": [
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "phone": "+1-234-567-8900",
      "company": {
        "name": "Tech Corp",
        "title": "Software Engineer",
        "department": "Engineering"
      },
      "address": {
        "address": "123 Main St",
        "city": "New York",
        "state": "NY"
      }
    }
  ]
}
```

## 🎯 Key Features Implementation

### Pagination
```javascript
const USERS_PER_PAGE = 10;
const totalPages = Math.ceil(users.length / USERS_PER_PAGE);
```

### User Avatar Generation
Each user gets a unique colored icon avatar based on their ID, creating a vibrant and distinguishable visual identity.

### Responsive Grid
```css
grid-template-columns: repeat(5, 1fr);
/* Adapts to 4, 3, or 2 columns on smaller screens */
```

## 🛠 Customization

### Change Color Theme
Update the gradient in `index.css`:
```css
background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
```

### Modify Grid Layout
Adjust columns in the `.user-icons-grid` class:
```css
grid-template-columns: repeat(6, 1fr); /* For 6 columns */
```

### Update API Endpoint
Change the API URL in `UserDirectory.js`:
```javascript
const response = await fetch('your-api-endpoint');
```

## 📱 Responsive Breakpoints

- **Desktop**: 5 columns (default)
- **Tablet** (≤1024px): 4 columns
- **Mobile** (≤768px): 3 columns
- **Small Mobile** (≤480px): 2 columns

## 🚦 Performance Optimizations

- Lazy loading for user avatars
- Pagination to limit rendered components
- CSS transitions instead of JavaScript animations
- Optimized re-renders with React hooks

## 🐛 Known Issues

- None currently reported

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the **MIT License**.

## 🙌 Acknowledgements

* [DummyJSON](https://dummyjson.com) for providing free mock user data
* React community for excellent documentation
* Contributors and testers who helped improve this project

## 📞 Contact

 [Rahul Bansal](https://www.linkedin.com/in/rahul-bansal-57abb7256/)


---

<p align="center">Made with ❤️ </p>
