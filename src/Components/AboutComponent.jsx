import React, { Component } from "react";
import about1 from '../images/about1.jpg'
import impact from '../images/impact.jpg'

class AboutComponent extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <div className="mainContainer">
                <div className="about">
                    <div className="text-center">
                        <img src={about1} alt="" width="100%" height="520" />
                        <h2 className="mt-2">ABOUT US</h2>
                    </div>
                    <div className="text-center ml-5 mr-5">
                        <h5>Designing the finest-quality handcrafted ethnic-wear whilst protecting the age-old heritage crafts of India and empowering our country’s artisans. That’s our story.</h5>
                    </div>
                    <div style={{ marginTop: "10%" }}>
                        <img src={impact} alt="" width="50%" height="450" style={{ float: 'left', marginRight: '3%' }} />
                        <h3>About The Designer</h3>
                        <h6 className="text-justify" style={{ lineHeight: "30px" }}>Drawn to the radiance of colours and intricacy of patterns from a very young age, Farida Gupta’s love for designing is no secret. Following a successful balancing act as a full-time mother and a part-time designer, she finally pursued her true calling in 2011. With a post-graduation from Jawaharlal Nehru University, New Delhi under her belt, she decided to take the plunge and incorporated the eponymous label. Driven by her insatiable love for India’s heritage crafts and a relentless spirit to bring them to light, she set forth on her journey with no looking back. <br />

                        It all began with a few fabric swatches, a sketchpad and a vision. Rolling back the clock to the late 90s, Farida had started out with two embroidery girls in the living room of her South Delhi flat, where she taught them the nuances of the craft.<br /> Amazed by their eagerness to learn, she was determined to bring their flair to the fore. What ensued was a story for the records: one that involved countless solo journeys across the country to chase her dreams, quite literally. Shuttling between exhibitions and rural parts of the country, there was a time she was living out of a suitcase, all in the name of her love for Indian heritage crafts.

                        In 2011, almost as an epiphany, having realized that her passion had boundless potential to create avenues of employment opportunities, she channelized all of her focus towards her own label. Presently, the label has created employment for a plethora of local artisans. </h6>
                    </div>
                    <div className="text-center mt-5">
                        <h3>Who We Are</h3>
                        <div className="mt-5">
                            <img src={impact} alt="" width="50%" height="450" style={{ float: 'right', marginLeft: '2%' }} />
                            <h6 className="text-justify" style={{ lineHeight: "30px" }}>In 2016, the brand underwent a digitized resurrection under the watchful eye of Farida’s entrepreneurial son, Sahil Gupta. Within a span of a year, we were awarded India's Most Innovative SMB on digital in 2017. Giving Farida’s creative flair some enterprising direction, Sahil gradually honed the potential of the label, in terms of its societal outreach. Being fairly well acquainted with the abundance of talent and expertise of India’s craftsmen, he’s been resolute to ensure they get the recognition and appreciation they rightly deserve. Presently, over 1000 artisans from various remote villages in Rajasthan and Gujarat are employed by the brand, providing them with a steady income and platform for the whole world to see. In today’s times of indispensable need for women empowerment and gender equality, the label with its 300 strong brigade of women employees, is marching steadily towards its endeavor to empower and employ at least 10,000 artisans and 5,000 underprivileged women by 2028. <br />
                                Constantly striving to provide you with a seamless shopping experience, our team thrives on customer-obsession. An ardent admirer of the indigenous crafts, our brand channelizes its efforts and resources to revive the might of the local artisan, focusing primarily on works that involve handcrafted techniques. Taken care of by a team of young and enthusiastic minds, the brand as well as the FG family is growing with each passing minute</h6>
                        </div>
                    </div>
                    <div className="mt-5">
                        <img src={about1} alt="" width="100%" height="520" />
                    </div>
                    <div style={{ marginTop: '8%' }}>

                        <img src={impact} alt="" width="50%" height="450" style={{ float: 'left', marginRight: '2%' }} />

                        <h3>Our Vision</h3>
                        <h6 className="text-justify" style={{ lineHeight: "30px" }}>Working towards our goals on a daily basis, we envision ourselves as the world’s leading brand for Indian Ethnic Wear. Driven by customer obsession and technological prowess, we respect the divide between modern automation and the irrefutable subtleties of hand-made precision. We aspire to stay true to our core values whilst focusing on the customer and the artisan in an equal sense. Providing a flawless shopping experience through and through, we’re gradually increasing artisanal employment every single step of the way. </h6>

                    </div>
                    <div style={{ marginTop: '25%'}}>
                        <div className="row">
                            <div className="column">
                                <img src={impact} alt="" />
                            </div>
                            <div className="column">
                                <img src={impact} alt="" />
                                <img src={impact} alt="" />
                            </div>
                            <div className="column">
                                <img src={impact} alt="" />
                            </div>
                            <div className="column">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutComponent