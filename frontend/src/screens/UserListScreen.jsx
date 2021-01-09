import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../actions/userActions";
import Loader from "../components/Loader";

const UserListScreen = () => {
    const dispatch = useDispatch();
    const { loading, users, error } = useSelector((state) => state.userList);
    useEffect(() => {
        dispatch(listUsers());
    }, [dispatch]);
    const deleteHandler = (id) => {};
    return (
        <React.Fragment>
            <h1>Users</h1>
            {loading ? (
                <Loader />
            ) : error ? (
                <Alert variant="danger">{error}</Alert>
            ) : (
                <Table striped hover responsive bordered className="table-sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ADMIN</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users &&
                            users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>
                                        <a href={`mailto:${user.email}`}>
                                            {user.email}
                                        </a>
                                    </td>
                                    <td>
                                        {user.isAdmin ? (
                                            <i className="fas fa-check text-success"></i>
                                        ) : (
                                            <i className="fas fa-times text-danger"></i>
                                        )}
                                    </td>
                                    <td>
                                        <LinkContainer
                                            to={`/admin/user/${user._id}/edit`}
                                        >
                                            <Button
                                                variant="info"
                                                className="btn-sm"
                                            >
                                                <i class="fas fa-edit"></i>
                                            </Button>
                                        </LinkContainer>
                                        <Button
                                            variant="danger"
                                            className="btn-sm"
                                            onClick={() =>
                                                deleteHandler(user._id)
                                            }
                                        >
                                            <i class="fas fa-trash"></i>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
            )}
        </React.Fragment>
    );
};

export default UserListScreen;