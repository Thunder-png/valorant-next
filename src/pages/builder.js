// pages/support.js
import { useEffect, useState } from 'react';
import Link from "next/link"; // Link bileşenini içe aktar
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";

const BuilderPage = () => {
    return (
        <div className="container-builder">
            <div className="row-builder">
                <iframe className='mw-100'
                    src="https://valo-build.netlify.app/builder.html"
                    allowFullScreen
                    frameBorder='no'
                    width="1580px"
                    height="800px"
                    title="Builder"
                    scrolling='no'
                />


            </div>
        </div>


    );
};
export default BuilderPage;
