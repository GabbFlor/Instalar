import Banner_style from "../styles/Banner_sytle";

const Banner = ({ img, children }) => {
    return (
        <section 
            className="banner-section" 
            style={{ backgroundImage: `url(${img})` }}
        >
            <Banner_style />
            {children}
        </section>
    )
}

export default Banner;