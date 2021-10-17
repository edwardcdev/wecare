import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Modal, ModalHeader, ModalFooter, ModalBody} from "reactstrap";

import { getLoggedInUser } from "../../helpers/authUtils";
import { getClients } from "../../redux/actions";
import Loader from "../../components/Loader";
import { format, parseISO } from "date-fns";
import { Table, Divider, Button, Input } from "antd";
import "antd/dist/antd.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfLabelDocument } from "../../components/PdfLabelDocument";

const { Search } = Input;

const columns = [
  {
    title: "",
    width: 40,
    dataIndex: "checked",
    render: value => (<input type="checkbox" style={{width: 16, height: 16}} />)
  },
  {
    title: "Name",
    dataIndex: "nricName",
    key: "name",
    render: (value, record) => `${value} (${record.preferredName})`,
    sorter: (a, b) => {
      return a.nricName.length - b.nricName.length;
    }
  },
  {
    title: "Contact",
    dataIndex: "contact",
    key: "contact"
  },
  {
    title: "Birth Date",
    dataIndex: "dob",
    key: "dob",
    sorter: (a, b) => {
      return new Date(b.dob) - new Date(a.dob);
    },
    render: value => {
      if (value) {
        return format(parseISO(value), "yyyy/MM/dd");
      }
      return null;
    }
  },
  {
    title: "Next Followup Date",
    key: "tags",
    dataIndex: "nextFollowUpDate",
    sorter: (a, b) => {
      return new Date(b.dob) - new Date(a.dob);
    },
    render: value => {
      if (value) {
        return format(parseISO(value), "yyyy/MM/dd");
      }
      return null;
    }
  },
  {
    title: "Action",
    key: "action",
    render: (value, record) => (
      <span>
        <Link to={`/clients/${record._id}/view`}>View</Link>
        <Divider type="vertical" />
        <Link to={`/clients/${record._id}/Edit`}>Edit</Link>
      </span>
    )
  }
];

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: getLoggedInUser(),
      key: '',
      readyPDF: true,
      printLable: false
    };
  }

  componentDidMount() {
    this.props.getClients();

    this.setState({ readyPDF: false });
    setTimeout(()=>{
      this.setState({ readyPDF: true });
    }, 3);
  }

  toggleLabel() {
    this.setState(prevState => ({
      printLabel: !prevState.printLabel
    }));
  }

  handleChange(value) {
    this.props.getClients(value);
  }

  render() {
    let pdfButton;
    
  if (this.state.readyPDF) {
    pdfButton = (<PDFDownloadLink
      document={<PdfLabelDocument />}
      fileName="Label.pdf"
    >
      <Button type="primary" ghost style={{'margin': 10}}>&nbsp;&nbsp;&nbsp;Print&nbsp;&nbsp;&nbsp;</Button>
    </PDFDownloadLink>)
    }else {
      pdfButton = <Button type="primary" ghost>&nbsp;&nbsp;&nbsp;Print&nbsp;&nbsp;&nbsp;</Button>
    }

    return (
      <React.Fragment>
        <div className="">
          {/* preloader */}
          {this.props.loading && <Loader />}
          <Row>
            <Col>
              <div className="page-title-box">
              <Row>
                  <Col lg={6}>
                    <h4 className="page-title">Clients</h4>
                  </Col>
                  <Col lg={6} className="mt-lg-3 mt-md-0 text-right">
                    <Search
                      placeholder=""
                      style={{ width: 200, 'marginRight': 20 }}
                      onSearch={this.handleChange.bind(this)}
                      allowClear
                    >
                    </Search>
                    <Button type="primary" ghost onClick={() => this.toggleLabel()} style={{'marginRight': 10}}>
                      Label Printing
                    </Button>
                    <Modal
                      size="lg"
                      isOpen={this.state.printLabel}
                      toggle={() => this.toggleLabel()}
                    >
                      <ModalHeader>Modal heading</ModalHeader>
                      <ModalBody>Woohoo, you're reading this text in a modal!</ModalBody>
                      <ModalFooter>
                        {pdfButton}
                        <Button type="primary" ghost onClick={() => this.toggleLabel()}>
                          Close
                        </Button>
                      </ModalFooter>
                    </Modal>
                    
                    <Link to="/clients/add">
                      <Button type="primary" ghost>
                        Add Client
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <Table
                columns={columns}
                rowKey="_id"
                dataSource={this.props.clients}
              />
              {/* <Card>
                <CardBody>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Birth Date</th>
                        <th>Next Followup Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.clients.map((client, i) => (
                        <tr key={i}>
                          <td>
                            {client.nricName} ({client.preferredName})
                          </td>
                          <td>{client.contact}</td>
                          <td>
                            {client.dob &&
                              format(parseISO(client.dob), "yyyy/MM/dd")}
                          </td>
                          <td>
                            {client.nextFollowUpDate}
                          </td>
                          <td>
                            <Link to={`/clients/${client._id}/view`}>View</Link>
                          </td>
                          
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardBody>
              </Card>*/}
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { clients, loading, error } = state.User;
  return { clients, loading, error };
};

export default connect(
  mapStateToProps,
  { getClients }
)(Clients);
