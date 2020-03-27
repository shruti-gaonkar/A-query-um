import React from 'react';
import { Modal, Button } from 'react-materialize';
import '../AliasModal/styles.css';

function AliasModal(props) {
    console.log("these are the aliases passed through to AliasModal", props.aliases);
    const modifiedAliases = props.aliases;
    console.log("these are modifiedAliases", modifiedAliases);
    const sortAliases = modifiedAliases.sort();
    console.log("this is the sorted aliases", sortAliases);
    const joinAliases = sortAliases.join(", ");
    console.log("these are the joined aliases", joinAliases);

    return (
        <Modal
            actions={[
                <Button flat modal="close" node="button" waves="green">Close</Button>
            ]}
            bottomSheet={false}
            fixedFooter={false}
            header="Aliases"
            id="modal-3"
            options={{
                dismissible: true,
                endingTop: '10%',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: '4%'
            }}
            trigger={<p className="blue-text aliases-hover"><strong>Display Aliases</strong></p>}
        >
            <p>
                {joinAliases}
            </p>

        </Modal>
    );
}

export default AliasModal;