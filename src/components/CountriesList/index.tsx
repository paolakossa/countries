import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import useController from "./_presenters/useController/useController";
import Country from "../../models/Country";

type CountriesListProps = {
  countries: Country[];
};

const CountryList = ({ countries }: CountriesListProps) => {
  const {
    currentPage,
    totalPages,
    paginatedCountries,
    setCurrentPage,
    handleCountryClick,
  } = useController({ countries });

  return (
    <div>
      <Row>
        {paginatedCountries.map((country) => (
          <Col key={country.cca3} md={3} sm={6} className="mb-5">
            <Card
              className="text-very-dark-blue-text h-100 border-0 shadow-sm mb-5 bg-body-tertiary rounded mx-4 card-hover"
              onClick={() => handleCountryClick(country.cca3)}
            >
              <CardImg
                top
                src={country.flags.svg}
                alt={country.name.common}
                className="mb-2 object-fit-cover card-image"
              />
              <CardBody>
                <CardTitle className="fw-bolder fs-7">
                  {country.name.common}
                </CardTitle>
                <CardText>
                  <span className="fw-semibold">Population:</span>{" "}
                  <span className="fw-light">
                    {country.population.toLocaleString()}
                  </span>{" "}
                  <br />
                  <span className="fw-semibold">Region:</span>{" "}
                  <span className="fw-light">{country.region}</span> <br />
                  <span className="fw-semibold">Capital:</span>{" "}
                  <span className="fw-light">{country.capital}</span>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination className="d-flex justify-content-center mt-4 flex-wrap d-none d-xl-block">
        <PaginationItem disabled={currentPage === 1}>
          <PaginationLink
            previous
            onClick={() => setCurrentPage(currentPage - 1)}
          />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, i) => (
          <PaginationItem key={i} active={i + 1 === currentPage}>
            <PaginationLink onClick={() => setCurrentPage(i + 1)}>
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem disabled={currentPage === totalPages}>
          <PaginationLink
            next
            onClick={() => setCurrentPage(currentPage + 1)}
          />
        </PaginationItem>
      </Pagination>
    </div>
  );
};

export default CountryList;
