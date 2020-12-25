import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    Alert,
    Row,
    Col,
    Image,
    ListGroup,
    Card,
    Button,
} from "react-bootstrap";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import { listProductDetails } from "../actions/productActions";

const ProductScreen = ({ match }) => {
    const dispatch = useDispatch();
    const { loading, product, errors } = useSelector(
        (state) => state.productDetails
    );
    useEffect(() => {
        dispatch(listProductDetails(match.params.id));
    }, [match, dispatch]);
    return (
        <React.Fragment>
            <Link className="btn btn-dark my-3" to="/">
                <i class="fas fa-chevron-left mx-1"></i>Go Back
            </Link>
            {loading ? (
                <Loader />
            ) : errors ? (
                <Alert variant="danger">{errors}</Alert>
            ) : (
                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid />
                    </Col>
                    <Col md={3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h2>{product.name}</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating
                                    value={product.rating}
                                    text={`${product.numReviews} reviews`}
                                />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Price: {`$${product.price}`}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Description: {product.description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price:</Col>
                                        <Col>
                                            <strong>{`$${product.price}`}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col>
                                            <strong>
                                                {product.countInStock > 0 ? (
                                                    <span className="text-success">
                                                        In stock
                                                    </span>
                                                ) : (
                                                    <span className="text-danger">
                                                        Out of stock
                                                    </span>
                                                )}
                                            </strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button
                                        className="btn btn-dark btn-block"
                                        type="button"
                                        disabled={!(product.countInStock > 0)}
                                    >
                                        Add to cart
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            )}
        </React.Fragment>
    );
};

export default ProductScreen;
