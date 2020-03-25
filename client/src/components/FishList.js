import React from "react";
import { Button, Icon } from 'react-materialize';
import API from "../utils/API";

function FishList(props) {
    const { fish } = props;

    const handleAqFishSave = (fish_id) => {
        API.saveAqueryum({
            fish_id: fish_id,
        }).then(function (data) {
            window.location.replace("/aqueryum/create");
        }).catch(function (err) {
            console.log(err);
        });
    }

    return (
        <tr>
            <td>
                <strong><a key={fish._id} href={`/fish/${fish._id}`}>{fish.aliases[0]}</a></strong>
            </td>
            <td>
                {fish.maxSizeCM}
            </td>
            <td>
                {fish.type}
            </td>
            <td>
                <Button
                    className="green"
                    floating
                    icon={<Icon>save</Icon>}
                    node="button"
                    waves="light"
                    onClick={() => handleAqFishSave(fish._id)}
                />
            </td>
        </tr>
    );
}

export default FishList;