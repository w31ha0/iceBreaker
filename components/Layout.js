import React from "react";
import Head from 'next/head'
import { Container } from 'reactstrap'
import Notifications from "react-notify-toast";

export default class extends React.Component{

    render(){
        return(
            <div>
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
                <Container>
                    <Notifications />
                    {this.props.children}
                </Container>
            </div>
        )
    }
}

