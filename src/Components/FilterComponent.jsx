import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import Accordion from 'react-collapsible'
import './style.css'

class FilterComponent extends Component {
    render() {
        return (
            <div className="mt-5">
                <Nav className="col-md-2 d-none d-md-block bg-light sidebar"
                    activeKey="/home"
                    onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                >
                    <Accordion>
                        <div data-trigger="A nifty React accordion component">
                            <p>So this is an Accordion component that used the component. How handy.</p>
                        </div>

                        <div data-trigger="What the difference?" data-trigger-when-open="THAT is the difference!">
                            <p>An Accordion is different to a Collapsible in the sense that only one "tray" will be open at any one time.</p>
                        </div>

                        <div data-trigger="I'm responsive and I have a little secret. Look inside.">
                            <p>And this Accordion component is also completely repsonsive. Hurrah for mobile users!</p>
                        </div>
                    </Accordion>
                </Nav>
            </div>
        )
    }
}
export default FilterComponent




// {/* <div className="sidebar-sticky"></div> */ }
// {/* <Nav.Item>
//                         <Nav.Link href="/home">Active</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                         <Nav.Link eventKey="link-1">Link</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                         <Nav.Link eventKey="link-2">Link</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                         <Nav.Link eventKey="disabled" disabled>
//                             Disabled
//                 </Nav.Link>
//                     </Nav.Item> */}