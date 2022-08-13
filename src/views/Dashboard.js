import React from "react";
import ChartistGraph from "react-chartist";
import {Link} from "react-router-dom";
import './Cards.css';
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Dashboard() {
  return (
    
      <Container fluid>
        {/* <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Utility</p>
                      <Card.Title as="h4">Snu Share</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  <a href = 'https://snu-file-share-client.herokuapp.com/' target='_blank'><button>Go To App</button></a>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-light-3 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Social</p>
                      <Card.Title as="h4">Snu LinkedIn</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  <a href = 'https://snu-linkedin.herokuapp.com/' target='_blank'><button>Go To App</button></a>
                  
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Coding</p>
                      <Card.Title as="h4">Snu Code</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                  <a href = 'https://github.com/devyansh3/Snu-code-collaborator/tree/master' target='_blank'><button>Go To App</button></a>
                  
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Fun</p>
                      <Card.Title as="h4">Netflix</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  <a href = 'https://netflix-f9eea.web.app/' target='_blank'><button>Go To App</button></a>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row> */}
        <div class="container py-3">
  {/* <div class="title h1 text-center">Horizontal cards - Bootstrap 4</div> */}
  {/* <!-- Card Start --> */}
  <div class="card">
    <div class="row ">

      <div class="col-md-7 px-3">
        <div class="card-block px-6">
          <h4 class="card-title">Snu Share </h4>
          <p class="card-text mt-3">
           A file sharing app that lets users share via a link or email and also download it
          </p>
          <p class="card-text">Made for usage, commonly searched for. Fork, like and use it. Just move the carousel div above the col containing the text for left alignment of images</p>
          <br></br>
          <a href="#" class="mt-auto btn btn-primary  ">Go to app</a>
        </div>
      </div>
      {/* <!-- Carousel start --> */}
      <div class="col-md-5">
        <div id="CarouselTest" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#CarouselTest" data-slide-to="0" class="active"></li>
            <li data-target="#CarouselTest" data-slide-to="1"></li>
            <li data-target="#CarouselTest" data-slide-to="2"></li>

          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block" src="https://picsum.photos/450/300?image=1072" alt=""/>
            </div>
            <div class="carousel-item">
              <img class="d-block" src="https://picsum.photos/450/300?image=855" alt=""/>
            </div>
            <div class="carousel-item">
              <img class="d-block" src="https://picsum.photos/450/300?image=355" alt=""/>
            </div>
            <a class="carousel-control-prev" href="#CarouselTest" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
            <a class="carousel-control-next" href="#CarouselTest" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
          </div>
        </div>
      </div>
      {/* <!-- End of carousel --> */}
    </div>
  </div>
  {/* <!-- End of card --> */}

</div>

<div class="container">
  <div class="card float-left">
    <div class="row ">

      <div class="col-sm-7">
        <div class="card-block">
        <h4 class="card-title">Snu Linkedin</h4>

          {/* <!--           <h4 class="card-title">Small card</h4> --> */}
          <p className="mt-3">Change around the content for awsomenes</p>
          <a href="#" class="btn btn-primary btn-sm">Go to app</a>
        </div>
      </div>

      <div class="col-sm-5">
        <img class="d-block w-100" src="https://picsum.photos/150?image=380" alt=""/>
      </div>
    </div>
  </div>

 
    <div class="card float-right">
      <div class="row">
        <div class="col-sm-5">
          <img class="d-block w-100" src="https://picsum.photos/150?image=641" alt=""/>
        </div>
        <div class="col-sm-7">
          <div class="card-block">
        <h4 class="card-title">Snu Code Collab</h4>
          <p className="mt-3">Change around the content for awsomenes</p>
            
            <br></br>
            <a href="#" class="btn btn-primary btn-sm float-right">Souce code</a>
          </div>
        </div>
 
      </div>
    </div>
  </div>
 
 <br></br>
 
      </Container>
    
  );
}

export default Dashboard;
