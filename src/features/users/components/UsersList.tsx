import React from 'react';
import {Authorization, ROLES} from "@/lib/authorization";

export const UsersList = () => {
    return (
        <div>
            <Authorization
                forbiddenFallback={<div>Only admin can view this.</div>}
                allowedRoles={[ROLES.ADMIN]}
            >
                <UsersList/>
            </Authorization>
        </div>
    );
};