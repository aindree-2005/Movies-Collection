import React from "react";
import { Card, Button } from "antd";

import Scam from '../../images/scam.jpg';
import SacredGames from '../../images/SacredGames.jpg';

const BollywoodWeb = () => {
  return (
    <>
      {/* Card 1 */}
      <Card>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img
              src={Scam}
              alt="Image"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Scam</h3>
            <p>
             Born in Khanapur in Karnataka, Telgi became the mastermind behind 
             one of the most ingenious schemes in Indian history that spread across
              multiple states and shook the entire country.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button type="primary">Contributed by Vikhyat Singh</Button>
            </div>
          </div>
        </div>
      </Card>
        {/* CARD 2 */}
        <Card>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                    <img
                        src={SacredGames}
                        alt="Image"
                        style={{ maxWidth: "100%", height: "150px" }}
                    />
                </div>
                <div style={{ flex: 6 }}>
                    <h3>Sacred Games</h3>
                    <p>
                        When police officer Sartaj Singh receives an anonymous tip
                        about the location of criminal overlord Ganesh Gaitonde,
                        he embarks on a chase around Mumbai in what becomes a
                        dangerous cat-and-mouse game.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <a
                            href='https://github.com/aeyazadil'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button type="primary">Contributed by Aeyaz Adil</Button>
                        </a>
                    </div>
                </div>
            </div>
        </Card>
    </>
  )
};

export default BollywoodWeb;
