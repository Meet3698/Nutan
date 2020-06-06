import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import './style.css'

class FilterComponent extends Component {
    render() {
        return (
            <div className="mt-5">
                <Nav className="col-md-2 d-none d-md-block bg-light sidebar"
                    activeKey="/home"
                    onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                >
                    <div className="sidebar-sticky"></div>
                    <Nav.Item>
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}
export default FilterComponent