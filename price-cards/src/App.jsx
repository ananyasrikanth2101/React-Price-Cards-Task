import React from "react";
import "./App.css";

const pricingData = [
  {
    plan: "FREE",
    price: "$0/month",
    features: [
      { name: "Single User", available: true },
      { name: "50GB Storage", available: true },
      { name: "Unlimited Public Projects", available: true },
      { name: "Community Access", available: true },
      { name: "Unlimited Private Projects", available: false },
      { name: "Dedicated Phone Support", available: false },
      { name: "Free Subdomain", available: false },
      { name: "Monthly Status Reports", available: false },
    ],
  },
  {
    plan: "PLUS",
    price: "$9/month",
    features: [
      { name: "5 Users", available: true },
      { name: "50GB Storage", available: true },
      { name: "Unlimited Public Projects", available: true },
      { name: "Community Access", available: true },
      { name: "Unlimited Private Projects", available: true },
      { name: "Dedicated Phone Support", available: true },
      { name: "Free Subdomain", available: true },
      { name: "Monthly Status Reports", available: false },
    ],
  },
  {
    plan: "PRO",
    price: "$49/month",
    features: [
      { name: "Unlimited Users", available: true },
      { name: "50GB Storage", available: true },
      { name: "Unlimited Public Projects", available: true },
      { name: "Community Access", available: true },
      { name: "Unlimited Private Projects", available: true },
      { name: "Dedicated Phone Support", available: true },
      { name: "Free Subdomain", available: true },
      { name: "Monthly Status Reports", available: true },
    ],
  },
];

const PricingCard = ({ plan, price, features }) => {
  return (
    <>
      <div className="card">
        <h3>{plan}</h3>
        <h4>{price}</h4>
        <hr className="divider" />
        <ul>
          {features.map((feature, index) => (
            <li
              key={index}
              className={feature.available ? "available" : "unavailable"}
            >
              {feature.available ? "✓" : "✗"} {feature.name}
            </li>
          ))}
        </ul>
        <button>BUTTON</button>
      </div>
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <h1 className="title">React Price Card Task</h1>
      <div className="card-container">
        {pricingData.map((card, index) => (
          <PricingCard
            key={index}
            plan={card.plan}
            price={card.price}
            features={card.features}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
