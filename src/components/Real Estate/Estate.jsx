import React from "react";
import "./Estate.css";
import { Container } from "react-bootstrap";
import Heading from "../Section Heading/Heading";
import TabPanelContent from "../Panel Content/TabPanelContent";

const Estate = () => {
  return (
    <div className="estate">
      <Container>
        <Heading
          categoryName="Real Estate"
          sectionText="All House Land House for rent Land for rent Project"
        />
        <div className="estate__container">
          <TabPanelContent />
          <TabPanelContent />
          <TabPanelContent />
          <TabPanelContent />
        </div>
      </Container>
    </div>
  );
};

export default Estate;
