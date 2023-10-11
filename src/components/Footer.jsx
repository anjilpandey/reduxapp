import { linksData } from "../data/blog-posts";
import FooterLink from "./FooterLink";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer bg-blue-dark">
      <div className="container">
        <div className="ftr-list">
          <div className="ftr-item">
            <a href="#" className="ftr-brand text-white">
              ANJIL PANDEY <span className="ftr-brand-dot bg-white"></span>
            </a>

            
            <ul className="social-links text-white flex flex-wrap text-gray text-base">
              <li><a className="" href="https://www.linkedin.com/in/anjil-pandey/" target="_blank">Linkedin</a></li>
              <li><a className="" href="https://www.instagram.com/anjil_pandey_/" target="_blank">Instagram</a></li>
            </ul>
          </div>

          {
            linksData.map((linkData) => {
              return (
                <FooterLink key = { linkData.id } linkData = { linkData } />
              )
            })
          }
        </div>
        <div className="ftr-text text-center text-gray text-base">Copyright &copy; 2023. Crafted with love.</div>
      </div>
    </footer>
  )
}

export default Footer
