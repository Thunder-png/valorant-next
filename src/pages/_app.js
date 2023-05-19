// pages/_app.js
import Head from 'next/head';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SideBarContext from '../components/SideBarContext';
import { createGlobalStyle } from 'styled-components';
import React, { useState } from 'react';


const GlobalStyle = createGlobalStyle`
    * {
      background-color: #121827;
    }
    iframe{
      align: center;
    }
    .col-xl-4 {
      flex: 0 0 40.333333%;
      max-width: 60.333333%;
    }
    .col-xl-5 {
      flex: 0 0 59.333333%;
      max-width: 60.333333%;
    }
    span.c1 {
      color: aqua;
    }
    form {
      background: transparent;
    }
    .container {
      margin-left: 12.5rem!important; /* side-navbar genişliği kadar boşluk bırak */
    }
    @media (min-width: 1400px){
      .container, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {

      max-width: 1260px!important;
      }
    }
    @media (max-width: 768px){
      .container {
        margin-left: 1rem
      }
    }
  
    .col-3, .col-md-3 {
      flex: 0 0 auto;
      width: 0!important;
    }
    .my-4{
      background-color: #222942;
      background-image: linear-gradient(135deg, #222942 0, rgb(17, 23, 38) 50%);
      color: #fff;
      padding: 0.6rem 0;
      border-radius: 25px;
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      margin-top: 0rem!important;
      margin-bottom: 1.5rem!important;
    }
    img.card-img-battlepass {
      
    }
    .card-img, .card-img-top {
      width: 100%;
      height: auto;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      border-top-left-radius: var(--bs-card-inner-border-radius);
      border-top-right-radius: var(--bs-card-inner-border-radius);
      max-height: 100px!important;
      min-height: 150px;
      object-fit: contain;
    }
    img.card-img-top {
      border-top-left-radius: calc(0.35rem - 1px);
      border-top-right-radius: calc(0.35rem - 1px);
      max-width: 100%;
      webkit-filter: drop-shadow(5px 5px 5px #222);
      filter: drop-shadow(3px 3px 6px #000);
    }
    img.card-img-agent.p-3 {
      max-width: 300px;
      min-height: 500px;
      object-fit: cover;
      text-align: center;
    }
    .background-agent {
      display: flex;
      justify-content: center;
    }
    .rowBattlepass{
      display: flex;
      flex-wrap: wrap;
      margin-right: 140px;
      margin-left: -15px;
    }


    .cardBottomLine {
      width: 100%;
      height: 5px;
      background-color: red;
    }
    
    .img-fluid {
      max-width: 200px!important;
      height: auto;
      object-fit: contain;
      max-height: 250px;
    }
    .col-md-6 {
      display: flex;
      width: 50%;
      border: none;
      border-radius: 0.15rem;
      box-shadow: -8px 12px 20px 0 #11151a!important;
      flex-direction: column;
      align-content: space-between;
      justify-content: center;
      align-items: center;
    }
    .textRight audio {
      height: 17px;
      padding-left: 45px;
    }
    .cardBottomLine {
      width: 100%;
      height: 5px;
      background-color: red;
    }
    .col-md-4.text-center.mb-4 {
      background: #0d1322;
      border-radius: 6px;
      border: 1px solid #1d2334;
    }
    }
    h5.Info-Head {
      color: #afff46;
      background: transparent;
    }
    a {
      color: white;
      text-decoration: none;
      background: transparent;
    }
    .title {
      margin-left: 1rem;
      font-size: 2rem;
    }
    h2 {
        color: white;
        background-color: transparent;
    }
    h1 h3 h4 h5 h6 {
      background: transparent;
    }
    footer {
      margin-left: 12.5rem;
    }
    p {
        color: white;
        background: transparent;
    }
    h3{
      color:white;
      font-size: small;
      background: transparent;
    }
    .infoContainer {
      display: flex;
      justify-content: space-evenly;
    }
    .imgContainer {
      /* background: #0d1322; */
      border-radius: 6px;
      border: 15px solid #0d1322;
    }
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
    /*Savas Bileti*/
    .col-lg-9 {
      margin-right: 1px;
    }
    .my-5{
      background-color: #222942;
      background-image: linear-gradient(135deg, #222942 0, rgb(17, 23, 38) 50%);
      color: #fff;
      padding: 0.6rem 0;
      border-radius: 25px;
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      margin-top: 0rem!important;
      margin-bottom: 1.5rem!important;
      margin-left: -6px;
    }
    .mb-4{
      background-color: #222942;
      background-image: linear-gradient(135deg, #222942 0, rgb(17, 23, 38) 50%);
      color: #fff;
      padding: 0.6rem 0;
      border-radius: 25px;
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      margin-top: 0rem!important;
      margin-bottom: 1.5rem!important;

    }
    .rowVoices {
      display: flex;
      flex-wrap: wrap;
      margin-right: 150px;
      margin-left: -15px;
    }
    .rowVoices h5{
      color: white;
    }
    /*Ana Sayfa*/
    .card{
      position: relative;
      display: flex;
      flex-direction: column;
      min-width: 0;
      word-wrap: break-word;
      background-color: #172038;
      background-clip: border-box;
      border: none;
      border-radius: 0.15rem;
      box-shadow: -8px 12px 20px 0 #11151a!important;
      margin: 10px;
  
    }
    .card-body{
      flex: 1 1 auto;
      min-height: 1px;
      padding: 0.5rem 1.25rem;
      background-color: #161f36;
    }
    .card-header{
      padding: 0.75rem 1.25rem;
      margin-bottom: 0;
      background-color: #15203c!important;
      background-image: linear-gradient(135deg ,#161f37 0,#111726 100%)!important;
    }
    .card-deck {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      padding-right: 260px;
      margin-right: 60px;
      margin-top: 10px;
    }
    h5.card-title {
      background: transparent;
    }
    h4.pt-3.pb-1.text-gray-400 {
      background: transparent;
    }
    @font-face {
      font-family: 'VALORANT';
      font-style: normal;
      font-weight: 400;
      src: local('VALORANT'), url('https://fonts.cdnfonts.com/s/37505/Valorant Font.woff') format('woff');
  }
  .sideNavbar {
      /* Kenar çubuğu için stiller */
      width: 12.5rem;
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      background: linear-gradient(72deg, #172038 10%, #10151e 100%);
      padding-top: 50px;
  }
    
  .navList {
      /* Navigasyon listesi için stiller */
      list-style-type: none;
      padding: 0;
      margin: 0;
  }
    
  .menuTitle {
      /* Menü başlığı için stiller */
      color: #e74a3b;
      text-transform: capitalize;
      font-size: 1rem;
      margin-left: 1rem;
  }
    
  .submenu {
      /* Alt menü için stiller */
      list-style-type: none;
      padding: 0;
  }
    
  .sidebarDivider {
      /* Kenar çubuğu bölücüsü için stiller */
      border: none;
      margin: 0 1rem 1rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .submenu a {
      display: block;
      color: #ccc;
      font-size: 13.6px;
      text-decoration: none;
      padding: 0.5rem 1rem;
      font-family: 'VALORANT', sans-serif!important;
  
  }
    
  .submenu a:hover {
      background-color: rgba(255, 255, 255, 0.1);
  }
  
    @media screen and (max-width: 576px){
      .card-deck{
        display: flex;
        flex-direction: column;
        padding-right: 1px;
        margin-right: 1px;
        align-content: center;
        align-items: center;

      }
    }
    @media (min-width: 576px){
      .card-deck .card {
        flex: none!important;
        margin-bottom: 10px;

      }
    }
`;

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideBarContext.Provider value={{ isOpen, toggleSideBar }}>

        <Head>
          <title>ValoranGameTr</title>
          <meta name="description" content="Valorant Game valorant oyununa ait bilgileri bulabilrceğiniz bir web sitesi" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="../../public/favicon.ico" />
        </Head>

        <GlobalStyle />
        <Component {...pageProps} />
      </SideBarContext.Provider>

    </>
  );
}

export default MyApp;