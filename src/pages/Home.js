import React from "react";

import { Table, Container, ToggleButton, Button } from "react-bootstrap";

const tourData = [
  { date: "JUL16", location: "DETROIT, MI", stage: "DTE ENERGY MUSIC THEATRE" },
  { date: "JUL19", location: "TORONTO, ON", stage: "BUDWEISER STAGE" },
  { date: "JUL16", location: "BRISTOW, VA", stage: "JIGGY LUBE LIVE" },
  { date: "JUL16", location: "PHOENIX, AZ", stage: "AK-CHIN PAVILION" },
  { date: "JUL16", location: "LASVEGAS, NV", stage: "T-MOBILE ARENA" },
  { date: "JUL16", location: "CONCORD, CA", stage: "CONCORD PAVILION" },
];

const HomePage = () => {
  return (
    <>
      <Container className="text-center bg-secondary m-0 me-0 py-3" fluid>
        <ToggleButton
          variant="outline-info"
          size="lg"
          className="rounded-0 text-white"
        >
          Get our Latest Album
        </ToggleButton>
      </Container>
      <Container className="text-center bg-secondary m-0 me-0 py-3" fluid>
        <ToggleButton
          variant="outline-info"
          size="lg"
          className="rounded-circle"
        >
          ►
        </ToggleButton>
      </Container>
      <Container className="text-center mt-4" style={{ maxWidth: "900px" }}>
        <h1 className="my-3 mb-4">TOURS</h1>
        <Table>
          <tbody>
            {tourData.map((data) => (
              <tr style={{ borderBottom: "1px solid black" }} key={data.location}>
                <td className="fw-bold">{data.date}</td>
                <td>{data.location}</td>
                <td>{data.stage}</td>
                <td>
                  <Button variant="info" className="text-white px-5 py-1">
                    BUY TICKETS
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default HomePage;
