import React from "react";
import Head from 'next/head'
import { Container } from 'reactstrap'
import Notifications from "react-notify-toast";

export default class extends React.Component{

    render(){
        return(
            <div id="main">
                <Head>
                    <meta name="viewport" content="width=device-width,height=device-height" />
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
                          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
                          crossOrigin="anonymous"/>
                    <link rel="stylesheet" href="https://unpkg.com/react-tabs@2/style/react-tabs.css"/>
                    <meta charSet="utf-8" />
                    <meta name="mobile-web-app-capable" content="yes"/>
                    <meta name="apple-mobile-web-app-capable" content="yes"/>
                </Head>
                <div>
                    <Container>
                        <Notifications />
                            {this.props.children}
                    </Container>
                </div>
                <style jsx global>{`
                    #main {
                        background: linear-gradient(#07466F,#26EFB4);
                        position: absolute;
                        top: 0;
                        left: 0;
                        height:100%;
                        width:100%;
                        max-height:100%;
                        max-width:100%;
                        overflow-x: hidden;
                    }
                    .wrapper {
                        background: transparent;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 7px;
                        width: 100%;
                        height: 100%;
                    }
                    .form-group-container {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                        padding: 7px;
                    }
                    .center-container {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                        padding: 7px;
                        align-items: center;
                    }
                    .label-general {
                        color: white;
                        font-family: 'Roboto Medium', sans-serif;
                        font-size: 100%;
                        font-weight: lighter;
                    }
                    .option-general {
                        color: black;
                        font-family: 'Roboto Medium', sans-serif;
                        font-size: 100%;
                        font-weight: lighter;
                    }
                    .input-general{
                         background: transparent ;
                         border: 1px solid #fff;
                         color: white;
                         font-family: 'Roboto Medium', sans-serif;
                         font-size: 100%;
                         font-weight: lighter;
                         padding: 7px;
                         width: 100%;
                    }
                    .list-item-general{
                         background: transparent ;
                         border: 1px solid #fff;
                         color: white;
                         font-family: 'Roboto Medium', sans-serif;
                         font-size: 100%;
                         font-weight: lighter;
                         padding: 7px;
                         width: 100%;
                         list-style: none;
                    }
                    .btn {
                         background: transparent;
                         box-shadow: none;
                         border: 1px solid #fff;
                         transition: .3s all ease;
                         color: white;
                         font-family: 'Roboto Medium', sans-serif;
                         font-size: 100%;
                         font-weight: lighter;
                         width: 80px;
                         height: 100%;
                    }
                    .btn-submit {
                         background: transparent;
                         box-shadow: none;
                         border: 1px solid #fff;
                         transition: .3s all ease;
                         color: white;
                         font-family: 'Roboto Medium', sans-serif;
                         font-size: 100%;
                         font-weight: lighter;
                         width: 80px;
                         padding: 7px;
                    }
                    .btn-cancel {
                         background: transparent;
                         box-shadow: none;
                         border: 1px solid #fff;
                         transition: .3s all ease;
                         color: white;
                         font-family: 'Roboto Medium', sans-serif;
                         font-size: 100%;
                         font-weight: lighter;
                         width: 80px;
                         height: 100%;
                         padding: 7px;
                         margin-top: 15px;
                    }
                    .App-logo {
                      animation: App-logo-spin infinite 20s linear;
                      height: 80px;
                    }
                    @keyframes App-logo-spin {
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                    }
                    //*{ border:2px solid #CD1821 }
                `}</style>
            </div>
        )
    }
}

