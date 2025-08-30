# LearnLingo 🎓

## 📌 Project
**LearnLingo** is a web application that allows users to browse language teachers, view their profiles, add them to favorites, and book trial lessons.  
Some functionality is available only for authorized users (e.g., adding a teacher to "Favorites").

🔗 Live demo: [https://learn-lingo-ochre-two.vercel.app/](https://learn-lingo-ochre-two.vercel.app/)

---

## ⚙️ Core Technologies
- **React** (with hooks `useState`, `useEffect`, `useMemo`)
- **Redux Toolkit** for global state management and authentication
- **React Router** for routing
- **CSS Modules** for styling
- **LocalStorage** for persisting favorites
- **SVG Sprite** for icons

---

## 🖼️ Layout
The UI is designed with user-friendliness in mind:  
- Teacher cards with photo, rating, price, and description  
- "Book trial lesson" button opens a modal booking form  
- Favorites are stored in **LocalStorage**  
- Authentication prompt if the user is not logged in  

> 🔗 Figma: (https://www.figma.com/design/k0HceYVW3VUYywYUfFjfOa/Learn-Lingo--Copy-?node-id=14-1104&t=G40c58LkDVy1VabC-0)

---

## 📋 Technical Requirements

### Mandatory Features:
1. **Teachers List**  
   - Display teacher’s photo, name, surname  
   - Number of lessons, rating  
   - Hourly price  
   - Levels of students the teacher works with  

2. **Expandable Information** ("Read more / Read less")  
   - Teaching experience  
   - Student reviews  

3. **User Authentication**  
   - Login / Registration via Redux (track `isLoggedIn`)  
   - Add to "Favorites" only for logged-in users  

4. **Favorites**  
   - Clicking the heart icon adds/removes a teacher from favorites  
   - Favorites are stored in LocalStorage  

5. **Booking Lessons**  
   - "Book trial lesson" button opens a modal window  
   - Form to enter user data (name, email, comment)  
   - Success message after confirmation  

---

## 🚀 Getting Started
```bash
# Clone repository
git clone https://github.com/OksanaGukova/learnlingo.git
cd learnlingo

# Install dependencies
npm install

# Start local server
npm start

