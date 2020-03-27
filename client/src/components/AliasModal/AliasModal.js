import React from 'react';
import { Modal, Button } from 'react-materialize';
import '../AliasModal/styles.css';

function AliasModal(props) {
    const modifiedAliases = props.aliases;
    const sortAliases = modifiedAliases.sort();
    const joinAliases = sortAliases.join(", ");

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