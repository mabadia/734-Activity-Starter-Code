import React, { useContext } from "react";


export default function RequestFormButton() {
  const buttonStyling = React.useContext(StylesContext)
  return (
    <div>
      <input style={buttonStyling} type="submit" value="Submit" />

    </div>
  );
}
