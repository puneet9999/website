// components.js

/**
 * Reusable Components for Navbar, Footer, and Common Sections
 * 
 * This file contains the structure of reusable components that can be
 * customized according to specific needs. Make sure to replace the placeholder
 * content with your actual implementation.
 */

// Navbar Component
// Usage: Customize the links and styles as desired
const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
};

// Footer Component
// Usage: Customize contact info and links
const Footer = () => {
    return (
        <footer>
            <p>© 2026 Your Company. All rights reserved.</p>
            <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
            </ul>
        </footer>
    );
};

// CommonSection Component
// Usage: This component can be reused for any common section
const CommonSection = ({ title, content }) => {
    return (
        <div className="common-section">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export { Navbar, Footer, CommonSection };