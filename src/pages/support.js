// pages/support.js
import { useEffect, useState } from 'react';
import Link from "next/link"; // Link bileşenini içe aktar
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";

const SupportPage = () => {
    return (
        <div className="container">
            <TopBar />
            <div class="d-sm-flex align-items-center justify-content-between my-4 h1-background">
                <h1 class="h5 mb-0 ml-3 text-capitalize">Destek</h1>

                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb small" itemscope="" itemtype="https://schema.org/BreadcrumbList">
                        <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem" class="breadcrumb-item">
                            <a itemprop="item" href="./" title="Home"><span itemprop="name">Home</span></a><meta itemprop="position" content="1" />
                        </li>
                        <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem" class="breadcrumb-item active text-capitalize"><span itemprop="name">Suport</span><meta itemprop="position" content="2" /></li>
                    </ol>
                </nav>
            </div>
            <div className="row">
                <SideBar />
                <div class="container card-ram">
                    <div class="col-12 text-center text-gray-500">

                        <p></p>

                        <div>
                            <p>Valorantın <b>resmi olmayan</b> websitesiyiz ve oyunun gelişimi üzerinde hiçbir etkimiz yok.</p>
                            <p>Valorant ile ilgili desteğe ihtiyacınız varsa  geliştiricileriyle iletişime geçin! </p>
                            <h2 class="text-gray-100">Ancak...</h2>
                            <p class="text-gray-200">Web sitemizde bir hata mı buldunuz?</p>
                            <p class="text-gray-200"> Web sitemizle ilgili bir sorunuz mu var?</p>
                            <p class="text-gray-100"><b>BİZE YAZIN, TR OR EN!</b></p>
                            <p class="h3"><code>infovalorantgame@gmail.com</code></p>


                        </div>

                    </div>
                </div>

            </div>
        </div>


    );
};
export default SupportPage;
