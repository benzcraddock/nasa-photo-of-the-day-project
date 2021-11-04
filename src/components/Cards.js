import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { ReadableText } from "./styled-components/ReadableText";
// import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip"; 
import styled from 'styled-components';


const StyledContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 8px;

  ;
`
const StyledHeading = styled.h1`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: #f6f7f8;

  transition: all 0.2s ease-in-out;
`

const StyledImg = styled.img`
  margin: .5rem;
  width: 50%;
  border: 4px solid #f6f7f8;
`

export default class Objects extends Component {
  render() {
    if (!this.props.data) {
      return <h1>Loading...</h1>;
    }
    return (
      <StyledContainer>
        {/* Title */}
        <StyledHeading>{this.props.data[0].title}</StyledHeading>
        {/* Youtube Video */}
        {this.props.data[0].url.includes("image") ? (
          <Tooltip title="Click on image to view the image in HD">
            <StyledImg
              src={this.props.data[0].url}
              alt="Space Img"
              onClick={() => window.open(this.props.data[0].hdurl, "_blank")}
            />
          </Tooltip>
        ) : (
          // Embeded Youtube Video
          <iframe
            title="video"
            src={this.props.data[0].url}
            width="560"
            height="315"
            frameBorder="0"
            allowFullScreen
            align="middle"
          />
        )}

        {/* Description */}
        <ReadableText>{this.props.data[0].explanation}</ReadableText>
        {/* <Placeholder dates={this.state.startDate} /> */}
      </StyledContainer>
    );
  }
}
