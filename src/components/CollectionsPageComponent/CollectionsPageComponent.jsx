import React from "react";
import CollectionsItem from "../CollectionsItem/CollectionsItem";
import "./CollectionsPageComponent.css";
function CollectionsPageComponent() {
  return (
    <div className="collections__wrapper">
      <CollectionsItem />
      <CollectionsItem />
      <CollectionsItem />
      <CollectionsItem />
      <CollectionsItem />
      <CollectionsItem />
      <CollectionsItem />
    </div>
  );
}

export default CollectionsPageComponent;
