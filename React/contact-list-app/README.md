# Contact List Project

A beginner-friendly React project to understand ```props``` by building a dynamic and visually appealing contact list. This project demonstrates how to pass data between components in React and introduces concepts like parent-child relationships, prop usage, and reusable components.

---

## 🚀 Features

- Dynamic contact rendering using props.
- Reusable and modular components.
- Interactive and responsive UI with hover effects.
- Beginner-friendly codebase to learn React basics.

---

## 📂 Project Structure
/src├── App.js # Main parent component 
    ├── ContactList.js # Child component rendering the list of contacts 
    ├── ContactCard.js # Child component for individual contact display 
    ├── index.css # Styles for the application 
    ├── index.js # Entry point of the React app


---

## 🛠️ Technologies Used

- **React JS**: Library for building the UI.
- **CSS**: For styling the components.
- **JavaScript (ES6)**: Logic implementation.

---

## ⚙️ Setup Instructions

Follow these steps to get the project running on your local machine:

### 1. Clone the Repository
```
git clone https://github.com/your-username/contact-list-app.git
cd contact-list-app
```
### 2. Install Dependencies
```npm install```

### 3. Start the Development Server
```npm start```
The app will open at http://localhost:3000.

--- 

## 📜 How It Works
#### 1. App.js:
- Maintains the contact list as an array.
- Passes the list to the ContactList component as props.

#### 2. ContactList.js:
- Receives the list of contacts as props.
- Maps through the array and passes each contact to the ContactCard component.

#### 3. ContactCard.js:
- Receives individual contact details (name, email, phone) as props.
- Displays them in a styled card format.

---

## 🧑‍💻 Code Walkthrough
#### Example of Props Usage
### Parent Component (App.js):
```
<ContactList contacts={contacts} />
Child Component (ContactList.js):
{contacts.map(contact => (
  <ContactCard
    key={contact.id}
    name={contact.name}
    email={contact.email}
    phone={contact.phone}
  />
))}
```

#### Nested Child Component (ContactCard.js):
```
 function ContactCard({ name, email, phone }) {
  return (
    <div className="contact-card">
      <h2>{name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
    </div>
  );
}
```
----

## 🌟 Styling
The ``index.css`` file uses:
- Hover Effects for better interactivity.
- Responsive Design for adapting to different screen sizes.
- Gradient Background for a modern look.
#### Example CSS (from `index.css`):
```
.contact-card {
  background: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 15px;
  margin: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.contact-card:hover {
  transform: scale(1.02);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
```

----

## 🤝 Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch:
```git checkout -b feature/YourFeatureName```
3. Commit your changes:
```git commit -m "Add some feature"```
4. Push to the branch:
```git push origin feature/YourFeatureName```
5. Open a pull request.

---

### **Key Features of the README:**
1. **Beginner-Friendly**: Explains everything step by step, from setup to how the app works.
2. **Code Examples**: Provides practical examples to clarify concepts.
3. **Enhancements**: Encourages users to explore advanced features.
4. **Contributing Section**: Welcomes collaboration.

Let me know if you'd like to modify anything or add personalized details! 😊


