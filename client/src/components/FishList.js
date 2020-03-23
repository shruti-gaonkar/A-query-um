import React from "react";

function FishList(props) {
    const { fish } = props;

    return (
        <tr>
            <td>
                <strong><a key={fish._id} href={`/fish/${fish._id}`}>{fish.aliases[0]}</a></strong>
            </td>
            <td>
                {fish.scientificName}
            </td>
            <td>
                {fish.type}
            </td>
        </tr>
    );
}

export default FishList;