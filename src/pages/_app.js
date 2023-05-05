// pages/_app.js
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
      background-color: #121827;
    }
    .container {
      margin-left: 12.5rem!important; /* side-navbar genişliği kadar boşluk bırak */
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
      margin-left: -22px;
    }
    .col-md-6 {
      display: flex;

      width: 50%;
      border: none;
      border-radius: 0.15rem;
      box-shadow: -8px 12px 20px 0 #11151a!important;
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
    /*Ana Sayfa*/
    .card{
      margin-bottom: 10px;
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
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
