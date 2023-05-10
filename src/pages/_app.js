// pages/_app.js
import Head from 'next/head';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
      background-color: #121827;
    }
    .container {
      margin-left: 12.5rem!important; /* side-navbar genişliği kadar boşluk bırak */
    }
    @media (min-width: 1400px){
      .container, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {

      max-width: 1283px!important;
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
    .card-img, .card-img-top {
      border-top-left-radius: var(--bs-card-inner-border-radius);
      border-top-right-radius: var(--bs-card-inner-border-radius);
      max-height: 250px!important;
      min-height: 230px;
      object-fit: contain;
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
    h1 {
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
    }
    .align-items-center {
      align-items: center!important;
      min-height: 230px;
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
    @media screen and (max-width: 576px){
      .card-deck{
        display: flex;
        flex-direction: column;

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
  return (
    <>
      <Head>
        <title>ValoranGameTr</title>
        <meta name="description" content="Valorant Game valorant oyununa ait bilgileri bulabilrceğiniz bir web sitesi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../../public/favicon.ico" />
      </Head>

      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
