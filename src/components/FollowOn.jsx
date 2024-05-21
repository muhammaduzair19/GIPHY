import { FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn } from "react-icons/fa6"

const FollowOn = () => {
    return (
        <div className="faded-text pt-2">
            <span>Follow on:</span>
            <div className="flex gap-4 pt-3">
                <a href="https://www.linkedin.com/in/muhammaduzair19">
                    <FaLinkedinIn size={22} />
                </a>
                <a href="https://www.instagram.com/muzairilyas">
                    <FaInstagram size={22} />
                </a>
                <a href="https://www.facebook.com/muhammaduzair19">
                    <FaFacebook size={22} />
                </a>

            </div>
        </div>
    )
}

export default FollowOn