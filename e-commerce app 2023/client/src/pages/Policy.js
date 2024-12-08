import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h2 className="text-justify text-center mt-2 font-weight:700">
            Privacy Policy
          </h2>
          <hr />
          <p>
            <span className="font-weight:700">1.Data security:</span> How the
            data is protected, especially transaction data
          </p>
          <p>
            2.Policy updates: How users will be notified of changes to the
            policy
          </p>
          <p>
            3.User rights: What rights users have over their data, and how to
            exercise them
          </p>
          <p>
            4.Data sharing: Whether and with whom the data is shared, and for
            what purposes
          </p>
          <p>
            5.Contact information: How users can contact the site for
            privacy-related questions, complaints, or customer support
          </p>
          <p>
            6.Remarketing: Whether and how the site uses remarketing or
            retargeting practices
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
