import React, { Component } from "react";
import { withAuth } from "../AuthContext";

export class Profile extends Component {

    render() {
        return (
            <p>
                Profile.
            </p>
        );
    }
}

export const ProfileWithAuth = withAuth(Profile);
