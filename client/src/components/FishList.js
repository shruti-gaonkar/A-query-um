import React, { useState } from "react";
import { Button, Icon } from 'react-materialize';
import API from "../utils/API";
import AliasModal from '../components/AliasModal/AliasModal';

function FishList(props) {
    const { fish, loggedIn, disableFlag } = props;

    const [commonName, setCommonName] = useState(fish.aliases[0]);
    // state to check if the save button has to be disabled on load for the fish record
    const [disableSave, setDisableSave] = useState(disableFlag);

    const handleAqFishSave = (fish_id) => {
        API.saveAqueryum({
            fish_id: fish_id,
        }).then(function (data) {
            setDisableSave(true);
        }).catch(function (err) {
            console.log(err);
        });
    }

    return (
        <tr>
            <td>
                <strong><a key={fish._id} href={`/fish/${fish._id}`}>{commonName}</a></strong>
            </td>
            <td>
                {fish.scientificName}
            </td>
            <td>
                <AliasModal aliases={fish.aliases} />
            </td>
            <td className="hide-on-small-only">
                {fish.type}
            </td>
            <td>
                <Button
                    className="green"
                    floating
                    small
                    icon={<Icon>save</Icon>}
                    node="button"
                    waves="light"
                    disabled={(loggedIn && !disableSave) ? false : true}
                    onClick={() => handleAqFishSave(fish._id)}
                />
            </td>
        </tr>
    );
}

export default FishList;