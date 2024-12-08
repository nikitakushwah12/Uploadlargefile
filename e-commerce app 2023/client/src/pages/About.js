import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus  h-400">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%", height: "450px" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="text-justify">Fashion Clothing Store</h1>
          <h5 className="text-justify mt-2 ">
            ‘ Fashion clothing store’ is a form of clothing store which allows
            consumers to directly by goods or services from a seller over the
            internet using a web browser or a mobile application. this is a
            massive industry that has grown grammeticaly in recent years.
            Providing more benefits and convenience that offline business. The
            Fashion of interaction between business and customer has also
            changed drasticaliy because of the internet boom and rapid
            innovations and development of the logistics industry, and it has
            even made if possible for small business to commerce with customers
            globally.The shop keep on electronic history of all purchases and
            transaction.
          </h5>
        </div>
        {/* <div>
          <h1>Aim of the website</h1>
          <p>
            Aims of Fashion Clothing Store are : Build a user friendly platform
            :- Develop an intuitive online space that allows users to
            effortlessly list, share and discover items <br></br> Convenience :-
            Online store are available 24 hours a day and can be accessed from
            anywhere with an internet connection.
            <br /> Time saving :- Fashion clothing store can save time by
            avolding the need to travel, wait in long lines, or deal with
            crowded store.
            <br /> Wider selection :- Store can offer a wider selection of
            products than physical stores because they aren’t limited by storage
            constraints.
            <br /> Price :- Fashion clothing store can offer price advantages.
          </p>
        </div> */}
      </div>
    </Layout>
  );
};

export default About;
