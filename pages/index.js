import { createClient } from "contentful";
import React from "react";

const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.CONTENT_DEV,
});
const Home = (props) => {
  props.employees.items.reverse();
  return (
    <>
      <div className="container" style={{ padding: "10px" }}>
        {props.employees.items.map(({ fields }) => (
          <>
            <div>
              <h2>Name: {fields.name}</h2>
              <h3>Email: {fields.email}</h3>
              <h4>Bio: {fields.bio}</h4>
              <br />
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const employees = await client.getEntries();
  return {
    props: {
      employees,
    },
  };
};
