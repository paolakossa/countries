import { useParams, useNavigate } from "react-router-dom";
import { Button, Row, Col } from "reactstrap";
import { useEffect, useState } from "react";
import Country from "../../models/Country";
import Menu from "../../components/Menu";

const CountriesPageDatails = () => {
  const { cca3 } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${cca3}`)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]));
  }, [cca3]);

  if (!country) return <div>Loading...</div>;

  return (
    <>
      <Menu />
      <div className="ms-0 ms-md-5">
        <Button
          onClick={() => navigate(-1)}
          className="dark-border mb-4 ms-4 border-0 shadow mb-5 bg-body-tertiary text-very-dark-blue-text btn-size fs-7"
        >
          ← Back
        </Button>
      </div>
      <div className="mt-4 ms-0 ms-md-5">
        <Row className="ms-0 ms-md-4 d-flex flex-column flex-md-row align-items-center">
          <Col md={5} className="mb-4 mb-md-0">
            <div className="me-0 me-md-4">
              <img
                src={country.flags.png}
                alt={country.name.common}
                className="w-100"
              />
            </div>
          </Col>
          <Col md={7}>
            <div className="text-very-dark-blue-text ms-4 dark text-center text-md-start">
              <Row className="align-items-center flex-column flex-md-row">
                <Col className="mb-4 mb-md-0">
                  <div className="mb-4">
                    <span className="fs-6 fw-bolder">
                      {country.name.common}
                    </span>
                  </div>
                  <div>
                    <span className="fs-7 fw-semibold">Native Name:</span>{" "}
                    <span className="fs-7 fw-light">
                      {Object.values(country.name.nativeName)[0].common}
                    </span>
                  </div>
                  <div>
                    <span className="fs-7 fw-semibold">Population:</span>{" "}
                    <span className="fs-7 fw-light">
                      {country.population.toLocaleString()}
                    </span>
                  </div>
                  <div>
                    <span className="fs-7 fw-semibold">Region:</span>{" "}
                    <span className="fs-7 fw-light">{country.region}</span>
                  </div>
                  <div>
                    <span className="fs-7 fw-semibold">Sub Region:</span>{" "}
                    <span className="fs-7 fw-light">{country.subregion}</span>
                  </div>
                  <div>
                    <span className="fs-7 fw-semibold">Capital:</span>{" "}
                    <span className="fs-7 fw-light">
                      {country.capital?.[0]}
                    </span>
                  </div>
                </Col>
                <Col>
                  <div className="mt-4">
                    <span className="fs-7 fw-semibold">Top Level Domain:</span>{" "}
                    <span className="fs-7 fw-light">
                      {country.tld?.join(", ")}
                    </span>
                  </div>
                  <div>
                    <span className="fs-7 fw-semibold">Currencies:</span>{" "}
                    <span className="fs-7 fw-light">
                      {Object.values(country.currencies)
                        .map((c) => c.name)
                        .join(", ")}
                    </span>
                  </div>
                  <div>
                    <span className="fs-7 fw-semibold">Languages:</span>{" "}
                    <span className="fs-7 fw-light">
                      {Object.values(country.languages).join(", ")}
                    </span>
                  </div>
                </Col>
              </Row>

              <div className="mt-5">
                <span className="fs-7 fw-semibold">Border Countries:</span>{" "}
                {country.borders?.length ? (
                  country.borders.map((border, index) => (
                    <span
                      key={index}
                      className="border-0 shadow mb-5 bg-body-tertiary text-very-dark-blue-text btn-size fs-7 me-2 dark-border"
                    >
                      {border.toLocaleLowerCase()}
                    </span>
                  ))
                ) : (
                  <span className="border-0 shadow mb-5 bg-body-tertiary text-very-dark-blue-text btn-size fs-7 dark-border">
                    None
                  </span>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CountriesPageDatails;
