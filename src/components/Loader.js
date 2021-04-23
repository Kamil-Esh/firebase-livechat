import React from 'react';
import {Button, Container, Grid} from "@material-ui/core";
import Box from "@material-ui/core/Box";

const Loader = () => {
    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={"center"}
                  justify={"center"}>
                <Grid style={{width:400, background: 'lightgray'}}
                      container
                      alignItems={"center"}
                      justify={"center"}>
                    <div className="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;