import React from "react";
import {CommunityLayout} from "../../layouts/community-layout";
import {KugsBanner} from "../../blocks/community/kugs-banner/kugs-banner";
import userGroupsDataRaw from "../../data/user-groups.yml";
const userGroupsData = userGroupsDataRaw as UserGroupsData;

function UserGroups() {
    return (
        <CommunityLayout title={"Kotlin User Groups"}>
            <div className={"ktl-container"}>
                <KugsBanner title={"Kotlin User Groups (KUGs)"}>
                    A Kotlin User Group (or “KUG”) is a community of people who come together
                    to share their programming experience involving Kotlin and its ecosystem.
                </KugsBanner>
                {userGroupsData.map((item) => (
                    <div key={item.anchorId}>{item.section}</div>
                ))}
            </div>
        </CommunityLayout>
    );
}

export default UserGroups;