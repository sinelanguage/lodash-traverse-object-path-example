import _ from "lodash";

document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

const myO = {
  one: {
    two: {
      three: "THREE",
      four: "Four"
    }
  }
};

const hasNestedProp = (dataObject, path) => {
  const objPathArray = path.split(".").slice(1, path.length - 1);
  return _.has(dataObject, objPathArray);
};

const handleNestedProp = (dataObject, path) => {
  if (hasNestedProp(dataObject, path)) {
    // console.log(dataObject, path);
    let newPath = path
      .split(".")
      .slice(1, path.length - 1)
      .join(".")
      .toString();
    return _.get(dataObject, newPath, "default empty string");
  }
  return "empty string";
};

console.log(handleNestedProp(myO, "myO.one.two.three"));
