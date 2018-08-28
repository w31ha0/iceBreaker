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
                <style jsx>{`
                    #main {
                            background: linear-gradient(#26EFB4, #07466F);
                            position: absolute;
                            top: 0;
                            left: 0;
                            height:100%;
                            width:100%;
                            max-height:100%;
                            max-width:100%;
                            overflow-x: hidden;
                    }
                `}</style>
            </div>
        )
    }
}

