import React, { Component } from 'react'
import blockBanner from '../images/block_banner.jpg'
import blk1 from '../images/blk1.jpg'
import blk2 from '../images/blk2.jpg'
import Badge from 'react-bootstrap/Badge'
import shopping from '../images/now_shopping.jpg'
import ss from '../images/ss.jpg'
import gb from '../images/gb.jpg'
import nm from '../images/nm.gif'
import conserve from '../images/conserve.jpg'
import Storage from '../Storage'

class BlockMakingComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: [
                { image: shopping, description: "The FG COVID-19 Precautions Manual" },
                { image: ss, description: "SS ’20 Collection: Roz Meher" },
                { image: gb, description: "Gul Bano Collection - Floral Finesse in Fine Fabric" },
                { image: nm, description: "Nur Mahal- A contemporary rendition of timeless styles " },
                { image: conserve, description: "Conserve water, conserve life." }
            ]
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
        Storage.setPath("/block-making")
    }

    render() {
        return (
            <div className='mainContainer container'>
                <div>
                    <h5>Block-Making: Decoding the Art</h5>
                    By: Darshil Shah<br />
                    19 Feb, 2020
                </div>

                <div className="mt-5">
                    <img src={blockBanner} alt="sample" width="100%" height="500"></img>
                </div>

                <div className="mt-3">
                    <p>
                        A manifestation of the design sketch into reality, the process of block-making marks the beginning of the production process of a typical FG style. Laborious yet rewarding, it involves many stages.<br />
                        Tracing of the design (likhai) with calligraphic charm, the first stage involves recreating the sketch on a wooden block. Creating depth and dimension, each block is then carefully carved to capture the finest of details. The main block that represents the outline of a printed pattern is referred to as the Main Block or the ‘rekh’. The smaller blocks that fill out colour in the motifs are individually known as ‘datta’, while the intricate jaal prints require a different kind of block called ‘nas’.
                    </p>
                </div>

                <div className="mt-3">
                    <img src={blk1} alt="sample" width="50%" height="400" />
                    <img src={blk2} alt="sample" width="50%" height="400" />
                </div>

                <div className="mt-3">
                    <p>
                        Employing an artillery of tools, the artisans sculpt these elaborate motifs into existence. Chiseled to perfection, a millimeter’s worth of distance can be depicted in the patterns orchestrated within the crevices of these blocks. Rough around the edges, yet refined in its intricacies, the art of block-making is truly remarkable.<br />
                        A little known fact about hand block-printed styles is that as per common practice, even a single buti motif usually requires multiple blocks to be recreated on fabric.<br />
                        At FG, we celebrate this art-form in all its glory. For more such interesting articles, please subscribe to our newsletter <a href="/">here.</a>
                    </p>
                </div>

                <div className="mt-3">
                    <h6>Tags : &nbsp; <Badge variant="secondary">block making</Badge>&nbsp;<Badge variant="secondary">block printing</Badge>&nbsp;<Badge variant="secondary">Indian crafts</Badge>&nbsp;<Badge variant="secondary">block printing techniques</Badge></h6>
                </div>

                <div className="mt-5 text-center">
                    <h3>More NVB Blog Posts</h3>
                    <div>
                        <hr style={{
                            color: '#000000',
                            height: .5,
                            borderColor: '#000000'
                        }} />
                    </div>
                    <div className="GridContainer mr-2 ml-2 row row-cols-1 row-cols-md-3">
                        {this.state.cards.map(card =>
                            <div className="col mb-4">
                                <div className="card">
                                    <img src={card.image} className="card-img-top" alt="img" width="10%" height="200" />
                                    <div className="card-body text-left">
                                        <h6>{card.description}</h6>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default BlockMakingComponent