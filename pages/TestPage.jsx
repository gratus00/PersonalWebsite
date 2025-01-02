import React from "react";
import CustomNavbar from "../components/NavBar";

const TestPage = () => {
    return (
        <>
            <CustomNavbar />
            <div style={{ padding: "2rem", textAlign: "center" }}>
                <h1>Test Page</h1>
                <p>This is a basic test page to check navigation back to the index page.</p>
            </div>
        </>
    );
};

export default TestPage;
