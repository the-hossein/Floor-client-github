import React from "react";
import Style from "./Pricing.module.scss";
import MainHeadeer from "../../header/mainHeader/MainHeadeer";
import { Grid } from "@mui/material";
import { Container } from "../../../tools/customeContainer/Container";
const Pricing: React.FC = () => {
  return (
    <>
      <MainHeadeer />
      <Container top={"3rem"}>
        <Grid container spacing={12}>
          <Grid item xs={6} md={6}>
            <div className={Style.plans}></div>
          </Grid>
          <Grid item xs={6} md={6}>
            <div className={Style.plans}></div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Pricing;
