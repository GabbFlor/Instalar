import Banner_style from "../styles/Banner_sytle";

const Banner = ({ img, img_position, children }) => {
    return (
        <section 
            className="banner-section" 
            style={{ 
                backgroundImage: `url(${img})`,
                backgroundPosition: (img_position != undefined ? `${img_position}` : "center")
                // backgroundPosition: "top"
            }}
        >
            <Banner_style />
            {children}
        </section>
    )
}

export default Banner;