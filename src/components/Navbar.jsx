import { useRef } from "react";
import { FaBars, FaPlayCircle, FaTimes } from "react-icons/fa";
import "./Navbar.css";
function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<>
		
		<header>
		
		<h3>Milton</h3>
			
      
			<nav ref={navRef}>
				<a href="/#">Features</a>
				<a href="/#">Testimonial</a>
				<a href="/#">Pricing</a>
				<a href="/#">FAQs</a>
				<a href="/#">Blog</a>
				<div class="right-buttons">	
        <a href="#" class="btn btn-white right-class" >Log in</a>
        <a href="#" class="btn btn-black right-class">Get Started</a>
        </div>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
				
			</nav>

			
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
			
		</header>
		</>
	);
}

export default Navbar;